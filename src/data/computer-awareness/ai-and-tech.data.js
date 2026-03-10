// src/data/computer-awareness/ai-and-tech.data.js
// MAH BBA CET - COMPUTER AWARENESS - AI & EMERGING TECH MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const aiAndTechData = {
    subject: "Computer Awareness",
    chapter: "AI & Emerging Tech",
    examTags: ["MH-CET", "CUET-UG"],
    studyGuide: {
        topics: [
            {
                id: "ai-fundamentals",
                title: "1. AI Fundamentals",
                content: {
                    coreConcept: "1. What is AI? Artificial Intelligence is the ability of a machine to mimic human 'cognitive' functions like learning, reasoning, and problem-solving.\n2. Weak vs. Strong AI: \n   - Weak AI (Narrow): Built for one task (like Siri, Alexa, or Chess).\n3. Strong AI (AGI): Machines that can solve *any* problem like a human (currently theoretical).",
                    formulaBank: "The AI Timeline:\n- 1950: Alan Turing proposes the 'Turing Test' (Can a machine fool a human?).\n- 1956: John McCarthy coins the term 'Artificial Intelligence' at the Dartmouth Conference.\n- 1997: Deep Blue (IBM) beats Garry Kasparov at Chess.\n- 2022: ChatGPT (OpenAI) brings Generative AI to the public.",
                    logic: "The Turing Test Logic:\n- Room A: A Human Judge.\n- Room B: A Computer.\n- Room C: A Human.\nLogic: If the judge talks to both via text and cannot tell which one is the computer, the computer has passed the test.",
                    traps: "TRAP 1: AI vs Robotics\nRobots are the 'Body' (moving parts). AI is the 'Brain' (software). A robot doesn't *need* AI to work (it can just follow pre-set physical paths).\n\nTRAP 2: ML is *part* of AI\nMany people think AI and Machine Learning (ML) are separate. Actually, ML is a sub-field *inside* AI.\n\nTRAP 3: Strong AI doesn't exist yet\nIn exams, if they ask if we have robots that think exactly like humans for every task, the answer is usually NO (Strong AI is still a goal).",
                    examples: [
                        { q: "Who is the 'Father of AI'?", a: "John McCarthy" },
                        { q: "Test used to determine if a machine is intelligent?", a: "Turing Test" },
                        { q: "Is Siri Weak AI or Strong AI?", a: "Weak AI (Narrow AI)" },
                        { q: "Main goal of Strong AI?", a: "General Intelligence (AGI) - matching human versatility." },
                        { q: "Year Chat GPT was released?", a: "2022" },
                        { q: "IBM computer that won at Chess?", a: "Deep Blue" },
                        { q: "Field that mimics biological neurons?", a: "Neural Networks" },
                        { q: "Is AI a hardware or software field?", a: "Primarily a field of Software/Computer Science." },
                        { q: "First humanoid robot to get citizenship?", a: "Sophia" },
                        { q: "What is an Expert System?", a: "AI designed to simulate the decision-making of a human expert." }
                    ],
                    speedSummary: "- AI = Machine mimicry of human brain.\n- Weak AI = One task | Strong AI = All human tasks.\n- Turing Test = The gold standard for 'passing' as human."
                }
            },
            {
                id: "ml-genai",
                title: "2. ML & Generative AI",
                content: {
                    coreConcept: "1. Machine Learning (ML): Teaching computers to learn from *data* instead of following fixed rules.\n2. Generative AI: AI that can *create* new content (text, images, music) instead of just analyzing old data (GPT, Midjourney).\n3. LLMs (Large Language Models): AI trained on massive amounts of text to understand and generate human-like language.",
                    formulaBank: "The Training Trio:\n1. Supervised Learning: Learning with 'labels' (e.g., teaching AI to recognize cats by showing it 1000 labeled cat photos).\n2. Unsupervised Learning: Learning patterns from 'unlabeled' data (e.g., AI grouping customers by buying habits).\n3. Reinforcement Learning: Learning through trial and error (Rewards for right moves, penalties for wrong ones).",
                    logic: "The Prompt Engineering Logic:\n- Prompt: Your input to the AI.\n- Context: Providing background info to the AI.\n- Iteration: Refining the prompt to get a better answer.\nLogic: The quality of the AI's output depends directly on the clarity of your 'Prompt'.",
                    traps: "TRAP 1: How LLMs 'Think'\nLLMs don't actually 'know' facts. They are 'Statistical Predictors'. They predict the most likely *next word* in a sentence based on their training.\n\nTRAP 2: Hallucination\nWhen an AI confidently gives a wrong or made-up answer, it is called a 'Hallucination'. Always verify AI facts!\n\nTRAP 3: Deepfakes\nHighly realistic but fake images or videos created by AI. They are a major ethical concern in modern tech.",
                    examples: [
                        { q: "Full form of LLM?", a: "Large Language Model" },
                        { q: "AI making up fake info is called...?", a: "Hallucination" },
                        { q: "Training AI with labeled data is...?", a: "Supervised Learning" },
                        { q: "GPT stands for...?", a: "Generative Pre-trained Transformer" },
                        { q: "Art created by AI (like DALL-E) is called?", a: "Generative AI" },
                        { q: "Study of perfecting inputs to an AI?", a: "Prompt Engineering" },
                        { q: "Fake AI-generated videos?", a: "Deepfakes" },
                        { q: "Can LLMs experience emotions?", a: "No, they only predict word patterns." },
                        { q: "Which company created ChatGPT?", a: "OpenAI" },
                        { q: "Is Google Gemini an LLM?", a: "Yes." }
                    ],
                    speedSummary: "- ML = Learning from data | GenAI = Creating new content.\n- Supervised = Labeled | Unsupervised = Patterns.\n- Hallucination = AI 'Lying' confidently."
                }
            }
        ]
    },
    flashcards: [
        { id: "ai-fc-001", term: "AGI", definition: "Artificial General Intelligence - AI that equals human versatility (Strong AI)." },
        { id: "ai-fc-002", term: "Turing Test", definition: "A test of a machine's ability to exhibit human-like intelligence." },
        { id: "ai-fc-003", term: "NLP", definition: "Natural Language Processing - AI's ability to understand human speech/text." },
        { id: "ai-fc-004", term: "Computer Vision", definition: "AI ability to identify and process digital images/videos." },
        { id: "ai-fc-005", term: "Algorithm", definition: "A set of rules/steps followed by an AI to solve a problem." },
        { id: "ai-fc-006", term: "Neural Network", definition: "A hardware/software system designed to simulate the human brain's neurons." },
        { id: "ai-fc-007", term: "Big Data", definition: "Massive datasets used to train powerful AI models." },
        { id: "ai-fc-008", term: "Bias", definition: "Errors in AI decisions based on unfair training data." },
        { id: "ai-fc-009", term: "Deep Learning", definition: "Advanced ML using multi-layered neural networks." },
        { id: "ai-fc-010", term: "Singularity", definition: "Hypothetical point where AI becomes smarter than all humans combined." }
    ],
    questions: [
        {
            id: "ai-q-001", type: "mcq", difficulty: "easy",
            question: "Who coined the term 'Artificial Intelligence' in 1956?",
            options: ["Alan Turing", "John McCarthy", "Elon Musk", "Bill Gates"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 30, negativeMarking: false,
            explanation: "John McCarthy is known as the father of AI; he coined the term at the Dartmouth Conference.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-002", type: "mcq", difficulty: "medium",
            question: "A machine that can pass the 'Turing Test' is one that:",
            options: [
                "Can move like a human",
                "Can solve math faster than a human",
                "Can fool a human into thinking it is also a human",
                "Can never be turned off"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Turing Test focuses on conversational imitation.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-003", type: "mcq", difficulty: "easy",
            question: "Which type of AI is designed to perform only one specific task (like playing chess)?",
            options: ["Strong AI", "Narrow AI", "Super AI", "General AI"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 30, negativeMarking: false,
            explanation: "Narrow AI (or Weak AI) is specialized for one field.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-004", type: "mcq", difficulty: "medium",
            question: "What does NLP stand for in the context of AI?",
            options: [
                "New Language Program",
                "Natural Language Processing",
                "Node Loop Path",
                "Network Logic Plan"
            ],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 30, negativeMarking: false,
            explanation: "NLP allows machines to communicate in human languages.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-005", type: "mcq", difficulty: "medium",
            question: "In Machine Learning, training a model with 'labeled' data is known as:",
            options: [
                "Unsupervised Learning",
                "Supervised Learning",
                "Reinforcement Learning",
                "Manual Learning"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Supervised learning provides the AI with both the input and the correct answer.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-006", type: "mcq", difficulty: "medium",
            question: "What is an AI 'Hallucination'?",
            options: [
                "When a robot physically breaks down",
                "When an AI generates confident but incorrect information",
                "When an AI starts a conversation on its own",
                "When an AI refuses to answer"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hallucination happens when AI predicts a plausible-sounding but factually wrong answer.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-007", type: "mcq", difficulty: "easy",
            question: "ChatGPT is an example of which type of AI?",
            options: ["Discriminative AI", "Generative AI", "Physical AI", "Hardware AI"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 30, negativeMarking: false,
            explanation: "ChatGPT *generates* new text content.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-008", type: "mcq", difficulty: "hard",
            question: "The 'P' in GPT stands for:",
            options: ["Programmed", "Pre-trained", "Predictive", "Processing"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 30, negativeMarking: false,
            explanation: "GPT = Generative Pre-trained Transformer.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-009", type: "mcq", difficulty: "medium",
            question: "Which technology is primarily used for creating 'Deepfakes'?",
            options: ["Excel Sheets", "Generative Adversarial Networks (GANs)", "Calculators", "Web Browsers"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "GANs use two competing neural networks to create hyper-realistic fake images/videos.",
            examTags: ["MH-CET"]
        },
        {
            id: "ai-q-010", type: "mcq", difficulty: "medium",
            question: "What describes AI that is equal to or better than humans at ALL cognitive tasks?",
            options: ["Narrow AI", "Weak AI", "AGI (Artificial General Intelligence)", "Expert System"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "AGI (or Strong AI) is the theoretical goal of human-level machine intelligence.",
            examTags: ["MH-CET"]
        }
    ]
};
