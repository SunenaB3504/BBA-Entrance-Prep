// src/data/business-studies/financial-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialManagementData = {
  subject: "Business Studies",
  chapter: "Financial Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Financial Management: Concept & Objectives",
        content: `Financial Management is concerned with the optimal procurement and usage of finance.

**Primary Objective:**
- **Wealth Maximisation**: Maximizing the market price of the company's equity shares. This is superior to profit maximization as it considers risk and time value of money.

**Role:**
- Determines size and composition of fixed assets.
- Determines quantum of current assets.
- Manages debt-equity mix.
- Affects Profit & Loss items (Interest, Depreciation).`,
        visualizations: []
      },
      {
        title: "Key Financial Decisions",
        content: `1. **Investment Decision**:
   - **Capital Budgeting**: Long-term investment in fixed assets. Irreversible except at huge cost.
   - **Working Capital**: Day-to-day liquidity management.
2. **Financing Decision**:
   - Choosing the mix of Debt and Equity. Debt is cheaper (tax shield) but riskier (fixed obligation).
3. **Dividend Decision**:
   - Deciding how much profit to distribute as dividends vs how much to retain for growth.`,
        visualizations: []
      },
      {
        title: "Capital Structure & Trading on Equity",
        content: `**Capital Structure**: The mix of long-term sources of funds (Debt vs Equity).

**Trading on Equity (Financial Leverage)**:
- Practice of using fixed-cost debt to increase Earnings Per Share (EPS).
- **Favourable**: ROI > Cost of Debt. (EPS increases).
- **Unfavourable**: ROI < Cost of Debt. (EPS decreases).`,
        visualizations: [
          {
            id: 'trading-on-equity-logic',
            title: 'Financial Leverage Logic',
            type: 'table',
            data: {
              headers: ['Condition', 'Leverage Type', 'Effect on EPS'],
              rows: [
                ['ROI > Cost of Debt', 'Favourable', 'Increases (Wealth creation)'],
                ['ROI < Cost of Debt', 'Unfavourable', 'Decreases (Wealth erosion)']
              ]
            }
          }
        ]
      },
      {
        title: "Fixed and Working Capital",
        content: `**Fixed Capital**: Investment in long-term assets (Plant, Building).
- **Factors**: Nature of business, scale, growth prospects, technology, collaboration.

**Working Capital**: Investment in current assets (Inventory, Debtors) for operations.
- **Factors**: Operating cycle (time from RM to cash), seasonal factors, credit terms, growth.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "fm-fc-001", term: "Financial Management", definition: "Management of flow of funds; optimal procurement and usage of finance", formula: null, example: "Deciding whether to take a bank loan or issue shares" },
    { id: "fm-fc-002", term: "Wealth Maximisation", definition: "Maximizing the market price of company's equity shares", formula: null, example: "Focusing on actions that drive stock price from $100 to $150" },
    { id: "fm-fc-003", term: "Capital Budgeting", definition: "Long-term investment decisions involving huge funds; irreversible", formula: null, example: "Investing $500M in a new semiconductor plant" },
    { id: "fm-fc-004", term: "Financing Decision", definition: "Decision about the proportion of debt and equity in capital structure", formula: null, example: "Choosing to raise 60% debt and 40% equity" },
    { id: "fm-fc-005", term: "Trading on Equity", definition: "Using debt to increase the EPS of equity shareholders", formula: "EPS = (EBIT - I)(1-T) / No. of Shares", example: "Using debt at 10% when ROI is 15% to boost shareholder returns" },
    { id: "fm-fc-006", term: "Operating Cycle", definition: "Time gap between purchasing raw materials and receiving cash from sales", formula: null, example: "A 90-day cycle for a garment manufacturer" },
    { id: "fm-fc-007", term: "Contractual Constraint", definition: "Restriction in loan agreements limiting dividend payments", formula: null, example: "Bank terms stating dividends cannot exceed 20% of profits" }
  ],

  questions: [
    {
      id: "fm-q-001", type: "mcq", difficulty: "easy",
      question: "The primary objective of financial management is:",
      options: ["Profit Maximisation", "Wealth Maximisation", "Cost Minimisation", "Sales Maximisation"],
      correct: 1,
      explanation: "Wealth maximisation (maximizing share price) is the ultimate goal as it considers risk and time.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-002", type: "mcq", difficulty: "easy",
      question: "Which of the following describes 'Capital Budgeting' decisions?",
      options: ["Short term", "Irreversible", "Low risk", "Low cost"],
      correct: 1,
      explanation: "Capital budgeting decisions are long-term, involve huge funds, and are generally irreversible without huge loss.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-003", type: "mcq", difficulty: "medium",
      question: "Financial leverage is favourable when:",
      options: ["ROI < Cost of Debt", "ROI > Cost of Debt", "ROI = Cost of Debt", "Debt = Equity"],
      correct: 1,
      explanation: "It is favourable when the return earned on investment is higher than the interest paid on debt.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-004", type: "mcq", difficulty: "medium",
      question: "Higher fixed operating costs (like rent) mean the firm should use ______ debt.",
      options: ["More", "Less", "Zero", "Equal"],
      correct: 1,
      explanation: "Firms with high fixed operating costs already have high risk, so they should avoid adding fixed financial risk (debt).",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-005", type: "mcq", difficulty: "hard",
      question: "Which factor affects both Fixed Capital and Working Capital requirements?",
      options: ["Production Cycle", "Business Cycle", "Growth Prospects", "Operating Efficiency"],
      correct: 2,
      explanation: "Growth prospects increase the need for both long-term assets (Fixed) and day-to-day operations (Working).",
      examTags: ["CUET"]
    }
  ]
};
