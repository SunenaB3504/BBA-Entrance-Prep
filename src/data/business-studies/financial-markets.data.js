// src/data/business-studies/financial-markets.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialMarketsData = {
  subject: "Business Studies",
  chapter: "Financial Markets",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u10-t1",
        title: "Concept of Financial Market",
        content: {
          coreConcept: `Financial Market is a link between **Savers** (Households) and **Investors** (Business Firms). It performs the function of **Allocative Efficiency**.

**Functions:**
- Mobilisation of savings.
- Price discovery.
- Providing liquidity to financial assets.
- Reducing the cost of transactions.`,
          speedSummary: "Financial Market = Link between Savers and Investors.",
          examples: [
            { q: "A family puts their savings into a mutual fund which then invests in a new startup. Which function is this?", a: "Mobilisation of savings and channeling them into productive uses." },
            { q: "Shares of a company rise from ₹200 to ₹250 because of high demand. Which function is performed?", a: "Price Discovery." },
            { q: "An investor needs cash urgently and sells his shares on the stock exchange in 5 minutes. Name the function.", a: "Providing Liquidity to financial assets." }
          ]
        }
      },
      {
        id: "bs-u10-t2",
        title: "Money Market vs Capital Market",
        content: {
          coreConcept: `**Money Market**: Short-term funds (up to 1 year).
**Capital Market**: Long-term funds (Equity, Debentures).

**Money Market Instruments:**
- **Treasury Bill (T-Bill)**: Zero-coupon bond issued by RBI for Govt (Safe, Liquid).
- **Commercial Paper (CP)**: Unsecured promissory note by large firms (Bridge financing).
- **Call Money**: Inter-bank 1 to 15 days borrowing.
- **Certificate of Deposit (CD)**: Issued by banks to retail/corp.
- **Commercial Bill**: Bill of exchange for credit sales.

| Basis | Money Market | Capital Market |
| :--- | :--- | :--- |
| Duration | Under 1 year | Long term |
| Instruments | T-Bills, CP, Call Money | Shares, Debentures |
| Risk | Low | High |
| Liquidity | High | Low |`,
          speedSummary: "Money (Short-term) vs Capital (Long-term) markets.",
          examples: [
            { q: "The RBI issues a security to help the government raise funds for 91 days. Name the instrument.", a: "Treasury Bill (T-Bill)." },
            { q: "A blue-chip company needs funds for 3 months to pay for a raw material shipment. Which instrument should it use?", a: "Commercial Paper (CP)." },
            { q: "A bank borrows funds from another bank for just one day to meet its reserve requirements. Name it.", a: "Call Money." }
          ]
        }
      },
      {
        id: "bs-u10-t3",
        title: "Stock Exchange & SEBI",
        content: {
          coreConcept: `**Primary Market**: Fresh issue of securities (IPO).
**Secondary Market**: Trading of existing securities (Stock Exchange).

**SEBI (Securities and Exchange Board of India):**
- **Protective Functions**: Prohibiting insider trading, price rigging, and promoting fair practices.
- **Developmental Functions**: Training intermediaries, conducting research.
- **Regulatory Functions**: Registration of brokers, conducting audits, and framing rules.`,
          speedSummary: "SEBI = Regulator (Protective, Developmental, Regulatory roles).",
          examples: [
            { q: "A company issues shares to the public for the first time. In which market does this happen?", a: "Primary Market (IPO)." },
            { q: "An investor buys existing shares of Infosys on the National Stock Exchange (NSE). Name the market.", a: "Secondary Market." },
            { q: "SEBI cancels the license of a broker who was found guilty of cheating clients. Which function is this?", a: "Protective function." },
            { q: "SEBI conducts a seminar to train stock brokers on new digital rules. Name the function.", a: "Developmental function." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "fmk-fc-001", term: "Money Market", definition: "Market for short-term financial assets with maturity up to one year.", formula: null, example: "Inter-bank lending via call money." },
    { id: "fmk-fc-002", term: "Treasury Bill", definition: "Short-term instrument issued by RBI on behalf of the Govt, also called Zero Coupon Bond.", formula: null, example: "A 91-day T-bill." },
    { id: "fmk-fc-003", term: "Commercial Paper", definition: "Unsecured promissory note issued by highly rated companies to raise short-term funds.", formula: null, example: "A blue-chip company raising funds for a month." },
    { id: "fmk-fc-004", term: "IPO", definition: "Initial Public Offer - first time issue of shares to the public in the primary market.", formula: null, example: "Zomato's first share sale in 2021." },
    { id: "fmk-fc-005", term: "SEBI", definition: "Securities and Exchange Board of India - the regulator of capital markets in India.", formula: null, example: "SEBI fining a company for misleading ads." }
  ],

  questions: [
    {
      id: "fmk-q-001", type: "mcq", difficulty: "easy",
      question: "Which instrument is also known as a 'Zero Coupon Bond'?",
      options: ["Commercial Paper", "Treasury Bill", "Call Money", "Equity Share"],
      correct: 1,
      explanation: "T-Bills are issued at a discount and redeemed at par, hence they carry no interest rate (Zero Coupon).",
      examTags: ["CUET"]
    }
  ]
};
