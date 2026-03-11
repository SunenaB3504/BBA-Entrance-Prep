// src/data/business-studies/principles-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const principlesManagementData = {
  subject: "Business Studies",
  chapter: "Principles of Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        title: "Nature of Management Principles",
        content: `Principles of management are broad and general guidelines for decision-making and behaviour. Unlike pure science, they are not rigid.

**Key Characteristics:**
1. **Universal Applicability**: Applied to all types of organizations and levels.
2. **General Guidelines**: Not ready-made solutions; they must be adapted.
3. **Formed by Practice**: Developed through observation and repeated testing.
4. **Flexible**: Can be modified depending on the situation.
5. **Mainly Behavioural**: Aim to influence human behavior.
6. **Cause & Effect Relationship**: Help predict outcomes of specific actions.
7. **Contingent**: Applicability depends on the prevailing situation.`,
        visualizations: []
      },
      {
        title: "Scientific Management (F.W. Taylor)",
        content: `F.W. Taylor, the "Father of Scientific Management," introduced scientific methods to the shop floor to increase productivity.

**Core Principles:**
- **Science, not Rule of Thumb**: Finding the "one best way" through analysis.
- **Harmony, Not Discord**: **Mental Revolution** - a complete change in attitude between management and workers.
- **Cooperation, Not Individualism**: Management should welcome worker suggestions.
- **Development of Each Person**: Scientific selection and training for maximum efficiency.

**Key Techniques:**
- **Functional Foremanship**: Separating planning (4 bosses) from execution (4 bosses).
- **Standardization**: Setting benchmarks for every activity.
- **Time Study**: Determining standard time for a task.
- **Motion Study**: Eliminating unnecessary movements.
- **Differential Piece Wage System**: Rewarding efficient workers with higher rates.`,
        visualizations: [
          {
            id: 'functional-foremanship',
            title: 'Functional Foremanship (8 Bosses)',
            type: 'flow',
            data: {
              nodes: [
                { id: 'plan', label: 'Planning (Route, Instruction, Time, Discipline)' },
                { id: 'prod', label: 'Production (Speed, Gang, Repair, Inspector)' },
                { id: 'w', label: 'Worker' }
              ],
              edges: [
                { from: 'plan', to: 'w' },
                { from: 'prod', to: 'w' }
              ]
            }
          }
        ]
      },
      {
        title: "Fayol's 14 Principles of Management",
        content: `Henri Fayol focus was on overall administration (Top Level).

**Top Principles:**
1. **Division of Work**: Specialization for efficiency.
2. **Unity of Command**: One subordinate, one boss.
3. **Unity of Direction**: One unit, one plan.
4. **Scalar Chain**: Formal line of authority. **Gang Plank** is the emergency shortcut.
5. **Equity**: Kindness and justice (no discrimination).
6. **Order**: "A place for everything and everyone in its place."
7. **Esprit de Corps**: Team spirit; replacing "I" with "We".`,
        visualizations: [
          {
            id: 'unity-command-vs-direction',
            title: 'Unity of Command vs Direction',
            type: 'table',
            data: {
              headers: ['Basis', 'Unity of Command', 'Unity of Direction'],
              rows: [
                ['Meaning', 'One boss per employee', 'One head, one plan per unit'],
                ['Aim', 'Prevents dual subordination', 'Prevents overlapping'],
                ['Impact', 'Affects individual', 'Affects entire unit']
              ]
            }
          }
        ]
      }
    ]
  },

  flashcards: [
    { id: "pm-fc-001", term: "Division of Work", definition: "Work should be divided into small tasks; each person specialises in one area", formula: null, example: "Assembly line — each worker does one specific task" },
    { id: "pm-fc-002", term: "Unity of Command", definition: "Each employee should receive orders from only one superior", formula: null, example: "An employee reporting to only one manager, not two" },
    { id: "pm-fc-003", term: "Unity of Direction", definition: "All activities with the same objective must have one head and one plan", formula: null, example: "All marketing activities under one marketing plan" },
    { id: "pm-fc-004", term: "Scalar Chain", definition: "Formal line of authority from top to bottom; also includes Gang Plank", formula: null, example: "MD → GM → Manager → Supervisor → Worker" },
    { id: "pm-fc-005", term: "Esprit de Corps", definition: "Team spirit and unity among employees should be promoted", formula: null, example: "Encouraging teamwork over individual glory" },
    { id: "pm-fc-006", term: "Scientific Management", definition: "Taylor's approach — use of science and not rule of thumb to manage work", formula: null, example: "Time & Motion Study to find the 'one best way'" },
    { id: "pm-fc-007", term: "Gang Plank", definition: "Exception to scalar chain — allows two employees of same level to communicate directly in emergencies", formula: null, example: "Emergency peer-to-peer contact shortcut" },
    { id: "pm-fc-008", term: "Mental Revolution", definition: "Complete change in attitude of workers and management towards each other.", formula: null, example: "Shifting from competition to cooperation." }
  ],

  questions: [
    {
      id: "pm-q-001", type: "mcq", difficulty: "easy",
      question: "Which principle of management states that there should be a place for everything and everything should be in its place?",
      options: ["Discipline", "Order", "Equity", "Stability of Tenure"],
      correct: 1,
      explanation: "The principle of 'Order' states that there should be a place for everything (material order) and everyone (social order).",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-002", type: "mcq", difficulty: "medium",
      question: "Which technique of scientific management aims to eliminate unnecessary movements?",
      options: ["Time Study", "Motion Study", "Fatigue Study", "Method Study"],
      correct: 1,
      explanation: "Motion Study involves studying body movements to eliminate unnecessary and wasteful motions.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-003", type: "mcq", difficulty: "medium",
      question: "The technique where planning and execution are separated is called:",
      options: ["Differential Piece Wage", "Functional Foremanship", "Standardisation", "Simplification"],
      correct: 1,
      explanation: "Functional Foremanship separates planning from execution by having 8 specialized bosses.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-004", type: "mcq", difficulty: "hard",
      question: "State the principle of Scientific Management that emphasizes a 'Mental Revolution'.",
      options: ["Science not Rule of Thumb", "Harmony, Not Discord", "Cooperation, Not Individualism", "Maximum Output"],
      correct: 1,
      explanation: "Harmony, Not Discord emphasizes a complete change in attitude (Mental Revolution) between workers and management.",
      examTags: ["CUET"]
    },
    {
      id: "pm-q-005", type: "mcq", difficulty: "medium",
      question: "Identify the communication route suggested by Fayol for emergencies between peers.",
      options: ["Scalar Chain", "Gang Plank", "Unity of Command", "Order"],
      correct: 1,
      explanation: "Gang Plank is a shorter, direct route in the Scalar Chain for emergency communication between peers.",
      examTags: ["CUET"]
    }
  ]
};
