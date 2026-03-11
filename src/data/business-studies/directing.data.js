// src/data/business-studies/directing.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const directingData = {
  subject: "Business Studies",
  chapter: "Directing",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u7-t1",
        title: "Concept & Elements of Directing",
        content: {
          coreConcept: `**Directing** is the heart of management. It involves instructing, guiding, counseling, motivating and leading people in the organisation.

**Key Elements:**
1. **Supervision**: Overseeing work (Lower level).
2. **Motivation**: Stimulating people to action.
3. **Leadership**: Influencing behavior.
4. **Communication**: Exchange of ideas and info.`,
          speedSummary: "Directing = Supervision + Motivation + Leadership + Communication."
        }
      },
      {
        id: "bs-u7-t2",
        title: "Motivation & Maslow's Hierarchy",
        content: {
          coreConcept: `**Motivation** is an internal feeling (Need -> Drive -> Action -> Satisfaction).

**Maslow's Need Hierarchy Theory:**
1. **Basic Physiological Needs**: Hunger, thirst, sleep (Salary).
2. **Safety/Security Needs**: Physical and economic safety (Job security).
3. **Affiliation/Social Needs**: Acceptance and friendship (Peer relations).
4. **Esteem Needs**: Recognition and status (Job titles).
5. **Self-Actualisation Needs**: Growth and self-fulfillment.

**Incentives:**
- **Financial**: Pay, Bonus, Profit sharing, Co-partnership.
- **Non-Financial**: Status, Climate, Career growth, Job enrichment.`,
          speedSummary: "Motivation = Stimulus for action. Maslow = Needs hierarchy (Physio to Self-Actualisation)."
        }
      },
      {
        id: "bs-u7-t3",
        title: "Leadership Styles",
        content: {
          coreConcept: `Leadership is influencing others to work willingly for goals.

| Style | Characteristics | Suitability |
| :--- | :--- | :--- |
| **Autocratic** | Leader gives orders, no consultation | Crisis, unskilled labor |
| **Democratic** | Leader consults subordinates | Skilled team, complex tasks |
| **Laissez Faire** | Full freedom to subordinates | Highly expert professionals |`,
          speedSummary: "Autocratic (Boss), Democratic (Team), Laissez Faire (Freedom)."
        }
      },
      {
        id: "bs-u7-t4",
        title: "Communication",
        content: {
          coreConcept: `**Formal Communication**: Official channels (Chain of command).
**Informal Communication**: "Grapevine" (Social relations, spreads fast but inaccurate).

**Barriers to Communication:**
- **Semantic**: Language, symbols with different meanings, technical jargon.
- **Psychological**: Premature evaluation, lack of attention, distrust.
- **Organisational**: Complex structure, rules and regs.
- **Personal**: Fear of authority, lack of incentives.`,
          speedSummary: "Formal (Official) vs Informal (Grapevine). Barriers = Semantic, Psychological, Org, Personal."
        }
      }
    ]
  },

  flashcards: [
    { id: "di-fc-001", term: "Directing", definition: "Process of instructing, guiding and motivating people.", formula: null, example: "A manager demonstrating a new sales technique." },
    { id: "di-fc-002", term: "Motivation", definition: "Stimulating people to act in order to achieve desired goals.", formula: null, example: "Giving a performance bonus to increase output." },
    { id: "di-fc-003", term: "Maslow's Hierarchy", definition: "Theory that human needs follow a hierarchy from basic to self-fulfillment.", formula: null, example: "Seeking job security before seeking a prestigious title." },
    { id: "di-fc-004", term: "Autocratic Leader", definition: "Leader who gives orders and expects strict obedience without consulting others.", formula: null, example: "A military commander's leadership." },
    { id: "di-fc-005", term: "Grapevine", definition: "Informal communication network within an organisation.", formula: null, example: "Rumors about a potential merger spreading at the water cooler." },
    { id: "di-fc-006", term: "Financial Incentives", definition: "Monetary rewards used to motivate employees.", formula: null, example: "Profit sharing or bonus payments." }
  ],

  questions: [
    {
      id: "di-q-001", type: "mcq", difficulty: "easy",
      question: "Which element of directing involves influencing people to work willingly towards goals?",
      options: ["Supervision", "Motivation", "Leadership", "Communication"],
      correct: 2,
      explanation: "Leadership is the art of influencing people so that they strive willingly and enthusiastically toward the achievement of group goals.",
      examTags: ["CUET"]
    }
  ]
};
