/**
 * Current Affairs Study Notes - Top 50 High-Priority Topics
 * Format: Comprehensive reading passages for "Read Before You Answer" mode.
 * Rules: 40-60 word summaries, 15-25 word key points, [WHAT] -> [WHY] structure.
 */

export const caStudyNotes = [
    // =================================================================
    // BUCKET 1: NATIONAL & POLITY (1-12)
    // =================================================================
    {
        id: "sn-001", topicNumber: 1,
        title: "16th Finance Commission",
        caTag: "national-polity", topicYear: 2023,
        examTags: ["MH-CET", "CUET"],
        summary: "The 16th Finance Commission, chaired by Dr. Arvind Panagariya, was constituted in late 2023 to recommend the distribution of tax revenues between the Centre and States for the 2026-2031 period. It succeeds the 15th Commission led by NK Singh, ensuring fiscal federalism continues under constitutional mandates.",
        keyPoints: [
            "Chairman Dr. Arvind Panagariya → [WHAT] He leads the 16th Commission [WHY] bringing expertise as former NITI Aayog Vice Chairman to revenue sharing.",
            "Constitutional Article 280 → [WHAT] The President constitutes the Commission every five years [WHY] to maintain balanced financial relations between central and state governments.",
            "Vertical Devolution Mandate → [WHAT] Recommending the percentage of central taxes given to states [WHY] which directly impacts state budgets and infrastructure development funds.",
            "Horizontal Devolution Logic → [WHAT] Deciding how the tax pool is divided among different states [WHY] based on criteria like population, forest cover, and fiscal performance.",
            "Period 2026 to 2031 → [WHAT] These recommendations will be effective for five years from April 2026 [WHY] replacing the current 15th Finance Commission guidelines."
        ],
        examAngle: "Most likely asked as: Who is the Chairman of the 16th Finance Commission? OR Which Article covers it?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-001"
    },
    {
        id: "sn-002", topicNumber: 2,
        title: "New Criminal Laws (BNS, BNSS, BSA)",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Effective July 1, 2024, India replaced colonial-era legal frameworks with three new laws: Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA). These modernise the justice system by prioritizing digitisation, victim rights, and removing archaic terms like 'sedition'.",
        keyPoints: [
            "Effective July 1 2024 → [WHAT] The date all three laws came into force across India [WHY] marking the end of the colonial IPC, CrPC, and Evidence Act.",
            "BNS Replaces IPC 1860 → [WHAT] The new penal code defining crimes and punishments [WHY] which includes new categories like organized crime and mob lynching penalties.",
            "BNSS Replaces CrPC 1973 → [WHAT] Governance of criminal procedure and investigation [WHY] mandating forensic evidence for serious crimes and time-bound trial completions.",
            "BSA Replaces Evidence Act → [WHAT] Modern rules for admitting evidence in courts [WHY] specifically recognizing electronic and digital records as primary evidence for trials.",
            "Sedition Law Removal → [WHAT] The term 'sedition' has been omitted from the new BNS [WHY] and replaced by broader provisions against acts endangering national sovereignty."
        ],
        examAngle: "Most likely asked as: Which law replaced the IPC? OR What is the effective date of the new laws?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-021"
    },
    {
        id: "sn-003", topicNumber: 3,
        title: "Nari Shakti Vandan Adhiniyam",
        caTag: "national-polity", topicYear: 2023,
        examTags: ["MH-CET", "CUET"],
        summary: "Passed during a special session in September 2023, the 106th Constitutional Amendment Act reserves 33% of seats for women in the Lok Sabha and State Assemblies. It represents a historic step toward gender parity in Indian politics, though it awaits the next delimitation exercise to take effect.",
        keyPoints: [
            "33 Percent Reservation → [WHAT] One-third of seats in Lok Sabha and Assemblies reserved for women [WHY] to enhance female representation in top-tier policymaking bodies.",
            "106th Amendment Act → [WHAT] The official constitutional number assigned to the Women's Reservation Bill [WHY] which identifies it as a permanent legal framework.",
            "Exclusion of Rajya Sabha → [WHAT] The reservation applies only to directly elected houses [WHY] and does not currently extend to the Upper House or State Councils.",
            "Post Delimitation Implementation → [WHAT] The law will activate only after the next census and delimitation [WHY] ensuring seat boundaries are correctly adjusted for the change.",
            "Fifteen Year Duration → [WHAT] The reservation is initially set for a period of fifteen years [WHY] after which Parliament can decide on its further extension."
        ],
        examAngle: "Most likely asked as: What percentage of seats are reserved? OR Which Constitutional Amendment number is this?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-041"
    },
    {
        id: "sn-004", topicNumber: 4,
        title: "Digital Personal Data Protection (DPDP) Act",
        caTag: "national-polity", topicYear: 2023,
        examTags: ["MH-CET", "CUET"],
        summary: "The DPDP Act 2023 is India's first comprehensive legal framework for data privacy, regulating how entities process the personal data of citizens. It balances the individual's right to privacy with the need for lawful data processing, imposing heavy penalties for data breaches to ensure corporate accountability.",
        keyPoints: [
            "Data Principal and Fiduciary → [WHAT] Legal terms for citizens (principals) and companies (fiduciaries) [WHY] defining the roles and responsibilities of both parties in data handling.",
            "Consent Based Processing → [WHAT] Personal data can only be processed with the explicit consent of the individual [WHY] putting citizens in control of their digital footprint.",
            "Data Protection Board → [WHAT] The regulatory body established to enforce the Act [WHY] providing a dedicated forum for grievance redressal and penalty imposition.",
            "Penalty Up to ₹250 Crore → [WHAT] Maximum fine for failing to prevent a major data breach [WHY] serving as a strong deterrent against negligent data security practices.",
            "Data of Children → [WHAT] Stricter rules for processing data of individuals under eighteen [WHY] to protect minors from targeted advertising or harmful online profiling."
        ],
        examAngle: "Most likely asked as: What is the maximum penalty for a data breach? OR What is the regulator's name?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-061"
    },
    {
        id: "sn-005", topicNumber: 5,
        title: "PM Surya Ghar Muft Bijli Yojana",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Launched in February 2024, this scheme aims to provide free electricity to one crore households by promoting rooftop solar installations. With a massive investment of ₹75,000 crore, it reduces the electricity burden on low-income families while simultaneously advancing India's renewable energy and carbon neutrailty targets.",
        keyPoints: [
            "One Crore Households Target → [WHAT] The goal to install rooftop solar in ten million homes [WHY] creating a decentralized solar energy network across urban and rural India.",
            "300 Units Free Electricity → [WHAT] Monthly limit of free power provided through solar generation [WHY] significantly lowering recurring utility expenses for middle and low-income citizens.",
            "Subsidy Up to ₹78000 → [WHAT] Direct financial assistance from the central government for installation [WHY] making solar technology affordable for families without high upfront capital.",
            "Zero Cost Loans → [WHAT] Low-interest collateral-free loans provided by banks for the remaining cost [WHY] ensuring that lack of savings does not prevent solar adoption.",
            "Green Energy Transition → [WHAT] Reducing dependence on fossil-fuel based electricity grids [WHY] helping India meet its climate commitment of 500 GW renewable capacity."
        ],
        examAngle: "Most likely asked as: What is the target number of households? OR How many free units are provided regularly?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-081"
    },
    {
        id: "sn-006", topicNumber: 6,
        title: "One Nation One Election",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The High-Level Committee on Simultaneous Elections, chaired by former President Ram Nath Kovind, recommended synchronizing Lok Sabha and State Assembly polls. The proposal aims to save public resources, reduce policy paralysis during frequent elections, and simplify the democratic process through a phased constitutional amendment strategy.",
        keyPoints: [
            "Ram Nath Kovind Committee → [WHAT] The high-level panel that studied the feasibility of simultaneous polls [WHY] providing the foundational roadmap for this massive structural reform.",
            "Simultaneous Election Cycle → [WHAT] Conducting Lok Sabha and all Assembly elections together [WHY] to minimize the disruption caused by the Model Code of Conduct.",
            "Phased Implementation Strategy → [WHAT] Recommending synchronization first for assemblies, then for local bodies [WHY] ensuring a stable transition without overwhelming the logistical infrastructure.",
            "Cost Reduction Benefit → [WHAT] Ending the cycle of continuous elections happening every few months [WHY] saving billions in election management and deployment of security forces.",
            "Constitutional Amendments Needed → [WHAT] Requirement to change Articles 83, 85, and 172 [WHY] to align varying terms of different state assemblies with Parliament.",
        ],
        examAngle: "Most likely asked as: Who chaired the committee on simultaneous elections? OR What is the primary objective?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-101"
    },
    {
        id: "sn-007", topicNumber: 7,
        title: "Union Budget 2025–26",
        caTag: "business-economy", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "Presented on February 1, 2025, the Union Budget focused on 'Viksit Bharat 2047' with landmark middle-class relief. The headline change was a 100% tax rebate for annual incomes up to ₹12 lakh under the new tax regime, alongside a record ₹12.2 lakh crore capital expenditure for infrastructure.",
        keyPoints: [
            "₹12 Lakh Zero Tax → [WHAT] Full tax rebate for annual income up to twelve lakhs [WHY] providing significant disposable income to the middle class and salaried employees.",
            "Record ₹12.2 Lakh Cr Capex → [WHAT] Public investment in roads, railways, and ports [WHY] maintaining the momentum of infrastructure development to fuel overall economic growth.",
            "PM Dhan Dhanya Krishi Yojana → [WHAT] A new ₹24,000 crore annual scheme for farmers [WHY] focusing on high-tech agriculture and productivity in 100 aspirational districts.",
            "Income Tax Standard Deduction → [WHAT] Increased from ₹50,000 to ₹75,000 for salaried individuals [WHY] further reducing the effective taxable income for the working population.",
            "Makhana Board in Bihar → [WHAT] A dedicated developmental body for foxnut (makhana) cultivation [WHY] to boost local exports and provide global marketing for Bihar's GI product."
        ],
        examAngle: "Most likely asked as: What is the new tax-free income limit? OR Name of the 2025 agriculture scheme.",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-001"
    },
    {
        id: "sn-008", topicNumber: 8,
        title: "RBI Repo Rate Cut (Feb 2025)",
        caTag: "business-economy", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "In February 2025, the Reserve Bank of India reduced the repo rate by 25 basis points to 6.25%. This was the first rate cut in nearly five years, signaling a shift toward growth support as inflation stabilized. It was the first major decision under the new Governor, Sanjay Malhotra.",
        keyPoints: [
            "Repo Rate at 6.25 Percent → [WHAT] A 25 basis point reduction from the previous 6.50% [WHY] signaling the start of a lower interest rate era for the Indian economy.",
            "Governor Sanjay Malhotra → [WHAT] He took over from Shaktikanta Das as the 26th Governor [WHY] leading the first Monetary Policy Committee meeting of the year 2025.",
            "First Cut Since May 2020 → [WHAT] Ending a long period of high or stable interest rates [WHY] indicating that the central bank is now confident about inflation management.",
            "Neutral Stance Adoption → [WHAT] Shifting the policy outlook from 'withdrawal of accommodation' [WHY] allowing flexibility to support industrial growth and consumer spending equally.",
            "Impact on Bank EMIs → [WHAT] Lowering the cost of borrowing for home and auto loans [WHY] as commercial banks pass on the rate reduction to their retail customers."
        ],
        examAngle: "Most likely asked as: What is the current repo rate? OR Who is the 26th Governor of RBI?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-006"
    },
    {
        id: "sn-009", topicNumber: 9,
        title: "Maha Kumbh 2025",
        caTag: "national-polity", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "The Maha Kumbh 2025, held at Prayagraj (UP), was the largest human gathering in history. Occurring once every 12 years at the Triveni Sangam, it utilized AI-based crowd management and digital infrastructure to safely host over 40 crore pilgrims during its 45-day duration in January and February.",
        keyPoints: [
            "Triveni Sangam Location → [WHAT] Confluence of the Ganga, Yamuna, and mythical Saraswati rivers [WHY] the most sacred site for the ritual holi dip in Prayagraj.",
            "Once Every 12 Years → [WHAT] The cyclical frequency of the Maha Kumbh Mela [WHY] distinguishing it from the smaller Ardh Kumbh which occurs every six years.",
            "40-45 Crore Attendees → [WHAT] The massive estimated scale of the pilgrim gathering [WHY] making it the world's largest peaceful assembly of human beings.",
            "UNESCO Cultural Heritage → [WHAT] Inscribed on the Intangible Cultural Heritage list in 2017 [WHY] recognizing its global importance as a living cultural and religious tradition.",
            "AI and Digital Kumbh → [WHAT] Use of facial recognition and AI crowd tracking [WHY] ensures safety and prevents stampedes in highly congested bathing ghats."
        ],
        examAngle: "Most likely asked as: Where was Maha Kumbh 2025 held? OR How often does it occur?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-008"
    },
    {
        id: "sn-010", topicNumber: 10,
        title: "Delhi Elections 2025",
        caTag: "national-polity", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "The Delhi Assembly Election 2025 resulted in a historic power shift as the BJP won 48 out of 70 seats, ending the Aam Aadmi Party's (AAP) decade-long rule. Rekha Gupta was sworn in as the first woman Chief Minister from the BJP in Delhi, marking the party's return after 27 years.",
        keyPoints: [
            "BJP Wins 48 Seats → [WHAT] A decisive majority in the 70-member Delhi Legislative Assembly [WHY] ending the political dominance of Arvind Kejriwal's Aam Aadmi Party.",
            "CM Rekha Gupta → [WHAT] The BJP MLA who assumed the role of Chief Minister [WHY] leading the national capital's administrative transition after nearly three decades.",
            "AAP Seats to 22 → [WHAT] A significant reduction in seats for the incumbent party [WHY] indicating a major shift in urban voter sentiment toward central governance models.",
            "Kejriwal New Delhi Loss → [WHAT] The upset defeat of the sitting CM in his constituency [WHY] symbolizing the extent of the political change in the 2025 contest.",
            "Congress Zero Seats → [WHAT] The third consecutive assembly election with no representation for Congress [WHY] confirming the bipolar nature of the current Delhi political landscape."
        ],
        examAngle: "Most likely asked as: Which party won Delhi 2025? OR Who is the new Chief Minister?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-009"
    },
    {
        id: "sn-011", topicNumber: 11,
        title: "Padma Awards 2025",
        caTag: "awards-sports", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "Announced on Republic Day 2025, the Padma Awards recognized excellence across arts, industry, and social service. Posthumous Padma Vibhushans for folk icon Sharda Sinha and industrialist Osamu Suzuki highlighted the 2025 list, which celebrated both grassroots achievers and international contributors to India's growth.",
        keyPoints: [
            "Sharda Sinha Posthumous → [WHAT] The 'Bihar Kokila' awarded the highest Padma honor [WHY] for her lifelong preservation of Bhojpuri and Maithili folk music traditions.",
            "Osamu Suzuki (Japan) → [WHAT] Former Suzuki chairman awarded Padma Vibhushan [WHY] for his monumental role in modernizing India's automotive industry through Maruti Suzuki.",
            "Awards Announcement Day → [WHAT] Every year on the eve of Republic Day (January 26) [WHY] to honor the highest civilian achievements of Indian citizens and friends.",
            "Three Tier Structure → [WHAT] Vibhushan (highest), Bhushan (medium), and Shri (distinguished) [WHY] categorizing the level of exceptional service rendered to the nation.",
            "Posthumous Recognition Focus → [WHAT] Multiple 2025 awards conferred on departed icons [WHY] ensuring their legacy in arts and industry is formally documented by the state."
        ],
        examAngle: "Most likely asked as: Who received Padma Vibhushan for Folk Music? OR Osamu Suzuki's award?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-011"
    },
    {
        id: "sn-012", topicNumber: 12,
        title: "Bharat Ratna 2024/2025",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Bharat Ratna, India's highest civilian award, saw five recipients in 2024, the highest in a single year. Honorees included LK Advani, and posthumous awards for Karpoori Thakur, PV Narasimha Rao, Chaudhary Charan Singh, and MS Swaminathan, spanning politics, governance, and agricultural science.",
        keyPoints: [
            "Five Recipients in 2024 → [WHAT] A historic high for the number of Bharat Ratnas in one year [WHY] breaking the traditional informal limit of three awards per year.",
            "MS Swaminathan → [WHAT] The 'Father of Green Revolution' honored posthumously [WHY] for ensuring India's food security through high-yield variety seeds and techniques.",
            "PV Narasimha Rao → [WHAT] Former PM recognized for the 1991 economic reforms [WHY] which liberalized India's economy and integrated it with the global market.",
            "Karpoori Thakur → [WHAT] Former Bihar CM honored for social justice leadership [WHY] specifically for his work in implementing reservations for vulnerable backward classes.",
            "LK Advani → [WHAT] Senior BJP leader and former Deputy PM honored [WHY] for his multi-decade contribution to Indian polity and national development.",
        ],
        examAngle: "Most likely asked as: Who is the 'Father of Green Revolution' honored in 2024? OR Total recipients?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-005"
    },

    // =================================================================
    // BUCKET 2: INTERNATIONAL (13-18)
    // =================================================================
    {
        id: "sn-013", topicNumber: 13,
        title: "Sweden Joins NATO",
        caTag: "international-relations", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In March 2024, Sweden officially became the 32nd member of NATO, ending over 200 years of military non-alignment. This historic shift, following Finland's entry in 2023, was triggered by security concerns arising from the Russia-Ukraine conflict, fundamentally redrawing Northern Europe's security map.",
        keyPoints: [
            "32nd NATO Member → [WHAT] Sweden's formal entry into the North Atlantic Treaty Organisation [WHY] completing the inclusion of most Nordic countries into the Western alliance.",
            "End of 200 Year Neutrality → [WHAT] Sweden had not been part of a military alliance since 1814 [WHY] marking a radical change in its long-standing foreign policy doctrine.",
            "Trigger: Ukraine Conflict → [WHAT] Russia's 2022 invasion of Ukraine accelerated the application [WHY] as Sweden sought collective security guarantees under NATO's Article 5.",
            "Finland as 31st Member → [WHAT] Sweden's neighbor joined exactly one year earlier in April 2023 [WHY] after both applied together following the security shift in Europe.",
            "Strategic Baltic Control → [WHAT] Sweden's entry turns the Baltic Sea into a 'NATO Lake' [WHY] giving the alliance near-total control over key maritime routes in Northern Europe."
        ],
        examAngle: "Most likely asked as: Which country is the 32nd member of NATO? OR What year did they join?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-ir-021"
    },
    {
        id: "sn-014", topicNumber: 14,
        title: "BRICS Expansion 2024",
        caTag: "international-relations", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "On January 1, 2024, BRICS expanded from 5 to 10 members by adding Egypt, Ethiopia, Iran, Saudi Arabia, and the UAE. This expansion (BRICS+) aims to enhance the group's influence in the global 'de-dollarization' movement and provide a stronger voice for the Global South in international forums.",
        keyPoints: [
            "Five New Members Joined → [WHAT] Egypt, Ethiopia, Iran, Saudi Arabia, and UAE became full members [WHY] doubling the size of the original five-nation grouping.",
            "Original BRICS Nations → [WHAT] Brazil, Russia, India, China, and South Africa [WHY] who formed the initial bloc to challenge Western economic hegemony.",
            "Focus on De-dollarization → [WHAT] Encouraging trade in local currencies instead of the US dollar [WHY] to reduce vulnerability to Western sanctions and dollar fluctuations.",
            "Global South Leadership → [WHAT] The expanded group now represents over 45% of the world population [WHY] positioning itself as the primary alternative to the G7.",
            "Argentina's Withdrawal → [WHAT] The new Argentinian government declined the invitation to join [WHY] citing a shift in their national foreign policy toward the West.",
        ],
        examAngle: "Most likely asked as: How many members does BRICS have now? OR Which nations joined in 2024?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-ir-041"
    },
    {
        id: "sn-015", topicNumber: 15,
        title: "G20 2023 — India's Presidency",
        caTag: "international-relations", topicYear: 2023,
        examTags: ["MH-CET", "CUET"],
        summary: "India's landmark G20 presidency culminated in the New Delhi Summit (Sept 2023), centered on the theme 'Vasudhaiva Kutumbakam'. Key outcomes included the permanent induction of the African Union into G20 and the launch of the Global Biofuels Alliance and the India-Middle East-Europe trade corridor.",
        keyPoints: [
            "African Union Induction → [WHAT] The 55-nation bloc was made a permanent G20 member [WHY] making the G20 more inclusive of the African continent's interests.",
            "Vasudhaiva Kutumbakam Theme → [WHAT] Sanskrit for 'One Earth, One Family, One Future' [WHY] representing India's civilizational approach to solving global challenges together.",
            "IMEC Corridor Launch → [WHAT] India-Middle East-Europe Economic Corridor announced during the summit [WHY] as a major alternative to China's Belt and Road Initiative.",
            "Global Biofuels Alliance → [WHAT] An India-led initiative to promote sustainable fuel use [WHY] aiming to accelerate the world's transition toward clean and renewable energy.",
            "New Delhi Declaration → [WHAT] A consensus document signed by all members despite Ukraine tensions [WHY] showcasing India's diplomatic strength as a global mediator.",
        ],
        examAngle: "Most likely asked as: What was the theme of India's G20? OR Which new member joined?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-ir-001"
    },
    {
        id: "sn-016", topicNumber: 16,
        title: "Operation Sindoor 2025",
        caTag: "international-relations", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "In May 2025, India launched Operation Sindoor, a set of targeted air and missile strikes on terror infrastructure in Pakistan-administered Kashmir and Punjab. Initiated after the Pahalgam terror attack, it demonstrated India's proactive defense doctrine and led to a US-brokered ceasefire within four days of the strikes.",
        keyPoints: [
            "Pahalgam Attack Trigger → [WHAT] Terrorists killed 26 tourists in Jammu and Kashmir on April 22 [WHY] forcing a decisive military response from the Indian government.",
            "IAF Air Strikes May 7 → [WHAT] Targeted strikes on 9 militant camps in Muzaffarabad and Bahawalpur [WHY] using precise standoff weapons to avoid civilian and military casualties.",
            "Operation Sindoor Name → [WHAT] The official code name for the 2025 retaliatory campaign [WHY] symbolizing the national resolve to protect its sovereignty and citizens.",
            "US Brokered Ceasefire → [WHAT] Mediation by US Sec Marco Rubio on May 10 [WHY] to prevent a full-scale war between the two nuclear-armed neighbors in South Asia.",
            "Indus Water Treaty Pullback → [WHAT] India suspended the treaty meetings as part of diplomatic pressure [WHY] using water as a non-military leverage to deter future terror support."
        ],
        examAngle: "Most likely asked as: What was Operation Sindoor? OR When was the Pahalgam attack?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-013"
    },
    {
        id: "sn-017", topicNumber: 17,
        title: "COP29 — Baku 2024",
        caTag: "international-relations", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 29th UN Climate Change Conference (COP29) was held in Baku, Azerbaijan, in November 2024. It focused heavily on 'Climate Finance', with developed nations agreeing to a new goal of $300 billion annually by 2035 to help developing countries transition to green energy and build climate resilience.",
        keyPoints: [
            "Baku Azerbaijan Host → [WHAT] The location of the 2024 UN Climate Summit [WHY] continuing the trend of oil-producing nations hosting global climate negotiations.",
            "NCQG Finance Goal → [WHAT] New Collective Quantified Goal set at $300 billion per year [WHY] replacing the previous inadequate $100 billion annual climate fund commitment.",
            "Developing Nation Discontent → [WHAT] India and others demanded $1 trillion to meet green goals [WHY] highlighting the gap between promised funds and actual climate costs.",
            "Belém Brazil COP30 → [WHAT] The designated host for the next major summit in 2025 [WHY] where the focus will shift to Amazon rainforest protection and biodiversity.",
            "Global Stocktake Follow-up → [WHAT] Reviewing progress made since the COP28 pledge to 'transition away' from fossil fuels [WHY] to ensure countries stay on the 1.5-degree path.",
        ],
        examAngle: "Most likely asked as: Where was COP29 held? OR What is the new climate finance goal?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-ir-061"
    },
    {
        id: "sn-018", topicNumber: 18,
        title: "QUAD Summit 2024",
        caTag: "international-relations", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 2024 QUAD Summit, hosted by US President Biden in Delaware, reaffirmed the commitment of India, USA, Japan, and Australia to a 'Free and Open Indo-Pacific'. The group expanded cooperation in maritime security, semiconductor supply chains, and health through the new 'Cancer Moonshot' initiative for the region.",
        keyPoints: [
            "Wilmington Delaware Host → [WHAT] The venue for the 2024 gathering of QUAD leaders [WHY] hosted personally by President Biden in his hometown to show commitment.",
            "Four Nation Alignment → [WHAT] India, USA, Japan, and Australia (The Quad) [WHY] cooperating to balance China's growing military and economic assertiveness in Asia.",
            "Indo-Pacific Maritime Security → [WHAT] Launch of the 'Quad-at-Sea' Ship Observer Mission [WHY] to improve tracking of illegal fishing and maritime law violations in the region.",
            "Cancer Moonshot Initiative → [WHAT] A new health collaboration to prevent and treat cervical cancer [WHY] showcasing the Quad's utility as a provider of 'public goods' beyond security.",
            "Semiconductor Supply Chains → [WHAT] Pledging to diversify the production of critical microchips [WHY] reducing the global dependence on any single country (like China or Taiwan).",
        ],
        examAngle: "Most likely asked as: Which four countries are members of the QUAD? OR Where was the 2024 summit?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-ir-081"
    },

    // =================================================================
    // BUCKET 3: BUSINESS, BANKING & ECONOMY (19-25)
    // =================================================================
    {
        id: "sn-019", topicNumber: 19,
        title: "India's GDP & Economic Growth 2024",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, India maintained its position as the fastest-growing major economy, with real GDP growth estimated at approximately 7%. Supported by strong domestic demand and government-led infrastructure investment, the economy crossed the $3.5 trillion milestone, moving steadily toward the goal of becoming a $5 trillion economy.",
        keyPoints: [
            "7 Percent Real growth → [WHAT] The fiscal year 2023-24 GDP expansion rate [WHY] exceeding most global growth averages despite international inflationary pressures.",
            "Fastest Growing Major Economy → [WHAT] India's relative status compared to other G20 nations [WHY] attracting significant Foreign Direct Investment and manufacturing interest.",
            "Sectoral Resilience → [WHAT] Strong performance in manufacturing and services (8%+ growth) [WHY] compensating for the moderate growth in the agricultural sector due to weather.",
            "5 Trillion Goal → [WHAT] The central government's strategic economic target [WHY] which requires sustained high-single-digit growth rates for the next several years.",
            "Capex Driven Recovery → [WHAT] Heavy government spending on roads and railways [WHY] effectively crowding-in private investment and creating widespread employment opportunities."
        ],
        examAngle: "Most likely asked as: What is India's estimated GDP growth for 23-24? OR Target size by 2027?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-001"
    },
    {
        id: "sn-020", topicNumber: 20,
        title: "Hindenburg-SEBI Controversy",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, US-based short-seller Hindenburg Research alleged that SEBI Chairperson Madhabi Puri Buch had conflict-of-interest links with offshore funds used by the Adani Group. This sparked a major regulatory and political storm in India, leading to investigations by various committees and intense scrutiny of market transparency.",
        keyPoints: [
            "Hindenburg Research Report → [WHAT] The US firm that alleged irregularities in Indian markets [WHY] impacting the stock valuations of several large industrial conglomerates.",
            "SEBI Chairperson Allegations → [WHAT] Alleged previous investments in offshore investment vehicles [WHY] raising questions about the impartiality of the primary market regulator.",
            "Conflict of Interest → [WHAT] The central theme of the 2024 regulatory controversy [WHY] leading to calls for more stringent disclosure norms for government officials.",
            "Supreme Court Committee → [WHAT] Oversight on the investigation into Adani-Hindenburg issues [WHY] ensuring that technical market matters are reviewed by independent experts.",
            "Market Stability Outcome → [WHAT] Despite the initial volatility, Indian markets recovered quickly [WHY] demonstrating the underlying depth and resilience of the domestic stock exchanges."
        ],
        examAngle: "Most likely asked as: Who is the Chairperson of SEBI? OR Which US firm released the report?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-021"
    },
    {
        id: "sn-021", topicNumber: 21,
        title: "UPI International Expansion",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India's Unified Payments Interface (UPI) significantly expanded its global footprint in 2024, launching in countries like France, Sri Lanka, UAE, and Mauritius. Facilitated by NPCI International, this expansion allows Indian tourists to pay in local currencies using QR codes, effectively globalizing India's digital payment stack.",
        keyPoints: [
            "Lancement in France → [WHAT] UPI accepted at the Eiffel Tower in February 2024 [WHY] marking the first major European acceptance of India's payment system.",
            "Middle East and Africa → [WHAT] Expansion into UAE and Mauritius markets [WHY] catering to the large Indian diaspora and high tourist traffic in these regions.",
            "National Payments Corp (NPCI) → [WHAT] The umbrella organization managing the UPI infrastructure [WHY] leading the diplomatic push to integrate Indian fintech with global rails.",
            "Cross Border QR Payments → [WHAT] Tourists scan local QR codes to pay from Indian banks [WHY] eliminating the need for high-fee currency exchange and forex cards.",
            "Digital Diplomacy → [WHAT] India sharing its 'Digital Public Infrastructure' (DPI) worldwide [WHY] positioning itself as a leader in low-cost financial inclusion technology."
        ],
        examAngle: "Most likely asked as: Which was the first European landmark to accept UPI? OR Which body manages UPI?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-041"
    },
    {
        id: "sn-022", topicNumber: 22,
        title: "RBI Digital Rupee (e₹)",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The Reserve Bank of India (RBI) scaled its Central Bank Digital Currency (CBDC) pilot in 2024, reaching one million daily transactions. The e-Rupee provides a digital version of cash, offering the finality of currency without the need for a bank intermediary, aiming to reduce the cost of physical cash management.",
        keyPoints: [
            "Central Bank Digital Currency → [WHAT] The digital form of legal tender issued by the RBI [WHY] providing a safe alternative to private cryptocurrencies like Bitcoin.",
            "Retail and Wholesale Pilots → [WHAT] Two separate versions of e-Rupee for citizens and banks [WHY] testing different use cases from buying groceries to interbank settlements.",
            "Finality of Cash → [WHAT] Unlike UPI, e-Rupee is an digital asset, not just a transfer system [WHY] meaning the transaction settles instantly between two digital wallets.",
            "Programmable Money Features → [WHAT] Ability to set conditions for using certain digital funds [WHY] enabling direct benefit transfers (DBT) that can only be spent on specific items.",
            "Reduced Cash Costs → [WHAT] Decreasing the dependency on printing and transporting paper currency [WHY] saving thousands of crores for the central bank annually."
        ],
        examAngle: "Most likely asked as: What is the full form of CBDC? OR Which bank issues the e-Rupee?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-061"
    },
    {
        id: "sn-023", topicNumber: 23,
        title: "Reliance-Disney Merger (JioStar)",
        caTag: "business-economy", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "In February 2025, Reliance Industries and The Walt Disney Company completed a $8.5 billion merger, creating India's largest media entity, 'JioStar'. The joint venture combined 120+ TV channels and the streaming services JioCinema and Disney+ Hotstar into a unified platform called 'JioHotstar'.",
        keyPoints: [
            "JioHotstar Unified App → [WHAT] The single streaming platform launched on February 14, 2025 [WHY] creating a dominant digital advertising and content ecosystem in India.",
            "8.5 Billion Dollar Valuation → [WHAT] The massive size of the joint venture transaction [WHY] allowing the entity to dominate sports rights like IPL and ICC tournaments.",
            "Nita Ambani as Chairperson → [WHAT] She leads the board of the newly formed JioStar JV [WHY] giving Reliance significant strategic control over the combined entity.",
            "Uday Shankar Vice Chair → [WHAT] The media veteran provides strategic guidance [WHY] leveraging his experience in scaling Star and Hotstar during their early growth.",
            "JioStar JV Brand → [WHAT] The official name of the merged Reliance-Disney business [WHY] representing a fusion of the Jio ecosystem with the Star India legacy."
        ],
        examAngle: "Most likely asked as: What is the name of the merged entity? OR Who is the Chairperson?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-015"
    },
    {
        id: "sn-024", topicNumber: 24,
        title: "Adani Group Developments 2024",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The Adani Group focused on debt reduction and critical infrastructure in 2024, including the operationalizing of the Vizhinjam International Seaport. Despite international report challenges, the group expanded into green energy and defense, maintaining its position as one of India's most significant conglomerate players.",
        keyPoints: [
            "Vizhinjam Port Kerala → [WHAT] Commencement of operations at India's first deep-water transshipment port [WHY] reducing India's dependence on foreign ports like Colombo for large ships.",
            "Green Energy Push → [WHAT] Massive investments in solar and wind through Adani Green Energy [WHY] aligning the group's growth with India's 2030 renewable energy targets.",
            "Debt Reduction Strategy → [WHAT] Prepayment of loans and raising equity through US-based GQG Partners [WHY] to restore investor confidence after the Hindenburg controversy.",
            "Airport Management → [WHAT] Control over major Indian hubs including Mumbai and Ahmedabad [WHY] building a monopoly-like scale in the country's aviation infrastructure.",
            "Defence and Aerospace → [WHAT] Partnering with global firms to manufacture drones and small arms [WHY] supporting the 'Atmanirbhar Bharat' mission in critical defense technology."
        ],
        examAngle: "Most likely asked as: Where is the Vizhinjam Port located? OR Name of the Adani renewable energy arm.",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-081"
    },
    {
        id: "sn-025", topicNumber: 25,
        title: "Byju's & Indian EdTech Crisis",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Once India's most valuable startup, Byju's faced a severe liquidity and governance crisis in 2024, leading to valuation markdowns and insolvency proceedings. This prompted a broader correction in the Indian EdTech sector, forcing startups to shift from aggressive growth to sustainable, profitable business models.",
        keyPoints: [
            "Insolvency Proceedings → [WHAT] BCCI and lenders filing cases against Byju's for non-payment [WHY] highlighting the dangers of excessive debt and poor financial management.",
            "Governance Failures → [WHAT] Resignation of auditors and board members over transparency [WHY] raising questions about founder-led startups and lack of board oversight.",
            "Valuation Markdown → [WHAT] Value dropping from $22 billion to less than $200 million [WHY] causing significant losses for early-stage and institutional global investors.",
            "Shift to Hybrid Models → [WHAT] Survival strategy involving physical tuition centers (Byju's Tuition Center) [WHY] to compete with traditional coaching centers like Allen and Aakash.",
            "EdTech Sector Correction → [WHAT] Investors pulling back from high-burn edtech companies [WHY] mandating a focus on unit economics and 'EBITDA' profitability for new startups."
        ],
        examAngle: "Most likely asked as: Which Indian startup faced major insolvency in 2024? OR What is the trend in EdTech?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-101"
    },

    // =================================================================
    // BUCKET 4: SCIENCE, SPACE & DEFENCE (26-30)
    // =================================================================
    {
        id: "sn-026", topicNumber: 26,
        title: "ISRO Gaganyaan 2024 Prep",
        caTag: "science-defence", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, ISRO achieved critical milestones for Gaganyaan, India's first human spaceflight mission. This included the successful CE20 cryogenic engine qualification and the selection of four test pilots. These steps ensure that India is on track to send astronauts to a 400 km orbit for a 3-day mission.",
        keyPoints: [
            "Four Astronauts Selected → [WHAT] Prashanth Nair, Ajit Krishnan, Angad Pratap, and Shubhanshu Shukla [WHY] chosen from the IAF to undergo specialized training at the Yuri Gagarin Centre.",
            "CE20 Cryogenic Engine → [WHAT] Acceptance tests for the upper stage of the LVM3 rocket [WHY] providing the necessary thrust to propel the crew module into space safely.",
            "Vyommitra Robot → [WHAT] A female humanoid robot designed for uncrewed test flights [WHY] to monitor microgravity parameters and system performance before human boarding.",
            "TV-D1 Mission Success → [WHAT] The first Test Vehicle flight demonstrating crew escape systems [WHY] ensuring that astronauts can safely abort the mission in case of launch failure.",
            "400 km Low Earth Orbit → [WHAT] The destination for the Gaganyaan crew capsule [WHY] where they will conduct scientific experiments for three days before returning to Earth."
        ],
        examAngle: "Most likely asked as: What is the name of the Gaganyaan humanoid robot? OR How many astronauts were chosen?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-sd-001"
    },
    {
        id: "sn-027", topicNumber: 27,
        title: "NISAR Mission (NASA-ISRO)",
        caTag: "science-defence", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "NISAR (NASA-ISRO Synthetic Aperture Radar) is a joint mission between the US and India to use advanced radar imaging to map the entire Earth every 12 days. It aims to observe ecosystem disturbances, ice-sheet collapses, and natural hazards like earthquakes and landslides with unprecedented precision.",
        keyPoints: [
            "Dual Frequency Radar → [WHAT] L-band (NASA) and S-band (ISRO) radar systems [WHY] allowing the satellite to see through clouds, vegetation, and darkness for clear mapping.",
            "12 Day Repeat Cycle → [WHAT] Mapping the whole globe systematically every two weeks [WHY] enabling scientists to track minute changes in the Earth's surface over time.",
            "Earthquake Monitoring → [WHAT] Detecting structural movements before and after seismic events [WHY] improving our ability to predict landslides and assess disaster impact quickly.",
            "Agriculture and Forest → [WHAT] Measuring changes in biomass and soil moisture [WHY] aiding in better crop yield prediction and tracking global deforestation trends.",
            "LVM3 Launch Vehicle → [WHAT] ISRO's heaviest rocket chosen to launch the NISAR satellite [WHY] the 2,800 kg satellite requires high lifting capability for its designated orbit."
        ],
        examAngle: "Most likely asked as: What does NISAR stand for? OR Which two space agencies are collaborating?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-sd-021"
    },
    {
        id: "sn-028", topicNumber: 28,
        title: "INS Vikrant & Indigenous Defence",
        caTag: "science-defence", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "INS Vikrant, India's first indigenously built aircraft carrier, became fully operational in 2024. Its integration into the Navy's fleet strengthens India's 'Atmanirbhar' (self-reliant) defense capabilities, allowing for power projection in the Indian Ocean region and reducing reliance on foreign naval technology.",
        keyPoints: [
            "Indigenous Content 76 Percent → [WHAT] Proportion of locally sourced components and labor [WHY] making it a masterpiece of the 'Make in India' initiative in ship-building.",
            "IAC-1 Designation → [WHAT] Specifically known as Indigenous Aircraft Carrier One [WHY] distinguishing it from the Russian-built INS Vikramaditya in the fleet.",
            "STOBAR Configuration → [WHAT] Short Take-Off But Arrested Recovery [WHY] using a ski-jump deck to launch MiG-29K fighter jets without catapults.",
            "Atmanirbhar Defence Push → [WHAT] Part of the plan to produce submarines and stealth destroyers locally [WHY] to maintain maritime superiority in the Indo-Pacific region.",
            "Operational Indo-Pacific Role → [WHAT] Enhancing the surveillance and strike range of the Indian Navy [WHY] providing a mobile airbase to secure critical sea lanes of communication."
        ],
        examAngle: "Most likely asked as: Which is India's first indigenous aircraft carrier? OR What percentage is made in India?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-sd-041"
    },
    {
        id: "sn-029", topicNumber: 29,
        title: "Gaganyaan 2025 Update (Shubhanshu Shukla)",
        caTag: "science-defence", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2025, Group Captain Shubhanshu Shukla made history as the first 'Gaganyatri' to visit the International Space Station (ISS) via the Axiom-4 mission. This mission provided India with real-world human spaceflight experience, bridging the gap before ISRO's first independent uncrewed LVM3 flight in January 2026.",
        keyPoints: [
            "Axiom-4 Mission Pilot → [WHAT] Shubhanshu Shukla's role in the private ISS mission in July 2025 [WHY] making him the first Indian to visit the ISS after Rakesh Sharma's 1984 flight.",
            "Postponement to 2026 → [WHAT] ISRO moved the first uncrewed Gaganyaan (G1) test to January 2026 [WHY] to ensure all safety parameters for the LVM3 rocket are perfectly met.",
            "NASA Collaboration → [WHAT] Training and docking support provided by the US space agency [WHY] facilitating India's integration into the global human spaceflight community.",
            "Vyommitra Test Readiness → [WHAT] Final assembly of the humanoid robot for the 2026 flight [WHY] simulating astronaut actions in microgravity for the automated mission.",
            "ISS Experiments → [WHAT] Shubhanshu Shukla conducted Indian-designed microgravity experiments [WHY] testing biological and materials science concepts for future orbital manufacturing."
        ],
        examAngle: "Most likely asked as: Who visited the ISS in 2025? OR What is the new Gaganyaan uncrewed flight date?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-016"
    },
    {
        id: "sn-030", topicNumber: 30,
        title: "AI in India (Bhashini & Chip Mission)",
        caTag: "science-defence", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India took major steps in Artificial Intelligence in 2024 through the India AI Mission and the Bhashini platform. Bhashini provides real-time translation for 22 Indian languages, while the ₹10,000 crore Bharat Semiconductor Mission aims to build domestic AI-ready computing power.",
        keyPoints: [
            "Bhashini Translation App → [WHAT] An AI-based tool for real-time speech-to-speech translation [WHY] allowing citizens to access government services in their native languages.",
            "India AI Mission → [WHAT] Central scheme with ₹10,372 crore budget [WHY] to build sovereign AI infrastructure, graphics processing units (GPUs), and datasets.",
            "Semiconductor Fabrication → [WHAT] Construction of India's first commercial fab in Gujarat (Dholera) [WHY] securing the supply chain for AI chips and electronic components.",
            "AI Ethics and Safety → [WHAT] Development of the 'India AI Stack' with ethical guidelines [WHY] ensuring that the technology benefits the Global South without bias or misinformation.",
            "Agricultural AI Use → [WHAT] AI models for pest detection and soil health monitoring [WHY] helping farmers improve productivity through predictive data analytics."
        ],
        examAngle: "Most likely asked as: What is the name of India's language translation AI? OR Which mission funds AI chips?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-sd-061"
    },

    // =================================================================
    // BUCKET 5: AWARDS, SPORTS & CULTURE (31-50)
    // =================================================================
    {
        id: "sn-031", topicNumber: 31,
        title: "ICC Champions Trophy 2025",
        caTag: "awards-sports", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "India won the ICC Champions Trophy 2025 by defeating New Zealand in the final held in Dubai on March 9, 2025. Chasing a target of 252, India secured a 4-wicket victory, marking their third Champions Trophy title and cementing their dominance in the 50-over format under Rohit Sharma's leadership.",
        keyPoints: [
            "India Defeats New Zealand → [WHAT] A 4-wicket win in the final held at Dubai International Stadium [WHY] securing India's first ICC 50-over trophy since the 2013 Champions Trophy.",
            "Dubai Venue → [WHAT] The tournament was moved to a hybrid model with the final in Dubai [WHY] due to India's decision not to travel to Pakistan for security reasons.",
            "Rachin Ravindra POTP → [WHAT] The New Zealand all-rounder was named Player of the Tournament [WHY] for scoring 263 runs and taking crucial wickets throughout the event.",
            "Rohit Sharma POTM → [WHAT] India's captain scored 76 runs in the final to win Player of the Match [WHY] leading from the front in a high-pressure chase of 252.",
            "Third Champions Trophy → [WHAT] India previously won in 2002 (joint with SL) and 2013 [WHY] making them one of the most successful teams in the tournament's history."
        ],
        examAngle: "Most likely asked as: Who won Champions Trophy 2025? OR Who was the Player of the Tournament?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-017"
    },
    {
        id: "sn-032", topicNumber: 32,
        title: "ICC T20 World Cup 2024",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India ended an 11-year ICC trophy drought by winning the T20 World Cup 2024, defeating South Africa in a thrilling final in Barbados. Defending 176, India's bowlers, led by Jasprit Bumrah and Hardik Pandya, restricted South Africa to 169, winning by 7 runs in a historic night for Indian cricket.",
        keyPoints: [
            "India Defeats South Africa → [WHAT] A narrow 7-run victory in the final at Bridgetown, Barbados [WHY] marking India's second T20 World Cup title after the 2007 inaugural win.",
            "Jasprit Bumrah POTP → [WHAT] Named Player of the Tournament for his exceptional economy and 15 wickets [WHY] proving to be the world's most disciplined and lethal T20 bowler.",
            "Virat Kohli's Final Match → [WHAT] Scored 76 in the final and announced retirement from T20Is [WHY] ending his T20 international career on the highest possible note.",
            "Unbeaten Champions → [WHAT] India became the first team to win a T20 World Cup without losing a single game [WHY] demonstrating total dominance across both group and knockout stages.",
            "Rahul Dravid Farewell → [WHAT] The head coach ended his tenure with an ICC trophy [WHY] completing a successful coaching cycle that saw India reach multiple ICC finals."
        ],
        examAngle: "Most likely asked as: Who won the T20 WC 2024? OR Who was the Player of the Match in the final?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-021"
    },
    {
        id: "sn-033", topicNumber: 33,
        title: "Paris Paralympics 2024 — India's Record",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India achieved its best-ever performance at the Paris Paralympics 2024, winning a record 29 medals (7 Gold, 9 Silver, 13 Bronze). The contingent finished 18th in the overall standings, showcasing the massive growth of para-sports in India through better funding and specialized training facilities.",
        keyPoints: [
            "Record 29 Medals → [WHAT] Surpassing the previous tally of 19 medals from the Tokyo Paralympics [WHY] establishing India as an emerging powerhouse in global para-athletis.",
            "Seven Gold Medalists → [WHAT] Including Avani Lekhara (Shooting), Sumit Antil (Javelin), and Nitesh Kumar (Badminton) [WHY] with Lekhara becoming the first Indian woman to win two Paralympic golds.",
            "Para Archery Success → [WHAT] Sheetal Devi (armless archer) and Harvinder Singh (Gold) made headlines [WHY] demonstrating incredible resilience and skill on the world stage.",
            "18th Overall Rank → [WHAT] India's highest-ever finish on the Paralympic medal table [WHY] placing the country ahead of many traditionally dominant sporting nations.",
            "Funding and Support → [WHAT] Impact of Target Olympic Podium Scheme (TOPS) on para-athletes [WHY] providing world-class coaching and international exposure to grassroots talent."
        ],
        examAngle: "Most likely asked as: How many total medals did India win? OR Who won Gold in Paris Paralympics?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-041"
    },
    {
        id: "sn-034", topicNumber: 34,
        title: "IPL 2024 & WPL 2024 Winners",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Kolkata Knight Riders (KKR) won their third IPL title in 2024 by defeating Sunrisers Hyderabad in a dominant final. In the Women's Premier League (WPL), Royal Challengers Bangalore (RCB) secured their maiden trophy by defeating Delhi Capitals, bringing immense joy to their dedicated fanbase.",
        keyPoints: [
            "KKR Wins IPL Title → [WHAT] Defeated SRH by 8 wickets in the final at Chennai [WHY] marking their first championship victory in exactly ten years since 2014.",
            "RCB Wins WPL Title → [WHAT] Defeated DC by 8 wickets in the final at New Delhi [WHY] giving the franchise its first major trophy across men's and women's formats.",
            "Mitchell Starc Record Buy → [WHAT] Most expensive player in IPL history at ₹24.75 crore [WHY] justifying his price tag with a Match of the Match clinical performance in the final.",
            "Shreyas Iyer Leadership → [WHAT] Became the first captain to lead KKR to glory after Gautam Gambhir [WHY] with Gambhir himself serving as the team's mentor durante the 2024 season.",
            "Sunil Narine MVP → [WHAT] Won the Most Valuable Player award for his all-round heroics [WHY] proving his continued dominance as an opening batter and mystery spinner."
        ],
        examAngle: "Most likely asked as: Who won IPL 2024? OR Who won WPL 2024?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-061"
    },
    {
        id: "sn-035", topicNumber: 35,
        title: "Chess Olympiad 2024 — Double Gold",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India made history at the 45th FIDE Chess Olympiad in Budapest, winning Gold medals in both the Men's (Open) and Women's categories. This rare 'double gold' achievement solidified India's status as the new global superpower in chess, led by young talents like Gukesh D and Arjun Erigaisi.",
        keyPoints: [
            "Double Gold Achievement → [WHAT] India won both Open and Women's titles in the same year [WHY] a feat accomplished by only a few nations (USSR, China) in history.",
            "Gukesh D Performance → [WHAT] Scored 9/10 on the top board with a performance rating over 3000 [WHY] preparing him perfectly for his 2024 World Championship match.",
            "Arjun Erigaisi Heroics → [WHAT] Won 10 out of 11 games to reach a 2800+ live rating [WHY] becoming the highest-ranked Indian player during the tournament.",
            "Women's Team Victory → [WHAT] Led by Harika Dronavalli and Divya Deshmukh (Gold on Board 3) [WHY] overcoming strong challenges from China and Kazakhstan to finish first.",
            "Budapest Hungary Venue → [WHAT] The 45th edition of the biennial team tournament [WHY] which saw India dominate nearly every major chess power from start to finish."
        ],
        examAngle: "Most likely asked as: Which country won double gold in 2024 Chess Olympiad? OR Who was India's top performer?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-081"
    },
    {
        id: "sn-036", topicNumber: 36,
        title: "Kohli & Rohit Retirements (2024-25)",
        caTag: "awards-sports", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "Indian legends Virat Kohli and Rohit Sharma phased out their international careers between late 2024 and mid-2025. After winning the T20 World Cup in June 2024, both retired from T20Is, followed by their retirement from Test cricket in April 2025, continuing only in the ODI format for their final years.",
        keyPoints: [
            "T20I Retirement June 2024 → [WHAT] Announced immediately after winning the T20 World Cup final [WHY] ending their careers on the ultimate high of a global championship.",
            "Test Retirement April 2025 → [WHAT] Both legends retired from the longest format after the home season [WHY] allowing younger players to transition into the red-ball setup for the next WTC cycle.",
            "White Ball Focus → [WHAT] Decision to continue playing only ODIs through the 2025 CT and 2026/27 cycle [WHY] managing physical workload while still contributing to India's trophy hunt.",
            "Statistical Legends → [WHAT] Both players end with over 8000+ Test runs and 13,000+ ODI runs [WHY] cementing their status as the 'greatest of all time' alongside Sachin Tendulkar.",
            "End of an Era → [WHAT] The conclusion of the most dominant partnership in Indian cricket history [WHY] marking the transition of the national team into a new generation."
        ],
        examAngle: "Most likely asked as: When did Kohli/Rohit retire from T20Is? OR Which format did they retire from in 2025?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-020"
    },
    {
        id: "sn-037", topicNumber: 37,
        title: "Australian Open 2025",
        caTag: "awards-sports", topicYear: 2025,
        examTags: ["MH-CET", "CUET"],
        summary: "The 2025 Australian Open saw Jannik Sinner defend his Men's title, while Madison Keys won her first Grand Slam in the Women's Singles. Sinner defeated Alexander Zverev in straight sets, while Keys overcame the defending champion Aryna Sabalenka in a three-set thriller at Melbourne Park.",
        keyPoints: [
            "Jannik Sinner Defends Title → [WHAT] The Italian star won his second consecutive Australian Open [WHY] solidifying his position as the world's most dominant hard-court player.",
            "Madison Keys' Maiden Slam → [WHAT] At age 29, the American secured her first-ever Grand Slam victory [WHY] becoming the oldest first-time winner in the tournament's Open Era.",
            "Aryna Sabalenka Runner Up → [WHAT] The world number one lost in the final after winning in 2024 [WHY] failing to achieve a historic three-peat of titles in Melbourne.",
            "Alexander Zverev's Final → [WHAT] The German reached his third major final but lost to Sinner [WHY] as his wait for a first Grand Slam title continues through 2025.",
            "Surface and Venue → [WHAT] Played on the blue Plexicushion hard courts of Melbourne Park [WHY] serving as the traditional opening Grand Slam of the international tennis calendar."
        ],
        examAngle: "Most likely asked as: Who won Australian Open 2025 (Men/Women)? OR Who did Sinner defeat in the final?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-25-019"
    },
    {
        id: "sn-038", topicNumber: 38,
        title: "Grand Slam Winners 2024",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 2024 tennis season was dominated by Jannik Sinner and Carlos Alcaraz on the men's side. Sinner won the Australian and US Opens, while Alcaraz secured both the French Open and Wimbledon titles. In women's tennis, Iga Świątek (French) and Aryna Sabalenka (Australian) remained the top champions.",
        keyPoints: [
            "Carlos Alcaraz Sweep → [WHAT] Won both French Open and Wimbledon back-to-back in 2024 [WHY] establishing himself as the successor to the 'Big Three' on grass and clay.",
            "Jannik Sinner 2024 Slams → [WHAT] Won his first Australian Open and his first US Open [WHY] finishing the year as the clear year-end world number one.",
            "Iga Świątek French Open → [WHAT] Won her fourth title at Roland Garros in five years [WHY] confirming her status as the absolute 'Queen of Clay' in modern tennis.",
            "Aryna Sabalenka US/Aus → [WHAT] Successfully defended her Australian Open title in January 2024 [WHY] and later added the US Open trophy to her collection in September.",
            "Novak Djokovic 2024 → [WHAT] Failed to win a Grand Slam in 2024 but won Olympic Gold [WHY] completing the 'Golden Slam' (all 4 Slams + Olympic Gold) in his career."
        ],
        examAngle: "Most likely asked as: Who won Wimbledon 2024? OR Who won the most Slams in 2024?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-101"
    },
    {
        id: "sn-039", topicNumber: 39,
        title: "French Open 2024",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Carlos Alcaraz won his maiden French Open title in 2024, defeating Alexander Zverev in a five-set final. This victory made him the youngest man to win Grand Slam titles on all three surfaces (Grass, Hard, and Clay), while Iga Świątek continued her domination by winning her third consecutive women's title.",
        keyPoints: [
            "Carlos Alcaraz Victory → [WHAT] Defeated Alexander Zverev 6-3, 2-6, 5-7, 6-1, 6-2 [WHY] proving his incredible stamina and tactical flexibility in long clay-court battles.",
            "Youngest Surface Specialist → [WHAT] Alcaraz has now won majors on Clay (French), Grass (Wimbledon), and Hard (US Open) [WHY] by the age of only 21.",
            "Iga Świątek Hat Trick → [WHAT] Won three consecutive Roland Garros titles from 2022 to 2024 [WHY] matching the records of legends like Justine Henin and Monica Seles.",
            "Novak Djokovic Injury → [WHAT] The defending champion withdrew before the quarter-final due to a knee tear [WHY] leading to a change in the world ranking leadership.",
            "Paolini's Cinderalla Run → [WHAT] Italian player Jasmine Paolini reached her first major final [WHY] signaling the rise of Italian tennis alongside Sinner and Alcaraz."
        ],
        examAngle: "Most likely asked as: Who won French Open 2024 (Men)? OR What record did Alcaraz break?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-121"
    },
    {
        id: "sn-040", topicNumber: 40,
        title: "National Film Awards (69th & 70th)",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 69th National Film Awards celebrated the best of 2021/22 cinema, with Allu Arjun (Pushpa) and Alia Bhatt/Kriti Sanon winning top acting honors. The 70th awards, announced later in 2024, honored Rishab Shetty (Kantara) as Best Actor and 'Aattam' as the Best Feature Film.",
        keyPoints: [
            "Rishab Shetty Best Actor → [WHAT] Won the 70th National Award for his role in 'Kantara' [WHY] recognizing the global success of the Kannada rooted-culture film.",
            "Aattam (Malayalam) Best Film → [WHAT] The suspense drama won the Best Feature Film at the 70th awards [WHY] highlighting the critical acclaim of Malayalam's experimental cinema.",
            "Allu Arjun Best Actor → [WHAT] The first Telugu actor to win Best Actor for 'Pushpa: The Rise' [WHY] marking a milestone for South Indian commercial cinema at the awards.",
            "Alia Bhatt and Kriti Sanon → [WHAT] Shared the Best Actress award at the 69th edition [WHY] for their performances in 'Gangubai Kathiawadi' and 'Mimi' respectively.",
            "Rocketry: The Nambi Effect → [WHAT] Directed by R Madhavan, it won Best Feature Film at the 69th awards [WHY] bringing the life of ISRO scientist Nambi Narayanan to the forefront."
        ],
        examAngle: "Most likely asked as: Who won Best Actor at the 70th National Awards? OR Best Film (70th)?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-141"
    },
    {
        id: "sn-041", topicNumber: 41,
        title: "Oscars 2024 (96th Academy Awards)",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 96th Oscars in March 2024 was dominated by 'Oppenheimer', which won 7 awards including Best Picture, Best Director (Christopher Nolan), and Best Actor (Cillian Murphy). India also made its presence felt through 'To Kill a Tiger', which was nominated for Best Documentary Feature.",
        keyPoints: [
            "Oppenheimer Best Picture → [WHAT] The biographical film about the father of the atomic bomb swept 7 categories [WHY] marking Christopher Nolan's long-awaited first Oscar win.",
            "Cillian Murphy Best Actor → [WHAT] Won his first Oscar for his portrayal of J. Robert Oppenheimer [WHY] making him the first Irish-born actor to win in this category.",
            "Emma Stone Best Actress → [WHAT] Won her second Oscar for the film 'Poor Things' [WHY] for her experimental and widely acclaimed portrayal of Bella Baxter.",
            "Robert Downey Jr. Best Supporting → [WHAT] Won his first-ever Oscar for his role as Lewis Strauss [WHY] completing a major career comeback from his early Hollywood years.",
            "India at the Oscars → [WHAT] Indian documentary 'To Kill a Tiger' was a final finalist [WHY] following the 2023 success of 'Naatu Naatu' and 'Elephant Whisperers'.",
        ],
        examAngle: "Most likely asked as: Which film won Best Picture 2024? OR Who won Best Actor?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-161"
    },
    {
        id: "sn-042", topicNumber: 42,
        title: "Grammy Awards 2024",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 66th Grammy Awards saw a massive win for the Indian fusion band 'Shakti', which won Best Global Music Album for 'This Moment'. The band features legends Zakir Hussain and Shankar Mahadevan, highlighting the continued global recognition of Indian classical-modern fusion music.",
        keyPoints: [
            "Shakti Best Global Album → [WHAT] The band won for their 2024 release 'This Moment' [WHY] being their first studio album in over 45 years to receive such acclaim.",
            "Zakir Hussain Triple Win → [WHAT] The Tabla maestro won three Grammys in a single night [WHY] including Best Global Music Performance and Best Contemporary Instrumental Album.",
            "Shankar Mahadevan and V. Selvaganesh → [WHAT] Members of Shakti who shared the Grammy glory [WHY] showcasing the depth of talent in the Indian Carnatic and playback industry.",
            "Taylor Swift Album of the Year → [WHAT] Won for 'Midnights', her record-breaking fourth win in this category [WHY] surpassing Frank Sinatra and Stevie Wonder's record.",
            "Miley Cyrus Best Record → [WHAT] Won her first Grammys for the hit song 'Flowers' [WHY] which was the most streamed track of the 2023-24 period.",
        ],
        examAngle: "Most likely asked as: Which Indian band won a Grammy in 2024? OR Who won three Grammys together?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-181"
    },
    {
        id: "sn-043", topicNumber: 43,
        title: "UNESCO World Heritage — Moidams",
        caTag: "awards-sports", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, the Charaideo Moidams (Assam) were inscribed as India's 43rd UNESCO World Heritage site. Known as the 'Pyramids of Assam', these are royal burial mounds of the Ahom dynasty, representing unique funerary architecture and the rich history of the Ahom kingdom in North East India.",
        keyPoints: [
            "43rd UNESCO Site in India → [WHAT] The burial mounds of Ahom kings in Charaideo district [WHY] making it Assam's third heritage site after Kaziranga and Manas.",
            "Ahom Funerary Architecture → [WHAT] Hemispherical mounds (Moidams) containing vaults for kings [WHY] comparable to the ancient pyramids of Egypt in significance and structure.",
            "600 Year Rule → [WHAT] The Ahom dynasty ruled Assam for six centuries (1228–1826) [WHY] and Charaideo was their first capital and most sacred burial ground.",
            "Unique Culture of North East → [WHAT] Recognition of Tai-Ahom traditions on the global stage [WHY] preserving the identity of the community that successfully resisted Mughal expansion.",
            "Selection Criteria → [WHAT] Inscribed under cultural criteria for its outstanding universal value [WHY] bringing international tourism and heritage status to rural Assam."
        ],
        examAngle: "Most likely asked as: Which is the 43rd UNESCO World Heritage site? OR Where are Moidams located?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-as-201"
    },
    {
        id: "sn-044", topicNumber: 44,
        title: "Forest Report & Environment 2024",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "The 2024 environmental assessments indicate that India's forest cover stands at ~24% of its total area. While overall green cover has slightly increased, concerns remain over the loss of dense forests in the North East, prompting new mission-mode plantation drives under the 'Green Credit' program.",
        keyPoints: [
            "24 Percent Forest Cover → [WHAT] Total area under forest and tree cover in the 2023-24 period [WHY] moving slowly toward the national target of 33% environmental stability.",
            "Highest Forest Area State → [WHAT] Madhya Pradesh continues to have the largest forest area [WHY] followed by Arunachal Pradesh and Chhattisgarh in the top three.",
            "Green Credit Program → [WHAT] A new market-based mechanism to incentivize plantation and conservation [WHY] allowing individuals and companies to earn credits for eco-friendly actions.",
            "Mangrove Initiative (MISHTI) → [WHAT] Targeted restoration of mangrove forests along India's coastline [WHY] to protect coastal communities from increasingly fierce tropical cyclones.",
            "North East Forest Loss → [WHAT] Decline in forest cover observed in Arunachal and Mizoram [WHY] due to shifting cultivation and infrastructure expansion in sensitive hilly zones.",
        ],
        examAngle: "Most likely asked as: Which state has the maximum forest cover? OR What is the name of the Green Credit policy?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-121"
    },
    {
        id: "sn-045", topicNumber: 45,
        title: "Major GI Tags 2024",
        caTag: "business-economy", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, several unique products including Similipal Kai Chutney (Odisha) and Majuli Mask Making (Assam) received Geographical Indication (GI) tags. These tags protect traditional knowledge, ensure product quality, and boost the economic value of indigenous goods in global markets.",
        keyPoints: [
            "Similipal Kai Chutney → [WHAT] A traditional chutney made from red weaver ants in Odisha [WHY] recognized for its nutritional and medicinal value for local tribes.",
            "Majuli Mask Making → [WHAT] Traditional handicraft from the world's largest river island (Assam) [WHY] preserving the 16th-century Neo-Vaishnavite cultural heritage.",
            "Cuttack Silver Filigree → [WHAT] Ornate silver jewelry craft (Chandi Tarkasi) from Odisha [WHY] protecting the livelihood of master craftsmen in the historic 'Silver City'.",
            "Banaras Thandai → [WHAT] Famous milk-based drink with spices from Varanasi (UP) [WHY] following in the footsteps of Banarasi Saree and Paan to get legal GI protection.",
            "Goa Cashew (Kernel) → [WHAT] The distinct variety of cashew grown and processed in Goa [WHY] preventing other regions from using the Goan brand name for cheaper exports.",
        ],
        examAngle: "Most likely asked as: Kai Chutney belongs to which state? OR Where is Mask Making a GI craft?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-be-121"
    },
    {
        id: "sn-046", topicNumber: 46,
        title: "Global Hunger Index (GHI) 2024",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In the 2024 GHI, India was ranked 105th out of 127 countries, categorized as having a 'serious' level of hunger. The Indian government has contested the methodology, citing that the index relies heavily on hunger perception surveys and ignores the impact of mass food distribution schemes like PMGKAY.",
        keyPoints: [
            "Rank 105 of 127 → [WHAT] India's position in the 2024 Global Hunger Index report [WHY] placing it behind several neighboring countries like Sri Lanka and Bangladesh.",
            "Serious Hunger Level → [WHAT] Category determined based on child stunting, wasting, and mortality [WHY] highlighting the persistent challenge of nutrition in the under-5 population.",
            "Govt of India Rejection → [WHAT] Ministry of Women and Child Development called the report biased [WHY] arguing it doesn't reflect the ground reality of the 'Poshan Abhiyan'.",
            "PMGKAY Scheme → [WHAT] Pradhan Mantri Garib Kalyan Anna Yojana provides free foodgrains [WHY] to over 80 crore people, which is the world's largest food security safety net.",
            "Child Wasting Concern → [WHAT] India's rate remains among the highest globally (~18%) [WHY] requiring more targeted interventions in public health and sanitation levels.",
        ],
        examAngle: "Most likely asked as: What is India's rank in GHI 2024? OR What category of hunger is India in?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-141"
    },
    {
        id: "sn-047", topicNumber: 47,
        title: "World Happiness Report 2024",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "India ranked 126th in the World Happiness Report 2024, maintaining its position from the previous year. Published by the UN Sustainable Development Solutions Network, the report places Finland at the top for the seventh consecutive year, measuring metrics like social support, GDP, and freedom.",
        keyPoints: [
            "Rank 126 for India → [WHAT] India's stable position on the global happiness scale [WHY] reflecting low scores in areas like freedom to make life choices and perceived corruption.",
            "Finland Ranked First → [WHAT] The Nordic nation has topped the list for seven years in a row [WHY] credited to high social trust and excellent public education and healthcare.",
            "UN SDSN Report → [WHAT] The organization that publishes the annual assessment in March [WHY] coinciding with the International Day of Happiness (March 20).",
            "Happiness Determinants → [WHAT] Six key variables including GDP per capita, healthy life expectancy, and generosity [WHY] provided by the Gallup World Poll data.",
            "South Asian Context → [WHAT] India remains lower than neighbors like Pakistan and Nepal in happiness [WHY] often attributed to high density, competitive stress, and income inequality.",
        ],
        examAngle: "Most likely asked as: What is India's rank in World Happiness Report? OR Which country is number one?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-161"
    },
    {
        id: "sn-048", topicNumber: 48,
        title: "Major Military Exercises 2024",
        caTag: "science-defence", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "In 2024, India participated in several key exercises including 'Dosti-16' (Coast Guards) and 'Tarang Shakti' (IAF's largest multilateral drill). These exercises improve interoperability between friendly nations and demonstrate India's growing role as a 'net security provider' in the Indian Ocean.",
        keyPoints: [
            "Tarang Shakti 2024 → [WHAT] The largest-ever multilateral air exercise hosted by Indian Air Force [WHY] involving nearly 10 nations to test complex air combat scenarios.",
            "Dosti-16 (Trilateral) → [WHAT] Coast Guard exercise between India, Sri Lanka, and Maldives [WHY] focusing on maritime rescue and illegal trafficking deterrence in the ocean.",
            "Exercise MILAN 2024 → [WHAT] Major naval gathering in Visakhapatnam with 50+ navies [WHY] symbolizing India's 'Maritime Diplomacy' and inclusive security vision.",
            "Dharma Guardian 2024 → [WHAT] Joint military exercise between India and Japan Ground Forces [WHY] specifically training for urban warfare and counter-terrorism operations.",
            "Exercise Nomadic Elephant → [WHAT] Annual joint drill between the armies of India and Mongolia [WHY] strengthening strategic ties with the landlocked North Asian partner.",
        ],
        examAngle: "Most likely asked as: What is the name of the IAF's largest multilateral exercise? OR Which countries are in 'Dosti'?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-sd-081"
    },
    {
        id: "sn-049", topicNumber: 49,
        title: "Cyclones & Disasters of 2024",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "2024 saw significant climate-related challenges, including Cyclone Remal and Cyclone Michaung, impacting the Bay of Bengal coastlines. India's disaster management agencies (NDRF) and early warning systems helped minimize fatalities through large-scale preemptive evacuations of coastal populations.",
        keyPoints: [
            "Cyclone Remal (May 2024) → [WHAT] The first pre-monsoon cyclone of the year in Bay of Bengal [WHY] making landfall in West Bengal and Bangladesh with 135 kmph winds.",
            "Naming by Oman → [WHAT] The name 'Remal' (meaning sand in Arabic) was provided by Oman [WHY] under the WMO's rotating system for naming North Indian Ocean storms.",
            "Wayanad Landslides (July 2024) → [WHAT] Catastrophic landslides in Kerala killing over 300 [WHY] triggering a debate on ecological sensitivity and habitat loss in the Western Ghats.",
            "IMD Early Warning System → [WHAT] Improved satellite-based tracking by Indian Meteorological Dept [WHY] allowing 4-5 days of lead time for evacuations and resource staging.",
            "Disaster Management (NDRF) → [WHAT] Specialized force for rescue and relief operations [WHY] which has become the primary agency for handling cyclone-hit zones across India.",
        ],
        examAngle: "Most likely asked as: Which country named Cyclone Remal? OR Where did the 2024 landslides occur?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-181"
    },
    {
        id: "sn-050", topicNumber: 50,
        title: "New Bills & Miscellaneous 2024",
        caTag: "national-polity", topicYear: 2024,
        examTags: ["MH-CET", "CUET"],
        summary: "Key legislative actions in 2024 included the Telecom Act replacing the 1885 law and the introduction of the Waqf (Amendment) Bill. Additionally, new appointments like the 26th RBI Governor and 25th Navy Chief marked the structural updates in India's top administrative and military ranks.",
        keyPoints: [
            "Telecommunications Act 2023/24 → [WHAT] Modern law replacing the 138-year-old Telegraph Act [WHY] allowing for administrative allocation of satellite spectrum for Starlink/Jio.",
            "Waqf Amendment Bill 2024 → [WHAT] Proposed law to increase transparency in Waqf properties [WHY] aiming to reform the management of religious endowments in India.",
            "Admiral Dinesh K Tripathi → [WHAT] Took over as the 25th Chief of the Naval Staff in 2024 [WHY] leading the modernization of the Navy toward a 3-carrier force.",
            "New Parliament Building → [WHAT] In the first full year of usage (2024), it hosted the special budget session [WHY] representing the 'Sengol' as a symbol of power transition.",
            "One Nation One Student ID → [WHAT] Introduction of APAAR IDs for all school-going children [WHY] to create a lifelong digital record of academic achievements and credits.",
        ],
        examAngle: "Most likely asked as: Who is the 25th Navy Chief? OR Which old law did the Telecom Act replace?",
        displayMode: "study-note",
        showBeforeTopicId: "ca-np-201"
    }
];
