// src/data/business-studies/organising.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const organisingData = {
  subject: "Business Studies",
  chapter: "Organising",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Concept & Process of Organising",
        content: `Organising is the process of defining and grouping activities and establishing authority relationships among them. It translates plans into action.

**Steps in the Organising Process:**
1. **Identification and Division of Work**: Dividing work into manageable activities to avoid duplication.
2. **Departmentalisation**: Grouping similar activities (by function, product, or territory).
3. **Assignment of Duties**: Allocating work based on skills and competencies.
4. **Establishing Reporting Relationships**: Clarifying hierarchy (who reports to whom).`,
        visualizations: [
          {
            id: 'organising-process-flow',
            title: 'Steps in Organising',
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: '1. Identification & Division' },
                { id: '2', label: '2. Departmentalisation' },
                { id: '3', label: '3. Assignment of Duties' },
                { id: '4', label: '4. Reporting Relationships' }
              ],
              edges: [
                { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }
              ]
            }
          }
        ]
      },
      {
        title: "Importance of Organising",
        content: `- **Benefits of Specialisation**: Systematic allocation leads to expertise.
- **Clarity in Working Relationships**: Removes ambiguity and fixes responsibility.
- **Optimum Utilisation of Resources**: Avoids overlapping/duplication.
- **Adaptation to Change**: Flexible structure allows for environmental shifts.
- **Effective Administration**: Clear job descriptions prevent confusion.
- **Development of Personnel**: Delegation allows subordinates to learn and grow.
- **Expansion and Growth**: Facilitates addition of new departments/product lines.`,
        visualizations: []
      },
      {
        title: "Organisation Structures",
        content: `**1. Functional Structure**:
- Grouping jobs by major functions (Production, Marketing, etc.).
- Best for single-product firms needing specialization.
- *Pros*: Occupational specialization, efficiency.
- *Cons*: Functional empires, coordination problems.

**2. Divisional Structure**:
- Separate business units based on product lines.
- Each division is self-contained and multifunctional.
- *Pros*: Product specialization, profit accountability.
- *Cons*: Increased cost due to duplication, inter-divisional conflicts.`,
        visualizations: [
          {
            id: 'func-vs-div',
            title: 'Functional vs Divisional Structure',
            type: 'table',
            data: {
              headers: ['Basis', 'Functional', 'Divisional'],
              rows: [
                ['Basis', 'Functions', 'Product Lines'],
                ['Responsibility', 'Difficult to fix', 'Easy to fix (Profit centers)'],
                ['Cost', 'Economical', 'Costly (Duplication)']
              ]
            }
          }
        ]
      },
      {
        title: "Formal vs Informal Organisation",
        content: `**Formal**: 
- Deliberately created by management.
- Follows official scalar chain.
- Objective: Accomplish specific tasks.

**Informal**: 
- Spontaneous social networks.
- Follows "Grapevine" communication.
- Objective: Fulfill social/personal needs.`,
        visualizations: []
      },
      {
        title: "Delegation & Decentralisation",
        content: `**Delegation**: Downward transfer of authority from superior to subordinate.
- **Elements**: Authority (can be delegated), Responsibility (assigned), Accountability (absolute; cannot be delegated).

**Decentralisation**: Systematic delegation of authority to the lowest levels.
- **Importance**: Develops initiative, managerial talent, and ensures quick decision-making.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "og-fc-001", term: "Span of Management", definition: "Number of subordinates that can be effectively managed by a superior", formula: null, example: "A manager overseeing 5 team leads" },
    { id: "og-fc-002", term: "Accountability", definition: "Answerability for final outcome; cannot be delegated (flows upward)", formula: null, example: "Head remains answerable for project failure" },
    { id: "og-fc-003", term: "Principle of Absoluteness", definition: "Manager remains responsible for task even after delegating authority", formula: null, example: "Delegating work but staying liable for results" },
    { id: "og-fc-004", term: "Functional Structure", definition: "Grouping jobs of similar nature under major functions like HR or Finance", formula: null, example: "All accounting tasks under Finance department" },
    { id: "og-fc-005", term: "Divisional Structure", definition: "Organisation divided into separate units based on products (Cosmetics, Garments)", formula: null, example: "Samsung having separate mobile and appliance divisions" },
    { id: "og-fc-006", term: "Grapevine", definition: "The informal communication network within an organisation", formula: null, example: "Water-cooler gossip about office changes" },
    { id: "og-fc-007", term: "Decentralisation", definition: "Policy of pushing decision-making authority to the lowest possible levels", formula: null, example: "Branch managers deciding local staff bonuses" }
  ],

  questions: [
    {
      id: "og-q-001", type: "mcq", difficulty: "easy",
      question: "Which element of delegation cannot be delegated at all?",
      options: ["Authority", "Responsibility", "Accountability", "Power"],
      correct: 2,
      explanation: "Accountability is absolute and cannot be delegated; the superior remains answerable to their boss.",
      examTags: ["CUET"]
    },
    {
      id: "og-q-002", type: "mcq", difficulty: "easy",
      question: "The number of subordinates managed by a superior is called:",
      options: ["Scalar Chain", "Span of Management", "Hierarchy", "Delegation"],
      correct: 1,
      explanation: "Span of Management refers to the number of subordinates that can be effectively managed by a superior.",
      examTags: ["CUET"]
    },
    {
      id: "og-q-003", type: "mcq", difficulty: "medium",
      question: "Which structure is best for a firm producing multiple products like Cosmetics and Footwear?",
      options: ["Functional", "Divisional", "Formal", "Informal"],
      correct: 1,
      explanation: "Divisional structure is suitable for multi-product companies where each product can be an independent profit center.",
      examTags: ["CUET"]
    },
    {
      id: "og-q-004", type: "mcq", difficulty: "medium",
      question: "Which concept involves the systematic dispersal of authority to all levels of management?",
      options: ["Delegation", "Decentralisation", "Centralisation", "Departmentalisation"],
      correct: 1,
      explanation: "Decentralisation is the systematic delegation of authority throughout all levels of the organisation.",
      examTags: ["CUET"]
    },
    {
      id: "og-q-005", type: "mcq", difficulty: "hard",
      question: "The 'Principle of Absoluteness' in delegation relates to:",
      options: ["Authority", "Responsibility", "Accountability", "Division of Work"],
      correct: 2,
      explanation: "The Principle of Absoluteness of Accountability states that accountability cannot be delegated; the delegator remains responsible.",
      examTags: ["CUET"]
    }
  ]
};
