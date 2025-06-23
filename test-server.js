// Quick test script for the Spanish MCP Server
import { spawn } from 'child_process';

const testServer = () => {
  console.log('Testing Spanish MCP Server...\n');
  
  const server = spawn('node', ['dist/index.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // Test 1: List tools
  const listToolsRequest = {
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/list',
    params: {}
  };

  server.stdin.write(JSON.stringify(listToolsRequest) + '\n');

  let output = '';
  server.stdout.on('data', (data) => {
    output += data.toString();
    
    try {
      const response = JSON.parse(output.trim());
      if (response.result && response.result.tools) {
        console.log('✅ Server is working!');
        console.log(`Found ${response.result.tools.length} tools:`);
        response.result.tools.forEach(tool => {
          console.log(`  - ${tool.name}: ${tool.description}`);
        });
        server.kill();
        process.exit(0);
      }
    } catch (e) {
    }
  });

  server.stderr.on('data', (data) => {
    console.error('Error:', data.toString());
  });

  setTimeout(() => {
    console.log('❌ Test timed out');
    server.kill();
    process.exit(1);
  }, 5000);
};

testServer();