// src/data/business-studies/financial-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialManagementData = {
  subject: "Business Studies",
  chapter: "Financial Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u9-t1",
        title: "Concept & Objectives of Financial Management",
        content: {
          coreConcept: `**Financial Management** is concerned with the efficient acquisition and deployment of funds.

**Primary Objective**: To **Maximize Shareholders' Wealth** (Wealth Maximisation). This is reflected in the market price of the company's shares.

**Core Financial Decisions:**
1. **Investment Decision**: Where to invest funds (Capital Budgeting).
2. **Financing Decision**: How much to raise and from where (Debt vs Equity).
3. **Dividend Decision**: How much profit to distribute vs retain.`,
          speedSummary: "Primary Goal = Maximize Shareholder Wealth. Core decisions = Investment, Financing, Dividend."
        }
      },
      {
        id: "bs-u9-t2",
        title: "Capital Structure",
        content: {
          coreConcept: `**Capital Structure** refers to the mix between owners' funds (Equity) and borrowed funds (Debt).

**Trading on Equity**: Using fixed interest-bearing securities (Debt) to increase the return on equity shares. This works only when **ROI > Cost of Debt**.

| Factor | Influence on Debt |
| :--- | :--- |
| **Cash Flow Position** | Strong cash flow allows more debt |
| **ICR (Interest Coverage Ratio)** | High ICR allows more debt |
| **Cost of Debt** | Low cost favors debt |
| **Tax Rate** | High tax rate favors debt (Interest is tax-deductible) |
| **Stock Market Condition** | Bearish market favors debt; Bullish favors equity |`,
          speedSummary: "Capital Structure = Debt vs Equity. ROI > Cost of Debt = Advantageous for Trading on Equity."
        }
      },
      {
        id: "bs-u9-t3",
        title: "Fixed & Working Capital",
        content: {
          coreConcept: `**Fixed Capital**: Investment in long-term assets (Land, Mach). Influenced by Scale of operation, Nature of business, and Technology.

**Working Capital**: Funds for day-to-day operations (Current Assets - Current Liabilities).

**Factors affecting Working Capital:**
- **Nature of Business**: Trading needs less; Manufacturing needs more.
- **Scale of Operation**: Large needs more.
- **Business Cycle**: Boom needs more.
- **Seasonal Factors**: Peak season needs more.
- **Credit Allowed/Availed**: Affects cash flow.`,
          speedSummary: "Fixed (Long-term) vs Working (Short-term) capital."
        }
      }
    ]
  },

  flashcards: [
    { id: "fm-fc-001", term: "Financial Management", definition: "Efficient acquisition and deployment of funds.", formula: null, example: "Deciding whether to take a bank loan or issue shares." },
    { id: "fm-fc-002", term: "Wealth Maximization", definition: "The primary objective of maximizing the market price of equity shares.", formula: null, example: "Ensuring company decisions lead to rising share prices." },
    { id: "fm-fc-003", term: "Capital Budgeting", definition: "Decision relating to investment in long-term assets.", formula: null, example: "Deciding to buy a new automated machinery." },
    { id: "fm-fc-004", term: "Financial Leverage", definition: "The proportion of debt in the overall capital.", formula: "Debt / Equity", example: "A firm having 60% debt and 40% equity." },
    { id: "fm-fc-005", term: "ICR", definition: "Interest Coverage Ratio - measures a firm's ability to meet interest obligations.", formula: "EBIT / Interest", example: "An ICR of 5 means profit is 5x the interest expense." }
  ],

  questions: [
    {
      id: "fm-q-001", type: "mcq", difficulty: "easy",
      question: "The primary objective of financial management is:",
      options: ["Profit Maximization", "Wealth Maximization", "Cost Minimization", "Sales Maximization"],
      correct: 1,
      explanation: "Wealth maximization (maximizing share price) is the ultimate goal as it considers risk and time value of money.",
      examTags: ["CUET"]
    }
  ]
};
