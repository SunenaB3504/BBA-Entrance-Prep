// src/data/english/usage-mastery.data.js
// CUET 2024 COMPLIANT: VALIDATED AGAINST DATA_SCHEMA.md

export const usageMasteryData = {
    subject: "English",
    chapter: "Grammar & Usage Mastery",
    examTags: ["CUET"],
    flashcards: [
        { id: "usg-fc-001", term: "Subject-Verb Agreement", definition: "Singular subjects take singular verbs; plural subjects take plural verbs.", formula: null, example: "The team is (not are) ready." },
        { id: "usg-fc-002", term: "Collective Nouns", definition: "Usually singular if acting as a unit; plural if acting as individuals.", formula: null, example: "The jury has reached a verdict." },
        { id: "usg-fc-003", term: "Neither/Nor Either/Or", definition: "Verb agrees with the subject closest to it.", formula: null, example: "Neither the teacher nor the students were there." },
        { id: "usg-fc-004", term: "Fixed Prepositions", definition: "Verbs/Adjectives that follow a specific preposition.", formula: null, example: "Abide by, Absolve from, Accede to." },
        { id: "usg-fc-005", term: "Articles with Proper Nouns", definition: "Generally no article, but 'The' is used for mountains ranges, rivers, oceans.", formula: null, example: "The Himalayas; The Ganges." }
    ],
    questions: [
        /* TOPIC: Subject-Verb Agreement */
        {
            id: "usg-q-001", type: "mcq", difficulty: "medium",
            question: "Choose the correct verb: 'Neither the manager nor the employees ________ aware of the new policy.'",
            options: ["was", "were", "is", "has"],
            correct: 1,
            explanation: "In 'neither/nor' constructions, the verb agrees with the closer subject ('employees'), which is plural.",
            examTags: ["CUET"]
        },
        {
            id: "usg-q-002", type: "mcq", difficulty: "medium",
            question: "Select the sentence with correct S-V agreement:",
            options: [
                "The number of students are increasing.",
                "A number of students is participating.",
                "The number of students is increasing.",
                "A number of student are participating."
            ],
            correct: 2,
            explanation: "'The number of' is followed by a singular verb, while 'A number of' is followed by a plural verb.",
            examTags: ["CUET"]
        },
        {
            id: "usg-q-003", type: "mcq", difficulty: "hard",
            question: "Choose the correct form: 'Each of the participants ________ given a certificate of merit.'",
            options: ["were", "was", "are", "have been"],
            correct: 1,
            explanation: "'Each of', 'Either of', and 'Neither of' always take a singular verb.",
            examTags: ["CUET"]
        },
        /* TOPIC: Articles & Determiners */
        {
            id: "usg-q-004", type: "mcq", difficulty: "medium",
            question: "Fill in the blank: 'He is ________ honest man, but he has ________ very unique perspective.'",
            options: ["a / a", "an / a", "an / an", "a / an"],
            correct: 1,
            explanation: "'Honest' starts with a vowel sound (silent h), so 'an'. 'Unique' starts with a consonant sound ('yu'), so 'a'.",
            examTags: ["CUET"]
        },
        /* TOPIC: Prepositions (Fixed & Contextual) */
        {
            id: "usg-q-005", type: "mcq", difficulty: "medium",
            question: "Choose the correct preposition: 'She has been suffering ________ fever ________ Monday.'",
            options: ["from / since", "with / from", "by / for", "of / since"],
            correct: 0,
            explanation: "'Suffer from' is a fixed prepositional phrase. 'Since' is used for a point in time (Monday).",
            examTags: ["CUET"]
        },
        {
            id: "usg-q-006", type: "mcq", difficulty: "hard",
            question: "Which preposition correctly completes the sentence: 'The judge absolved him ________ all the charges.'",
            options: ["with", "of", "from", "for"],
            correct: 2,
            explanation: "One is 'absolved FROM' something (legal/sin context).",
            examTags: ["CUET"]
        },
        /* TOPIC: Spelling Correction (CUET Specific) */
        {
            id: "usg-q-007", type: "mcq", difficulty: "medium",
            question: "Choose the correctly spelled word:",
            options: ["Accomodation", "Accommodation", "Acomodation", "Accomodatoin"],
            correct: 1,
            explanation: "'Accommodation' has double 'c' and double 'm'.",
            examTags: ["CUET"]
        },
        {
            id: "usg-q-008", type: "mcq", difficulty: "hard",
            question: "Identify the correctly spelled word:",
            options: ["Maneuver", "Manuever", "Maneuvour", "Manueover"],
            correct: 0,
            explanation: "'Maneuver' (or 'Manoeuvre' in UK English) is the correct spelling.",
            examTags: ["CUET"]
        },
        {
            id: "usg-q-009", type: "mcq", difficulty: "hard",
            question: "Choose the correct spelling:",
            options: ["Questionaire", "Questionnaire", "Quetionner", "Questionair"],
            correct: 1,
            explanation: "'Questionnaire' features a double 'n'.",
            examTags: ["CUET"]
        },
        /* TOPIC: Mixed Grammar Error Detection */
        {
            id: "usg-q-010", type: "mcq", difficulty: "hard",
            question: "Identify the part containing an error: '(A) Having finished his work / (B) he went to the market / (C) to bought some vegetables / (D) No error.'",
            options: ["A", "B", "C", "D"],
            correct: 2,
            explanation: "Part (C) is incorrect. The infinitive 'to' should be followed by the base form of the verb, so it should be 'to buy' instead of 'to bought'.",
            examTags: ["CUET"]
        }
    ]
};
