// src/data/computer-awareness/number-systems.data.js
// MAH BBA CET - COMPUTER AWARENESS - NUMBER SYSTEMS MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const numberSystemsData = {
    subject: "Computer Awareness",
    chapter: "Number Systems",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "num-fc-001", term: "Binary", definition: "Base-2 system using digits 0 and 1." },
        { id: "num-fc-002", term: "Decimal", definition: "Base-10 system using digits 0-9." },
        { id: "num-fc-003", term: "Hexadecimal", definition: "Base-16 system using 0-9 and A-F (A=10, F=15)." },
        { id: "num-fc-004", term: "Octal", definition: "Base-8 system using digits 0-7." },
        { id: "num-fc-005", term: "Bit", definition: "Smallest unit of data (0 or 1)." },
        { id: "num-fc-006", term: "Byte", definition: "Group of 8 bits." },
        { id: "num-fc-007", term: "Nibble", definition: "Group of 4 bits (half a byte)." },
        { id: "num-fc-008", term: "1 + 1 (Binary)", definition: "Equals 10₂ (0 with a carry of 1)." },
        { id: "num-fc-009", term: "FF (Hex)", definition: "Equals 255 in decimal." },
        { id: "num-fc-010", term: "Base of Hex", definition: "The base of the hexadecimal system is 16." }
    ],
    questions: [
        // --- Group 1: Binary to Decimal (6 Qs) ---
        {
            id: "num-q-001", type: "mcq", difficulty: "medium",
            question: "Convert the binary number 1010₂ to decimal:",
            options: ["8", "10", "12", "14"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1010₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰) = 8 + 0 + 2 + 0 = 10.",
            solution_steps: [
                "Position 3: 1 × 2³ = 8",
                "Position 2: 0 × 2² = 0",
                "Position 1: 1 × 2¹ = 2",
                "Position 0: 0 × 2⁰ = 0",
                "Sum: 8 + 0 + 2 + 0 = 10"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-002", type: "mcq", difficulty: "medium",
            question: "What is the decimal equivalent of binary 1111₂?",
            options: ["7", "13", "15", "16"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1111₂ = 8 + 4 + 2 + 1 = 15.",
            solution_steps: [
                "1 × 8 = 8",
                "1 × 4 = 4",
                "1 × 2 = 2",
                "1 × 1 = 1",
                "Total = 15"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-003", type: "mcq", difficulty: "medium",
            question: "Convert 1101₂ to decimal:",
            options: ["11", "12", "13", "14"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1101₂ = 8 + 4 + 0 + 1 = 13.",
            solution_steps: [
                "8 + 4 + 0 + 1 = 13"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-004", type: "mcq", difficulty: "medium",
            question: "Convert 10011₂ to decimal:",
            options: ["17", "19", "21", "23"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "10011₂ = 16 + 0 + 0 + 2 + 1 = 19.",
            solution_steps: [
                "16 + 0 + 0 + 2 + 1 = 19"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-005", type: "mcq", difficulty: "hard",
            question: "What is the decimal value of binary 1100100₂?",
            options: ["64", "100", "128", "256"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1100100₂ = 64 + 32 + 0 + 0 + 4 + 0 + 0 = 100.",
            solution_steps: [
                "64 + 32 + 4 = 100"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-006", type: "mcq", difficulty: "medium",
            question: "The binary number 1000₂ is equal to which decimal number?",
            options: ["2", "4", "8", "16"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1000₂ has a '1' only in the 2³ position, which is 8.",
            solution_steps: ["1 × 2³ = 8"],
            examTags: ["MH-CET"]
        },

        // --- Group 2: Decimal to Binary (6 Qs) ---
        {
            id: "num-q-007", type: "mcq", difficulty: "medium",
            question: "Convert decimal 7 to binary:",
            options: ["101", "110", "111", "1000"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "7 = 4 + 2 + 1, which corresponds to binary 111.",
            solution_steps: [
                "7 ÷ 2 = 3 R1",
                "3 ÷ 2 = 1 R1",
                "1 ÷ 2 = 0 R1",
                "Reading remainders bottom-up: 111"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-008", type: "mcq", difficulty: "medium",
            question: "What is the binary representation of decimal 16?",
            options: ["1000", "10000", "1111", "0111"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "16 is exactly 2⁴, so it is 1 followed by four zeros.",
            solution_steps: ["16 = 2⁴ → 10000₂"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-009", type: "mcq", difficulty: "medium",
            question: "Convert decimal 25 to binary:",
            options: ["11001", "11011", "10101", "11100"],
            correct: 0,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "25 = 16 + 8 + 1, which is 11001₂.",
            solution_steps: [
                "25 ÷ 2 = 12 R1",
                "12 ÷ 2 = 6 R0",
                "6 ÷ 2 = 3 R0",
                "3 ÷ 2 = 1 R1",
                "1 ÷ 2 = 0 R1",
                "Result: 11001"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-010", type: "mcq", difficulty: "medium",
            question: "What is decimal 10 in binary?",
            options: ["1010", "1100", "1001", "1111"],
            correct: 0,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "10 = 8 + 2 → 1010₂.",
            solution_steps: ["8 + 2 = 1010"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-011", type: "mcq", difficulty: "medium",
            question: "Convert decimal 15 to binary:",
            options: ["1010", "1111", "1000", "1100"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "15 = 8 + 4 + 2 + 1 → 1111₂.",
            solution_steps: ["8+4+2+1 = 1111"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-012", type: "mcq", difficulty: "hard",
            question: "Convert decimal 100 to binary:",
            options: ["110100", "1100100", "1110011", "1000000"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "100 = 64 + 32 + 4 → 1100100₂.",
            solution_steps: [
                "1 × 64 = 64",
                "1 × 32 = 32",
                "0 × 16 = 0",
                "0 × 8 = 0",
                "1 × 4 = 4",
                "0 × 2 = 0",
                "0 × 1 = 0",
                "Sum = 100"
            ],
            examTags: ["MH-CET"]
        },

        // --- Group 3: Hexadecimal to Decimal (4 Qs) ---
        {
            id: "num-q-013", type: "mcq", difficulty: "medium",
            question: "What is the decimal value of the Hexadecimal digit 'A'?",
            options: ["1", "10", "11", "12"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "In Hex, A=10, B=11, C=12, D=13, E=14, F=15.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-014", type: "mcq", difficulty: "medium",
            question: "What is the decimal value of Hexadecimal 'F'?",
            options: ["15", "16", "10", "0"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "F is the highest single digit in Hex, representing 15.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-015", type: "mcq", difficulty: "hard",
            question: "Convert the Hexadecimal number 1F to decimal:",
            options: ["16", "31", "15", "25"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1F₁₆ = (1 × 16¹) + (15 × 16⁰) = 16 + 15 = 31.",
            solution_steps: ["1 × 16 = 16", "F = 15", "16 + 15 = 31"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-016", type: "mcq", difficulty: "hard",
            question: "What is Hexadecimal 10 in decimal?",
            options: ["10", "16", "1", "0"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "10₁₆ = (1 × 16) + 0 = 16.",
            solution_steps: ["1 × 16 = 16", "0 × 1 = 0", "Sum = 16"],
            examTags: ["MH-CET"]
        },

        // --- Group 4: Decimal to Hexadecimal (4 Qs) ---
        {
            id: "num-q-017", type: "mcq", difficulty: "medium",
            question: "Convert decimal 11 to Hexadecimal:",
            options: ["A", "B", "C", "11"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Decimal 11 is represented by 'B' in Hex.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-018", type: "mcq", difficulty: "medium",
            question: "Convert decimal 15 to Hexadecimal:",
            options: ["A", "E", "F", "10"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Decimal 15 is 'F'.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-019", type: "mcq", difficulty: "hard",
            question: "What is decimal 255 in Hexadecimal?",
            options: ["EE", "FE", "FF", "AA"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "255 ÷ 16 = 15 R15. Both 15s are 'F', so result is FF.",
            solution_steps: ["255 / 16 = 15 R 15", "15 = F", "Result = FF"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-020", type: "mcq", difficulty: "hard",
            question: "Convert decimal 32 to Hexadecimal:",
            options: ["10", "20", "2A", "F2"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "32 ÷ 16 = 2 R0. So result is 20.",
            solution_steps: ["32 / 16 = 2 R 0", "Result = 20"],
            examTags: ["MH-CET"]
        },

        // --- Group 5: Conceptual Number System (6 Qs) ---
        {
            id: "num-q-021", type: "mcq", difficulty: "easy",
            question: "How many unique digits are used in the Octal system?",
            options: ["2", "8", "10", "16"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Octal uses base-8 (digits 0-7).",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-022", type: "mcq", difficulty: "easy",
            question: "The base of the Octal number system is:",
            options: ["2", "8", "10", "16"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Base of Octal is 8.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-023", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT a valid digit in the Octal system?",
            options: ["0", "7", "8", "1"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Octal digits only range from 0 to 7. '8' is not valid.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-024", type: "mcq", difficulty: "easy",
            question: "Computer memory addresses are most commonly represented in which system?",
            options: ["Decimal", "Hexadecimal", "Octal", "Roman"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hexadecimal is used for compact representation of binary addresses.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-025", type: "mcq", difficulty: "medium",
            question: "In which number system is 'A1' a valid number?",
            options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
            correct: 3,
            cognitiveType: "identification", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Letters A-F are unique to the Hexadecimal system.",
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-026", type: "mcq", difficulty: "easy",
            question: "A group of 4 bits is known as a:",
            options: ["Byte", "Nibble", "Word", "Gigabit"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A nibble is exactly 4 bits or half a byte.",
            examTags: ["MH-CET"]
        },

        // --- Group 6: Binary Arithmetic (4 Qs) ---
        {
            id: "num-q-027", type: "mcq", difficulty: "medium",
            question: "In binary addition, what is 1₂ + 1₂?",
            options: ["2₂", "10₂", "11₂", "0₂"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1 + 1 = 2₁₀, which is 10 in binary (0 with a carry of 1).",
            solution_steps: ["1 + 1 = 10₂"],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-028", type: "mcq", difficulty: "hard",
            question: "What is the result of binary addition: 1010₂ + 0101₂?",
            options: ["10101₂", "1111₂", "10000₂", "1100₂"],
            correct: 1,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "1010 (10) + 0101 (5) = 1111 (15).",
            solution_steps: [
                "  1010",
                "+ 0101",
                "------",
                "  1111"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-029", type: "mcq", difficulty: "hard",
            question: "What is 1111₂ + 0001₂?",
            options: ["1112₂", "11111₂", "10000₂", "11110₂"],
            correct: 2,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "15 + 1 = 16, which is 10000 in binary.",
            solution_steps: [
                "Carry ripples all the way left:",
                "1111 + 1 = 10000"
            ],
            examTags: ["MH-CET"]
        },
        {
            id: "num-q-030", type: "mcq", difficulty: "hard",
            question: "Subtract: 1000₂ – 0001₂:",
            options: ["0111₂", "0001₂", "1001₂", "1111₂"],
            correct: 0,
            cognitiveType: "numerical", psychometricTemplate: "numerical",
            timePresure: "speed", speedTarget: 60, negativeMarking: false,
            explanation: "8 - 1 = 7, which is 0111 (or 111) in binary.",
            solution_steps: ["8 - 1 = 7₁₀ → 0111₂"],
            examTags: ["MH-CET"]
        }
    ]
};
