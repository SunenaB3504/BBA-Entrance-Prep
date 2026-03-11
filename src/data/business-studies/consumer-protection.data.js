// src/data/business-studies/consumer-protection.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const consumerProtectionData = {
  subject: "Business Studies",
  chapter: "Consumer Protection",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Importance of Consumer Protection",
        content: `Consumer protection is vital for a healthy market.

**From Consumer Perspective:**
- Overcoming **Ignorance** about rights.
- Protecting **Unorganised** consumers.
- Stopping **Widespread Exploitation** (adulteration, misleading ads).

**From Business Perspective:**
- **Long-term Interest**: Satisfied customers mean repeat business.
- **Social Responsibility**: Using society's resources requires accountability.
- **Moral Justification**: Business ethics.
- **Govt. Intervention avoidance**: Self-regulation prevents strict laws.`,
        visualizations: []
      },
      {
        title: "Consumer Rights (CPA 2019)",
        content: `1. **Right to Safety**: Protection against hazardous goods (e.g., ISI mark on electronics).
2. **Right to be Informed**: Info on price, quality, expiry, ingredients.
3. **Right to Choose**: Access to variety at competitive prices.
4. **Right to be Heard**: Right to file a complaint in a forum.
5. **Right to Seek Redressal**: Relief against unfair trade practices (Compensation, refund).
6. **Right to Consumer Education**: Acquiring knowledge to be an informed consumer.`,
        visualizations: []
      },
      {
        title: "Consumer Responsibilities",
        content: `Consumers must also be proactive:
- **Buy standardized goods** (ISI, Agmark, Hallmark).
- **Read labels** carefully for info and warnings.
- **Ask for Cash Memo** (crucial proof of purchase for court).
- **File a complaint** for genuine grievances.
- **Be honest** in choices and dealings.`,
        visualizations: [
          {
            id: 'quality-marks-grid',
            title: 'Common Quality Marks',
            type: 'grid',
            data: [
              { label: 'ISI', desc: 'Electrical/Durable Goods' },
              { label: 'Agmark', desc: 'Agricultural Products' },
              { label: 'Hallmark', desc: 'Gold/Silver Jewellery' },
              { label: 'FPO', desc: 'Processed Fruit Products' }
            ]
          }
        ]
      },
      {
        title: "Redressal Machinery (CPA 2019 Limits)",
        content: `A three-tier system for grievance redressal:
1. **District Commission**: Value of goods/services **up to ₹1 Crore**.
2. **State Commission**: Value between **₹1 Crore and ₹10 Crores**.
3. **National Commission**: Value **exceeds ₹10 Crores**.

**Appellate Procedure:**
- District -> State (45 days)
- State -> National (30 days)
- National -> Supreme Court (30 days)`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "cp-fc-001", term: "Consumer (CPA 2019)", definition: "Person who buys goods/services for consideration; excludes resale/commercial use", formula: null, example: "Buying a laptop for personal use" },
    { id: "cp-fc-002", term: "Right to be Informed", definition: "Right to have information about the product's quality, quantity, price, etc.", formula: null, example: "Checking ingredients list on a cereal box" },
    { id: "cp-fc-003", term: "Cash Memo", definition: "Proof of purchase required to file a complaint in consumer court", formula: null, example: "Keeping the receipt after buying a faulty TV" },
    { id: "cp-fc-004", term: "ISI Mark", definition: "Quality mark for electrical and industrial durable goods", formula: null, example: "Looking for ISI logo on an electric iron" },
    { id: "cp-fc-005", term: "District Commission Limit", definition: "Jurisdiction for cases involving value up to ₹1 Crore", formula: null, example: "Filing a case for a ₹40,000 defective mobile phone" },
    { id: "cp-fc-006", term: "National Commission Limit", definition: "Jurisdiction for cases involving value exceeding ₹10 Crores", formula: null, example: "A large scale fraud involving ₹15 Crore worth of services" },
    { id: "cp-fc-007", term: "Redressal", definition: "Relief obtained like replacement, refund, or compensation", formula: null, example: "Getting a full refund for a broken refrigerator" }
  ],

  questions: [
    {
      id: "cp-q-001", type: "mcq", difficulty: "easy",
      question: "Which right is violated if a shopkeeper forces you to buy a specific brand of toothpaste?",
      options: ["Right to Safety", "Right to choose", "Right to be informed", "Right to be heard"],
      correct: 1,
      explanation: "Right to choose ensures access to a variety of products at competitive prices.",
      examTags: ["CUET"]
    },
    {
      id: "cp-q-002", type: "mcq", difficulty: "easy",
      question: "What is the pecuniary jurisdiction of the District Commission under CPA 2019?",
      options: ["Up to ₹20 Lakh", "Up to ₹50 Lakh", "Up to ₹1 Crore", "Up to ₹10 Crore"],
      correct: 2,
      explanation: "Under the 2019 Act, the District Commission handles cases up to ₹1 Crore.",
      examTags: ["CUET"]
    },
    {
      id: "cp-q-003", type: "mcq", difficulty: "medium",
      question: "Which mark is used for certifying the purity of gold jewellery?",
      options: ["ISI Mark", "Agmark", "BIS Hallmark", "Eco-mark"],
      correct: 2,
      explanation: "BIS Hallmark is the standard mark for gold and silver jewellery in India.",
      examTags: ["CUET"]
    },
    {
      id: "cp-q-004", type: "mcq", difficulty: "medium",
      question: "An appeal against the order of the National Commission can be filed in:",
      options: ["State Commission", "High Court", "Supreme Court", "District Court"],
      correct: 2,
      explanation: "Appeals against National Commission orders go directly to the Supreme Court.",
      examTags: ["CUET"]
    },
    {
      id: "cp-q-005", type: "mcq", difficulty: "hard",
      question: "Which of the following is NOT a consumer according to the Act?",
      options: ["A person buying a car for personal use", "A person using a service for a fee", "A person buying goods for resale", "A person buying seeds for self-employment"],
      correct: 2,
      explanation: "The Act explicitly excludes anyone who buys goods for resale or commercial purposes.",
      examTags: ["CUET"]
    }
  ]
};
