// src/data/business-studies/planning.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const planningData = {
  subject: "Business Studies",
  chapter: "Planning",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u4-t1",
        title: "Concept & Importance of Planning",
        content: {
          coreConcept: `**Planning** is deciding in advance what to do and how to do it. It bridges the gap between where we are and where we want to go.

**Importance:**
- Provides Direction.
- Reduces risk of uncertainty.
- Reduces overlapping and wasteful activities.
- Promotes innovative ideas.
- Facilitates decision making.
- Establishes standards for **Controlling**.`,
          speedSummary: "Planning = Deciding in advance; Bridges the gap between present and future.",
          examples: [
            { q: "A company wants to increase its market share from 10% to 15% next year. What is this?", a: "This is Planning (bridging the gap between the current 10% and the desired 15%)." },
            { q: "By setting clear goals, a team knows exactly what to work towards. Which benefit of planning is this?", a: "Planning Provides Direction." },
            { q: "A manager uses the plan to check if the actual sales match the targets. How does planning help here?", a: "Planning Establishes standards for Controlling." }
          ]
        }
      },
      {
        id: "bs-u4-t2",
        title: "Planning Process",
        content: {
          coreConcept: `The sequence of steps in planning:
1. **Setting Objectives**: What the organization wants to achieve.
2. **Developing Premises**: Assumptions about the future.
3. **Identifying Alternatives**: Listing various ways to achieve goals.
4. **Evaluating Alternatives**: Checking pros and cons of each.
5. **Selecting an Alternative**: Choosing the best path.
6. **Implementing the Plan**: Putting plan into action.
7. **Follow-up Action**: Monitoring if plan is working.`,
          speedSummary: "Set Obj -> Premises -> Alternatives -> Evaluate -> Select -> Implement -> Follow-up.",
          examples: [
            { q: "A manager assumes that a new tax law will be passed next year while making a 5-year plan. Name this step.", a: "Developing Premises (assumptions about the future)." },
            { q: "A business compares 3 different delivery partners based on cost and speed. Name this step.", a: "Evaluating Alternatives." },
            { q: "After launching a new product, the manager checks weekly reports to see if the plan is working. Name this step.", a: "Follow-up Action." }
          ]
        }
      },
      {
        id: "bs-u4-t3",
        title: "Types of Plans",
        content: {
          coreConcept: `**Single-use Plans**: Non-recurring situations (Budget, Programme, Project).

**Standing Plans**: Used for recurring activities (Policy, Procedure, Rule, Method).

**Key Plan Types:**
- **Objectives**: Desired results.
- **Strategy**: Comprehensive long-term plan.
- **Rules**: Specific statements (Do/Don't).
- **Procedures**: Chronological steps (How to do).`,
          speedSummary: "Standing (Repeated) vs Single-use (One-time) plans.",
          examples: [
            { q: "A sign in the office says 'No Smoking'. What type of plan is this?", a: "A Rule (Standing Plan)." },
            { q: "A detailed manual explains the 10 steps to process a customer refund. Name the plan.", a: "A Procedure (Standing Plan)." },
            { q: "A company creates a detailed financial plan specifically for the 'Summer Sale 2025' event. Name it.", a: "A Budget or Programme (Single-use Plan)." },
            { q: "A firm decides its long-term move to enter the South Asian market by 2030. Name the plan type.", a: "A Strategy." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "pl-fc-001", term: "Planning", definition: "Bridging the gap between where we are and where we want to be.", formula: null, example: "Setting a 20% sales growth target." },
    { id: "pl-fc-002", term: "Developing Premises", definition: "Making assumptions about the future conditions for planning.", formula: null, example: "Assuming raw material prices will remain stable." },
    { id: "pl-fc-003", term: "Strategy", definition: "A comprehensive plan for achieving an organization's objectives.", formula: null, example: "A multi-year digital transformation plan." },
    { id: "pl-fc-004", term: "Single-use Plan", definition: "Plan developed for a non-recurring project or event.", formula: null, example: "A budget for an annual office party." }
  ],

  questions: [
    {
      id: "pl-q-001", type: "mcq", difficulty: "easy",
      question: "Which step in the planning process involves making assumptions about the future?",
      options: ["Setting Objectives", "Developing Premises", "Evaluating Alternatives", "Follow-up"],
      correct: 1,
      explanation: "Developing Premises refers to making assumptions about future conditions and events.",
      examTags: ["CUET"]
    }
  ]
};
