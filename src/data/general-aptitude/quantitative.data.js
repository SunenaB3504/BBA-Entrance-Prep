// src/data/general-aptitude/quantitative.data.js
// VALIDATED AGAINST DATA_SCHEMA.md
// STRATEGY: Unified CUET (Analytical) + MAH CET (Speed)

export const quantitativeData = {
    subject: "General Knowledge", // Mapping to GAT/GK section per subjects.config.js
    chapter: "Quantitative Aptitude",
    examTags: ["CUET", "MH-CET"],

    flashcards: [
        { id: "quant-fc-001", term: "BODMAS Rule", definition: "Order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction", formula: null, example: "10 + 2 × 5 = 20 (not 60)" },
        { id: "quant-fc-002", term: "Successive Discounts", definition: "Discounts applied one after another; not additive", formula: "Final Price = MP × (1 - d1) × (1 - d2)", example: "50% + 50% on ₹800 = ₹200 (not ₹0)" },
        { id: "quant-fc-003", term: "LCM & HCF Relation", definition: "Product of two numbers is equal to product of their LCM and HCF", formula: "Product = LCM × HCF", example: "LCM=60, HCF=5, Num1=15 → Num2 = 20" },
        { id: "quant-fc-004", term: "Compound Interest (2 years)", definition: "Interest earned on interest", formula: "A = P(1 + r/100)²", example: "P=1000, r=10% → A=1210" },
        { id: "quant-fc-005", term: "Relative Speed (Trains)", definition: "Speeds added when moving in opposite directions, subtracted when same direction", formula: "Opposite: V1 + V2 | Same: V1 - V2", example: "Trains at 50 & 40 km/h → Relative = 90 (Opp) or 10 (Same)" },
        { id: "quant-fc-006", term: "Train Crossing Tunnel", definition: "Total distance covered equals length of train plus length of tunnel", formula: "D = L_train + L_tunnel", example: "200m train crosses 300m tunnel → Distance = 500m" },
        { id: "quant-fc-007", term: "Area of Square (Diagonal)", definition: "Finding square area using diagonal instead of side", formula: "Area = d² / 2", example: "Diagonal=10cm → Area = 50 sq.cm" },
        { id: "quant-fc-008", term: "Simple Interest Principal", definition: "Finding P using difference in interest over years", formula: "P = (SI_diff × 100) / (R × T_diff)", example: "SI diff is 200 over 2 years at 10% → P = 1000" },
        { id: "quant-fc-009", term: "Weighted Average", definition: "Average of multiple groups with different sizes", formula: "(n1*A1 + n2*A2) / (n1 + n2)", example: "10 boys (avg 50) + 20 girls (avg 60) → Avg = 56.6" },
        { id: "quant-fc-010", term: "Trigonometric Identity", definition: "Fundamental relation between sine and cosine", formula: "sin²θ + cos²θ = 1", example: "If sin θ = 3/5, then cos θ = 4/5" },
        { id: "quant-fc-011", term: "Boats & Streams", definition: "Upstream (against current) and Downstream (with current)", formula: "Down = u + v | Up = u - v", example: "Boat=10, Stream=2 → Down=12, Up=8" },
        { id: "quant-fc-012", term: "Cylinder Mensuration", definition: "Volume and Surface Area logic", formula: "V=πr²h, CSA=2πrh", example: "r=7, h=10 → V=1540" }
    ],

    questions: [
        // --- TOPIC 1: BODMAS / Simplification (CUET Depth) ---
        {
            id: "quant-q-001", type: "numerical", difficulty: "medium",
            question: "Simplify the following expression: [48 ÷ 12 × {16 - (4 + 6)} + 14]",
            options: ["38", "54", "26", "42"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Solve inner bracket: (4 + 6) = 10",
                "Solve curly bracket: {16 - 10} = 6",
                "Solve outer expression: 48 ÷ 12 × 6 + 14",
                "Perform division: 4 × 6 + 14",
                "Perform multiplication then addition: 24 + 14 = 38"
            ],
            explanation: "Following BODMAS: Bracket → Division → Multiplication → Addition. 48/12 = 4. 4 × 6 = 24. 24 + 14 = 38.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-002", type: "numerical", difficulty: "hard",
            question: "Evaluate: 125% of 160 + 40% of 240 - 25% of 150",
            options: ["258.5", "296", "248.5", "302.5"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "125% of 160 = 1.25 × 160 = 200",
                "40% of 240 = 0.4 × 240 = 96",
                "25% of 150 = 0.25 × 150 = 37.5",
                "Combine: 200 + 96 - 37.5",
                "Result: 296 - 37.5 = 258.5"
            ],
            explanation: "Step 1: 1.25 × 160 = 200. Step 2: 0.4 × 240 = 96. Step 3: 0.25 × 150 = 37.5. Total: 200 + 96 - 37.5 = 258.5.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-003", type: "numerical", difficulty: "medium",
            question: "If A = (2/3) ÷ (4/9) × (1/2) and B = (1/2) + (1/4) ÷ (1/8), find A + B.",
            options: ["3.25", "2.75", "1.5", "5.5"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 120,
            solution_steps: [
                "Solve A: (2/3) × (9/4) × (1/2) = (18/12) × (1/2) = 1.5 × 0.5 = 0.75",
                "Solve B: (1/2) + (1/4) × (8/1) = 0.5 + 2 = 2.5",
                "Sum: 0.75 + 2.5 = 3.25"
            ],
            explanation: "A = 0.75, B = 2.5. Sum = 3.25. Always perform division before multiplication/addition within fractions.",
            examTags: ["CUET"]
        },

        // --- TOPIC 2: Fractions (CUET Depth) ---
        {
            id: "quant-q-004", type: "numerical", difficulty: "medium",
            question: "Arrange the following fractions in ascending order and find the sum of the second and third term: 2/5, 1/3, 3/4, 1/2",
            options: ["1.25", "0.9", "0.83", "1.1"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Convert to decimals: 2/5=0.4, 1/3=0.33, 3/4=0.75, 1/2=0.5",
                "Ascending order: 1/3 (0.33), 2/5 (0.4), 1/2 (0.5), 3/4 (0.75)",
                "Second term=2/5, Third term=1/2",
                "Sum: 0.4 + 0.5 = 0.9"
            ],
            explanation: "The fractions in order are 1/3, 2/5, 1/2, 3/4. Sum of 2nd and 3rd = 2/5 + 1/2 = 0.4 + 0.5 = 0.9.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-005", type: "numerical", difficulty: "hard",
            question: "A vessel is 1/3 full. After adding 15 liters of water, it becomes 1/2 full. Find the capacity of the vessel.",
            options: ["60 liters", "45 liters", "90 liters", "30 liters"],
            correct: 2,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Let capacity be X",
                "Equation: X/3 + 15 = X/2",
                "15 = X/2 - X/3",
                "15 = (3X - 2X) / 6 → 15 = X/6",
                "X = 15 × 6 = 90 liters"
            ],
            explanation: "The difference between 1/3 and 1/2 of the vessel is 15 liters. (1/2 - 1/3) = 1/6. If 1/6 = 15, then full capacity = 90.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-006", type: "numerical", difficulty: "medium",
            question: "Which of the following fractions is exactly mid-way between 1/4 and 3/4?",
            options: ["1/2", "3/8", "2/3", "5/8"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "Midpoint formula: (a + b) / 2",
                "(1/4 + 3/4) / 2 = (4/4) / 2",
                "1 / 2 = 0.5"
            ],
            explanation: "The average of 0.25 and 0.75 is 0.5, which is 1/2.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 3: LCM and HCF (CUET Depth) ---
        {
            id: "quant-q-007", type: "numerical", difficulty: "medium",
            question: "The HCF and LCM of two numbers are 12 and 144 respectively. If one number is 36, find the other number.",
            options: ["48", "24", "72", "60"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 60,
            solution_steps: [
                "Formula: Num1 × Num2 = HCF × LCM",
                "36 × Num2 = 12 × 144",
                "Num2 = (12 × 144) / 36",
                "Num2 = 144 / 3 = 48"
            ],
            explanation: "Using the fundamental relation Product = HCF × LCM. (12 × 144) / 36 = 1728 / 36 = 48.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-008", type: "numerical", difficulty: "hard",
            question: "Find the smallest number which when divided by 12, 15 and 18 leaves a remainder of 7 in each case.",
            options: ["180", "187", "173", "194"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Step 1: Find LCM of 12, 15, and 18",
                "Factors: 12=2²×3, 15=3×5, 18=2×3²",
                "LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180",
                "Step 2: Add the required remainder",
                "Number = 180 + 7 = 187"
            ],
            explanation: "The number should be (LCM of divisors) + remainder. LCM(12, 15, 18) = 180. 180 + 7 = 187.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-009", type: "mcq", difficulty: "medium",
            question: "Which of the following sets of numbers are 'co-prime'?",
            options: ["(14, 21)", "(18, 25)", "(15, 27)", "(22, 33)"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Co-primes are pairs whose HCF is 1. (14,21) div by 7; (15,27) div by 3; (22,33) div by 11. (18,25) have no common factor other than 1.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 4: Age Problems (CUET Depth) ---
        {
            id: "quant-q-010", type: "numerical", difficulty: "medium",
            question: "A father is 3 times as old as his son. 5 years ago, he was 4 times as old as his son. Find the father's current age.",
            options: ["45 years", "30 years", "50 years", "60 years"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Let son's current age be x. Father's = 3x",
                "5 years ago: Father = (3x-5), Son = (x-5)",
                "Equation: (3x-5) = 4(x-5)",
                "3x-5 = 4x-20 → x = 15",
                "Father's age = 3 × 15 = 45 years"
            ],
            explanation: "Current ages 45 and 15 satisfy the '3 times' condition. 5 years ago, they were 40 and 10, which satisfies '4 times'.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-011", type: "numerical", difficulty: "hard",
            question: "The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
            options: ["4 years", "8 years", "5 years", "7 years"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Let ages be x, x+3, x+6, x+9, x+12",
                "Sum = 5x + 30 = 50",
                "5x = 20 → x = 4",
                "Youngest child's age = 4"
            ],
            explanation: "Ages are 4, 7, 10, 13, 16. Their sum is indeed 50. Youngest is 4.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-012", type: "numerical", difficulty: "medium",
            question: "Present ages of Sam and Peter are in ratio 5:4. After 3 years, the ratio becomes 11:9. What is Peter's present age?",
            options: ["24 years", "30 years", "20 years", "28 years"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            solution_steps: [
                "Let ages be 5x and 4x",
                "Equation: (5x + 3) / (4x + 3) = 11/9",
                "9(5x + 3) = 11(4x + 3) → 45x + 27 = 44x + 33",
                "x = 6",
                "Peter's age = 4x = 4 × 6 = 24 years"
            ],
            explanation: "With x=6, ages are 30 and 24. After 3 years, they are 33 and 27, which is 11:9 ratio.",
            examTags: ["CUET"]
        },

        // --- TOPIC 5: Percentage — Marks and Pass/Fail (CUET Depth) ---
        {
            id: "quant-q-013", type: "numerical", difficulty: "medium",
            question: "In an exam, a student scores 30% and fails by 15 marks. Another student scores 40% and gets 35 marks more than the passing marks. Find the maximum marks.",
            options: ["500", "400", "600", "450"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Difference in percentages = 40% - 30% = 10%",
                "Difference in marks = 35 + 15 = 50",
                "If 10% = 50, then 100% = (50 / 10) × 100 = 500"
            ],
            explanation: "A 10% increase in score resulted in a 50 mark increase. Therefore, 100% (max marks) is 500.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-014", type: "numerical", difficulty: "hard",
            question: "A number is increased by 20% and then decreased by 20%. Find the net percentage change.",
            options: ["0% change", "4% decrease", "4% increase", "2% decrease"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "Formula: a + b + ab/100",
                "20 - 20 + (20 × -20) / 100",
                "0 - 400/100 = -4%",
                "Negative indicates decrease."
            ],
            explanation: "Whenever a value is increased and decreased by the same percentage X, there is always a net decrease of X²/100%. Here, 20²/100 = 4% decrease.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-015", type: "numerical", difficulty: "medium",
            question: "If 15% of A is equal to 20% of B, find A:B.",
            options: ["3:4", "4:3", "5:4", "4:5"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "15/100 × A = 20/100 × B",
                "15A = 20B",
                "A/B = 20/15 = 4/3"
            ],
            explanation: "A/B = 20/15 = 4/3. So ratio A:B is 4:3.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 6: Weighted Averages (CUET Depth) ---
        {
            id: "quant-q-016", type: "numerical", difficulty: "medium",
            question: "A class of 20 students has an average weight of 50 kg. Another class of 30 students has an average weight of 60 kg. Find the average weight of all 50 students combined.",
            options: ["55 kg", "56 kg", "58 kg", "54 kg"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Total weight 1 = 20 × 50 = 1000 kg",
                "Total weight 2 = 30 × 60 = 1800 kg",
                "Total sum = 1000 + 1800 = 2800 kg",
                "Overall average = 2800 / 50 = 56 kg"
            ],
            explanation: "Combined average = (n1A1 + n2A2) / (n1 + n2) = (1000 + 1800) / 50 = 56 kg.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-017", type: "numerical", difficulty: "hard",
            question: "The average age of 8 men is increased by 2 years when two of them whose ages are 21 and 23 years are replaced by two new men. What is the average age of the two new men?",
            options: ["22 years", "30 years", "28 years", "32 years"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            solution_steps: [
                "Total increase in age = 8 × 2 = 16 years",
                "Sum of ages of two new men = (Sum of ages of replaced men) + Total Increase",
                "= (21 + 23) + 16 = 44 + 16 = 60 years",
                "Average age of new men = 60 / 2 = 30 years"
            ],
            explanation: "Since the average increased by 2 for 8 people, the new people brought in 16 more years than those who left. Total replaced = 44. Total new = 44 + 16 = 60. Average = 30.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-018", type: "numerical", difficulty: "medium",
            question: "Average temperature of Monday, Tuesday, Wednesday was 40°C. Average of Tuesday, Wednesday, Thursday was 41°C. If Thursday was 42°C, what was Monday's temperature?",
            options: ["39°C", "40°C", "38°C", "41°C"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "M + T + W = 3 × 40 = 120",
                "T + W + Th = 3 × 41 = 123",
                "Subtracting eq1 from eq2: Th - M = 123 - 120 = 3",
                "42 - M = 3 → M = 39°C"
            ],
            explanation: "The difference in the three-day sums is 3°C, which must be the difference between Thursday and Monday. 42 - 3 = 39.",
            examTags: ["CUET"]
        },

        // --- TOPIC 7: Ratio (CUET Depth) ---
        {
            id: "quant-q-019", type: "numerical", difficulty: "medium",
            question: "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
            options: ["8:12:15", "2:3:5", "4:6:10", "8:10:15"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 60,
            solution_steps: [
                "To combine, B must be common. 3 and 4 have LCM 12.",
                "A:B = 2:3 = 8:12 (multiply by 4)",
                "B:C = 4:5 = 12:15 (multiply by 3)",
                "A:B:C = 8:12:15"
            ],
            explanation: "Multiply first ratio by B's value in second, and second ratio by B's value in first. 2*4 : 3*4 : 3*5 = 8 : 12 : 15.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-020", type: "numerical", difficulty: "medium",
            question: "Divide ₹1200 among A, B and C in the ratio 2:3:5. How much more does C get than A?",
            options: ["₹360", "₹240", "₹480", "₹600"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Total parts = 2 + 3 + 5 = 10",
                "Value per part = 1200 / 10 = ₹120",
                "A's share = 2 × 120 = ₹240",
                "C's share = 5 × 120 = ₹600",
                "Difference = ₹600 - ₹240 = ₹360"
            ],
            explanation: "Ratio difference (C-A) = 3 parts. 1 part = 120. 3 parts = ₹360.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-021", type: "numerical", difficulty: "hard",
            question: "The salaries of A, B, and C are in ratio 2:3:5. If increases of 15%, 10% and 10% are allowed in their salaries, find the new ratio of their salaries.",
            options: ["23:33:55", "3:4:6", "22:33:55", "23:23:23"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            solution_steps: [
                "Assume salaries: 200, 300, 500",
                "New A = 200 × 1.15 = 230",
                "New B = 300 × 1.1 = 330",
                "New C = 500 × 1.1 = 550",
                "New Ratio = 230:330:550 = 23:33:55"
            ],
            explanation: "Increase each part by its percentage. 2*1.15 : 3*1.1 : 5*1.1 = 2.3 : 3.3 : 5.5 = 23:33:55.",
            examTags: ["CUET"]
        },

        // --- TOPIC 8: Successive Discounts — CUET SIGNATURE (3 questions) ---
        {
            id: "quant-q-022", type: "numerical", difficulty: "medium",
            question: "A shopkeeper offers 'Buy 1 Get 1 Free' on a ₹1000 item. Then he gives a further 10% discount on the total. What is the effective single discount percentage?",
            options: ["60%", "55%", "65%", "50%"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 90,
            solution_steps: [
                "Buy 1 Get 1 = 50% discount",
                "Remaining price = 50% of 1000 = ₹500",
                "Apply 10% on 500 = ₹50",
                "Final Price = 500 - 50 = ₹450",
                "Total discount = 1000 - 450 = ₹550",
                "Effective % = (550 / 1000) × 100 = 55%"
            ],
            explanation: "Successive discounts are not additive. 50% followed by 10% results in 55% total reduction. Formula: 1 - (0.5 * 0.9) = 1 - 0.45 = 0.55.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-023", type: "numerical", difficulty: "hard",
            question: "An item marked at ₹800 is sold for ₹612 after two successive discounts. If the first discount is 10%, find the second discount percentage.",
            options: ["12%", "15%", "18%", "20%"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 120,
            solution_steps: [
                "Price after 1st discount = 800 - (10% of 800) = ₹720",
                "Amount of 2nd discount = 720 - 612 = ₹108",
                "2nd discount % = (108 / 720) × 100",
                "= 108 / 7.2 = 15%"
            ],
            explanation: "After ₹720, a further ₹108 reduction was given. 108 is 15% of 720.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-024", type: "numerical", difficulty: "medium",
            question: "Which of the following is better for a customer? (A) Successive discounts of 20% and 10% (B) A single discount of 30%",
            options: ["Option A", "Option B", "Both are same", "Depends on MP"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "A: 100 → 80 → 72 (Effective 28% discount)",
                "B: 100 → 70 (Effective 30% discount)",
                "Higher discount is better for customer."
            ],
            explanation: "Successive discounts always result in a lower total than their sum. 20% + 10% is actually 28%, which is less than 30%.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 9: Profit, Loss and Marked Price (CUET Depth) ---
        {
            id: "quant-q-025", type: "numerical", difficulty: "hard",
            question: "A merchant marks his goods 25% above the cost price and allows a discount of 10%. Find his profit percentage.",
            options: ["15%", "12.5%", "10%", "17.5%"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Let CP = 100",
                "Marked Price (MP) = 125",
                "Discount = 10% of 125 = 12.5",
                "Selling Price (SP) = 125 - 12.5 = 112.5",
                "Profit = SP - CP = 12.5% "
            ],
            explanation: "Profit % = (1.25 × 0.9) - 1 = 1.125 - 1 = 12.5%.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-026", type: "numerical", difficulty: "hard",
            question: "By selling a watch for ₹1140, a man loses 5%. At what price should he sell it to gain 5%?",
            options: ["₹1200", "₹1260", "₹1320", "₹1250"],
            correct: 1,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "95% of CP = 1140",
                "CP = 1140 / 0.95 = 1200",
                "Required gain = 5%",
                "Required SP = 1200 × 1.05 = 1260"
            ],
            explanation: "CP is 1200. To gain 5%, he must add 60 to the cost price.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 10: Simple Interest — Dual Scenario (3 questions) ---
        {
            id: "quant-q-027", type: "numerical", difficulty: "medium",
            question: "A sum of money amounts to ₹5200 in 2 years and to ₹5600 in 3 years at simple interest. Find the principal sum.",
            options: ["₹4400", "₹4800", "₹4000", "₹4500"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "SI for 1 year = Amount(3yr) - Amount(2yr)",
                "SI = 5600 - 5200 = ₹400",
                "SI for 2 years = 400 × 2 = ₹800",
                "Principal = Amount(2yr) - SI(2yr)",
                "Principal = 5200 - 800 = ₹4400"
            ],
            explanation: "The interest for 1 year is the difference between the two amounts = 400. Subtract 2 years of interest from the 2-year amount to get P.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-028", type: "numerical", difficulty: "hard",
            question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
            options: ["10%", "12.5%", "15%", "8%"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "If P doubles, SI = P",
                "Formula: P = (P * R * 8) / 100",
                "1 = (R * 8) / 100 → R = 100 / 8",
                "R = 12.5%"
            ],
            explanation: "To double a sum, the interest earned must equal the principal. R = 100/T = 100/8 = 12.5%.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-029", type: "numerical", difficulty: "hard",
            question: "Difference between CI and SI on a sum for 2 years at 10% per annum is ₹50. Find the principal sum.",
            options: ["₹5000", "₹2500", "₹7500", "₹10000"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Formula for 2 years diff: P(r/100)² = Diff",
                "P(10/100)² = 50",
                "P(0.1)² = 50 → P(0.01) = 50",
                "P = 50 / 0.01 = ₹5000"
            ],
            explanation: "Using the shortcut for 2nd year difference: 50 = P × (1/10) × (1/10). Thus P = 5000.",
            examTags: ["CUET"]
        },

        // --- TOPIC 11: Geometric-Arithmetic Hybrid — CUET SIGNATURE (3 Qs) ---
        {
            id: "quant-q-030", type: "numerical", difficulty: "hard",
            question: "A square has diagonals of length (4k + 6) cm and (7k - 3) cm. Find the area of the square.",
            options: ["162 sq.cm", "200 sq.cm", "150 sq.cm", "128 sq.cm"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 120,
            solution_steps: [
                "Diagonals of a square are equal: 4k + 6 = 7k - 3",
                "3k = 9 → k = 3",
                "Length of diagonal (d) = 4(3) + 6 = 18 cm",
                "Area = d² / 2 = 18² / 2",
                "Area = 324 / 2 = 162 sq.cm"
            ],
            explanation: "First equate diagonals to find k=3, then diagonal length=18. Area of square = half of diagonal squared.",
            examTags: ["CUET"]
        },
        {
            id: "quant-q-031", type: "numerical", difficulty: "hard",
            question: "The circumference of a circle is equal to the perimeter of a square of side 11 cm. Find the area of the circle.",
            options: ["154 sq.cm", "144 sq.cm", "121 sq.cm", "176 sq.cm"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Perimeter of square = 4 × 11 = 44 cm",
                "Circumference of circle = 2πr = 44",
                "2 × (22/7) × r = 44 → r = 7 cm",
                "Area of circle = πr² = (22/7) × 7 × 7",
                "Area = 154 sq.cm"
            ],
            explanation: "Perimeter=44cm. Use 2πr=44 to find radius=7. Then πr² = 22/7 * 49 = 154.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-032", type: "numerical", difficulty: "hard",
            question: "Volume of a cylinder is 1540 cubic cm and its radius is 7 cm. Find its curved surface area.",
            options: ["440 sq.cm", "220 sq.cm", "880 sq.cm", "154 sq.cm"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 120,
            solution_steps: [
                "V = πr²h → 1540 = (22/7) × 7² × h",
                "1540 = 154 × h → h = 10 cm",
                "Curved Surface Area = 2πrh",
                "CSA = 2 × (22/7) × 7 × 10 = 440 sq.cm"
            ],
            explanation: "First solve for height: h = V / (πr²) = 1540 / 154 = 10. Then CSA = 2 * 22/7 * 7 * 10 = 440.",
            examTags: ["CUET"]
        },

        // --- TOPIC 12: Pipes and Cisterns — Midpoint Variant (2 questions) ---
        {
            id: "quant-q-033", type: "numerical", difficulty: "medium",
            question: "Tap A fills a tank in 10 hours. Tap B fills it in 15 hours. If both are opened for 2 hours and then A is closed, how much longer will it take B to fill the tank?",
            options: ["10 hours", "9 hours", "12 hours", "8 hours"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Rate A = 1/10, Rate B = 1/15",
                "Combined rate = 1/10 + 1/15 = 1/6",
                "Work done in 2 hours = 1/6 × 2 = 1/3",
                "Remaining work = 1 - 1/3 = 2/3",
                "Time for B = (2/3) / (1/15) = 2/3 × 15 = 10 hours"
            ],
            explanation: "Combined filling is 1/6 th per hour. After 2 hours, 1/3 is full. Remaining 2/3 filled by B at 1/15 per hour takes 10 hours.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-034", type: "numerical", difficulty: "hard",
            question: "Pipe A can fill a tank in 12 min. Pipe B in 18 min. Pipe C can empty it in 36 min. If all three are opened together, how long to fill the tank?",
            options: ["9 min", "8 min", "10 min", "12 min"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 60,
            solution_steps: [
                "Net rate = 1/12 + 1/18 - 1/36",
                "LCM = 36",
                "Net rate = (3 + 2 - 1) / 36 = 4/36 = 1/9",
                "Time = 9 minutes"
            ],
            explanation: "Combined rate considering emptying pipe: 1/12 + 1/18 - 1/36 = 1/9. Tank fills in 9 minutes.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 13: Trains — Crossing Tunnel — CUET SIGNATURE (2 questions) ---
        {
            id: "quant-q-035", type: "numerical", difficulty: "medium",
            question: "A train 150m long crosses a platform 250m long in 20 seconds. Find the speed of the train in km/h.",
            options: ["72 km/h", "54 km/h", "80 km/h", "90 km/h"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Total distance = Train + Platform = 150 + 250 = 400m",
                "Speed (m/s) = Distance / Time = 400 / 20 = 20 m/s",
                "Speed (km/h) = 20 × 18/5 = 72 km/h"
            ],
            explanation: "Total distance is the sum of lengths. Convert 20 m/s to km/h by multiplying by 3.6 (or 18/5).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-036", type: "numerical", difficulty: "hard",
            question: "A train running at 54 km/h crosses a man standing on a platform in 12 seconds. Find the length of the train.",
            options: ["180 m", "150 m", "200 m", "240 m"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 60,
            solution_steps: [
                "Speed in m/s = 54 × 5/18 = 15 m/s",
                "Length = Speed × Time = 15 × 12 = 180 m"
            ],
            explanation: "When crossing a man, distance = train's length. 15 m/s × 12s = 180m.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 14: Statistics — CUET SIGNATURE (2 questions) ---
        {
            id: "quant-q-037", type: "numerical", difficulty: "medium",
            question: "If the mean of 6, 4, 7, p and 10 is 8, find the value of p.",
            options: ["13", "12", "15", "11"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "Sum / 5 = 8",
                "6 + 4 + 7 + p + 10 = 40",
                "27 + p = 40 → p = 13"
            ],
            explanation: "Total sum must be 5 * 8 = 40. Sum of knowns is 27. So p = 13.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-038", type: "mcq", difficulty: "hard",
            question: "In a skewed distribution, if Mean = 30 and Median = 28, find the approximate Mode using the empirical relationship.",
            options: ["24", "26", "29", "32"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Empirical Formula: Mode = 3 Median - 2 Mean",
                "Mode = 3(28) - 2(30)",
                "Mode = 84 - 60 = 24"
            ],
            explanation: "The empirical formula relating the three is Mode = 3Median - 2Mean. 3*28 - 2*30 = 24.",
            examTags: ["CUET"]
        },

        // --- TOPIC 15: Similar Triangles — BPT (2 questions) ---
        {
            id: "quant-q-039", type: "numerical", difficulty: "medium",
            question: "In △ABC, DE ∥ BC. If AD=4cm, DB=6cm and AE=5cm, find EC.",
            options: ["7.5cm", "8cm", "6.5cm", "10cm"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "By Thales Theorem (BPT): AD/DB = AE/EC",
                "4 / 6 = 5 / EC",
                "EC = (5 × 6) / 4 = 30 / 4 = 7.5cm"
            ],
            explanation: "Basic Proportionality Theorem states: AD/DB = AE/EC. So EC = 5*6/4 = 7.5.",
            examTags: ["CUET"]
        },

        // --- TOPIC 16: Trigonometry (2 questions) ---
        {
            id: "quant-q-040", type: "numerical", difficulty: "hard",
            question: "If sin θ = 3/5 and θ is acute, find the value of (tan θ + cos θ).",
            options: ["1.55", "1.75", "1.35", "1.6"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "deep",
            speedTarget: 120,
            solution_steps: [
                "sin θ = P/H = 3/5 → P=3, H=5",
                "Base (B) = √(5² - 3²) = √16 = 4",
                "tan θ = P/B = 3/4 = 0.75",
                "cos θ = B/H = 4/5 = 0.8",
                "Sum = 0.75 + 0.8 = 1.55"
            ],
            explanation: "First find base=4 using Pythagoras. tan = 3/4, cos = 4/5. Total = 0.75 + 0.8 = 1.55.",
            examTags: ["CUET"]
        },

        // --- TOPIC 17: Boats and Streams (2 questions) ---
        {
            id: "quant-q-041", type: "numerical", difficulty: "hard",
            question: "A man can row 12 km/h in still water. If the speed of the stream is 3 km/h, find the time taken to row 45 km downstream.",
            options: ["3 hours", "4 hours", "5 hours", "2.5 hours"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            solution_steps: [
                "Downstream speed = Boat + Stream = 12 + 3 = 15 km/h",
                "Time = Distance / Speed = 45 / 15 = 3 hours"
            ],
            explanation: "Downstream speed is the sum of speeds. 45 / 15 = 3 hours.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "quant-q-042", type: "numerical", difficulty: "medium",
            question: "A boat goes 8 km upstream in 2 hours. If the speed of the stream is 2 km/h, find the speed of the boat in still water.",
            options: ["6 km/h", "10 km/h", "4 km/h", "8 km/h"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            solution_steps: [
                "Upstream speed = 8 / 2 = 4 km/h",
                "Speed in still water = Upstream + Stream",
                "Speed = 4 + 2 = 6 km/h"
            ],
            explanation: "Upstream = Boat - Stream. So Boat = Upstream + Stream = 4 + 2 = 6.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- PART B: MAH CET SPEED QUESTIONS (20 questions) ---
        // Speed Type 1: BODMAS Drill (4 Qs)
        {
            id: "quant-q-043", type: "numerical", difficulty: "easy",
            question: "Solve: 12 + 24 ÷ 6 - 3",
            options: ["13", "3", "11", "9"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "24/6 = 4. 12 + 4 - 3 = 13.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-044", type: "numerical", difficulty: "easy",
            question: "Solve: 50 - (10 × 4) + 5",
            options: ["15", "165", "5", "25"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "10*4 = 40. 50 - 40 + 5 = 15.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-045", type: "numerical", difficulty: "easy",
            question: "Solve: 8 × 4 + 12 ÷ 2",
            options: ["38", "22", "40", "19"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "32 + 6 = 38.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-046", type: "numerical", difficulty: "easy",
            question: "Solve: (100 ÷ 5) - 15 + 5",
            options: ["10", "15", "5", "20"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "20 - 15 + 5 = 10.",
            examTags: ["MH-CET"]
        },

        // Speed Type 2: Percentage Quick-fire (4 Qs)
        {
            id: "quant-q-047", type: "numerical", difficulty: "easy",
            question: "What is 15% of 240?",
            options: ["36", "30", "40", "45"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "0.15 * 240 = 36.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-048", type: "numerical", difficulty: "easy",
            question: "What percentage of 500 is 125?",
            options: ["25%", "20%", "30%", "15%"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "(125/500)*100 = 25%.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-049", type: "numerical", difficulty: "easy",
            question: "A price increases from ₹200 to ₹250. Find the percentage increase.",
            options: ["25%", "20%", "50%", "30%"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "(50/200)*100 = 25%.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-050", type: "numerical", difficulty: "easy",
            question: "Find x if 20% of x is 60.",
            options: ["300", "200", "400", "150"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "0.2x = 60 → x = 300.",
            examTags: ["MH-CET"]
        },

        // Speed Type 3: Ratio Quick-fire (4 Qs)
        {
            id: "quant-q-051", type: "numerical", difficulty: "easy",
            question: "If A:B = 3:4 and A = 18, find B.",
            options: ["24", "21", "20", "28"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "18 / 3 = 6. 4 * 6 = 24.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-052", type: "numerical", difficulty: "easy",
            question: "Simplify the ratio 45:75.",
            options: ["3:5", "2:3", "4:5", "5:7"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Both div by 15. 45/15=3, 75/15=5.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-053", type: "numerical", difficulty: "easy",
            question: "Two numbers are in ratio 2:3. Their sum is 50. Find the smaller number.",
            options: ["20", "30", "15", "25"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "5 parts = 50. 1 part = 10. Smaller = 20.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-054", type: "numerical", difficulty: "easy",
            question: "If 4:x :: 12:21, find x.",
            options: ["7", "8", "6", "9"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "4/x = 12/21 → 1/x = 3/21 = 1/7 → x = 7.",
            examTags: ["MH-CET"]
        },

        // Speed Type 4: Simple Profit/Loss (4 Qs)
        {
            id: "quant-q-055", type: "numerical", difficulty: "easy",
            question: "CP = ₹400, SP = ₹460. Find profit percentage.",
            options: ["15%", "12.5%", "10%", "20%"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "(60/400)*100 = 15%.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-056", type: "numerical", difficulty: "easy",
            question: "A man loses 10% by selling an item for ₹180. Find its cost price.",
            options: ["₹200", "₹190", "₹210", "₹185"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "90% = 180 → 100% = 200.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-057", type: "numerical", difficulty: "easy",
            question: "A chair is bought for ₹500 and sold at 20% profit. Find the selling price.",
            options: ["₹600", "₹550", "₹650", "₹580"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "500 + 0.2*500 = 600.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-058", type: "numerical", difficulty: "easy",
            question: "Find the single discount equivalent to 20% and 10% successive discounts.",
            options: ["28%", "30%", "25%", "15%"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "100 → 80 → 72. Total 28%.",
            examTags: ["MH-CET"]
        },

        // Speed Type 5: Odd One Out / Perfect Squares (4 Qs)
        {
            id: "quant-q-059", type: "mcq", difficulty: "easy",
            question: "Find the odd one out among the folgende numbers.",
            options: ["81", "64", "45", "49"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "81, 64, and 49 are perfect squares. 45 is not.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-060", type: "mcq", difficulty: "easy",
            question: "Which of these is NOT a prime number?",
            options: ["21", "17", "13", "19"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "21 is divisible by 3 and 7. Others are prime.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-061", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["27", "64", "125", "100"],
            correct: 3,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "27, 64, 125 are perfect cubes. 100 is a perfect square.",
            examTags: ["MH-CET"]
        },
        {
            id: "quant-q-062", type: "numerical", difficulty: "easy",
            question: "What is the square root of 625?",
            options: ["25", "15", "35", "45"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "25 * 25 = 625.",
            examTags: ["MH-CET"]
        }
    ]
};
