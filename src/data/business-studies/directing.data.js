// src/data/business-studies/directing.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const directingData = {
  subject: "Business Studies",
  chapter: "Directing",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Concept & Importance of Directing",
        content: `Directing is the process of instructing, guiding, counselling, motivating, and leading people in the organisation.

**Characteristics:**
1. **Initiates Action**: Unlike other functions, it sets the organization in motion.
2. **Pervasive**: Happens at all levels of management.
3. **Continuous**: Ongoing process throughout the organization's life.
4. **Flows Downward**: From superior to subordinate.

**Importance:**
- **Integrates Efforts**: Ensures individual work contributes to group goals.
- **Motivates**: Helps realize potential.
- **Facilitates Change**: Reduces resistance to environmental or organizational shifts.`,
        visualizations: []
      },
      {
        title: "Maslow's Hierarchy of Needs",
        content: `A fundamental theory of motivation:
1. **Basic Physiological**: Food, shelter, basic salary.
2. **Safety/Security**: Job security, pension, protection from harm.
3. **Affiliation/Belonging**: Friendship, status in social groups.
4. **Esteem**: Recognition, autonomy, status.
5. **Self-Actualisation**: Personal growth and fulfillment.`,
        visualizations: [
          {
            id: 'maslow-pyramid',
            title: "Maslow's Pyramid",
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: '1. Physiological' },
                { id: '2', label: '2. Safety' },
                { id: '3', label: '3. Belonging' },
                { id: '4', label: '4. Esteem' },
                { id: '5', label: '5. Self-Actualisation' }
              ],
              edges: [
                { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }, { from: '4', to: '5' }
              ]
            }
          }
        ]
      },
      {
        title: "Leadership Styles",
        content: `1. **Autocratic (Authoritarian)**: Leader gives orders; one-way communication. Quick but may lower morale.
2. **Democratic (Participative)**: Leader consults group; two-way communication. High commitment.
3. **Laissez-faire (Free-rein)**: High independence for followers; leader interferes minimally.`,
        visualizations: [
          {
            id: 'leadership-styles',
            title: 'Leadership Styles',
            type: 'table',
            data: {
              headers: ['Style', 'Approach', 'Communication'],
              rows: [
                ['Autocratic', 'Orders given', 'One-way'],
                ['Democratic', 'Consultative', 'Two-way'],
                ['Laissez-faire', 'Free-rein', 'Subordinate-led']
              ]
            }
          }
        ]
      },
      {
        title: "Communication Process & Barriers",
        content: `**Process Elements**: Sender → Message → Encoding → Media → Decoding → Receiver → Feedback (Noise is the disruption).

**Barriers:**
1. **Semantic**: Language, jargon, symbols with multiple meanings.
2. **Psychological**: Premature evaluation, distrust, lack of attention.
3. **Organisational**: Rigid rules, status, complexity.
4. **Personal**: Fear of challenge, lack of incentives.`,
        visualizations: []
      },
      {
        title: "Financial & Non-Financial Incentives",
        content: `**Financial (Monetary)**:
- Bonus, Profit Sharing, Stock Options (ESOPs), Perquisites.

**Non-Financial (Psychological/Social)**:
- Status, Job Security, Job Enrichment, Employee Recognition, Empowerment.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "di-fc-001", term: "Directing", definition: "Process of instructing, guiding, and motivating employees", formula: null, example: "A manager guiding the team on a new project" },
    { id: "di-fc-002", term: "Autocratic Leadership", definition: "Leader gives orders and expects strict obedience; one-way communication", formula: null, example: "Manager deciding all deadlines without team input" },
    { id: "di-fc-003", term: "Democratic Leadership", definition: "Leader makes decisions in consultation with subordinates", formula: null, example: "Team meeting to decide on project strategy" },
    { id: "di-fc-004", term: "Semantic Barrier", definition: "Communication hurdle related to language, jargon, or symbols", formula: null, example: "Using complex engineering terms with a marketing team" },
    { id: "di-fc-005", term: "Grapevine", definition: "Informal communication network arising from social interactions", formula: null, example: "Lunchroom talk about upcoming policy changes" },
    { id: "di-fc-006", term: "Job Enrichment", definition: "Designing jobs with more variety, autonomy, and challenge", formula: null, example: "Giving a developer full ownership of a feature" },
    { id: "di-fc-007", term: "Stock Options (ESOP)", definition: "Offering company shares to employees at a below-market price", formula: null, example: "Company offering shares at $10 when market price is $50" }
  ],

  questions: [
    {
      id: "di-q-001", type: "mcq", difficulty: "easy",
      question: "Which function of management 'initiates action'?",
      options: ["Planning", "Organising", "Staffing", "Directing"],
      correct: 3,
      explanation: "Directing is the function that triggers action while others prepare the setting.",
      examTags: ["CUET"]
    },
    {
      id: "di-q-002", type: "mcq", difficulty: "easy",
      question: "In Maslow's hierarchy, 'Pension Plans' and 'Job Security' fall under:",
      options: ["Physiological Needs", "Safety Needs", "Social Needs", "Esteem Needs"],
      correct: 1,
      explanation: "Safety and security needs involve protection from physical/emotional harm and future stability.",
      examTags: ["CUET"]
    },
    {
      id: "di-q-003", type: "mcq", difficulty: "medium",
      question: "Which leadership style involves giving high independence to followers?",
      options: ["Autocratic", "Democratic", "Laissez-faire", "Dogmatic"],
      correct: 2,
      explanation: "Laissez-faire or Free-rein leadership gives subordinates high independence to set their own goals.",
      examTags: ["CUET"]
    },
    {
      id: "di-q-004", type: "mcq", difficulty: "medium",
      question: "Technical Jargon is an example of which type of communication barrier?",
      options: ["Semantic", "Psychological", "Organisational", "Personal"],
      correct: 0,
      explanation: "Semantic barriers relate to the choice of words, jargon, and symbols used in communication.",
      examTags: ["CUET"]
    },
    {
      id: "di-q-005", type: "mcq", difficulty: "hard",
      question: "Offering company shares at a lower price to employees is called:",
      options: ["Profit Sharing", "Bonus", "Stock Option (ESOP)", "Perquisites"],
      correct: 2,
      explanation: "Stock Options or Co-partnership involves offering company shares at a price cheaper than market price.",
      examTags: ["CUET"]
    }
  ]
};
