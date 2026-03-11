// src/data/accountancy/computerized-accounting.data.js
// GAP FILLING FOR CUET PREP

export const computerizedAccountingData = {
  subject: "Accountancy",
  chapter: "Computerized Accounting System",
  examTags: ["CUET"],

  flashcards: [
    { id: "cas-fc-001", term: "CAS", definition: "An accounting system that processes transactions through software to generate various financial reports.", formula: null, example: "Tally, SAP" },
    { id: "cas-fc-002", term: "DBMS", definition: "A software system used to store, retrieve, and run queries on data.", formula: null, example: "Oracle, MS Access" },
    { id: "cas-fc-003", term: "Data Processing Cycle", definition: "The sequence of steps: Data Input -> Processing -> Output.", formula: null, example: null },
    { id: "cas-fc-004", term: "AIS", definition: "Accounting Information System; a sub-system of MIS that tracks financial activities.", formula: null, example: null },
    { id: "cas-fc-005", term: "Spreadsheet", definition: "Electronic ledger for numerical data analysis using rows and columns.", formula: null, example: "MS Excel, Google Sheets" },
    { id: "cas-fc-006", term: "Logical Schema", definition: "The structure that defines how data is organized in a database.", formula: null, example: null },
    { id: "cas-fc-007", term: "Scalability", definition: "The ability of a system to grow and handle more data/users without losing performance.", formula: null, example: null }
  ],

  questions: [
    {
      id: "cas-q-001", type: "mcq", difficulty: "medium",
      question: "Which of the following is an advantage of Computerized Accounting over Manual Accounting?",
      options: ["Higher initial cost", "Better security from hacking", "Speed and Accuracy", "Requires less training"],
      correct: 2,
      explanation: "Computers can process huge volumes of data instantly with zero mathematical errors (if data entry is correct).",
      examTags: ["CUET"]
    },
    {
      id: "cas-q-002", type: "mcq", difficulty: "medium",
      question: "A 'Ready-to-use' accounting software is most suitable for:",
      options: ["Small organizations with few transactions", "Large multinationals", "Customized complex businesses", "Government departments"],
      correct: 0,
      explanation: "Small businesses with standard requirements prefer off-the-shelf (ready-to-use) software like Tally basic.",
      examTags: ["CUET"]
    },
    {
      id: "cas-q-003", type: "mcq", difficulty: "medium",
      question: "In a Relational Database (RDBMS), data is stored in:",
      options: ["Files", "Fields", "Tables", "Folders"],
      correct: 2,
      explanation: "RDBMS organizes data into rows and columns within 'Tables'.",
      examTags: ["CUET"]
    },
    {
      id: "cas-q-004", type: "mcq", difficulty: "medium",
      question: "Which Excel function is used to look up a value in the leftmost column of a table?",
      options: ["HLOOKUP", "VLOOKUP", "LOOKUP", "FIND"],
      correct: 1,
      explanation: "VLOOKUP (Vertical Lookup) searches the leftmost column and returns a value in the same row from a specified column.",
      examTags: ["CUET"]
    },
    {
      id: "cas-q-005", type: "assertion-reason", difficulty: "medium",
      assertion: "Computerized accounting provides instant reports like Balance Sheet.",
      reason: "In CAS, once the journal entry is posted, the ledger and final accounts are updated automatically.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "The major benefit of CAS is the 'one-time entry' logic which populates all subsequent reports.",
      examTags: ["CUET"]
    },
    {
      id: "cas-q-006", type: "mcq", difficulty: "medium",
      question: "What is the primary risk associated with CAS?",
      options: ["Slow processing", "Physical storage space", "Software failure or data corruption", "Arithmetic errors"],
      correct: 2,
      explanation: "CAS eliminates arithmetic errors but introduces risks like viruses, hacking, and system crashes.",
      examTags: ["CUET"]
    }
  ]
};
