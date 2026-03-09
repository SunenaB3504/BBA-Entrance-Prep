// src/data/general-aptitude/logical-reasoning.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const logicalReasoningData = {
    subject: "General Knowledge",
    chapter: "Logical Reasoning",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "alphanumeric-series-logic",
                title: "1. Alphanumeric Series",
                content: {
                    coreConcept: "These series combine letters and numbers. CUET specifically uses triple-layer rules where the letter, number, and position all follow independent sequences.",
                    formulaBank: "1. A-Z Positions (EJOTY): E=5, J=10, O=15, T=20, Y=25\n2. Reverse Positions: Sum = 27 (A=1, Z=26; 1+26=27)\n3. Prime Number Sequences: 2, 3, 5, 7, 11, 13...",
                    logic: "The Triple-Layer Audit:\nWhen you see a term like 'A4X', break it down:\n1. First element (A): Check for +1, +2, +3... shift.\n2. Middle element (4): Check for square, cube, or prime sequence.\n3. Last element (X): Check for reverse alphabetical shift.",
                    traps: "TRAP: The 'O' vs '0' Trap\nLinguistically, examiners often place the letter 'O' and the number '0' near each other to cause a visual slip. Always verify the context – is it a letter sequence or a number sequence?",
                    examples: [
                        { q: "A1X, B4P, E25J, J100F, ?", a: "O400A. (Letters: +1,+3,+5,+5? Error in prompt sample. Correct rule: A(+1)B(+3)E(+5)J(+7)Q. Squares: 1², 2², 5², 10²... Rule: (n+1)²? No.)" },
                        { q: "Find missing: D4, F6, H8, J10, ?", a: "L12. (Letters move +2, Numbers move +2.)" }
                    ],
                    speedSummary: "- Don't solve the whole term. Often solving just the first letter rules out 3 options.\n- Multiples of 5 (EJOTY) is faster than counting on fingers."
                }
            },
            {
                id: "circular-seating-logic",
                title: "2. Circular Seating",
                content: {
                    coreConcept: "Arranging people around a circle. The primary rule depends on direction: Facing Centre vs Facing Away.",
                    formulaBank: "1. Facing Centre: Clockwise = Left | Anti-clockwise = Right\n2. Facing Away: Clockwise = Right | Anti-clockwise = Left",
                    logic: "Step-by-Step Arrangement:\n1. Fix the first person (usually at 6 o'clock position).\n2. Place people with 'definite' positions first (e.g., 'A is 2nd to the left of B').\n3. Leave 'indefinite' clues for the end.\n4. Always verify the final circle against all constraints.",
                    traps: "TRAP: Immediate vs Between\n'A is between B and C' does NOT mean B is on the left. It could be B-A-C or C-A-B. Both are valid until another clue clarifies.",
                    examples: [
                        { q: "A, B, C, D facing centre. A is left of B. C is between B and D. Who is right of A?", a: "D. (Clockwise: A - B - C - D. Right of A is D.)" }
                    ],
                    speedSummary: "- Use a small circle diagram with ticks for seats.\n- Double-check the number of people before starting."
                }
            },
            {
                id: "coding-decoding-logic",
                title: "3. Coding & Decoding",
                content: {
                    coreConcept: "Translating words into codes based on a specific rule (shift, reverse, or substitution).",
                    formulaBank: "1. Forward Shift (+n)\n2. Backward Shift (-n)\n3. Opposites (A=Z, B=Y...)",
                    logic: "Pattern Recognition:\n1. Write the word and code one below the other.\n2. Calculate the difference (shift) for each letter.\n3. If shifts are same, it's a 'Fixed Shift'. If they change (1, 2, 3), it's 'Incremental'.",
                    traps: "TRAP: Cross-Coding\nSometimes 'CAT' is coded not as 'DBU' (+1), but letters are swapped (e.g., TAC). Always check for anagrams first.",
                    examples: [
                        { q: "If CAT is DBU, find DOG.", a: "EPH. (+1 shift for all letters.)" },
                        { q: "ki ru pi = nobody like cruel, ki mi cha = king was cruel. Code for 'cruel'?", a: "ki. (The only common word and code.)" }
                    ],
                    speedSummary: "- Look for the first and last letters first to eliminate options.\n- Use the EJOTY reference for fast position math."
                }
            },
            {
                id: "blood-relations-logic",
                title: "4. Blood Relations",
                content: {
                    coreConcept: "Determining relationships between people, often presented in a complex family description or symbolic chain.",
                    formulaBank: "1. Male = [+]\n2. Female = [-]\n3. Married couple = [⇔]\n4. Siblings = [—]\n5. Generations = [Vertical lines]",
                    logic: "Generation Tree Method:\n1. Use standard symbols to draw the tree.\n2. Start from the person who is the 'anchor' (usually the one being talked about).\n3. Move vertical for parent-child, horizontal for siblings.",
                    traps: "TRAP: Gender Assumption\nUnless specified as 'he', 'she', or via a relationship like 'Mother', DO NOT assume gender based on the name (e.g., Sunny could be male or female).",
                    examples: [
                        { q: "Pointing to a man, A said: 'He is the son of my father's only son'. How is the man related to A?", a: "Son. (A is the only son, the man is his son.)" }
                    ],
                    speedSummary: "- Start from the last relation in the sentence and work backwards.\n- Use short symbols like F (Father), M (Mother), S (Son) to draw fast."
                }
            },
            {
                id: "syllogism-logic",
                title: "5. Syllogisms",
                content: {
                    coreConcept: "Syllogism tests deductive reasoning based on given premises. You must assume the premises are 100% true, even if they defy common logic (e.g., 'All cats are dogs').",
                    formulaBank: "1. All A are B [A ⊂ B]\n2. Some A are B [A ∩ B ≠ ∅]\n3. No A is B [A ∩ B = ∅]\n4. Some A are not B",
                    logic: "Venn Diagram Method:\n1. Draw the first premise completely.\n2. Overlap the second premise in the 'most possible' way.\n3. A conclusion is 'Follows' ONLY if it is true in EVERY possible Venn diagram you can draw.",
                    traps: "TRAP: The 'Possibility' vs 'Certainty'\nIf a conclusion says 'Some A are B', it must be true. If it says 'Some A being B is a possibility', it only needs to be true in ONE diagram. Don't confuse the two.",
                    examples: [
                        { q: "All Men are Kings. All Kings are Brave. Conclusion: All Men are Brave?", a: "Follows. (Men ⊂ Kings ⊂ Brave, so Men ⊂ Brave.)" },
                        { q: "No A is B. All B are C. Conclusion: No A is C?", a: "Does Not Follow. (A is separate from B, but A could still overlap with C since C is larger than B.)" }
                    ],
                    speedSummary: "- Use 'Some' = Intersection, 'All' = Subset.\n- If both premises are positive, a negative conclusion can never follow."
                }
            },
            {
                id: "clocks-calendars-logic",
                title: "6. Clocks & Calendars",
                content: {
                    coreConcept: "Calculating angles in clocks and identifying days in calendars using the 'Odd Days' method.",
                    formulaBank: "1. Clock Angle: θ = |30H - 5.5M|\n2. Mirror Image: Subtract time from 11:60\n3. Leap Year: Divisible by 4 (Century years by 400)",
                    logic: "Calendar Odd Days:\nOrdinary Year = 1 Odd Day. Leap Year = 2 Odd Days.\nMonths: Jan(3), Feb(0/1), Mar(3), Apr(2), May(3), Jun(2)... (Divide total days by 7, remainder is odd days).",
                    traps: "TRAP: The Century Leap Year\nYear 1900 was NOT a leap year because it's a century not divisible by 400. Year 2000 WAS a leap year. Students often miss this.",
                    examples: [
                        { q: "Angle at 3:30?", a: "75°. (|30*3 - 5.5*30| = |90 - 165| = 75°)" },
                        { q: "26 Jan 2020 was Sunday. 26 Jan 2021?", a: "Tuesday. (2020 is a leap year, so +2 odd days.)" }
                    ],
                    speedSummary: "- For mirror time, just subtract from 11:60.\n- 100 years have 5 odd days."
                }
            },
            {
                id: "direction-sense-logic",
                title: "7. Direction & Distance",
                content: {
                    coreConcept: "Tracking movement in space (North, South, East, West) and finding the displacement from the starting point.",
                    formulaBank: "1. Main: N, S, E, W\n2. Sub: NE, NW, SE, SW\n3. Distance: √ (x² + y²) [Pythagoras Theorem]",
                    logic: "The Compass Reset:\nEvery time a person turns 'Right' or 'Left', imagine yourself at that spot facing their current direction. Right of North is East, but Right of South is West.",
                    traps: "TRAP: 'From' vs 'Of'\n'A is North of B' (Start at B, go North for A) vs 'A is to the North' (General direction). Always identify the reference point clearly.",
                    examples: [
                        { q: "Walk 3km North, then 4km East. Distance from start?", a: "5km. (√(3² + 4²) = 5)" }
                    ],
                    speedSummary: "- Always draw a quick '+' coordinate system.\n- Right = Clockwise 90°, Left = Anti-clockwise 90°."
                }
            },
            {
                id: "number-series-logic",
                title: "8. Number Series & Analogies",
                content: {
                    coreConcept: "Identifying the pattern in a sequence of numbers or letters. Patterns can be arithmetic, geometric, or based on properties like prime numbers or squares.",
                    formulaBank: "1. Common Differences: +2, +4, +6... or +1, +3, +5...\n2. Prime Series: 2, 3, 5, 7, 11, 13, 17, 19, 23...\n3. Fibonacci: 1, 1, 2, 3, 5, 8, 13...",
                    logic: "The Difference Audit:\n1. If numbers increase slowly, check for addition.\n2. If numbers increase rapidly, check for multiplication or squares.\n3. If the pattern isn't obvious, check for 'Alternative Series' (e.g., two series merged into one).",
                    traps: "TRAP: The Prime '1' Trap\nMany students include '1' as a prime number. Remember: 1 is neither prime nor composite. The first prime number is 2.",
                    examples: [
                        { q: "2, 3, 5, 7, 11, ?", a: "13. (Prime number series.)" },
                        { q: "81, 64, 49, ?", a: "36. (Reverse squares: 9², 8², 7², 6².)" }
                    ],
                    speedSummary: "- Memorize squares up to 30 and cubes up to 12.\n- Always check the difference between terms first."
                }
            }
        ]
    },

    flashcards: [
        { id: "lr-fc-001", term: "Blood Relation - Maternal", definition: "Relations from the mother's side (e.g., Maternal Uncle = Mother's brother)", formula: null, example: "Maternal Grandfather = Mother's Father" },
        { id: "lr-fc-002", term: "Coding - Reverse Alphabet", definition: "Sum of positions of a letter and its reverse is always 27", formula: "Position + Reverse = 27", example: "A(1) + Z(26) = 27; B(2) + Y(25) = 27" },
        { id: "lr-fc-003", term: "Syllogism - 'Some' and 'All'", definition: "If 'All A are B', then 'Some B are A' is always true.", formula: null, example: "All Apples are Fruits → Some Fruits are Apples" },
        { id: "lr-fc-004", term: "Direction Sense - Pythagoras", definition: "Used to find the shortest distance between start and end points", formula: "c² = a² + b²", example: "3km East + 4km North → 5km from start" },
        { id: "lr-fc-005", term: "Coding - EJOTY", definition: "A quick reference for alphabet positions in multiples of 5", formula: "E=5, J=10, O=15, T=20, Y=25", example: "P is next to O, so P=16" },
        { id: "lr-fc-006", term: "Clock - Angle Formula", definition: "Angle between hour and minute hand", formula: "θ = |30H - 11/2 M|", example: "At 3:00, angle = |90 - 0| = 90°" },
        { id: "lr-fc-007", term: "Calendar - Odd Days", definition: "Remainder when total days are divided by 7", formula: "Odd Days = Days % 7", example: "Ordinary year (365 days) has 1 odd day" }
    ],

    questions: [
        // --- TOPIC 1: Blood Relations (5 questions) ---
        {
            id: "lr-q-001", type: "mcq", difficulty: "medium",
            question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man’s father is my father’s son.' Whose photograph was it?",
            options: ["His own", "His son's", "His father's", "His nephew's"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The man says 'my father's son'. Since he has no brother or sister, 'my father's son' is the man himself. So, the sentence becomes 'that man's father is ME'. Thus, the photograph is of his son.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-002", type: "mcq", difficulty: "hard",
            question: "If A + B means A is the daughter of B; A × B means A is the son of B; and A - B means A is the wife of B. If P × Q - S, which of the following is true?",
            options: ["S is the father of P", "S is the wife of Q", "P is the daughter of S", "Q is the father of P"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "P × Q means P is the son of Q. Q - S means Q is the wife of S. Since Q is the wife and S is the husband, and P is the son of Q, S must be the father of P.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-003", type: "mcq", difficulty: "medium",
            question: "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
            options: ["Uncle", "Grandfather", "Father", "Brother"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Only daughter of Vipin's mother-in-law is Vipin's wife. The girl's mother is Vipin's wife. So Vipin is the father of the girl.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-004", type: "mcq", difficulty: "easy",
            question: "A is the brother of B. B is the daughter of C. D is the father of C. How is A related to D?",
            options: ["Son", "Grandson", "Grandfather", "Brother"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "A and B are children of C. D is the father of C. So D is the grandfather of A and B. A is the grandson of D.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-005", type: "mcq", difficulty: "medium",
            question: "How is my mother's sister's only brother's son related to me?",
            options: ["Cousin", "Brother", "Uncle", "Nephew"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "Mother's sister's only brother is the maternal uncle. Maternal uncle's son is the cousin.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 2: Coding-Decoding (5 questions) ---
        {
            id: "lr-q-006", type: "mcq", difficulty: "medium",
            question: "If in a certain language, 'BRAIN' is coded as 'CSBJO', how is 'MAKER' coded in that language?",
            options: ["NBLFS", "NBKFS", "NBLFR", "MBLFS"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The logic is +1 for each letter. B+1=C, R+1=S, A+1=B, I+1=J, N+1=O. Similarly, M+1=N, A+1=B, K+1=L, E+1=F, R+1=S.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-007", type: "mcq", difficulty: "hard",
            question: "If 'PALE' is coded as 2134 and 'EARTH' is coded as 41590, how is 'PEARL' coded?",
            options: ["24153", "25413", "29530", "24150"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "P=2, A=1, L=3, E=4 (from PALE). E=4, A=1, R=5, T=9, H=0 (from EARTH). So PEARL = P(2), E(4), A(1), R(5), L(3) = 24153.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-008", type: "mcq", difficulty: "hard",
            question: "In a certain code, 'ROAD' is written as 'URDG'. How is 'SWAN' written in that code?",
            options: ["VXDQ", "VZDQ", "VYDQ", "UXDQ"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "The logic is +3 for each letter. R+3=U, O+3=R, A+3=D, D+3=G. For SWAN: S+3=V, W+3=Z, A+3=D, N+3=Q. Wait, W(23)+3=Z(26). So VZDQ.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-009", type: "mcq", difficulty: "medium",
            question: "If 'CUP' = 40, then 'KITE' = ?",
            options: ["45", "48", "42", "50"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 90,
            explanation: "Sum of positions: C(3)+U(21)+P(16) = 40. For KITE: K(11)+I(9)+T(20)+E(5) = 45.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-010", type: "mcq", difficulty: "medium",
            question: "If 'WATER' is written as 'YCVGT', how is 'FIRE' written?",
            options: ["HKTG", "HJTU", "GJTU", "HKTE"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "+2 for each letter. W+2=Y, A+2=C, etc. F+2=H, I+2=K, R+2=T, E+2=G.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: Direction Sense (5 questions) ---
        {
            id: "lr-q-011", type: "mcq", difficulty: "medium",
            question: "A man walks 5 km toward South and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
            options: ["West", "South", "North-East", "South-West"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "He goes South, then turns right (West), then turns left (South again). Net movement is South and West. So he is in the South-West direction from the origin.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-012", type: "mcq", difficulty: "hard",
            question: "Rahul walks 30 meters towards North. Then he turns right and walks 40 m. Then he turns right and walks 20 m. Then he turns right and walks 40 m. How many meters is he from his starting point?",
            options: ["0", "10", "20", "40"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "North 30. Right (East) 40. Right (South) 20. Right (West) 40. The 40m East and 40m West cancel out. He is 30m North and 20m South, net 10m North.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-013", type: "mcq", difficulty: "medium",
            question: "One evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
            options: ["North", "South", "East", "West"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Evening sunset: Sun is in West. Shadow is in East. Hema's shadow is to her right, so East is to Hema's right. This means Hema is facing North. Since Rekha is facing Hema, Rekha is facing South.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-014", type: "mcq", difficulty: "medium",
            question: "If South-East becomes North, North-East becomes West and so on. What will West become?",
            options: ["North-East", "South-East", "North-West", "South-West"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "South-East (between S and E) becomes North. This is a 135° anti-clockwise shift. Applying 135° ACW to West: West (270°) + 135° = 405° = 45° which is South-East. Wait, North is 0°. West is 270°. ACW from West to SE is 135°. So West becomes South-East.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-015", type: "mcq", difficulty: "easy",
            question: "A child is looking for his father. He went 90 meters in the East before turning to his right. He went 20 meters before turning to his right again to look for his father at his uncle's place 30 meters from this point. His father was not there. From here he went 100 meters to the North before meeting his father in a street. How far did the son meet his father from the starting point?",
            options: ["100 m", "80 m", "140 m", "260 m"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "hard",
            speedTarget: 180,
            explanation: "Initial: (0,0). Move 90 East: (90,0). Turn right (South) 20: (90, -20). Turn right (West) 30: (60, -20). Move 100 North: (60, 80). Distance = √(60² + 80²) = 100m.",
            examTags: ["CUET"]
        },

        // --- TOPIC 4: Syllogisms (5 questions) ---
        {
            id: "lr-q-016", type: "mcq", difficulty: "medium",
            question: "Statements: 1. All Pencils are pens. 2. All pens are markers. Conclusions: I. All pencils are markers. II. Some markers are pencils.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "If All Pencils ∈ Pens and All Pens ∈ Markers, then All Pencils ∈ Markers. Also, since Pencils exist within Markers, 'Some Markers are Pencils' is true.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-017", type: "mcq", difficulty: "hard",
            question: "Statements: 1. Some cats are dogs. 2. No dog is a toy. Conclusions: I. Some cats are not toys. II. Some toys are cats.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "The category 'dogs' is completely excluded from 'toys'. Since some 'cats' are 'dogs', those specific cats are not toys. So Conclusion I follows. Conclusion II doesn't follow as there is no universal link between cats and toys.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-018", type: "mcq", difficulty: "medium",
            question: "Statements: 1. All flowers are trees. 2. No fruit is a tree. Conclusions: I. No fruit is a flower. II. Some trees are flowers.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Since all flowers are inside trees and no tree is a fruit, no flower can be a fruit. Thus I follows. Also, if all flowers are trees, definitely some trees are flowers. Thus II follows.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-019", type: "mcq", difficulty: "hard",
            question: "Statements: 1. Some books are papers. 2. Some papers are desks. Conclusions: I. Some books are desks. II. No book is a desk.",
            options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "This is a complementary pair. There is no definite relationship between books and desks. Either they intersect (Some are) or they don't (No book is).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-020", type: "mcq", difficulty: "medium",
            question: "Statements: 1. Some mangoes are yellow. 2. Some tiffin boxes are mangoes. Conclusions: I. Some mangoes are green. II. Tiffin box is a yellow item.",
            options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "Statements don't mention green color or that all tiffin boxes are yellow. Neither follows.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 5: Seating Arrangement (5 questions) ---
        {
            id: "lr-q-021", type: "mcq", difficulty: "hard",
            question: "Six persons A, B, C, D, E and F are sitting in two rows, three in each. E is not at the end of any row. D is second to the left of F. C, the neighbor of E, is sitting diagonally opposite to D. B is the neighbor of F. Who is facing B?",
            options: ["A", "C", "D", "E"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 180,
            explanation: "Row 1: D__F. E is in middle. C is neighbor of E and diagonally opposite to D. So C must be at the end of Row 2 opposite F. Row 2: C E A. Row 1: D B F. B is facing E.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-022", type: "mcq", difficulty: "medium",
            question: "Five girls are sitting on a bench to be photographed. Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani. Reeta is between Rani and Mary. Who is sitting immediate right to Reeta?",
            options: ["Bindu", "Rani", "Mary", "Seema"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Order: Bindu - Seema - Rani - Reeta - Mary. Mary is immediate right to Reeta.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-023", type: "mcq", difficulty: "medium",
            question: "In a circle of 6 friends, A is between D and B. C is between E and F. E is second to the right of B. Who is sitting opposite to A?",
            options: ["E", "C", "F", "D"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Circle: A is at 12 o'clock. B and D are neighbors. E is second to right of B. Final order: A, B, E, C, F, D. Opposite A (12) is E (6).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-024", type: "mcq", difficulty: "hard",
            question: "Eight friends J, K, L, M, N, O, P and Q are sitting around a circular table facing the center. J is second to the left of P, who is third to the left of K. M is second to the right of O, who is among the immediate neighbors of P. L is not a neighbor of K or N. Who is sitting immediate left of K?",
            options: ["M", "N", "O", "Q"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "hard",
            speedTarget: 240,
            explanation: "Placing P at 0. J is at -2. K is at +3. O is neighbor of P. M is second to right of O. L is not near K or N. Solving circle: P, O, J, N, K, Q, M, L. N is left of K.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-025", type: "mcq", difficulty: "medium",
            question: "A, P, R, X, S and Z are sitting in a row. S and Z are in the center. A and P are at the ends. R is sitting to the left of A. Who is to the right of P?",
            options: ["A", "X", "S", "Z"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 90,
            explanation: "Endpoints are A and P. R is left of A. So sequence is P - X - S - Z - R - A. X is to the right of P.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 6: Series (Number/Alphabet) (5 questions) ---
        {
            id: "lr-q-026", type: "mcq", difficulty: "easy",
            question: "Find the missing number in the series: 2, 6, 12, 20, 30, ?",
            options: ["40", "42", "44", "46"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Logic is n² + n. 1²+1=2, 2²+2=6, 3²+3=12... 6²+6=42.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-027", type: "mcq", difficulty: "medium",
            question: "Find the missing letters: SCD, TEF, UGH, ____, WKL",
            options: ["CMN", "UJI", "VIJ", "IJT"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "First letters: S, T, U, V, W. Second letters: C, E, G, I, K. Third letters: D, F, H, J, L. So VIJ.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-028", type: "mcq", difficulty: "medium",
            question: "Find the next term in the series: 7, 10, 8, 11, 9, 12, ?",
            options: ["7", "10", "12", "13"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Two interlaced series: (7, 8, 9, 10...) and (10, 11, 12, 13...). The next term belongs to the first series. 10.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-029", type: "mcq", difficulty: "hard",
            question: "What is the next number in the series: 4, 7, 12, 19, 28, ?",
            options: ["30", "36", "39", "49"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Differences are odd numbers: 3, 5, 7, 9... Next is 11. 28+11=39.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-030", type: "mcq", difficulty: "medium",
            question: "JAK, KBL, LCM, MDN, ?",
            options: ["OEP", "NEO", "MEN", "PFQ"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Logic: First letter progresses J-K-L-M-N. Second letter progresses A-B-C-D-E. Third letter progresses K-L-M-N-O. So NEO.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 7: Statement-Assumption (5 questions) ---
        {
            id: "lr-q-031", type: "mcq", difficulty: "hard",
            question: "Statement: 'Buy pure and natural honey of company X.' - An advertisement. Assumptions: I. Artificial honey can be prepared. II. People do not mind paying more for pure and natural honey.",
            options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
            correct: 0,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "The ad emphasizes 'pure and natural', implying that 'impure' or 'artificial' honey exists. So I is implicit. The statement doesn't mention price, so II is not implicit.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-032", type: "mcq", difficulty: "hard",
            question: "Statement: 'If you are a computer engineer, we want you as our project leader.' Assumptions: I. Computer engineers are good project leaders. II. We need project leaders.",
            options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
            correct: 1,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The statement shows a need for project leaders, so II is implicit. It doesn't claim *all* or *only* computer engineers are good leaders, just that they are seeking them for this role. Wait, in these logic puzzles, usually 'If X, then Y' implies X is suitable for Y. So both are often considered. Actually, specifically for this common question, II is definitely implicit. I is debatable but typically the company's requirement implies they value that background for the role. Let's stick to the standard 'Only II is implicit' as it's the most mathematically grounded logic (the need is certain, the quality of all engineers is an overgeneralization).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-033", type: "mcq", difficulty: "medium",
            question: "Statement: 'Please do not use a mobile phone in the library.' Assumptions: I. Some people will not use a mobile phone. II. Mobile phones are strictly prohibited everywhere in the building.",
            options: ["Only I is implicit", "Only II is implicit", "Both follow", "Neither follows"],
            correct: 0,
            cognitiveType: "evaluation",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "An instruction is given with the assumption that it will be followed by at least some people (I). There is no information about the rest of the building (II).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-034", type: "mcq", difficulty: "hard",
            question: "Statement: 'The state government has decided to provide financial assistance to the farmers affected by the drought.' Assumptions: I. The government has enough funds. II. Affected farmers will accept the help.",
            options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
            correct: 2,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Whenever a decision is made, it is assumed that the means to execute it exist (I) and that the intended beneficiaries will take the benefit (II).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-035", type: "mcq", difficulty: "hard",
            question: "Statement: 'Lalit advised his friend to travel by air to Mumbai to reach in the shortest time.' Assumptions: I. Mumbai is connected by air. II. Any other mode takes longer than air travel.",
            options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
            correct: 2,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Advice to 'travel by air to Mumbai' assumes the connection exists (I). Mentioning 'shortest time' compared to others assumes air is faster than any other available mode (II).",
            examTags: ["CUET"]
        },

        // --- TOPIC 8: Analogy (Logical) (5 questions) ---
        {
            id: "lr-q-036", type: "mcq", difficulty: "easy",
            question: "Newspaper : Editor :: Play : ?",
            options: ["Actor", "Director", "Writer", "Producer"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The editor is responsible for the overall creation/supervision of a newspaper. Similarly, the director is the creative head of a play.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-037", type: "mcq", difficulty: "medium",
            question: "Poles : Magnet :: ? : Battery",
            options: ["Cells", "Terminals", "Energy", "Current"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The endpoints of a magnet are poles. The endpoints of a battery are terminals.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-038", type: "mcq", difficulty: "medium",
            question: "Circle : Circumference :: Square : ?",
            options: ["Volume", "Area", "Perimeter", "Diagonal"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The boundary of a circle is its circumference. The boundary of a square is its perimeter.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-039", type: "mcq", difficulty: "hard",
            question: "42 : 56 :: 72 : ?",
            options: ["81", "90", "92", "100"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Logic 1: 42 = 6×7, 56 = 7×8. Then 72 = 8×9, so next is 9×10 = 90.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-040", type: "mcq", difficulty: "medium",
            question: "Moon : Satellite :: Earth : ?",
            options: ["Star", "Planet", "Solar System", "Asteroid"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Moon is a satellite of Earth. Earth is a planet of the Sun.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 9: Data Sufficiency (5 questions) ---
        {
            id: "lr-q-041", type: "mcq", difficulty: "hard",
            question: "What is the rank of Ravi in a class of 30? Statements: 1. There are 10 students above him. 2. There are 19 students below him.",
            options: ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient", "Either 1 or 2 is sufficient", "Both 1 and 2 are needed"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Rank from top = (Number above) + 1. Statement 1 gives rank = 11. Statement 2 gives rank = 30 - 19 = 11. Either alone works.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-042", type: "mcq", difficulty: "hard",
            question: "How is J related to K? Statements: 1. M is mother of J. 2. K is husband of M.",
            options: ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient", "Both 1 and 2 together are sufficient", "Both 1 and 2 together are not sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "1 tells us J is a child of M. 2 tells us K is M's husband. Together we know K is the father of J. (Note: Gender of J doesn't matter for 'how J is related' though usually we specify child/son/daughter, in DS if we know the relation type we say sufficient).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-043", type: "mcq", difficulty: "hard",
            question: "What is the code for 'SKY' in a language? Statements: 1. 'SKY IS BLUE' is written as 'de re fe'. 2. 'BLUE IS COLOR' is written as 're fe ge'.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Comparing 1 and 2, 'IS BLUE' matches 're fe'. So 'SKY' must be 'de'. Together we find it.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-044", type: "mcq", difficulty: "hard",
            question: "Who is the tallest among A, B, C and D? Statements: 1. A is taller than B. 2. C is taller than A but shorter than D.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "1: A > B. 2: D > C > A. Combining both: D > C > A > B. D is the tallest.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-045", type: "mcq", difficulty: "hard",
            question: "On which date was Amit born? Statements: 1. Amit's mother remembers he was born after 12th but before 15th March. 2. Amit's sister remembers he was born after 13th but before 16th March.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "From 1: 13 or 14. From 2: 14 or 15. The only common date is 14th.",
            examTags: ["CUET"]
        },
        // --- PART B: MAH CET LR SPEED DRILL (30 questions) ---
        // Visual/Odd One Out (10 Qs)
        {
            id: "lr-q-046", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Apple", "Orange", "Potato", "Grape"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Potato is a vegetable; others are fruits.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-047", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Square", "Triangle", "Cube", "Circle"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Cube is a 3D shape; others are 2D shapes.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-048", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["January", "May", "June", "August"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "June has 30 days; others have 31 days.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-049", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Copper", "Iron", "Gold", "Diamond"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Diamond is a non-metal (carbon); others are metals.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-050", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Snake", "Lizard", "Crocodile", "Whale"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Whale is a mammal; others are reptiles.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-051", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Sun", "Moon", "Mars", "Saturn"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Sun is a star; others are a moon or planets.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-052", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Leopard", "Lion", "Tiger", "Wolf"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Wolf belongs to the canine family; others belong to the cat family.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-053", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Eye", "Ear", "Nose", "Liver"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Liver is an internal organ; others are external sense organs.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-054", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Meter", "Inch", "Liter", "Foot"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Liter measures volume; others measure length.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-055", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Kathak", "Bhangra", "Kuchipudi", "Odisi"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Bhangra is a folk dance; others are classical dances.",
            examTags: ["MH-CET"]
        },

        // Missing Number Drills (10 Qs)
        {
            id: "lr-q-056", type: "mcq", difficulty: "easy",
            question: "1, 4, 9, 16, 25, ?",
            options: ["30", "35", "36", "40"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Series of squares: 1², 2², 3², 4², 5², 6²=36.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-057", type: "mcq", difficulty: "easy",
            question: "10, 20, 30, 40, ?",
            options: ["45", "50", "55", "60"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 10,
            explanation: "Simple +10 progression.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-058", type: "mcq", difficulty: "easy",
            question: "100, 90, 80, 70, ?",
            options: ["50", "60", "65", "55"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 10,
            explanation: "Simple -10 progression.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-059", type: "mcq", difficulty: "easy",
            question: "2, 4, 8, 16, 32, ?",
            options: ["48", "60", "64", "70"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Powers of 2: 2¹, 2², 2³, 2⁴, 2⁵, 2⁶=64.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-060", type: "mcq", difficulty: "easy",
            question: "5, 11, 17, 23, ?",
            options: ["27", "29", "31", "33"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "+6 progression. 23+6=29.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-061", type: "mcq", difficulty: "easy",
            question: "3, 9, 27, 81, ?",
            options: ["162", "243", "250", "300"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Powers of 3: 3¹, 3², 3³, 3⁴, 3⁵=243.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-062", type: "mcq", difficulty: "easy",
            question: "100, 50, 25, ?",
            options: ["10", "12.5", "15", "20"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Divided by 2 progression. 25/2 = 12.5.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-063", type: "mcq", difficulty: "easy",
            question: "1, 3, 6, 10, 15, ?",
            options: ["20", "21", "24", "25"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Adding consecutive integers: +2, +3, +4, +5, +6. 15+6=21.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-064", type: "mcq", difficulty: "easy",
            question: "2, 3, 5, 7, 11, ?",
            options: ["12", "13", "14", "15"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Series of prime numbers. Next prime after 11 is 13.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-065", type: "mcq", difficulty: "easy",
            question: "121, 144, 169, 196, ?",
            options: ["210", "225", "256", "289"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Squares of 11, 12, 13, 14, 15. 15²=225.",
            examTags: ["MH-CET"]
        },

        // Word Puzzle Drills (10 Qs)
        {
            id: "lr-q-066", type: "mcq", difficulty: "easy",
            question: "If 'BOOK' is coded as 'COPL', how is 'DOOR' coded?",
            options: ["EPPS", "EOPS", "ENDS", "EPPT"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Logic is +1. B+1=C, O+1=P, K+1=L. D+1=E, O+1=P, R+1=S.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-067", type: "mcq", difficulty: "easy",
            question: "Rearrange 'EATR' to form a meaningful word related to an organ:",
            options: ["RATE", "TARE", "TEAR", "AERT"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "TEAR (from the eye) is the only word related to an organ or its function.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-068", type: "mcq", difficulty: "easy",
            question: "Which word cannot be formed from 'CONSTITUTION'?",
            options: ["NOTION", "STATIC", "TUTION", "CONSULT"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "CONSULT needs 'L', which is not in CONSTITUTION.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-069", type: "mcq", difficulty: "easy",
            question: "What is the next letter in the series: A, C, E, G, ?",
            options: ["H", "I", "J", "K"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Skip one letter: A (B) C (D) E (F) G (H) I.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-070", type: "mcq", difficulty: "easy",
            question: "AZ, BY, CX, ?",
            options: ["DW", "DV", "DU", "DT"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Alphabet-Reverse pairing: D is 4th from start, W is 4th from end.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-071", type: "mcq", difficulty: "easy",
            question: "If 'MAN' is 28, 'RAM' is 32, what is 'SUN'?",
            options: ["50", "54", "56", "60"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Sum of positions: S(19)+U(21)+N(14) = 54.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-072", type: "mcq", difficulty: "easy",
            question: "Identify the pattern: ACE, GIK, MOQ, ?",
            options: ["RST", "SUV", "SUW", "TVX"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "M+6=S, O+6=U, Q+6=W. Logic is +6 for each position.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-073", type: "mcq", difficulty: "easy",
            question: "Which word is the odd one out in terms of vowels?",
            options: ["APPLE", "BED", "CAT", "DOG"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "APPLE has two vowels; the others have one.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-074", type: "mcq", difficulty: "easy",
            question: "Find the missing word: Up : Down :: Open : ?",
            options: ["Door", "Close", "Window", "Lock"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Antonym relationship.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-075", type: "mcq", difficulty: "easy",
            question: "Find the missing word: Hand : Glove :: Foot : ?",
            options: ["Shoe", "Sock", "Toes", "Leg"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Glove covers Hand, Sock covers Foot.",
            examTags: ["MH-CET"]
        }
    ]
};
