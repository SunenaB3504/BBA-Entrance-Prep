// src/data/business-studies/marketing.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const marketingData = {
  subject: "Business Studies",
  chapter: "Marketing Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u11-t1",
        title: "Marketing & Management Philosophies",
        content: {
          coreConcept: `Marketing is a social process of creating, offering, and exchanging products of value to satisfy needs/wants.

**Management Philosophies:**
1. **Production**: Focus on availability and affordability (Mass production).
2. **Product**: Focus on quality, features, and continuous improvement.
3. **Selling**: Aggressive promotion and sales volume (Pushing existing products).
4. **Marketing**: Focus on customer needs and satisfaction (Customer-centric).
5. **Societal Marketing**: Focus on satisfaction + social/ecological welfare.

| Concept | Starting Point | Focus | Ends |
| :--- | :--- | :--- | :--- |
| Production | Factory | Availability | Profit through Volume |
| Product | Factory | Quality | Profit through Quality |
| Selling | Factory | Existing Product | Profit through Sales Volume |
| Marketing | Market | Customer Needs | Profit through Satisfaction |
| Societal | Market/Society | Needs + Welfare | Profit through Social Well-being |`,
          speedSummary: "Production (Availability), Product (Quality), Selling (Push), Marketing (Satisfaction).",
          examples: [
            { q: "A sugar manufacturer focuses only on making sugar available in every small shop at the lowest price. Which philosophy is this?", a: "Production Concept." },
            { q: "A smartphone brand continuously updates its camera and processor every 6 months to stay ahead in quality. Name the philosophy.", a: "Product Concept." },
            { q: "A company uses aggressive TV ads and door-to-door salesmen to 'push' their vacuum cleaners. Name the philosophy.", a: "Selling Concept." }
          ]
        }
      },
      {
        id: "bs-u11-t2",
        title: "The Marketing Mix (4Ps)",
        content: {
          coreConcept: `The set of tools used to achieve marketing objectives:
1. **Product**: Branding, Packaging, Labelling.
2. **Price**: List price, discounts, terms.
3. **Place**: Channels of distribution, physical distribution.
4. **Promotion**: Advertising, Personal Selling, Sales Promotion, PR.

**Product: Branding & Packaging**
- **Branding**: Identifying a product and differentiating it (Name, Mark, Trademark).
- **Packaging** (Silent Salesman):
  - Primary: Immediate container.
  - Secondary: Additional protection.
  - Transportation: Shipping/Storage.`,
          speedSummary: "4Ps = Product, Price, Place, Promotion.",
          examples: [
            { q: "A chocolate brand uses a shiny, air-tight foil to keep the chocolate fresh. What type of packaging is this?", a: "Primary Packaging." },
            { q: "A company decides to sell its premium watches only through exclusive high-end malls. Which 'P' of marketing is this?", a: "Place (Physical Distribution)." },
            { q: "A detergent brand offers a '20% extra' pack at the same price. Which 'P' is being adjusted?", a: "Price." }
          ]
        }
      },
      {
        id: "bs-u11-t3",
        title: "Promotion Mix Elements",
        content: {
          coreConcept: `1. **Advertising**: Paid, impersonal communication by an identified sponsor.
2. **Personal Selling**: Oral presentation, personal relationship.
3. **Sales Promotion**: Short-term incentives (Rebates, Discounts, Lucky draws).
4. **Public Relations**: Building a positive corporate image.`,
          speedSummary: "Advertising (Impersonal), Personal Selling (Interactive), Sales Promotion (Short-term incentives).",
          examples: [
            { q: "A firm sponsors a local cricket tournament to build a positive image. Name the promotion element.", a: "Public Relations (PR)." },
            { q: "A car showroom representative gives a personal test drive and explains features to a customer. Name the element.", a: "Personal Selling." },
            { q: "A brand offers a 'Buy 1 Get 1 Free' deal during Diwali. Name the element.", a: "Sales Promotion." },
            { q: "A company runs a 30-second video ad on YouTube. Name the element.", a: "Advertising." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "mm-fc-001", term: "Marketing Concept", definition: "Focusing on customer needs as the key to achieving organizational goals", formula: null, example: "Designing a phone based on user surveys" },
    { id: "mm-fc-002", term: "Silent Salesman", definition: "Packaging that attracts attention and persuades purchase at the point of sale", formula: null, example: "An attractive cereal box design" },
    { id: "mm-fc-003", term: "Sales Promotion", definition: "Short term incentives to encourage immediate purchase", formula: null, example: "Buy 1 Get 1 Free offer" },
    { id: "mm-fc-004", term: "Trade Mark", definition: "A brand that has been given legal protection against use by others", formula: null, example: "The Nando's logo" }
  ],

  questions: [
    {
      id: "mm-q-001", type: "mcq", difficulty: "easy",
      question: "Which concept focuses on making products available and affordable?",
      options: ["Product Concept", "Production Concept", "Selling Concept", "Marketing Concept"],
      correct: 1,
      explanation: "Production concept assumes consumers will buy products that are widely available and cheap.",
      examTags: ["CUET"]
    }
  ]
};
