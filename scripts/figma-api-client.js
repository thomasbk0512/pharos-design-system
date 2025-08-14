#!/usr/bin/env node

const https = require('https');
const chalk = require('chalk');

class FigmaAPIClient {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.baseURL = 'https://api.figma.com/v1';
  }

  async makeRequest(endpoint) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.figma.com',
        port: 443,
        path: `/v1${endpoint}`,
        method: 'GET',
        headers: {
          'X-Figma-Token': this.accessToken,
          'Content-Type': 'application/json'
        }
      };

      const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            if (res.statusCode === 200) {
              resolve(jsonData);
            } else {
              reject(new Error(`HTTP ${res.statusCode}: ${jsonData.message || 'Unknown error'}`));
            }
          } catch (error) {
            reject(new Error(`Failed to parse response: ${error.message}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.end();
    });
  }

  async getFile(fileKey) {
    return this.makeRequest(`/files/${fileKey}`);
  }

  async getFileStyles(fileKey) {
    return this.makeRequest(`/files/${fileKey}/styles`);
  }

  async getFileNodes(fileKey, nodeIds) {
    const nodeIdsParam = nodeIds.join(',');
    return this.makeRequest(`/files/${fileKey}/nodes?ids=${nodeIdsParam}`);
  }
}

module.exports = FigmaAPIClient;


