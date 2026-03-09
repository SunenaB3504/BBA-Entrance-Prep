// src/data/general-aptitude/general-knowledge.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const generalKnowledgeData = {
    subject: "General Knowledge",
    chapter: "General Knowledge & Static Awareness",
    examTags: ["CUET", "MH-CET"],

    flashcards: [
        { id: "gk-fc-001", term: "Article 324", definition: "Empowers the Election Commission of India to direct and control elections", formula: null, example: "Elections to Parliament and State Legislatures" },
        { id: "gk-fc-002", term: "CAG", definition: "Comptroller and Auditor General of India — Guardian of the public purse", formula: null, example: "Article 148 of Constitution" },
        { id: "gk-fc-003", term: "INC Foundation", definition: "Indian National Congress was founded in 1885 by A.O. Hume", formula: null, example: "First session in Mumbai, presided by W.C. Bonnerjee" },
        { id: "gk-fc-004", term: "Gandhi Movements Chronology", definition: "NCM (1920) → Dandi (1930) → Quit India (1942)", formula: null, example: "Non-Cooperation Movement was the first large-scale mass movement" },
        { id: "gk-fc-005", term: "Pink City", definition: "Jaipur, Rajasthan — famous for its distinct architectural color", formula: null, example: "Founded by Maharaja Sawai Jai Singh II" },
        { id: "gk-fc-006", term: "Silicon Valley of India", definition: "Bengaluru, Karnataka — Hub for IT and technology companies", formula: null, example: "Home to ISRO and major tech giants" },
        { id: "gk-fc-007", term: "Bhakra Nangal Dam", definition: "One of India's highest gravity dams, built on the Sutlej River", formula: null, example: "Serves Himachal Pradesh, Punjab, and Haryana" },
        { id: "gk-fc-008", term: "Nathu La Pass", definition: "Mountain pass in the Himalayas connecting Sikkim with Tibet", formula: null, example: "Major point on the ancient Silk Road" },
        { id: "gk-fc-009", term: "Padma Awards Hierarchy", definition: "Vibhushan (highest) > Bhushan > Shri", formula: null, example: "Padma Vibhushan is for 'exceptional and distinguished service'" },
        { id: "gk-fc-010", term: "QUAD Members", definition: "Quadrilateral Security Dialogue consisting of four nations", formula: null, example: "India, USA, Japan, Australia" }
    ],

    questions: [
        // --- CATEGORY A: Indian Polity (CUET + MAH CET) ---
        {
            id: "gk-q-001", type: "mcq", difficulty: "medium",
            question: "Which Article of the Indian Constitution provides for the 'Election Commission'?",
            options: ["Article 324", "Article 312", "Article 280", "Article 356"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Article 324 provides for the power of superintendence, direction, and control of elections to be vested in an Election Commission.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-002", type: "match-column", difficulty: "hard",
            question: "Match the following Constitutional bodies with their respective Articles:",
            column_a: ["Election Commission", "Finance Commission", "UPSC", "CAG of India"],
            column_b: ["Article 280", "Article 315", "Article 324", "Article 148"],
            correct_mapping: [2, 0, 1, 3],
            options: [
                "A-324, B-280, C-315, D-148",
                "A-280, B-324, C-315, D-148",
                "A-315, B-280, C-324, D-148",
                "A-148, B-315, C-280, D-324"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "EC = 324, FC = 280, UPSC = 315, CAG = 148.",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-003", type: "mcq", difficulty: "medium",
            question: "Who is known as the 'Guardian of the Public Purse' in India?",
            options: ["Finance Minister", "Prime Minister", "CAG", "Governor of RBI"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Comptroller and Auditor General (CAG) of India is the guardian of the public purse at both Center and State levels.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-004", type: "mcq", difficulty: "medium",
            question: "The 'Joint Sitting' of both houses of Parliament is presided over by:",
            options: ["The President", "The Vice President", "The Speaker of Lok Sabha", "The Chief Justice of India"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "While the President summons the joint sitting, it is always presided over by the Speaker of the Lok Sabha.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-005", type: "assertion-reason", difficulty: "hard",
            assertion: "The Rajya Sabha is a permanent body and cannot be dissolved.",
            reason: "One-third of its members retire every second year.",
            options: [
                "Both A and R are true; R is the correct explanation of A",
                "Both A and R are true; R is NOT the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Rajya Sabha is permanent specifically because the retirement cycle ensures it is never empty and never needs a full re-election (dissolution).",
            examTags: ["CUET"]
        },

        // --- CATEGORY B: Modern Indian History (CUET + MAH CET) ---
        {
            id: "gk-q-006", type: "mcq", difficulty: "medium",
            question: "In which year was the 'Non-Cooperation Movement' launched by Mahatma Gandhi?",
            options: ["1915", "1920", "1930", "1942"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Non-Cooperation Movement was launched in 1920 following the Jallianwala Bagh Massacre and the Khilafat Movement.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-007", type: "match-column", difficulty: "hard",
            question: "Match the movements with their correct years:",
            column_a: ["Swadeshi Movement", "Quit India Movement", "Civil Disobedience", "Home Rule League"],
            column_b: ["1942", "1916", "1905", "1930"],
            correct_mapping: [2, 0, 3, 1],
            options: [
                "Swadeshi-1905, Quit-1942, Civil-1930, HomeRule-1916",
                "Swadeshi-1942, Quit-1905, Civil-1916, HomeRule-1930",
                "Swadeshi-1916, Quit-1930, Civil-1905, HomeRule-1942",
                "Swadeshi-1930, Quit-1916, Civil-1942, HomeRule-1905"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Swadeshi (1905), Quit India (1942), Civil Disobedience (1930), Home Rule League (1916).",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-008", type: "mcq", difficulty: "easy",
            question: "Who among the following was the founder of the Indian National Congress?",
            options: ["Dadabhai Naoroji", "A.O. Hume", "W.C. Bonnerjee", "Gopal Krishna Gokhale"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Allan Octavian Hume (A.O. Hume) was the founder, while W.C. Bonnerjee was the first president.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-009", type: "mcq", difficulty: "medium",
            question: "The 'Dandi March' was the start of which national movement?",
            options: ["Non-Cooperation", "Quit India", "Civil Disobedience", "Khilafat"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Salt Satyagraha (Dandi March) in 1930 marked the beginning of the Civil Disobedience Movement.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-010", type: "mcq", difficulty: "medium",
            question: "Who was the Governor-General of India when the 1857 Revolt broke out?",
            options: ["Lord Dalhousie", "Lord Canning", "Lord Curzon", "Lord Bentinck"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Lord Canning was the Governor-General during the 1857 Revolt and later became the first Viceroy of India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-011", type: "mcq", difficulty: "hard",
            question: "Which Constitutional Amendment is known as the 'Mini Constitution'?",
            options: ["44th Amendment", "42nd Amendment", "73rd Amendment", "52nd Amendment"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The 42nd Amendment (1976) introduced major changes including the words Socialist, Secular, and Integrity in the Preamble.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-012", type: "mcq", difficulty: "medium",
            question: "The 'Panchayati Raj' was first introduced in which state in 1959?",
            options: ["Rajasthan", "Andhra Pradesh", "Gujarat", "Maharashtra"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Panchayati Raj was first inaugurated in Nagaur, Rajasthan on Oct 2, 1959.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-013", type: "mcq", difficulty: "medium",
            question: "Who was the first woman President of the Indian National Congress?",
            options: ["Sarojini Naidu", "Annie Besant", "Nellie Sengupta", "Indira Gandhi"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Annie Besant was the first woman President (1917). Sarojini Naidu was the first Indian woman President (1925).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-014", type: "mcq", difficulty: "hard",
            question: "The 'Shimla Conference' (1945) was proposed by which Viceroy?",
            options: ["Lord Mountbatten", "Lord Wavell", "Lord Linlithgow", "Lord Reading"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "Lord Wavell proposed the Shimla Conference to discuss the Wavell Plan for Indian self-government.",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-015", type: "mcq", difficulty: "medium",
            question: "Which Article gives the President of India the power to declare Financial Emergency?",
            options: ["Article 352", "Article 356", "Article 360", "Article 370"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Article 360 deals with Financial Emergency. Note: It has never been used in India so far.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY C: Geography — India and World (10 questions) ---
        {
            id: "gk-q-016", type: "mcq", difficulty: "medium",
            question: "Which Indian city is known as the 'Manchester of India'?",
            options: ["Ahmedabad", "Mumbai", "Kolkata", "Surat"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Ahmedabad is called the Manchester of India due to its booming textile industry.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-017", type: "mcq", difficulty: "medium",
            question: "The 'Sardar Sarovar Dam' is built on which river?",
            options: ["Narmada", "Tapi", "Godavari", "Krishna"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Sardar Sarovar Dam is a concrete gravity dam on the Narmada River in Gujarat.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-018", type: "mcq", difficulty: "medium",
            question: "Which of the following is the largest 'glacier' in India?",
            options: ["Zemu Glacier", "Siachen Glacier", "Gangotri Glacier", "Yamunotri Glacier"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Siachen Glacier in the Karakoram range is the largest glacier in India and second largest in the world outside polar regions.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-019", type: "mcq", difficulty: "medium",
            question: "Which pass connects Jammu with Srinagar?",
            options: ["Nathu La Pass", "Banihal Pass", "Rohtang Pass", "Shipki La Pass"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Banihal Pass is a mountain pass across the Pir Panjal Range connecting Jammu and Srinagar.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-020", type: "mcq", difficulty: "medium",
            question: "The 'Southernmost Point' of India's main land mass is:",
            options: ["Indira Point", "Kanyakumari", "Port Blair", "Lakshadweep"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Kanyakumari is the southernmost point of the main land mass. Indira Point is the southernmost point of India (in Great Nicobar).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-021", type: "mcq", difficulty: "hard",
            question: "Which state in India has the 'longest' coastline?",
            options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Gujarat has the longest coastline in India, extending about 1600 km.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-022", type: "mcq", difficulty: "medium",
            question: "The 'Zemu Glacier' is located in which Indian state?",
            options: ["Sikkim", "Uttarakhand", "Himachal Pradesh", "Arunachal Pradesh"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Zemu Glacier is the largest glacier in the Eastern Himalayas, located at the base of Kanchenjunga in Sikkim.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-023", type: "assertion-reason", difficulty: "hard",
            assertion: "Earthquakes of high intensity are frequent in the Himalayas.",
            reason: "The Himalayas are young folded mountains that are still rising due to tectonic activity.",
            options: [
                "Both A and R are true; R is the correct explanation of A",
                "Both A and R are true; R is NOT the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Himalayas are at a destructive plate boundary where the Indian plate meets the Eurasian plate, leading to constant rise and subsequent earthquakes.",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-024", type: "mcq", difficulty: "medium",
            question: "Which of the following imaginary lines passes through India?",
            options: ["Equator", "Tropic of Capricorn", "Tropic of Cancer", "Prime Meridian"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Tropic of Cancer passes through 8 Indian states.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-025", type: "mcq", difficulty: "medium",
            question: "Which soil is also known as 'Regur Soil' in India?",
            options: ["Alluvial Soil", "Red Soil", "Black Soil", "Laterite Soil"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Black Soil is known as Regur Soil and is ideal for cotton cultivation.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY D: Current Affairs (15 questions) ---
        {
            id: "gk-q-026", type: "mcq", difficulty: "medium",
            question: "Who is the current President of India?",
            options: ["Ram Nath Kovind", "Droupadi Murmu", "Jagdeep Dhankhar", "Yashwant Sinha"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Smt. Droupadi Murmu is the 15th President of India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-027", type: "mcq", difficulty: "medium",
            question: "India's first solar mission launched in 2023 is named:",
            options: ["Aditya-L1", "Solar-Alpha", "Surya-Quest", "Helios-1"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Aditya-L1 is ISRO's first space-based observatory-class solar mission to study the Sun.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-028", type: "mcq", difficulty: "medium",
            question: "Which country hosted the G20 Summit in 2023?",
            options: ["Brazil", "Indonesia", "India", "South Africa"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "India hosted the 18th G20 Summit in New Delhi in September 2023.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-029", type: "mcq", difficulty: "medium",
            question: "The 'statue of Equality' recently inaugurated in Hyderabad commemorates which philosopher?",
            options: ["Shankaracharya", "Ramanujacharya", "Basavanna", "Madhvacharya"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Statue of Equality commemorates the 11th-century Vaishnavaite Saint Ramanujacharya.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-030", type: "mcq", difficulty: "medium",
            question: "Which city has been declared the 'Cleanest City' of India for the 7th consecutive year (Swachh Survekshan 2023)?",
            options: ["Surat", "Indore", "Navi Mumbai", "Bhopal"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Indore (and Surat jointly) were ranked as the cleanest cities in India in 2023.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY E: General Science (Conceptual - 15 questions) ---
        {
            id: "gk-q-031", type: "mcq", difficulty: "medium",
            question: "Which part of the plant is responsible for the transport of 'water' and minerals?",
            options: ["Phloem", "Xylem", "Stomata", "Chloroplast"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Xylem transports water and minerals from roots to leaves. Phloem transports food.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-032", type: "mcq", difficulty: "medium",
            question: "Which gas is used for artificial 'ripening' of green fruits?",
            options: ["Ethylene", "Acetylene", "Methane", "Ethane"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Ethylene is the primary hormone used for fruit ripening.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-033", type: "mcq", difficulty: "medium",
            question: "What is the 'Power House' of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Mitochondria are known as the powerhouses of the cell because they produce energy (ATP).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-034", type: "mcq", difficulty: "medium",
            question: "Which vitamin deficiency causes 'Scurvy'?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Scurvy is caused by deficiency of Vitamin C (Ascorbic acid).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-035", type: "mcq", difficulty: "medium",
            question: "Which of the following is a 'Noble Gas'?",
            options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Argon is a noble gas (Group 18). Others are highly reactive.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY C: Geography Expansion (5 more) ---
        {
            id: "gk-q-036", type: "mcq", difficulty: "medium",
            question: "Which is the highest peak in the 'Aravalli Range'?",
            options: ["Guru Shikhar", "Dhupgarh", "Mahendragiri", "Doda Betta"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Guru Shikhar in Mount Abu (Rajasthan) is the highest peak of the Aravalli Range.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-037", type: "mcq", difficulty: "medium",
            question: "Which Indian state is known as the 'Land of Five Rivers'?",
            options: ["Haryana", "Punjab", "Uttar Pradesh", "Himachal Pradesh"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Punjab gets its name from 'Punj' (five) and 'Ab' (water/river), referring to Beas, Chenab, Jhelum, Ravi, and Sutlej.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-038", type: "mcq", difficulty: "medium",
            question: "The 'Kanha National Park' is famous for which animal?",
            options: ["Lion", "Tiger", "Elephant", "Rhinoceros"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Kanha Tiger Reserve in Madhya Pradesh is world-renowned for its significant Tiger population.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY D: Current Affairs Expansion (10 more) ---
        {
            id: "gk-q-039", type: "mcq", difficulty: "medium",
            question: "Who won the Nobel Prize in Literature in 2023?",
            options: ["Jon Fosse", "Annie Ernaux", "Abdulrazak Gurnah", "Louise Glück"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Norwegian author Jon Fosse was awarded the Nobel Prize in Literature 2023.",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-040", type: "mcq", difficulty: "medium",
            question: "Which Indian film's song 'Naatu Naatu' won the Oscar for Best Original Song in 2023?",
            options: ["RRR", "Pushpa", "Brahmastra", "Pathaan"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The song 'Naatu Naatu' from the film RRR won the Academy Award for Best Original Song.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-041", type: "mcq", difficulty: "medium",
            question: "Who is the current CEO of 'Google' (Alphabet Inc.)?",
            options: ["Satya Nadella", "Sundar Pichai", "Tim Cook", "Elon Musk"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Sundar Pichai is the CEO of Alphabet Inc. and its subsidiary Google.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-042", type: "mcq", difficulty: "hard",
            question: "India's first underwater metro started its operations in which city?",
            options: ["Mumbai", "Kochi", "Kolkata", "Chennai"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Kolkata Metro’s East-West corridor features India’s first underwater metro tunnel under the Hooghly River.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-043", type: "mcq", difficulty: "medium",
            question: "Which country became the 31st member of NATO in 2023?",
            options: ["Sweden", "Finland", "Ukraine", "Poland"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Finland officially became the 31st member of NATO in April 2023.",
            examTags: ["CUET"]
        },

        // --- CATEGORY E: General Science Expansion (10 more) ---
        {
            id: "gk-q-044", type: "mcq", difficulty: "medium",
            question: "Which instrument is used to measure 'Atmospheric Pressure'?",
            options: ["Ammeter", "Barometer", "Thermometer", "Hygrometer"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "A Barometer is used to measure atmospheric pressure.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-045", type: "mcq", difficulty: "easy",
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Mars is known as the Red Planet due to iron oxide (rust) on its surface.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-046", type: "mcq", difficulty: "medium",
            question: "What is the PH value of 'Pure Water'?",
            options: ["5", "7", "9", "11"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Pure water is neutral and has a PH value of 7.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-047", type: "mcq", difficulty: "medium",
            question: "Which lens is used to correct 'Myopia' (Short-sightedness)?",
            options: ["Convex Lens", "Concave Lens", "Bifocal Lens", "Cylindrical Lens"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "A Concave lens (diverging lens) is used to correct Myopia.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-048", type: "mcq", difficulty: "medium",
            question: "The 'Blood Pressure' in a healthy human is approximately:",
            options: ["120/80 mmHg", "100/60 mmHg", "140/90 mmHg", "160/100 mmHg"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Normal blood pressure is generally around 120 (systolic) over 80 (diastolic) mmHg.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY F: Awards and Honors ---
        {
            id: "gk-q-049", type: "mcq", difficulty: "medium",
            question: "Which is India's highest 'Literary' Award?",
            options: ["Sahitya Akademi Award", "Jnanpith Award", "Vyas Samman", "Saraswati Samman"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Jnanpith Award is the highest literary honor in India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-050", type: "mcq", difficulty: "medium",
            question: "Who was the first Indian to win a 'Nobel Prize'?",
            options: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Rabindranath Tagore won the Nobel Prize for Literature in 1913 for his work Gitanjali.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-051", type: "mcq", difficulty: "medium",
            question: "The 'Bharat Ratna' was first awarded in which year?",
            options: ["1947", "1950", "1954", "1960"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Bharat Ratna was instituted in 1954. First recipients were C. Rajagopalachari, S. Radhakrishnan, and C.V. Raman.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY G: Sports Landforms ---
        {
            id: "gk-q-052", type: "mcq", difficulty: "medium",
            question: "Which city will host the 2024 'Summer Olympics'?",
            options: ["Tokyo", "Paris", "Los Angeles", "Brisbane"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The 2024 Summer Olympics will be held in Paris, France.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-053", type: "mcq", difficulty: "medium",
            question: "The 'Thomas Cup' is associated with which sport?",
            options: ["Football", "Hockey", "Badminton", "Table Tennis"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Thomas Cup is the world men's team championship in Badminton.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-054", type: "mcq", difficulty: "easy",
            question: "Who is known as the 'Little Master' in Cricket?",
            options: ["Sachin Tendulkar", "Sunil Gavaskar", "Virat Kohli", "Sourav Ganguly"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Sunil Gavaskar is originally known as the Little Master. Sachin is called Master Blaster.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-055", type: "mcq", difficulty: "medium",
            question: "Which country won the ICC Men's Cricket World Cup 2023?",
            options: ["India", "Australia", "England", "South Africa"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Australia defeated India in the final to win the 2023 World Cup.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY H: Arts and Culture ---
        {
            id: "gk-q-056", type: "mcq", difficulty: "medium",
            question: "The 'Ajanta Caves' are located in which state?",
            options: ["Madhya Pradesh", "Maharashtra", "Karnataka", "Odisha"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Ajanta Caves are located in the Aurangabad district (now Sambhajinagar) of Maharashtra.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-057", type: "match-column", difficulty: "hard",
            question: "Match the following Classical Dances with their states:",
            column_a: ["Kathakali", "Bharatanatyam", "Kuchipudi", "Sattriya"],
            column_b: ["Tamil Nadu", "Kerala", "Assam", "Andhra Pradesh"],
            correct_mapping: [1, 0, 3, 2],
            options: [
                "Kathakali-Kerala, Bharatanatyam-TN, Kuchipudi-AP, Sattriya-Assam",
                "Kathakali-TN, Bharatanatyam-Kerala, Kuchipudi-Assam, Sattriya-AP",
                "Kathakali-AP, Bharatanatyam-TN, Kuchipudi-Kerala, Sattriya-Assam",
                "Kathakali-Assam, Bharatanatyam-AP, Kuchipudi-TN, Sattriya-Kerala"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Kathakali (Kerala), Bharatanatyam (Tamil Nadu), Kuchipudi (Andhra Pradesh), Sattriya (Assam).",
            examTags: ["CUET"]
        },
        {
            id: "gk-q-058", type: "mcq", difficulty: "medium",
            question: "Who is the legendary Sitar player known for music like 'Raag Desh'?",
            options: ["Pandit Ravi Shankar", "Zakir Hussain", "Bismillah Khan", "Hariprasad Chaurasia"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Pandit Ravi Shankar was a world-renowned Sitar maestro.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-059", type: "mcq", difficulty: "medium",
            question: "The 'Madhubani' style of painting is folk painting of which state?",
            options: ["West Bengal", "Bihar", "Uttar Pradesh", "Rajasthan"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Madhubani painting (Mithila art) belongs to the Mithila region of Bihar.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-q-060", type: "match-column", difficulty: "hard",
            question: "Match the following Festivals with their States:",
            column_a: ["Pongal", "Bihu", "Gudi Padwa", "Onam"],
            column_b: ["Maharashtra", "Tamil Nadu", "Kerala", "Assam"],
            correct_mapping: [1, 3, 0, 2],
            options: [
                "Pongal-TN, Bihu-Assam, Gudi-Maharashtra, Onam-Kerala",
                "Pongal-Kerala, Bihu-Maharashtra, Gudi-Assam, Onam-TN",
                "Pongal-Assam, Bihu-TN, Gudi-Kerala, Onam-Maharashtra",
                "Pongal-Maharashtra, Bihu-Kerala, Gudi-TN, Onam-Assam"
            ],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Pongal (TN), Bihu (Assam), Gudi Padwa (Maharashtra), Onam (Kerala).",
            examTags: ["CUET"]
        },

        // --- PART B: MAH CET GK SPEED DRILL (15 questions) ---
        // Capitals and Currencies (4 Qs)
        {
            id: "gk-q-061", type: "mcq", difficulty: "easy",
            question: "What is the capital of 'Australia'?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Canberra is the capital of Australia.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-062", type: "mcq", difficulty: "easy",
            question: "What is the currency of 'Japan'?",
            options: ["Yuan", "Yen", "Won", "Baht"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The Yen is the official currency of Japan.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-063", type: "mcq", difficulty: "easy",
            question: "What is the capital of 'Israel'?",
            options: ["Tel Aviv", "Jerusalem", "Haifa", "Eilat"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Jerusalem is the capital of Israel (though many embassies are in Tel Aviv).",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-064", type: "mcq", difficulty: "easy",
            question: "The 'Euro' is the currency of which country?",
            options: ["United Kingdom", "Switzerland", "Germany", "Norway"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Germany uses the Euro. UK uses Pound, Switzerland uses Franc, Norway uses Krone.",
            examTags: ["MH-CET"]
        },

        // Important Days (4 Qs)
        {
            id: "gk-q-065", type: "mcq", difficulty: "easy",
            question: "On which date is 'International Women's Day' celebrated?",
            options: ["February 14", "March 8", "April 22", "June 5"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "International Women's Day is observed globally on March 8.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-066", type: "mcq", difficulty: "easy",
            question: "When is 'World Environment Day' celebrated?",
            options: ["July 11", "August 29", "June 5", "September 16"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "World Environment Day is celebrated on June 5.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-067", type: "mcq", difficulty: "easy",
            question: "In India, 'National Science Day' is celebrated on:",
            options: ["February 28", "January 30", "December 22", "November 11"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "National Science Day is celebrated on Feb 28 to mark the discovery of the Raman Effect.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-068", type: "mcq", difficulty: "easy",
            question: "When is 'Constitution Day' (Samvidhan Divas) celebrated in India?",
            options: ["January 26", "August 15", "November 26", "October 2"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Constitution Day is celebrated on Nov 26 to commemorate the adoption of the Constitution in 1949.",
            examTags: ["MH-CET"]
        },

        // Abbreviations (4 Qs)
        {
            id: "gk-q-069", type: "mcq", difficulty: "easy",
            question: "What does 'UNESCO' stand for?",
            options: [
                "United Nations Educational, Scientific and Cultural Organization",
                "United Nations Environmental and Social Council Organization",
                "Universal Nations Educational, Social and Cultural Organization",
                "United Nations Emergency Social and Cultural Organization"
            ],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "UNESCO: United Nations Educational, Scientific and Cultural Organization.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-070", type: "mcq", difficulty: "easy",
            question: "What is the full form of 'NABARD'?",
            options: [
                "National Bank for Agriculture and Rural Development",
                "National Board for Agricultural Research and Development",
                "National Bank for Asian Rural Development",
                "National Board for Allied Regional Development"
            ],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "NABARD: National Bank for Agriculture and Rural Development.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-071", type: "mcq", difficulty: "easy",
            question: "What does 'SENSEX' stand for?",
            options: [
                "Sensitive Index",
                "Senior Exchange",
                "Security Index",
                "Service Exchange"
            ],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "SENSEX is the Stock Exchange Sensitive Index of the BSE.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-072", type: "mcq", difficulty: "easy",
            question: "What is the full form of 'ISRO'?",
            options: [
                "Indian Space Research Organization",
                "International Space Research Organization",
                "Indian Solar Research Office",
                "International Solar Research Office"
            ],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "ISRO: Indian Space Research Organization.",
            examTags: ["MH-CET"]
        },

        // First in India (3 Qs)
        {
            id: "gk-q-073", type: "mcq", difficulty: "easy",
            question: "Who was the first President of India?",
            options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Dr. Rajendra Prasad was the first President of India.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-074", type: "mcq", difficulty: "easy",
            question: "Who was the first Indian to go into space?",
            options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Vikram Sarabhai"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Rakesh Sharma was the first Indian citizen to travel into space (1984).",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-q-075", type: "mcq", difficulty: "easy",
            question: "Who was the first Woman Prime Minister of India?",
            options: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Indira Gandhi served as the first woman Prime Minister of India.",
            examTags: ["MH-CET"]
        }
    ]
};
