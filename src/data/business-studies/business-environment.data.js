// src/data/business-studies/business-environment.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const businessEnvironmentData = {
  subject: "Business Studies",
  chapter: "Business Environment",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Introduction & Features",
        content: `Business environment is the sum total of all individuals, institutions and other forces that are outside the control of a business but may affect its performance.

**Key Features:**
1. **Totality of External Forces**: Aggregates all external factors.
2. **Specific & General Forces**: 
   - *Specific*: Customers, investors (affect firms directly).
   - *General*: Social, Political, Legal, Tech (affect all firms indirectly).
3. **Inter-relatedness**: Changes in one factor affect others (e.g., health awareness → organic food demand).
4. **Dynamic**: Environment keeps changing (tech, trends).
5. **Uncertainty**: Difficult to predict future happenings.
6. **Complexity**: Difficult to understand and analyze in parts.
7. **Relativity**: Differs from country to country (e.g., demand for sarees is higher in India than France).`,
        visualizations: []
      },
      {
        title: "Importance of Business Environment",
        content: `Understanding the environment allows a firm to:
- **Identify Opportunities**: Gain **First Mover Advantage** (e.g., Maruti in small cars).
- **Identify Threats**: Serve as **Early Warning Signals** (e.g., MNCs entering market).
- **Tap Useful Resources**: Extracting inputs like finance, labor, and raw materials.
- **Cope with Rapid Changes**: Adapting to turbulence and disruption.
- **Assistance in Planning**: Providing the basis for future policy formulation.
- **Improve Performance**: Continuous monitoring leads to better results.`,
        visualizations: []
      },
      {
        title: "Dimensions of Business Environment (PESTLE)",
        content: `1. **Economic Environment**: Interest rates, inflation, disposable income, value of rupee.
2. **Social Environment**: Customs, traditions, lifestyles, values (e.g., festive seasons, health-consciousness).
3. **Technological Environment**: Scientific improvements and innovations (e.g., online booking, AI).
4. **Political Environment**: Stability of government, attitude of government towards business.
5. **Legal Environment**: Acts passed by government, court judgements, administrative orders (e.g., statutory warnings).`,
        visualizations: [
          {
            id: 'pestle-dimensions',
            title: 'DIMENSIONS OF BUSINESS ENVIRONMENT',
            type: 'list',
            data: ['Economic', 'Social', 'Technological', 'Political', 'Legal']
          }
        ]
      },
      {
        title: "Economic Reforms (LPG 1991)",
        content: `In 1991, India introduced New Economic Policy to handle fiscal crisis.

**1. Liberalisation**: Removing unnecessary controls and restrictions (licensing, quotas).
**2. Privatisation**: Reducing role of public sector through **Disinvestment** (selling government equity).
**3. Globalisation**: Integrating domestic economy with world economy through free flow of trade and capital.`,
        visualizations: []
      },
      {
        title: "Demonetization",
        content: `Announced on **Nov 8, 2016** (₹500 and ₹1000 notes removed).

**Features:**
- **Tax Administration Measure**: Black money holders penalized.
- **Shift to Savings**: Directed cash into formal banking.
- **Digitization**: Pushed "less-cash" economy through digital payments (UPI).`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "be-fc-001", term: "Business Environment", definition: "External forces outside firm's control that affect its performance", formula: null, example: "Changes in tax laws or consumer tastes" },
    { id: "be-fc-002", term: "First Mover Advantage", definition: "Exploiting opportunities early before competitors", formula: null, example: "WhatsApp in free instant messaging" },
    { id: "be-fc-003", term: "Economic Dimension", definition: "Factors like interest rates, inflation, and income affecting demand", formula: null, example: "Rise in bank rates reducing demand for car loans" },
    { id: "be-fc-004", term: "Legal Dimension", definition: "Legislation, court judgments and government orders", formula: null, example: "Ban on single-use plastics" },
    { id: "be-fc-005", term: "Liberalisation", definition: "Removal of government restrictions and licensing on business", formula: null, example: "Abolishing license requirements for most industries" },
    { id: "be-fc-006", term: "Disinvestment", definition: "Selling out a part or whole of government shares in public sector units", formula: null, example: "Selling shares of LIC or Air India" },
    { id: "be-fc-007", term: "Specific Forces", definition: "Factors affecting individual firms directly (customers, suppliers, competitors)", formula: null, example: "A competitor launching a similar product at lower price" },
    { id: "be-fc-008", term: "General Forces", definition: "Factors affecting all firms in an industry (Social, Political, Legal)", formula: null, example: "A change in GST rates by the government" }
  ],

  questions: [
    {
      id: "be-q-001", type: "mcq", difficulty: "easy",
      question: "Increase in life expectancy of people belongs to which dimension?",
      options: ["Economic", "Social", "Technological", "Legal"],
      correct: 1,
      explanation: "Demographic changes like life expectancy or population shifts are part of the Social Environment.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-002", type: "mcq", difficulty: "easy",
      question: "Which feature of business environment emphasizes difficulty in predicting future happenings?",
      options: ["Complexity", "Dynamic", "Uncertainty", "Relativity"],
      correct: 2,
      explanation: "Uncertainty refers to the difficulty in predicting future events or environmental changes accurately.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-003", type: "mcq", difficulty: "medium",
      question: "The government sell-off of equity in public sector enterprises is called:",
      options: ["Liberlisation", "Globalisation", "Disinvestment", "Nationalisation"],
      correct: 2,
      explanation: "Disinvestment involves the government selling its stake in public sector enterprises to private investors.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-004", type: "mcq", difficulty: "medium",
      question: "Which dimension of business environment involves scientific improvements and innovations?",
      options: ["Economic", "Social", "Technological", "Legal"],
      correct: 2,
      explanation: "Technological environment includes forces related to scientific improvements and new ways of producing goods.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-005", type: "mcq", difficulty: "hard",
      question: "A statutory warning on tobacco packets is an example of which dimension?",
      options: ["Social", "Political", "Legal", "Economic"],
      correct: 2,
      explanation: "Any legislation or mandatory requirement by government law (statute) falls under the Legal Environment.",
      examTags: ["CUET"]
    }
  ]
};
