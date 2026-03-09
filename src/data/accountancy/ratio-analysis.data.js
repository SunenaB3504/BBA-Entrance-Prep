// src/data/accountancy/ratio-analysis.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const ratioAnalysisData = {
  subject: "Accountancy",
  chapter: "Ratio Analysis",
  examTags: ["CUET", "MH-CET"],

  flashcards: [
    { id: "ra-fc-001", term: "Current Ratio", definition: "Measures ability to meet short-term obligations", formula: "Current Assets / Current Liabilities", example: "CA=1,00,000 | CL=40,000 → Ratio=2.5" },
    { id: "ra-fc-002", term: "Quick Ratio", definition: "Measures immediate liquidity excluding inventory", formula: "(Current Assets - Inventory) / Current Liabilities", example: "Liquid Assets=80,000 | CL=40,000 → Ratio=2" },
    { id: "ra-fc-003", term: "Gross Profit Ratio", definition: "Proportion of gross profit to net sales", formula: "(Gross Profit / Net Sales) × 100", example: "GP=50,000 | Sales=2,00,000 → 25%" },
    { id: "ra-fc-004", term: "Net Profit Ratio", definition: "Proportion of net profit to net sales", formula: "(Net Profit after Tax / Net Sales) × 100", example: "NP=30,000 | Sales=2,00,000 → 15%" },
    { id: "ra-fc-005", term: "Debt-Equity Ratio", definition: "Relationship between borrowed funds and owner's funds", formula: "Long-term Debt / Shareholders' Funds", example: "Debt=4,00,000 | Equity=2,00,000 → 2:1" },
    { id: "ra-fc-006", term: "Inventory Turnover Ratio", definition: "Number of times inventory is converted to sales", formula: "Cost of Revenue from Operations / Average Inventory", example: "COGS=6,00,000 | Avg Inv=1,00,000 → 6 times" },
    { id: "ra-fc-007", term: "Return on Investment (ROI)", definition: "Profitability relative to capital employed", formula: "(Net Profit before Interest & Tax / Capital Employed) × 100", example: "EBIT=50,000 | CE=5,00,000 → 10%" }
  ],

  questions: [
    {
      id: "ra-q-001", type: "numerical", difficulty: "easy",
      question: "Current Ratio is 2.5 and Current Liabilities are ₹40,000. Find Current Assets.",
      options: ["₹80,000", "₹1,00,000", "₹60,000", "₹1,20,000"],
      correct: 1,
      solution_steps: [
        "Formula: Current Assets = Current Ratio × Current Liabilities",
        "= 2.5 × ₹40,000",
        "= ₹1,00,000"
      ],
      explanation: "Current Assets = Current Ratio × Current Liabilities = 2.5 × 40,000 = ₹1,00,000",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-002", type: "assertion-reason", difficulty: "medium",
      assertion: "A high current ratio always indicates good liquidity of a firm.",
      reason: "Current ratio measures the ability of a firm to meet its short-term obligations.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 3,
      explanation: "A is false — a very high current ratio can mean idle or excess current assets (like unsold inventory or cash lying idle), which is not necessarily good. R is independently true but doesn't explain A since A itself is a false statement.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-003", type: "mcq", difficulty: "easy",
      question: "Which of the following is a Liquidity Ratio?",
      options: ["Debt-Equity Ratio", "Quick Ratio", "Gross Profit Ratio", "Inventory Turnover Ratio"],
      correct: 1,
      explanation: "Quick Ratio (also called Acid Test Ratio) is a Liquidity Ratio. Debt-Equity is a Solvency Ratio, Gross Profit Ratio is a Profitability Ratio, and Inventory Turnover is an Activity Ratio.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-004", type: "numerical", difficulty: "medium",
      question: "Net Sales = ₹5,00,000; Cost of Goods Sold = ₹3,50,000. What is the Gross Profit Ratio?",
      options: ["70%", "30%", "40%", "25%"],
      correct: 1,
      solution_steps: [
        "Gross Profit = Net Sales − COGS = 5,00,000 − 3,50,000 = ₹1,50,000",
        "Gross Profit Ratio = (Gross Profit / Net Sales) × 100",
        "= (1,50,000 / 5,00,000) × 100 = 30%"
      ],
      explanation: "GP = 5,00,000 − 3,50,000 = 1,50,000. GP Ratio = (1,50,000 / 5,00,000) × 100 = 30%",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-005", type: "case-study", difficulty: "medium",
      passage: "XYZ Ltd. has the following data: Current Assets ₹2,40,000; Inventory ₹80,000; Current Liabilities ₹1,20,000; Long-term Debt ₹3,00,000; Shareholders' Funds ₹1,50,000.",
      question: "What is the Quick Ratio of XYZ Ltd.?",
      options: ["2:1", "1.33:1", "1.67:1", "0.67:1"],
      correct: 1,
      explanation: "Quick Assets = Current Assets − Inventory = 2,40,000 − 80,000 = 1,60,000. Quick Ratio = 1,60,000 / 1,20,000 = 1.33:1",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-006", type: "case-study", difficulty: "medium",
      passage: "XYZ Ltd. has the following data: Current Assets ₹2,40,000; Inventory ₹80,000; Current Liabilities ₹1,20,000; Long-term Debt ₹3,00,000; Shareholders' Funds ₹1,50,000.",
      question: "What is the Debt-Equity Ratio of XYZ Ltd.?",
      options: ["1:2", "2:1", "3:1", "1:3"],
      correct: 1,
      explanation: "Debt-Equity Ratio = Long-term Debt / Shareholders' Funds = 3,00,000 / 1,50,000 = 2:1",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-007", type: "match-column", difficulty: "medium",
      question: "Match the ratios with their categories:",
      column_a: ["Current Ratio", "Debt-Equity Ratio", "Gross Profit Ratio", "Inventory Turnover Ratio"],
      column_b: ["Activity Ratio", "Profitability Ratio", "Solvency Ratio", "Liquidity Ratio"],
      correct_mapping: [3, 2, 1, 0],
      options: [
        "Current-Liquidity, Debt-Equity-Solvency, GP-Profitability, IT-Activity",
        "Current-Solvency, Debt-Equity-Liquidity, GP-Activity, IT-Profitability",
        "Current-Activity, Debt-Equity-Profitability, GP-Liquidity, IT-Solvency",
        "Current-Profitability, Debt-Equity-Activity, GP-Solvency, IT-Liquidity"
      ],
      correct: 0,
      explanation: "Current Ratio = Liquidity; Debt-Equity = Solvency; Gross Profit Ratio = Profitability; Inventory Turnover = Activity Ratio.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-008", type: "mcq", difficulty: "easy",
      question: "Ideal Current Ratio is considered to be:",
      options: ["1:1", "2:1", "3:1", "0.5:1"],
      correct: 1,
      explanation: "The ideal Current Ratio is 2:1, meaning current assets should be twice the current liabilities to ensure comfortable short-term solvency.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-009", type: "mcq", difficulty: "medium",
      question: "Which ratio is used to assess the long-term solvency of a firm?",
      options: ["Current Ratio", "Quick Ratio", "Debt-Equity Ratio", "Net Profit Ratio"],
      correct: 2,
      explanation: "Debt-Equity Ratio is a Solvency Ratio that measures long-term financial stability. Current and Quick Ratios measure short-term liquidity, while Net Profit Ratio is a profitability measure.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-010", type: "numerical", difficulty: "hard",
      question: "If Inventory Turnover Ratio is 6 times and Cost of Revenue from Operations is ₹6,00,000, what is Average Inventory?",
      options: ["₹50,000", "₹1,00,000", "₹36,00,000", "₹60,000"],
      correct: 1,
      solution_steps: [
        "Formula: Inventory Turnover Ratio = COGS / Average Inventory",
        "6 = 6,00,000 / Average Inventory",
        "Average Inventory = 6,00,000 / 6 = ₹1,00,000"
      ],
      explanation: "Average Inventory = COGS / Inventory Turnover Ratio = 6,00,000 / 6 = ₹1,00,000",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-011", type: "assertion-reason", difficulty: "hard",
      assertion: "A very low Debt-Equity Ratio is always beneficial for a company.",
      reason: "Lower debt means lower financial risk and interest burden.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 1,
      explanation: "Both statements are true — lower debt does reduce financial risk (R is true). However, R is NOT a complete explanation of A because very low debt may also mean underutilization of financial leverage, which can limit growth. So A is partially misleading and R, while true, does not fully explain A.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-012", type: "mcq", difficulty: "easy",
      question: "Which of the following is NOT included in liquid assets?",
      options: ["Cash in hand", "Marketable securities", "Inventory", "Debtors"],
      correct: 2,
      explanation: "Inventory is excluded from liquid assets because it cannot be immediately converted to cash. Liquid assets include cash, marketable securities, and debtors (receivables).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-013", type: "numerical", difficulty: "hard",
      question: "Opening Inventory = ₹40,000; Closing Inventory = ₹60,000; COGS = ₹2,00,000. Calculate Inventory Turnover Ratio.",
      options: ["4 times", "5 times", "3.33 times", "6 times"],
      correct: 0,
      solution_steps: [
        "Average Inventory = (Opening + Closing) / 2 = (40,000 + 60,000) / 2 = ₹50,000",
        "Inventory Turnover Ratio = COGS / Average Inventory",
        "= 2,00,000 / 50,000 = 4 times"
      ],
      explanation: "Avg Inventory = (40,000+60,000)/2 = 50,000. ITR = 2,00,000/50,000 = 4 times.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ra-q-014", type: "mcq", difficulty: "medium",
      question: "Proprietary Ratio is calculated as:",
      options: [
        "Shareholders' Funds / Total Assets",
        "Total Assets / Shareholders' Funds",
        "Long-term Debt / Shareholders' Funds",
        "Shareholders' Funds / Fixed Assets"
      ],
      correct: 0,
      explanation: "Proprietary Ratio = Shareholders' Funds / Total Assets. It shows the proportion of total assets financed by shareholders.",
      examTags: ["CUET"]
    },
    {
      id: "ra-q-015", type: "mcq", difficulty: "medium",
      question: "Working Capital Turnover Ratio is calculated as:",
      options: [
        "Net Sales / Fixed Assets",
        "Net Sales / Working Capital",
        "COGS / Working Capital",
        "Net Sales / Current Assets"
      ],
      correct: 1,
      explanation: "Working Capital Turnover Ratio = Net Sales / Working Capital (where Working Capital = Current Assets − Current Liabilities). It measures how efficiently working capital is used.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
