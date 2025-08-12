#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

class MCPClient {
  constructor() {
    this.process = null;
    this.messageId = 0;
    this.pendingRequests = new Map();
    this.connected = false;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      try {
        // Spawn the Figma MCP server process
        this.process = spawn('npx', ['-y', 'figma-mcp'], {
          stdio: ['pipe', 'pipe', 'pipe'],
          env: {
            ...process.env,
            FIGMA_ACCESS_TOKEN: process.env.FIGMA_ACCESS_TOKEN || '***REMOVED***'
          }
        });

        // Handle stdout for reading responses
        this.process.stdout.on('data', (data) => {
          this.handleResponse(data.toString());
        });

        // Handle stderr for errors
        this.process.stderr.on('data', (data) => {
          console.error(chalk.yellow('MCP Server stderr:'), data.toString());
        });

        // Handle process exit
        this.process.on('exit', (code) => {
          console.log(chalk.blue(`MCP Server exited with code ${code}`));
          this.connected = false;
        });

        // Wait a bit for the server to start
        setTimeout(() => {
          this.connected = true;
          console.log(chalk.green('✓ Connected to Figma MCP server'));
          resolve();
        }, 1000);

      } catch (error) {
        reject(error);
      }
    });
  }

  async sendRequest(method, params = {}) {
    if (!this.connected || !this.process) {
      throw new Error('MCP client not connected');
    }

    const id = ++this.messageId;
    const request = {
      jsonrpc: '2.0',
      id,
      method,
      params
    };

    return new Promise((resolve, reject) => {
      // Store the pending request
      this.pendingRequests.set(id, { resolve, reject });

      // Send the request to the MCP server
      this.process.stdin.write(JSON.stringify(request) + '\n');

      // Set a timeout for the request
      setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new Error(`Request ${id} timed out`));
        }
      }, 30000); // 30 second timeout
    });
  }

  handleResponse(data) {
    try {
      const lines = data.trim().split('\n');
      
      for (const line of lines) {
        if (!line.trim()) continue;
        
        const response = JSON.parse(line);
        
        if (response.id && this.pendingRequests.has(response.id)) {
          const { resolve, reject } = this.pendingRequests.get(response.id);
          this.pendingRequests.delete(response.id);
          
          if (response.error) {
            reject(new Error(response.error.message));
          } else {
            resolve(response.result);
          }
        }
      }
    } catch (error) {
      console.error(chalk.red('Error parsing MCP response:'), error);
    }
  }

  async disconnect() {
    if (this.process) {
      this.process.kill();
      this.process = null;
    }
    this.connected = false;
    console.log(chalk.green('✓ Disconnected from MCP server'));
  }

  // Figma-specific methods
  async getFile(fileKey) {
    return this.sendRequest('figma.getFile', { fileKey });
  }

  async getStyles(fileKey) {
    return this.sendRequest('figma.getStyles', { fileKey });
  }

  async getColorStyles(fileKey) {
    return this.sendRequest('figma.getColorStyles', { fileKey });
  }

  async getTextStyles(fileKey) {
    return this.sendRequest('figma.getTextStyles', { fileKey });
  }

  async getComponents(fileKey) {
    return this.sendRequest('figma.getComponents', { fileKey });
  }
}

module.exports = MCPClient;
