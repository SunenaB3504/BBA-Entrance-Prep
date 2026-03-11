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
            question: "What is the primary meaning of the word 'Prudent'?",
            options: ["Extremely wealthy", "Careful and sensible", "Fast-moving", "Aggressive"],
            correct: 1,
            explanation: "Prudent means showing care and foresight in management.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-002",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Choose the synonym for 'Prudent':",
            options: ["Reckless", "Cautious", "Indifferent", "Naive"],
            correct: 1,
            explanation: "Cautious is the closest synonym to prudent.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-003",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Choose the antonym for 'Prudent':",
            options: ["Wise", "Judicious", "Imprudent", "Frugal"],
            correct: 2,
            explanation: "Imprudent is the direct opposite of prudent.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-004",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: It is _______ to save money for emergencies.",
            options: ["reckless", "prudent", "volatile", "arbitrary"],
            correct: 1,
            explanation: "Saving money for emergencies is a sensible (prudent) action.",
            examTags: ["MH-CET"]
        },

        // 2. INCENTIVE
        {
            id: "vocab-q-005",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Meaning of 'Incentive':",
            options: ["A punishment", "A motivation or reward", "A tax penalty", "A logical fallacy"],
            correct: 1,
            explanation: "An incentive is something that encourages action.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-006",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Incentive':",
            options: ["Discouragement", "Stimulus", "Deterrent", "Constraint"],
            correct: 1,
            explanation: "Stimulus is a synonym for incentive as it triggers action.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-007",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Incentive':",
            options: ["Motivation", "Reward", "Disincentive", "Encouragement"],
            correct: 2,
            explanation: "Disincentive is the opposite of incentive.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-008",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The company offered a bonus as an _______ to work overtime.",
            options: ["incentive", "autonomy", "eloquent", "deficit"],
            correct: 0,
            explanation: "A bonus is a reward (incentive) offered to motivate employees.",
            examTags: ["MH-CET"]
        },

        // 3. VOLATILE
        {
            id: "vocab-q-009",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Meaning of 'Volatile':",
            options: ["Steady and calm", "Highly unstable", "Very heavy", "Permanent"],
            correct: 1,
            explanation: "Volatile means something that changes easily or unpredictably.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-010",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Volatile':",
            options: ["Stable", "Capricious", "Resilient", "Consistent"],
            correct: 1,
            explanation: "Capricious means impulsive or unpredictable, similar to volatile.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-011",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Volatile':",
            options: ["Variable", "Unpredictable", "Stable", "Ephemeral"],
            correct: 2,
            explanation: "Stable means not likely to change, the opposite of volatile.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-012",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Cryptocurrency markets are often considered extremely _______.",
            options: ["lucrative", "volatile", "pragmatic", "surplus"],
            correct: 1,
            explanation: "Crypto markets change rapidly, making them volatile.",
            examTags: ["MH-CET"]
        },

        // 4. DEFICIT
        {
            id: "vocab-q-013",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Meaning of 'Deficit':",
            options: ["A profit", "A shortage or shortfall", "A massive gain", "A bank balance"],
            correct: 1,
            explanation: "A deficit occurs when spending exceeds income.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-014",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Deficit':",
            options: ["Surplus", "Abundance", "Scarcity", "Excess"],
            correct: 2,
            explanation: "Scarcity or shortfall is a synonym for deficit.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-015",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Deficit':",
            options: ["Lack", "Shortfall", "Surplus", "Debt"],
            correct: 2,
            explanation: "Surplus is the opposite of a deficit (shortfall).",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-016",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The team had a two-goal _______ by half-time.",
            options: ["incentive", "deficit", "autonomy", "prudent"],
            correct: 1,
            explanation: "A 'two-goal deficit' means they were trailing by two goals.",
            examTags: ["MH-CET"]
        },

        // 5. SURPLUS
        {
            id: "vocab-q-017",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Meaning of 'Surplus':",
            options: ["An amount leftover", "A complete loss", "A lack of resources", "Exactly zero"],
            correct: 0,
            explanation: "Surplus means an amount that is more than what is needed.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-018",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Surplus':",
            options: ["Dearth", "Deficiency", "Excess", "Shortage"],
            correct: 2,
            explanation: "Excess is synonymous with surplus.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-019",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Surplus':",
            options: ["Abundance", "Glut", "Deficit", "Plethora"],
            correct: 2,
            explanation: "Deficit is the opposite of surplus.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-020",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The country had a budget _______ due to unexpected tax revenue.",
            options: ["surplus", "deficit", "arbitrary", "volatile"],
            correct: 0,
            explanation: "Extra revenue leads to a budget surplus.",
            examTags: ["MH-CET"]
        },

        // 6. ARBITRARY
        {
            id: "vocab-q-021",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Meaning of 'Arbitrary':",
            options: ["Based on logic", "Random or personal whim", "Scientifically proven", "Universal law"],
            correct: 1,
            explanation: "Arbitrary decisions are made without any specific reason or system.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-022",
            type: "multiple-choice",
            difficulty: "hard",
            question: "Synonym for 'Arbitrary':",
            options: ["Rational", "Discretionary", "Objective", "Systematic"],
            correct: 1,
            explanation: "Discretionary or random is a synonym for arbitrary.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-023",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Arbitrary':",
            options: ["Haphazard", "Capricious", "Logical", "Erratic"],
            correct: 2,
            explanation: "Logical or reasoned is the opposite of arbitrary.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-024",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Fill in the blank: The judge's decision was criticized for being _______.",
            options: ["pragmatic", "eloquent", "arbitrary", "surplus"],
            correct: 2,
            explanation: "Criticism often targets decisions that seem random (arbitrary).",
            examTags: ["MH-CET"]
        },

        // 7. AUTONOMY
        {
            id: "vocab-q-025",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Meaning of 'Autonomy':",
            options: ["Financial debt", "Self-governance or independence", "Strict obedience", "A type of vehicle"],
            correct: 1,
            explanation: "Autonomy refers to the right or condition of self-government.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-026",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Autonomy':",
            options: ["Subservience", "Sovereignty", "Dependency", "Totalitarianism"],
            correct: 1,
            explanation: "Sovereignty is a synonym for autonomy/independence.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-027",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Autonomy':",
            options: ["Liberty", "Freedom", "Dependence", "Self-rule"],
            correct: 2,
            explanation: "Dependence is the opposite of autonomy.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-028",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: The manager gives the team a lot of _______ to finish their tasks.",
            options: ["autonomy", "incentive", "deficit", "surplus"],
            correct: 0,
            explanation: "Giving a team freedom to work means giving them autonomy.",
            examTags: ["MH-CET"]
        },

        // 8. LUCRATIVE
        {
            id: "vocab-q-029",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Meaning of 'Lucrative':",
            options: ["Extremely boring", "Highly profitable", "Very dangerous", "Small and tiny"],
            correct: 1,
            explanation: "Lucrative means producing a great deal of profit.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-030",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Lucrative':",
            options: ["Useless", "Remunerative", "Worthless", "Impoverished"],
            correct: 1,
            explanation: "Remunerative or profitable is a synonym for lucrative.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-031",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Lucrative':",
            options: ["Fruitful", "Gainful", "Unprofitable", "Productive"],
            correct: 2,
            explanation: "Unprofitable is the opposite of lucrative.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-032",
            type: "multiple-choice",
            difficulty: "easy",
            question: "Fill in the blank: Real estate can be a very _______ business if you invest wisely.",
            options: ["volatile", "lucrative", "arbitrary", "eloquent"],
            correct: 1,
            explanation: "Wisely invested real estate is profitable (lucrative).",
            examTags: ["MH-CET"]
        },

        // 9. PRAGMATIC
        {
            id: "vocab-q-033",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Meaning of 'Pragmatic':",
            options: ["Idealistic and unrealistic", "Practical and realistic", "Stubborn", "Uninterested"],
            correct: 1,
            explanation: "Pragmatic means dealing with things realistically and practically.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-034",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Pragmatic':",
            options: ["Visionary", "Quixotic", "Hands-on", "Theatrical"],
            correct: 2,
            explanation: "Hands-on/down-to-earth is a synonym for pragmatic.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-035",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Pragmatic':",
            options: ["Logical", "Utilitarian", "Idealistic", "Efficient"],
            correct: 2,
            explanation: "Idealistic is the opposite of pragmatic.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-036",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Fill in the blank: We need a _______ solution to the problem, not just high theories.",
            options: ["pragmatic", "eloquent", "volatile", "lucrative"],
            correct: 0,
            explanation: "A practical solution is a pragmatic one.",
            examTags: ["MH-CET"]
        },

        // 10. ELOQUENT
        {
            id: "vocab-q-037",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Meaning of 'Eloquent':",
            options: ["Silent", "Fluent and persuasive in speech", "Rude", "Complex and technical"],
            correct: 1,
            explanation: "Eloquent means clearly expressing or indicating something persuasively.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-038",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Synonym for 'Eloquent':",
            options: ["Inarticulate", "Glib", "Articulate", "Hesitant"],
            correct: 2,
            explanation: "Articulate is a synonym for eloquent.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-039",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Antonym for 'Eloquent':",
            options: ["Poignant", "Silver-tongued", "Ineffable", "Mumbled"],
            correct: 3,
            explanation: "Mumbled or inarticulate is the opposite of eloquent.",
            examTags: ["MH-CET"]
        },
        {
            id: "vocab-q-040",
            type: "multiple-choice",
            difficulty: "medium",
            question: "Fill in the blank: The activist gave an _______ speech that moved the audience.",
            options: ["eloquent", "arbitrary", "volatile", "deficit"],
            correct: 0,
            explanation: "A persuasive and fluent speech is an eloquent one.",
            examTags: ["MH-CET"]
        }
    ]
};
