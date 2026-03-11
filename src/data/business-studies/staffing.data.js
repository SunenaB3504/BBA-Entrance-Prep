// src/data/business-studies/staffing.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const staffingData = {
  subject: "Business Studies",
  chapter: "Staffing",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Concept & Importance of Staffing",
        content: `Staffing is the managerial function of filling and keeping filled the positions in the organisation structure. It is "putting people to jobs".

**Importance:**
- **Competent Personnel**: Discovering and obtaining qualified people.
- **Higher Performance**: Putting the right person on the right job.
- **Continuous Growth**: Ensuring survival through succession planning for managers.
- **Optimum Utilisation**: Avoiding overmanning and understaffing.
- **Job Satisfaction**: Improving morale through objective assessment and rewards.`,
        visualizations: [
          {
            id: 'staffing-importance-list',
            title: 'Significance of Staffing',
            type: 'list',
            data: ['Competent Personnel', 'Right Person on Right Job', 'Succession Planning', 'Optimized Workforce', 'Employee Morale']
          }
        ]
      },
      {
        title: "Staffing Process",
        content: `The systematic steps involved in staffing:
1. **Estimating Manpower Requirements**: Determining number and type of people needed (Workload vs Workforce analysis).
2. **Recruitment**: Attracting candidates to apply (Positive process).
3. **Selection**: Choosing the best candidate (Negative process).
4. **Placement and Orientation**: Introducing employee to organisation.
5. **Training and Development**: Improving skills and future potential.
6. **Performance Appraisal**: Evaluating performance against standards.
7. **Promotion and Career Planning**: Vertical growth opportunities.
8. **Compensation**: Financial and non-financial rewards.`,
        visualizations: [
          {
            id: 'staffing-process-flow',
            title: 'Steps in Staffing',
            type: 'flow',
            data: {
              nodes: [
                { id: '1', label: '1. Manpower Estimation' },
                { id: '2', label: '2. Recruitment' },
                { id: '3', label: '3. Selection' },
                { id: '4', label: '4. Placement & Orientation' },
                { id: '5', label: '5. Training & Dev' },
                { id: '6', label: '6. Performance Appraisal' },
                { id: '7', label: '7. Promotion' },
                { id: '8', label: '8. Compensation' }
              ],
              edges: [
                { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
                { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' },
                { from: '7', to: '8' }
              ]
            }
          }
        ]
      },
      {
        title: "Recruitment (Internal vs External)",
        content: `**Internal Sources**:
- **Transfers**: Shifting without major change in status/pay.
- **Promotions**: Shifting to higher position with more responsibility/pay.
- *Pros*: Motivation, cheaper. *Cons*: No fresh talent, lethargy.

**External Sources**:
- **Direct Recruitment**: Notice on board (for unskilled).
- **Advertisement**: Wider choice via media.
- **Campus Recruitment**: From colleges/institutes.
- **Placement Agencies**: For professional/top roles.
- **Web Publishing**: Job portals (e.g., Naukri, LinkedIn).
- *Pros*: Fresh talent, wide choice. *Cons*: Lengthy, costly.`,
        visualizations: []
      },
      {
        title: "Selection Process & Tests",
        content: `Selection is the "negative process" of rejecting unfit candidates.

**Selection Tests:**
- **Intelligence Test**: Measures IQ and learning ability.
- **Aptitude Test**: Measures potential to learn new skills.
- **Personality Test**: Measures emotions, reactions, maturity.
- **Trade Test**: Measures existing professional skills.
- **Interest Test**: Measures specific areas of involvement.

**Process Steps**: Screening → Selection Tests → Interview → Reference Checks → Selection Decision → Medical Exam → Job Offer → Contract.`,
        visualizations: []
      },
      {
        title: "Training and Development",
        content: `**Training**: Job-oriented (increasing current skills).
**Development**: Career-oriented (overall growth for future).

**Training Methods:**
- **On-the-Job**: Apprenticeship (under master), Internship (student-firm tie-up), Coaching.
- **Off-the-Job**: Vestibule Training (on dummy equipment in classroom), Case Study, Lectures.`,
        visualizations: []
      }
    ]
  },

  flashcards: [
    { id: "st-fc-001", term: "Staffing", definition: "Function of filling and keeping filled positions in organization", formula: null, example: "Hiring a new production manager" },
    { id: "st-fc-002", term: "Workload Analysis", definition: "Assessing number and type of people needed for jobs", formula: null, example: "Deciding that 10 more coders are needed for a project" },
    { id: "st-fc-003", term: "Workforce Analysis", definition: "Assessing number and type of people currently available in the organization", formula: null, example: "Checking core team size before hiring" },
    { id: "st-fc-004", term: "Aptitude Test", definition: "Test to measure an individual's potential to learn new skills", formula: null, example: "Testing a fresher's ability to learn coding" },
    { id: "st-fc-005", term: "Trade Test", definition: "Test to measure an individual's existing professional skills", formula: null, example: "Typing test for a stenographer" },
    { id: "st-fc-006", term: "Vestibule Training", definition: "Off-the-job training on dummy equipment in a classroom setting", formula: null, example: "Pilot training on a flight simulator" },
    { id: "st-fc-007", term: "Orientation", definition: "Introducing the new employee to the organization", formula: null, example: "Induction program explaining company culture" }
  ],

  questions: [
    {
      id: "st-q-001", type: "mcq", difficulty: "easy",
      question: "Which of the following describes 'putting the right person on the right job'?",
      options: ["Planning", "Organising", "Staffing", "Directing"],
      correct: 2,
      explanation: "Staffing ensures higher performance by putting the person with suitable skills on the correct job.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-002", type: "mcq", difficulty: "easy",
      question: "Which test measures the existing skills of an individual?",
      options: ["Intelligence Test", "Aptitude Test", "Personality Test", "Trade Test"],
      correct: 3,
      explanation: "Trade tests are used to measure the level of existing professional skills and knowledge.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-003", type: "mcq", difficulty: "medium",
      question: "Which source of recruitment is suitable for hiring unskilled or semi-skilled workers at short notice?",
      options: ["Advertisement", "Direct Recruitment", "Campus Recruitment", "Placement Agencies"],
      correct: 1,
      explanation: "Direct recruitment involves placing a notice on the notice board and is most suitable for casual workers.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-004", type: "mcq", difficulty: "medium",
      question: "Vestibule training is an example of:",
      options: ["On-the-job training", "Off-the-job training", "Internship", "Apprenticeship"],
      correct: 1,
      explanation: "Vestibule training is an off-the-job method where training is provided on dummy equipment away from the work floor.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-005", type: "mcq", difficulty: "hard",
      question: "The step in selection which involves a 'negative process' of eliminating unsuitable candidates in the first stage is:",
      options: ["Selection Decision", "Employment Interview", "Preliminary Screening", "Selection Test"],
      correct: 2,
      explanation: "Preliminary screening eliminates unqualified applicants based on info in their forms before other tests begin.",
      examTags: ["CUET"]
    }
  ]
};
