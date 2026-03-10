// src/data/computer-awareness/abbreviations.data.js
// MAH BBA CET - COMPUTER AWARENESS - ABBREVIATIONS MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const abbreviationsData = {
    subject: "Computer Awareness",
    chapter: "Tech Abbreviations",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "abbr-fc-001", term: "RAM", definition: "Random Access Memory - Temporary primary storage." },
        { id: "abbr-fc-002", term: "ROM", definition: "Read Only Memory - Permanent storage for BIOS." },
        { id: "abbr-fc-003", term: "JPEG", definition: "Joint Photographic Experts Group (P = Photographic)." },
        { id: "abbr-fc-004", term: "HTML", definition: "HyperText Markup Language - For web pages." },
        { id: "abbr-fc-005", term: "URL", definition: "Uniform Resource Locator - Web address." },
        { id: "abbr-fc-006", term: "VPN", definition: "Virtual Private Network." },
        { id: "abbr-fc-007", term: "GUI", definition: "Graphical User Interface." },
        { id: "abbr-fc-008", term: "BIOS", definition: "Basic Input Output System." },
        { id: "abbr-fc-009", term: "ALU", definition: "Arithmetic Logic Unit." },
        { id: "abbr-fc-010", term: "SSD", definition: "Solid State Drive." }
    ],
    questions: [
        // --- Template A: What does X stand for? (20 Qs) ---
        {
            id: "abbr-q-001", type: "mcq", difficulty: "easy",
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Rapid Access Memory", "Read Access Memory", "Random Application Module"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "RAM is the system's temporary workspace.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-002", type: "mcq", difficulty: "easy",
            question: "What does ROM stand for?",
            options: ["Read Only Memory", "Random Output Memory", "Real Object Module", "Read Office Memory"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "ROM stores start-up instructions.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-003", type: "mcq", difficulty: "easy",
            question: "What does CPU stand for?",
            options: ["Central Point Unit", "Computer Processing Unit", "Central Processing Unit", "Core Power Unit"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "CPU is the brain of the computer.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-004", type: "mcq", difficulty: "easy",
            question: "What does ALU stand for?",
            options: ["Arithmetic Logic Unit", "Algorithm Logic Unit", "Arithmetic Local Unit", "Advanced Log Unit"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The unit responsible for math and logic.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-005", type: "mcq", difficulty: "easy",
            question: "What does USB stand for?",
            options: ["Universal Serial Bus", "United Standard Bus", "Universal Software Bit", "User Serial Bus"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Universal Serial Bus for connecting peripherals.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-006", type: "mcq", difficulty: "easy",
            question: "What does HDMI stand for?",
            options: [
                "High Definition Multimedia Interface",
                "High Density Multi Interaction",
                "Home Digital Media Interface",
                "High Definition Media Input"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Interface for high-quality video and audio.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-007", type: "mcq", difficulty: "easy",
            question: "What does PDF stand for?",
            options: [
                "Portable Document Format",
                "Personal Data File",
                "Printable Digital Format",
                "Password Protected Document"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "PDF ensures documents look the same on all devices.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-008", type: "mcq", difficulty: "easy",
            question: "What does JPEG stand for?",
            options: [
                "Joint Photographic Experts Group",
                "Joint Picture Experts Group",
                "Journal of Print Experts Group",
                "Joint Photographic Entry Group"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Standard for compressed digital image files.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-009", type: "mcq", difficulty: "easy",
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Resource Link",
                "Unique Radio List",
                "United Resource Line"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The address of a resource on the internet.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-010", type: "mcq", difficulty: "easy",
            question: "What does HTTP stand for?",
            options: [
                "HyperText Transfer Protocol",
                "High Tech Tool Path",
                "Hyperlink Text Protocol",
                "Hyperlink Transfer Power"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The foundation of data exchange for the WWW.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-011", type: "mcq", difficulty: "easy",
            question: "What does LAN stand for?",
            options: ["Local Area Network", "Log Access Node", "Large Area Network", "Local Asset Node"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Network covering a small geographic area.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-012", type: "mcq", difficulty: "easy",
            question: "What does WAN stand for?",
            options: ["Wide Area Network", "World Access Network", "Wireless Area Network", "Web Access Node"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Network spanning a large distance (like the Internet).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-013", type: "mcq", difficulty: "easy",
            question: "What does VPN stand for?",
            options: [
                "Virtual Private Network",
                "Visual Point Network",
                "Virtual Personal Node",
                "Verified Private Network"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Encrypted connection over a public network.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-014", type: "mcq", difficulty: "easy",
            question: "What does GUI stand for?",
            options: [
                "Graphical User Interface",
                "Global User Integration",
                "General Utility Interface",
                "Graphical Universal Input"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Interface of icons and menus.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-015", type: "mcq", difficulty: "easy",
            question: "What does BIOS stand for?",
            options: [
                "Basic Input Output System",
                "Binary Input Output Software",
                "Basic Interface Operating System",
                "Bit Integrated Output System"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The first firmware to run when a computer is powered on.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-016", type: "mcq", difficulty: "easy",
            question: "What does SSD stand for?",
            options: ["Solid State Drive", "Super Speed Disk", "System Storage Device", "Stable State Drive"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Modern, fast alternative to HDD.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-017", type: "mcq", difficulty: "easy",
            question: "What does IP stand for in IP Address?",
            options: ["Internet Protocol", "Internal Program", "Instant Point", "Internet Page"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The set of rules for communication over a network.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-018", type: "mcq", difficulty: "easy",
            question: "What does WWW stand for?",
            options: ["World Wide Web", "World Web Way", "Wide World Web", "Whole World Web"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "The system of linked hypertext documents.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-019", type: "mcq", difficulty: "easy",
            question: "What does ASCII stand for?",
            options: [
                "American Standard Code for Information Interchange",
                "Advanced Standard Code for Internet Interaction",
                "American System Code for Input Interchange",
                "Advanced System Code for Instruction Interaction"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Standard character encoding for electronic communication.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-020", type: "mcq", difficulty: "easy",
            question: "What does ISP stand for?",
            options: [
                "Internet Service Provider",
                "International Side Protocol",
                "Internet Standard Power",
                "Internal Search Path"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Company that provides users with access to the Internet.",
            examTags: ["MH-CET"]
        },

        // --- Template B: Which abbreviation represents X? (20 Qs) ---
        {
            id: "abbr-q-021", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the 'phone book of the internet'?",
            options: ["URL", "IP", "DNS", "HTTP"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "DNS (Domain Name System) maps names to numbers.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-022", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is used for a network covering an entire city?",
            options: ["LAN", "PAN", "MAN", "SAN"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "MAN (Metropolitan Area Network).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-023", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is used for the protocol that secures web transactions?",
            options: ["HTTP", "SSL", "HTTPS", "FTP"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "HTTPS (HyperText Transfer Protocol Secure).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-024", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the main interface of modern OS using mouse/icons?",
            options: ["CLI", "GUI", "API", "OSI"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "GUI (Graphical User Interface).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-025", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents a secure tunnel for internet traffic?",
            options: ["URL", "VPN", "OTP", "SSL"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "VPN (Virtual Private Network).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-026", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the 'brain' that processes data?",
            options: ["RAM", "ALU", "CPU", "HDD"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "CPU (Central Processing Unit).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-027", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is used for a temporary, one-time security code?",
            options: ["PIN", "CAPTCHA", "OTP", "SSL"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "OTP (One-Time Password).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-028", type: "mcq", difficulty: "easy",
            question: "Which abbreviation refers to a malicious program that holds data for ransom?",
            options: ["Virus", "Trojan", "Ransomware", "Spyware"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Ransomware (Malware type).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-029", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the language of the web?",
            options: ["CSS", "PDF", "HTML", "URL"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "HTML (HyperText Markup Language).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-030", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the part of the CPU that does math?",
            options: ["CU", "RAM", "ALU", "Cache"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "ALU (Arithmetic Logic Unit).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-031", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents 'Software as a Service'?",
            options: ["PaaS", "IaaS", "SaaS", "DaaS"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "SaaS (e.g., Gmail, Google Docs).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-032", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is used for an image format with transparency support?",
            options: ["JPEG", "PDF", "PNG", "TXT"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "PNG (Portable Network Graphics).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-033", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents a very small, personal network (like Bluetooth)?",
            options: ["LAN", "WAN", "PAN", "MAN"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "PAN (Personal Area Network).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-034", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents a test to tell humans and computers apart?",
            options: ["CAPTCHA", "PIN", "OTP", "API"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "CAPTCHA.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-035", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the high-speed interface for video monitors?",
            options: ["USB", "SATA", "HDMI", "RAM"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "HDMI.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-036", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents 'Uninterruptible Power Supply'?",
            options: ["UPS", "CPU", "RAM", "ROM"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "UPS provides battery backup.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-037", type: "mcq", difficulty: "easy",
            question: "Which abbreviation represents the 'phone line' based internet service?",
            options: ["FTTH", "WiFi", "DSL", "LAN"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "DSL (Digital Subscriber Line).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-038", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is a malicious attack designed to overwhelm a server?",
            options: ["DoS", "Phish", "Spam", "Catch"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "DoS (Denial of Service).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-039", type: "mcq", difficulty: "easy",
            question: "Which abbreviation is used for 'Internet of Things'?",
            options: ["AI", "ML", "IoT", "AR"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "IoT.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-040", type: "mcq", difficulty: "easy",
            question: "Which abbreviation stands for 'Automated Teller Machine'?",
            options: ["ATM", "PIN", "EVM", "QR"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "ATM.",
            examTags: ["MH-CET"]
        },

        // --- Template C: What does the letter X in ABC mean? (20 Qs) ---
        {
            id: "abbr-q-041", type: "mcq", difficulty: "easy",
            question: "What does the 'P' in JPEG stand for?",
            options: ["Photographic", "Processing", "Picture", "Port"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Joint PHOTOGRAPHIC Experts Group (Mandatory MAH CET trivia).",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-042", type: "mcq", difficulty: "easy",
            question: "What does the 'U' in URL stand for?",
            options: ["Universal", "Uniform", "United", "Unique"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "UNIFORM Resource Locator.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-043", type: "mcq", difficulty: "easy",
            question: "What does the 'S' in HTTPS stand for?",
            options: ["Socket", "Site", "System", "Secure"],
            correct: 3,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "SECURE.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-044", type: "mcq", difficulty: "easy",
            question: "What does the 'T' in HTTP stand for?",
            options: ["Total", "Text", "Transfer", "Terminal"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "HyperText TRANSFER Protocol.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-045", type: "mcq", difficulty: "easy",
            question: "What does the 'A' in ALU stand for?",
            options: ["Arithmetic", "Algorithmic", "Average", "Active"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "ARITHMETIC Logic Unit.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-046", type: "mcq", difficulty: "easy",
            question: "What does the 'M' in RAM stand for?",
            options: ["Module", "Manual", "Memory", "Mode"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Random Access MEMORY.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-047", type: "mcq", difficulty: "easy",
            question: "What does the 'C' in CPU stand for?",
            options: ["Core", "Computer", "Central", "Code"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "CENTRAL Processing Unit.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-048", type: "mcq", difficulty: "easy",
            question: "What does the 'N' in LAN stand for?",
            options: ["Node", "Network", "Name", "Neutral"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Local Area NETWORK.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-049", type: "mcq", difficulty: "easy",
            question: "What does the 'G' in GUI stand for?",
            options: ["General", "Graphical", "Global", "Game"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "GRAPHICAL User Interface.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-050", type: "mcq", difficulty: "easy",
            question: "What does the 'I' in BIOS stand for?",
            options: ["Internal", "Interface", "Input", "Integrated"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Basic INPUT Output System.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-051", type: "mcq", difficulty: "easy",
            question: "What does the 'E' in JPEG stand for?",
            options: ["Entry", "experts", "Electronic", "Extended"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Joint Photographic EXPERTS Group.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-052", type: "mcq", difficulty: "easy",
            question: "What does the 'S' in USB stand for?",
            options: ["Serial", "Standard", "Signal", "Service"],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Universal SERIAL Bus.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-053", type: "mcq", difficulty: "easy",
            question: "What does the 'M' in HDMI stand for?",
            options: ["Media", "Multimedia", "Mobile", "Mass"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "High-Definition MULTIMEDIA Interface.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-054", type: "mcq", difficulty: "easy",
            question: "What does the 'D' in PDF stand for?",
            options: ["Digital", "Document", "Data", "Direct"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Portable DOCUMENT Format.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-055", type: "mcq", difficulty: "easy",
            question: "What does the 'P' in ISP stand for?",
            options: ["Path", "Power", "Protocol", "Provider"],
            correct: 3,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Internet Service PROVIDER.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-056", type: "mcq", difficulty: "easy",
            question: "What does the 'P' in VPN stand for?",
            options: ["Personal", "Protocol", "Private", "Path"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Virtual PRIVATE Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-057", type: "mcq", difficulty: "easy",
            question: "What does the 'T' in OTP stand for?",
            options: ["Total", "Transfer", "Time", "Tele"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "One-TIME Password.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-058", type: "mcq", difficulty: "easy",
            question: "What does the 'L' in SSL stand for?",
            options: ["Link", "Level", "Library", "Layer"],
            correct: 3,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "Secure Sockets LAYER.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-059", type: "mcq", difficulty: "easy",
            question: "What does the 'A' in AI stand for?",
            options: ["Arithmetic", "Advanced", "Artificial", "Automated"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "ARTIFICIAL Intelligence.",
            examTags: ["MH-CET"]
        },
        {
            id: "abbr-q-060", type: "mcq", difficulty: "easy",
            question: "What does the 'R' in QR Code stand for?",
            options: ["Random", "Read", "Response", "Real"],
            correct: 2,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 25, negativeMarking: false,
            explanation: "QUICK RESPONSE Code.",
            examTags: ["MH-CET"]
        }
    ]
};
