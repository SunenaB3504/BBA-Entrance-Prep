// src/data/english/index.js
import { comprehensionData } from './comprehension.data.js';
import { grammarAdvancedData } from './grammar-advanced.data.js';
import { vocabularyAdvancedData } from './vocabulary-advanced.data.js';

export const englishData = {
    subject: "English",
    chapters: [
        comprehensionData,
        grammarAdvancedData,
        vocabularyAdvancedData
    ]
};

export {
    comprehensionData,
    grammarAdvancedData,
    vocabularyAdvancedData
};
