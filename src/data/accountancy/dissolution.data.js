// src/data/accountancy/dissolution.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const dissolutionData = {
  subject: "Accountancy",
  chapter: "Dissolution of Partnership Firm",
  examTags: ["CUET"],

  flashcards: [
    { id: "ds-fc-001", term: "Dissolution of Firm", definition: "Complete closure of business and end of partnership relations among all partners.", formula: null, example: null },
    { id: "ds-fc-002", term: "Realisation Account", definition: "A nominal account prepared to record the sale of assets and payment of liabilities during dissolution.", formula: null, example: null },
    { id: "ds-fc-003", term: "Third Party Debts", definition: "Liabilities owed to outsiders (like creditors, bank overdraft, loans from relatives). Paid first under Sec 48.", formula: null, example: null },
    { id: "ds-fc-004", term: "Section 48", definition: "The legal provision in the Partnership Act that specifies the priority order for settling debts on dissolution.", formula: null, example: null },
    { id: "ds-fc-005", term: "Partner's Loan (Dissolution)", definition: "Money lent by a partner to the firm. Paid after third-party debts but before capital repayment.", formula: null, example: null },
    { id: "ds-fc-006", term: "Unrecorded Asset", definition: "An asset that does not appear in the Balance Sheet but exists and can be realized or taken over on dissolution.", formula: null, example: null },
    { id: "ds-fc-007", term: "Private Debts", definition: "Debts owed by a partner in their personal capacity, settled using their private property first.", formula: null, example: null }
  ],

  questions: [
    {
      id: "ds-q-001", type: "mcq", difficulty: "medium",
      question: "X is assigned dissolution for ₹15,000 remuneration. Realisation expenses ₹20,000 paid by partner Y. How much is debited to Realisation A/c?",
      options: ["₹20,000", "₹35,000", "₹5,000", "₹15,000"],
      correct: 1,
      explanation: "Both remuneration (15k) and actual expenses (20k) are firm expenses. Total debit = 35k.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-002", type: "mcq", difficulty: "medium",
      question: "Buildings 2L, Furn 80k, Stock 70k, GW 10k, Debtors 40k. Creditors 50k, Brother's Loan 30k. Assets realised for 3.4L. What is the loss?",
      options: ["Gain ₹60,000", "Loss ₹40,000", "Loss ₹60,000", "No Gain/Loss"],
      correct: 2,
      explanation: "Total Assets (excluding cash) = 4,00,000. Assets Realised = 3,40,000. Loss on realisation = 60,000.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-003", type: "mcq", difficulty: "hard",
      question: "As per Sec 48, what is the correct order of payments on dissolution?",
      options: [
        "Capitals -> Partner Loans -> Outside Debts",
        "Outside Debts -> Partner Loans -> Capitals",
        "Partner Loans -> Outside Debts -> Capitals",
        "Capitals -> Outside Debts -> Partner Loans"
      ],
      correct: 1,
      explanation: "Third party debts have first priority, followed by partner loans, and finally partner capital repayment.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-004", type: "mcq", difficulty: "medium",
      question: "A Creditor of ₹10,000 accepts an unrecorded asset of ₹8,000 in full settlement. What entry is recorded?",
      options: ["Realisation Dr. To Asset", "Creditor Dr. To Asset", "Realisation Dr. To Creditor", "No Entry"],
      correct: 3,
      explanation: "Direct settlement of a liability with an asset requires no journal entry in dissolution accounting.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-005", type: "mcq", difficulty: "easy",
      question: "On dissolution, P&L Account (Debit Balance) on asset side is transferred to:",
      options: ["Debit of Realisation A/c", "Debit of Partners' Capital A/cs", "Credit of Realisation A/c", "Credit of Partners' Capital A/cs"],
      correct: 1,
      explanation: "Accumulated losses are transferred directly to partners' capital accounts, not to the realisation account.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-006", type: "mcq", difficulty: "easy",
      question: "Realisation Account is a:",
      options: ["Real Account", "Nominal Account", "Personal Account", "Suspense Account"],
      correct: 1,
      explanation: "It is a nominal account because its purpose is to calculate profit or loss on disposal of assets and liabilities.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-007", type: "mcq", difficulty: "medium",
      question: "WCR is ₹30,000. Liability is determined at ₹10,000. What amount is credited to Realisation A/c?",
      options: ["₹30,000", "₹10,000", "₹20,000", "Nil"],
      correct: 1,
      explanation: "Only the amount matching the actual liability (₹10,000) is transferred to Realisation as an outside debt.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-008", type: "numerical", difficulty: "hard",
      question: "Assets 2L, Liabs 50k, Exp 2k. Assets realised 90%, Liabs paid at 5% discount. Calculate Realisation Profit/Loss.",
      options: ["Profit ₹24,500", "Loss ₹24,500", "Loss ₹19,500", "Profit ₹19,500"],
      correct: 1,
      solution_steps: [
        "Loss on Assets = 2,00,000 - 1,80,000 = 20,000",
        "Gain on Liabs = 50,000 - 47,500 = 2,50,000",
        "Expenses = 7,000 (Wait, Q says 2k? Let's use 7k from source or stick to Q logic. Source said 7k in explanation? No, source said 2k in Q, 7k in logic. Let's fix 2k)",
        "Net = Loss (20,000) + Exp (2,000) - Gain (2,500) = 19,500 Loss."
      ],
      explanation: "Total assets 2L realized for 1.8L (Loss 20k). Liabs 50k paid for 47.5k (Gain 2.5k). Expenses 2k. Net = 20k+2k-2.5k = 19.5k Loss.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-009", type: "assertion-reason", difficulty: "medium",
      assertion: "On dissolution, Bank Overdraft is transferred to Realisation Account.",
      reason: "Bank Overdraft is an outside liability.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Bank overdraft is an external debt and follows the standard procedure of transfer to Realisation Account.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-010", type: "mcq", difficulty: "medium",
      question: "Partner's wife's loan of ₹20,000 is appearing in Balance Sheet. How is it treated?",
      options: ["Credit side of Realisation A/c", "Paid directly via Bank", "Transferred to Partner's Capital", "Ignored"],
      correct: 0,
      explanation: "Wife's loan is an outside liability and must be transferred to Realisation Account for settlement.",
      examTags: ["CUET"]
    },
    {
      id: "ds-q-011", type: "mcq", difficulty: "easy",
      question: "On dissolution, Goodwill in Balance Sheet is transferred to:",
      options: ["Debit of Realisation A/c", "Debit of Partners' Capital A/cs", "Credit of Realisation A/c", "Shown in new B/S"],
      correct: 0,
      explanation: "Goodwill is an asset that must be closed off by transferring it to the debit side of Realisation Account.",
      examTags: ["CUET"]
    }
  ]
};
