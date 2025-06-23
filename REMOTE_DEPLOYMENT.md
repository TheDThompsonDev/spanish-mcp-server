# Remote Deployment Guide - Spanish MCP Server

This guide covers how to deploy your Spanish MCP Server so it can be used by others, not just locally.

## Deployment Options

### Option 1: NPM Package (Recommended)

This allows anyone to install and use your MCP server globally.

#### Step 1: Prepare for NPM Publishing

```bash
# Update package.json with your details
npm login
```

#### Step 2: Publish to NPM

```bash
# Build the project
npm run build

# Publish to NPM
npm publish
```

#### Step 3: Users Install Globally

```bash
# Anyone can now install your server
npm install -g spanish-mcp-server

# Use in Claude Desktop config:
{
  "mcpServers": {
    "spanish-learning": {
      "command": "spanish-mcp-server",
      "args": []
    }
  }
}
```

### Option 2: GitHub + Direct Installation

Share via GitHub for easy installation.

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/spanish-mcp-server.git
git push -u origin main
```

#### Step 2: Users Install from GitHub

```bash
# Install directly from GitHub
npm install -g git+https://github.com/yourusername/spanish-mcp-server.git

# Or clone and install locally
git clone https://github.com/yourusername/spanish-mcp-server.git
cd spanish-mcp-server
npm install
npm run build
npm link
```

### Option 3: Docker Container

Deploy as a containerized service.

#### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source and build
COPY . .
RUN npm run build

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S mcp -u 1001
USER mcp

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

#### Step 2: Build and Deploy

```bash
# Build Docker image
docker build -t spanish-mcp-server .

# Run locally
docker run -p 3000:3000 spanish-mcp-server

# Deploy to Docker Hub
docker tag spanish-mcp-server yourusername/spanish-mcp-server
docker push yourusername/spanish-mcp-server
```

### Option 4: Cloud Deployment (Heroku/Railway/Render)

Deploy to cloud platforms for HTTP access.

#### Heroku Deployment

```bash
# Install Heroku CLI
# Create Procfile
echo "web: node dist/index.js" > Procfile

# Deploy
heroku create spanish-mcp-server
git push heroku main
```

#### Railway Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

### Option 5: MCP Server Registry

Submit to official MCP registries (when available).

## Making Your Server Distributable

### 1. Update package.json

```json
{
  "name": "spanish-mcp-server",
  "version": "1.0.0",
  "description": "MCP server for Spanish language learning",
  "main": "dist/index.js",
  "bin": {
    "spanish-mcp-server": "dist/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/spanish-mcp-server.git"
  },
  "keywords": [
    "mcp",
    "spanish",
    "language-learning",
    "translation",
    "education"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT"
}
```

### 2. Add Shebang to Built File

The built `dist/index.js` needs a shebang for CLI usage:

```javascript
#!/usr/bin/env node
// ... rest of your code
```

### 3. Create Installation Script

```bash
#!/bin/bash
# install.sh
echo "Installing Spanish MCP Server..."
npm install -g spanish-mcp-server
echo "Installation complete!"
echo ""
echo "Add this to your Claude Desktop config:"
echo '{
  "mcpServers": {
    "spanish-learning": {
      "command": "spanish-mcp-server",
      "args": []
    }
  }
}'
```

## Distribution Methods

### Method 1: NPM Registry (Public)

**Pros:**
- Easy installation with `npm install -g`
- Automatic updates
- Version management
- Wide distribution

**Cons:**
- Requires NPM account
- Public package

### Method 2: GitHub Releases

**Pros:**
- Free hosting
- Version control
- Issue tracking
- Documentation

**Cons:**
- Users need to build locally
- More complex installation

### Method 3: Pre-built Binaries

Create platform-specific executables:

```bash
# Install pkg for binary creation
npm install -g pkg

# Create binaries
pkg package.json --out-path dist-bin

# Creates:
# dist-bin/spanish-mcp-server-win.exe
# dist-bin/spanish-mcp-server-macos
# dist-bin/spanish-mcp-server-linux
```

## User Installation Instructions

Once deployed, users can install your server:

### From NPM:
```bash
npm install -g spanish-mcp-server
```

### From GitHub:
```bash
npm install -g git+https://github.com/yourusername/spanish-mcp-server.git
```

### From Docker:
```bash
docker pull yourusername/spanish-mcp-server
docker run -d --name spanish-mcp yourusername/spanish-mcp-server
```

## Configuration for Users

Users add this to their Claude Desktop config:

```json
{
  "mcpServers": {
    "spanish-learning": {
      "command": "spanish-mcp-server",
      "args": [],
      "env": {}
    }
  }
}
```

## Next Steps

1. **Choose your deployment method** (NPM recommended)
2. **Set up repository** (GitHub for open source)
3. **Publish your package**
4. **Create documentation** for users
5. **Share with the community**

Your Spanish MCP Server will then be available for anyone to install and use with their Claude Desktop!