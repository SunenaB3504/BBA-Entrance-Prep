/**
 * Vocabulary Module
 * 10 Word Families (4 Qs per word)
 * 
 * SEED LIST WORD FAMILIES:
 * 1. Prudent
 * 2. Incentive
 * 3. Volatile
 * 4. Deficit
 * 5. Surplus
 * 6. Arbitrary
 * 7. Autonomy
 * 8. Lucrative
 * 9. Pragmatic
 * 10. Eloquent
 * 
 * QUESTION TYPES (Per Word):
 * 1. Direct Meaning
 * 2. Synonym
 * 3. Antonym
 * 4. Fill-in-the-blank (Contextual)
 */

export const vocabularyData = {
    subject: "English",
    chapter: "Vocabulary",
    examTags: ["MH-CET", "CUET"],
    studyGuide: {
        topics: [
            {
                id: "word-relationships",
                title: "1. Synonyms & Antonyms",
                content: {
                    coreConcept: "Vocabulary testing focuses on your understanding of words in isolation and in context. Synonyms are words with similar meanings; Antonyms are opposites.",
                    formulaBank: "- Root Words: 'Bene' (Good), 'Mal' (Bad), 'Chron' (Time).\n- Prefixes/Suffixes: 'Pre' (Before), 'Post' (After).",
                    logic: "1. Elimination: If three options are synonyms, the fourth is likely the answer (if looking for an antonym).\n2. Tone Check: Is the word positive, negative, or neutral?",
                    traps: "High-frequency trap: Choosing a word that sounds similar but has a different meaning (e.g., Affect vs Effect).",
                    examples: [
                        { q: "Synonym of 'Ephemeral'?", a: "Short-lived / Transient." },
                        { q: "Antonym of 'Gigantic'?", a: "Tiny / Miniature." },
                        { q: "Synonym of 'Abundant'?", a: "Plentiful / Copious." },
                        { q: "Antonym of 'Optimist'?", a: "Pessimist." },
                        { q: "What does the root 'Bene' mean?", a: "Good / Well (e.g., Benefit, Benevolent)." },
                        { q: "If 'Pre' means before, what is 'Precede'?", a: "To go before." },
                        { q: "Meaning of 'Bite the bullet'?", a: "To accept something difficult or unpleasant." },
                        { q: "Meaning of 'Piece of cake'?", a: "Very easy task." },
                        { q: "Synonym of 'Candid'?", a: "Honest / Frank." },
                        { q: "Antonym of 'Vague'?", a: "Clear / Specific." }
                    ],
                    speedSummary: "Root word analysis is the fastest way to decode unfamiliar words."
                }
            },
            {
                id: "idioms-phrases",
                title: "2. Idioms & Verbal Phrases",
                content: {
                    coreConcept: "Idioms are expressions where the meaning is not deducible from the individual words (e.g., 'Bite the bullet').",
                    formulaBank: "- Piece of cake: Very easy.\n- Break the ice: To initiate a conversation.\n- Burn the midnight oil: Work late into the night.",
                    logic: "Context is king. If you don't know the idiom, read the whole sentence to guess the 'flavor' of the expression.",
                    traps: "Literal translation: Interpreting 'Kick the bucket' as literally kicking a bucket.",
                    examples: [
                        { q: "Meaning of 'Cold shoulder'?", a: "To ignore someone intentionally." }
                    ],
                    speedSummary: "Idioms usually have a colorful, non-literal meaning."
                }
            }
        ]
    },
    flashcards: [
        {
            id: "vocab-fc-001",
            term: "Prudent",
            definition: "Acting with or showing care and thought for the future.",
            example: "A prudent investor always diversifies."
        },
        {
            id: "vocab-fc-002",
            term: "Volatile",
            definition: "Liable to change rapidly and unpredictably, especially for the worse.",
            example: "The stock market is highly volatile."
        }
    ],
    questions: [
        // 1. PRUDENT
        {
            id: "vocab-q-001",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Prudent' in the sentence 'A prudent manager always maintains an emergency fund.' most nearly means:",
            options: ["Extremely wealthy", "Careful and sensible", "Fast-moving", "Aggressive"],
            correct: 1,
            explanation: "Prudent means showing care and foresight. Distractor logic: 'Wealthy' confuses success with caution; 'Fast-moving' is the opposite of a measured approach; 'Aggressive' is a behavioral trait that often contrasts with prudence.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-002",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Choose the synonym for 'Prudent':",
            options: ["Reckless", "Cautious", "Indifferent", "Naive"],
            correct: 1,
            explanation: "Cautious is the closest synonym. Distractor logic: 'Reckless' is an antonym; 'Indifferent' means lack of interest; 'Naive' suggests lack of experience, which is different from lack of caution.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-003",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Choose the antonym for 'Prudent':",
            options: ["Wise", "Judicious", "Imprudent", "Frugal"],
            correct: 2,
            explanation: "Imprudent is the direct opposite. Distractor logic: 'Wise' and 'Judicious' are synonyms; 'Frugal' is an associated trait of prudence (care with money) but not its antonym.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-004",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: It is _______ to save money for emergencies.",
            options: ["reckless", "prudent", "volatile", "arbitrary"],
            correct: 1,
            explanation: "Prudent fits the context of a sensible action. Distractor logic: 'Reckless' is the opposite; 'Volatile' refers to instability (used for markets); 'Arbitrary' means random, whereas saving is intentional.",
            examTags: ["MH-CET"]
        },

        // 2. INCENTIVE
        {
            id: "vocab-q-005",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Incentive' in the sentence 'The government provided a tax holiday as an incentive for new businesses.' most nearly means:",
            options: ["A punishment", "A motivation or reward", "A tax penalty", "A logical fallacy"],
            correct: 1,
            explanation: "Incentive refers to a stimulus for action. Distractor logic: 'Punishment' and 'Penalty' have negative connotations which contradict 'incentive'; 'Logical fallacy' is unrelated to business motivation.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-006",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Incentive':",
            options: ["Discouragement", "Stimulus", "Deterrent", "Constraint"],
            correct: 1,
            explanation: "Stimulus is a synonym. Distractor logic: 'Discouragement' and 'Deterrent' are antonyms; 'Constraint' means a limitation, which is the opposite of what an incentive provides.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-007",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Incentive':",
            options: ["Motivation", "Reward", "Disincentive", "Encouragement"],
            correct: 2,
            explanation: "Disincentive is the direct antonym. Distractor logic: 'Motivation', 'Reward', and 'Encouragement' are all synonyms or related concepts.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-008",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The company offered a bonus as an _______ to work overtime.",
            options: ["incentive", "autonomy", "eloquent", "deficit"],
            correct: 0,
            explanation: "Incentive fits the context of motivation. Distractor logic: 'Autonomy' means independence; 'Eloquent' means fluent speech; 'Deficit' means shortage.",
            examTags: ["MH-CET"]
        },

        // 3. VOLATILE
        {
            id: "vocab-q-009",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Volatile' in the sentence 'The stock market has become increasingly volatile due to global uncertainty.' most nearly means:",
            options: ["Steady and calm", "Highly unstable", "Very heavy", "Permanent"],
            correct: 1,
            explanation: "Volatile refers to something subject to rapid change. Distractor logic: 'Steady' and 'Permanent' are antonyms; 'Heavy' is a literal physical property that doesn't apply to market behavior.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-010",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Volatile':",
            options: ["Stable", "Capricious", "Resilient", "Consistent"],
            correct: 1,
            explanation: "Capricious means unpredictable, similar to volatile. Distractor logic: 'Stable' and 'Consistent' are antonyms; 'Resilient' means able to recover, which is a positive trait, unlike the neutral/negative 'volatile'.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-011",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Volatile':",
            options: ["Variable", "Unpredictable", "Stable", "Ephemeral"],
            correct: 2,
            explanation: "Stable means not subject to change. Distractor logic: 'Variable' and 'Unpredictable' are synonyms; 'Ephemeral' means short-lived, which relates to time but not necessarily stability.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-012",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Cryptocurrency markets are often considered extremely _______.",
            options: ["lucrative", "volatile", "pragmatic", "surplus"],
            correct: 1,
            explanation: "Volatile describes the rapid price swings. Distractor logic: 'Lucrative' (profitable) can be true but doesn't describe the risk nature; 'Pragmatic' (practical) and 'Surplus' (extra) are contextually wrong.",
            examTags: ["MH-CET"]
        },

        // 4. DEFICIT
        {
            id: "vocab-q-013",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Deficit' in the sentence 'The budget deficit exceeded all previous records this year.' most nearly means:",
            options: ["A profit", "A shortage or shortfall", "A massive gain", "A bank balance"],
            correct: 1,
            explanation: "Deficit is the amount by which something falls short. Distractor logic: 'Profit' and 'Gain' are opposites; 'Bank balance' is a general term that doesn't specify if it is positive or negative.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-014",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Deficit':",
            options: ["Surplus", "Abundance", "Scarcity", "Excess"],
            correct: 2,
            explanation: "Scarcity or shortfall matches deficit. Distractor logic: 'Surplus', 'Abundance', and 'Excess' are all antonyms indicating an overage.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-015",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Deficit':",
            options: ["Lack", "Shortfall", "Surplus", "Debt"],
            correct: 2,
            explanation: "Surplus is the opposite of deficit. Distractor logic: 'Lack' and 'Shortfall' are synonyms; 'Debt' is a possible result of a deficit but not its literal antonym.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-016",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The team had a two-goal _______ by half-time.",
            options: ["incentive", "deficit", "autonomy", "prudent"],
            correct: 1,
            explanation: "Deficit describes the shortage of goals. Distractor logic: 'Incentive' (motivation), 'Autonomy' (freedom), and 'Prudent' (careful) make no sense in a sports scoring context.",
            examTags: ["MH-CET"]
        },

        // 5. SURPLUS
        {
            id: "vocab-q-017",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Surplus' in the sentence 'The farmer had a surplus of grain after the record harvest.' most nearly means:",
            options: ["An amount leftover", "A complete loss", "A lack of resources", "Exactly zero"],
            correct: 0,
            explanation: "Surplus means an amount left over after requirements are met. Distractor logic: 'Loss' and 'Lack' are opposites; 'Zero' indicates no amount, whereas surplus is about an extra amount.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-018",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Surplus':",
            options: ["Dearth", "Deficiency", "Excess", "Shortage"],
            correct: 2,
            explanation: "Excess is synonymous with surplus. Distractor logic: 'Dearth', 'Deficiency', and 'Shortage' are synonyms of each other, but antonyms of surplus.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-019",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Surplus':",
            options: ["Abundance", "Glut", "Deficit", "Plethora"],
            correct: 2,
            explanation: "Deficit is the opposite of surplus. Distractor logic: 'Abundance', 'Glut', and 'Plethora' are all synonyms signifying an oversupply.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-020",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The country had a budget _______ due to unexpected tax revenue.",
            options: ["surplus", "deficit", "arbitrary", "volatile"],
            correct: 0,
            explanation: "Surplus fits the context of extra revenue. Distractor logic: 'Deficit' is the opposite; 'Arbitrary' (random) and 'Volatile' (unstable) are contextually inappropriate.",
            examTags: ["MH-CET"]
        },

        // 6. ARBITRARY
        {
            id: "vocab-q-021",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Arbitrary' in the sentence 'The judge's decision was criticized for being arbitrary rather than based on law.' most nearly means:",
            options: ["Based on logic", "Random or personal whim", "Scientifically proven", "Universal law"],
            correct: 1,
            explanation: "Arbitrary signifies something decided without a consistent system or logic. Distractor logic: 'Logic', 'Proven', and 'Universal law' are all antonyms suggesting a reasoned or systematic basis.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-022",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Arbitrary':",
            options: ["Rational", "Capricious", "Objective", "Systematic"],
            correct: 1,
            explanation: "Capricious (unpredictable) is a synonym for arbitrary. Distractor logic: 'Rational', 'Objective', and 'Systematic' are antonyms indicating a reasoned approach.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-023",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Arbitrary':",
            options: ["Haphazard", "Inconsistent", "Methodical", "Erratic"],
            correct: 2,
            explanation: "Methodical (orderly) is the opposite of arbitrary. Distractor logic: 'Haphazard', 'Inconsistent', and 'Erratic' are all synonyms for arbitrary behavior.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-024",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Without a clear policy, the selection process seemed completely _______.",
            options: ["pragmatic", "eloquent", "arbitrary", "surplus"],
            correct: 2,
            explanation: "Arbitrary describes a process lacking clear rules. Distractor logic: 'Pragmatic' (practical), 'Eloquent' (fluent), and 'Surplus' (extra) do not fit the context of a flawed process.",
            examTags: ["MH-CET"]
        },

        // 7. AUTONOMY
        {
            id: "vocab-q-025",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Autonomy' in the sentence 'The university granted the department full autonomy to design its own curriculum.' most nearly means:",
            options: ["Financial debt", "Self-governance or independence", "Strict obedience", "Limited resources"],
            correct: 1,
            explanation: "Autonomy is the right of an organization to self-govern. Distractor logic: 'Debt' and 'Resources' are financial terms; 'Obedience' is the opposite of being independent.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-026",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Autonomy':",
            options: ["Subservience", "Sovereignty", "Dependency", "Totalitarianism"],
            correct: 1,
            explanation: "Sovereignty is the closest synonym for independence/autonomy. Distractor logic: 'Subservience' and 'Dependency' are antonyms; 'Totalitarianism' is a system of total control, the opposite of autonomy.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-027",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Autonomy':",
            options: ["Liberty", "Freedom", "Subjugation", "Self-rule"],
            correct: 2,
            explanation: "Subjugation (being under control) is the opposite of autonomy. Distractor logic: 'Liberty', 'Freedom', and 'Self-rule' are all synonyms.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-028",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Remote workers often enjoy a high degree of _______ in their daily schedule.",
            options: ["autonomy", "incentive", "deficit", "surplus"],
            correct: 0,
            explanation: "Autonomy fits the context of having freedom over one's schedule. Distractor logic: 'Incentive' (motivation), 'Deficit' (shortage), and 'Surplus' (extra) are contextually inappropriate.",
            examTags: ["MH-CET"]
        },

        // 8. LUCRATIVE
        {
            id: "vocab-q-029",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Lucrative' in the sentence 'The contract turned out to be less lucrative than the company had initially expected.' most nearly means:",
            options: ["Extremely boring", "Highly profitable", "Very dangerous", "Small and tiny"],
            correct: 1,
            explanation: "Lucrative describes an activity that produces a lot of money. Distractor logic: 'Boring', 'Dangerous', and 'Tiny' do not relate to the financial return of a contract.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-030",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Lucrative':",
            options: ["Unproductive", "Remunerative", "Worthless", "Impoverished"],
            correct: 1,
            explanation: "Remunerative is a formal synonym for profitable/lucrative. Distractor logic: 'Unproductive', 'Worthless', and 'Impoverished' are all antonyms indicating lack of value or profit.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-031",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Lucrative':",
            options: ["Fruitful", "Payable", "Loss-making", "Gainful"],
            correct: 2,
            explanation: "Loss-making is the opposite of lucrative. Distractor logic: 'Fruitful', 'Payable', and 'Gainful' are synonyms or related to positive returns.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-032",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Professional sports can be a very _______ career for the top athletes.",
            options: ["volatile", "lucrative", "arbitrary", "eloquent"],
            correct: 1,
            explanation: "Lucrative fits the context of high earnings. Distractor logic: 'Volatile' (unstable), 'Arbitrary' (random), and 'Eloquent' (fluent) are contextually wrong.",
            examTags: ["MH-CET"]
        },

        // 9. PRAGMATIC
        {
            id: "vocab-q-033",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Pragmatic' in the sentence 'A pragmatic leader focuses on what is achievable rather than on abstract theories.' most nearly means:",
            options: ["Idealistic", "Practical and realistic", "Stubborn", "Uninterested"],
            correct: 1,
            explanation: "Pragmatic means dealing with things sensibly and realistically. Distractor logic: 'Idealistic' is the antonym; 'Stubborn' refers to personality; 'Uninterested' refers to lack of attention.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-034",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Pragmatic':",
            options: ["Visionary", "Quixotic", "Hands-on", "Theatrical"],
            correct: 2,
            explanation: "Hands-on or down-to-earth is a synonym for pragmatic. Distractor logic: 'Visionary' and 'Quixotic' (clinging to unrealistic ideals) are antonyms; 'Theatrical' relates to performance.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-035",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Pragmatic':",
            options: ["Utilitarian", "Expedient", "Quixotic", "Efficient"],
            correct: 2,
            explanation: "Quixotic (unrealistically optimistic) is an antonym for pragmatic. Distractor logic: 'Utilitarian', 'Expedient', and 'Efficient' all relate to practical results.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-036",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Despite the grand promises, we need a _______ plan to resolve the debt crisis.",
            options: ["pragmatic", "eloquent", "volatile", "lucrative"],
            correct: 0,
            explanation: "A pragmatic plan is one that can actually work in reality. Distractor logic: 'Eloquent' (fluent), 'Volatile' (unstable), and 'Lucrative' (profitable) do not fit the requirement for a functional plan.",
            examTags: ["MH-CET"]
        },

        // 10. ELOQUENT
        {
            id: "vocab-q-037",
            type: "multiple-choice",
            difficulty: "easy",
            question: "The word 'Eloquent' in the sentence 'The CEO's eloquent speech inspired the employees to work harder.' most nearly means:",
            options: ["Silent", "Fluent and persuasive", "Rude", "Technically complex"],
            correct: 1,
            explanation: "Eloquent means fluent, forceful, and elegant in speech. Distractor logic: 'Silent' is an antonym; 'Rude' relates to manners; 'Complex' doesn't imply the persuasiveness that 'eloquent' does.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-038",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Eloquent':",
            options: ["Inarticulate", "Glib", "Articulate", "Hesitant"],
            correct: 2,
            explanation: "Articulate is a synonym for eloquent. Distractor logic: 'Inarticulate' and 'Hesitant' are antonyms; 'Glib' means fluent but insincere (a negative trait).",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-039",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Eloquent':",
            options: ["Poignant", "Silver-tongued", "Fluent", "Inarticulate"],
            correct: 3,
            explanation: "Inarticulate (unable to speak distinctly) is the opposite of eloquent. Distractor logic: 'Poignant', 'Silver-tongued', and 'Fluent' are synonyms or related to high-quality speech.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-040",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: She is an _______ advocate for environmental protection.",
            options: ["eloquent", "arbitrary", "volatile", "deficit"],
            correct: 0,
            explanation: "Eloquent fits the context of a persuasive advocate. Distractor logic: 'Arbitrary' (random), 'Volatile' (unstable), and 'Deficit' (shortage) are contextually wrong.",
            examTags: ["MH-CET"]
        }
    ]
};
