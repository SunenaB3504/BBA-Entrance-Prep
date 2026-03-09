// src/data/economics/national-income.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const nationalIncomeData = {
  subject: "Economics",
  chapter: "National Income & Related Aggregates",
  examTags: ["CUET", "MH-CET"],

  flashcards: [
    { id: "ni-fc-001", term: "GDP (Gross Domestic Product)", definition: "Market value of all final goods and services produced within a country's borders in a year", formula: "GDP = C + I + G + (X - M)", example: "India's GDP includes production by foreign companies operating in India" },
    { id: "ni-fc-002", term: "GNP (Gross National Product)", definition: "Market value of all final goods/services produced by a country's residents, including abroad", formula: "GNP = GDP + Net Factor Income from Abroad (NFIA)", example: "GNP includes income earned by Indian workers in the USA" },
    { id: "ni-fc-003", term: "NDP (Net Domestic Product)", definition: "GDP minus depreciation (Consumption of Fixed Capital)", formula: "NDP = GDP - Depreciation", example: "If GDP = 100 and Depreciation = 10, NDP = 90" },
    { id: "ni-fc-004", term: "National Income (NNP at FC)", definition: "Net National Product at Factor Cost — the most commonly used measure of national income", formula: "NNP at FC = NNP at MP - Net Indirect Taxes", example: "NIT = Indirect Taxes - Subsidies" },
    { id: "ni-fc-005", term: "Value Added", definition: "Difference between value of output and value of intermediate inputs", formula: "Value Added = Output Value - Intermediate Consumption", example: "Wheat worth 100 → Flour worth 150 → Value Added = 50" },
    { id: "ni-fc-006", term: "Transfer Payments", definition: "One-way payments without any corresponding production — excluded from national income", formula: null, example: "Old age pension, scholarship, unemployment allowance" },
    { id: "ni-fc-007", term: "NFIA (Net Factor Income from Abroad)", definition: "Factor income earned by residents abroad minus factor income earned by non-residents domestically", formula: "NFIA = Factor income from abroad - Factor income paid abroad", example: "Positive NFIA means residents earn more abroad than foreigners earn here" }
  ],

  questions: [
    {
      id: "ni-q-001", type: "numerical", difficulty: "easy",
      question: "GDP at MP = ₹500 crore, Depreciation = ₹50 crore. Find NDP at MP.",
      options: ["₹550 crore", "₹450 crore", "₹500 crore", "₹400 crore"],
      correct: 1,
      solution_steps: [
        "NDP at MP = GDP at MP - Depreciation",
        "= 500 - 50",
        "= ₹450 crore"
      ],
      explanation: "NDP at MP = GDP at MP − Depreciation = 500 − 50 = ₹450 crore. Depreciation (consumption of fixed capital) is deducted to get Net from Gross.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-002", type: "mcq", difficulty: "easy",
      question: "Which of the following is included in National Income?",
      options: ["Old age pension", "Interest on national debt", "Salary of a teacher", "Scholarship to a student"],
      correct: 2,
      explanation: "Salary of a teacher is factor income (payment for a productive service) and IS included in national income. Old age pension, interest on national debt, and scholarships are all transfer payments and are excluded.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-003", type: "assertion-reason", difficulty: "medium",
      assertion: "GDP includes the value of intermediate goods in addition to final goods.",
      reason: "Including intermediate goods would lead to double counting.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 3,
      explanation: "A is false — GDP includes only the value of FINAL goods and services, not intermediate goods. R is true and actually explains why intermediate goods are excluded: to avoid double counting (since their value is already embedded in final goods).",
      examTags: ["CUET"]
    },
    {
      id: "ni-q-004", type: "numerical", difficulty: "medium",
      question: "NNP at MP = ₹800 crore; Indirect Taxes = ₹100 crore; Subsidies = ₹40 crore. Find National Income (NNP at FC).",
      options: ["₹760 crore", "₹740 crore", "₹860 crore", "₹840 crore"],
      correct: 1,
      solution_steps: [
        "Net Indirect Taxes (NIT) = Indirect Taxes - Subsidies = 100 - 40 = ₹60 crore",
        "NNP at FC = NNP at MP - NIT",
        "= 800 - 60 = ₹740 crore"
      ],
      explanation: "NIT = 100 - 40 = 60. National Income (NNP at FC) = NNP at MP - NIT = 800 - 60 = ₹740 crore.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-005", type: "mcq", difficulty: "medium",
      question: "GDP at MP - Depreciation + NFIA - NIT = ?",
      options: ["GNP at MP", "NDP at FC", "NNP at MP", "National Income"],
      correct: 3,
      explanation: "GDP at MP - Depreciation = NDP at MP → + NFIA = NNP at MP → - NIT = NNP at FC = National Income. So the answer is National Income (NNP at FC).",
      examTags: ["CUET"]
    },
    {
      id: "ni-q-006", type: "case-study", difficulty: "medium",
      passage: "In country Alpha: GDP at MP = ₹1,000 crore; NFIA = ₹(–20) crore (net outflow); Depreciation = ₹80 crore; Indirect Taxes = ₹120 crore; Subsidies = ₹20 crore.",
      question: "What is the GNP at MP?",
      options: ["₹980 crore", "₹1,020 crore", "₹920 crore", "₹1,000 crore"],
      correct: 0,
      explanation: "GNP at MP = GDP at MP + NFIA = 1,000 + (−20) = ₹980 crore. When NFIA is negative, it means more factor income is flowing out than coming in.",
      examTags: ["CUET"]
    },
    {
      id: "ni-q-007", type: "case-study", difficulty: "hard",
      passage: "In country Alpha: GDP at MP = ₹1,000 crore; NFIA = ₹(–20) crore (net outflow); Depreciation = ₹80 crore; Indirect Taxes = ₹120 crore; Subsidies = ₹20 crore.",
      question: "What is the National Income (NNP at FC)?",
      options: ["₹780 crore", "₹800 crore", "₹880 crore", "₹860 crore"],
      correct: 0,
      solution_steps: [
        "GNP at MP = GDP + NFIA = 1000 + (−20) = 980",
        "NNP at MP = GNP at MP − Depreciation = 980 − 80 = 900",
        "NIT = Indirect Taxes − Subsidies = 120 − 20 = 100",
        "NNP at FC = NNP at MP − NIT = 900 − 100 = ₹800 crore"
      ],
      explanation: "GNP=980; NNP at MP=900; NIT=100; National Income = 900−100 = ₹800 crore. Wait — recalculating: 980−80=900; 900−100=800. Answer: ₹800 crore → Option B. Correction: correct index is 1.",
      correct: 1,
      examTags: ["CUET"]
    },
    {
      id: "ni-q-008", type: "mcq", difficulty: "easy",
      question: "Which method of calculating national income adds up all factor incomes?",
      options: ["Expenditure Method", "Output/Value Added Method", "Income Method", "Product Method"],
      correct: 2,
      explanation: "The Income Method (also called Factor Income Method) calculates national income by adding all factor incomes: wages, rent, interest, and profit earned by residents of a country.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-009", type: "match-column", difficulty: "medium",
      question: "Match the aggregate with its formula:",
      column_a: ["NDP at MP", "GNP at MP", "NNP at FC", "GDP at FC"],
      column_b: [
        "GDP at MP + NFIA",
        "GDP at MP - NIT",
        "GDP at MP - Depreciation",
        "NNP at MP - NIT"
      ],
      correct_mapping: [2, 0, 3, 1],
      options: [
        "NDP-GDP-Dep, GNP-GDP+NFIA, NNP FC-NNP MP-NIT, GDP FC-GDP MP-NIT",
        "NDP-GDP+NFIA, GNP-GDP-Dep, NNP FC-GDP-NIT, GDP FC-NNP MP-NIT",
        "NDP-NNP MP-NIT, GNP-GDP FC, NNP FC-GDP+NFIA, GDP FC-GDP-Dep",
        "NDP-GDP-NIT, GNP-GDP-Dep, NNP FC-GDP+NFIA, GDP FC-NNP MP-NIT"
      ],
      correct: 0,
      explanation: "NDP at MP = GDP at MP − Depreciation; GNP at MP = GDP at MP + NFIA; NNP at FC = NNP at MP − NIT; GDP at FC = GDP at MP − NIT.",
      examTags: ["CUET"]
    },
    {
      id: "ni-q-010", type: "mcq", difficulty: "medium",
      question: "Services of a housewife doing household chores are:",
      options: [
        "Included in national income as non-market production",
        "Excluded from national income as they have no market value",
        "Included as factor income",
        "Included as transfer income"
      ],
      correct: 1,
      explanation: "Household services by a housewife are excluded from national income because they are not sold in the market and hence have no market price. This is a limitation of the national income measurement approach.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-011", type: "assertion-reason", difficulty: "hard",
      assertion: "NFIA can be negative for a country.",
      reason: "When factor income paid to foreigners exceeds factor income earned abroad, NFIA is negative.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Both are true. NFIA = Factor income received from abroad − Factor income paid abroad. If payments exceed receipts, NFIA is negative — common in developing nations with high foreign investment and few residents working abroad.",
      examTags: ["CUET"]
    },
    {
      id: "ni-q-012", type: "mcq", difficulty: "easy",
      question: "Which of the following is a transfer payment?",
      options: ["Salary of government employee", "Dividend paid by a company", "Unemployment allowance", "Rent received by a landlord"],
      correct: 2,
      explanation: "Unemployment allowance is a transfer payment — it is a one-way payment by the government with no corresponding productive activity. The others are all factor incomes earned through productive services.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-013", type: "numerical", difficulty: "hard",
      question: "Wages = ₹200 cr; Rent = ₹50 cr; Interest = ₹30 cr; Profit = ₹70 cr; Mixed Income = ₹100 cr; NFIA = ₹10 cr; Depreciation = ₹20 cr. Find GDP at FC.",
      options: ["₹450 crore", "₹440 crore", "₹460 crore", "₹430 crore"],
      correct: 1,
      solution_steps: [
        "NNP at FC = Wages + Rent + Interest + Profit + Mixed Income (Income Method)",
        "= 200 + 50 + 30 + 70 + 100 = ₹450 crore",
        "NNP at FC + Depreciation = GNP at FC = 450 + 20 = ₹470 crore",
        "GDP at FC = GNP at FC - NFIA = 470 - 10 = ₹460 crore"
      ],
      explanation: "NNP at FC = 450; GNP at FC = 470; GDP at FC = 470 − 10 = ₹460 crore.",
      correct: 2,
      examTags: ["CUET"]
    },
    {
      id: "ni-q-014", type: "mcq", difficulty: "medium",
      question: "In the Expenditure Method, which of the following is NOT added to calculate GDP?",
      options: ["Private Final Consumption Expenditure", "Government Final Consumption Expenditure", "Gross Domestic Capital Formation", "Transfer Payments by Government"],
      correct: 3,
      explanation: "Transfer payments (like pensions, subsidies) are not included in GDP calculation via Expenditure Method because they do not represent expenditure on goods and services — no production is involved.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "ni-q-015", type: "mcq", difficulty: "easy",
      question: "GDP - GNP = ?",
      options: ["Depreciation", "Net Indirect Taxes", "NFIA", "Net Exports"],
      correct: 2,
      explanation: "GNP = GDP + NFIA, therefore GDP − GNP = −NFIA or GNP − GDP = NFIA. The difference between GDP and GNP is Net Factor Income from Abroad (NFIA).",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
