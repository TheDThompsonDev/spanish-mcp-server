# Adding Spanish MCP Server to Roo Code

## Method 1: Using the Built Server (Recommended)

Since your server is already built and working locally, you can add it directly to Roo Code.

### Step 1: Add MCP Server Configuration

In Roo Code, you need to configure your MCP server. The configuration should point to your local built server:

```json
{
  "name": "spanish-learning",
  "command": "node",
  "args": ["C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js"],
  "env": {}
}
```

### Step 2: Access MCP Settings in Roo Code

1. Look for MCP or Server settings in Roo Code
2. Add a new MCP server configuration
3. Use the configuration above

## Method 2: Using NPM Package

Alternatively, since you've published to NPM, you can install globally and use that:

```bash
npm install -g spanish-mcp-server@latest
```

Then configure in Roo Code:
```json
{
  "name": "spanish-learning", 
  "command": "spanish-mcp-server",
  "args": [],
  "env": {}
}
```

## Method 3: Direct Path Configuration

If Roo Code allows direct path configuration, use:

**Server Path**: `C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js`
**Server Type**: Node.js/JavaScript
**Arguments**: None required

## Testing the Connection

Once configured, you should be able to:

1. **Test Translation**: "Translate 'hola' from Spanish to English"
2. **Test Conjugation**: "Show me the present tense conjugation of 'hablar'"
3. **Test Vocabulary**: "Give me 5 beginner food vocabulary words in Spanish"

## Available Tools in Roo Code

Your server provides these tools:
- `translate_word` - Spanish ↔ English translation
- `conjugate_verb` - Verb conjugations across tenses
- `get_vocabulary_by_topic` - Vocabulary by category/difficulty
- `explain_grammar` - Grammar concept explanations
- `get_cultural_context` - Cultural usage notes
- `track_progress` - Learning progress tracking

## Available Resources

Your server also provides these resources:
- `spanish://vocabulary/greeting` - Greeting vocabulary
- `spanish://vocabulary/food` - Food vocabulary
- `spanish://vocabulary/verb` - Verb vocabulary
- `spanish://grammar/verb_tense` - Grammar explanations
- `spanish://conjugation/hablar` - Verb conjugations
- `spanish://mixed/beginner` - Beginner learning pack
- `spanish://mixed/intermediate` - Intermediate learning pack

## Troubleshooting

### Server Not Loading
1. Verify the path is correct: `C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js`
2. Ensure Node.js is accessible in PATH
3. Check that the dist folder exists and contains index.js
4. Restart Roo Code after configuration

### Permission Issues
1. Ensure the file has execute permissions
2. Try running the server manually first: `node dist/index.js`
3. Check Windows permissions on the file

### Testing Manually
You can test the server works by running:
```bash
cd C:/Users/danny/Documents/coding/spanish-mcp-server
node test-server.js
```

## Configuration Examples

### For Roo Code MCP Settings (JSON format):
```json
{
  "mcpServers": {
    "spanish-learning": {
      "command": "node",
      "args": ["C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

### For Roo Code UI Configuration:
- **Server Name**: spanish-learning
- **Command**: node
- **Arguments**: C:/Users/danny/Documents/coding/spanish-mcp-server/dist/index.js
- **Environment Variables**: (none needed)

Once configured, you'll be able to use all the Spanish learning features directly in your Roo Code conversations!