// src/data/general-aptitude/general-knowledge.data.js
// MAH BBA CET + CUET GAT UNIFIED MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const generalKnowledgeData = {
    subject: "General Knowledge",
    chapter: "General Knowledge & Static Awareness",
    examTags: ["CUET", "MH-CET"],
    flashcards: [
        { id: "gk-fc-001", term: "Article 324", definition: "Empowers the Election Commission of India." },
        { id: "gk-fc-002", term: "INC Foundation", definition: "Founded in 1885 by A.O. Hume (Mumbai)." },
        { id: "gk-fc-003", term: "Gandhi Movements", definition: "NCM (1920) → Dandi (1930) → Quit India (1942)." },
        { id: "gk-fc-004", term: "City Nicknames", definition: "Pink: Jaipur, Silicon: Bengaluru, City of Joy: Kolkata." },
        { id: "gk-fc-005", term: "QUAD Members", definition: "India, USA, Japan, Australia." },
        { id: "gk-fc-006", term: "pH Scale", definition: "Acidic < 7, Neutral = 7, Basic > 7." },
        { id: "gk-fc-007", term: "16th Finance Commission", definition: "Chairman: Dr. Arvind Panagariya." },
        { id: "gk-fc-008", term: "Highest Dam", definition: "Tehri Dam (Bhagirathi River, Uttarakhand)." },
        { id: "gk-fc-009", term: "MIRV", definition: "Multiple Independently Targetable Re-Entry Vehicle (Agni-5)." },
        { id: "gk-fc-010", term: "Kwashiorkor", definition: "Caused by protein deficiency (NOT calories)." }
    ],
    questions: [
        // --- CATEGORY A: Indian Polity (15 Questions) ---
        {
            id: "gk-pol-001", type: "mcq", difficulty: "medium",
            question: "Which of the following bodies derives its power directly from Article 324 of the Constitution?",
            options: ["UPSC", "Election Commission", "Finance Commission", "Niti Aayog"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Article 324 provides for the superintendence, direction, and control of elections.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-pol-002", type: "mcq", difficulty: "hard",
            question: "Arrange these Constitutional Amendments in correct chronological order:\n(A) 42nd Amendment\n(B) 44th Amendment\n(C) 73rd Amendment\n(D) 52nd Amendment",
            options: ["A-B-D-C", "A-B-C-D", "B-A-D-C", "D-A-B-C"],
            correct: 0,
            cognitiveType: "chronological", timePresure: "deep", speedTarget: 120,
            explanation: "42nd (1976), 44th (1978), 52nd (1985), 73rd (1992).",
            examTags: ["CUET"]
        },
        {
            id: "gk-pol-003", type: "mcq", difficulty: "hard",
            question: "Match the Article to the Provision:\n1. Art 148   a. Money Bill\n2. Art 110   b. Finance Commission\n3. Art 280   c. CAG\n4. Art 368   d. Amendment Power",
            options: ["1-c, 2-a, 3-b, 4-d", "1-a, 2-c, 3-b, 4-d", "1-c, 2-b, 3-a, 4-d", "1-d, 2-a, 3-b, 4-c"],
            correct: 0,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "Art 148: CAG, Art 110: Money Bill, Art 280: Finance Commission, Art 368: Amendment.",
            examTags: ["CUET"]
        },
        {
            id: "gk-pol-004", type: "mcq", difficulty: "medium",
            question: "Which of the following statements about the Election Commission are correct?\n(A) It is established by Article 324.\n(B) The CEC has the same status as a Supreme Court Judge.\n(C) State elections are also managed by the ECI.",
            options: ["Only A", "A and B only", "A and C only", "All of the above"],
            correct: 3,
            cognitiveType: "synthesis", timePresure: "deep", speedTarget: 120,
            explanation: "All statements are factually correct regarding the ECI's status and jurisdiction.",
            examTags: ["CUET"]
        },
        {
            id: "gk-pol-005", type: "mcq", difficulty: "easy",
            question: "What is the full form of CAG?",
            options: [
                "Comptroller and Auditor General",
                "Central Account Gateway",
                "Council of Audit and Governance",
                "Chief Auditor General"
            ],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "CAG stands for Comptroller and Auditor General (Article 148).",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-pol-006", type: "mcq", difficulty: "easy",
            question: "Who is the Nominal Head of the Indian Union?",
            options: ["Prime Minister", "President", "Chief Justice", "Speaker"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The President is the de-jure (nominal) head; the PM is the de-facto (real) head.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-pol-007", type: "mcq", difficulty: "medium",
            question: "The 'Preamble' of the Indian Constitution was amended for the only time in which year?",
            options: ["1976", "1978", "1950", "1992"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The 42nd Amendment (1976) added Socialist, Secular, and Integrity to the Preamble.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-pol-008", type: "mcq", difficulty: "hard",
            question: "Which Article is known as the 'Heart and Soul' of the Constitution according to Dr. Ambedkar?",
            options: ["Article 14", "Article 19", "Article 21", "Article 32"],
            correct: 3,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Article 32 (Right to Constitutional Remedies) allows citizens to approach SC.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-pol-009", type: "mcq", difficulty: "medium",
            question: "The concept of 'Single Citizenship' is borrowed from which country?",
            options: ["USA", "Britain (UK)", "Canada", "Ireland"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Single citizenship is a feature of the British parliamentary system adopted by India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-pol-010", type: "mcq", difficulty: "medium",
            question: "Who appoints the Chief Justice of India?",
            options: ["Prime Minister", "Law Minister", "President", "Collegium of Judges"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The President of India appoints the CJI.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-pol-011", type: "mcq", difficulty: "hard",
            question: "Fundamental Duties were added based on the recommendation of which committee?",
            options: ["Sarkaria Commission", "Swaran Singh Committee", "Mandal Commission", "Balwant Rai Mehta Committee"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Added by 42nd Amendment (1976) following Swaran Singh Committee's suggestions.",
            examTags: ["CUET"]
        },
        {
            id: "gk-pol-012", type: "mcq", difficulty: "medium",
            question: "Niti Aayog replaced the Planning Commission in which year?",
            options: ["2014", "2015", "2016", "2017"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Established on January 1, 2015 as a policy think tank.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-pol-013", type: "mcq", difficulty: "medium",
            question: "Which Schedule of the Constitution deals with the allocation of seats in Rajya Sabha?",
            options: ["Third Schedule", "Fourth Schedule", "Fifth Schedule", "Seventh Schedule"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The Fourth Schedule specifies seat allocation for States and UTs.",
            examTags: ["CUET"]
        },
        {
            id: "gk-pol-014", type: "mcq", difficulty: "easy",
            question: "The minimum age to contest for Lok Sabha elections is:",
            options: ["18 years", "21 years", "25 years", "30 years"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "25 years for Lok Sabha; 30 years for Rajya Sabha.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-pol-015", type: "mcq", difficulty: "medium",
            question: "Who has the final power to decide whether a bill is a 'Money Bill'?",
            options: ["President", "Prime Minister", "Speaker of Lok Sabha", "Finance Minister"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The Speaker's decision on a Money Bill is final and beyond judicial review.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY B: Modern Indian History (15 Questions) ---
        {
            id: "gk-his-001", type: "mcq", difficulty: "hard",
            question: "Arrange the following movements in correct chronological order:\n(A) Dandi March\n(B) Swadeshi Movement\n(C) Non-Cooperation Movement\n(D) Home Rule League",
            options: ["B-D-C-A", "B-C-D-A", "D-B-C-A", "B-D-A-C"],
            correct: 0,
            cognitiveType: "chronological", timePresure: "deep", speedTarget: 120,
            explanation: "Swadeshi (1905), Home Rule (1916), Non-Cooperation (1920), Dandi (1930).",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-002", type: "mcq", difficulty: "medium",
            question: "Who founded the Indian National Congress in 1885?",
            options: ["W.C. Bonnerjee", "Dadabhai Naoroji", "A.O. Hume", "Annie Besant"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "A.O. Hume was the founder/General Secretary; W.C. Bonnerjee was the 1st President.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-his-003", type: "mcq", difficulty: "hard",
            question: "Match the Figure with the Movement:\n1. Khan Abdul Ghaffar Khan  a. Swadeshi\n2. C.R. Das                 b. Khudai Khidmatgar\n3. Aurobindo Ghosh         c. Swaraj Party\n4. Sardar Patel            d. Bardoli Satyagraha",
            options: ["1-b, 2-c, 3-a, 4-d", "1-a, 2-c, 3-b, 4-d", "1-b, 2-a, 3-c, 4-d", "1-d, 2-c, 3-a, 4-b"],
            correct: 0,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "Khan (Khudai Khidmatgar/Frontier Gandhi), C.R. Das (Swaraj Party), Aurobindo (Swadeshi), Patel (Bardoli).",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-004", type: "mcq", difficulty: "medium",
            question: "Which incident forced Mahatma Gandhi to withdraw the Non-Cooperation Movement in 1922?",
            options: ["Jallianwala Bagh", "Chauri Chaura incident", "Simon Commission arrival", "Dandi March"],
            correct: 1,
            cognitiveType: "application", timePresure: "speed", speedTarget: 45,
            explanation: "Violent clash in Chauri Chaura (UP) led Gandhi to halt the NCM due to non-violence breach.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-his-005", type: "mcq", difficulty: "medium",
            question: "Who gave the slogan 'Do or Die' during the Quit India Movement?",
            options: ["Netaji Bose", "Sardar Patel", "Mahatma Gandhi", "Jawaharlal Nehru"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Given at Gowalia Tank Maidan, Mumbai (August 1942).",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-his-006", type: "mcq", difficulty: "hard",
            question: "Arrange these in chronological sequence:\n(A) Simon Commission\n(B) Poona Pact\n(C) Gandhi-Irwin Pact\n(D) First Round Table Conference",
            options: ["A-D-C-B", "A-C-D-B", "D-A-C-B", "A-D-B-C"],
            correct: 0,
            cognitiveType: "chronological", timePresure: "deep", speedTarget: 120,
            explanation: "Simon (1928), 1st RTC (1930), Gandhi-Irwin (1931), Poona Pact (1932).",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-007", type: "mcq", difficulty: "medium",
            question: "Which of the following statements about the Salt Satyagraha are INCORRECT?",
            options: [
                "It started from Sabarmati Ashram.",
                "It was aimed at breaking the salt law.",
                "C. Rajagopalachari led the march in Tamil Nadu.",
                "It was supported by the British Government."
            ],
            correct: 3,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "It was a massive act of civil disobedience against British tea/salt taxes (obviously not supported by them).",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-008", type: "mcq", difficulty: "medium",
            question: "Who was the political guru of Mahatma Gandhi?",
            options: ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Annie Besant"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Gokhale advised Gandhi to travel India for one year to understand the ground reality.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-his-009", type: "mcq", difficulty: "hard",
            question: "The Rowlatt Act of 1919 was critically linked to which massive tragedy?",
            options: ["Partition of Bengal", "Jallianwala Bagh Massacre", "Non-Cooperation Movement", "Civil Disobedience"],
            correct: 1,
            cognitiveType: "application", timePresure: "speed", speedTarget: 45,
            explanation: "Protests against Rowlatt Act (No Dalil, No Vakil, No Appeal) led to the Amritsar massacre.",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-010", type: "mcq", difficulty: "medium",
            question: "Who founded the 'Forward Bloc'?",
            options: ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Chandrashekhar Azad"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Bose founded it in 1939 after resigning from the Congress presidency.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-his-011", type: "mcq", difficulty: "medium",
            question: "Identify the incorrectly matched pair:",
            options: [
                "Annie Besant - Commonweal",
                "M.K. Gandhi - Hind Swaraj",
                "Bal Gangadhar Tilak - Kesari",
                "Lala Lajpat Rai - Discovery of India"
            ],
            correct: 3,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "'Discovery of India' was written by Jawaharlal Nehru.",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-012", type: "mcq", difficulty: "medium",
            question: "In which year did the partition of Bengal take place?",
            options: ["1901", "1905", "1911", "1920"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Announced by Lord Curzon in 1905; annulled in 1911.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-his-013", type: "mcq", difficulty: "hard",
            question: "Which session of the INC passed the 'Quit India' resolution?",
            options: ["Lahore Session 1929", "Karachi Session 1931", "Bombay Session 1942", "Tripuri Session 1939"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Passed at the Wardha/Bombay meeting in August 1942.",
            examTags: ["CUET"]
        },
        {
            id: "gk-his-014", type: "mcq", difficulty: "medium",
            question: "The slogan 'Swaraj is my birthright' belongs to:",
            options: ["Gopal Krishna Gokhale", "Lala Lajpat Rai", "Bal Gangadhar Tilak", "Bipin Chandra Pal"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Tilak was known as 'Lokmanya' for this staunch nationalist stance.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-his-015", type: "mcq", difficulty: "hard",
            question: "The 'August Offer' of 1940 was made by which Viceroy?",
            options: ["Lord Linlithgow", "Lord Mountbatten", "Lord Wavell", "Lord Reading"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Offered to secure Indian cooperation in WWII in exchange for Dominion Status.",
            examTags: ["CUET"]
        },

        // --- CATEGORY C: Geography (15 Questions) ---
        {
            id: "gk-geo-001", type: "mcq", difficulty: "medium",
            question: "Which city is known as the 'Manchester of India'?",
            options: ["Mumbai", "Ahmedabad", "Surat", "Kolkata"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Ahmedabad is famous for its textile industry.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-002", type: "mcq", difficulty: "medium",
            question: "Sardar Sarovar Dam is built on which river?",
            options: ["Ganga", "Narmada", "Tapti", "Mahi"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Located in Gujarat, it is one of the largest dams in India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-003", type: "mcq", difficulty: "hard",
            question: "Match the Pass with its State/UT:\n1. Nathu La      a. Himachal Pradesh\n2. Banihal       b. Sikkim\n3. Rohtang       c. Jammu & Kashmir\n4. Zoji La       d. Ladakh",
            options: ["1-b, 2-c, 3-a, 4-d", "1-b, 2-a, 3-c, 4-d", "1-a, 2-c, 3-b, 4-d", "1-b, 2-c, 3-d, 4-a"],
            correct: 0,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "Nathu La (Sikkim), Banihal (J&K), Rohtang (HP), Zoji La (Ladakh).",
            examTags: ["CUET"]
        },
        {
            id: "gk-geo-004", type: "mcq", difficulty: "medium",
            question: "Where is the 'Zemu Glacier' located?",
            options: ["Ladakh", "Sikkim", "Uttarakhand", "Himachal Pradesh"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "It is the largest glacier in the Eastern Himalayas, Sikkim.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-005", type: "mcq", difficulty: "hard",
            question: "Arrange these states in order of their formation (earliest to latest):\n(A) Nagaland  (B) Haryana  (C) Sikkim  (D) Goa",
            options: ["A-B-C-D", "B-A-C-D", "A-C-B-D", "C-A-B-D"],
            correct: 0,
            cognitiveType: "chronological", timePresure: "deep", speedTarget: 120,
            explanation: "Nagaland (1963), Haryana (1966), Sikkim (1975), Goa (1987).",
            examTags: ["CUET"]
        },
        {
            id: "gk-geo-006", type: "mcq", difficulty: "easy",
            question: "Which city is the 'Silicon Valley of India'?",
            options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 30,
            explanation: "Bengaluru is the hub of India's IT sector.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-geo-007", type: "mcq", difficulty: "medium",
            question: "Tehri Dam is built on which river?",
            options: ["Alaknanda", "Mandakini", "Bhagirathi", "Ganga"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Tehri (Uttarakhand) is the highest dam in India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-008", type: "mcq", difficulty: "medium",
            question: "Which state has the longest coastline in India?",
            options: ["Andhra Pradesh", "Tamil Nadu", "Gujarat", "Maharashtra"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Gujarat has the longest coastline due to its jagged shape and kutch.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-009", type: "mcq", difficulty: "hard",
            question: "Nathu La Pass connects India to which country?",
            options: ["Nepal", "Bhutan", "China", "Myanmar"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "It is a major checkpoint on the Indo-China border in Sikkim.",
            examTags: ["CUET"]
        },
        {
            id: "gk-geo-010", type: "mcq", difficulty: "medium",
            question: "What is the nickname of Kolkata?",
            options: ["City of Joy", "Golden City", "Diamond City", "Pink City"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 30,
            explanation: "Known for its rich culture and history.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-geo-011", type: "mcq", difficulty: "medium",
            question: "Which degree of latitude is known as the 'Tropic of Cancer'?",
            options: ["23.5° N", "23.5° S", "66.5° N", "0°"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Passes through 8 states in India.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-012", type: "mcq", difficulty: "medium",
            question: "The standard time meridian of India (82.5° E) passes through which of these cities?",
            options: ["Varanasi", "Lucknow", "Mirzapur", "Patna"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The IST is determined based on the time at Mirzapur, UP.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-013", type: "mcq", difficulty: "hard",
            question: "Which is the smallest state in India by area?",
            options: ["Goa", "Sikkim", "Tripura", "Nagaland"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Goa is smallest; Rajasthan is largest by area.",
            examTags: ["MH-CET"]
        },
        {
            id: "gk-geo-014", type: "mcq", difficulty: "medium",
            question: "Where is 'Siachen Glacier' located?",
            options: ["Ladakh", "Uttarakhand", "Himachal Pradesh", "Sikkim"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Highest battlefield in the world, located in the Eastern Karakoram range.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-geo-015", type: "mcq", difficulty: "easy",
            question: "Which river is known as 'Dakshin Ganga'?",
            options: ["Krishna", "Godavari", "Cauvery", "Narmada"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Godavari is the largest river of South India.",
            examTags: ["MH-CET"]
        },

        // --- CATEGORY D: Current Affairs 2022–2024 (15 Questions) ---
        // Protocol: Only use facts from VERIFIED list.
        {
            id: "gk-ca-001", type: "mcq", difficulty: "medium",
            question: "Who was awarded the 'Padma Vibhushan' 2024 for Arts?",
            options: ["Mithun Chakraborty", "Konidela Chiranjeevi", "Jaya Verma Sinha", "Sitaram Jindal"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Actor Chiranjeevi received the highest Padma award in 2024.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-002", type: "mcq", difficulty: "medium",
            question: "Actor Mithun Chakraborty was honored with which award in 2024?",
            options: ["Padma Vibhushan", "Padma Bhushan", "Padma Shri", "Bharat Ratna"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "(VERIFIED) Mithun received the Padma Bhushan, NOT Padma Shri.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-003", type: "mcq", difficulty: "medium",
            question: "Who is the first woman Chairman and CEO of the Railway Board (2023)?",
            options: ["Madhabi Puri Buch", "Jaya Verma Sinha", "Nirmala Sitharaman", "Droupadi Murmu"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Jaya Verma Sinha is a historic first in Indian Railways.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-004", type: "mcq", difficulty: "hard",
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
            id: "gk-ca-005", type: "mcq", difficulty: "medium",
            question: "Where was India's first 3D-printed Post Office inaugurated?",
            options: ["Pune", "Hyderabad", "Bengaluru", "Chennai"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "(VERIFIED FACT) Inaugurated in Cambridge Layout, Bengaluru.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-006", type: "mcq", difficulty: "hard",
            question: "The Raman Magsaysay Award 2023 was given to Dr. Ravi Kannan R. for his work in:",
            options: ["Space Technology", "Cancer Care", "Rural Education", "Climate Change"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "He is an oncologist from Assam recognized for pro-poor healthcare.",
            examTags: ["CUET"]
        },
        {
            id: "gk-ca-007", type: "mcq", difficulty: "medium",
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
            id: "gk-ca-008", type: "mcq", difficulty: "medium",
            question: "The 'Mission Antyodaya' survey focuses on which level of governance?",
            options: ["Urban Municipalities", "Gram Panchayats", "State Assemblies", "Central Ministries"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Annual survey to monitor rural development convergence.",
            examTags: ["CUET"]
        },
        {
            id: "gk-ca-009", type: "mcq", difficulty: "medium",
            question: "Dr. Arvind Panagariya is the Chairman of which constitutional body?",
            options: ["Niti Aayog", "Railway Board", "16th Finance Commission", "UPSC"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "He heads the newly constituted 16th Finance Commission.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-010", type: "mcq", difficulty: "medium",
            question: "M. Fathima Beevi, who recently passed away and received Padma Bhushan 2024, was the first woman:",
            options: ["Governor of India", "Judge of Supreme Court", "Pilot in Air Force", "Chief Minister"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "A trailblazer for women in the Indian judiciary.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-011", type: "mcq", difficulty: "medium",
            question: "Which of the following para-athletes is the first to receive the Padma Bhushan?",
            options: ["Deepa Malik", "Devendra Jhajharia", "Avani Lekhara", "Neeraj Chopra"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Verified fact from the official awards list.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-012", type: "mcq", difficulty: "medium",
            question: "The Jhulaghat suspension bridge connects India to:",
            options: ["Bhutan", "Bangladesh", "Nepal", "Myanmar"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Connects Pithoragarh (Uttarakhand) to Nepal.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-013", type: "mcq", difficulty: "medium",
            question: "Who is the fourth member of the QUAD group alongside India, USA, and Japan?",
            options: ["France", "South Korea", "Australia", "Russia"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "QUAD members: India, USA, Japan, Australia.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-014", type: "mcq", difficulty: "medium",
            question: "Mission Divyastra, announced in 2024, is associated with:",
            options: ["Lunar Mission", "Solar Mission", "Agni-5 MIRV Test", "Cyber Security"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "The Prime Minister announced the successful Agni-5 MIRV test under this mission name.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gk-ca-015", type: "mcq", difficulty: "hard",
            question: "Which Padma award did Mithun Chakraborty receive in 2024?",
            options: ["Padma Vibhushan", "Padma Bhushan", "Padma Shri", "None"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Critical factual check: He received the Padma Bhushan.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- CATEGORY E: General Science — Conceptual (15 Questions) ---
        {
            id: "gk-sci-001", type: "mcq", difficulty: "medium",
            question: "Water boils at a lower temperature at high altitudes primarily because:",
            options: [
                "Atmospheric pressure decreases",
                "Atmospheric pressure increases",
                "Air is thinner",
                "Temperature is higher"
            ],
            correct: 0,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "Boiling point depends on external pressure. When pressure drops (altitudes), the vapor pressure required for boiling is reached at a lower temp.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-002", type: "mcq", difficulty: "medium",
            question: "Why does a ship made of steel float on water, while a solid steel ball sinks?",
            options: [
                "Ship has more mass",
                "The ship's average density is less than water due to trapped air",
                "Steel ball has more surface area",
                "Water pushes the ship harder"
            ],
            correct: 1,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "Archimedes' Principle: The hollow ship displaces a volume of water heavier than itself.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-003", type: "mcq", difficulty: "medium",
            question: "The Ozone layer protects the Earth by absorbing which type of radiation?",
            options: ["Infrared rays", "Ultraviolet (UV) rays", "X-rays", "Gamma rays"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "UV-B rays are particularly filtered by the ozone layer (O3) in the stratosphere.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-004", type: "mcq", difficulty: "medium",
            question: "A passenger in a moving bus falls forward when the driver applies brakes suddenly. This is due to:",
            options: ["Inertia of rest", "Inertia of motion", "Centrifugal force", "Gravity"],
            correct: 1,
            cognitiveType: "application", timePresure: "speed", speedTarget: 45,
            explanation: "The passenger's body wants to continue in motion (Newton's 1st Law) while the bus stops.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-005", type: "mcq", difficulty: "medium",
            question: "Which of the following occurs when the ocean becomes more acidic?",
            options: ["The pH level increases", "The pH level decreases", "The pH becomes neutral", "Salt concentration decreases"],
            correct: 1,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "Acidic substances have pH < 7. More acid = lower pH.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-006", type: "mcq", difficulty: "hard",
            question: "Diamond is a bad conductor of electricity, whereas Graphite is a good conductor. This is because:",
            options: [
                "Diamond has free electrons",
                "Graphite has delocalised electrons between its layers",
                "Diamond is harder",
                "Graphite is a metal"
            ],
            correct: 1,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "In graphite, each carbon atom is bonded to 3 others, leaving 1 free electron per atom for conduction.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-007", type: "mcq", difficulty: "medium",
            question: "Kwashiorkor is a disease caused by the deficiency of:",
            options: ["Vitamin D", "Iron", "Proteins", "Iodine"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Kwashiorkor is protein-specific deficiency; Marasmus is overall calorie deficiency.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-008", type: "mcq", difficulty: "medium",
            question: "Which vitamin deficiency causes 'Night Blindness'?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Vitamin A (Retinol) is essential for vision.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-009", type: "mcq", difficulty: "easy",
            question: "Goitre is caused by the deficiency of which element?",
            options: ["Calcium", "Iodine", "Sodium", "Zinc"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Iodine deficiency leads to the swelling of the thyroid gland.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-010", type: "mcq", difficulty: "hard",
            question: "Identify the INCORRECTLY matched pair:",
            options: [
                "Scurvy - Vitamin C",
                "Beriberi - Vitamin B1",
                "Rickets - Vitamin D",
                "Night Blindness - Vitamin B12"
            ],
            correct: 3,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 90,
            explanation: "Night Blindness is caused by Vitamin A, not B12.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-011", type: "mcq", difficulty: "medium",
            question: "Why do we hear thunder after seeing lightning even though they happen simultaneously?",
            options: [
                "Thunder happens later",
                "Light travels faster than sound",
                "Sound travels faster than light",
                "Eyes are faster than ears"
            ],
            correct: 1,
            cognitiveType: "synthesis", timePresure: "standard", speedTarget: 45,
            explanation: "Light (300,000 km/s) is significantly faster than sound (343 m/s).",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-012", type: "mcq", difficulty: "easy",
            question: "A neutral solution has a pH of:",
            options: ["0", "7", "14", "5"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Pure water is neutral at pH 7.",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-013", type: "mcq", difficulty: "medium",
            question: "A person living on a diet of polished rice only is at risk of:",
            options: ["Scurvy", "Beriberi", "Pellegra", "Rickets"],
            correct: 1,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Polishing removes the outer layer rich in Vitamin B1 (Thiamine).",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-014", type: "mcq", difficulty: "medium",
            question: "Which gas is primarily responsible for global warming?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
            correct: 2,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "CO2 traps heat in the atmosphere (Greenhouse effect).",
            examTags: ["CUET"]
        },
        {
            id: "gk-sci-015", type: "mcq", difficulty: "medium",
            question: "Which of these is a liquid at room temperature?",
            options: ["Mercury", "Carbon", "Sulphur", "Iodine"],
            correct: 0,
            cognitiveType: "recall", timePresure: "speed", speedTarget: 45,
            explanation: "Mercury (Hg) is a metal that remains liquid at standard room temperature.",
            examTags: ["CUET"]
        }
    ]
};
