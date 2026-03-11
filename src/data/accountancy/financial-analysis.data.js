// src/data/accountancy/financial-analysis.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialAnalysisData = {
  subject: "Accountancy",
  chapter: "Analysis of Financial Statements",
  examTags: ["CUET"],

  flashcards: [
    { id: "fa-fc-001", term: "Horizontal Analysis", definition: "Analysis of financial data over a series of years to identify trends/changes.", formula: null, example: "Comparative Statements" },
    { id: "fa-fc-002", term: "Vertical Analysis", definition: "Analysis for a single period where each line item is expressed as a % of a common base.", formula: null, example: "Common Size Statements" },
    { id: "fa-fc-003", term: "Absolute Change", definition: "The literal difference between current and previous year values.", formula: "Current Year - Previous Year", example: null },
    { id: "fa-fc-004", term: "Percentage Change", definition: "The relative change in a value compared to the base year.", formula: "(Absolute Change / Previous Year) × 100", example: null },
    { id: "fa-fc-005", term: "Inter-firm Comparison", definition: "Comparing the financial results of one firm with another in the same industry.", formula: null, example: null },
    { id: "fa-fc-006", term: "Intra-firm Comparison", definition: "Comparing the performance of the same firm across different time periods.", formula: null, example: null },
    { id: "fa-fc-007", term: "Window Dressing", definition: "Manipulating financial records to present a better-than-actual financial position.", formula: null, example: null }
  ],

  questions: [
    {
      id: "fa-q-001", type: "mcq", difficulty: "medium",
      question: "What is the common base (100%) for a Common Size Statement of Profit and Loss?",
      options: ["Total Assets", "Gross Profit", "Revenue from Operations", "Net Profit"],
      correct: 2,
      explanation: "In vertical analysis of the P&L, all items are expressed as a percentage of Net Sales (Revenue from Operations).",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-002", type: "mcq", difficulty: "medium",
      question: "Which type of analysis is also known as 'Time Series Analysis'?",
      options: ["Vertical", "Horizontal", "Ratio", "Static"],
      correct: 1,
      explanation: "Horizontal analysis compares data over multiple years, showing a 'series' of time.",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-003", type: "assertion-reason", difficulty: "medium",
      assertion: "Financial Statement Analysis ignores price-level changes.",
      reason: "Financial statements are prepared on the historical cost postulate.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Since assets are recorded at purchase price (historical cost), inflation (price level changes) is naturally excluded from the data.",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-004", type: "numerical", difficulty: "hard",
      question: "PY Revenue: 16L, CY Revenue: 20L. PY PBT: 6L, CY PBT: 9L. Absolute Change and % Change in PBT?",
      options: ["3L, 50%", "4L, 25%", "3L, 33.3%", "4L, 50%"],
      correct: 0,
      solution_steps: [
        "Abs Change PBT = 9L - 6L = 3L",
        "% Change PBT = (3L / 6L) * 100 = 50%"
      ],
      explanation: "The percentage change is always calculated using the Previous Year as the base.",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-005", type: "mcq", difficulty: "medium",
      question: "Which stakeholder is primarily interested in the short-term liquidity of the firm?",
      options: ["Shareholders", "Lenders", "Trade Payables", "Labour Unions"],
      correct: 2,
      explanation: "Trade Payables (creditors) want to know if the firm has enough cash to pay them back quickly.",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-006", type: "mcq", difficulty: "medium",
      question: "Comparison of a firm's performance of 2023 with 2024 is called:",
      options: ["Inter-firm", "Intra-firm", "Static", "External"],
      correct: 1,
      explanation: "Comparing the same firm's data over different years is 'Intra-firm' (internal/within).",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-007", type: "mcq", difficulty: "medium",
      question: "Common Size Balance Sheet base is:",
      options: ["Revenue", "Share Capital", "Total Assets", "Current Assets"],
      correct: 2,
      explanation: "Total Assets (which equals Total Liabilities + Equity) is taken as the 100% base.",
      examTags: ["CUET"]
    },
    {
      id: "fa-q-008", type: "mcq", difficulty: "medium",
      question: "The Jaws Ratio (Revenue growth > Expense growth) results in:",
      options: ["Decreased Net Profit", "Increased Net Profit %", "Stable Profit", "Loss"],
      correct: 1,
      explanation: "When sales grow faster than costs, the profit margin expands.",
      examTags: ["CUET"]
    }
  ]
};
