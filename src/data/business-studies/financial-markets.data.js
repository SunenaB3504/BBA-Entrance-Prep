// src/data/business-studies/financial-markets.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialMarketsData = {
  subject: "Business Studies",
  chapter: "Financial Markets",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Financial Market: Concept & Functions",
        content: `A financial market is a market for the creation and exchange of financial assets.

**Functions:**
1. **Mobilisation of Savings**: Channelising savings from households to business firms (Allocative Function).
2. **Price Discovery**: Interaction of demand and supply helps establish a price.
3. **Liquidity**: Mechanism to sell assets and convert them into cash.
4. **Reducing Transaction Costs**: Provides common information to buyers and sellers.`,
        visualizations: []
      },
      {
        title: "Money Market Instruments",
        content: `Money Market deals in short-term funds (maturity < 1 year).

**Key Instruments:**
- **Treasury Bill (T-Bill)**: Issued by RBI on behalf of Govt. Also called Zero Coupon Bond. Safest.
- **Commercial Paper (CP)**: Short-term unsecured promissory note issued by large creditworthy firms for bridge financing.
- **Call Money**: Inter-bank short-term finance (1-15 days) to maintain CRR.
- **Certificate of Deposit (CD)**: Unsecured instruments in bearer form issued by banks.
- **Commercial Bill**: Used to finance credit sales of firms.`,
        visualizations: []
      },
      {
        title: "Capital Market: Primary & Secondary",
        content: `Capital Market deals in medium and long-term funds.

**Primary Market (New Issues):**
Methods of floatation:
- **Offer through Prospectus**: Direct appeal to public.
- **Offer for Sale**: Through intermediaries.
- **Private Placement**: Selling to select institutional investors.
- **Rights Issue**: Privilege granted to existing shareholders.
- **e-IPO**: Online issuing system.

**Secondary Market (Stock Exchange):**
Market for existing (second-hand) securities. Provides liquidity and contributes to economic growth.`,
        visualizations: [
          {
            id: 'primary-vs-secondary',
            title: 'Primary vs Secondary Market',
            type: 'table',
            data: {
              headers: ['Basis', 'Primary Market', 'Secondary Market'],
              rows: [
                ['Type', 'New Securities', 'Existing Securities'],
                ['Parties', 'Between Company & Investor', 'Between Investors'],
                ['Price', 'Fixed by Management', 'Determined by Demand/Supply'],
                ['Buying/Selling', 'Only Buying', 'Both Buying & Selling']
              ]
            }
          }
        ]
      },
      {
        title: "SEBI: Functions & Objectives",
        content: `SEBI is the regulator of the securities market in India.

**Functions:**
1. **Protective**: Prohibiting price rigging, controlling insider trading, protecting investors.
2. **Regulatory**: Registering brokers, regulating stock exchanges, conducting audits.
3. **Developmental**: Training intermediaries, conducting research, investor education.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "fm-fc-001", term: "Financial Market", definition: "A market for the creation and exchange of financial assets", formula: null, example: "The Stock Exchange" },
    { id: "fm-fc-002", term: "Treasury Bill (T-Bill)", definition: "Short-term instrument issued by RBI; also called Zero Coupon Bond", formula: null, example: "Govt. issuing a 91-day T-Bill" },
    { id: "fm-fc-003", term: "Commercial Paper", definition: "Unsecured promissory note issued by large firms for bridge financing", formula: null, example: "Large corporation raising funds to cover flotation costs of shares" },
    { id: "fm-fc-004", term: "Call Money", definition: "Short-term inter-bank finance (1-15 days) for maintaining CRR", formula: null, example: "Bank A borrowing from Bank B overnight" },
    { id: "fm-fc-005", term: "Demat Account", definition: "Account to hold securities in electronic (dematerialised) form", formula: null, example: "Closing physical share certificates to hold them online" },
    { id: "fm-fc-006", term: "Rights Issue", definition: "Privilege given to existing shareholders to buy new shares", formula: null, example: "Issuing 1 new share for every 5 shares already held" },
    { id: "fm-fc-007", term: "Insider Trading", definition: "Trading in securities using non-public price-sensitive information", formula: null, example: "Director selling shares before a bad profit report is public" }
  ],

  questions: [
    {
      id: "fm-q-001", type: "mcq", difficulty: "easy",
      question: "Which of the following is also known as 'Zero Coupon Bond'?",
      options: ["Commercial Paper", "Treasury Bill", "Call Money", "Certificate of Deposit"],
      correct: 1,
      explanation: "Treasury Bills are called Zero Coupon Bonds because they are issued at a discount and redeemed at par without explicit interest.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-002", type: "mcq", difficulty: "easy",
      question: "The market for existing securities is called:",
      options: ["Primary Market", "Secondary Market", "New Issue Market", "Money Market"],
      correct: 1,
      explanation: "Secondary Market (Stock Exchange) is where previously issued securities are traded between investors.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-003", type: "mcq", difficulty: "medium",
      question: "What is the primary purpose of 'Call Money'?",
      options: ["Bridge Financing", "Maintaining CRR", "Buying Fixed Assets", "Dividend Payment"],
      correct: 1,
      explanation: "Banks use call money to meet temporary shortages of cash and maintain the required Cash Reserve Ratio (CRR).",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-004", type: "mcq", difficulty: "medium",
      question: "Which function of SEBI involves prohibition of fraudulent and unfair trade practices like price rigging?",
      options: ["Regulatory", "Developmental", "Protective", "Allocative"],
      correct: 2,
      explanation: "Protective functions are aimed at protecting the interests of the investors and ensuring fair practices.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-005", type: "mcq", difficulty: "hard",
      question: "In the context of Money Market, 'Bridge Financing' is typically achieved through:",
      options: ["Treasury Bills", "Commercial Bills", "Commercial Paper", "Call Money"],
      correct: 2,
      explanation: "Commercial paper is used by companies to bridge the gap between long-term fundraising and immediate needs (like flotation costs).",
      examTags: ["CUET"]
    }
  ]
};
