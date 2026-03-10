// src/config/subjects.config.js

export const SUBJECTS = [
  {
    id: "accountancy",
    name: "Accountancy",
    icon: "📊",
    color: "#2563eb",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "partnership", name: "Partnership Basics", dataFile: "partnership.data" },
      { id: "admission-partner", name: "Admission of Partner", dataFile: "admission-partner.data" },
      { id: "retirement-death", name: "Retirement & Death of Partner", dataFile: "retirement-death.data" },
      { id: "dissolution", name: "Dissolution of Firm", dataFile: "dissolution.data" },
      { id: "share-capital", name: "Share Capital", dataFile: "share-capital.data" },
      { id: "debentures", name: "Debentures", dataFile: "debentures.data" },
      { id: "financial-statements", name: "Financial Statements", dataFile: "financial-statements.data" },
      { id: "cash-flow", name: "Cash Flow Statement", dataFile: "cash-flow.data" },
      { id: "ratio-analysis", name: "Ratio Analysis", dataFile: "ratio-analysis.data" }
    ]
  },
  {
    id: "business-studies",
    name: "Business Studies",
    icon: "🏢",
    color: "#16a34a",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "nature-management", name: "Nature & Significance of Management", dataFile: "nature-management.data" },
      { id: "principles-management", name: "Principles of Management", dataFile: "principles-management.data" },
      { id: "business-environment", name: "Business Environment", dataFile: "business-environment.data" },
      { id: "planning", name: "Planning", dataFile: "planning.data" },
      { id: "organising", name: "Organising", dataFile: "organising.data" },
      { id: "staffing", name: "Staffing", dataFile: "staffing.data" },
      { id: "directing", name: "Directing", dataFile: "directing.data" },
      { id: "controlling", name: "Controlling", dataFile: "controlling.data" },
      { id: "financial-management", name: "Financial Management", dataFile: "financial-management.data" },
      { id: "financial-markets", name: "Financial Markets", dataFile: "financial-markets.data" },
      { id: "marketing", name: "Marketing Management", dataFile: "marketing.data" },
      { id: "consumer-protection", name: "Consumer Protection", dataFile: "consumer-protection.data" }
    ]
  },
  {
    id: "economics",
    name: "Economics",
    icon: "📈",
    color: "#9333ea",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "consumer-behaviour", name: "Consumer Behaviour & Demand", dataFile: "consumer-behaviour.data" },
      { id: "production", name: "Production & Costs", dataFile: "production.data" },
      { id: "revenue-market", name: "Revenue & Market Equilibrium", dataFile: "revenue-market.data" },
      { id: "market-structures", name: "Market Structures", dataFile: "market-structures.data" },
      { id: "national-income", name: "National Income & Related Aggregates", dataFile: "national-income.data" },
      { id: "money-banking", name: "Money & Banking", dataFile: "money-banking.data" },
      { id: "income-employment", name: "Income & Employment Determination", dataFile: "income-employment.data" },
      { id: "government-budget", name: "Government Budget & Economy", dataFile: "government-budget.data" },
      { id: "balance-of-payments", name: "Balance of Payments", dataFile: "balance-of-payments.data" },
      { id: "index-numbers", name: "Index Numbers", dataFile: "index-numbers.data" }
    ]
  },
  {
    id: "reasoning",
    name: "Reasoning & Aptitude",
    icon: "🧠",
    color: "#ea580c",
    examTags: ["MH-CET"],
    chapters: [
      { id: "verbal-reasoning", name: "Verbal Reasoning", dataFile: "verbal-reasoning.data" },
      { id: "arithmetic-reasoning", name: "Arithmetic Reasoning", dataFile: "arithmetic-reasoning.data" },
      { id: "logical-reasoning", name: "Logical Reasoning", dataFile: "logical-reasoning.data" }
    ]
  },
  {
    id: "english",
    name: "English Language",
    icon: "📝",
    color: "#0891b2",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "comprehension", name: "Reading Comprehension", dataFile: "comprehension.data", questionCount: 30 },
      { id: "grammar", name: "Grammar & Usage Mastery", dataFile: "usage-mastery.data", questionCount: 10 },
      { id: "grammar-advanced", name: "Grammar (Advanced)", dataFile: "grammar-advanced.data", questionCount: 8 },
      { id: "literary-terms", name: "Literary Aptitude", dataFile: "literary-terms.data", questionCount: 10 },
      { id: "vocabulary-advanced", name: "Vocabulary (Advanced)", dataFile: "vocabulary-advanced.data", questionCount: 15 },
      { id: "mcet-comprehension", name: "MH-CET Reading Comprehension", dataFile: "mh-cet-comprehension.data", questionCount: 20 },
      { id: "mcet-grammar", name: "MH-CET Grammar Mastery", dataFile: "grammar.data", questionCount: 20 },
      { id: "mcet-vocabulary", name: "MH-CET Vocabulary Mastery", dataFile: "vocabulary.data", questionCount: 40 }
    ]
  },
  {
    id: "general-aptitude",
    name: "General Aptitude (GAT)",
    icon: "🎯",
    color: "#f59e0b",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "quantitative", name: "Quantitative Ability", dataFile: "quantitative.data", questionCount: 62 },
      { id: "logical-reasoning", name: "Logical Reasoning", dataFile: "logical-reasoning.data", questionCount: 75 }
    ]
  },
  {
    id: "gk-current-affairs",
    name: "GK & Current Affairs",
    icon: "🌍",
    color: "#059669",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "general-knowledge", name: "General Knowledge", dataFile: "general-knowledge.data", questionCount: 60 },
      { id: "current-affairs", name: "Current Affairs", dataFile: "current-affairs.data", questionCount: 10 },
      { id: "general-science", name: "General Science", dataFile: "general-science.data", questionCount: 45 }
    ]
  },
  {
    id: "computer-awareness",
    name: "Computer Awareness",
    icon: "💻",
    color: "#4f46e5",
    examTags: ["MH-CET"],
    chapters: [
      { id: "hardware", name: "Hardware & Architecture", dataFile: "hardware.data", questionCount: 45 },
      { id: "software-os", name: "Software & OS", dataFile: "software-and-os.data", questionCount: 45 },
      { id: "internet-networking", name: "Internet & Networking", dataFile: "internet-and-networking.data", questionCount: 45 },
      { id: "cybersecurity", name: "Cybersecurity & Ethics", dataFile: "cybersecurity.data", questionCount: 30 },
      { id: "abbreviations", name: "Tech Abbreviations", dataFile: "abbreviations.data", questionCount: 60 },
      { id: "number-systems", name: "Number Systems", dataFile: "number-systems.data", questionCount: 30 },
      { id: "ai-tech", name: "AI & Emerging Tech", dataFile: "ai-and-tech.data", questionCount: 10 }
    ]
  }
];

export const getSubjectById = (id) => SUBJECTS.find(s => s.id === id);
export const getChapterById = (subjectId, chapterId) => {
  const subject = getSubjectById(subjectId);
  return subject?.chapters.find(c => c.id === chapterId);
};
