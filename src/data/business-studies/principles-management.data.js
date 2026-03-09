// src/data/business-studies/principles-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const principlesManagementData = {
  subject: "Business Studies",
  chapter: "Principles of Management",
  examTags: ["CUET", "MH-CET"],

  flashcards: [
    { id: "pm-fc-001", term: "Division of Work", definition: "Work should be divided into small tasks; each person specialises in one area", formula: null, example: "Assembly line — each worker does one specific task" },
    { id: "pm-fc-002", term: "Unity of Command", definition: "Each employee should receive orders from only one superior", formula: null, example: "An employee reporting to only one manager, not two" },
    { id: "pm-fc-003", term: "Unity of Direction", definition: "All activities with the same objective must have one head and one plan", formula: null, example: "All marketing activities under one marketing plan" },
    { id: "pm-fc-004", term: "Scalar Chain", definition: "Formal line of authority from top to bottom; also includes Gang Plank", formula: null, example: "MD → GM → Manager → Supervisor → Worker" },
    { id: "pm-fc-005", term: "Esprit de Corps", definition: "Team spirit and unity among employees should be promoted", formula: null, example: "Encouraging teamwork over individual glory" },
    { id: "pm-fc-006", term: "Scientific Management", definition: "Taylor's approach — use of science and not rule of thumb to manage work", formula: null, example: "Time & Motion Study to find the 'one best way'" },
    { id: "pm-fc-007", term: "Gang Plank", definition: "Exception to scalar chain — allows two employees of same level to communicate directly in emergencies", formula: null, example: "Manager A communicates directly with Manager B (same level) during crisis" }
  ],

  questions: [
    {
      id: "pm-q-001", type: "mcq", difficulty: "easy",
      question: "Which principle of management states that there should be a place for everything and everything should be in its place?",
      options: ["Discipline", "Order", "Equity", "Stability of Tenure"],
      correct: 1,
      explanation: "The principle of 'Order' by Fayol states that there should be a place for everything (material order) and everyone (social order) in the organisation.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-002", type: "assertion-reason", difficulty: "medium",
      assertion: "According to Fayol, an employee should receive orders from one superior only.",
      reason: "This principle is called Unity of Direction.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 2,
      explanation: "A is true — this is Fayol's principle of Unity of Command. R is false — Unity of Direction means all activities with the same objective should have one head and one plan. These are two different principles.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-003", type: "mcq", difficulty: "easy",
      question: "F.W. Taylor is known as the 'Father of ___':",
      options: ["Modern Management", "Scientific Management", "Human Relations Management", "Classical Management"],
      correct: 1,
      explanation: "F.W. Taylor is called the Father of Scientific Management. He introduced scientific methods to analyse and improve worker efficiency.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-004", type: "mcq", difficulty: "medium",
      question: "Which of the following is NOT a principle of management given by Taylor?",
      options: ["Science not Rule of Thumb", "Harmony not Discord", "Cooperation not Individualism", "Authority and Responsibility"],
      correct: 3,
      explanation: "Authority and Responsibility is a principle of Fayol, not Taylor. Taylor's four principles are: Science not Rule of Thumb, Harmony not Discord, Cooperation not Individualism, and Development of each person to their greatest efficiency.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-005", type: "case-study", difficulty: "medium",
      passage: "Rohan is the General Manager of a firm. He has divided work among employees based on their specialisation. Each employee reports to only one manager. The firm follows a clear chain of command from top to bottom. Recently, during a crisis, two managers at the same level communicated directly to solve the issue quickly.",
      question: "Which concept allowed the two managers to communicate directly in the case above?",
      options: ["Unity of Command", "Scalar Chain", "Gang Plank", "Esprit de Corps"],
      correct: 2,
      explanation: "Gang Plank is an exception to the Scalar Chain that allows two employees at the same level to communicate directly in urgent situations, without going through the entire chain of command.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-006", type: "match-column", difficulty: "medium",
      question: "Match the principles with their description:",
      column_a: ["Equity", "Initiative", "Remuneration", "Centralisation"],
      column_b: [
        "Employees should be encouraged to develop plans",
        "Workers must be paid fair wages",
        "Concentration of authority at top level",
        "Managers should be kind and just to subordinates"
      ],
      correct_mapping: [3, 0, 1, 2],
      options: [
        "Equity-Kind & just, Initiative-Encourage plans, Remuneration-Fair wages, Centralisation-Top authority",
        "Equity-Fair wages, Initiative-Encourage plans, Remuneration-Kind & just, Centralisation-Top authority",
        "Equity-Top authority, Initiative-Fair wages, Remuneration-Encourage plans, Centralisation-Kind & just",
        "Equity-Encourage plans, Initiative-Kind & just, Remuneration-Top authority, Centralisation-Fair wages"
      ],
      correct: 0,
      explanation: "Equity = kind and just to workers; Initiative = employees should be encouraged to develop and execute plans; Remuneration = fair wages; Centralisation = concentration of authority at top.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-007", type: "mcq", difficulty: "easy",
      question: "Taylor's technique of 'Time Study' is used to:",
      options: [
        "Study body movements of a worker",
        "Determine standard time for completing a task",
        "Study fatigue levels of workers",
        "Determine the number of workers required"
      ],
      correct: 1,
      explanation: "Time Study determines the standard time required to complete a task, which helps set fair work targets and wage rates.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-008", type: "assertion-reason", difficulty: "hard",
      assertion: "Fayol's principles of management are universally applicable.",
      reason: "Fayol's principles are flexible and can be adapted to different situations.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Both A and R are true. Fayol himself stated his principles are flexible guidelines, not rigid rules — they can be adapted to varying circumstances. This flexibility is the reason they are considered universally applicable.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-009", type: "mcq", difficulty: "medium",
      question: "The concept of 'Differential Piece Wage System' was introduced by:",
      options: ["Henry Fayol", "Elton Mayo", "F.W. Taylor", "Peter Drucker"],
      correct: 2,
      explanation: "F.W. Taylor introduced the Differential Piece Wage System, where efficient workers (meeting standard output) get higher wages and inefficient workers get lower wages — to motivate productivity.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-010", type: "mcq", difficulty: "easy",
      question: "Fayol gave how many principles of management?",
      options: ["10", "12", "14", "16"],
      correct: 2,
      explanation: "Henry Fayol gave 14 Principles of Management, including Division of Work, Authority & Responsibility, Discipline, Unity of Command, Unity of Direction, and others.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-011", type: "mcq", difficulty: "medium",
      question: "'Scalar Chain' principle of Fayol suggests that:",
      options: [
        "All workers should be paid equally",
        "There should be a clear line of authority from top to bottom",
        "Authority and responsibility should be equal",
        "Workers should be given initiative"
      ],
      correct: 1,
      explanation: "Scalar Chain refers to the formal line of authority and communication from the highest to the lowest level in an organisation. It defines who reports to whom.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "pm-q-012", type: "mcq", difficulty: "hard",
      question: "Which of the following correctly distinguishes Unity of Command from Unity of Direction?",
      options: [
        "Unity of Command relates to one plan; Unity of Direction relates to one boss",
        "Unity of Command means one boss per employee; Unity of Direction means one head and one plan per objective",
        "Both mean the same thing",
        "Unity of Command is Taylor's principle; Unity of Direction is Fayol's"
      ],
      correct: 1,
      explanation: "Unity of Command = one employee, one boss. Unity of Direction = one group of activities with the same objective should have one head and one plan. Both are Fayol's principles but apply at different levels.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-013", type: "case-study", difficulty: "hard",
      passage: "ABC Ltd. has a large workforce. The management notices that workers are not achieving target output and there is constant conflict between workers and supervisors. The HR Manager suggests introducing a system where highly productive workers earn more per unit than less productive ones. The firm also decides to study body movements to find and eliminate unnecessary motions.",
      question: "The study of body movements to eliminate unnecessary motions is called:",
      options: ["Time Study", "Motion Study", "Fatigue Study", "Method Study"],
      correct: 1,
      explanation: "Motion Study involves studying the body movements of a worker to eliminate unnecessary and wasteful motions, thereby improving efficiency. It was developed by Frank and Lillian Gilbreth, adopted within Taylor's Scientific Management.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-014", type: "mcq", difficulty: "medium",
      question: "Which principle of Taylor states that the work of every person in the organisation should be planned out by the management at least one day in advance?",
      options: ["Scientific task planning", "Standardisation", "Functional foremanship", "Mental revolution"],
      correct: 0,
      explanation: "Scientific task planning (or Scientific task setting) ensures management plans each worker's task well in advance, specifying not just what to do but also how to do it and the time allowed — a key Taylor principle.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-015", type: "assertion-reason", difficulty: "medium",
      assertion: "Principles of management are universal in nature.",
      reason: "They can be applied uniformly in all situations without any modification.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 2,
      explanation: "A is true — management principles are universal and applicable to all types of organisations. But R is false — they are not applied without modification; they are flexible guidelines that need to be adapted to specific situations.",
      examTags: ["CUET"]
    }
  ]
};
