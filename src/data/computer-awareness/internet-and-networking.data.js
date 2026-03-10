// src/data/computer-awareness/internet-and-networking.data.js
// MAH BBA CET - COMPUTER AWARENESS - INTERNET & NETWORKING MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const internetAndNetworkingData = {
    subject: "Computer Awareness",
    chapter: "Internet & Networking",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "net-fc-001", term: "HTTP vs HTTPS", definition: "HTTPS is secure/encrypted; HTTP is not." },
        { id: "net-fc-002", term: "SMTP", definition: "Simple Mail Transfer Protocol - For SENDING emails." },
        { id: "net-fc-003", term: "POP3/IMAP", definition: "For RECEIVING emails." },
        { id: "net-fc-004", term: "DNS", definition: "Domain Name System - Maps names to IP addresses." },
        { id: "net-fc-005", term: "LAN", definition: "Local Area Network - Office/Home range." },
        { id: "net-fc-006", term: "WAN", definition: "Wide Area Network - Country/Global (Internet)." },
        { id: "net-fc-007", term: "Router", definition: "Connects different networks, directs traffic." },
        { id: "net-fc-008", term: "Topology", definition: "Physical layout (Star, Bus, Mesh)." },
        { id: "net-fc-009", term: "SaaS", definition: "Software as a Service - e.g., Gmail." },
        { id: "net-fc-010", term: "URL", definition: "Uniform Resource Locator - Web address." }
    ],
    questions: [
        // --- TOPIC 1: Internet Protocols (15 Questions) ---
        {
            id: "net-q-001", type: "mcq", difficulty: "easy",
            question: "Which protocol is used for SECURE data transfer over the web?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTTPS (HyperText Transfer Protocol Secure) uses encryption to protect data.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-002", type: "mcq", difficulty: "easy",
            question: "What does the 'S' in HTTPS stand for?",
            options: ["Server", "Secure", "Socket", "Standard"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "S stands for Secure.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-003", type: "mcq", difficulty: "easy",
            question: "Which protocol is primarily used for transferring files between computers?",
            options: ["HTTP", "FTP", "DNS", "IP"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "FTP stands for File Transfer Protocol.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-004", type: "mcq", difficulty: "medium",
            question: "Which protocol converts a domain name (like google.com) into an IP address?",
            options: ["HTTP", "DNS", "FTP", "TCP"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The DNS (Domain Name System) acts as the phone book of the internet.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-005", type: "mcq", difficulty: "easy",
            question: "Which protocol is used for SENDING emails?",
            options: ["POP3", "IMAP", "SMTP", "HTTP"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SMTP (Simple Mail Transfer Protocol) is for sending; POP/IMAP are for receiving.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-006", type: "mcq", difficulty: "medium",
            question: "Which protocol is used to RECEIVE emails and typically leaves the messages on the server?",
            options: ["SMTP", "POP3", "IMAP", "FTP"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IMAP synchronizes with the server, while POP3 typically downloads and deletes from server.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-007", type: "mcq", difficulty: "medium",
            question: "What is the primary difference between HTTP and HTTPS?",
            options: [
                "HTTPS is faster",
                "HTTPS is encrypted/secure",
                "HTTP is newer",
                "HTTP is for videos only"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTTPS uses SSL/TLS encryption for security.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-008", type: "mcq", difficulty: "easy",
            question: "URL stands for:",
            options: [
                "Uniform Resource Locator",
                "United Resource Link",
                "Universal Radio List",
                "Unique Response Location"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "URL is the address of a web resource.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-009", type: "mcq", difficulty: "medium",
            question: "TCP/IP is often referred to as:",
            options: [
                "A web browser",
                "The foundation of internet communication",
                "A type of fiber optic cable",
                "A security software"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "TCP handles data delivery; IP handles addressing.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-010", type: "mcq", difficulty: "medium",
            question: "Which unique address identifies a device on a network?",
            options: ["Home Address", "URL", "IP Address", "ZIP Code"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IP (Internet Protocol) address uniquely identifies every device on a TCP/IP network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-011", type: "mcq", difficulty: "medium",
            question: "How many sets of numbers are there in a standard IPv4 address (e.g., 192.168.1.1)?",
            options: ["2", "3", "4", "6"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IPv4 uses four 8-bit octets.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-012", type: "mcq", difficulty: "easy",
            question: "Who is credited with inventing the World Wide Web (WWW) in 1989?",
            options: ["Bill Gates", "Mark Zuckerberg", "Tim Berners-Lee", "Steve Jobs"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Tim Berners-Lee invented the WWW at CERN.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-013", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT the same as the 'Internet'?",
            options: ["WAN", "WWW", "Global Network", "Cyberspace"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The WWW is just one service on the Internet (others include email, FTP).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-014", type: "mcq", difficulty: "medium",
            question: "Which layer of the TCP/IP protocol suite handles logical addressing?",
            options: ["Network Access Layer", "Internet Protocol (IP) Layer", "Transport Layer", "Application Layer"],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Internet Layer handles IP addressing and routing.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-015", type: "mcq", difficulty: "medium",
            question: "Why is DNS often called the 'phone book of the internet'?",
            options: [
                "It lists all computer owners",
                "It maps human-readable names to numeric IP addresses",
                "It stores phone numbers",
                "It is printed annually"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "DNS translates google.com into its actual server IP address.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Networking Basics (15 Questions) ---
        {
            id: "net-q-016", type: "mcq", difficulty: "easy",
            question: "Which network covers a small geographic area like a single office or home?",
            options: ["WAN", "MAN", "LAN", "PAN"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "LAN stands for Local Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-017", type: "mcq", difficulty: "easy",
            question: "The Internet is the best-known example of which network type?",
            options: ["LAN", "PAN", "WAN", "CAN"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The Internet spans the entire globe, making it a Wide Area Network (WAN).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-018", type: "mcq", difficulty: "medium",
            question: "Bluetooth devices connected to each other form which type of network?",
            options: ["LAN", "PAN", "MAN", "WAN"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "PAN stands for Personal Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-019", type: "mcq", difficulty: "medium",
            question: "Which network type covers an entire city or a large campus?",
            options: ["LAN", "MAN", "WAN", "SAN"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "MAN stands for Metropolitan Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-020", type: "mcq", difficulty: "easy",
            question: "WiFi is a technology used in which network category?",
            options: ["WLAN", "WMAN", "WWAN", "WPAN"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "WLAN stands for Wireless Local Area Network.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-021", type: "mcq", difficulty: "hard",
            question: "In networking, 'Multicasting' refers to sending data to:",
            options: [
                "A single receiver",
                "All receivers on the network",
                "A specific group of stations",
                "Nobody"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Multicasting targets a specific group; Broadcasting targets everyone; Unicasting targets one.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-022", type: "mcq", difficulty: "medium",
            question: "When data is sent to ALL devices on a network, it is called:",
            options: ["Unicasting", "Multicasting", "Broadcasting", "Simplexing"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Broadcasting sends a message from one to all.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-023", type: "mcq", difficulty: "easy",
            question: "One-to-one data transmission is known as:",
            options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
            correct: 0,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Unicast is direct one-to-one communication.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-024", type: "mcq", difficulty: "medium",
            question: "Which of the following typically uses 'Unicast' transmission?",
            options: ["Radio stations", "Sending an email to a friend", "TV broadcasting", "Public announcements"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Direct email is a unicast transmission.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-025", type: "mcq", difficulty: "medium",
            question: "Which device connects different networks and directs traffic between them?",
            options: ["Hub", "Switch", "Router", "Bridge"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Routers are intelligent devices that determine the best path for data between networks.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-026", type: "mcq", difficulty: "medium",
            question: "Which networking device is considered 'dumb' because it sends data to ALL connected ports?",
            options: ["Switch", "Hub", "Router", "Gateway"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Hub does not filter data; it just repeats signals to everyone.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-027", type: "mcq", difficulty: "medium",
            question: "A 'Switch' is smarter than a 'Hub' because:",
            options: [
                "It is faster",
                "It sends data only to the intended recipient device",
                "It has more ports",
                "It uses wireless signals"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Switches learn MAC addresses and filter traffic accordingly.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-028", type: "mcq", difficulty: "easy",
            question: "Which device converts digital signals to analog for transmission over telephone lines?",
            options: ["Switch", "Repeater", "Modem", "Server"],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "MODEM stands for MOdulator-DEModulator.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-029", type: "mcq", difficulty: "medium",
            question: "Which network topology connects all devices to a single central hub or switch?",
            options: ["Bus", "Star", "Ring", "Mesh"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "In a Star topology, the central node is the point of connection.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-030", type: "mcq", difficulty: "medium",
            question: "What is the purpose of a 'Repeater' in a network?",
            options: [
                "To connect to the internet",
                "To regenerate and boost signals for long distances",
                "To block viruses",
                "To store files"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Repeaters prevent signal degradation (attenuation).",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 3: WWW and Cloud Computing (15 Questions) ---
        {
            id: "net-q-031", type: "mcq", difficulty: "easy",
            question: "'Google' is primarily a:",
            options: ["Web Browser", "Search Engine", "Operating System", "Hardware Component"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Google is a search engine. Note: Chrome is the browser.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-032", type: "mcq", difficulty: "easy",
            question: "'Google Chrome' is an example of a:",
            options: ["Search Engine", "Web Browser", "Social Network", "Database"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Chrome is the software used to browse the web.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-033", type: "mcq", difficulty: "easy",
            question: "Which of the following is a web BROWSER (not a search engine)?",
            options: ["Bing", "Baidu", "Firefox", "DuckDuckGo"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firefox is a browser. The others are search engines.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-034", type: "mcq", difficulty: "medium",
            question: "A 'Cookie' in a web context is used to:",
            options: [
                "Delete browsing history",
                "Store user preferences and login information",
                "Provide high-speed internet",
                "Cool the motherboard"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Cookies help websites recognize returning users.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-035", type: "mcq", difficulty: "medium",
            question: "What is a 'Hyperlink'?",
            options: [
                "An extremely fast internet connection",
                "A clickable element that takes you to another page",
                "A type of computer virus",
                "The power cable for a router"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hyperlinks are the basis of web navigation.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-036", type: "mcq", difficulty: "easy",
            question: "'Homepage' refers to:",
            options: [
                "The Google search page only",
                "The first or main page of any website",
                "The desktop screen",
                "A social media profile"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The root or landing page of a site is the homepage.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-037", type: "mcq", difficulty: "medium",
            question: "What does a 'Browser Cache' store?",
            options: [
                "Permanent user files",
                "Copies of web pages for faster subsequent loading",
                "Encrypted passwords",
                "Operating system updates"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Caching saves bandwidth and time by reusing local copies of site assets.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-038", type: "mcq", difficulty: "medium",
            question: "'CC' in an email context stands for:",
            options: ["Computer Copy", "Carbon Copy", "Classified Copy", "Crypted Code"],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Carbon Copy recipients are visible to all others on the email thread.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-039", type: "mcq", difficulty: "medium",
            question: "Gmail and Google Docs are examples of which cloud service model?",
            options: ["SaaS", "PaaS", "IaaS", "DaaS"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SaaS = Software as a Service.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-040", type: "mcq", difficulty: "easy",
            question: "Google Drive and Dropbox are examples of:",
            options: ["Social Media", "Cloud Storage", "Web Browsers", "Operating Systems"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "These services host files in remote data centers.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-041", type: "mcq", difficulty: "hard",
            question: "Which cloud model provides access to virtual machines and storage infrastructure?",
            options: ["SaaS", "PaaS", "IaaS", "BaaS"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "IaaS = Infrastructure as a Service (e.g., AWS, Azure).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-042", type: "mcq", difficulty: "medium",
            question: "How does 'BCC' differ from 'CC'?",
            options: [
                "BCC is only for business emails",
                "BCC recipients are hidden from other recipients",
                "BCC is a copy for the sender only",
                "There is no difference"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "BCC = Blind Carbon Copy.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-043", type: "mcq", difficulty: "medium",
            question: "What is the primary function of a 'Web Server'?",
            options: [
                "To create web pages",
                "To host and serve web content to users on request",
                "To provide an internet connection",
                "To browse the web"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Servers 'serve' data (sites) to clients (browsers).",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-044", type: "mcq", difficulty: "easy",
            question: "What does HTML stand for?",
            options: [
                "HyperText Markup Language",
                "High Tech Machine Language",
                "Hyperlink Text Management List",
                "Hybrid Text Model Language"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "HTML is the standard language for creating web pages.",
            examTags: ["MH-CET"]
        },
        {
            id: "net-q-045", type: "mcq", difficulty: "easy",
            question: "Which file extension is commonly used for web pages?",
            options: [".exe", ".html", ".docx", ".zip"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: ".html or .htm are the primary web extensions.",
            examTags: ["MH-CET"]
        }
    ]
};
