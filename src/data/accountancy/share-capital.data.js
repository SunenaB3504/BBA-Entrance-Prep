// src/data/accountancy/share-capital.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const shareCapitalData = {
  subject: "Accountancy",
  chapter: "Accounting for Share Capital",
  examTags: ["CUET"],

  flashcards: [
    { id: "sc-fc-001", term: "Authorised Capital", definition: "The maximum amount of share capital that a company is authorised to issue by its MoA.", formula: null, example: null },
    { id: "sc-fc-002", term: "Reserve Capital", definition: "A portion of uncalled capital that is resolved to be called only in the event of winding up.", formula: null, example: null },
    { id: "sc-fc-003", term: "Calls-in-Arrears", definition: "Amount called up by the company but not yet paid by the shareholders.", formula: "Called-up - Paid-up", example: null },
    { id: "sc-fc-004", term: "Pro-rata Allotment", definition: "Allotment of shares in proportion to the shares applied for during oversubscription.", formula: "Allotted = (Total Allot/Total App) × Individual App", example: null },
    { id: "sc-fc-005", term: "Sweat Equity Shares", definition: "Shares issued to employees or directors at a discount or for non-cash consideration (the only exception to Sec 53).", formula: null, example: null },
    { id: "sc-fc-006", term: "Forfeiture of Shares", definition: "Cancellation of shares and seizure of money paid due to non-payment of calls.", formula: null, example: null },
    { id: "sc-fc-007", term: "Capital Reserve", definition: "A reserve created out of capital profits, such as the profit on reissue of forfeited shares.", formula: "Forfeited Amt (Reissued) - Reissue Discount", example: null }
  ],

  questions: [
    {
      id: "sc-q-001", type: "mcq", difficulty: "medium",
      question: "Pali Ltd offered 2,00,000 shares @ ₹10 at ₹2 premium. App received for 1,95,000. Manoj (6,000 shares) failed allotment. 4,000 shares reissued @ ₹11. Capital Reserve?",
      options: ["₹16,000", "₹12,000", "₹8,000", "₹18,000"],
      correct: 2,
      explanation: "App received (₹3) incl ₹1 prem. Capital part = ₹2. Manoj paid ₹2 capital. Profit on 4,000 shares = 4,000 × 2 = 8,000. Reissued at premium, so no discount. CR = 8,000.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-002", type: "mcq", difficulty: "medium",
      question: "K.N. Ltd excess app money adjusted to 1st call. Rakesh (allotted 6,000, Cat I Ratio 4:3) failed 1st call. Net arrears?",
      options: ["₹24,000", "₹18,000", "₹6,000", "₹12,000"],
      correct: 1,
      explanation: "Rakesh Applied = 8,000. Excess App = 2,000 × 3 = 6,000. 1st Call Due = 24,000. Arrears = 24k - 6k = 18,000.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-003", type: "assertion-reason", difficulty: "medium",
      assertion: "Shares cannot be issued at a discount except for Sweat Equity Shares.",
      reason: "Section 53 of the Companies Act, 2013 prohibits the issue of shares at discount.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Sec 53 is the legal basis for the general prohibition, and Sec 54 provides the specific exception for Sweat Equity.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-004", type: "numerical", difficulty: "hard",
      question: "Company forfeited 4,000 shares of ₹10 (₹3 paid on app). 2,000 shares reissued. ₹4,000 transferred to CR. Reissue rate per share?",
      options: ["₹10", "₹9", "₹11", "₹8"],
      correct: 1,
      solution_steps: [
        "Forfeited on 2,000 shares = 2,000 × 3 = 6,000",
        "Capital Reserve = 4,000",
        "Discount allowed = 6,000 - 4,000 = 2,000",
        "Discount per share = 2,000 / 2,000 = 1",
        "Reissue Price = 10 - 1 = 9"
      ],
      explanation: "The reissue price is determined by subtracting the per-share discount (derived from CR) from the fully paid-up value.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-005", type: "mcq", difficulty: "medium",
      question: "Utilization of Securities Premium is NOT allowed for:",
      options: ["Issue of bonus shares", "Writing off preliminary expenses", "Payment of cash dividends", "Buy-back of own shares"],
      correct: 2,
      explanation: "Sec 52(2) restricts use to specific capital purposes; paying dividends is strictly prohibited.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-006", type: "mcq", difficulty: "easy",
      question: "In the absence of AoA, the maximum rate of interest on Calls-in-Arrears as per Table F is:",
      options: ["6% p.a.", "10% p.a.", "12% p.a.", "5% p.a."],
      correct: 1,
      explanation: "Table F specifies 10% p.a. for arrears and 12% p.a. for advance payments.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-007", type: "mcq", difficulty: "medium",
      question: "Rajan Ltd bought Machinery for ₹9,90,000. Issued shares of ₹10 at 10% premium. Number of shares issued?",
      options: ["99,000", "90,000", "1,00,000", "1,10,000"],
      correct: 1,
      explanation: "Issue Price = 10 + 1 = 11. Shares = 9,90,000 / 11 = 90,000.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-008", type: "mcq", difficulty: "medium",
      question: "Shares of ₹10 each, ₹7 called up (incl ₹1 premium) and paid up. Uncalled Capital?",
      options: ["₹1", "₹3", "₹4", "₹5"],
      correct: 2,
      explanation: "Called up Capital (Face) = 7 - 1 = 6. Uncalled Capital = 10 - 6 = 4.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-009", type: "mcq", difficulty: "hard",
      question: "Z Ltd Pro-rata 7:5. M applied for 700. Failed Allotment (₹5 incl ₹2 prem). App ₹3. Cash received on Allotment for 50k shares?",
      options: ["₹1,90,000", "₹1,88,100", "₹2,50,000", "₹1,87,500"],
      correct: 1,
      explanation: "Total Due (cash expected) = (50k*5 - 20k*3) = 1.9L. M Arrears: M Allotted=500. Excess=600. Due(500*5)=2500. Net Arrears=1900. Total = 1.9L - 1900 = 1,88,100.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-010", type: "mcq", difficulty: "medium",
      question: "A company reissues 3,000 out of 5,000 forfeited shares. Where is the balance on 2,000 shares shown?",
      options: ["Capital Reserve", "Share Forfeiture Account", "Securities Premium", "General Reserve"],
      correct: 1,
      explanation: "The amount forfeited on shares not yet reissued remains in the Share Forfeiture Account until they are reissued.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-011", type: "mcq", difficulty: "easy",
      question: "Subscribed Capital but not fully paid-up category includes:",
      options: ["Fully called and paid", "Called but arrears exist", "Uncalled capital", "Reserve capital"],
      correct: 1,
      explanation: "This category covers shares where either the full face value hasn't been called or some portion of calls remains unpaid.",
      examTags: ["CUET"]
    },
    {
      id: "sc-q-012", type: "mcq", difficulty: "medium",
      question: "Minimum subscription as per SEBI guidelines must be received within how many days?",
      options: ["15 days", "30 days", "45 days", "60 days"],
      correct: 1,
      explanation: "The company must receive 90% subscription within 30 days from the date of issue of prospectus.",
      examTags: ["CUET"]
    }
  ]
};
