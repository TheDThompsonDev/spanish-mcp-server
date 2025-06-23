export interface CulturalContext {
  word: string;
  context: string;
  usage: string[];
  regions?: string[];
  alternatives?: Array<{
    word: string;
    region: string;
  }>;
  etiquette?: string[];
  examples: Array<{
    spanish: string;
    english: string;
    situation: string;
  }>;
}

export const culturalContext: Record<string, CulturalContext> = {
  "hola": {
    word: "hola",
    context: "Universal greeting used throughout the Spanish-speaking world. It's informal but appropriate in most situations.",
    usage: [
      "Can be used at any time of day",
      "Appropriate for both formal and informal situations",
      "Often accompanied by a handshake or kiss on the cheek"
    ],
    regions: ["All Spanish-speaking countries"],
    examples: [
      {
        spanish: "¡Hola! ¿Cómo estás?",
        english: "Hello! How are you?",
        situation: "Casual greeting between friends"
      },
      {
        spanish: "Hola, buenos días.",
        english: "Hello, good morning.",
        situation: "Polite greeting in a business setting"
      }
    ]
  },

  "sobremesa": {
    word: "sobremesa",
    context: "A uniquely Spanish and Latin American concept referring to the time spent at the table after a meal, talking and enjoying each other's company.",
    usage: [
      "Important social custom in Spanish culture",
      "Can last for hours, especially on weekends",
      "Shows the value placed on family and social relationships",
      "Often involves coffee, digestifs, or light conversation"
    ],
    regions: ["Spain", "Latin America"],
    etiquette: [
      "Don't rush to leave the table after eating",
      "Engage in conversation with other diners",
      "It's considered rude to immediately get up after finishing your meal"
    ],
    examples: [
      {
        spanish: "La sobremesa duró hasta las cinco de la tarde.",
        english: "The after-dinner conversation lasted until five in the afternoon.",
        situation: "Sunday family lunch"
      },
      {
        spanish: "Me encanta la sobremesa con mis amigos.",
        english: "I love the after-dinner conversation with my friends.",
        situation: "Dinner party with friends"
      }
    ]
  },

  "tú vs usted": {
    word: "tú vs usted",
    context: "Spanish has formal (usted) and informal (tú) ways of addressing people, which varies significantly by region and social context.",
    usage: [
      "Tú: Used with friends, family, children, peers",
      "Usted: Used with strangers, elders, authority figures, formal situations",
      "Regional variations exist - some countries use more tú, others more usted"
    ],
    regions: ["Varies by country"],
    alternatives: [
      {
        word: "vos",
        region: "Argentina, Uruguay, parts of Central America"
      }
    ],
    etiquette: [
      "When in doubt, use usted until invited to use tú",
      "In business, start with usted",
      "Follow the lead of the person you're speaking with"
    ],
    examples: [
      {
        spanish: "¿Cómo estás tú?",
        english: "How are you? (informal)",
        situation: "Speaking to a friend"
      },
      {
        spanish: "¿Cómo está usted?",
        english: "How are you? (formal)",
        situation: "Speaking to an elderly person or in business"
      }
    ]
  },

  "siesta": {
    word: "siesta",
    context: "Traditional afternoon rest period, especially common in Spain and some Latin American countries.",
    usage: [
      "Traditionally from 2-5 PM",
      "Many businesses close during this time",
      "Originally developed due to hot afternoon temperatures",
      "Less common in modern urban areas but still practiced in smaller towns"
    ],
    regions: ["Spain", "parts of Latin America"],
    etiquette: [
      "Respect siesta hours - avoid calling or visiting during this time",
      "Plan activities around siesta schedule",
      "Understand that dinner is typically later due to siesta"
    ],
    examples: [
      {
        spanish: "Las tiendas cierran para la siesta.",
        english: "The stores close for siesta.",
        situation: "Afternoon in a Spanish town"
      },
      {
        spanish: "Después de la siesta, vamos a pasear.",
        english: "After the siesta, we're going for a walk.",
        situation: "Planning afternoon activities"
      }
    ]
  },

  "buen provecho": {
    word: "buen provecho",
    context: "Expression used before or during meals, similar to 'enjoy your meal' in English.",
    usage: [
      "Said before starting to eat",
      "Can be said to others who are eating",
      "Shows politeness and good manners",
      "Common in restaurants and family settings"
    ],
    regions: ["Most Spanish-speaking countries"],
    alternatives: [
      {
        word: "que aproveche",
        region: "Spain"
      }
    ],
    examples: [
      {
        spanish: "¡Buen provecho!",
        english: "Enjoy your meal!",
        situation: "Before starting dinner with family"
      },
      {
        spanish: "Buen provecho, señores.",
        english: "Enjoy your meal, gentlemen.",
        situation: "Waiter speaking to restaurant customers"
      }
    ]
  },

  "paella": {
    word: "paella",
    context: "Traditional Spanish dish from Valencia, now popular worldwide but with strong cultural significance in Spain.",
    usage: [
      "Originally from Valencia region",
      "Traditional ingredients include rice, saffron, vegetables, and meat or seafood",
      "Cooked in a special wide, shallow pan called 'paellera'",
      "Often prepared for special occasions and family gatherings"
    ],
    regions: ["Valencia, Spain (origin)", "Popular throughout Spain and internationally"],
    etiquette: [
      "Traditional paella is eaten directly from the pan",
      "Don't ask for cheese to put on paella - it's considered inappropriate",
      "Respect regional variations and traditional recipes"
    ],
    examples: [
      {
        spanish: "Vamos a hacer paella para la fiesta.",
        english: "We're going to make paella for the party.",
        situation: "Planning a family celebration"
      },
      {
        spanish: "La paella valenciana es la receta original.",
        english: "Valencian paella is the original recipe.",
        situation: "Discussing traditional Spanish cuisine"
      }
    ]
  },

  "mañana": {
    word: "mañana",
    context: "While literally meaning 'tomorrow' or 'morning', it represents a cultural attitude toward time that's more relaxed than in many other cultures.",
    usage: [
      "Can mean 'tomorrow' or 'later' in a general sense",
      "Reflects a more relaxed attitude toward punctuality",
      "Not necessarily procrastination, but different time priorities",
      "Understanding this helps in business and social interactions"
    ],
    regions: ["Common throughout Spanish-speaking world"],
    etiquette: [
      "Don't take 'mañana' always literally",
      "Build buffer time into schedules",
      "Understand cultural differences in time perception",
      "Be patient with different approaches to punctuality"
    ],
    examples: [
      {
        spanish: "Lo hacemos mañana.",
        english: "We'll do it tomorrow (or later).",
        situation: "Postponing a non-urgent task"
      },
      {
        spanish: "Mañana por la mañana.",
        english: "Tomorrow morning.",
        situation: "Making specific plans"
      }
    ]
  }
};