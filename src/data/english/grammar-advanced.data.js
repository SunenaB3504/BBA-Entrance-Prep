// src/data/english/grammar-advanced.data.js
// CUET 2024 COMPLIANT: VALIDATED AGAINST DATA_SCHEMA.md

export const grammarAdvancedData = {
    subject: "English",
    chapter: "Grammar (Advanced)",
    examTags: ["CUET"],
    flashcards: [
        { id: "advg-fc-001", term: "Zero Conditional", definition: "Used for general truths and facts", formula: "If + present simple, present simple", example: "If you heat ice, it melts." },
        { id: "advg-fc-002", term: "First Conditional", definition: "Real possibilities in the present/future", formula: "If + present simple, will + base verb", example: "If it rains, I will stay home." },
        { id: "advg-fc-003", term: "Second Conditional", definition: "Hypothetical or unlikely situations", formula: "If + past simple, would + base verb", example: "If I won the lottery, I would travel." },
        { id: "advg-fc-004", term: "Third Conditional", definition: "Regrets or imaginary past situations", formula: "If + past perfect, would have + past participle", example: "If I had studied, I would have passed." },
        { id: "advg-fc-005", term: "Conjunctive Adverbs", definition: "Adverbs that join two independent clauses", formula: "Clause; however/therefore/nonetheless, Clause.", example: "He was tired; nevertheless, he continued." }
    ],
    questions: [
        /* TOPIC: Conditional Sentences */
        {
            id: "advg-q-001", type: "mcq", difficulty: "medium",
            question: "Choose the correct form to complete the sentence: 'If she ________ more time, she would have finished the project yesterday.'",
            options: ["has", "had", "had had", "will have"],
            correct: 2,
            explanation: "This is a Third Conditional sentence (hypothetical past). The correct structure is 'If + past perfect (had had), would have + past participle'.",
            examTags: ["CUET"]
        },
        {
            id: "advg-q-002", type: "mcq", difficulty: "medium",
            question: "Identify the type of conditional: 'If I were the Prime Minister, I would introduce new education reforms.'",
            options: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
            correct: 2,
            explanation: "This is a Second Conditional sentence (hypothetical present/future). It use 'If + past simple (were), would + base verb'.",
            examTags: ["CUET"]
        },
        /* TOPIC: Adverb Usage */
        {
            id: "advg-q-003", type: "mcq", difficulty: "hard",
            question: "Which of the following sentences uses the adverb 'rarely' correctly in terms of placement?",
            options: [
                "Rarely he goes to the cinema during the week.",
                "He goes rarely to the cinema during the week.",
                "He rarely goes to the cinema during the week.",
                "He goes to the cinema rarely during the week."
            ],
            correct: 2,
            explanation: "Adverbs of frequency (like rarely, often, always) usually go BEFORE the main verb but AFTER the auxiliary verb 'to be'.",
            examTags: ["CUET"]
        },
        /* TOPIC: Sentence Rearrangement (6-Part CUET Style) */
        {
            id: "advg-q-004", type: "mcq", difficulty: "hard",
            question: "Rearrange the following parts to form a coherent sentence:\n(A) to ensure that every student\n(B) the government has proposed\n(C) regardless of their socioeconomic background\n(D) a series of comprehensive digital reforms\n(E) can access high-quality educational resources\n(F) throughout the country.",
            options: [
                "B-D-A-E-C-F",
                "B-A-E-D-C-F",
                "D-B-A-E-F-C",
                "A-E-B-D-F-C"
            ],
            correct: 0,
            explanation: "The logical flow: (B) The government has proposed -> (D) a series of reforms -> (A) to ensure that every student -> (E) can access resources -> (C) regardless of background -> (F) throughout the country.",
            examTags: ["CUET"]
        },
        {
            id: "advg-q-005", type: "mcq", difficulty: "hard",
            question: "Rearrange the following parts to form a coherent sentence:\n(A) by the rapid advancement of artificial intelligence\n(B) the traditional workforce is\n(C) and the automation of routine tasks\n(D) currently undergoing\n(E) a profound transformation\n(F) across various industrial sectors.",
            options: [
                "B-D-E-A-C-F",
                "A-B-D-E-C-F",
                "B-D-E-F-A-C",
                "E-D-B-A-C-F"
            ],
            correct: 0,
            explanation: "Logical flow: (B) The traditional workforce is -> (D) currently undergoing -> (E) a profound transformation -> (A) by AI -> (C) and automation -> (F) across sectors.",
            examTags: ["CUET"]
        },
        /* TOPIC: Fill in the Blanks (Conjunctions/Adverbs) */
        {
            id: "advg-q-006", type: "mcq", difficulty: "medium",
            question: "Identify the correct word: 'The company faced severe financial losses ________ the economic downturn; ________, it decided to pivot its strategy.'",
            options: [
                "because, nonetheless",
                "due to, therefore",
                "despite, however",
                "although, but"
            ],
            correct: 1,
            explanation: "'Due to' introduces the cause (economic downturn). 'Therefore' introduces the logical consequence (decision to pivot).",
            examTags: ["CUET"]
        },
        /* TOPIC: Active/Passive Voice (Advanced) */
        {
            id: "advg-q-007", type: "mcq", difficulty: "hard",
            question: "Change to Passive Voice: 'The committee is currently reviewing all the applications for the scholarship.'",
            options: [
                "All the applications were being reviewed by the committee.",
                "All the applications are currently being reviewed by the committee.",
                "The committee currently reviews all the applications.",
                "All the applications have been reviewed by the committee."
            ],
            correct: 1,
            explanation: "The original is Present Continuous. Passive Present Continuous is 'is/are being + past participle'.",
            examTags: ["CUET"]
        },
        /* TOPIC: Direct/Indirect Speech (Advanced) */
        {
            id: "advg-q-008", type: "mcq", difficulty: "hard",
            question: "Change to Indirect Speech: 'He said, \"If I had known about the meeting, I would have attended it.\"'",
            options: [
                "He said that if he knew about the meeting, he would attend it.",
                "He said that if he had known about the meeting, he would have attended it.",
                "He said that if he has known about the meeting, he will attend it.",
                "He told me that if he had known about the meeting, he should attend it."
            ],
            correct: 1,
            explanation: "In reported speech, Third Conditional (had known... would have attended) usually remains the same as it is already in the furthest past form.",
            examTags: ["CUET"]
        }
    ]
};
