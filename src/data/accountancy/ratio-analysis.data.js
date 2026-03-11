// src/data/accountancy/ratio-analysis.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const ratioAnalysisData = {
  subject: "Accountancy",
  chapter: "Ratio Analysis",
  examTags: ["CUET", "MH-CET"],

  flashcards: [
    { id: "ra-fc-001", term: "Current Ratio", definition: "Measures ability to meet short-term obligations using Current Assets.", formula: "Current Assets / Current Liabilities", example: "Ideal: 2:1" },
    { id: "ra-fc-002", term: "Quick Ratio", definition: "Measures immediate liquidity excluding inventory and prepaid expenses.", formula: "(Current Assets - Inventory - Prepaid Exp) / Current Liabilities", example: "Ideal: 1:1" },
    { id: "ra-fc-003", term: "Debt-Equity Ratio", definition: "Relationship between long-term borrowed funds and owner's funds.", formula: "Long-term Debt / Shareholders' Funds", example: "Ideal: 2:1" },
    { id: "ra-fc-004", term: "Interest Coverage Ratio", definition: "Safety margin for interest payments on long-term loans.", formula: "PBIT / Fixed Interest Charges", example: "Expressed in 'Times'" },
    { id: "ra-fc-005", term: "Inventory Turnover Ratio", definition: "Efficiency of inventory management (speed of movement).", formula: "Cost of Revenue from Operations / Average Inventory", example: "High = Efficiency" },
    { id: "ra-fc-006", term: "Trade Receivables Turnover", definition: "Speed of collection from credit customers.", formula: "Net Credit Sales / Average Trade Receivables", example: null },
    { id: "ra-fc-007", term: "Return on Investment (ROI)", definition: "Overall profitability relative to all capital used.", formula: "(PBIT / Capital Employed) × 100", example: "Master Ratio" },
    { id: "ra-fc-008", term: "Operating Ratio", definition: "Total operating cost as a percentage of sales.", formula: "(COGS + Operating Exp) / Net Sales * 100", example: "Lower is better" },
    { id: "ra-fc-009", term: "Working Capital Turnover", definition: "Sales generated per unit of working capital.", formula: "Net Sales / Working Capital", example: null }
  ],

  questions: [
    {
      id: "ra-q-001", type: "numerical", difficulty: "medium",
      question: "Inventory TO Ratio 5. Revenue 5L. GP 25% on Cost. Closing Inventory 60k. Opening Inventory?",
      options: ["₹80,000", "₹60,000", "₹1,00,000", "₹50,000"],
      correct: 2,
      solution_steps: [
        "GP 25% on Cost = 20% on Sales",
        "GP = 20% of 5L = 1L. COGS = 4L.",
        "Avg Inv = COGS / ITR = 4L / 5 = 80k.",
        "80k = (Op + 60k) / 2 => Op = 1.6L - 60k = 1L."
      ],
      explanation: "Reverse calculation: Start from sales to find COGS, then average inventory, then opening inventory.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-002", type: "assertion-reason", difficulty: "medium",
      assertion: "Gross Profit Ratio is always higher than Net Profit Ratio.",
      reason: "Net Profit is calculated after deducting indirect expenses from Gross Profit.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 3,
      explanation: "Assertion is false because non-operating income (like gain on sale) could make Net Profit higher than GP. Reason is a standard rule and thus true.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-003", type: "mcq", difficulty: "medium",
      question: "Quick Ratio is 0.8:1. Effect of 'Goods purchased on credit'?",
      options: ["Increase", "Decrease", "No Change", "May Increase or Decrease"],
      correct: 1,
      explanation: "Stock (not QA) increases, but Creditors (CL) increase. Denominator grows with no change in numerator, hence ratio drops.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-004", type: "numerical", difficulty: "hard",
      question: "COGS 6L. GP on Cost 25%. Cash Sales 20% of Total. Avg Debtors 1.5L. TR Turnover Ratio?",
      options: ["4 Times", "5 Times", "3.33 Times", "6 Times"],
      correct: 0,
      solution_steps: [
        "Revenue = 6L (COGS) + 1.5L (GP) = 7.5L.",
        "Credit Sales = 80% of 7.5L = 6L.",
        "Ratio = 6L / 1.5L = 4 Times."
      ],
      explanation: "TR turnover uses Credit Sales. GP on cost must be added to COGS to find total revenue first.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-005", type: "mcq", difficulty: "medium",
      question: "Which transaction will increase Liquid Ratio without affecting Current Ratio?",
      options: ["Sale of stock at cost", "Sale of stock at loss", "Sale of stock at profit", "Sale of investments"],
      correct: 0,
      explanation: "Sale of stock at cost swaps a non-liquid CA (Stock) for a liquid CA (Cash). Total CA constant (CR safe), Liquid Assets up (LR up).",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-006", type: "mcq", difficulty: "hard",
      question: "Accountant omitted recording ₹2L interest received on investment. Effect on NP and Op Profit Ratios?",
      options: [
        "Both increase",
        "NP increases, Op Profit no change",
        "Both no change",
        "NP no change, Op Profit increases"
      ],
      correct: 1,
      explanation: "Interest received is non-operating. It increases Net Profit but does not touch Operating Profit.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-007", type: "mcq", difficulty: "medium",
      question: "Loose Tools are:",
      options: [
        "Current Assets in B/S, included in CR",
        "Current Assets in B/S, excluded from CR",
        "Non-current Assets",
        "Included in Quick Assets"
      ],
      correct: 1,
      explanation: "Loose tools are part of inventory (CA), but standard practice excludes them from Current Ratio for conservative liquidity testing.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-008", type: "numerical", difficulty: "hard",
      question: "PAT 6L. Tax 20%. EBIT 10L. Debentures 25L. Rate of Interest?",
      options: ["12%", "10%", "8%", "15%"],
      correct: 1,
      solution_steps: [
        "PBT = 6L / 0.8 = 7.5L.",
        "Interest = EBIT - PBT = 10L - 7.5L = 2.5L.",
        "Rate = (2.5L / 25L) * 100 = 10%."
      ],
      explanation: "Uncover the interest amount by bridging PAT to EBIT.",
      examTags: ["CUET"]
    }
  ]
};
