// src/data/english/literary-terms.data.js
// CUET 2024 COMPLIANT: VALIDATED AGAINST DATA_SCHEMA.md

export const literaryTermsData = {
    subject: "English",
    chapter: "Literary Aptitude & Figures of Speech",
    examTags: ["CUET"],
    flashcards: [
        { id: "lit-fc-001", term: "Simile", definition: "A comparison using 'like' or 'as'", formula: null, example: "He is as brave as a lion." },
        { id: "lit-fc-002", term: "Metaphor", definition: "A direct comparison without 'like' or 'as'", formula: null, example: "The world is a stage." },
        { id: "lit-fc-003", term: "Personification", definition: "Giving human qualities to non-human things", formula: null, example: "The wind whispered through the trees." },
        { id: "lit-fc-004", term: "Hyperbole", definition: "Exaggerated statements for effect", formula: null, example: "I've told you a million times." },
        { id: "lit-fc-005", term: "Oxymoron", definition: "Two contradictory terms appearing together", formula: null, example: "Deafening silence; Bittersweet." }
    ],
    questions: [
        /* TOPIC: Figures of Speech Identification */
        {
            id: "lit-q-001", type: "mcq", difficulty: "medium",
            question: "Identify the figure of speech in the sentence: 'The camel is the ship of the desert.'",
            options: ["Simile", "Metaphor", "Personification", "Apostrophe"],
            correct: 1,
            explanation: "This is a Metaphor as it directly compares a camel to a ship without using 'like' or 'as'.",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-002", type: "mcq", difficulty: "medium",
            question: "Which figure of speech is used here: 'O Death! Where is thy sting?'",
            options: ["Metaphor", "Oxymoron", "Apostrophe", "Simile"],
            correct: 2,
            explanation: "Apostrophe is a figure of speech in which someone absent or dead or something nonhuman is addressed as if it were alive and present and could reply.",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-003", type: "mcq", difficulty: "hard",
            question: "Identify the figure of speech: 'The furrow followed free.'",
            options: ["Onomatopoeia", "Alliteration", "Oxymoron", "Pun"],
            correct: 1,
            explanation: "Alliteration is the repetition of the same consonant sound at the beginning of closely connected words (the 'f' sound here).",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-004", type: "mcq", difficulty: "medium",
            question: "Identify the figure of speech: 'Why then, O brawling love! O loving hate!'",
            options: ["Oxymoron", "Hyperbole", "Simile", "Metaphor"],
            correct: 0,
            explanation: "Oxymoron uses two contradictory terms (brawling love, loving hate) together.",
            examTags: ["CUET"]
        },
        /* TOPIC: Tone Identification */
        {
            id: "lit-q-005", type: "mcq", difficulty: "medium",
            question: "Read the sentence: 'Oh great! Now I have to spend another hour fixing your mess.' What is the tone of the speaker?",
            options: ["Optimistic", "Sarcastic", "Objective", "Reverent"],
            correct: 1,
            explanation: "The speaker uses 'Oh great!' to mean the opposite, which indicates a sarcastic tone.",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-006", type: "mcq", difficulty: "hard",
            question: "Identify the tone: 'The scientific data clearly demonstrates a 15% increase in global temperatures over the last decade, necessitating urgent policy shifts.'",
            options: ["Sentimental", "Skeptical", "Analytical/Objective", "Nostalgic"],
            correct: 2,
            explanation: "The tone is analytical and objective as it relies on facts and data without emotional bias.",
            examTags: ["CUET"]
        },
        /* TOPIC: Literary Devices (Irony/Paradox) */
        {
            id: "lit-q-007", type: "mcq", difficulty: "hard",
            question: "A fire station burning down is an example of:",
            options: ["Verbal Irony", "Situational Irony", "Dramatic Irony", "Paradox"],
            correct: 1,
            explanation: "Situational Irony occurs when the outcome is the opposite of what was expected.",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-008", type: "mcq", difficulty: "hard",
            question: "Identify the literary device: 'I am a deeply superficial person.'",
            options: ["Irony", "Paradox", "Euphemism", "Metonymy"],
            correct: 1,
            explanation: "A paradox is a statement that seems self-contradictory but may reveal a deeper truth.",
            examTags: ["CUET"]
        },
        /* TOPIC: Match the Column (Figures of Speech) */
        {
            id: "lit-q-009", type: "mcq", difficulty: "hard",
            question: "Match Column A (Example) with Column B (Figure of Speech):\n(1) The moon veiled her face - (A) Simile\n(2) As busy as a bee - (B) Personification\n(3) Life is bittersweet - (C) Oxymoron\n(4) A sea of grief - (D) Metaphor",
            options: [
                "1-B, 2-A, 3-C, 4-D",
                "1-A, 2-B, 3-C, 4-D",
                "1-B, 2-D, 3-A, 4-C",
                "1-C, 2-A, 3-B, 4-D"
            ],
            correct: 0,
            explanation: "1-B (Personification), 2-A (Simile), 3-C (Oxymoron), 4-D (Metaphor).",
            examTags: ["CUET"]
        },
        {
            id: "lit-q-010", type: "mcq", difficulty: "medium",
            question: "Identify the figure of speech: 'The news was a dagger to his heart.'",
            options: ["Hyperbole", "Metaphor", "Simile", "Oxymoron"],
            correct: 1,
            explanation: "This is a direct comparison (news = dagger) characterizing it as a metaphor.",
            examTags: ["CUET"]
        }
    ]
};
