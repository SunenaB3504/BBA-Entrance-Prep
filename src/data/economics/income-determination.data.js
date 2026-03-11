// src/data/economics/income-determination.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const incomeDeterminationData = {
  subject: "Economics",
  chapter: "Determination of Income and Employment",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u3-t1",
        title: "Aggregate Demand, AS and Propensities",
        content: {
          coreConcept: `
Macroeconomic activity is governed by the interaction of planned demand and potential supply.

### Aggregate Demand (AD)
Total planned spending in an economy. In a 2-sector model: **AD = C + I**.
- **C (Consumption)**: Depends on income.
- **I (Investment)**: Assumed to be autonomous (independent of income).

### Aggregate Supply (AS)
The total value of output produced. AS is identical to **National Income (Y)**. It is represented by a **45-degree line**.

### Consumption and Saving Functions
- **Consumption Function**: C = c̅ + bY (where c̅ is autonomous consumption, b is MPC).
- **Saving Function**: S = -c̅ + (1-b)Y (where 1-b is MPS).

### Key Identities
- **APC + APS = 1** (Portion of total income).
- **MPC + MPS = 1** (Portion of additional income).
          `
        }
      },
      {
        id: "eco-u3-t2",
        title: "The Investment Multiplier",
        content: {
          coreConcept: `
The multiplier (k) explains how an initial increase in investment leads to a many-fold increase in national income.

### Logic of the Multiplier
"One person's spending is another person's income."
When New Investment (ΔI) is made → Income rises → Consumption rises → New Income is generated for others.

### Formulas
- **k = ΔY / ΔI**
- **k = 1 / (1 - MPC)**
- **k = 1 / MPS**

### Range of Multiplier
- **Minimum k = 1** (when MPC = 0).
- **Maximum k = ∞** (when MPC = 1).
          `
        }
      },
      {
        id: "eco-u3-t3",
        title: "Equilibrium and Demand Gaps",
        content: { coreConcept: `
Equilibrium occurs where **AD = AS** or **S = I**.

### Demand Gaps
| Gap Type | Situation | Impact | Correction |
| :--- | :--- | :--- | :--- |
| **Excess Demand** | AD > AS at full employment | Inflationary Gap; prices rise | Contractionary (↑T, ↓G, ↑Rates) |
| **Deficient Demand** | AD < AS at full employment | Deflationary Gap; unemployment | Expansionary (↓T, ↑G, ↓Rates) |

### Full vs Involuntary Unemployment
- **Full Employment**: Everyone willing and able at current wage finds work (allows frictional/structural).
- **Involuntary**: Willing to work but can't find jobs due to low demand.
          ` }
      }
    ]
  },

  flashcards: [
    { id: "eco-u3-fc1", question: "What is MPC?", answer: "Marginal Propensity to Consume (ΔC / ΔY). Ratio of change in consumption to change in income." },
    { id: "eco-u3-fc2", question: "If MPS = 0.2, what is the Multiplier?", answer: "k = 1 / 0.2 = 5." },
    { id: "eco-u3-fc3", question: "What is the 45-degree line?", answer: "Represents Aggregate Supply (AS = Y) in the Keynesian model." },
    { id: "eco-u3-fc4", question: "Define Inflationary Gap.", answer: "Amount by which actual AD exceeds AD required for full employment." },
    { id: "eco-u3-fc5", question: "What is the Paradox of Thrift?", answer: "If everyone tries to save more, AD falls, leading to lower total income." }
  ],

  questions: [
    {
      id: "eco-u3-q1",
      type: "mcq",
      question: "If increase in National Income is equal to increase in consumption, the value of MPS is:",
      options: ["1", "0", "0.5", "Infinity"],
      correct: 1,
      explanation: "If ΔY = ΔC, then ΔS = 0. In this case, MPS = ΔS/ΔY = 0."
    },
    {
      id: "eco-u3-q2",
      type: "mcq",
      question: "If APC = 0.8, what is the value of APS?",
      options: ["0.2", "0.8", "1", "0"],
      correct: 0,
      explanation: "APC + APS = 1. Therefore, if APC = 0.8, APS = 1 - 0.8 = 0.2.",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u3-q3",
      type: "mcq",
      question: "In the context of AD, C + I + G + (X-M), the term (X-M) stands for:",
      options: ["Gross Exports", "Net Exports", "Total Imports", "Net Imports"],
      correct: 1,
      explanation: "Net Exports is the difference between Exports (X) and Imports (M).",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
