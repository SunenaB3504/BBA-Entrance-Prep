// src/data/english/index.js
import { comprehensionData } from './comprehension.data.js';
import { grammarAdvancedData } from './grammar-advanced.data.js';
import { vocabularyAdvancedData } from './vocabulary-advanced.data.js';
import { literaryTermsData } from './literary-terms.data.js';
import { usageMasteryData } from './usage-mastery.data.js';

export const englishData = {
    subject: "English",
    chapters: [
        comprehensionData,
        grammarAdvancedData,
        vocabularyAdvancedData,
        literaryTermsData,
        usageMasteryData
    ]
};

export {
    comprehensionData,
    grammarAdvancedData,
    vocabularyAdvancedData,
    literaryTermsData,
    usageMasteryData
};
