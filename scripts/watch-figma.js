#!/usr/bin/env node

const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

class FigmaWatcher {
  constructor() {
    this.isWatching = false;
    this.lastUpdate = null;
    this.updateQueue = [];
    this.isProcessing = false;
  }

  async start() {
    console.log(chalk.blue('🔍 Starting PHAROS Figma watcher...'));
    
    try {
      // Check if we have the required dependencies
      await this.checkDependencies();
      
      // Start watching for changes
      await this.watchFigmaFile();
      
      // Set up file system watcher for local changes
      this.watchLocalFiles();
      
      console.log(chalk.green('✓ PHAROS Figma watcher started successfully'));
      console.log(chalk.blue('📱 Watching for Figma changes and local updates...'));
      
    } catch (error) {
      console.error(chalk.red('✗ Failed to start Figma watcher:'), error);
      process.exit(1);
    }
  }

  async checkDependencies() {
    const requiredPackages = ['chokidar'];
    
    for (const pkg of requiredPackages) {
      try {
        require.resolve(pkg);
      } catch (error) {
        console.log(chalk.yellow(`⚠️  Installing required package: ${pkg}`));
        await this.installPackage(pkg);
      }
    }
  }

  async installPackage(packageName) {
    return new Promise((resolve, reject) => {
      exec(`npm install ${packageName}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  async watchFigmaFile() {
    // Set up polling to check Figma file for changes
    const pollInterval = 5 * 60 * 1000; // 5 minutes
    
    setInterval(async () => {
      try {
        await this.checkFigmaForUpdates();
      } catch (error) {
        console.error(chalk.red('✗ Error checking Figma for updates:'), error);
      }
    }, pollInterval);
    
    // Initial check
    await this.checkFigmaForUpdates();
  }

  async checkFigmaForUpdates() {
    try {
      console.log(chalk.blue('🔍 Checking Figma for updates...'));
      
      // Get current file info from Figma API
      const FigmaAPIClient = require('./figma-api-client');
      const client = new FigmaAPIClient(process.env.FIGMA_ACCESS_TOKEN);
      
      const fileKey = process.env.FIGMA_FILE_KEY || 'rjisK4g6zXD9hH7BXMXviI';
      const fileInfo = await client.getFile(fileKey);
      
      const currentVersion = fileInfo.version;
      const lastVersion = await this.getLastKnownVersion();
      
      if (currentVersion !== lastVersion) {
        console.log(chalk.green(`✓ Figma file updated! Version: ${lastVersion} → ${currentVersion}`));
        
        // Queue the update
        this.queueUpdate('figma', { version: currentVersion, timestamp: new Date() });
        
        // Save new version
        await this.saveLastKnownVersion(currentVersion);
      } else {
        console.log(chalk.gray('✓ Figma file unchanged'));
      }
      
    } catch (error) {
      console.error(chalk.red('✗ Failed to check Figma for updates:'), error);
    }
  }

  async getLastKnownVersion() {
    const versionFile = path.join(__dirname, '../.figma-version');
    
    try {
      if (await fs.pathExists(versionFile)) {
        return await fs.readFile(versionFile, 'utf8');
      }
    } catch (error) {
      console.error(chalk.yellow('⚠️  Could not read version file:', error.message));
    }
    
    return null;
  }

  async saveLastKnownVersion(version) {
    const versionFile = path.join(__dirname, '../.figma-version');
    
    try {
      await fs.writeFile(versionFile, version);
    } catch (error) {
      console.error(chalk.yellow('⚠️  Could not save version file:', error.message));
    }
  }

  watchLocalFiles() {
    const watchPaths = [
      path.join(__dirname, '../tokens/json'),
      path.join(__dirname, '../components/pharos'),
      path.join(__dirname, '../tokens/css')
    ];
    
    const watcher = chokidar.watch(watchPaths, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });
    
    watcher
      .on('add', (filePath) => this.handleFileChange('add', filePath))
      .on('change', (filePath) => this.handleFileChange('change', filePath))
      .on('unlink', (filePath) => this.handleFileChange('unlink', filePath))
      .on('error', (error) => console.error(chalk.red('✗ File watcher error:'), error));
    
    console.log(chalk.blue('📁 Watching local files for changes...'));
  }

  handleFileChange(event, filePath) {
    const relativePath = path.relative(process.cwd(), filePath);
    
    console.log(chalk.blue(`📝 File ${event}: ${relativePath}`));
    
    // Queue file change for processing
    this.queueUpdate('file', { 
      event, 
      path: relativePath, 
      timestamp: new Date() 
    });
  }

  queueUpdate(type, data) {
    this.updateQueue.push({ type, data, timestamp: new Date() });
    
    // Process queue if not already processing
    if (!this.isProcessing) {
      this.processUpdateQueue();
    }
  }

  async processUpdateQueue() {
    if (this.isProcessing || this.updateQueue.length === 0) {
      return;
    }
    
    this.isProcessing = true;
    
    try {
      while (this.updateQueue.length > 0) {
        const update = this.updateQueue.shift();
        
        if (update.type === 'figma') {
          await this.processFigmaUpdate(update.data);
        } else if (update.type === 'file') {
          await this.processFileUpdate(update.data);
        }
      }
    } catch (error) {
      console.error(chalk.red('✗ Error processing update queue:'), error);
    } finally {
      this.isProcessing = false;
      
      // Check if more updates came in while processing
      if (this.updateQueue.length > 0) {
        setTimeout(() => this.processUpdateQueue(), 1000);
      }
    }
  }

  async processFigmaUpdate(data) {
    console.log(chalk.blue('🔄 Processing Figma update...'));
    
    try {
      // Extract new tokens
      console.log(chalk.blue('📊 Extracting updated PHAROS tokens...'));
      await this.runCommand('npm run pharos-tokens');
      
      // Generate updated CSS
      console.log(chalk.blue('🎨 Generating updated PHAROS CSS...'));
      await this.runCommand('npm run pharos-css');
      
      // Generate updated JSON
      console.log(chalk.blue('📄 Generating updated PHAROS JSON...'));
      await this.runCommand('npm run generate-json');
      
      console.log(chalk.green('✓ PHAROS design system updated successfully'));
      
      // Notify about the update
      this.notifyUpdate('figma', data);
      
    } catch (error) {
      console.error(chalk.red('✗ Failed to process Figma update:'), error);
    }
  }

  async processFileUpdate(data) {
    console.log(chalk.blue(`🔄 Processing file update: ${data.path}`));
    
    try {
      // Determine what needs to be regenerated based on file type
      if (data.path.includes('tokens/json')) {
        console.log(chalk.blue('🎨 Regenerating PHAROS CSS from updated tokens...'));
        await this.runCommand('npm run pharos-css');
      } else if (data.path.includes('components/pharos')) {
        console.log(chalk.blue('🔧 PHAROS component updated, checking for token dependencies...'));
        // Could add component-specific logic here
      }
      
      console.log(chalk.green('✓ File update processed successfully'));
      
    } catch (error) {
      console.error(chalk.red('✗ Failed to process file update:'), error);
    }
  }

  async runCommand(command) {
    return new Promise((resolve, reject) => {
      console.log(chalk.gray(`$ ${command}`));
      
      exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
        if (error) {
          console.error(chalk.red(`✗ Command failed: ${command}`));
          console.error(chalk.red(stderr));
          reject(error);
        } else {
          if (stdout) console.log(chalk.gray(stdout));
          resolve(stdout);
        }
      });
    });
  }

  notifyUpdate(type, data) {
    const timestamp = new Date().toLocaleTimeString();
    
    if (type === 'figma') {
      console.log(chalk.green(`\n🎉 PHAROS Design System Updated!`));
      console.log(chalk.green(`   Figma version: ${data.version}`));
      console.log(chalk.green(`   Updated at: ${timestamp}`));
      console.log(chalk.blue(`   Your design tokens and CSS have been automatically updated!`));
    }
    
    // Could add more notification methods here (email, Slack, etc.)
  }

  async stop() {
    console.log(chalk.blue('🛑 Stopping PHAROS Figma watcher...'));
    this.isWatching = false;
    process.exit(0);
  }
}

// Main execution
async function main() {
  const watcher = new FigmaWatcher();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => watcher.stop());
  process.on('SIGTERM', () => watcher.stop());
  
  try {
    await watcher.start();
  } catch (error) {
    console.error(chalk.red('✗ Failed to start watcher:'), error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = FigmaWatcher;



