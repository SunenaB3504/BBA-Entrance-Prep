// src/data/english/vocabulary-advanced.data.js
// CUET 2024 COMPLIANT: VALIDATED AGAINST DATA_SCHEMA.md

export const vocabularyAdvancedData = {
    subject: "English",
    chapter: "Vocabulary (Advanced)",
    examTags: ["CUET"],
    flashcards: [
        { id: "advv-fc-001", term: "Ephemeral", definition: "Lasting for a very short time", formula: null, example: "The ephemeral beauty of a sunset." },
        { id: "advv-fc-002", term: "Pragmatic", definition: "Dealing with things sensibly and realistically", formula: null, example: "A pragmatic approach to politics." },
        { id: "advv-fc-003", term: "A blessing in disguise", definition: "A misfortune that eventually results in something good", formula: null, example: "Losing that job was a blessing in disguise." },
        { id: "advv-fc-004", term: "Break down", definition: "Stop functioning (vehicle/machine) or lose control of emotions", formula: null, example: "The car broke down on the highway." },
        { id: "advv-fc-005", term: "Complement vs Compliment", definition: "Complement: to complete; Compliment: an expression of praise", formula: null, example: "This wine complements the meal. He gave her a nice compliment." }
    ],
    questions: [
        /* TOPIC: Synonyms/Antonyms (CUET Level) */
        {
            id: "advv-q-001", type: "mcq", difficulty: "hard",
            question: "Which of the following is the most accurate synonym for the word 'OBFUSCATE'?",
            options: ["Clarify", "Confuse", "Simplify", "Illuminate"],
            correct: 1,
            explanation: "'Obfuscate' means to render obscure, unclear, or unintelligible; hence 'Confuse' is the best synonym.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-002", type: "mcq", difficulty: "hard",
            question: "What is the antonym of the word 'AMELIORATE'?",
            options: ["Improve", "Exacerbate", "Soothe", "Rectify"],
            correct: 1,
            explanation: "'Ameliorate' means to make something bad better. 'Exacerbate' means to make a problem or bad situation worse.",
            examTags: ["CUET"]
        },
        /* TOPIC: Idioms and Phrases (British/Indian Context) */
        {
            id: "advv-q-003", type: "mcq", difficulty: "medium",
            question: "What does the idiom 'Beat around the bush' mean?",
            options: [
                "To clear an area for gardening.",
                "To avoid the main topic or speak evasively.",
                "To work extremely hard at a task.",
                "To physically strike a plant in anger."
            ],
            correct: 1,
            explanation: "To 'beat around the bush' is to delay getting to the main point of what you're saying, usually because it's uncomfortable.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-004", type: "mcq", difficulty: "medium",
            question: "The phrase 'A hot potato' refers to:",
            options: [
                "A delicious culinary dish.",
                "A controversial issue that is difficult to handle.",
                "A weather condition involving high temperatures.",
                "A successful business venture."
            ],
            correct: 1,
            explanation: "A 'hot potato' is a situation or issue that is difficult, unpleasant, or controversial to deal with.",
            examTags: ["CUET"]
        },
        /* TOPIC: Phrasal Verbs */
        {
            id: "advv-q-005", type: "mcq", difficulty: "medium",
            question: "Choose the correct phrasal verb: 'I need to ________ my old notes before the final exam.'",
            options: ["look for", "look over", "look up to", "look into"],
            correct: 1,
            explanation: "'Look over' means to examine or review quickly.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-006", type: "mcq", difficulty: "medium",
            question: "Choose the correct phrasal verb: 'The plane ________ at exactly 9:00 AM.'",
            options: ["took up", "took off", "took in", "took over"],
            correct: 1,
            explanation: "'Took off' refers to the moment an aircraft leaves the ground.",
            examTags: ["CUET"]
        },
        /* TOPIC: Word Pairs / Confusable Words */
        {
            id: "advv-q-007", type: "mcq", difficulty: "medium",
            question: "Select the correct pair: 'The high ________ in the mountains ________ my breathing.'",
            options: [
                "altitude / affected",
                "altitude / effected",
                "attitude / affected",
                "attitude / effected"
            ],
            correct: 0,
            explanation: "'Altitude' refers to height. 'Affected' (verb) means to influence. 'Effect' is usually a noun.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-008", type: "mcq", difficulty: "medium",
            question: "Select the correct word: 'We must abide by the ________ of the land.'",
            options: ["principals", "principles", "provinces", "precepts"],
            correct: 1,
            explanation: "'Principles' refer to fundamental truths or rules of conduct. 'Principal' usually refers to a head of a school or an original sum of money.",
            examTags: ["CUET"]
        },
        /* TOPIC: One-Word Substitution */
        {
            id: "advv-q-009", type: "mcq", difficulty: "medium",
            question: "Find the word for: 'A person who believes that pleasure is the most important thing in life.'",
            options: ["Hedonist", "Stoic", "Altruist", "Ascetic"],
            correct: 0,
            explanation: "A 'Hedonist' is someone who prioritizes pleasure and self-gratification.",
            examTags: ["CUET"]
        },
        /* TOPIC: Analogies / Word Relationships (Expanded) */
        {
            id: "advv-q-010", type: "mcq", difficulty: "medium",
            question: "Find the word to complete the analogy: 'Lighthouse : Sailor :: ________ : Pilot'",
            options: ["Cockpit", "Beacon", "Runway", "Compass"],
            correct: 1,
            explanation: "A lighthouse guides a sailor; a beacon guides a pilot.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-011", type: "mcq", difficulty: "hard",
            question: "Complete the analogy: 'Incite : Quell :: ________ : Forgive'",
            options: ["Exonerate", "Condone", "Vindicate", "Condemn"],
            correct: 3,
            explanation: "'Incite' and 'Quell' are antonyms. The antonym of 'Forgive' is 'Condemn'.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-012", type: "mcq", difficulty: "hard",
            question: "Complete the analogy: 'Diligence : Success :: ________ : Failure'",
            options: ["Perseverance", "Negligence", "Endeavor", "Assiduity"],
            correct: 1,
            explanation: "Diligence leads to success (cause-effect). Negligence leads to failure.",
            examTags: ["CUET"]
        },
        /* TOPIC: Foreign Words and Phrases */
        {
            id: "advv-q-013", type: "mcq", difficulty: "hard",
            question: "What does the Latin phrase 'Status Quo' mean?",
            options: [
                "A sudden political change.",
                "The existing state of affairs.",
                "A legal document.",
                "A formal apology."
            ],
            correct: 1,
            explanation: "'Status Quo' refers to the current social or political situation.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-014", type: "mcq", difficulty: "hard",
            question: "The phrase 'Alma Mater' refers to:",
            options: [
                "A person's birthplace.",
                "The school or university one graduated from.",
                "A close friend or soulmate.",
                "A professional mentor."
            ],
            correct: 1,
            explanation: "'Alma Mater' (Latin for 'nourishing mother') refers to the institution one attended.",
            examTags: ["CUET"]
        },
        {
            id: "advv-q-015", type: "mcq", difficulty: "hard",
            question: "What does 'Bona fide' mean?",
            options: ["In bad faith", "In good faith; genuine", "By way of example", "For the time being"],
            correct: 1,
            explanation: "'Bona fide' means sincere, genuine, or in good faith.",
            examTags: ["CUET"]
        }
    ]
};
