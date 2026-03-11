// src/data/accountancy/partnership-basics.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const partnershipBasicsData = {
  subject: "Accountancy",
  chapter: "Partnership: Basic Concepts",
  examTags: ["CUET"],

  flashcards: [
    { id: "pb-fc-001", term: "Partnership", definition: "Relation between persons who have agreed to share profits of a business carried on by all or any of them acting for all.", formula: null, example: null },
    { id: "pb-fc-002", term: "Partnership Deed", definition: "A written agreement containing the terms and conditions of partnership.", formula: null, example: null },
    { id: "pb-fc-003", term: "Mutual Agency", definition: "Every partner is both an agent (to bind others) and a principal (to be bound by others).", formula: null, example: null },
    { id: "pb-fc-004", term: "Unlimited Liability", definition: "Partners are liable for firm's debts jointly and severally, extending to private assets.", formula: null, example: null },
    { id: "pb-fc-005", term: "Charge against Profit", definition: "Expenses deducted from revenue to determine net profit, payable even in loss.", formula: null, example: "Rent to partner, Interest on partner's loan" },
    { id: "pb-fc-006", term: "Appropriation of Profit", definition: "Distribution of net profit among partners, payable only if profit exists.", formula: null, example: "Interest on Capital, Partner Salary" },
    { id: "pb-fc-007", term: "P&L Appropriation A/c", definition: "A nominal account prepared to show distribution of profits among partners.", formula: null, example: null },
    { id: "pb-fc-008", term: "Interest on Loan (No Deed)", definition: "Interest allowed at a fixed rate of 6% p.a. in the absence of a deed.", formula: "Loan Amount × 6/100", example: null }
  ],

  questions: [
    {
      id: "pb-q-001", type: "mcq", difficulty: "easy",
      question: "In the absence of a Partnership Deed, the interest on loan of a partner is allowed:",
      options: ["@ 8% p.a.", "@ 6% p.a.", "No interest is allowed", "@ 12% p.a."],
      correct: 1,
      explanation: "Under Section 13(d) of the Indian Partnership Act, 1932, if the deed is silent, partners are entitled to interest on loans at 6% p.a. This is a charge against profit.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-002", type: "mcq", difficulty: "easy",
      question: "Which of the following is an 'Appropriation of Profit'?",
      options: ["Rent to Partner", "Manager's Commission", "Interest on Partner's Loan", "Interest on Partner's Capital"],
      correct: 3,
      explanation: "Interest on Partner's Capital is an appropriation (distributed only if profit exists). The others are charges against profit (must be paid even in loss).",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-003", type: "numerical", difficulty: "medium",
      question: "A and B are partners in 3:2. C is admitted for 1/5th share. A guarantees C a minimum profit of ₹50,000. Firm profit is ₹2,00,000. Calculate A's share after adjusting the guarantee.",
      options: ["₹96,000", "₹86,000", "₹1,10,000", "₹1,20,000"],
      correct: 1,
      solution_steps: [
        "C's Share = 1/5 × 2,00,000 = ₹40,000",
        "Remaining for A & B = 2,00,000 - 40,000 = ₹1,60,000",
        "A's Original Share = 3/5 × 1,60,000 = ₹96,000",
        "Deficiency for C = 50,000 (Guaranteed) - 40,000 (Actual) = ₹10,000",
        "A's Final Share = 96,000 - 10,000 = ₹86,000"
      ],
      explanation: "C's actual share is ₹40,000. The deficiency of ₹10,000 is borne by A, reducing his share from ₹96,000 to ₹86,000.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-004", type: "mcq", difficulty: "easy",
      question: "Interest on Capital is paid to partners only out of:",
      options: ["Profits", "Reserves", "Accumulated Profits", "Goodwill"],
      correct: 0,
      explanation: "Interest on Capital is an appropriation of profit, meaning it is distributed only if the firm has earned current year profits.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-005", type: "numerical", difficulty: "medium",
      question: "X, Y and Z are partners (5:4:1). Z is guaranteed minimum ₹5,000 profit. Deficiency borne by X and Y equally. Net Profit is ₹40,000. What is X's final share?",
      options: ["₹20,000", "₹19,500", "₹15,500", "₹5,000"],
      correct: 1,
      solution_steps: [
        "Initial: X=20,000 (5/10), Y=16,000 (4/10), Z=4,000 (1/10)",
        "Z's Deficiency = 5,000 - 4,000 = ₹1,000",
        "X's half share of deficiency = 1,000 / 2 = ₹500",
        "X's Final = 20,000 - 500 = ₹19,500"
      ],
      explanation: "Z's deficiency of ₹1,000 is shared equally by X and Y (₹500 each). X's share reduces from ₹20,000 to ₹19,500.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-006", type: "mcq", difficulty: "easy",
      question: "Where is 'Rent paid to a partner' recorded?",
      options: ["Debit of P&L Appropriation A/c", "Debit of P&L A/c", "Credit of Partner's Capital A/c", "Debit of Partner's Capital A/c"],
      correct: 1,
      explanation: "Rent to a partner is a charge against profit (not an appropriation) and is recorded in the Profit & Loss Account.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-007", type: "numerical", difficulty: "medium",
      question: "A partner withdraws ₹10,000 during the year. Interest on drawings is 10% p.a. Calculate the interest.",
      options: ["₹1,000", "₹500", "₹1,200", "₹600"],
      correct: 1,
      solution_steps: [
        "Since no date is given, apply 6 months average period.",
        "Interest = 10,000 × 10% × 6/12 = ₹500"
      ],
      explanation: "In the absence of a specific date for drawings, interest is calculated for an average period of 6 months.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-008", type: "assertion-reason", difficulty: "medium",
      assertion: "A Partnership Firm is not a separate legal entity from its partners.",
      reason: "Partners have unlimited liability.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Both are true. The lack of separate legal entity is the legal reason why partners are personally liable (unlimited liability) for firm's debts.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-009", type: "mcq", difficulty: "easy",
      question: "X, Y and Z are partners. Z gave a loan of ₹2,00,000. Deed is silent. Firm incurred ₹10,000 loss. Interest payable to Z is:",
      options: ["Nil", "₹12,000", "₹24,000", "₹10,000"],
      correct: 1,
      explanation: "Interest on loan @ 6% p.a. is a charge against profit and must be paid even in case of loss. ₹2,00,000 × 6% = ₹12,000.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-010", type: "mcq", difficulty: "easy",
      question: "If Fixed Capital Method is adopted, 'Interest on Capital' will be credited to:",
      options: ["Partner's Capital Account", "Partner's Current Account", "P& L Appropriation Account", "P& L Account"],
      correct: 1,
      explanation: "Under the Fixed Capital Method, all adjustments like IOC, Salary, etc., are made in the Current Account, while the Capital Account remains fixed.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-011", type: "assertion-reason", difficulty: "medium",
      assertion: "Registration of a Partnership firm is optional.",
      reason: "An unregistered firm cannot sue outsiders for claims above ₹100.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 1,
      explanation: "Both are true. Registration is optional under the Act, but non-registration carries disabilities. R is a consequence, not an explanation for A.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-012", type: "mcq", difficulty: "easy",
      question: "The maximum number of partners allowed in a partnership firm is:",
      options: ["20", "50", "100", "No limit"],
      correct: 1,
      explanation: "As per the Companies Act 2013 and Related Rules 2014, the maximum limit is 50 partners.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-013", type: "numerical", difficulty: "hard",
      question: "A's capital is ₹50,000; B's capital is ₹30,000. Profit is ₹3,000. IOC is 10% p.a. Calculate IOC for A.",
      options: ["₹5,000", "₹3,000", "₹1,875", "₹1,125"],
      correct: 2,
      solution_steps: [
        "Required IOC: A=5,000; B=3,000. Total = 8,000.",
        "Available Profit = 3,000 (Inadequate).",
        "Ratio of claims = 5,000:3,000 = 5:3.",
        "A's Share = 3,000 × 5/8 = ₹1,875"
      ],
      explanation: "When profit is inadequate, available profit is distributed in the ratio of appropriation claims (5:3 here).",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-014", type: "mcq", difficulty: "easy",
      question: "Which account is used to rectify errors of past years via a single adjusting entry?",
      options: ["Revaluation A/c", "P&L Adjustment A/c", "P&L Appropriation A/c", "Suspense A/c"],
      correct: 1,
      explanation: "A P&L Adjustment Account (or Statement Showing Adjustments) is used to find the net effect of past errors to be rectified via one entry.",
      examTags: ["CUET"]
    },
    {
      id: "pb-q-015", type: "mcq", difficulty: "easy",
      question: "A deed is silent on interest on drawings. A partner withdrew ₹5,000/month in the beginning. Interest charged will be:",
      options: ["₹3,900", "₹1,800", "Nil", "₹3,250"],
      correct: 2,
      explanation: "In the absence of a provision in the deed, NO interest on drawings can be charged from partners.",
      examTags: ["CUET"]
    }
  ]
};
