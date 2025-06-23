#!/usr/bin/env node 
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ErrorCode, ListResourcesRequestSchema, ListToolsRequestSchema, McpError, ReadResourceRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { vocabularyData } from './data/vocabulary.js';
import { verbConjugations } from './data/conjugations.js';
import { grammarExplanations } from './data/grammar.js';
import { culturalContext } from './data/cultural.js';
const server = new Server({
    name: 'spanish-learning-server',
    version: '1.0.0',
}, {
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
        resources: [
            {
                uri: 'spanish://vocabulary/greeting',
                name: 'Spanish Vocabulary: Greeting',
                description: 'Vocabulary words in the greeting category with examples, pronunciation, and cultural notes',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://vocabulary/verb',
                name: 'Spanish Vocabulary: Verb',
                description: 'Vocabulary words in the verb category with examples, pronunciation, and cultural notes',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://vocabulary/food',
                name: 'Spanish Vocabulary: Food',
                description: 'Vocabulary words in the food category with examples, pronunciation, and cultural notes',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://grammar/verb_tense',
                name: 'Spanish Grammar: Verb tense',
                description: 'Grammar concepts in verb tense with rules, examples, and practice tips',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://conjugation/hablar',
                name: 'Conjugation: hablar',
                description: 'Complete conjugation patterns for the verb "hablar"',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://conjugation/comer',
                name: 'Conjugation: comer',
                description: 'Complete conjugation patterns for the verb "comer"',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://mixed/beginner',
                name: 'Beginner Spanish Learning Pack',
                description: 'Comprehensive beginner-level vocabulary and grammar content',
                mimeType: 'application/json',
            },
            {
                uri: 'spanish://mixed/intermediate',
                name: 'Intermediate Spanish Learning Pack',
                description: 'Intermediate-level vocabulary and grammar content',
                mimeType: 'application/json',
            },
        ],
    };
});
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;
    if (uri.startsWith('spanish://vocabulary/')) {
        const topic = uri.split('/')[2];
        const words = vocabularyData.filter((word) => word.topic === topic);
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify({ topic, words }, null, 2),
                },
            ],
        };
    }
    if (uri.startsWith('spanish://grammar/')) {
        const concept = uri.split('/')[2];
        const grammar = grammarExplanations[concept];
        if (!grammar) {
            throw new McpError(ErrorCode.InvalidRequest, `Grammar concept not found: ${concept}`);
        }
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(grammar, null, 2),
                },
            ],
        };
    }
    if (uri.startsWith('spanish://conjugation/')) {
        const verb = uri.split('/')[2];
        const conjugation = verbConjugations[verb];
        if (!conjugation) {
            throw new McpError(ErrorCode.InvalidRequest, `Verb conjugation not found: ${verb}`);
        }
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify({ verb, ...conjugation }, null, 2),
                },
            ],
        };
    }
    if (uri.startsWith('spanish://mixed/')) {
        const level = uri.split('/')[2];
        const levelWords = vocabularyData.filter((word) => word.difficulty === level);
        const relevantGrammar = Object.entries(grammarExplanations)
            .filter(([_, grammar]) => grammar.difficulty === level)
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify({
                        level,
                        vocabulary: levelWords,
                        grammar: relevantGrammar,
                    }, null, 2),
                },
            ],
        };
    }
    throw new McpError(ErrorCode.InvalidRequest, `Unknown resource: ${uri}`);
});
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: 'translate_word',
                description: 'Translate a Spanish word to English or vice versa with detailed information',
                inputSchema: {
                    type: 'object',
                    properties: {
                        word: {
                            type: 'string',
                            description: 'The word to translate',
                        },
                        direction: {
                            type: 'string',
                            enum: ['spanish_to_english', 'english_to_spanish'],
                            description: 'Translation direction',
                        },
                    },
                    required: ['word', 'direction'],
                },
            },
            {
                name: 'conjugate_verb',
                description: 'Get conjugation patterns for a Spanish verb',
                inputSchema: {
                    type: 'object',
                    properties: {
                        verb: {
                            type: 'string',
                            description: 'The Spanish verb to conjugate',
                        },
                        tense: {
                            type: 'string',
                            enum: ['present', 'preterite', 'imperfect', 'future', 'conditional'],
                            description: 'The tense to conjugate (optional, defaults to present)',
                        },
                    },
                    required: ['verb'],
                },
            },
            {
                name: 'get_vocabulary_by_topic',
                description: 'Get vocabulary words for a specific topic or category',
                inputSchema: {
                    type: 'object',
                    properties: {
                        topic: {
                            type: 'string',
                            description: 'The topic/category (e.g., \'greeting\', \'food\', \'verb\')',
                        },
                        difficulty: {
                            type: 'string',
                            enum: ['beginner', 'intermediate', 'advanced'],
                            description: 'Filter by difficulty level (optional)',
                        },
                        limit: {
                            type: 'number',
                            description: 'Maximum number of words to return (default: 10)',
                        },
                    },
                    required: ['topic'],
                },
            },
            {
                name: 'explain_grammar',
                description: 'Get detailed explanation of a Spanish grammar concept',
                inputSchema: {
                    type: 'object',
                    properties: {
                        concept: {
                            type: 'string',
                            description: 'The grammar concept to explain (e.g., \'present tense\', \'ser vs estar\')',
                        },
                    },
                    required: ['concept'],
                },
            },
            {
                name: 'get_cultural_context',
                description: 'Get cultural context and usage notes for Spanish words or phrases',
                inputSchema: {
                    type: 'object',
                    properties: {
                        word_or_phrase: {
                            type: 'string',
                            description: 'The Spanish word or phrase to get cultural context for',
                        },
                    },
                    required: ['word_or_phrase'],
                },
            },
            {
                name: 'track_progress',
                description: 'Track learning progress for a user',
                inputSchema: {
                    type: 'object',
                    properties: {
                        user_id: {
                            type: 'string',
                            description: 'User identifier',
                        },
                        activity: {
                            type: 'string',
                            description: 'Learning activity completed',
                        },
                        score: {
                            type: 'number',
                            description: 'Score or accuracy (0-100)',
                        },
                    },
                    required: ['user_id', 'activity'],
                },
            },
        ],
    };
});
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    if (!name) {
        throw new McpError(ErrorCode.InvalidRequest, 'Tool name is required');
    }
    if (!args) {
        throw new McpError(ErrorCode.InvalidRequest, 'Tool arguments are required');
    }
    switch (name) {
        case 'translate_word': {
            const { word, direction } = args;
            if (!word || typeof word !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'Word parameter is required and must be a string');
            }
            if (!direction || !['spanish_to_english', 'english_to_spanish'].includes(direction)) {
                throw new McpError(ErrorCode.InvalidRequest, 'Direction must be either "spanish_to_english" or "english_to_spanish"');
            }
            const isSpanishToEnglish = direction === 'spanish_to_english';
            const searchField = isSpanishToEnglish ? 'spanish' : 'english';
            const resultField = isSpanishToEnglish ? 'english' : 'spanish';
            const vocabWord = vocabularyData.find((v) => v[searchField].toLowerCase() === word.toLowerCase());
            const result = vocabWord ? {
                word: vocabWord[searchField],
                translation: vocabWord[resultField],
                partOfSpeech: vocabWord.partOfSpeech,
                pronunciation: vocabWord.pronunciation,
                examples: [vocabWord.example],
                difficulty: vocabWord.difficulty,
            } : {
                word,
                translation: `Translation not found for "${word}"`,
            };
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(result, null, 2),
                    },
                ],
            };
        }
        case 'conjugate_verb': {
            const { verb, tense = 'present' } = args;
            if (!verb || typeof verb !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'Verb parameter is required and must be a string');
            }
            const validTenses = ['present', 'preterite', 'imperfect', 'future', 'conditional'];
            if (!validTenses.includes(tense)) {
                throw new McpError(ErrorCode.InvalidRequest, `Tense must be one of: ${validTenses.join(', ')}`);
            }
            const conjugation = verbConjugations[verb.toLowerCase()];
            if (!conjugation) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Conjugation not found for verb "${verb}"`,
                        },
                    ],
                };
            }
            const tenseConjugation = conjugation[tense];
            if (!tenseConjugation) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Tense "${tense}" not available for verb "${verb}"`,
                        },
                    ],
                };
            }
            const result = {
                verb,
                tense,
                conjugations: tenseConjugation,
            };
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(result, null, 2),
                    },
                ],
            };
        }
        case 'get_vocabulary_by_topic': {
            const { topic, difficulty, limit = 10 } = args;
            if (!topic || typeof topic !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'Topic parameter is required and must be a string');
            }
            if (difficulty && !['beginner', 'intermediate', 'advanced'].includes(difficulty)) {
                throw new McpError(ErrorCode.InvalidRequest, 'Difficulty must be one of: beginner, intermediate, advanced');
            }
            if (typeof limit !== 'number' || limit < 1 || limit > 100) {
                throw new McpError(ErrorCode.InvalidRequest, 'Limit must be a number between 1 and 100');
            }
            let words = vocabularyData.filter((word) => word.topic === topic);
            if (difficulty) {
                words = words.filter((word) => word.difficulty === difficulty);
            }
            words = words.slice(0, limit);
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify({
                            topic,
                            difficulty: difficulty || 'all',
                            count: words.length,
                            words,
                        }, null, 2),
                    },
                ],
            };
        }
        case 'explain_grammar': {
            const { concept } = args;
            if (!concept || typeof concept !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'Concept parameter is required and must be a string');
            }
            const explanation = grammarExplanations[concept.toLowerCase().replace(/\s+/g, '_')];
            if (!explanation) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Grammar explanation not found for "${concept}"`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(explanation, null, 2),
                    },
                ],
            };
        }
        case 'get_cultural_context': {
            const { word_or_phrase } = args;
            if (!word_or_phrase || typeof word_or_phrase !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'word_or_phrase parameter is required and must be a string');
            }
            const context = culturalContext[word_or_phrase.toLowerCase()];
            if (!context) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Cultural context not found for "${word_or_phrase}"`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(context, null, 2),
                    },
                ],
            };
        }
        case 'track_progress': {
            const { user_id, activity, score } = args;
            if (!user_id || typeof user_id !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'user_id parameter is required and must be a string');
            }
            if (!activity || typeof activity !== 'string') {
                throw new McpError(ErrorCode.InvalidRequest, 'activity parameter is required and must be a string');
            }
            if (score !== undefined && (typeof score !== 'number' || score < 0 || score > 100)) {
                throw new McpError(ErrorCode.InvalidRequest, 'score must be a number between 0 and 100');
            }
            const progressEntry = {
                user_id,
                activity,
                score: score || 0,
                timestamp: new Date().toISOString(),
                status: 'recorded',
            };
            return {
                content: [
                    {
                        type: 'text',
                        text: JSON.stringify(progressEntry, null, 2),
                    },
                ],
            };
        }
        default:
            throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}
main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map