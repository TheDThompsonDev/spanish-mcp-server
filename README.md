# Spanish Learning MCP Server

A Model Context Protocol (MCP) server for Spanish language learning, providing comprehensive tools for vocabulary, grammar, verb conjugation, and cultural context.

## Features

### Tools
- **translate_word**: Translate Spanish ↔ English with detailed information
- **conjugate_verb**: Get verb conjugations across multiple tenses
- **get_vocabulary_by_topic**: Retrieve vocabulary by category and difficulty
- **explain_grammar**: Detailed grammar concept explanations
- **get_cultural_context**: Cultural usage and etiquette information
- **track_progress**: Learning progress tracking

### Resources
- Vocabulary collections by topic (greeting, food, verb)
- Grammar explanations (verb tenses, ser vs estar, etc.)
- Verb conjugation patterns (hablar, comer, ser, estar, etc.)
- Mixed learning packs by difficulty level

## Installation

```bash
npm install
npm run build
```

## Usage

### As MCP Server
The server runs via stdio and follows the MCP protocol:

```bash
npm start
```

### Available Tools

#### translate_word
```json
{
  "name": "translate_word",
  "arguments": {
    "word": "hola",
    "direction": "spanish_to_english"
  }
}
```

#### conjugate_verb
```json
{
  "name": "conjugate_verb",
  "arguments": {
    "verb": "hablar",
    "tense": "present"
  }
}
```

#### get_vocabulary_by_topic
```json
{
  "name": "get_vocabulary_by_topic",
  "arguments": {
    "topic": "greeting",
    "difficulty": "beginner",
    "limit": 10
  }
}
```

### Available Resources

- `spanish://vocabulary/greeting` - Greeting vocabulary
- `spanish://vocabulary/food` - Food vocabulary  
- `spanish://vocabulary/verb` - Verb vocabulary
- `spanish://grammar/verb_tense` - Verb tense explanations
- `spanish://conjugation/hablar` - Hablar conjugations
- `spanish://conjugation/comer` - Comer conjugations
- `spanish://mixed/beginner` - Beginner learning pack
- `spanish://mixed/intermediate` - Intermediate learning pack

## Data Structure

The server includes:
- **20+ vocabulary words** with pronunciation, examples, and cultural notes
- **8 common verbs** with complete conjugation patterns across 5 tenses
- **5 grammar concepts** with detailed explanations and examples
- **7 cultural context entries** with usage notes and etiquette

## Development

```bash
# Build
npm run build

# Development mode with watch
npm run dev

# Clean build artifacts
npm run clean

# Type checking
npm run lint
```

## Requirements

- Node.js >= 18
- TypeScript 5.5+
- @modelcontextprotocol/sdk ^0.6.0

## License

MIT