// src/data/business-studies/nature-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const natureManagementData = {
  subject: "Business Studies",
  chapter: "Nature & Significance of Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Introduction to Management",
        content: `Management is a process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims. It is essential for all organisations big or small, profit or non-profit, services or manufacturing.

**Core Functions (POSDC):**
1. **Planning**: Setting objectives and deciding how to achieve them.
2. **Organising**: Assigning duties and grouping tasks.
3. **Staffing**: Finding the right people for the right jobs.
4. **Directing**: Leading, influencing, and motivating employees.
5. **Controlling**: Monitoring performance against objectives.`,
        visualizations: [
          {
            id: 'mgmt-process-cycle',
            title: 'The Management Process Cycle',
            type: 'steps',
            data: ['Planning', 'Organising', 'Staffing', 'Directing', 'Controlling']
          }
        ]
      },
      {
        title: "Effectiveness vs Efficiency",
        content: `Management involves two critical dimensions that must be balanced:

**Effectiveness**: Doing the right task, completing activities and achieving goals. Its main focus is on the **end result** (Time).

**Efficiency**: Doing the task correctly and with minimum cost. Its main focus is on the **cost-benefit analysis** (Resources).

**Example**: Suppose a company's target is to produce 5,000 units in a month. 
- If a manager achieves the target by operating double shifts, they are **Effective** but **Inefficient** (due to high overtime costs).
- If they produce at standard cost but miss the deadline, they are **Efficient** but **Ineffective**.`,
        visualizations: [
          {
            id: 'eff-matrix',
            title: 'Effectiveness vs Efficiency Matrix',
            type: 'table',
            data: {
              headers: ['Basis', 'Effectiveness', 'Efficiency'],
              rows: [
                ['Meaning', 'Completing the job on time', 'Completing job with minimum cost'],
                ['Objective', 'To achieve end result', 'To conduct cost-benefit analysis'],
                ['Main Focus', 'Time', 'Cost']
              ]
            }
          }
        ]
      },
      {
        title: "Characteristics of Management",
        content: `1. **Goal Oriented Process**: Unites efforts of individuals towards common goals.
2. **Pervasive**: Required in all types of organizations and at all levels.
3. **Multidimensional**: Involves Management of Work, People, and Operations.
4. **Continuous Process**: Ongoing series of functions performed by all managers.
5. **Group Activity**: Requires teamwork and coordination.
6. **Dynamic Function**: Adapts to the changing environment (e.g., McDonald's changing its menu for the Indian market).
7. **Intangible Force**: Cannot be seen but its presence is felt (orderliness, discipline).`,
        visualizations: [
          {
            id: 'mgmt-dimensions',
            title: 'Dimensions of Management',
            type: 'list',
            data: ['Management of Work', 'Management of People', 'Management of Operations']
          }
        ]
      },
      {
        title: "Objectives of Management",
        content: `**1. Organizational Objectives**:
- **Survival**: Earning enough revenue to cover costs.
- **Profit**: Covering risks and providing an incentive.
- **Growth**: Expanding sales, products, or employees.

**2. Social Objectives**: Creating benefit for society (e.g., using eco-friendly methods, creating employment).

**3. Personal Objectives**: Meeting individual needs of employees (e.g., fair wages, recognition, training).`,
        visualizations: []
      },
      {
        title: "Levels of Management",
        content: `**Top Management**: 
- CEO, COO, Chairman. 
- Responsible for welfare, survival, and long-term goals.

**Middle Management**: 
- Division Heads, Department Managers. 
- Link between top and lower levels. Implement plans and interpret policies.

**Operational/Supervisory Management**: 
- Foremen, Supervisors. 
- Directly oversee the workforce, ensure quality, and minimize wastage.`,
        visualizations: [
          {
            id: 'levels-pyramid',
            title: 'Management Hierarchy',
            type: 'steps',
            data: ['Top Management (Strategic)', 'Middle Management (Tactical)', 'Operational Management (Technical)']
          }
        ]
      },
      {
        title: "Coordination: The Essence of Management",
        content: `Coordination is the process of synchronising the activities of different departments. It is the force that binds all other functions of management.

**Characteristics**:
- Integrates group efforts.
- Ensures unity of action.
- Continuous process.
- All pervasive.
- Deliberate function.

**Importance**: Needed due to Growth in size, Functional differentiation, and Specialisation.`,
        visualizations: [
          {
            id: 'coord-vs-coop',
            title: 'Coordination vs Cooperation',
            type: 'table',
            data: {
              headers: ['Basis', 'Coordination', 'Cooperation'],
              rows: [
                ['Meaning', 'Orderly arrangement of group efforts', 'Voluntary effort of individuals'],
                ['Nature', 'Deliberate and conscious effort', 'Voluntary and spontaneous'],
                ['Requirement', 'Required by managers at all levels', 'Depends on individual willingness']
              ]
            }
          }
        ]
      }
    ]
  },

  flashcards: [
    { id: "nsm-fc-001", term: "Management", definition: "Process of getting things done with the aim of achieving goals effectively and efficiently.", formula: null, example: "Coordinating a team to launch a product." },
    { id: "nsm-fc-002", term: "Effectiveness", definition: "Completing the right task and achieving goals within time (End result).", formula: null, example: "Meeting a production deadline." },
    { id: "nsm-fc-003", term: "Efficiency", definition: "Doing the task correctly with minimum cost (Input-Output relationship).", formula: null, example: "Using fewer raw materials to produce the same output." },
    { id: "nsm-fc-004", term: "Pervasive", definition: "Management is required in all types (economic/social/political) and sizes of organizations.", formula: null, example: "Management in a school and a factory." },
    { id: "nsm-fc-005", term: "Intangible Force", definition: "Management cannot be seen, but its presence is felt (orderliness, discipline).", formula: null, example: "A well-organized event vs a chaotic one." },
    { id: "nsm-fc-006", term: "Coordination", definition: "The process by which a manager synchronises the activities of different departments.", formula: null, example: "Matching production schedules with marketing campaigns." }
  ],

  questions: [
    {
      id: "nsm-q-001", type: "mcq", difficulty: "easy",
      question: "Which of the following describes 'Management is a continuous process'?",
      options: [
        "It involves a series of continuous, composite, but separate functions",
        "It can be applied to all types of organizations",
        "Needs of the environment change dynamically",
        "None of the above"
      ],
      correct: 0,
      explanation: "Management involves a series of ongoing, continuous, composite, but separate functions (POSDC).",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-002", type: "mcq", difficulty: "medium",
      question: "Which feature of profession is not strictly present in management?",
      options: [
        "Well defined body of knowledge",
        "Restricted Entry",
        "Service Motive",
        "Systematized body of knowledge"
      ],
      correct: 1,
      explanation: "Unlike medicine or law, there is no 'Restricted Entry' (specific degree required by law) or mandatory membership in a professional association for managers.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-003", type: "mcq", difficulty: "easy",
      question: "Identify the force that binds all other functions of management.",
      options: ["Cooperation", "Coordination", "Planning", "Hierarchy"],
      correct: 1,
      explanation: "Coordination is the force that synchronizes the activities of different departments and binds the functions of management.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-004", type: "mcq", difficulty: "medium",
      question: "Adopting eco-friendly methods of production helps achieve which objective of management?",
      options: ["Organisational", "Social", "Personal", "Economic"],
      correct: 1,
      explanation: "Social objectives involve the creation of benefit for society, such as environmental protection through eco-friendly methods.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-005", type: "mcq", difficulty: "medium",
      question: "At which level of management do managers interpret the policies framed by top management?",
      options: [
        "Top Level Management",
        "Middle Level Management",
        "Operational Management",
        "None of the above"
      ],
      correct: 1,
      explanation: "Middle Level Management acts as a link between top and lower levels and is responsible for interpreting policies set by the top management.",
      examTags: ["CUET"]
    }
  ]
};
