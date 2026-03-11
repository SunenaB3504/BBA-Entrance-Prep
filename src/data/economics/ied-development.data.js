// src/data/economics/ied-development.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const iedDevelopmentData = {
  subject: "Economics",
  chapter: "Development Experience (1947-1991)",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u6-t1",
        title: "Indian Economy on the Eve of Independence",
        content: {
          coreConcept: `
Colonial rule transformed India into a supplier of raw materials and a market for British finished goods.

### Agriculture
- **Zamindari System**: Exploitave land revenue collection in Bengal Presidency.
- **Commercialisation**: Shift to cash crops (Indigo) for British industries.

### Industry
- **Two-fold de-industrialisation**: Decay of indigenous handicrafts and prevention of modern industrial base.
- **Drain of Wealth**: Export surplus used for British administrative/war expenses.

### Key Milestones
- **1850**: Introduction of Railways (First train Mumbai to Thane, 1853).
- **1869**: Suez Canal opening (Direct route to Britain).
- **1907**: TISCO incorporated.
- **1921**: Year of Great Divide (Demographic transition).
          `
        }
      },
      {
        id: "eco-u6-t2",
        title: "Planning Era: 1950-1990",
        content: {
          coreConcept: `
Focused on a "Socialist Pattern of Society" with state-led growth.

### Four Goals (GMSE)
1. **Growth**: Increase in GDP.
2. **Modernisation**: New technology and social outlook changes.
3. **Self-reliance**: Avoiding imports (Import Substitution).
4. **Equity**: Benefits reaching the poor.

### Key Policies
- **Green Revolution**: HYV seeds, irrigation, and fertilisers leading to self-sufficiency.
- **IPR 1956**: Classified industries into 3 schedules; State held "commanding heights".
- **Karve Committee (1955)**: Focused on Small Scale Industries (SSI) for rural employment.
          `
        }
      },
      {
        id: "eco-u6-t3",
        title: "Economic Reforms (LPG) - 1991",
        content: {
          coreConcept: `
Triggered by a Balance of Payments crisis, high inflation, and fiscal deficit.

### LPG Framework
- **Liberalisation**: Removing License-Permit Raj; RBI as facilitator; Rupee devaluation.
- **Privatisation**: Disinvestment of PSUs; Maharatna/Navratna autonomy.
- **Globalisation**: Integration with world; Outsourcing hub; WTO (1995).

### Critical Appraisal
- **Pros**: High GDP growth, record forex reserves, consumer choice.
- **Cons**: Jobless growth, neglect of agriculture, growing inequality.
          `
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u6-fc1", question: "What is the Year of Great Divide?", answer: "1921 - marks the transition to stable population growth in India." },
    { id: "eco-u6-fc2", question: "Define Land Ceiling.", answer: "Fixing the maximum legal size of agricultural land an individual can own to promote equity." },
    { id: "eco-u6-fc3", question: "What was the Karve Committee?", answer: "The 1955 committee that recommended promoting SSI for rural development." },
    { id: "eco-u6-fc4", question: "What is Outsourcing?", answer: "Hiring external/foreign specialists to perform business tasks (e.g., India as a BPO hub)." },
    { id: "eco-u6-fc5", question: "What are Maharatnas?", answer: "PSUs with the highest financial and operational autonomy (e.g., ONGC, BHEL)." }
  ],

  questions: [
    {
      id: "eco-u6-q1",
      type: "mcq",
      question: "Which of the following was the main reason for the decay of Indian handicrafts during colonial rule?",
      options: ["Lack of technology", "Discriminatory tariff policy", "High labor costs", "Competition from China"],
      correct: 1,
      explanation: "The TISCO (Tata Iron and Steel Company) was incorporated in 1907 at Sakchi (now Jamshedpur).",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u6-q2",
      type: "mcq",
      question: "Under the British Rule, the main purpose of building railways was:",
      options: ["Benefit of Indian People", "Internal and External Trade", "Connecting Pilgrimages", "None"],
      correct: 1,
      explanation: "Railways were introduced (1850) primarily to facilitate the transport of raw materials and finished goods for British trade interests.",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
