// src/data/accountancy/cash-flow.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const cashFlowData = {
  subject: "Accountancy",
  chapter: "Cash Flow Statement",
  examTags: ["CUET"],

  flashcards: [
    { id: "cfs-fc-001", term: "Cash Equivalents", definition: "Short-term, highly liquid investments (maturity < 3 months) with insignificant value risk.", formula: null, example: "T-Bills, Commercial Paper, Marketable Securities" },
    { id: "cfs-fc-002", term: "Operating Activities", definition: "Principal revenue-generating activities of the enterprise.", formula: null, example: "Cash sales, Commission received, Payment to suppliers" },
    { id: "cfs-fc-003", term: "Investing Activities", definition: "Acquisition and disposal of long-term assets and investments.", formula: null, example: "Sale of Machinery, Purchase of Patents, Dividend Received" },
    { id: "cfs-fc-004", term: "Financing Activities", definition: "Activities results in changes in size/composition of owners' capital and borrowings.", formula: null, example: "Issue of Shares, Redemption of Debentures, Interest Paid" },
    { id: "cfs-fc-005", term: "Indirect Method", definition: "Calculating Operating Cash by adjusting Net Profit for non-cash/non-operating items.", formula: null, example: "Adding back Depreciation" },
    { id: "cfs-fc-006", term: "Bank Overdraft", definition: "Treated as a Financing Activity (Short-term borrowing) under AS-3 (Revised).", formula: null, example: null },
    { id: "cfs-fc-007", term: "Extraordinary Items", definition: "Events distinct from ordinary activities, e.g., Insurance claims.", formula: null, example: "Earthquake loss settlement" }
  ],

  questions: [
    {
      id: "cfs-q-001", type: "mcq", difficulty: "medium",
      question: "Which of the following is a 'Cash Equivalent'?",
      options: ["Fixed Deposit (1 year)", "Marketable Securities (3 months)", "Inventory", "Trade Receivables"],
      correct: 1,
      explanation: "Cash equivalents must be highly liquid and have a maturity of 3 months or less.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-002", type: "mcq", difficulty: "medium",
      question: "Dividend received by a 'Finance Company' is classified as:",
      options: ["Investing", "Operating", "Financing", "Cash Equivalent"],
      correct: 1,
      explanation: "For finance companies, investing and earning returns from securities is their core (operating) business.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-003", type: "mcq", difficulty: "medium",
      question: "While preparing CFS, the 'Proposed Dividend' of the current year is:",
      options: ["Added to Net Profit", "Deducted in Financing", "Ignored", "Both A and B"],
      correct: 2,
      explanation: "Proposed dividend of the current year is a contingent liability and not a cash flow; only the previous year's dividend (paid this year) is considered.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-004", type: "numerical", difficulty: "hard",
      question: "Op Provision for Tax: 2.8L, Cl Provision: 3L. Tax Paid: 2.5L. Determine Provision Made (added to NPBT).",
      options: ["₹3,00,000", "₹2,30,000", "₹2,80,000", "₹2,70,000"],
      correct: 3,
      solution_steps: [
        "Provision Account: (Cl + Paid) - Op",
        "3.0L + 2.5L - 2.8L = 2.7L"
      ],
      explanation: "Ledger logic: The sum of what's left and what was paid minus what was already there equals the new provision made.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-005", type: "mcq", difficulty: "medium",
      question: "Sale of Marketable Securities results in:",
      options: ["Investing Inflow", "No Flow", "Operating Inflow", "Financing Inflow"],
      correct: 1,
      explanation: "Converting one form of cash/equivalent to another is an internal movement, not a net inflow to the business.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-006", type: "numerical", difficulty: "hard",
      question: "Approved Dividend 1.8L. Unclaimed Dividend at year end 10k. Outflow in Financing Activity?",
      options: ["₹1,80,000", "₹1,90,000", "₹1,70,000", "₹2,00,000"],
      correct: 2,
      explanation: "Actual cash out = Approved amt - Unclaimed amt = 1.8L - 10k = 1.7L.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-007", type: "assertion-reason", difficulty: "medium",
      assertion: "Increase in Creditors is added to Net Profit in the Indirect Method.",
      reason: "Increase in current liabilities implies cash has been saved as payment is deferred.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Creditor increase means we haven't paid cash for goods yet, thus increasing our relative cash position compared to accrual profit.",
      examTags: ["CUET"]
    },
    {
      id: "cfs-q-008", type: "mcq", difficulty: "medium",
      question: "Issue of Bonus Shares results in:",
      options: ["Financing Inflow", "Operating Inflow", "No Flow", "Investing Inflow"],
      correct: 2,
      explanation: "Bonus shares are a non-cash transaction (capitalizing reserves).",
      examTags: ["CUET"]
    }
  ]
};
