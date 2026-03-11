// src/data/economics/govt-budget.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const govtBudgetData = {
  subject: "Economics",
  chapter: "Government Budget and the Economy",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u4-t1",
        title: "Objectives of Government Budget",
        content: {
          coreConcept: `
The government budget is an annual financial statement of estimated receipts and expenditure.

### Major Objectives
- **Reallocation of Resources**: Balancing profit and social welfare (Taxing harmful goods, subsidizing essentials like PMGKAY).
- **Redistribution of Income**: Reducing inequalities via progressive taxation.
- **Economic Stabilisation**: Managing AD during inflation/recession.
- **Public Goods**: Providing non-rivalrous and non-excludable goods (Streetlights, Defense).
          `
        }
      },
      {
        id: "eco-u4-t2",
        title: "Classification of Receipts and Expenditure",
        content: {
          coreConcept: `
The budget is divided into **Revenue Account** (Recurring) and **Capital Account** (Asset/Liability).

| Category | Definition | Examples |
| :--- | :--- | :--- |
| **Revenue Receipts** | No liability change; no asset reduction | GST, Income Tax, Fees, Fines |
| **Capital Receipts** | Creates liability OR reduces assets | Borrowings, Disinvestment, Loan Recovery |
| **Revenue Expenditure** | No asset creation; no liability reduction | Salaries, Pensions, Interest, Subsidies |
| **Capital Expenditure** | Creates assets OR reduces liability | Building Highways, Loan Repayment |
          `
        }
      },
      {
        id: "eco-u4-t3",
        title: "Budget Deficits",
        content: {
          coreConcept: `
Deficits measure the gap between expenditure and receipts.

### Types of Deficit
1. **Revenue Deficit (RD) = RE - RR**: Shows government dissaving.
2. **Fiscal Deficit (FD) = Total Exp - (RR + Non-Debt CR)**: Equals **Total Borrowing** required.
3. **Primary Deficit (PD) = FD - Interest Payments**: Shows borrowing for non-interest needs.
          `
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u4-fc1", question: "Define Fiscal Deficit.", answer: "The excess of total expenditure over total receipts excluding borrowings. It represents the total borrowing requirements." },
    { id: "eco-u4-fc2", question: "Difference between Direct and Indirect Tax?", answer: "Direct tax burden cannot be shifted (Income Tax); indirect tax burden is shifted to consumers (GST)." },
    { id: "eco-u4-fc3", question: "What are Public Goods?", answer: "Goods that are non-rivalrous and non-excludable (e.g., National Defense)." },
    { id: "eco-u4-fc4",
      question: "Formula for Primary Deficit?",
      correct: "Fiscal Deficit - Interest Payments.",
      explanation: "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates borrowing due to current expenses excluding past interest.",
      examTags: ["CUET", "CBSE"]
    }
  ],

  questions: [
    {
      id: "eco-u4-q1",
      type: "mcq",
      question: "Which of the following is a capital receipt?",
      options: ["Tax revenue", "Disinvestment", "Interest received", "Fees and Fines"],
      answer: "B",
      explanation: "Disinvestment (selling PSU stakes) reduces government assets, hence it is a capital receipt."
    },
    {
      id: "eco-u4-q2",
      type: "mcq",
      question: "Which of the following is a Capital Receipt?",
      options: ["Income Tax", "Borrowings", "Interest Received", "Profits from PSU"],
      correct: 1,
      explanation: "Borrowings create a liability for the government, making it a capital receipt.",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
