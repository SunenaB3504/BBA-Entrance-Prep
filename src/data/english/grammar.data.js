/**
 * Grammar & Usage Module
 * 20 questions across 8 specific topics.
 * 
 * TOPICS:
 * 1. Tenses (2 Qs)
 * 2. Subject-Verb Agreement (3 Qs)
 * 3. Articles (2 Qs)
 * 4. Prepositions (3 Qs)
 * 5. Active/Passive Voice (2 Qs)
 * 6. Direct/Indirect Speech (2 Qs)
 * 7. Spotting Errors (2 Qs)
 * 8. Sentence Rearrangement (4 Qs)
 */

export const grammarData = {
    subject: "English",
    chapter: "Grammar & Usage",
    examTags: ["MH-CET", "CUET"],
    flashcards: [
        {
            id: "gram-fc-001",
            term: "Subject-Verb Agreement",
            definition: "The verb must agree with its subject in number and person.",
            example: "The list of items is (not are) on the table."
        },
        {
            id: "gram-fc-002",
            term: "Active Voice",
            definition: "The subject performs the action.",
            example: "The CEO signed the contract."
        }
    ],
    questions: [
        // 1. TENSES (2 Qs)
        {
            id: "gram-q-001",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Choose the correct form of the verb: By the time we reach the office, the meeting _______.",
            options: ["will start", "will have started", "started", "has started"],
            correct: 1,
            explanation: "Rule: Future Perfect Tense. We use 'will have + past participle' for an action that will be completed before a certain point in the future.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-002",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Identify the tense: 'I have been working on this project since January.'",
            options: ["Present Perfect", "Present Continuous", "Present Perfect Continuous", "Past Perfect Continuous"],
            correct: 2,
            explanation: "Rule: Present Perfect Continuous. Used for an action that started in the past and is still continuing.",
            examTags: ["MH-CET"]
        },

        // 2. SUBJECT-VERB AGREEMENT (3 Qs)
        {
            id: "gram-q-003",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Identify the error: The quality (A) of the products (B) were (C) exceptional (D).",
            options: ["A", "B", "C", "D"],
            correct: 2,
            explanation: "Rule: Subject-Verb Agreement. The subject is 'quality' (singular), so the verb should be 'was' instead of 'were'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-004",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The director and the producer _______ arrived.",
            options: ["has", "have", "is", "was"],
            correct: 1,
            explanation: "Rule: Compound Subjects. When two different nouns are joined by 'and' and have separate articles ('the'), they take a plural verb.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-005",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Neither the manager nor his assistants _______ responsible for the error.",
            options: ["is", "are", "was", "has"],
            correct: 1,
            explanation: "Rule: Proximity Rule. When subjects are joined by 'neither...nor', the verb agrees with the nearest subject ('assistants' - plural).",
            examTags: ["MH-CET"]
        },

        // 3. ARTICLES (2 Qs)
        {
            id: "gram-q-006",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: He is _______ honest man.",
            options: ["a", "an", "the", "no article"],
            correct: 1,
            explanation: "Rule: Article Usage. Use 'an' before words beginning with a vowel sound, even if the letter is a consonant ('honest' has a silent 'h').",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-007",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Fill in the blank: _______ Amazon is the longest river in South America.",
            options: ["A", "An", "The", "No article"],
            correct: 2,
            explanation: "Rule: Definite Article. Use 'the' before the names of rivers.",
            examTags: ["MH-CET"]
        },

        // 4. PREPOSITIONS (3 Qs)
        {
            id: "gram-q-008",
            type: "multiple-choice",
            difficulty: "medium",
            question: "The company is committed _______ providing the best service.",
            options: ["to", "for", "with", "on"],
            correct: 0,
            explanation: "Rule: Fixed Prepositions. The verb 'committed' is always followed by the preposition 'to'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-009",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The cat jumped _______ the table.",
            options: ["in", "on", "into", "onto"],
            correct: 3,
            explanation: "Rule: Prepositions of Motion. 'Onto' is used to indicate movement to a position on a surface.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-010",
            type: "multiple-choice",
            difficulty: "medium",
            question: "He has been living here _______ ten years.",
            options: ["since", "for", "from", "during"],
            correct: 1,
            explanation: "Rule: Time Prepositions. Use 'for' to denote a duration of time and 'since' for a specific point in time.",
            examTags: ["MH-CET"]
        },

        // 5. ACTIVE/PASSIVE VOICE (2 Qs)
        {
            id: "gram-q-011",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Change to Passive Voice: 'The marketing team launched the campaign.'",
            options: [
                "The campaign was launched by the marketing team.",
                "The campaign is launched by the marketing team.",
                "The campaign has been launched by the team.",
                "The marketing team was launching the campaign."
            ],
            correct: 0,
            explanation: "Rule: Simple Past Passive. 'Subject + was/were + past participle' is used to transform active simple past sentences.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-012",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Change to Active Voice: 'The budget was being discussed by the committee.'",
            options: [
                "The committee discussed the budget.",
                "The committee has been discussing the budget.",
                "The committee was discussing the budget.",
                "The budget discussed by the committee."
            ],
            correct: 2,
            explanation: "Rule: Past Continuous Active. 'Subject + was/were + verb-ing' is the active form of 'was/were + being + past participle'.",
            examTags: ["MH-CET"]
        },

        // 6. DIRECT/INDIRECT SPEECH (2 Qs)
        {
            id: "gram-q-013",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Change to Indirect Speech: She said, 'I am busy today.'",
            options: [
                "She said that she is busy today.",
                "She said that she was busy that day.",
                "She said that she was busy today.",
                "She told me she is busy."
            ],
            correct: 1,
            explanation: "Rule: Reported Speech. In indirect speech, 'am' changes to 'was', and 'today' changes to 'that day'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-014",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Change to Direct Speech: He asked if I had finished the report.",
            options: [
                "He said, 'Did you finish the report?'",
                "He said, 'Have you finished the report?'",
                "He said, 'Finish the report.'",
                "He asked, 'Do you finish the report?'"
            ],
            correct: 1,
            explanation: "Rule: Interrogative Reported Speech. 'Asked if' in indirect speech corresponds to a 'Yes/No' question in direct speech. Past perfect often reverts to present perfect.",
            examTags: ["MH-CET"]
        },

        // 7. SPOTTING ERRORS (2 Qs)
        {
            id: "gram-q-015",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Spot the error: Despite of (A) the rain (B), we decided (C) to go for the walk (D).",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "Rule: Prepositional Accuracy. 'Despite' should not be followed by 'of'. Either use 'Despite' or 'In spite of'.",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-016",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Spot the error: One of the (A) employee (B) was (C) promoted (D).",
            options: ["A", "B", "C", "D"],
            correct: 1,
            explanation: "Rule: Subject-Verb Agreement. After 'one of the', the noun must be plural ('employees'), even though the verb remains singular ('was').",
            examTags: ["MH-CET"]
        },

        // 8. SENTENCE REARRANGEMENT (4 Qs)
        {
            id: "gram-q-017",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Rearrange the parts (P, Q, R, S) to form a coherent sentence:\n(P) for sustainable growth\n(Q) the new policy\n(R) aims to provide\n(S) a framework",
            options: ["QPSR", "QRSP", "QSPR", "RQSP"],
            correct: 1,
            explanation: "Coherent sequence: The subject (Q: the new policy) followed by verb (R: aims to provide) and object (S: a framework) and purpose (P: for sustainable growth).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-018",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Rearrange: (P) in India\n(Q) rapid digitization\n(R) has transformed\n(S) the retail sector",
            options: ["QPRS", "QRSP", "PQRS", "RQPS"],
            correct: 1,
            explanation: "Coherent sequence: Subject (Q: rapid digitization) followed by verb (R: has transformed), object (S: the retail sector), and location (P: in India).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-019",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Rearrange: (P) investors should\n(Q) their portfolio\n(R) diversify\n(S) to minimize risk",
            options: ["PQRS", "PRQS", "QPSR", "RPQS"],
            correct: 1,
            explanation: "Coherent sequence: Subject (P: investors should) followed by verb (R: diversify), object (Q: their portfolio), and purpose (S: to minimize risk).",
            examTags: ["MH-CET"]
        },
        {
            id: "gram-q-020",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Rearrange: (P) successful\n(Q) hard work\n(R) is the key to\n(S) being",
            options: ["QRSP", "QPSR", "SQRP", "RSQP"],
            correct: 0,
            explanation: "Coherent sequence: Subject (Q) + Verb (R) + Object (S) + Adjective (P). 'Hard work is the key to being successful.'",
            examTags: ["MH-CET"]
        }
    ]
};
