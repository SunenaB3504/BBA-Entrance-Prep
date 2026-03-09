// src/data/english/comprehension.data.js
// NTA-READY: VALIDATED AGAINST DATA_SCHEMA.md

export const comprehensionData = {
    subject: "English",
    chapter: "Reading Comprehension",
    examTags: ["MH-CET"],
    flashcards: [
        {
            id: "comp-fc-001",
            term: "Main Idea Question",
            definition: "Asks what the passage is primarily about — look for the idea that ALL paragraphs support",
            formula: null,
            example: "The passage mainly discusses / The central theme of the passage is"
        },
        {
            id: "comp-fc-002",
            term: "Inference Question",
            definition: "Asks what can be concluded — answer not directly stated but logically follows from passage",
            formula: null,
            example: "It can be inferred from the passage that / The author implies that"
        },
        {
            id: "comp-fc-003",
            term: "Vocabulary in Context",
            definition: "Tests meaning of a word AS USED in the passage — not dictionary meaning in isolation",
            formula: null,
            example: "The word 'X' in paragraph 2 most nearly means"
        },
        {
            id: "comp-fc-004",
            term: "Author's Tone",
            definition: "The attitude or feeling the author expresses — detected through word choice",
            formula: null,
            example: "Tones: critical, appreciative, neutral, cautionary, optimistic, sarcastic"
        },
        {
            id: "comp-fc-005",
            term: "Factual Detail Question",
            definition: "Answer is directly and explicitly stated in the passage — locate and match",
            formula: null,
            example: "According to the passage / The author states that"
        }
    ],
    questions: [
        /* PASSAGE 1: Indian Entrepreneurship (Factual) - 420 words approx */
        {
            id: "comp-q-001",
            type: "case-study",
            difficulty: "medium",
            passage: "The landscape of Indian entrepreneurship has undergone a foundational metamorphosis over the last decade, transitioning from a culture of risk-aversion to a global powerhouse of innovation. At the heart of this transformation lies the 'India Stack'—a set of open APIs and digital public goods that have democratized access to data and financial services. By providing a unified identity (Aadhaar), a seamless payment interface (UPI), and a digital locker for documents, the government has inadvertently created a sandbox for innovators to build scalable solutions for a billion people. Where once the primary constraint was the physical infrastructure of brick-and-mortar branches, today's young innovators are limited only by their imagination and the strength of their server clusters.\n\nThis surge is most visible in the fintech sector, which has moved beyond simple wallet services to complex insurance tech and neo-banking models. In rural pockets, agritech startups are utilizing satellite data and AI-driven insights to revolutionize traditional farming practices, moving the narrative from simple imitation of Western models to genuine local innovation. However, this rapid ascent is accompanied by significant structural hurdles. The momentum of the 'startup India' movement relies heavily on a robust regulatory framework that must navigate the delicate balance between consumer protection and the 'ease of doing business' mandates. \n\nFurthermore, the nature of investment has shifted. While venture capital inflow reached an all-time high in the early 2020s, much of the capital gravitated toward aggressive 'cash-burn' models focused on customer acquisition at any cost. This trend necessitated a painful but necessary correction toward unit-economic profitability and sustainable growth. The modern Indian founder is increasingly scrutinized not just for their growth charts but for their 'Path to Profitability'—a metric that identifies the long-term viability of the enterprise. As the ecosystem matures, the focus is pivoting from 'Unicorn' status to 'Indicorn' sustainability—businesses that are uniquely Indian in their solution architecture but global in their standards of excellence. To sustain this momentum, the ecosystem requires a continuous pipeline of skilled talent, intellectual property protection, and an exit environment that allows early investors to find liquidity through IPOs on domestic exchanges.",
            question: "Which of the following best summarizes the 'paradigm shift' described in the passage?",
            options: [
                "A transition from government-funded projects to private venture capital dominance.",
                "A move from physical infrastructure constraints to leveraging digital public goods for innovation.",
                "The complete replacement of rural agritech by urban fintech solutions.",
                "The shift from global standards of excellence to local imitation of Western models."
            ],
            correct: 1,
            explanation: "The passage emphasizes that the shift is driven by 'India Stack' (digital public goods) and moving away from 'brick-and-mortar constraints' toward scalable digital solutions.",
            examTags: ["MH-CET"]
        },
        {
            id: "comp-q-002",
            type: "case-study",
            difficulty: "medium",
            passage: "The landscape of Indian entrepreneurship has undergone a foundational metamorphosis over the last decade, transitioning from a culture of risk-aversion to a global powerhouse of innovation. At the heart of this transformation lies the 'India Stack'—a set of open APIs and digital public goods that have democratized access to data and financial services. By providing a unified identity (Aadhaar), a seamless payment interface (UPI), and a digital locker for documents, the government has inadvertently created a sandbox for innovators to build scalable solutions for a billion people. Where once the physical infrastructure of brick-and-mortar branches, today's young innovators are limited only by their imagination and the strength of their server clusters.\n\nThis surge is most visible in the fintech sector, which has moved beyond simple wallet services to complex insurance tech and neo-banking models. In rural pockets, agritech startups are utilizing satellite data and AI-driven insights to revolutionize traditional farming practices, moving the narrative from simple imitation of Western models to genuine local innovation. However, this rapid ascent is accompanied by significant structural hurdles. The momentum of the 'startup India' movement relies heavily on a robust regulatory framework that must navigate the delicate balance between consumer protection and the 'ease of doing business' mandates. \n\nFurthermore, the nature of investment has shifted. While venture capital inflow reached an all-time high in the early 2020s, much of the capital gravitated toward aggressive 'cash-burn' models focused on customer acquisition at any cost. This trend necessitated a painful but necessary correction toward unit-economic profitability and sustainable growth. The modern Indian founder is increasingly scrutinized not just for their growth charts but for their 'Path to Profitability'—a metric that identifies the long-term viability of the enterprise. As the ecosystem matures, the focus is pivoting from 'Unicorn' status to 'Indicorn' sustainability—businesses that are uniquely Indian in their solution architecture but global in their standards of excellence. To sustain this momentum, the ecosystem requires a continuous pipeline of skilled talent, intellectual property protection, and an exit environment that allows early investors to find liquidity through IPOs on domestic exchanges.",
            question: "The word 'metamorphosis' in the first paragraph is used to emphasize:",
            options: [
                "A gradual and subtle change in business registration rules.",
                "A complete and profound transformation in the entrepreneurial culture.",
                "The temporary nature of the digital boom in India.",
                "The failure of traditional businesses to adapt to new technology."
            ],
            correct: 1,
            explanation: "Metamorphosis refers to a major change in form or nature. The passage uses it to describe the transition from 'risk-aversion' to a 'global powerhouse.'",
            examTags: ["MH-CET"]
        },
        {
            id: "comp-q-003",
            type: "case-study",
            difficulty: "hard",
            passage: "The landscape of Indian entrepreneurship has undergone a foundational metamorphosis over the last decade, transitioning from a culture of risk-aversion to a global powerhouse of innovation. At the heart of this transformation lies the 'India Stack'—a set of open APIs and digital public goods that have democratized access to data and financial services. By providing a unified identity (Aadhaar), a seamless payment interface (UPI), and a digital locker for documents, the government has inadvertently created a sandbox for innovators to build scalable solutions for a billion people. Where once the physical infrastructure of brick-and-mortar branches, today's young innovators are limited only by their imagination and the strength of their server clusters.\n\nThis surge is most visible in the fintech sector, which has moved beyond simple wallet services to complex insurance tech and neo-banking models. In rural pockets, agritech startups are utilizing satellite data and AI-driven insights to revolutionize traditional farming practices, moving the narrative from simple imitation of Western models to genuine local innovation. However, this rapid ascent is accompanied by significant structural hurdles. The momentum of the 'startup India' movement relies heavily on a robust regulatory framework that must navigate the delicate balance between consumer protection and the 'ease of doing business' mandates. \n\nFurthermore, the nature of investment has shifted. While venture capital inflow reached an all-time high in the early 2020s, much of the capital gravitated toward aggressive 'cash-burn' models focused on customer acquisition at any cost. This trend necessitated a painful but necessary correction toward unit-economic profitability and sustainable growth. The modern Indian founder is increasingly scrutinized not just for their growth charts but for their 'Path to Profitability'—a metric that identifies the long-term viability of the enterprise. As the ecosystem matures, the focus is pivoting from 'Unicorn' status to 'Indicorn' sustainability—businesses that are uniquely Indian in their solution architecture but global in their standards of excellence. To sustain this momentum, the ecosystem requires a continuous pipeline of skilled talent, intellectual property protection, and an exit environment that allows early investors to find liquidity through IPOs on domestic exchanges.",
            question: "Based on the passage, what can be inferred about the author's attitude toward 'cash-burn' models?",
            options: [
                "They are considered the most effective way to reach 'Unicorn' status.",
                "They are viewed as a necessary evil that the government should encourage.",
                "They are seen as a problematic trend that required a correction toward sustainability.",
                "They are celebrated as the primary driver of India's global standard of excellence."
            ],
            correct: 2,
            explanation: "The author describes the focus on cash-burn models as a 'trend [that] necessitated a painful but necessary correction,' implying they were not inherently sustainable or ideal.",
            examTags: ["MH-CET"]
        },
        {
            id: "comp-q-004",
            type: "case-study",
            difficulty: "medium",
            passage: "The landscape of Indian entrepreneurship has undergone a foundational metamorphosis over the last decade, transitioning from a culture of risk-aversion to a global powerhouse of innovation. At the heart of this transformation lies the 'India Stack'—a set of open APIs and digital public goods that have democratized access to data and financial services. By providing a unified identity (Aadhaar), a seamless payment interface (UPI), and a digital locker for documents, the government has inadvertently created a sandbox for innovators to build scalable solutions for a billion people. Where once the physical infrastructure of brick-and-mortar branches, today's young innovators are limited only by their imagination and the strength of their server clusters.\n\nThis surge is most visible in the fintech sector, which has moved beyond simple wallet services to complex insurance tech and neo-banking models. In rural pockets, agritech startups are utilizing satellite data and AI-driven insights to revolutionize traditional farming practices, moving the narrative from simple imitation of Western models to genuine local innovation. However, this rapid ascent is accompanied by significant structural hurdles. The momentum of the 'startup India' movement relies heavily on a robust regulatory framework that must navigate the delicate balance between consumer protection and the 'ease of doing business' mandates. \n\nFurthermore, the nature of investment has shifted. While venture capital inflow reached an all-time high in the early 2020s, much of the capital gravitated toward aggressive 'cash-burn' models focused on customer acquisition at any cost. This trend necessitated a painful but necessary correction toward unit-economic profitability and sustainable growth. The modern Indian founder is increasingly scrutinized not just for their growth charts but for their 'Path to Profitability'—a metric that identifies the long-term viability of the enterprise. As the ecosystem matures, the focus is pivoting from 'Unicorn' status to 'Indicorn' sustainability—businesses that are uniquely Indian in their solution architecture but global in their standards of excellence. To sustain this momentum, the ecosystem requires a continuous pipeline of skilled talent, intellectual property protection, and an exit environment that allows early investors to find liquidity through IPOs on domestic exchanges.",
            question: "The author's tone in the final paragraph is primarily:",
            options: [
                "Dismissive and critical of the IPO environment.",
                "Optimistic yet prescriptive about future requirements.",
                "Nostalgic for the early days of risk-aversion.",
                "Neutral and purely statistical in its analysis."
            ],
            correct: 1,
            explanation: "The author expresses a positive outlook ('Indicorn sustainability', 'global standards') but lists specific 'requirements' (talent, IP protection, etc.) to maintain momentum, making it prescriptive (giving directions or rules).",
            examTags: ["MH-CET"]
        },
        {
            id: "comp-q-005",
            type: "case-study",
            difficulty: "easy",
            passage: "The landscape of Indian entrepreneurship has undergone a foundational metamorphosis over the last decade, transitioning from a culture of risk-aversion to a global powerhouse of innovation. At the heart of this transformation lies the 'India Stack'—a set of open APIs and digital public goods that have democratized access to data and financial services. By providing a unified identity (Aadhaar), a seamless payment interface (UPI), and a digital locker for documents, the government has inadvertently created a sandbox for innovators to build scalable solutions for a billion people. Where once the physical infrastructure of brick-and-mortar branches, today's young innovators are limited only by their imagination and the strength of their server clusters.\n\nThis surge is most visible in the fintech sector, which has moved beyond simple wallet services to complex insurance tech and neo-banking models. In rural pockets, agritech startups are utilizing satellite data and AI-driven insights to revolutionize traditional farming practices, moving the narrative from simple imitation of Western models to genuine local innovation. However, this rapid ascent is accompanied by significant structural hurdles. The momentum of the 'startup India' movement relies heavily on a robust regulatory framework that must navigate the delicate balance between consumer protection and the 'ease of doing business' mandates. \n\nFurthermore, the nature of investment has shifted. While venture capital inflow reached an all-time high in the early 2020s, much of the capital gravitated toward aggressive 'cash-burn' models focused on customer acquisition at any cost. This trend necessitated a painful but necessary correction toward unit-economic profitability and sustainable growth. The modern Indian founder is increasingly scrutinized not just for their growth charts but for their 'Path to Profitability'—a metric that identifies the long-term viability of the enterprise. As the ecosystem matures, the focus is pivoting from 'Unicorn' status to 'Indicorn' sustainability—businesses that are uniquely Indian in their solution architecture but global in their standards of excellence. To sustain this momentum, the ecosystem requires a continuous pipeline of skilled talent, intellectual property protection, and an exit environment that allows early investors to find liquidity through IPOs on domestic exchanges.",
            question: "According to the passage, what is the role of the 'regulatory framework' in the startup movement?",
            options: [
                "To provide high-interest loans to rural agritech startups.",
                "To eliminate all consumer protection laws to favor businesses.",
                "To balance consumer protection with the ease of doing business.",
                "To prevent early investors from exiting through domestic IPOs."
            ],
            correct: 2,
            explanation: "The passage explicitly states the framework 'must navigate the delicate balance between consumer protection and the ease of doing business mandates.'",
            examTags: ["MH-CET"]
        }
    ]
};
