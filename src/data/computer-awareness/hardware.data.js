// src/data/computer-awareness/hardware.data.js
// MAH BBA CET - COMPUTER AWARENESS - HARDWARE MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const hardwareData = {
    subject: "Computer Awareness",
    chapter: "Hardware & Architecture",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "hw-fc-001", term: "Input Devices", definition: "Mouse, Keyboard, Scanner, Microphone, Webcam, Joystick." },
        { id: "hw-fc-002", term: "Output Devices", definition: "Monitor, Printer, Plotter, Speaker, Projector." },
        { id: "hw-fc-003", term: "Both I/O", definition: "Touchscreen, Modem." },
        { id: "hw-fc-004", term: "RAM", definition: "Random Access Memory - Volatile, Primary memory." },
        { id: "hw-fc-005", term: "ROM", definition: "Read Only Memory - Non-volatile, stores BIOS." },
        { id: "hw-fc-006", term: "Cache", definition: "Fastest memory, sits between CPU and RAM." },
        { id: "hw-fc-007", term: "Registers", definition: "Small, ultra-fast storage inside CPU." },
        { id: "hw-fc-008", term: "ALU", definition: "Arithmetic Logic Unit - Performs calculations and logic." },
        { id: "hw-fc-009", term: "CU", definition: "Control Unit - Coordinates and directs operations." },
        { id: "hw-fc-010", term: "SSD", definition: "Solid State Drive - Faster than HDD, no moving parts." }
    ],
    questions: [
        // --- TOPIC 1: Input and Output Devices (15 Questions) ---
        {
            id: "hw-q-001", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an output device?",
            options: ["Monitor", "Printer", "Scanner", "Speaker"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Monitor, Printer, and Speaker are output devices. Scanner is an INPUT device used to digitize documents.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-002", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an input device?",
            options: ["Mouse", "Keyboard", "Plotter", "Webcam"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Mouse, Keyboard, and Webcam are input devices. Plotter is an OUTPUT device used for large-scale graphics.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-003", type: "mcq", difficulty: "easy",
            question: "Identify the device that is NOT an output device:",
            options: ["Projector", "Headphones", "Microphone", "Monitor"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Microphone is an input device (audio), whereas others are output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-004", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT an input device?",
            options: ["Joystick", "Barcode Reader", "Braille Reader", "Light Pen"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Braille Reader is an output device for the visually impaired. The others are input devices.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-005", type: "mcq", difficulty: "easy",
            question: "Which of these is NOT an output device?",
            options: ["Dot Matrix Printer", "OMR Reader", "LCD Monitor", "Plotter"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "OMR (Optical Mark Recognition) is an input device used for checking exam sheets.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-006", type: "mcq", difficulty: "easy",
            question: "Which of the following belongs only to the INPUT device category?",
            options: ["Biometric Scanner", "Touchscreen", "Modem", "Sound Card"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Biometric scanner is purely input. Touchscreen and Modem are both input and output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-007", type: "mcq", difficulty: "easy",
            question: "Which of the following is an INPUT device?",
            options: ["Monitor", "Plotter", "Digitizer", "Printer"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Digitizer is an input device (drawing tablet). Others are output.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-008", type: "mcq", difficulty: "easy",
            question: "Which of the following is an OUTPUT device?",
            options: ["Trackball", "Scanner", "Modem", "Projector"],
            correct: 3,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Projector is an output device. Trackball and Scanner are input. Modem is both.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-009", type: "mcq", difficulty: "easy",
            question: "Which pair contains ONLY output devices?",
            options: ["Monitor & Mouse", "Printer & Plotter", "Scanner & Speaker", "Keyboard & Projector"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Printer and Plotter are both output devices.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-010", type: "mcq", difficulty: "easy",
            question: "Which device converts physical documents into digital format?",
            options: ["Printer", "Scanner", "Plotter", "Monitor"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Scanner is used to digitize physical paperwork.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-011", type: "mcq", difficulty: "easy",
            question: "Which device is used to produce large-scale engineering drawings and vector graphics?",
            options: ["DMP Printer", "Inkjet Printer", "Plotter", "Scanner"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Plotters are specialized output devices for high-quality, large-format engineering and architectural drawings.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-012", type: "mcq", difficulty: "easy",
            question: "Which device can function as BOTH an input and an output device?",
            options: ["Keyboard", "Mouse", "Modem", "Scanner"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Modem sends (output) and receives (input) data. Touchscreens also share this dual role.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-013", type: "mcq", difficulty: "easy",
            question: "In OMR, what does the 'R' stand for?",
            options: ["Reader", "Recognition", "Random", "Record"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "OMR stands for Optical Mark Recognition.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-014", type: "mcq", difficulty: "easy",
            question: "Which input device is typically used for playing video games?",
            options: ["Scanner", "Joystick", "OMR", "Biometric"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Joysticks are primary input devices for flight simulators and various gaming applications.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-015", type: "mcq", difficulty: "easy",
            question: "Which of the following is used to input text and characters into a computer?",
            options: ["Plotter", "Monitor", "Keyboard", "Speaker"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Keyboard is the primary text-input device.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Memory Hierarchy (15 Questions) ---
        {
            id: "hw-q-016", type: "mcq", difficulty: "medium",
            question: "Which type of memory loses its data when the power is switched off?",
            options: ["ROM", "SSD", "RAM", "HDD"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "RAM is volatile memory; it requires a constant power supply to retain data.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-017", type: "mcq", difficulty: "medium",
            question: "Which of the following is a type of NON-volatile memory?",
            options: ["RAM", "Cache", "ROM", "Registers"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ROM (Read Only Memory) is non-volatile; it retains data without power.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-018", type: "mcq", difficulty: "easy",
            question: "Where is the computer's 'BIOS' typically stored?",
            options: ["RAM", "Hard Disk", "ROM", "Cache"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "BIOS (Basic Input/Output System) is stored in the ROM chip to facilitate the startup process.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-019", type: "mcq", difficulty: "medium",
            question: "Is 'Cache memory' volatile or non-volatile?",
            options: ["Volatile", "Non-volatile", "Both", "Depends on OS"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache is high-speed volatile memory, similar to RAM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-020", type: "mcq", difficulty: "medium",
            question: "Which of the following is the FASTEST memory in a computer system?",
            options: ["RAM", "Hard Disk", "Cache", "SSD"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache is faster than RAM and way faster than secondary storage like SSD/HDD. (Note: Registers are even faster if listed).",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-021", type: "mcq", difficulty: "hard",
            question: "Identify the fastest storage unit among the following:",
            options: ["Cache", "Registers", "RAM", "Secondary Storage"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Registers, located inside the CPU, are the absolute fastest storage locations in the hierarchy.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-022", type: "mcq", difficulty: "medium",
            question: "Which memory acts as a 'bridge' or buffer between the CPU and the RAM?",
            options: ["ROM", "Cache", "HDD", "Tape Drive"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cache memory stores frequently used data to speed up CPU access, bridging the gap between CPU speed and RAM speed.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-023", type: "mcq", difficulty: "medium",
            question: "Why is an SSD faster than an HDD?",
            options: ["Because it has more disks", "Because it has no moving parts", "Because it is smaller", "Because it uses lasers"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SSDs use electronic flash memory and have no moving parts, unlike spinning HDDs.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-024", type: "mcq", difficulty: "medium",
            question: "'Virtual Memory' is actually a part of:",
            options: ["CPU", "Registers", "Secondary Storage", "ROM"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Virtual memory is a section of the hard drive (secondary storage) used by the system as an overflow for the RAM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-025", type: "mcq", difficulty: "medium",
            question: "Which of the following is considered PRIMARY memory?",
            options: ["RAM", "HDD", "Pen Drive", "Magnetic Tape"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "RAM and ROM are primary memories. HDD, Tapes, and Pen Drives are secondary storage.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-026", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT a type of ROM?",
            options: ["PROM", "EPROM", "EEPROM", "DRAM"],
            correct: 3,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "DRAM stands for Dynamic Random Access Memory, which is a type of RAM, not ROM.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-027", type: "mcq", difficulty: "easy",
            question: "Which storage device has spinning disks and moving physical heads?",
            options: ["SSD", "RAM", "HDD", "Flash Drive"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HDD (Hard Disk Drive) uses mechanical spinning platters.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-028", type: "mcq", difficulty: "medium",
            question: "Which memory is directly accessed by the CPU?",
            options: ["External Hard Drive", "DVD", "RAM", "Cloud Storage"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CPU directly accesses primary memory (RAM, Registers, Cache). Secondary storage access requires moving data to RAM first.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-029", type: "mcq", difficulty: "easy",
            question: "Which of the following is used to store the computer's firmware/start-up instructions?",
            options: ["RAM", "ROM", "Monitor", "UPS"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ROM stores the firmware and BIOS necessary to boot the computer.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-030", type: "mcq", difficulty: "medium",
            question: "Arrange the following in order of speed (Slowest to Fastest):",
            options: [
                "HDD < RAM < Cache < Registers",
                "RAM < Cache < HDD < Registers",
                "Registers < Cache < RAM < HDD",
                "HDD < Cache < RAM < Registers"
            ],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Secondary (HDD) is slowest, followed by Primary (RAM), then Cache, and Registers are the fastest.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: CPU Architecture (15 Questions) ---
        {
            id: "hw-q-031", type: "mcq", difficulty: "easy",
            question: "Which unit of the CPU performs logic comparisons like 'greater than' or 'equal to'?",
            options: ["Control Unit", "ALU", "Register", "Bus"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The ALU (Arithmetic Logic Unit) executes all arithmetic and logical operations.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-032", type: "mcq", difficulty: "easy",
            question: "Which part of the CPU performs arithmetic operations like addition and subtraction?",
            options: ["Memory Unit", "Control Unit", "ALU", "Monitor"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Arithmetic operations (+, -, *, /) are the primary job of the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-033", type: "mcq", difficulty: "easy",
            question: "In the context of the CPU, what does ALU stand for?",
            options: [
                "Arithmetic Logic Unit",
                "Algorithmic Log Unit",
                "Advanced Logical Unit",
                "Average Logic Unit"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "ALU stands for Arithmetic Logic Unit.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-034", type: "mcq", difficulty: "easy",
            question: "What does the 'L' in ALU stand for?",
            options: ["Linear", "Link", "Logic", "Load"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "L stands for Logic.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-035", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT a function of the ALU?",
            options: ["Addition", "Logical Comparison", "Fetching Instructions", "Subtraction"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Fetching instructions is the responsibility of the Control Unit (CU), not the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-036", type: "mcq", difficulty: "medium",
            question: "Which CPU unit coordinates and directs all computer operations and data flow?",
            options: ["ALU", "Control Unit", "Registers", "Bus"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit (CU) acts as the manager/coordinator of the CPU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-037", type: "mcq", difficulty: "medium",
            question: "The decoding of instructions is handled by which part of the CPU?",
            options: ["Registers", "ALU", "Control Unit", "I/O Unit"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit decodes the instruction to determine what needs to be done.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-038", type: "mcq", difficulty: "medium",
            question: "Which unit does NOT process data but controls the sequence of data flow?",
            options: ["Control Unit", "ALU", "Hard Disk", "RAM"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CU manages the traffic and timing but doesn't do the actual math (ALU) or storage (RAM).",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-039", type: "mcq", difficulty: "medium",
            question: "The 'fetch-decode-execute' cycle is managed primarily by the:",
            options: ["ALU", "Registers", "Control Unit", "Monitor"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Control Unit manages this cycle for every instruction.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-040", type: "mcq", difficulty: "hard",
            question: "Which register stores the memory address of the NEXT instruction to be executed?",
            options: ["Accumulator", "Program Counter", "Instruction Register", "Data Register"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Program Counter (PC) holds the address of the next instruction.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-041", type: "mcq", difficulty: "medium",
            question: "Which bus carries the actual data between the CPU and memory components?",
            options: ["Address Bus", "Data Bus", "Control Bus", "Seat Bus"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Data Bus is responsible for moving the actual data bits.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-042", type: "mcq", difficulty: "medium",
            question: "An 'Accumulator' is a specialized type of:",
            options: ["Primary Memory", "External Drive", "Register", "Bus"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Accumulator is a general-purpose register used by the ALU.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-043", type: "mcq", difficulty: "easy",
            question: "Which of the following is the fastest storage location INSIDE the computer?",
            options: ["Registers", "L1 Cache", "L2 Cache", "RAM"],
            correct: 0,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Registers are located directly within the CPU and are faster than any level of cache.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-044", type: "mcq", difficulty: "medium",
            question: "Which bus is UNIDIRECTIONAL (only goes one way from CPU)?",
            options: ["Data Bus", "Address Bus", "Control Bus", "USB"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Address Bus is one-way (CPU to components). Data and Control buses are typically bi-directional.",
            examTags: ["MH-CET"]
        },
        {
            id: "hw-q-045", type: "mcq", difficulty: "easy",
            question: "What is the primary function of the CPU in a computer system?",
            options: ["Produce visual output", "Provide power to the motherboard", "Execute instructions and process data", "Store files permanently"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The CPU is the 'brain' that processes all program instructions.",
            examTags: ["MH-CET"]
        }
    ]
};
