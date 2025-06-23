export interface GrammarExplanation {
  concept: string;
  difficulty: string;
  explanation: string;
  rules: string[];
  examples: Array<{
    spanish: string;
    english: string;
    explanation?: string;
  }>;
  commonMistakes?: string[];
  tips?: string[];
}

export const grammarExplanations: Record<string, GrammarExplanation> = {
  present_tense: {
    concept: "Present Tense",
    difficulty: "beginner",
    explanation: "The present tense in Spanish is used to describe actions happening now, habitual actions, and general truths.",
    rules: [
      "Regular -ar verbs: drop -ar and add -o, -as, -a, -amos, -áis, -an",
      "Regular -er verbs: drop -er and add -o, -es, -e, -emos, -éis, -en",
      "Regular -ir verbs: drop -ir and add -o, -es, -e, -imos, -ís, -en"
    ],
    examples: [
      {
        spanish: "Yo hablo español.",
        english: "I speak Spanish.",
        explanation: "Regular -ar verb conjugation for 'yo'"
      },
      {
        spanish: "Ella come una manzana.",
        english: "She eats an apple.",
        explanation: "Regular -er verb conjugation for 'ella'"
      },
      {
        spanish: "Nosotros vivimos en Madrid.",
        english: "We live in Madrid.",
        explanation: "Regular -ir verb conjugation for 'nosotros'"
      }
    ],
    commonMistakes: [
      "Forgetting to change the verb ending",
      "Using English word order with Spanish verbs"
    ],
    tips: [
      "Practice with regular verbs first before moving to irregular ones",
      "Remember that Spanish doesn't always need subject pronouns"
    ]
  },

  ser_vs_estar: {
    concept: "Ser vs Estar",
    difficulty: "intermediate",
    explanation: "Both 'ser' and 'estar' mean 'to be' in English, but they are used in different contexts in Spanish.",
    rules: [
      "SER: Used for permanent characteristics, identity, origin, time, and definitions",
      "ESTAR: Used for temporary states, location, ongoing actions, and emotions"
    ],
    examples: [
      {
        spanish: "Soy médico.",
        english: "I am a doctor.",
        explanation: "SER - permanent profession/identity"
      },
      {
        spanish: "Estoy cansado.",
        english: "I am tired.",
        explanation: "ESTAR - temporary state"
      },
      {
        spanish: "La fiesta es en mi casa.",
        english: "The party is at my house.",
        explanation: "SER - event location (where it takes place)"
      },
      {
        spanish: "Estoy en mi casa.",
        english: "I am at my house.",
        explanation: "ESTAR - physical location of a person"
      }
    ],
    commonMistakes: [
      "Using SER for temporary states",
      "Using ESTAR for permanent characteristics",
      "Confusing location rules between events and people"
    ],
    tips: [
      "Remember DOCTOR for SER: Description, Occupation, Characteristic, Time, Origin, Relationship",
      "Remember PLACE for ESTAR: Position, Location, Action, Condition, Emotion"
    ]
  },

  verb_tense: {
    concept: "Verb Tenses Overview",
    difficulty: "intermediate",
    explanation: "Spanish has multiple tenses to express different time relationships and aspects of actions.",
    rules: [
      "Present: Actions happening now or habitually",
      "Preterite: Completed actions in the past",
      "Imperfect: Ongoing or repeated actions in the past",
      "Future: Actions that will happen",
      "Conditional: Actions that would happen under certain conditions"
    ],
    examples: [
      {
        spanish: "Hablo español todos los días.",
        english: "I speak Spanish every day.",
        explanation: "Present - habitual action"
      },
      {
        spanish: "Ayer hablé con mi madre.",
        english: "Yesterday I spoke with my mother.",
        explanation: "Preterite - completed past action"
      },
      {
        spanish: "Cuando era niño, hablaba francés.",
        english: "When I was a child, I used to speak French.",
        explanation: "Imperfect - repeated past action"
      },
      {
        spanish: "Mañana hablaré con el jefe.",
        english: "Tomorrow I will speak with the boss.",
        explanation: "Future - action that will happen"
      }
    ],
    tips: [
      "Start with present tense and gradually add other tenses",
      "Pay attention to time expressions that indicate which tense to use",
      "Practice irregular verbs separately as they don't follow standard patterns"
    ]
  },

  gender_and_articles: {
    concept: "Gender and Articles",
    difficulty: "beginner",
    explanation: "Spanish nouns have gender (masculine or feminine) and articles must agree with the noun's gender.",
    rules: [
      "Masculine nouns typically end in -o and use el/un",
      "Feminine nouns typically end in -a and use la/una",
      "Some nouns ending in -e can be either gender",
      "Articles must match the gender and number of the noun"
    ],
    examples: [
      {
        spanish: "el libro",
        english: "the book",
        explanation: "Masculine noun with definite article"
      },
      {
        spanish: "la mesa",
        english: "the table",
        explanation: "Feminine noun with definite article"
      },
      {
        spanish: "un problema",
        english: "a problem",
        explanation: "Masculine noun ending in -a (exception)"
      },
      {
        spanish: "una mano",
        english: "a hand",
        explanation: "Feminine noun ending in -o (exception)"
      }
    ],
    commonMistakes: [
      "Assuming all nouns ending in -a are feminine",
      "Forgetting to change articles when nouns become plural",
      "Using wrong article with irregular gender nouns"
    ],
    tips: [
      "Learn nouns with their articles to remember gender",
      "Be aware of common exceptions to gender rules",
      "Practice with both definite (el/la) and indefinite (un/una) articles"
    ]
  },

  subjunctive_mood: {
    concept: "Subjunctive Mood",
    difficulty: "advanced",
    explanation: "The subjunctive mood expresses doubt, emotion, desire, or hypothetical situations rather than facts.",
    rules: [
      "Used after expressions of doubt, emotion, desire, or recommendation",
      "Often appears in dependent clauses introduced by 'que'",
      "Has different forms for present and past subjunctive",
      "Triggered by specific verbs and expressions"
    ],
    examples: [
      {
        spanish: "Espero que tengas un buen día.",
        english: "I hope you have a good day.",
        explanation: "Subjunctive after expression of desire/hope"
      },
      {
        spanish: "Dudo que venga mañana.",
        english: "I doubt he/she will come tomorrow.",
        explanation: "Subjunctive after expression of doubt"
      },
      {
        spanish: "Es importante que estudies.",
        english: "It's important that you study.",
        explanation: "Subjunctive after impersonal expression"
      }
    ],
    commonMistakes: [
      "Using indicative instead of subjunctive after trigger expressions",
      "Forgetting irregular subjunctive forms",
      "Overusing subjunctive in contexts that don't require it"
    ],
    tips: [
      "Learn common trigger phrases that require subjunctive",
      "Practice irregular subjunctive forms separately",
      "Start with present subjunctive before moving to past forms"
    ]
  }
};