// src/data/business-studies/marketing-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const marketingData = {
  subject: "Business Studies",
  chapter: "Marketing Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Marketing & Management Philosophies",
        content: `Marketing is a social process of creating, offering, and exchanging products of value to satisfy needs/wants.

**Management Philosophies:**
1. **Production**: Focus on availability and affordability (Mass production).
2. **Product**: Focus on quality, features, and continuous improvement.
3. **Selling**: Aggressive promotion and sales volume (Pushing existing products).
4. **Marketing**: Focus on customer needs and satisfaction (Customer-centric).
5. **Societal Marketing**: Focus on satisfaction + social/ecological welfare.`,
        visualizations: [
          {
            id: 'marketing-orientations',
            title: 'Marketing Orientations',
            type: 'table',
            data: {
              headers: ['Concept', 'Starting Point', 'Focus', 'Ends'],
              rows: [
                ['Production', 'Factory', 'Availability', 'Profit through Volume'],
                ['Product', 'Factory', 'Quality', 'Profit through Quality'],
                ['Selling', 'Factory', 'Existing Product', 'Profit through Sales Volume'],
                ['Marketing', 'Market', 'Customer Needs', 'Profit through Satisfaction'],
                ['Societal', 'Market/Society', 'Needs + Welfare', 'Profit through Social Well-being']
              ]
            }
          }
        ]
      },
      {
        title: "The Marketing Mix (4Ps)",
        content: `The set of tools used to achieve marketing objectives:
1. **Product**: Branding, Packaging, Labelling.
2. **Price**: List price, discounts, terms.
3. **Place**: Channels of distribution, physical distribution.
4. **Promotion**: Advertising, Personal Selling, Sales Promotion, PR.`,
        visualizations: []
      },
      {
        title: "Product: Branding & Packaging",
        content: `**Branding**: Identifying a product and differentiating it (Name, Mark, Trademark).
**Packaging**:
- **Primary**: Immediate container (e.g., Toothpaste tube).
- **Secondary**: Additional protection (e.g., Cardboard box).
- **Transportation**: For storage/shipping (e.g., Corrugated box).
- *Silent Salesman*: Packaging attracts and prompts purchase without human aid.

**Labelling**: Provides information about contents, usage, and legal requirements.`,
        visualizations: []
      },
      {
        title: "Promotion Mix Elements",
        content: `1. **Advertising**: Paid, impersonal communication by an identified sponsor.
2. **Personal Selling**: Oral presentation, flexible, personal relationship.
3. **Sales Promotion**: Short-term incentives (Rebates, Discounts, Lucky draws).
4. **Public Relations**: Building a positive corporate image and managing opinion.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "mm-fc-001", term: "Marketing Concept", definition: "Focusing on customer needs as the key to achieving organizational goals", formula: null, example: "Designing a phone based on user surveys" },
    { id: "mm-fc-002", term: "Silent Salesman", definition: "Packaging that attracts attention and persuades purchase at the point of sale", formula: null, example: "An attractive cereal box design" },
    { id: "mm-fc-003", term: "Sales Promotion", definition: "Short term incentives to encourage immediate purchase", formula: null, example: "Buy 1 Get 1 Free offer" },
    { id: "mm-fc-004", term: "Zero Level Channel", definition: "Direct distribution from manufacturer to consumer", formula: null, example: "Selling through a brand's own website" },
    { id: "mm-fc-005", term: "Trade Mark", definition: "A brand that has been given legal protection against use by others", formula: null, example: "The Coca-Cola logo" },
    { id: "mm-fc-006", term: "Labelling", definition: "Providing information about a product on its package", formula: null, example: "Nutrition facts on a food packet" },
    { id: "mm-fc-007", term: "Price Ceiling", definition: "Maximum price determined by utility and demand for the product", formula: null, example: "Customers refusing to pay more than $50 for a basic t-shirt" }
  ],

  questions: [
    {
      id: "mm-q-001", type: "mcq", difficulty: "easy",
      question: "Which concept focuses on making products available and affordable?",
      options: ["Product Concept", "Production Concept", "Selling Concept", "Marketing Concept"],
      correct: 1,
      explanation: "Production concept assumes consumers will buy products that are widely available and cheap.",
      examTags: ["CUET"]
    },
    {
      id: "mm-q-002", type: "mcq", difficulty: "easy",
      question: "Which level of packaging refers to the immediate container of the product?",
      options: ["Primary", "Secondary", "Transportation", "Institutional"],
      correct: 0,
      explanation: "Primary packaging is the immediate container (e.g., the tube for toothpaste).",
      examTags: ["CUET"]
    },
    {
      id: "mm-q-003", type: "mcq", difficulty: "medium",
      question: "'Aggressive promotion and sales volume' are the pillars of which concept?",
      options: ["Societal Concept", "Product Concept", "Selling Concept", "Marketing Concept"],
      correct: 2,
      explanation: "The selling concept relies on 'pushing' products through heavy advertising and sales techniques.",
      examTags: ["CUET"]
    },
    {
      id: "mm-q-004", type: "mcq", difficulty: "medium",
      question: "Which element of the promotion mix is a 'paid, impersonal form of communication'?",
      options: ["Personal Selling", "Public Relations", "Advertising", "Sales Promotion"],
      correct: 2,
      explanation: "Advertising is mass communication (impersonal) and requires payment (paid form).",
      examTags: ["CUET"]
    },
    {
      id: "mm-q-005", type: "mcq", difficulty: "hard",
      question: "What sets the 'ceiling' price for a product in the market?",
      options: ["Cost of production", "Government regulations", "Utility and Demand", "Competitors' prices"],
      correct: 2,
      explanation: "Product cost sets the floor, but utility and demand (what customers are willing to pay) set the upper limit or ceiling.",
      examTags: ["CUET"]
    }
  ]
};
