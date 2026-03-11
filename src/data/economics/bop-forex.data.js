// src/data/economics/bop-forex.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const bopForexData = {
  subject: "Economics",
  chapter: "Balance of Payments and Foreign Exchange",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u5-t1",
        title: "Foreign Exchange Rate Systems",
        content: {
          coreConcept: `
The exchange rate is the price of one currency in terms of another.

### Systems
- **Fixed System**: Rate set by govt/central bank (Requires large reserves).
- **Flexible (Floating)**: Rate determined by market forces (Demand/Supply).
- **Managed Floating**: Market primary; Central Bank intervenes to curb volatility (Dirty Floating).

### Appreciation vs Depreciation
- **Appreciation**: Rise in value of domestic currency (Market forces).
- **Depreciation**: Fall in value of domestic currency (Market forces).
- **Devaluation**: Deliberate reduction in value (Government policy - Fixed system).
          `
        }
      },
      {
        id: "eco-u5-t2",
        title: "Balance of Payments (BoP)",
        content: {
          coreConcept: `
BoP is a systematic record of all economic transactions with the rest of the world.

### Accounts
1. **Current Account**: Visible/Invisible trade and Unilateral transfers (Exports/Imports of goods/services).
2. **Capital Account**: Changes asset/liability position (FDI, FPI, Borrowings).

### Key Concepts
- **Autonomous Items**: Above-the-line; for profit; independent of BoP.
- **Accommodating Items**: Below-the-line; to bridge the BoP gap (Reserve changes).
          `
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u5-fc1", question: "What is Managed Floating?", answer: "A system where the exchange rate is market-determined but central banks intervene to stabilize it." },
    { id: "eco-u5-fc2", question: "Components of the Current Account?", answer: "Visible Trade (merchandise), Invisible Trade (services), and Unilateral Transfers." },
    { id: "eco-u5-fc3", question: "What are Autonomous Items?", answer: "Transactions undertaken for economic profit, independent of the BoP position." },
    { id: "eco-u5-fc4", question: "Define Currency Depreciation.", answer: "Decrease in the value of domestic currency in terms of foreign currency due to market forces." }
  ],

  questions: [
    {
      id: "eco-u5-q1",
      type: "mcq",
      question: "Which of the following is an accommodating item in BoP?",
      options: ["FDI inflow", "Service Exports", "Increase in Forex Reserves", "Import of Machinery"],
      correct: 2,
      explanation: "Official reserve transactions are accommodating items used to bridge the BoP gap.",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u5-q2",
      type: "mcq",
      question: "If market exchange rate for $1 is ₹80 and the government increases it to ₹82, this is:",
      options: ["Appreciation", "Depreciation", "Devaluation", "Revaluation"],
      correct: 2,
      explanation: "In a fixed exchange rate system, when the govt reduces the value of domestic currency, it is called Devaluation. (If market forces do it, it's Depreciation).",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
