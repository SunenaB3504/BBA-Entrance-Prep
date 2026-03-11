// src/data/business-studies/organising.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const organisingData = {
  subject: "Business Studies",
  chapter: "Organising",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u5-t1",
        title: "Concept & Process of Organising",
        content: {
          coreConcept: `**Organising** is the process of identifying and grouping the work to be performed, defining responsibility, and establishing relationships for the purpose of enabling people to work most effectively.

**Organising Process:**
1. **Identification & Division of Work**: Avoiding duplication and reducing burden.
2. **Departmentalisation**: Grouping similar jobs (Functional or Divisional).
3. **Assignment of Duties**: Based on skills and competence.
4. **Establishing Reporting Relationships**: Defining who reports to whom.`,
          speedSummary: "Organising = Structure + Division of Work + Coordination.",
          examples: [
            { q: "A large retail store groups all cosmetics into one section and electronics into another. Name the step.", a: "Departmentalisation (grouping similar jobs)." },
            { q: "The manager assigns the task of billing to Rahul and inventory checking to Priya based on their skills. Name the step.", a: "Assignment of Duties." }
          ]
        }
      },
      {
        id: "bs-u5-t2",
        title: "Organisational Structure",
        content: {
          coreConcept: `Organisational structure is the network of job positions, responsibilities and authority at different levels.

| Basis | Functional Structure | Divisional Structure |
| :--- | :--- | :--- |
| Formation | Based on functions (Production, Sales) | Based on products (Clothing, Footwear) |
| Specialisation | Functional specialisation | Product specialisation |
| Responsibility | Difficult to fix on one department | Easy to fix for product performance |
| Managerial Dev. | Less opportunities | High (as manager heads a full division) |
| Cost | Economical (no duplication) | Expensive (duplication of functions) |
| Suitability | Mid-sized, single product firms | Large, multi-product firms |`,
          speedSummary: "Functional (by Dept) vs Divisional (by Product).",
          examples: [
            { q: "A huge conglomerate like Reliance has separate heads for Petrochemicals and Telecommunications. Which structure is this?", a: "Divisional Structure (based on product lines)." },
            { q: "A medium-sized manufacturing firm has separate departments for HR, Finance, and Marketing. Name the structure.", a: "Functional Structure (based on functions)." }
          ]
        }
      },
      {
        id: "bs-u5-t3",
        title: "Formal vs Informal Organisation",
        content: {
          coreConcept: `**Formal Organisation**: Deliberately created by management to achieve goals. Standardized and follows a scalar chain.

**Informal Organisation**: Spontaneously created from social interaction. Meets personal/social needs of employees.

**Delegation**: Transfer of authority from superior to subordinate.
**Elements of Delegation:**
- **Authority**: Right to command (Flows Downward).
- **Responsibility**: Obligation to perform (Flows Upward).
- **Accountability**: Answerability for output (Flows Upward - cannot be delegated).`,
          speedSummary: "Formal (Planned) vs Informal (Spontaneous). Delegation = Authority + Responsibility + Accountability.",
          examples: [
            { q: "Employees discuss the possibility of a bonus during their lunch break. To which organization does this belong?", a: "Informal Organisation." },
            { q: "A manager gives his subordinate the power to sign checks up to ₹50,000. What is this process?", a: "Delegation (transfer of authority)." },
            { q: "Can a manager transfer his final answerability for a task to his assistant?", a: "No, while authority and responsibility can be shared, **Accountability** is absolute and cannot be delegated." }
          ]
        }
      },
      {
        id: "bs-u5-t4",
        title: "Decentralisation",
        content: {
          coreConcept: `**Decentralisation** is the deliberate and even distribution of authority to the lowest levels. It is a philosophy of management.

**Difference from Delegation:**
- **Delegation** is a necessity (one person can't do all).
- **Decentralisation** is a policy decision (optional).
- Delegation is for 2 people; Decentralization is for the whole organization.`,
          speedSummary: "Decentralisation = Spread of authority to all levels.",
          examples: [
            { q: "In a company, the branch managers are allowed to decide their own local marketing budgets. Is this delegation or decentralisation?", a: "Decentralisation (authority is spread to lower levels of management as a policy)." },
            { q: "Why would a fast-growing company choose to decentralise?", a: "To facilitate quick decision-making and reduce the burden on top management." },
            { q: "True or False: Decentralisation is a necessity for every manager.", a: "False. Delegation is a necessity, but Decentralisation is an optional policy decision by top management." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "or-fc-001", term: "Organising", definition: "Process of grouping tasks and establishing authority relationships.", formula: null, example: "Grouping marketing tasks under the Marketing Manager." },
    { id: "or-fc-002", term: "Span of Management", definition: "Number of subordinates that can be effectively managed by a superior.", formula: null, example: "A manager overseeing 5 team leaders." },
    { id: "or-fc-003", term: "Functional Structure", definition: "Structure based on various functions like production, marketing, and finance.", formula: null, example: "A company having separate heads for Finance and HR." },
    { id: "or-fc-004", term: "Divisional Structure", definition: "Structure based on separate product lines.", formula: null, example: "ITC having divisions for Tobacco, Hotels, and Foods." },
    { id: "or-fc-005", term: "Delegation", definition: "Downward transfer of authority from a superior to a subordinate.", formula: null, example: "Assigning a project report to a junior." },
    { id: "or-fc-006", term: "Accountability", definition: "Answerability for the final outcome of the assigned task.", formula: null, example: "The supervisor explaining a missed deadline to the CEO." }
  ],

  questions: [
    {
      id: "or-q-001", type: "mcq", difficulty: "easy",
      question: "Which structure is suitable for a multi-product firm?",
      options: ["Functional", "Divisional", "Formal", "Informal"],
      correct: 1,
      explanation: "Divisional structure groups activities based on product lines, making it ideal for diverse product portfolios.",
      examTags: ["CUET"]
    }
  ]
};
