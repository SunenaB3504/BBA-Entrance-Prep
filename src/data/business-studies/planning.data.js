// src/data/business-studies/planning.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const planningData = {
  subject: "Business Studies",
  chapter: "Planning",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Concept of Planning",
        content: `Planning is deciding in advance what to do and how to do. It is bridge between where we are and where we want to go.

**Key Aspects:**
- **Setting Objectives**: Determining what needs to be achieved.
- **Developing Courses of Action**: Deciding how to achieve goals.
- **Selection**: Choosing the best alternative.
- **Bridging the Gap**: Linking the present to the future.`,
        visualizations: []
      },
      {
        title: "Importance of Planning",
        content: `1. **Provides Direction**: Guides actions towards specific goals.
2. **Reduces Risks of Uncertainty**: Anticipates changes and prepares responses.
3. **Reduces Overlapping/Wasteful Activities**: Coordinates efforts and avoids confusion.
4. **Promotes Innovation**: Encourages new ideas and better methods.
5. **Facilitates Decision Making**: Helps choose between alternatives.
6. **Establishes Standards for Controlling**: Provides benchmarks to measure performance.`,
        visualizations: [
          {
            id: 'planning-importance-list',
            title: 'Benefits of Planning',
            type: 'list',
            data: ['Direction', 'Risk Reduction', 'Efficiency', 'Innovation', 'Decision Making', 'Control Basis']
          }
        ]
      },
      {
        title: "Features of Planning",
        content: `1. **Focuses on Objectives**: Purposeful activity directed towards goals.
2. **Primary Function**: The base for all other functions (Primacy).
3. **Pervasive**: Required at all levels and departments.
4. **Continuous**: Ongoing process as one cycle ends and next begins.
5. **Futuristic**: Forward-looking function based on forecasting.
6. **Involves Decision Making**: Choosing among alternatives.
7. **Mental Exercise**: Intellectual activity involving foresight and judgement.`,
        visualizations: []
      },
      {
        title: "Planning Process",
        content: `The systematic procedure for planning:
1. **Setting Objectives**: Defining clear, measurable goals.
2. **Developing Premises**: Making assumptions about the future.
3. **Identifying Alternative Courses**: Finding different paths to goals.
4. **Evaluating Alternatives**: Weighing pros and cons of each.
5. **Selecting an Alternative**: The real point of decision making.
6. **Implementing the Plan**: Putting plan into action.
7. **Follow-up Action**: Monitoring performance and ensuring adherence.`,
        visualizations: [
          {
            id: 'planning-process-flow',
            title: 'Steps in Planning',
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: 'Setting Objectives' },
                { id: '2', label: 'Developing Premises' },
                { id: '3', label: 'Identifying Alternatives' },
                { id: '4', label: 'Evaluating Alternatives' },
                { id: '5', label: 'Selecting' },
                { id: '6', label: 'Implementing' },
                { id: '7', label: 'Follow-up' }
              ],
              edges: [
                { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
                { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' }
              ]
            }
          }
        ]
      },
      {
        title: "Types of Plans",
        content: `**Single-use Plans**: One-time event (Budget, Programme).
**Standing Plans**: Regular activities (Policy, Procedure, Rule).

**Specific Types:**
- **Objectives**: End results.
- **Strategy**: Comprehensive plan against competition.
- **Policy**: Guide to thinking/decision-making.
- **Procedure**: Routine chronological steps.
- **Method**: Best way to perform one step.
- **Rule**: Strict statement (no discretion).
- **Budget**: Numerical results.
- **Programme**: Detailed statement of project.`,
        visualizations: [
          {
            id: 'single-vs-standing',
            title: 'Single-use vs Standing',
            type: 'table',
            data: {
              headers: ['Basis', 'Single-use', 'Standing'],
              rows: [
                ['Meaning', 'One-time event', 'Recurring activities'],
                ['Examples', 'Budget, Programme', 'Policy, Rule, Method']
              ]
            }
          }
        ]
      }
    ]
  },

  flashcards: [
    { id: "pl-fc-001", term: "Primacy of Planning", definition: "Planning provides the basis for all other management functions", formula: null, example: "Deciding goal before organizing team" },
    { id: "pl-fc-002", term: "Planning Premises", definition: "Assumptions made about the future on which plans are drawn", formula: null, example: "Forecasting tax rate changes" },
    { id: "pl-fc-003", term: "Selection Step", definition: "The real point of decision making in planning process", formula: null, example: "Choosing one expansion plan over others" },
    { id: "pl-fc-004", term: "Rule", definition: "Specific statement informing what is to be done; allows no discretion", formula: null, example: "No smoking in premises" },
    { id: "pl-fc-005", term: "Budget", definition: "Statement of expected results expressed in numerical terms", formula: null, example: "Sales budget for Q1" },
    { id: "pl-fc-006", term: "Strategy", definition: "Comprehensive plan for accomplishing organisational objectives", formula: null, example: "Marketing mix to counter new competitor" }
  ],

  questions: [
    {
      id: "pl-q-001", type: "mcq", difficulty: "easy",
      question: "Which of the following is NOT a step in the planning process?",
      options: [
        "Setting Objectives",
        "Developing Premises",
        "Allocation of jobs to members",
        "Follow-up action"
      ],
      correct: 2,
      explanation: "Allocation of jobs is a step in Organising, not Planning.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-002", type: "mcq", difficulty: "easy",
      question: "Planning involves looking ahead. Which feature is highlighted?",
      options: ["Pervasive", "Continuous", "Futuristic", "Mental Exercise"],
      correct: 2,
      explanation: "Planning is futuristic as it involves looking ahead and preparing for the future.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-003", type: "mcq", difficulty: "medium",
      question: "Which type of plan specifies exactly what is to be done and allows no discretion?",
      options: ["Policy", "Rule", "Procedure", "Method"],
      correct: 1,
      explanation: "A Rule is a specific statement that allows no discretion and must be strictly followed.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-004", type: "mcq", difficulty: "medium",
      question: "The step where assumptions about the future are made is called:",
      options: ["Setting Objectives", "Developing Premises", "Identifying Alternatives", "Evaluating Alternatives"],
      correct: 1,
      explanation: "Developing Premises involves making assumptions about the future on which plans will be based.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-005", type: "mcq", difficulty: "hard",
      question: "Successful execution of a plan in the past does not ensure success in the future. This points to which limitation?",
      options: [
        "Involves huge costs",
        "Time consuming",
        "Does not guarantee success",
        "Reduces creativity"
      ],
      correct: 2,
      explanation: "Relying on previously successful plans in a new or changed environment is risky and does not guarantee success.",
      examTags: ["CUET"]
    }
  ]
};
