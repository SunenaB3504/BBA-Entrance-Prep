// src/data/english/mh-cet-comprehension.data.js

export const mhCetComprehensionData = {
    subject: "English",
    chapter: "Reading Comprehension (MH-CET)",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "mcet-comp-fc-001", term: "Skimming", definition: "Quickly reading for the main idea." },
        { id: "mcet-comp-fc-002", term: "Scanning", definition: "Looking for specific details." },
        { id: "mcet-comp-fc-003", term: "Contextual Clues", definition: "Using surrounding text to find meaning." }
    ],
    questions: [
        /* PASSAGE 1: Entrepreneurship & Risk (Analytical) */
        {
            id: "mcet-q-001", type: "case-study", difficulty: "medium",
            passage: "In the modern economic landscape, the definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving. True entrepreneurs are no longer just those who open shops; they are individuals who identify systemic inefficiencies and create scalable solutions. However, this journey is fraught with 'calculated risks'—a term often misunderstood by the public. Calculated risk is not a gamble; it is the exhaustive analysis of probability and impact. A founder does not jump blindly; they measure the height of the fall, the strength of the safety net, and the necessity of the leap. The biggest hurdle for new startups today is not a lack of capital, but a lack of patience. Scaling too fast without a cohesive culture often leads to what economists call 'organizational bloat,' where the complexity of the company outpaces its utility. Resilience, therefore, is the most undervalued asset in a founder's portfolio. It is the ability to maintain clarity when the path forward is obscured by market volatility and internal friction.",
            question: "According to the passage, how has the definition of entrepreneurship changed?",
            options: [
                "It now focuses solely on small-scale retail ownership.",
                "It has evolved from business ownership to a mindset of problem-solving.",
                "It is now defined as the ability to secure unlimited venture capital.",
                "It is restricted to those who can afford to take massive gambles."
            ],
            correct: 1,
            explanation: "The passage states: 'definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving.'"
        },
        {
            id: "mcet-q-002", type: "case-study", difficulty: "medium",
            passage: "In the modern economic landscape, the definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving. True entrepreneurs are no longer just those who open shops; they are individuals who identify systemic inefficiencies and create scalable solutions. However, this journey is fraught with 'calculated risks'—a term often misunderstood by the public. Calculated risk is not a gamble; it is the exhaustive analysis of probability and impact. A founder does not jump blindly; they measure the height of the fall, the strength of the safety net, and the necessity of the leap. The biggest hurdle for new startups today is not a lack of capital, but a lack of patience. Scaling too fast without a cohesive culture often leads to what economists call 'organizational bloat,' where the complexity of the company outpaces its utility. Resilience, therefore, is the most undervalued asset in a founder's portfolio. It is the ability to maintain clarity when the path forward is obscured by market volatility and internal friction.",
            question: "What is the primary difference between a 'gamble' and a 'calculated risk' as per the author?",
            options: [
                "Gambles are always successful, while risks are not.",
                "Calculated risk involves exhaustive analysis of probability and impact.",
                "Gambles are only taken by wealthy founders.",
                "Calculated risk is taken blindly without any safety net."
            ],
            correct: 1,
            explanation: "The author defines calculated risk as 'the exhaustive analysis of probability and impact,' distinguishing it from blind gambling."
        },
        {
            id: "mcet-q-003", type: "case-study", difficulty: "hard",
            passage: "In the modern economic landscape, the definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving. True entrepreneurs are no longer just those who open shops; they are individuals who identify systemic inefficiencies and create scalable solutions. However, this journey is fraught with 'calculated risks'—a term often misunderstood by the public. Calculated risk is not a gamble; it is the exhaustive analysis of probability and impact. A founder does not jump blindly; they measure the height of the fall, the strength of the safety net, and the necessity of the leap. The biggest hurdle for new startups today is not a lack of capital, but a lack of patience. Scaling too fast without a cohesive culture often leads to what economists call 'organizational bloat,' where the complexity of the company outpaces its utility. Resilience, therefore, is the most undervalued asset in a founder's portfolio. It is the ability to maintain clarity when the path forward is obscured by market volatility and internal friction.",
            question: "The term 'organizational bloat' refers to a situation where:",
            options: [
                "The company earns more profit than its competitors.",
                "A startup lacks enough employees to handle its customers.",
                "A company's complexity grows faster than its actual usefulness.",
                "The corporate culture is too strong for outsiders to join."
            ],
            correct: 2,
            explanation: "The passage defines it as where 'the complexity of the company outpaces its utility.'"
        },
        {
            id: "mcet-q-004", type: "case-study", difficulty: "medium",
            passage: "In the modern economic landscape, the definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving. True entrepreneurs are no longer just those who open shops; they are individuals who identify systemic inefficiencies and create scalable solutions. However, this journey is fraught with 'calculated risks'—a term often misunderstood by the public. Calculated risk is not a gamble; it is the exhaustive analysis of probability and impact. A founder does not jump blindly; they measure the height of the fall, the strength of the safety net, and the necessity of the leap. The biggest hurdle for new startups today is not a lack of capital, but a lack of patience. Scaling too fast without a cohesive culture often leads to what economists call 'organizational bloat,' where the complexity of the company outpaces its utility. Resilience, therefore, is the most undervalued asset in a founder's portfolio. It is the ability to maintain clarity when the path forward is obscured by market volatility and internal friction.",
            question: "What does the author believe to be the most undervalued asset for a founder?",
            options: ["Venture Capital", "Scalability", "Resilience", "Market Volatility"],
            correct: 2,
            explanation: "Resilience is explicitly called the 'most undervalued asset in a founder's portfolio' in the final sentences."
        },
        {
            id: "mcet-q-005", type: "case-study", difficulty: "easy",
            passage: "In the modern economic landscape, the definition of entrepreneurship has shifted from mere business ownership to a mindset of radical problem-solving. True entrepreneurs are no longer just those who open shops; they are individuals who identify systemic inefficiencies and create scalable solutions. However, this journey is fraught with 'calculated risks'—a term often misunderstood by the public. Calculated risk is not a gamble; it is the exhaustive analysis of probability and impact. A founder does not jump blindly; they measure the height of the fall, the strength of the safety net, and the necessity of the leap. The biggest hurdle for new startups today is not a lack of capital, but a lack of patience. Scaling too fast without a cohesive culture often leads to what economists call 'organizational bloat,' where the complexity of the company outpaces its utility. Resilience, therefore, is the most undervalued asset in a founder's portfolio. It is the ability to maintain clarity when the path forward is obscured by market volatility and internal friction.",
            question: "The author uses the metaphor of 'measuring the height of the fall' to describe:",
            options: [
                "The physical dangers of construction business.",
                "The process of analyzing the potential failure of a business move.",
                "The actual jumps founders make in athletic training.",
                "The decline of the share market."
            ],
            correct: 1,
            explanation: "It is a metaphor for analyzing the impact of potential risks before taking a 'leap' or business decision."
        },

        /* PASSAGE 2: Sustainability in Tech (Informative) */
        {
            id: "mcet-q-006", type: "case-study", difficulty: "medium",
            passage: "Sustainability in the technology sector has evolved from a 'green marketing' gimmick to a core operational imperative. As data centers consume vast amounts of electricity, tech giants are pivoting toward 24/7 carbon-free energy. However, the environmental impact of technology is not limited to carbon emissions; it extends to the 'circular economy' of hardware. E-waste is currently the fastest-growing waste stream globally. Our obsession with planned obsolescence—designing products to become outdated quickly—has created a mountain of discarded silicon and rare earth metals. To combat this, innovative firms are implementing 'Product-as-a-Service' models, where they retain ownership of hardware and focus on leasing and refurbishing rather than outright sales. This incentivizes durability over replacement. Furthermore, the use of AI in optimizing supply chains can reduce the carbon footprint of logistics by up to 15%. Genuine sustainability requires a holistic view that balances computational advances with ecological preservation.",
            question: "What is mentioned as the fastest-growing waste stream in the world?",
            options: ["Plastic waste", "E-waste", "Carbon emissions", "Textile waste"],
            correct: 1,
            explanation: "The passage states: 'E-waste is currently the fastest-growing waste stream globally.'"
        },
        {
            id: "mcet-q-007", type: "case-study", difficulty: "medium",
            passage: "Sustainability in the technology sector has evolved from a 'green marketing' gimmick to a core operational imperative. As data centers consume vast amounts of electricity, tech giants are pivoting toward 24/7 carbon-free energy. However, the environmental impact of technology is not limited to carbon emissions; it extends to the 'circular economy' of hardware. E-waste is currently the fastest-growing waste stream globally. Our obsession with planned obsolescence—designing products to become outdated quickly—has created a mountain of discarded silicon and rare earth metals. To combat this, innovative firms are implementing 'Product-as-a-Service' models, where they retain ownership of hardware and focus on leasing and refurbishing rather than outright sales. This incentivizes durability over replacement. Furthermore, the use of AI in optimizing supply chains can reduce the carbon footprint of logistics by up to 15%. Genuine sustainability requires a holistic view that balances computational advances with ecological preservation.",
            question: "The term 'planned obsolescence' refers to:",
            options: [
                "Planning a product's launch to ensure it goes viral.",
                "Designing products specifically to become outdated or unusable quickly.",
                "The process of recycling old tech into new products.",
                "A strategy where software is updated forever for free."
            ],
            correct: 1,
            explanation: "The passage defines it as 'designing products to become outdated quickly'."
        },
        {
            id: "mcet-q-008", type: "case-study", difficulty: "hard",
            passage: "Sustainability in the technology sector has evolved from a 'green marketing' gimmick to a core operational imperative. As data centers consume vast amounts of electricity, tech giants are pivoting toward 24/7 carbon-free energy. However, the environmental impact of technology is not limited to carbon emissions; it extends to the 'circular economy' of hardware. E-waste is currently the fastest-growing waste stream globally. Our obsession with planned obsolescence—designing products to become outdated quickly—has created a mountain of discarded silicon and rare earth metals. To combat this, innovative firms are implementing 'Product-as-a-Service' models, where they retain ownership of hardware and focus on leasing and refurbishing rather than outright sales. This incentivizes durability over replacement. Furthermore, the use of AI in optimizing supply chains can reduce the carbon footprint of logistics by up to 15%. Genuine sustainability requires a holistic view that balances computational advances with ecological preservation.",
            question: "How does the 'Product-as-a-Service' model help the environment?",
            options: [
                "It encourages people to buy more hardware items.",
                "It shifts the focus from selling replacement products to ensuring durability and refurbishing.",
                "It replaces all physical hardware with cloud-based AI software.",
                "It allows companies to ignore e-waste regulations."
            ],
            correct: 1,
            explanation: "The passage explains that this model 'incentivizes durability over replacement' through leasing and refurbishing."
        },
        {
            id: "mcet-q-009", type: "case-study", difficulty: "medium",
            passage: "Sustainability in the technology sector has evolved from a 'green marketing' gimmick to a core operational imperative. As data centers consume vast amounts of electricity, tech giants are pivoting toward 24/7 carbon-free energy. However, the environmental impact of technology is not limited to carbon emissions; it extends to the 'circular economy' of hardware. E-waste is currently the fastest-growing waste stream globally. Our obsession with planned obsolescence—designing products to become outdated quickly—has created a mountain of discarded silicon and rare earth metals. To combat this, innovative firms are implementing 'Product-as-a-Service' models, where they retain ownership of hardware and focus on leasing and refurbishing rather than outright sales. This incentivizes durability over replacement. Furthermore, the use of AI in optimizing supply chains can reduce the carbon footprint of logistics by up to 15%. Genuine sustainability requires a holistic view that balances computational advances with ecological preservation.",
            question: "According to the passage, AI can contribute to sustainability by:",
            options: [
                "Creating more data centers.",
                "Designing faster silicon chips.",
                "Optimizing supply chains to reduce logistics carbon footprint.",
                "Encouraging planned obsolescence."
            ],
            correct: 2,
            explanation: "The passage mentions AI can reduce logistics' carbon footprint by up to 15% through supply chain optimization."
        },
        {
            id: "mcet-q-010", type: "case-study", difficulty: "easy",
            passage: "Sustainability in the technology sector has evolved from a 'green marketing' gimmick to a core operational imperative. As data centers consume vast amounts of electricity, tech giants are pivoting toward 24/7 carbon-free energy. However, the environmental impact of technology is not limited to carbon emissions; it extends to the 'circular economy' of hardware. E-waste is currently the fastest-growing waste stream globally. Our obsession with planned obsolescence—designing products to become outdated quickly—has created a mountain of discarded silicon and rare earth metals. To combat this, innovative firms are implementing 'Product-as-a-Service' models, where they retain ownership of hardware and focus on leasing and refurbishing rather than outright sales. This incentivizes durability over replacement. Furthermore, the use of AI in optimizing supply chains can reduce the carbon footprint of logistics by up to 15%. Genuine sustainability requires a holistic view that balances computational advances with ecological preservation.",
            question: "The tone of the author regarding 'green marketing' at the start of the passage can be described as:",
            options: ["Supportive", "Dismissive/Cynical", "Appreciative", "Celebratory"],
            correct: 1,
            explanation: "By calling it a 'gimmick', the author implies it was superficial and not genuine."
        },

        /* PASSAGE 3: Fintech & Digital Payments (Persuasive) */
        {
            id: "mcet-q-011", type: "case-study", difficulty: "medium",
            passage: "The digitization of currency is not merely a convenience; it is a catalyst for financial inclusion. In developing economies, the rise of mobile wallets has bypassed the traditional banking infrastructure, allowing millions of unbanked individuals to participate in the formal economy. However, the transition to a 'cashless society' is not without its perils. The most significant concern is the erosion of financial privacy. Every digital transaction leaves a data trail that can be harvested by corporations for targeted advertising or scrutinized by governments. Furthermore, a purely digital system is vulnerable to 'technological exclusion.' If payment systems require high-speed internet and expensive smartphones, the most vulnerable segments of society—the elderly and those in remote areas—could be effectively barred from essential services. Therefore, a balanced approach should preserve cash as an alternative while improving the security and accessibility of digital corridors. We must ensure that the speed of innovation does not outpace the protection of the individual.",
            question: "What is the primary benefit of mobile wallets discussed in the passage?",
            options: [
                "Higher interest rates than banks.",
                "Bypassing traditional banking to promote financial inclusion.",
                "Eliminating the need for internet connectivity.",
                "Providing free smartphones to all users."
            ],
            correct: 1,
            explanation: "The passage states they have 'bypassed the traditional banking infrastructure' for 'financial inclusion'."
        },
        {
            id: "mcet-q-012", type: "case-study", difficulty: "medium",
            passage: "The digitization of currency is not merely a convenience; it is a catalyst for financial inclusion. In developing economies, the rise of mobile wallets has bypassed the traditional banking infrastructure, allowing millions of unbanked individuals to participate in the formal economy. However, the transition to a 'cashless society' is not without its perils. The most significant concern is the erosion of financial privacy. Every digital transaction leaves a data trail that can be harvested by corporations for targeted advertising or scrutinized by governments. Furthermore, a purely digital system is vulnerable to 'technological exclusion.' If payment systems require high-speed internet and expensive smartphones, the most vulnerable segments of society—the elderly and those in remote areas—could be effectively barred from essential services. Therefore, a balanced approach should preserve cash as an alternative while improving the security and accessibility of digital corridors. We must ensure that the speed of innovation does not outpace the protection of the individual.",
            question: "The author expresses concern about 'financial privacy' because:",
            options: [
                "Banks charge too much for privacy services.",
                "Digital transactions leave a data trail that can be exploited.",
                "Cash is too heavy to carry around safely.",
                "Mobile wallets are easily stolen physically."
            ],
            correct: 1,
            explanation: "The passage mentions data trails can be harvested by corporations or scrutinized by governments."
        },
        {
            id: "mcet-q-013", type: "case-study", difficulty: "hard",
            passage: "The digitization of currency is not merely a convenience; it is a catalyst for financial inclusion. In developing economies, the rise of mobile wallets has bypassed the traditional banking infrastructure, allowing millions of unbanked individuals to participate in the formal economy. However, the transition to a 'cashless society' is not without its perils. The most significant concern is the erosion of financial privacy. Every digital transaction leaves a data trail that can be harvested by corporations for targeted advertising or scrutinized by governments. Furthermore, a purely digital system is vulnerable to 'technological exclusion.' If payment systems require high-speed internet and expensive smartphones, the most vulnerable segments of society—the elderly and those in remote areas—could be effectively barred from essential services. Therefore, a balanced approach should preserve cash as an alternative while improving the security and accessibility of digital corridors. We must ensure that the speed of innovation does not outpace the protection of the individual.",
            question: "What does 'technological exclusion' mean in the context of the passage?",
            options: [
                "Hacking attacks on large technology companies.",
                "When vulnerable segments are barred from services due to lack of technology access.",
                "When people choose to stop using technology voluntarily.",
                "The process of building more cell towers in cities."
            ],
            correct: 1,
            explanation: "It refers to people (elderly, remote) being barred from services because they lack the required tech (internet/smartphones)."
        },
        {
            id: "mcet-q-014", type: "case-study", difficulty: "medium",
            passage: "The digitization of currency is not merely a convenience; it is a catalyst for financial inclusion. In developing economies, the rise of mobile wallets has bypassed the traditional banking infrastructure, allowing millions of unbanked individuals to participate in the formal economy. However, the transition to a 'cashless society' is not without its perils. The most significant concern is the erosion of financial privacy. Every digital transaction leaves a data trail that can be harvested by corporations for targeted advertising or scrutinized by governments. Furthermore, a purely digital system is vulnerable to 'technological exclusion.' If payment systems require high-speed internet and expensive smartphones, the most vulnerable segments of society—the elderly and those in remote areas—could be effectively barred from essential services. Therefore, a balanced approach should preserve cash as an alternative while improving the security and accessibility of digital corridors. We must ensure that the speed of innovation does not outpace the protection of the individual.",
            question: "Which stance does the author take regarding cash?",
            options: [
                "It should be immediately banned to stop corruption.",
                "It is obsolete and should be replaced by cryptocurrency.",
                "It should be preserved as an alternative in a balanced approach.",
                "It should only be used by the elderly."
            ],
            correct: 2,
            explanation: "The author explicitly calls for a 'balanced approach' that should 'preserve cash as an alternative'."
        },
        {
            id: "mcet-q-015", type: "case-study", difficulty: "easy",
            passage: "The digitization of currency is not merely a convenience; it is a catalyst for financial inclusion. In developing economies, the rise of mobile wallets has bypassed the traditional banking infrastructure, allowing millions of unbanked individuals to participate in the formal economy. However, the transition to a 'cashless society' is not without its perils. The most significant concern is the erosion of financial privacy. Every digital transaction leaves a data trail that can be harvested by corporations for targeted advertising or scrutinized by governments. Furthermore, a purely digital system is vulnerable to 'technological exclusion.' If payment systems require high-speed internet and expensive smartphones, the most vulnerable segments of society—the elderly and those in remote areas—could be effectively barred from essential services. Therefore, a balanced approach should preserve cash as an alternative while improving the security and accessibility of digital corridors. We must ensure that the speed of innovation does not outpace the protection of the individual.",
            question: "A suitable title for this passage would be:",
            options: [
                "The Death of the Banking System",
                "Digital Payments: Inclusion, Privacy, and Balance",
                "Why Smartphones are the Future",
                "The Rise of Targeted Advertising"
            ],
            correct: 1,
            explanation: "The passage covers all three aspects: the inclusion benefit, the privacy risk, and the need for a balanced approach."
        },

        /* PASSAGE 4: Women in Leadership (Inspiring) */
        {
            id: "mcet-q-016", type: "case-study", difficulty: "medium",
            passage: "The 'glass ceiling'—that invisible barrier preventing women from reaching top leadership positions—is finally showing cracks, but the path to parity remains steep. Research indicates that companies with diverse leadership teams outperform their peers in profitability and innovation. This is not just because of 'different perspectives,' but because female leaders often exhibit higher emotional intelligence (EQ) and a collaborative approach to conflict resolution. However, a new challenge has emerged: the 'glass cliff.' This refers to the phenomenon where women are more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest. To achieve genuine progress, we must move beyond tokenism—appointing a single woman to meet a quota—and foster an environment where leadership is judged by competence and character rather than gender. True empowerment is not about giving women a seat at the table; it is about ensuring they have the authority to lead while they are there.",
            question: "What is the 'glass ceiling' as described in the passage?",
            options: [
                "A physical barrier in modern office buildings.",
                "An invisible barrier preventing women from reaching top roles.",
                "A type of transparent roofing material.",
                "A goal for all companies to reach maximum gender diversity."
            ],
            correct: 1,
            explanation: "The passage defines it as an 'invisible barrier preventing women from reaching top leadership positions'."
        },
        {
            id: "mcet-q-017", type: "case-study", difficulty: "hard",
            passage: "The 'glass ceiling'—that invisible barrier preventing women from reaching top leadership positions—is finally showing cracks, but the path to parity remains steep. Research indicates that companies with diverse leadership teams outperform their peers in profitability and innovation. This is not just because of 'different perspectives,' but because female leaders often exhibit higher emotional intelligence (EQ) and a collaborative approach to conflict resolution. However, a new challenge has emerged: the 'glass cliff.' This refers to the phenomenon where women are more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest. To achieve genuine progress, we must move beyond tokenism—appointing a single woman to meet a quota—and foster an environment where leadership is judged by competence and character rather than gender. True empowerment is not about giving women a seat at the table; it is about ensuring they have the authority to lead while they are there.",
            question: "The term 'glass cliff' refers to:",
            options: [
                "Women falling out of leadership positions quickly.",
                "A new technology for skyscraper construction.",
                "Women being appointed to leadership roles specifically during crises.",
                "A strategy for women to quit their jobs for better opportunities."
            ],
            correct: 2,
            explanation: "The passage defines it as people being 'more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest'."
        },
        {
            id: "mcet-q-018", type: "case-study", difficulty: "medium",
            passage: "The 'glass ceiling'—that invisible barrier preventing women from reaching top leadership positions—is finally showing cracks, but the path to parity remains steep. Research indicates that companies with diverse leadership teams outperform their peers in profitability and innovation. This is not just because of 'different perspectives,' but because female leaders often exhibit higher emotional intelligence (EQ) and a collaborative approach to conflict resolution. However, a new challenge has emerged: the 'glass cliff.' This refers to the phenomenon where women are more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest. To achieve genuine progress, we must move beyond tokenism—appointing a single woman to meet a quota—and foster an environment where leadership is judged by competence and character rather than gender. True empowerment is not about giving women a seat at the table; it is about ensuring they have the authority to lead while they are there.",
            question: "Why do diverse leadership teams perform better, according to the passage?",
            options: [
                "Because they spend less money on hiring.",
                "Because they exhibit higher EQ and collaborative conflict resolution.",
                "Because they follow government quotas strictly.",
                "Because they only hire women leaders."
            ],
            correct: 1,
            explanation: "The author attributes success to higher EQ and collaborative approaches."
        },
        {
            id: "mcet-q-019", type: "case-study", difficulty: "medium",
            passage: "The 'glass ceiling'—that invisible barrier preventing women from reaching top leadership positions—is finally showing cracks, but the path to parity remains steep. Research indicates that companies with diverse leadership teams outperform their peers in profitability and innovation. This is not just because of 'different perspectives,' but because female leaders often exhibit higher emotional intelligence (EQ) and a collaborative approach to conflict resolution. However, a new challenge has emerged: the 'glass cliff.' This refers to the phenomenon where women are more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest. To achieve genuine progress, we must move beyond tokenism—appointing a single woman to meet a quota—and foster an environment where leadership is judged by competence and character rather than gender. True empowerment is not about giving women a seat at the table; it is about ensuring they have the authority to lead while they are there.",
            question: "The author uses the term 'tokenism' to criticize:",
            options: [
                "The use of digital tokens for payment.",
                "Appointing a few individuals from an underrepresented group to create an appearance of equality without real change.",
                "The high cost of hiring female leaders.",
                "The use of glass in office architecture."
            ],
            correct: 1,
            explanation: "Tokenism is described as 'appointing a single woman to meet a quota', which implies a superficial effort at equality."
        },
        {
            id: "mcet-q-020", type: "case-study", difficulty: "easy",
            passage: "The 'glass ceiling'—that invisible barrier preventing women from reaching top leadership positions—is finally showing cracks, but the path to parity remains steep. Research indicates that companies with diverse leadership teams outperform their peers in profitability and innovation. This is not just because of 'different perspectives,' but because female leaders often exhibit higher emotional intelligence (EQ) and a collaborative approach to conflict resolution. However, a new challenge has emerged: the 'glass cliff.' This refers to the phenomenon where women are more likely to be appointed to leadership roles during times of crisis, when the risk of failure is highest. To achieve genuine progress, we must move beyond tokenism—appointing a single woman to meet a quota—and foster an environment where leadership is judged by competence and character rather than gender. True empowerment is not about giving women a seat at the table; it is about ensuring they have the authority to lead while they are there.",
            question: "What is the author's final definition of 'true empowerment'?",
            options: [
                "Giving women a physical seat in the boardroom.",
                "Judging leadership purely on characters and gender balance.",
                "Ensuring women have the actual authority to lead, not just the title.",
                "Closing all glass factories to prevent glass cliffs."
            ],
            correct: 2,
            explanation: "The passage concludes: 'True empowerment is... about ensuring they have the authority to lead while they are there.'"
        }
    ]
};
