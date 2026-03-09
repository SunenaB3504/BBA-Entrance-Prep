// src/data/general-aptitude/general-science.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const generalScienceData = {
    subject: "General Knowledge",
    chapter: "General Science",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "physics-logic",
                title: "1. Physics Essentials",
                content: {
                    coreConcept: "Physics in GAT exams focuses on everyday phenomena, Units of Measurement, and Newton's Laws. It's about understanding the 'how' behind movements and electricity.",
                    formulaBank: "1. Motion: S = ut + 1/2at² | V² - U² = 2aS\n2. Electricity: V = IR (Ohm's Law) | P = VI\n3. Optics: 1/f = 1/v + 1/u (Mirror Formula)",
                    logic: "The Law of Inertia (Newton's 1st Law):\nAn object won't change its motion unless a force acts on it. If you're in a car that stops suddenly, you jerk forward because your body wants to keep moving. This is 'Inertia of Motion'.",
                    traps: "TRAP: Mass vs Weight\nMass is constant everywhere (kg). Weight changes based on gravity (Newton). On the moon, your mass is same, but your weight is 1/6th.",
                    examples: [
                        { q: "Unit of Power?", a: "Watt (W). (1 Watt = 1 Joule/second)" },
                        { q: "Why do we use fuse wire?", a: "To prevent high current from damaging appliances (it has low melting point)." }
                    ],
                    speedSummary: "- Density of Water: 1 g/cm³.\n- Speed of Light: 3 × 10⁸ m/s."
                }
            },
            {
                id: "chemistry-logic",
                title: "2. Chemistry in Daily Life",
                content: {
                    coreConcept: "Focus on the Periodic Table, pH Scale, and chemical names of common substances (like Baking Soda or Bleaching Powder).",
                    formulaBank: "1. pH Scale: 0 (Acid) ----------- 7 (Neutral) ----------- 14 (Base)\n2. Common Names:\n- NaCl: Table Salt\n- NaHCO₃: Baking Soda\n- CaO: Quick Lime",
                    logic: "Acid-Base Reactions:\nWhen an acid reacts with a base, it always produces Salt + Water. This is 'Neutralization'. Example: Antacid tablets (base) neutralize stomach acid.",
                    traps: "TRAP: The pH Direction\nMoving from pH 5 to pH 4 makes the solution 10x MORE acidic. Lower number = Stronger Acid. Higher number = Stronger Base.",
                    examples: [
                        { q: "pH of pure water?", a: "7 (Neutral)." },
                        { q: "Chemical name of Vitamin C?", a: "Ascorbic Acid." }
                    ],
                    speedSummary: "- Isotopes: Same protons, different neutrons.\n- Universal Solvent: Water."
                }
            },
            {
                id: "biology-logic",
                title: "3. Human Biology & Nutrients",
                content: {
                    coreConcept: "Understanding the Human Body (Circulation, Digestion), Vitamins, and Plant processes (Photosynthesis).",
                    formulaBank: "1. Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n2. Blood Groups: AB+ (Universal Recipient), O- (Universal Donor)\n3. Vitamins: A (Eyes), B12 (Nerves), C (Immunity), D (Bones)",
                    logic: "The Energy Currency (ATP):\nInside cells, mitochondria act as power plants. They break down glucose to release energy stored in molecules called ATP (Adenosine Triphosphate).",
                    traps: "TRAP: Xylem vs Phloem\nXylem carries Water (W to X). Phloem carries Food (F to P). Don't mix them up in plant biology questions.",
                    examples: [
                        { q: "Hardest part of human body?", a: "Tooth Enamel." },
                        { q: "Night blindness is caused by deficiency of?", a: "Vitamin A." }
                    ],
                    speedSummary: "- Largest Organ: Skin.\n- Powerhouse of Cell: Mitochondria."
                }
            }
        ]
    },

    flashcards: [
        { id: "gs-fc-001", term: "Newton's First Law", definition: "An object remains at rest or in uniform motion unless acted upon by an external force (Inertia)", formula: null, example: "Passenger jerking forward when a bus stops" },
        { id: "gs-fc-002", term: "Ohm's Law", definition: "Current is directly proportional to voltage across a conductor", formula: "V = IR", example: "Calculating resistance in a circuit" },
        { id: "gs-fc-003", term: "pH Scale", definition: "Measures acidity and alkalinity. 7 is neutral, <7 is acidic, >7 is basic", formula: "pH = -log[H+]", example: "Lemon juice (pH ~2), Pure water (pH 7)" },
        { id: "gs-fc-004", term: "Photosynthesis", definition: "Process by which plants convert CO2 and water into glucose using sunlight", formula: "6CO2 + 6H2O + light → C6H12O6 + 6O2", example: "Green leaves in sunlight" },
        { id: "gs-fc-005", term: "Isotopes", definition: "Atoms of same element with same atomic number but different mass numbers", formula: null, example: "Carbon-12 and Carbon-14" },
        { id: "gs-fc-006", term: "Universal Solvent", definition: "Water (H2O) — because it dissolves more substances than any other liquid", formula: null, example: "Salt or sugar in water" },
        { id: "gs-fc-007", term: "Reflection Law", definition: "Angle of incidence equals the angle of reflection", formula: "∠i = ∠r", example: "Seeing image in a mirror" }
    ],

    questions: [
        // --- TOPIC 1: Physics (15 questions) ---
        {
            id: "gs-q-001", type: "mcq", difficulty: "medium",
            question: "Which of the following units is used to measure 'Electric Current'?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Ampere is the SI unit of electric current. Volt is for potential difference, Ohm for resistance, and Watt for power.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-002", type: "mcq", difficulty: "hard",
            question: "The weight of an object on the Moon is _____ of its weight on the Earth.",
            options: ["1/2", "1/4", "1/6", "1/8"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 45,
            explanation: "Gravity on Moon is 1/6th of Earth's gravity, so an object weighs 1/6th as much there.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-003", type: "mcq", difficulty: "medium",
            question: "Which mirror is used as a 'Rear View' mirror in vehicles?",
            options: ["Plane mirror", "Concave mirror", "Convex mirror", "Cylindrical mirror"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Convex mirrors provide a wide field of view and always form an erect image, making them ideal for rear-view windows.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-004", type: "mcq", difficulty: "medium",
            question: "Which of the following colors of light has the 'shortest' wavelength?",
            options: ["Red", "Yellow", "Green", "Violet"],
            correct: 3,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Violet has the shortest wavelength and highest frequency. Red has the longest wavelength and lowest frequency in the visible spectrum.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-005", type: "mcq", difficulty: "hard",
            question: "In which medium does sound travel the 'fastest'?",
            options: ["Vacuum", "Air", "Water", "Steel"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 45,
            explanation: "Sound is a mechanical wave and requires a medium. It travels fastest in solids (like steel) due to higher elasticity and density compared to liquids and gases. Sound cannot travel in a vacuum.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-006", type: "mcq", difficulty: "medium",
            question: "The energy possessed by a body due to its 'position' is called:",
            options: ["Kinetic Energy", "Potential Energy", "Chemical Energy", "Thermal Energy"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Potential energy is stored energy based on position (like height). Kinetic energy is based on motion.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-007", type: "mcq", difficulty: "hard",
            question: "A person with 'Hypermetropia' (Long-sightedness) must use which lens?",
            options: ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Convex lens (converging lens) is used to correct hypermetropia by bringing the focus point forward onto the retina.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 2: Chemistry (15 questions) ---
        {
            id: "gs-q-008", type: "mcq", difficulty: "medium",
            question: "Which of the following is known as 'Dry Ice'?",
            options: ["Solid Carbon Dioxide", "Solid Nitrogen", "Frozen Water", "Solid Oxygen"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Dry ice is the solid form of carbon dioxide, which undergoes sublimation (turns directly to gas).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-009", type: "mcq", difficulty: "medium",
            question: "What is the main component of 'Natural Gas' (CNG)?",
            options: ["Ethane", "Propane", "Butane", "Methane"],
            correct: 3,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Methane (CH4) is the primary component of natural gas, typically making up over 90% of it.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-010", type: "mcq", difficulty: "hard",
            question: "Which acid is present in 'Vinegar'?",
            options: ["Citric acid", "Tartaric acid", "Acetic acid", "Lactic acid"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Acetic acid (ethanoic acid) gives vinegar its sour taste and pungent smell.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-011", type: "mcq", difficulty: "medium",
            question: "Which gas is released during the process of 'Photosynthesis'?",
            options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Plants take in Carbon Dioxide and release Oxygen as a byproduct of photosynthesis.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-012", type: "mcq", difficulty: "medium",
            question: "The purest form of 'Carbon' occurring in nature is:",
            options: ["Coal", "Graphite", "Diamond", "Fullerene"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Diamond is the hardest natural substance and the purest crystalline form of carbon.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-013", type: "mcq", difficulty: "medium",
            question: "Which metal is liquid at 'Room Temperature'?",
            options: ["Sodium", "Mercury", "Galium", "Bromine"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Mercury (Hg) is the only metal that is liquid at standard room temperature. Bromine is a liquid non-metal.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-014", type: "mcq", difficulty: "hard",
            question: "An aqueous solution with pH = 3 is:",
            options: ["Strongly Acidic", "Weakly Acidic", "Strongly Basic", "Neutral"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "pH 1-2 is strongly acidic, pH 3-6 is weakly acidic, pH 7 is neutral.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-015", type: "mcq", difficulty: "medium",
            question: "Which substance is used to make the 'tip' of a matchstick?",
            options: ["White Phosphorus", "Red Phosphorus", "Potassium Chlorate", "Antimony trisulphate"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Safety matchsticks use red phosphorus on the striking surface or in the tip mixture.",
            examTags: ["CUET", "MH-CET"]
        },
        // --- TOPIC 3: Biology (15 questions) ---
        {
            id: "gs-q-016", type: "mcq", difficulty: "medium",
            question: "Which of the following is known as the 'Powerhouse of the Cell'?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Mitochondria are responsible for ATP production, providing energy to the cell.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-017", type: "mcq", difficulty: "hard",
            question: "Which pigment gives 'Green Color' to the leaves of plants?",
            options: ["Hemoglobin", "Chlorophyll", "Melanin", "Xanthophyll"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Chlorophyll is the primary pigment involved in photosynthesis, reflecting green light.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-018", type: "mcq", difficulty: "medium",
            question: "Which gas is used for the 'artificial ripening' of green fruits?",
            options: ["Ethane", "Ethylene", "Carbon Dioxide", "Acetylene"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Ethylene is a natural plant hormone used artificially to ripen fruits like mangoes and bananas.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-019", type: "mcq", difficulty: "medium",
            question: "Blood purification in the human body takes place in:",
            options: ["Heart", "Lungs", "Kidneys", "Liver"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The kidneys filter blood, removing waste products and excess water to form urine.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-020", type: "mcq", difficulty: "medium",
            question: "Which of the following contains the maximum amount of 'Vitamin C'?",
            options: ["Lemon", "Apple", "Banana", "Milk"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Citrus fruits like lemons, oranges, and amla are rich sources of Vitamin C (Ascorbic acid).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-021", type: "mcq", difficulty: "hard",
            question: "The deficiency of 'Vitamin A' leads to:",
            options: ["Scurvy", "Rickets", "Night Blindness", "Beriberi"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Vitamin A is essential for healthy vision. Its deficiency causes Xerophthalmia and night blindness.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-022", type: "mcq", difficulty: "medium",
            question: "The largest gland in the human body is:",
            options: ["Thyroid Gland", "Pancreas", "Liver", "Adrenal Gland"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The liver is the largest internal organ and gland in the human body.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-023", type: "mcq", difficulty: "medium",
            question: "Penicillin, an antibiotic, is obtained from a:",
            options: ["Bacterium", "Fungus", "Virus", "Algae"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Penicillin was discovered from the fungus Penicillium chrysogenum by Alexander Fleming.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-024", type: "mcq", difficulty: "medium",
            question: "Universal 'Recipient' blood group is:",
            options: ["O+", "O-", "AB+", "AB-"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "AB+ is the universal recipient, while O- is the universal donor.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-025", type: "mcq", difficulty: "medium",
            question: "RBCs are formed in the:",
            options: ["Liver", "Heart", "Bone Marrow", "Pancreas"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Red Blood Cells (Erythrocytes) are produced in the red bone marrow.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-026", type: "mcq", difficulty: "medium",
            question: "Scurvy is caused due to the deficiency of:",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Scurvy is a disease resulting from a lack of Vitamin C.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-027", type: "mcq", difficulty: "medium",
            question: "In the human body, the pituitary gland is located in the:",
            options: ["Chest", "Abdomen", "Brain", "Neck"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The pituitary gland is located at the base of the brain.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-028", type: "mcq", difficulty: "medium",
            question: "The chemical name of 'Vitamin D' is:",
            options: ["Retinol", "Ascorbic acid", "Calciferol", "Tocopherol"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Calciferol is the chemical name for Vitamin D.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-029", type: "mcq", difficulty: "medium",
            question: "Which of the following is not a 'mammal'?",
            options: ["Whale", "Bat", "Shark", "Elephant"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Shark is a fish; whales and bats are mammals.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-030", type: "mcq", difficulty: "medium",
            question: "Bile is secreted by the:",
            options: ["Gallbladder", "Liver", "Pancreas", "Stomach"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Bile is produced by the liver and stored in the gallbladder.",
            examTags: ["CUET", "MH-CET"]
        },
        // --- TOPIC 4: Environment & Ecology (15 questions) ---
        {
            id: "gs-q-031", type: "mcq", difficulty: "medium",
            question: "Which of the following is a 'Primary Consumer' in a food chain?",
            options: ["Tiger", "Vulture", "Rabbit", "Bacterium"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "Primary consumers are herbivores that eat producers (plants). Rabbits eat grass.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-032", type: "mcq", difficulty: "hard",
            question: "The phenomenon of 'Acid Rain' is primarily caused by:",
            options: ["Carbon Monoxide and Oxygen", "Nitrogen and Carbon Dioxide", "Sulphur Dioxide and Nitrogen Oxides", "Methane and Ozone"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "SO2 and NOx react with water vapor in the atmosphere to form sulphuric and nitric acids.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-033", type: "mcq", difficulty: "medium",
            question: "Which gas is mainly responsible for the 'Greenhouse Effect'?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "CO2 is the most significant greenhouse gas contributing to global warming.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-034", type: "mcq", difficulty: "medium",
            question: "Which layer of the atmosphere protects us from 'UV Rays'?",
            options: ["Ionosphere", "Stratosphere", "Exosphere", "Troposphere"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The ozone layer, located in the stratosphere, absorbs harmful ultraviolet radiation from the sun.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-035", type: "mcq", difficulty: "hard",
            question: "The 'Eutrophication' of water bodies results from an excess of:",
            options: ["Oxygen", "Mercury", "Phosphates and Nitrates", "Calcium"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Nutrient enrichment (nitrates/phosphates) leads to excessive algal growth, depleting oxygen in the water.",
            examTags: ["CUET"]
        },
        {
            id: "gs-q-036", type: "mcq", difficulty: "medium",
            question: "Which of the following is a 'renewable' source of energy?",
            options: ["Coal", "Petroleum", "Solar Energy", "Natural Gas"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Solar energy is inexhaustible and renewable; others are fossil fuels.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-037", type: "mcq", difficulty: "medium",
            question: "The concept of 'Sustainable Development' was popularized by:",
            options: ["Brundtland Commission", "Kyoto Protocol", "Montreal Protocol", "Paris Agreement"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "The 1987 Brundtland Report defined sustainable development.",
            examTags: ["CUET"]
        },
        {
            id: "gs-q-038", type: "mcq", difficulty: "medium",
            question: "Which protocol is related to the 'Ozone Layer' protection?",
            options: ["Kyoto Protocol", "Montreal Protocol", "Nagoya Protocol", "Cartagena Protocol"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Montreal Protocol (1987) aims to phase out ozone-depleting substances.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-039", type: "mcq", difficulty: "medium",
            question: "The 'World Environment Day' is celebrated on:",
            options: ["June 5", "April 22", "September 16", "December 2"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "World Environment Day is June 5th.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-040", type: "mcq", difficulty: "medium",
            question: "Which of the following is a 'Biodegradable' waste?",
            options: ["Plastic bags", "Glass bottles", "Fruit peels", "Aluminum cans"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Fruit peels are organic and can be decomposed by bacteria.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-041", type: "mcq", difficulty: "medium",
            question: "The term 'Ecosystem' was coined by:",
            options: ["Charles Darwin", "A.G. Tansley", "Gregor Mendel", "E.P. Odum"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "A.G. Tansley coined the term 'ecosystem' in 1935.",
            examTags: ["CUET"]
        },
        {
            id: "gs-q-042", type: "mcq", difficulty: "medium",
            question: "Which gas is responsible for the 'Bhopal Gas Tragedy'?",
            options: ["Methyl Isocyanate", "Carbon Monoxide", "Sulphur Dioxide", "Nitrous Oxide"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "standard",
            speedTarget: 45,
            explanation: "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-043", type: "mcq", difficulty: "medium",
            question: "Which is the main source of 'Mercury' pollution in the environment?",
            options: ["Coal power plants", "Plastic industry", "Agriculture", "Paper mills"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Coal combustion is a major source of mercury emissions.",
            examTags: ["CUET"]
        },
        {
            id: "gs-q-044", type: "mcq", difficulty: "medium",
            question: "What is the full form of 'BOD' in environmental science?",
            options: ["Biological Oxygen Demand", "Biotic Oxygen Demand", "Basic Oxygen Dose", "Bio-Organic Decay"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "BOD stands for Biological Oxygen Demand, a measure of water pollution.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "gs-q-045", type: "mcq", difficulty: "medium",
            question: "The 'Kyoto Protocol' is primarily concerned with:",
            options: ["Biodiversity", "Climate Change", "Ozone Layer", "Hazardous Waste"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "The Kyoto Protocol (1997) targets the reduction of greenhouse gas emissions.",
            examTags: ["CUET", "MH-CET"]
        },
        // --- PART B: MAH CET SCIENCE SPEED DRILL (30 questions) ---
        // Inventions & Discoveries (10 Qs)
        {
            id: "gs-q-046", type: "mcq", difficulty: "easy",
            question: "Who discovered 'Penicillin'?",
            options: ["Alexander Fleming", "Louis Pasteur", "Edward Jenner", "Marie Curie"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Alexander Fleming discovered Penicillin in 1928.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-047", type: "mcq", difficulty: "easy",
            question: "Who invented the 'Telephone'?",
            options: ["Thomas Edison", "Alexander Graham Bell", "James Watt", "Guglielmo Marconi"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Alexander Graham Bell is credited with inventing the first practical telephone.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-048", type: "mcq", difficulty: "easy",
            question: "Who discovered the 'Law of Universal Gravitation'?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Sir Isaac Newton formulated the laws of motion and universal gravitation.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-049", type: "mcq", difficulty: "easy",
            question: "Who invented the 'Electric Bulb'?",
            options: ["Nikola Tesla", "Benjamin Franklin", "Thomas Edison", "Alessandro Volta"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Thomas Edison invented the first commercially practical incandescent light bulb.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-050", type: "mcq", difficulty: "easy",
            question: "Who discovered 'Radioactivity'?",
            options: ["Henri Becquerel", "Ernest Rutherford", "Marie Curie", "JJ Thomson"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Henri Becquerel discovered radioactivity in 1896.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-051", type: "mcq", difficulty: "easy",
            question: "Who invented the 'Radio'?",
            options: ["Guglielmo Marconi", "John Logie Baird", "Alexander Bell", "James Maxwell"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Guglielmo Marconi is known for his pioneering work on long-distance radio transmission.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-052", type: "mcq", difficulty: "easy",
            question: "Who discovered 'X-rays'?",
            options: ["Wilhelm Roentgen", "Niels Bohr", "Enrico Fermi", "Max Planck"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Wilhelm Roentgen discovered X-rays in 1895.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-053", type: "mcq", difficulty: "easy",
            question: "Who discovered 'Oxygen'?",
            options: ["Joseph Priestley", "Antoine Lavoisier", "John Dalton", "Henry Cavendish"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Joseph Priestley is usually credited with the discovery of oxygen.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-054", type: "mcq", difficulty: "easy",
            question: "Who invented the 'Steam Engine'?",
            options: ["James Watt", "George Stephenson", "Robert Fulton", "James Hargreaves"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "James Watt improved the atmospheric engine to create the modern steam engine.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-055", type: "mcq", difficulty: "easy",
            question: "Who discovered the 'Structure of DNA'?",
            options: ["Watson and Crick", "Gregor Mendel", "Charles Darwin", "Louis Pasteur"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "James Watson and Francis Crick discovered the double-helix structure of DNA.",
            examTags: ["MH-CET"]
        },

        // Common Chemical Names (10 Qs)
        {
            id: "gs-q-056", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Baking Soda'?",
            options: ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Chloride", "Sodium Hydroxide"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "NaHCO3 is Sodium Bicarbonate.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-057", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Common Salt'?",
            options: ["Sodium Chloride", "Potassium Chloride", "Calcium Chloride", "Magnesium Chloride"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 10,
            explanation: "NaCl is Sodium Chloride.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-058", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Laughing Gas'?",
            options: ["Nitric Oxide", "Nitrous Oxide", "Nitrogen Dioxide", "Nitrogen Pentoxide"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "N2O is Nitrous Oxide.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-059", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Bleaching Powder'?",
            options: ["Calcium Hypochlorite", "Calcium Carbonate", "Calcium Hydroxide", "Calcium Sulphate"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "CaOCl2 is Calcium Hypochlorite.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-060", type: "mcq", difficulty: "easy",
            question: "What is 'Heavy Water'?",
            options: ["Tritium Oxide", "Deuterium Oxide", "Rain Water", "Distilled Water"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "D2O is Deuterium Oxide.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-061", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Plaster of Paris'?",
            options: ["Calcium Sulphate Hemihydrate", "Calcium Sulphate Dihydrate", "Calcium Carbonate", "Calcium Chloride"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "CaSO4.1/2H2O is Plaster of Paris.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-062", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Chalk'?",
            options: ["Calcium Carbonate", "Calcium Sulphate", "Sodium Carbonate", "Magnesium Carbonate"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "CaCO3 is Calcium Carbonate.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-063", type: "mcq", difficulty: "easy",
            question: "What is the chemical name of 'Vitamin B1'?",
            options: ["Thiamine", "Riboflavin", "Niacin", "Cobalamin"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Thiamine is Vitamin B1.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-064", type: "mcq", difficulty: "easy",
            question: "What is the main metal in 'Hemoglobin'?",
            options: ["Copper", "Iron", "Zinc", "Magnesium"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Iron (Fe) is the central metal ion in hemoglobin.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-065", type: "mcq", difficulty: "easy",
            question: "What is the main metal in 'Chlorophyll'?",
            options: ["Iron", "Magnesium", "Copper", "Manganese"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Magnesium (Mg) is the central metal ion in chlorophyll.",
            examTags: ["MH-CET"]
        },

        // General Facts Drills (10 Qs)
        {
            id: "gs-q-066", type: "mcq", difficulty: "easy",
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Mars appears red due to iron oxide (rust) on its surface.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-067", type: "mcq", difficulty: "easy",
            question: "Which is the 'hardest' substance found in the human body?",
            options: ["Bone", "Enamel", "Nail", "Skull"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Tooth enamel is the hardest substance in the human body.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-068", type: "mcq", difficulty: "easy",
            question: "Which gas is used for 'extinguishing fire'?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "CO2 displaces oxygen, effectively smothering the fire.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-069", type: "mcq", difficulty: "easy",
            question: "Which is the 'brightest' planet in our solar system?",
            options: ["Mercury", "Mars", "Venus", "Jupiter"],
            correct: 2,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Venus is the brightest planet as seen from Earth.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-070", type: "mcq", difficulty: "easy",
            question: "Which is the 'largest' planet in our solar system?",
            options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Jupiter is the largest planet in the solar system.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-071", type: "mcq", difficulty: "easy",
            question: "Which vitamin is synthesized in our body in the presence of 'sunlight'?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 3,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Skin produces Vitamin D when exposed to UV-B radiation from sunlight.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-072", type: "mcq", difficulty: "easy",
            question: "The 'Atmospheric Pressure' is measured by:",
            options: ["Thermometer", "Barometer", "Hydrometer", "Altimeter"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "A barometer is used to measure air pressure.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-073", type: "mcq", difficulty: "easy",
            question: "Which gas is used in a 'Refrigerator' for cooling?",
            options: ["Ammonia", "Carbon Dioxide", "Nitrogen", "Freon"],
            correct: 3,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Chlorofluorocarbons (CFCs) or Freons were traditionally used; modern ones use HFCs.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-074", type: "mcq", difficulty: "easy",
            question: "Which instrument is used to measure 'Purity of Milk'?",
            options: ["Lactometer", "Hydrometer", "Saccharometer", "Galvanometer"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "A lactometer measures the density/purity of milk.",
            examTags: ["MH-CET"]
        },
        {
            id: "gs-q-075", type: "mcq", difficulty: "easy",
            question: "Which is the 'most abundant' gas in the Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere.",
            examTags: ["MH-CET"]
        }
    ]
};
