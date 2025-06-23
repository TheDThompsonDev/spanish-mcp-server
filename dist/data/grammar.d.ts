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
export declare const grammarExplanations: Record<string, GrammarExplanation>;
//# sourceMappingURL=grammar.d.ts.map