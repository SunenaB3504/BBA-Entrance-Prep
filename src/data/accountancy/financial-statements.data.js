// src/data/accountancy/financial-statements.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialStatementsData = {
  subject: "Accountancy",
  chapter: "Financial Statements of a Company",
  examTags: ["CUET"],

  flashcards: [
    { id: "fs-fc-001", term: "Financial Statements", definition: "Formal annual reports (Balance Sheet and P&L) used by management to communicate financial performance.", formula: null, example: null },
    { id: "fs-fc-002", term: "Operating Cycle", definition: "The time between acquisition of assets for processing and their realization in cash.", formula: null, example: "Construction (long), Retail (short)" },
    { id: "fs-fc-003", term: "Current Asset", definition: "An asset expected to be realized within 12 months or the operating cycle.", formula: null, example: "Inventories, Trade Receivables" },
    { id: "fs-fc-004", term: "Current Liability", definition: "An obligation expected to be settled within 12 months or the operating cycle.", formula: null, example: "Trade Payables, Short-term Provisions" },
    { id: "fs-fc-005", term: "Negative Surplus", definition: "A debit balance in the P&L statement shown as a negative figure under Reserves and Surplus.", formula: null, example: null },
    { id: "fs-fc-006", term: "Inventory includes", definition: "Includes Raw Materials, WIP, Finished Goods, Stock-in-trade, and Loose Tools.", formula: null, example: null },
    { id: "fs-fc-007", term: "Proposed Dividend", definition: "Dividend suggested by board; shown as a Contingent Liability in Notes until approved.", formula: null, example: null }
  ],

  questions: [
    {
      id: "fs-q-001", type: "mcq", difficulty: "medium",
      question: "Under which major head is 'Computer Software' classified in the Balance Sheet?",
      options: ["Non-Current Assets", "Current Assets", "Intangible Assets", "Fixed Assets"],
      correct: 0,
      explanation: "Computer Software is an Intangible Asset, which falls under the major head 'Non-Current Assets'.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-002", type: "mcq", difficulty: "easy",
      question: "Which of the following is NOT a part of Inventories?",
      options: ["Raw Materials", "Work-in-progress", "Loose Tools", "Furniture"],
      correct: 3,
      explanation: "Furniture is a Tangible Fixed Asset (PPE), not inventory.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-003", type: "assertion-reason", difficulty: "medium",
      assertion: "Provision for Tax is shown under Short-term Provisions.",
      reason: "Tax is expected to be paid within the next 12 months.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Since tax is an annual liability, it fits the criteria for short-term provisions.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-004", type: "numerical", difficulty: "hard",
      question: "Sapphire Ltd Auth Cap 80L (4L shares @ ₹20). Issued 1.5L shares. Sultan (5k shares) failed call (₹4). 8k of Rancho's 10k forfeited shares (₹6 paid) reissued. Subscribed Capital?",
      options: ["₹29,52,000", "₹30,00,000", "₹28,60,000", "₹29,40,000"],
      correct: 0,
      solution_steps: [
        "Fully Paid = 1.43L * 20 = 28.6L",
        "Not Fully Paid (Sultan) = 5k * 20 - 20k = 80k",
        "Forfeiture A/c (Rancho 2k left) = 2k * 6 = 12k",
        "Total = 28.6L + 80k + 12k = 29.52L"
      ],
      explanation: "Subscribed capital includes fully paid shares, part-paid (less arrears), and the balance in the Forfeiture account.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-005", type: "mcq", difficulty: "medium",
      question: "How is 'Unpaid Dividend' classified in a company's Balance Sheet?",
      options: ["Current Liability", "Non-Current Liability", "Reserves & Surplus", "Contingent Liability"],
      correct: 0,
      explanation: "Unpaid/Unclaimed dividends are classified under 'Other Current Liabilities'.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-006", type: "mcq", difficulty: "medium",
      question: "Loss on Issue (₹9L) offset by SP (₹8L) results in a P&L charge of:",
      options: ["₹9,00,000", "₹1,00,000", "₹8,00,000", "₹5,00,000"],
      correct: 1,
      explanation: "SP must be utilized first. Balance loss = 9L - 8L = 1L.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-007", type: "mcq", difficulty: "medium",
      question: "Advance paid to a contractor for building construction is classified as:",
      options: ["Current Asset", "Long-Term Loans & Advances", "Capital WIP", "Fixed Assets"],
      correct: 1,
      explanation: "Capital advances are classified under 'Non-Current Assets -> Long-Term Loans and Advances'.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-008", type: "mcq", difficulty: "easy",
      question: "When the operating cycle cannot be identified, it is assumed to be:",
      options: ["6 months", "12 months", "18 months", "9 months"],
      correct: 1,
      explanation: "12 months is the default standard for classification if the cycle is unknown.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-009", type: "mcq", difficulty: "medium",
      question: "'Freedom to choose depreciation method' highlights which limitation?",
      options: ["Historical Cost", "Qualitative Factors", "Not free from bias", "Price level changes"],
      correct: 2,
      explanation: "Subjective choices in estimates and methods introduce personal bias into the financial reports.",
      examTags: ["CUET"]
    },
    {
      id: "fs-q-010", type: "mcq", difficulty: "medium",
      question: "Which of the following is a 'Postulate' of accounting?",
      options: ["Materiality", "Going Concern", "Conservatism", "Consistency"],
      correct: 1,
      explanation: "Going Concern is a postulate (basic assumption). Materiality and Conservatism are conventions.",
      examTags: ["CUET"]
    }
  ]
};
