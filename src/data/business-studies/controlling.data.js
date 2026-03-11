// src/data/business-studies/controlling.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const controllingData = {
  subject: "Business Studies",
  chapter: "Controlling",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Concept & Importance of Controlling",
        content: `Controlling is the process of ensuring that activities in an organisation are performed as per the plans. It ensures resources are used effectively and efficiently.

**Importance:**
- **Accomplishing Goals**: Measures progress and highlights deviations.
- **Judging Accuracy of Standards**: Verifies if standards are realistic in a changing environment.
- **Efficient Use of Resources**: Reduces wastage and spoilage.
- **Improving Motivation**: Employees know the standards against which they are judged.
- **Order & Discipline**: Minimizes dishonest behavior by monitoring.`,
        visualizations: []
      },
      {
        title: "Planning-Controlling Relationship",
        content: `Planning and Controlling are "inseparable twins":
- **Standards from Planning**: Controlling is meaningless without plans (standards).
- **Feedback from Controlling**: Planning is blind without control (ensuring goals are met).
- **Forward & Backward looking**: Planning is forward-looking; Controlling is backward-looking (evaluative) but also forward-looking (corrective action for future).`,
        visualizations: [
          {
            id: 'plan-control-cycle',
            title: 'Management Cycle',
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: 'Planning (Standards)' },
                { id: '2', label: 'Controlling (Evaluation)' }
              ],
              edges: [
                { from: '1', to: '2', label: 'Provides Standards' },
                { from: '2', to: '1', label: 'Provides Feedback' }
              ]
            }
          }
        ]
      },
      {
        title: "Controlling Process",
        content: `Steps in the process:
1. **Setting Standards**: Criteria for measurement (Quantitative/Qualitative).
2. **Measurement**: Gathering actual performance data.
3. **Comparison**: Finding the deviation (Actual vs Standard).
4. **Analysing Deviations**:
   - **Critical Point Control (CPC)**: Focus on Key Result Areas (KRAs).
   - **Management by Exception (MBE)**: Report only significant deviations.
5. **Corrective Action**: Bringing performance back to plan or revising standards.`,
        visualizations: [
          {
            id: 'controlling-process-flow',
            title: 'Controlling Process',
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: 'Set Standards' },
                { id: '2', label: 'Measure Performance' },
                { id: '3', label: 'Compare' },
                { id: '4', label: 'Analyse (CPC/MBE)' },
                { id: '5', label: 'Corrective Action' }
              ],
              edges: [
                { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }, { from: '4', to: '5' }
              ]
            }
          }
        ]
      },
      {
        title: "Techniques of Control",
        content: `**Traditional Techniques:**
- Personal Observation, Statistical Reports, Breakeven Analysis, Budgetary Control.

**Modern Techniques:**
- **Return on Investment (ROI)**.
- **Ratio Analysis** (Liquidity, Solvency).
- **Responsibility Accounting** (Cost, Revenue, Profit centers).
- **Management Audit**.
- **PERT & CPM** (Project management).
- **MIS** (Information systems).`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "co-fc-001", term: "Controlling", definition: "Ensuring organizational activities are performed as per plans", formula: null, example: "Checking if production targets were met at month end" },
    { id: "co-fc-002", term: "Critical Point Control (CPC)", definition: "Focusing control on Key Result Areas (KRAs) critical to success", formula: null, example: "Focusing on labor costs in a factory" },
    { id: "co-fc-003", term: "Management by Exception (MBE)", definition: "Reporting only significant deviations beyond permissible limits", formula: null, example: "Reporting only if expenses exceed budget by >10%" },
    { id: "co-fc-004", term: "Breakeven Analysis", definition: "Technique to study relationship between costs, volume, and profit", formula: null, example: "Finding how many units to sell to cover all costs" },
    { id: "co-fc-005", term: "Responsibility Accounting", definition: "Setting up sections as responsibility centers (Cost, Revenue, etc.)", formula: null, example: "Evaluating the marketing department as a revenue center" },
    { id: "co-fc-006", term: "PERT/CPM", definition: "Network techniques for planning and controlling complex projects", formula: null, example: "Using a chart to track construction of a new bridge" },
    { id: "co-fc-007", term: "Deviation", definition: "The difference between actual performance and planned standards", formula: null, example: "Actual sales 90 units while target was 100" }
  ],

  questions: [
    {
      id: "co-q-001", type: "mcq", difficulty: "easy",
      question: "Which function of management brings the cycle back to planning?",
      options: ["Organising", "Staffing", "Directing", "Controlling"],
      correct: 3,
      explanation: "Controlling provides feedback which forms the basis for future planning, thus completing the loop.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-002", type: "mcq", difficulty: "easy",
      question: "Standards can be qualitative as well as quantitative. Which is a qualitative standard?",
      options: ["Sales targets", "Labour costs", "Employee morale", "Units produced"],
      correct: 2,
      explanation: "Employee morale and job satisfaction are qualitative because they are difficult to measure in numbers.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-003", type: "mcq", difficulty: "medium",
      question: "'Control everything, control nothing' refers to which principle?",
      options: ["Critical Point Control", "Management by Exception", "Unity of Command", "Scalar Chain"],
      correct: 1,
      explanation: "Management by Exception emphasizes focusing only on significant deviations rather than checking every minor detail.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-004", type: "mcq", difficulty: "medium",
      question: "Key Result Areas (KRAs) are the focus of which technique?",
      options: ["Budgetary Control", "Personal Observation", "Critical Point Control", "Ratio Analysis"],
      correct: 2,
      explanation: "Critical Point Control focuses on KRAs that are critical to the overall success of the organization.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-005", type: "mcq", difficulty: "hard",
      question: "Planning is blind without controlling, and controlling is _____ without planning.",
      options: ["Backward-looking", "Meaningless", "Forward-looking", "Inseparable"],
      correct: 1,
      explanation: "Controlling is meaningless without planning because there would be no standards to compare performance against.",
      examTags: ["CUET"]
    }
  ]
};
