// src/data/english/index.js
import { comprehensionData } from './comprehension.data.js';
import { grammarData } from './grammar.data.js';
import { vocabularyData } from './vocabulary.data.js';

export const englishData = {
    subject: "English",
    chapters: [
        comprehensionData,
        grammarData,
        vocabularyData
    ]
};

export {
    comprehensionData,
    grammarData,
    vocabularyData
};
