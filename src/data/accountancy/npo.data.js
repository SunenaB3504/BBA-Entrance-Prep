// src/data/accountancy/npo.data.js
// GAP FILLING FOR CUET PREP

export const npoData = {
  subject: "Accountancy",
  chapter: "Accounting for NPO",
  examTags: ["CUET"],

  flashcards: [
    { id: "npo-fc-001", term: "NPO", definition: "Entities set up for service rather than profit, such as clubs, schools, and hospitals.", formula: null, example: null },
    { id: "npo-fc-002", term: "Receipts and Payments A/c", definition: "A summary of cash and bank transactions, similar to a cash book, prepared on cash basis.", formula: null, example: null },
    { id: "npo-fc-003", term: "Income and Expenditure A/c", definition: "A summary of revenue income and expenses, similar to P&L, prepared on accrual basis.", formula: null, example: null },
    { id: "npo-fc-004", term: "Life Membership Fee", definition: "A lump sum fee paid once; treated as a Capital Receipt (Added to Capital Fund/Liability).", formula: null, example: null },
    { id: "npo-fc-005", term: "Legacy", definition: "Gift received under a will. If large/specific, treated as Capital; if small/general, treated as Revenue.", formula: null, example: null },
    { id: "npo-fc-006", term: "Endowment Fund", definition: "A fund arising from a gift, income from which is used for a specific purpose. Capital Receipt.", formula: null, example: null },
    { id: "npo-fc-007", term: "Honorarium", definition: "A token payment made to a person who has voluntarily undertaken services (Revenue Expense).", formula: null, example: null },
    { id: "npo-fc-008", term: "Capital Fund", definition: "The excess of Assets over Liabilities for an NPO (also called General Fund).", formula: "Total Assets - Total External Liabilities", example: null }
  ],

  questions: [
    {
      id: "npo-q-001", type: "mcq", difficulty: "medium",
      question: "Which of the following is NOT a feature of the Receipts and Payments Account?",
      options: ["Includes only cash items", "Includes items of both capital & revenue nature", "Includes items of current year only", "Adjusts opening and closing cash balances"],
      correct: 2,
      explanation: "R&P Account includes all cash receipts/payments regardless of whether they belong to previous, current, or future years.",
      examTags: ["CUET"]
    },
    {
      id: "npo-q-002", type: "mcq", difficulty: "medium",
      question: "Entrance Fees, unless specified otherwise, are generally treated as:",
      options: ["Capital Receipt", "Revenue Receipt", "Liability", "Asset"],
      correct: 1,
      explanation: "General practice (and NCERT) treats Entrance Fees as Revenue Receipts unless specifically told to capitalize them.",
      examTags: ["CUET"]
    },
    {
      id: "npo-q-003", type: "numerical", difficulty: "hard",
      question: "Sub. received 2024: ₹50k. Sub. O/S (31.3.23): ₹5k. Sub. O/S (31.3.24): ₹8k. Sub. Adv. (31.3.23): ₹2k. Sub. Adv. (31.3.24): ₹3k. Amount to I&E for 2024?",
      options: ["₹52,000", "₹48,000", "₹55,000", "₹50,000"],
      correct: 0,
      solution_steps: [
        "Base Received: 50,000",
        "Add: Cl O/S (+8,000) and Op Adv (+2,000)",
        "Less: Op O/S (-5,000) and Cl Adv (-3,000)",
        "Result: 50 + 10 - 8 = 52,000"
      ],
      explanation: "Accrual profit includes current year's income even if not received (Cl O/S) and excludes others.",
      examTags: ["CUET"]
    },
    {
      id: "npo-q-004", type: "numerical", difficulty: "hard",
      question: "Match Fund: ₹1L. Match Exp: ₹1.2L. Donation for Match Fund: ₹10k. How is this shown in B/S?",
      options: ["Asset Side ₹10k", "Liability Side ₹1.1L", "Operating Loss ₹10k in I&E", "Liability Side Nil & ₹10k in I&E Exp"],
      correct: 3,
      explanation: "Total Fund = 1L + 10k = 1.1L. Since Exp (1.2L) > Fund (1.1L), the excess 10k goes to the Expenditure side of I&E.",
      examTags: ["CUET"]
    },
    {
      id: "npo-q-005", type: "mcq", difficulty: "medium",
      question: "Sale of old newspapers is treated as:",
      options: ["Capital Receipt", "Revenue Receipt", "Reduction from Capital Fund", "Liability"],
      correct: 1,
      explanation: "It is a recurring revenue income for an NPO.",
      examTags: ["CUET"]
    },
    {
      id: "npo-q-006", type: "numerical", difficulty: "hard",
      question: "Stock of Medicines (Op): ₹10k, (Cl): ₹12k. Creditors (Op): ₹8k, (Cl): ₹10k. Paid to Creditors: ₹40k. Amount of medicines consumed?",
      options: ["₹40,000", "₹42,000", "₹38,000", "₹44,000"],
      correct: 0,
      solution_steps: [
        "Purchases = Paid (40k) + Cl Cred (10k) - Op Cred (8k) = 42k",
        "Consumable = Op Stock (10k) + Purchases (42k) - Cl Stock (12k) = 40k"
      ],
      explanation: "First find total credit purchases using the Creditor account, then find consumption using the Stock formula.",
      examTags: ["CUET"]
    }
  ]
};
