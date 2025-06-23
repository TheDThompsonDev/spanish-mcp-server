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
export declare const culturalContext: Record<string, CulturalContext>;
//# sourceMappingURL=cultural.d.ts.map