// src/data/english/index.js
import { comprehensionData } from './comprehension.data.js';
import { grammarAdvancedData } from './grammar-advanced.data.js';
import { vocabularyAdvancedData } from './vocabulary-advanced.data.js';
import { literaryTermsData } from './literary-terms.data.js';
import { usageMasteryData } from './usage-mastery.data.js';
import { mhCetComprehensionData } from './mh-cet-comprehension.data.js';
import { grammarData } from './grammar.data.js';
import { vocabularyData } from './vocabulary.data.js';

export const englishData = {
    subject: "English",
    chapters: [
        comprehensionData,
        grammarAdvancedData,
        vocabularyAdvancedData,
        literaryTermsData,
        usageMasteryData,
        mhCetComprehensionData,
        grammarData,
        vocabularyData
    ]
};

export {
    comprehensionData,
    grammarAdvancedData,
    vocabularyAdvancedData,
    literaryTermsData,
    usageMasteryData,
    mhCetComprehensionData,
    grammarData,
    vocabularyData
};
