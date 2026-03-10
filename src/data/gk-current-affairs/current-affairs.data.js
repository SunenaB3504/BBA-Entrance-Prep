// src/data/gk-current-affairs/current-affairs.data.js
// CUET & MAH CET BBA — CURRENT AFFAIRS MODULE (2023-2024 HIGHLIGHTS)

export const currentAffairsData = {
    subject: "GK & Current Affairs",
    chapter: "Current Affairs",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "ca-national",
                title: "1. National Appointments & Awards",
                content: {
                    coreConcept: "Crucial recent appointments and awards in India (2023-2024).\n\n1. Finance: Dr. Arvind Panagariya (16th Finance Commission).\n2. Transport: Jaya Verma Sinha (1st Woman Railway CEO).\n3. Awards: Padma Vibhushan (Chiranjeevi), Padma Bhushan (Mithun Chakraborty).",
                    formulaBank: "• 16th Finance Com: Arvind Panagariya\n• Railway Board CEO: Jaya Verma Sinha\n• Padma Vibhushan: Arts (Chiranjeevi)",
                    logic: "Focus on 'Firsts' (First woman CEO) and 'Highest' (Padma Vibhushan is higher than Bhushan).",
                    traps: "Don't confuse Padma Shri with Padma Bhushan. Mithun received Bhushan. Chiranjeevi received Vibhushan.",
                    examples: [
                        { q: "Who is the head of the 16th Finance Commission?", a: "Dr. Arvind Panagariya." },
                        { q: "Who is the first woman CEO of the Railway Board?", a: "Jaya Verma Sinha." }
                    ],
                    speedSummary: "Arvind P = Finance. Jaya V = Railways. Chiranjeevi = Padma Vibhushan."
                }
            },
            {
                id: "ca-tech-geopol",
                title: "2. Tech & International Affairs",
                content: {
                    coreConcept: "Key technological milestones and geopolitical groupings.\n\n1. Defense: Mission Divyastra (Agni-5 MIRV).\n2. Infrastructure: 1st 3D-printed Post Office (Bengaluru).\n3. Geopolitics: QUAD (India, USA, Japan, Australia).",
                    formulaBank: "• QUAD: 4 Nations\n• MIRV: Multiple Warheads\n• 3D Post Office: Bengaluru",
                    logic: "QUAD members are the 'big four' democracies in Indo-Pacific. China is a competitor, NOT a member.",
                    traps: "The location of the 3D post office is Bengaluru, not Hyderabad or Pune.",
                    examples: [
                        { q: "What are the QUAD countries?", a: "India, USA, Japan, Australia." },
                        { q: "What is Mission Divyastra?", a: "Agni-5 MIRV Missile Test." }
                    ],
                    speedSummary: "QUAD = 4 Democracies. Mission Divyastra = Agni-5. 3D Office = Bengaluru."
                }
            }
        ]
    },
    flashcards: [
        { id: "ca-fc-001", term: "16th Finance Commission", definition: "Chairman: Dr. Arvind Panagariya." },
        { id: "ca-fc-002", term: "Railway Board CEO", definition: "Jaya Verma Sinha (First Woman CEO)." },
        { id: "ca-fc-003", term: "Mission Divyastra", definition: "Successful flight test of Agni-5 with MIRV technology." },
        { id: "ca-fc-004", term: "QUAD Members", definition: "India, USA, Japan, Australia." },
        { id: "ca-fc-005", term: "Padma Vibhushan 2024 (Arts)", definition: "Konidela Chiranjeevi." }
    ],
    questions: [
        {
            id: "ca-v1-001", type: "mcq", difficulty: "medium",
            question: "Who was awarded the 'Padma Vibhushan' 2024 for Arts?",
            options: ["Mithun Chakraborty", "Konidela Chiranjeevi", "Jaya Verma Sinha", "Sitaram Jindal"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Actor Chiranjeevi received the highest Padma award in 2024.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-002", type: "mcq", difficulty: "medium",
            question: "Actor Mithun Chakraborty was honored with which award in 2024?",
            options: ["Padma Vibhushan", "Padma Bhushan", "Padma Shri", "Bharat Ratna"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Mithun received the Padma Bhushan, NOT Padma Shri or Vibhushan.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-003", type: "mcq", difficulty: "medium",
            question: "Who is the first woman Chairman and CEO of the Railway Board (2023)?",
            options: ["Madhabi Puri Buch", "Jaya Verma Sinha", "Nirmala Sitharaman", "Droupadi Murmu"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Jaya Verma Sinha is a historic first in Indian Railways.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-004", type: "mcq", difficulty: "hard",
            question: "Identify the incorrectly matched pair (Verified Facts 2024):",
            options: [
                "Dr. Arvind Panagariya - 16th Finance Commission",
                "Mission Divyastra - Agni-5 MIRV",
                "Jhulaghat Bridge - India-Nepal",
                "China - QUAD Member"
            ],
            correct: 3,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "China is NOT a member of the QUAD (India, USA, Japan, Australia).",
            examTags: ["CUET"]
        },
        {
            id: "ca-v1-005", type: "mcq", difficulty: "medium",
            question: "Where was India's first 3D-printed Post Office inaugurated?",
            options: ["Pune", "Hyderabad", "Bengaluru", "Chennai"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Inaugurated in Cambridge Layout, Bengaluru.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-006", type: "mcq", difficulty: "hard",
            question: "The Raman Magsaysay Award 2023 was given to Dr. Ravi Kannan R. for his work in:",
            options: ["Space Technology", "Cancer Care", "Rural Education", "Climate Change"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "He is an oncologist from Assam recognized for pro-poor healthcare.",
            examTags: ["CUET"]
        },
        {
            id: "ca-v1-007", type: "mcq", difficulty: "medium",
            question: "In the context of the Agni-5 missile, what does MIRV stand for?",
            options: [
                "Multiple Independently Targetable Re-Entry Vehicle",
                "Main Inter Range Vehicle",
                "Medium Indian Rocket Version",
                "Mobile Integrated Radar Vision"
            ],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Technology allowing multiple warheads on a single missile.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-008", type: "mcq", difficulty: "medium",
            question: "The 'Mission Antyodaya' survey focuses on which level of governance?",
            options: ["Urban Municipalities", "Gram Panchayats", "State Assemblies", "Central Ministries"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Annual survey to monitor rural development convergence.",
            examTags: ["CUET"]
        },
        {
            id: "ca-v1-009", type: "mcq", difficulty: "medium",
            question: "Dr. Arvind Panagariya is the Chairman of which constitutional body?",
            options: ["Niti Aayog", "Railway Board", "16th Finance Commission", "UPSC"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "He heads the newly constituted 16th Finance Commission.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "ca-v1-010", type: "mcq", difficulty: "medium",
            question: "M. Fathima Beevi, who recently passed away and received Padma Bhushan 2024, was the first woman:",
            options: ["Governor of India", "Judge of Supreme Court", "Pilot in Air Force", "Chief Minister"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "A trailblazer for women in the Indian judiciary.",
            examTags: ["CUET", "MH-CET"]
        }
    ]
};
