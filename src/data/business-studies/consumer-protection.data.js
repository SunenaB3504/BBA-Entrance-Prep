// src/data/business-studies/consumer-protection.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const consumerProtectionData = {
  subject: "Business Studies",
  chapter: "Consumer Protection",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u12-t1",
        title: "Importance of Consumer Protection",
        content: {
          coreConcept: `Consumer protection is vital for a healthy market.

**From Consumer Perspective:**
- Overcoming **Ignorance** about rights.
- Protecting **Unorganised** consumers.
- Stopping **Widespread Exploitation**.

**From Business Perspective:**
- **Long-term Interest**: Repeat business.
- **Social Responsibility**: Accountability.
- **Govt. Intervention avoidance**: Self-regulation.`,
          speedSummary: "CP protects consumers from exploitation and helps business long-term.",
          examples: [
            { q: "A consumer group educates villagers about how to detect adulteration in milk. Why is this important?", a: "Overcoming consumer ignorance." },
            { q: "A business chooses to use safe ingredients even if they are expensive to ensure repeat customers. Why?", a: "Long-term interest of business." },
            { q: "Why should a business proactively solve consumer complaints without waiting for a court order?", a: "To avoid government intervention." }
          ]
        }
      },
      {
        id: "bs-u12-t2",
        title: "Consumer Rights & Responsibilities",
        content: {
          coreConcept: `**Consumer Rights (CPA 2019):**
1. **Safety**: Protection against hazardous goods (ISI mark).
2. **Informed**: Info on price, quality, expiry.
3. **Choose**: Access to variety.
4. **Heard**: Right to file complaint.
5. **Redressal**: Relief like replacement/refund.
6. **Education**: Knowledge of rights.

**Responsibilities:**
- Buy standardized goods (ISI, Agmark).
- **Ask for Cash Memo** (proof for court).
- File genuine complaints.`,
          speedSummary: "Rights (Safety, Info, Choose, Heard, Redressal, Education) + Responsibilities (Bills, Marks).",
          examples: [
            { q: "A customer checks for the 'Agmark' on a packet of honey before buying. Which right/responsibility is this?", a: "Right to Safety (looking for standardized marks)." },
            { q: "A customer insists on getting a 'Cash Memo' for a smartphone purchase. Why?", a: "It is a consumer responsibility and serves as proof of purchase for legal redressal." },
            { q: "A consumer files a case against a company for a faulty air conditioner. Which right is exercised?", a: "Right to Seek Redressal." }
          ]
        }
      },
      {
        id: "bs-u12-t3",
        title: "Redressal Machinery",
        content: {
          coreConcept: `**CPA 2019 Pecuniary Limits:**
1. **District Commission**: Up to ₹1 Crore.
2. **State Commission**: ₹1 Crore to ₹10 Crores.
3. **National Commission**: Above ₹10 Crores.

**Appellate Procedure:**
- District -> State (45 days)
- State -> National (30 days)
- National -> Supreme Court (30 days)`,
          speedSummary: "District (<1cr), State (1-10cr), National (>10cr).",
          examples: [
            { q: "A consumer wants to file a claim for ₹60 lakh against a defective car. Where should he go?", a: "District Commission (Handles up to ₹1 Crore)." },
            { q: "A group of residents files a claim for ₹5 crore against a builder for poor construction. Name the commission.", a: "State Commission (₹1 Crore to ₹10 Crores)." },
            { q: "A hospital is sued for ₹15 crore for medical negligence. Name the commission.", a: "National Commission (Above ₹10 Crores)." },
            { q: "A consumer is unhappy with the District Commission's order. Where can he appeal?", a: "State Commission (within 45 days)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "cp-fc-001", term: "Consumer (CPA 2019)", definition: "Person who buys goods/services for consideration; excludes resale/commercial use", formula: null, example: "Buying a laptop for personal use" },
    { id: "cp-fc-002", term: "ISI Mark", definition: "Quality mark for electrical and industrial durable goods", formula: null, example: "Looking for ISI logo on an electric iron" },
    { id: "cp-fc-003", term: "Cash Memo", definition: "Proof of purchase required to file a complaint in consumer court", formula: null, example: "Keeping the receipt after buying a faulty TV" }
  ],

  questions: [
    {
      id: "cp-q-001", type: "mcq", difficulty: "easy",
      question: "What is the pecuniary jurisdiction of the District Commission under CPA 2019?",
      options: ["Up to ₹20 Lakh", "Up to ₹50 Lakh", "Up to ₹1 Crore", "Up to ₹10 Crore"],
      correct: 2,
      explanation: "Under the 2019 Act, the District Commission handles cases up to ₹1 Crore.",
      examTags: ["CUET"]
    }
  ]
};
