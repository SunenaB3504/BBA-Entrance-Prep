// src/data/business-studies/business-environment.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const businessEnvironmentData = {
  subject: "Business Studies",
  chapter: "Business Environment",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u3-t1",
        title: "Concept & Dimensions of Business Environment",
        content: {
          coreConcept: `Business Environment is the sum total of all individuals, institutions, and forces that are outside the control of a business enterprise but that may affect its performance.

**Dimensions (PESTLE-S):**
1. **Economic**: Interest rates, inflation, GDP (GST, Demonetization).
2. **Social**: Customs, values, lifestyle (Health awareness).
3. **Technological**: Innovation and R&D (Digital payments, AI).
4. **Legal**: Legislations and court judgments (Consumer Protection Act).
5. **Political**: System of government and stability (General election results).`,
          speedSummary: "Environment = Forces (Economic, Social, Tech, Legal, Political) affecting business.",
          examples: [
            { q: "The RBI increases the Repo Rate, making business loans more expensive. Which dimension is this?", a: "Economic Environment." },
            { q: "A surge in health awareness leads to increased demand for diet soda and organic snacks. Identify the dimension.", a: "Social Environment." },
            { q: "A new government policy allows 100% FDI in retail. To which environment does this belong?", a: "Political/Legal Environment." },
            { q: "A fashion retailer launches a mobile app to allow virtual try-ons using AR. Which dimension is this?", a: "Technological Environment." },
            { q: "The court passes an order banning plastic bags in the city. Identify the dimension.", a: "Legal Environment." }
          ]
        }
      },
      {
        id: "bs-u3-t2",
        title: "LPG Policy (New Economic Policy 1991)",
        content: {
          coreConcept: `India introduced major reforms in 1991 to boost the economy:
- **Liberalization**: Removing unnecessary controls and restrictions (Unlocking economy).
- **Privatization**: Reducing the role of Public Sector; Sale of shares (Disinvestment).
- **Globalization**: Integrating the national economy with the world economy (MNCs, Foreign Trade).

**Impact of LPG:**
- Increasing competition.
- More demanding customers.
- Rapidly changing technological environment.
- Necessity for change.
- Market orientation.`,
          speedSummary: "LPG = Liberalization, Privatization, Globalization (1991 Reforms).",
          examples: [
            { q: "The government removes the requirement for a license to start a new garment factory. Name the reform.", a: "Liberalization." },
            { q: "The government decides to sell its majority stake in a public sector airline to a private conglomerate. Name the process.", a: "Privatization (Disinvestment)." },
            { q: "An Indian IT firm sets up offices in Europe and hires local talent while serving global clients. Which concept is this?", a: "Globalization." },
            { q: "Since 1991, customers have become more demanding and competition has increased. Why?", a: "This is the impact of LPG (New Economic Policy) which opened up the market." },
            { q: "A company shifts from a 'production-oriented' approach to a 'market-oriented' approach after reforms. What does this mean?", a: "Earlier firms sold what they produced; now they produce what the market/consumer wants (Market Orientation)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "be-fc-001", term: "Liberalization", definition: "Unlocking the economy from government controls and restrictions.", formula: null, example: "Removing license requirements for industries." },
    { id: "be-fc-002", term: "Privatization", definition: "Transfer of ownership/control from the public sector to the private sector.", formula: null, example: "Sale of government shares in Air India." },
    { id: "be-fc-003", term: "Globalization", definition: "Integrating the domestic economy with the world economy.", formula: null, example: "Apple selling iPhones in India." },
    { id: "be-fc-004", term: "Social Environment", definition: "Forces like customs, traditions, and social trends that affect business.", formula: null, example: "Rise in demand for organic food." },
    { id: "be-fc-005", term: "Technological Environment", definition: "Forces relating to scientific improvements and innovations.", formula: null, example: "Shift from traditional banking to Net Banking." },
    { id: "be-fc-006", term: "Demonetization", definition: "The withdrawal of a currency unit's status as legal tender.", formula: null, example: "Nov 8, 2016 ban on ₹500 and ₹1000 notes." }
  ],

  questions: [
    {
      id: "be-q-001", type: "mcq", difficulty: "easy",
      question: "Which dimension of business environment relates to 'Interest Rates and Inflation'?",
      options: ["Social", "Economic", "Political", "Legal"],
      correct: 1,
      explanation: "Economic environment includes factors like interest rates, inflation, and disposable income.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-002", type: "mcq", difficulty: "medium",
      question: "The 1991 policy aimed at 'integrating the national economy with the world' is:",
      options: ["Liberalization", "Privatization", "Globalization", "Modernization"],
      correct: 2,
      explanation: "Globalization is the process of integrating the local economy with the global market.",
      examTags: ["CUET"]
    }
  ]
};
