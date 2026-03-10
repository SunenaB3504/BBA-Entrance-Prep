// src/data/computer-awareness/cybersecurity.data.js
// MAH BBA CET - COMPUTER AWARENESS - CYBERSECURITY MODULE
// SCHEMA VALIDATED AGAINST DATA_SCHEMA.md

export const cybersecurityData = {
    subject: "Computer Awareness",
    chapter: "Cybersecurity & Ethics",
    examTags: ["MH-CET"],
    flashcards: [
        { id: "sec-fc-001", term: "Virus", definition: "Malware that requires human action to spread (e.g., opening an attachment)." },
        { id: "sec-fc-002", term: "Worm", definition: "Malware that spreads automatically over networks without human action." },
        { id: "sec-fc-003", term: "Trojan Horse", definition: "Malware disguised as useful software; creates a backdoor." },
        { id: "sec-fc-004", term: "Ransomware", definition: "Encrypts files and demands payment for the decryption key." },
        { id: "sec-fc-005", term: "Phishing", definition: "Social engineering using fake emails/sites to steal credentials." },
        { id: "sec-fc-006", term: "Firewall", definition: "Filters network traffic; does NOT remove existing viruses." },
        { id: "sec-fc-007", term: "Antivirus", definition: "Software that detects, blocks, and removes malware." },
        { id: "sec-fc-008", term: "2FA", definition: "Two-Factor Authentication: Password + OTP/Biometric." },
        { id: "sec-fc-009", term: "VPN", definition: "Virtual Private Network - Encrypts traffic and hides IP." },
        { id: "sec-fc-010", term: "SSL/TLS", definition: "Protocols for encrypted web communication (indicated by padlock)." }
    ],
    questions: [
        // --- TOPIC 1: Malware Types (15 Questions) ---
        {
            id: "sec-q-001", type: "mcq", difficulty: "medium",
            question: "Which type of malware spreads automatically across networks WITHOUT human intervention?",
            options: ["Virus", "Worm", "Trojan", "Adware"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Worms are self-replicating and spread over network connections automatically.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-002", type: "mcq", difficulty: "medium",
            question: "A computer virus primarily differs from a worm because it:",
            options: [
                "Is harder to detect",
                "Requires a human action (like opening a file) to spread",
                "Can only infect Windows",
                "Does not damage files"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Viruses need a host file and a user action to replicate.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-003", type: "mcq", difficulty: "medium",
            question: "Which malware is disguised as legitimate software but creates a 'backdoor' for attackers?",
            options: ["Spyware", "Ransomware", "Trojan Horse", "Keylogger"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Trojan horses appear useful but contain hidden malicious code.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-004", type: "mcq", difficulty: "easy",
            question: "Which type of malware encrypts your files and demands money for the recovery key?",
            options: ["Adware", "Spyware", "Ransomware", "Worm"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Ransomware holds your data hostage for a ransom.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-005", type: "mcq", difficulty: "medium",
            question: "What is 'Phishing'?",
            options: [
                "A hardware failure",
                "A social engineering attack using fake emails/websites",
                "A type of fast internet",
                "A data backup method"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Phishing tricks users into giving up sensitive info (passwords, credit cards).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-006", type: "mcq", difficulty: "medium",
            question: "An attack that targets human psychology rather than technical vulnerabilities is called:",
            options: ["Brute Force", "Social Engineering", "DoS Attack", "Database Injection"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Social engineering manipulates people into performing actions or divulging info.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-007", type: "mcq", difficulty: "medium",
            question: "Which malware silently records everything you type on your keyboard?",
            options: ["Adware", "Keylogger", "Rootkit", "Worm"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Keyloggers are a form of spyware that capture keystrokes.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-008", type: "mcq", difficulty: "medium",
            question: "What is the primary purpose of 'Spyware'?",
            options: [
                "To delete files",
                "To display ads",
                "To monitor user activity and steal information silently",
                "To speed up the computer"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Spyware aims to remain undetected while gathering intelligence.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-009", type: "mcq", difficulty: "hard",
            question: "A 'Rootkit' is particularly dangerous because:",
            options: [
                "It is very large",
                "It hides itself deep within the operating system",
                "It only attacks routers",
                "It drains the battery"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Rootkits provide administrative access while concealing their presence.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-010", type: "mcq", difficulty: "medium",
            question: "Which of the following is NOT typically considered malware?",
            options: ["Spyware", "Adware", "Firewall", "Worm"],
            correct: 2,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "A Firewall is a security tool, not malicious software.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-011", type: "mcq", difficulty: "medium",
            question: "What does 'DoS' stand for in cybersecurity?",
            options: [
                "Data On Server",
                "Denial of Service",
                "Disk Operating System",
                "Department of Security"
            ],
            correct: 1,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Denial of Service attacks aim to make a machine or network resource unavailable.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-012", type: "mcq", difficulty: "hard",
            question: "What is the difference between DoS and DDoS?",
            options: [
                "DDoS is faster",
                "DDoS uses multiple compromised systems (botnets) for the attack",
                "DoS is only for websites",
                "There is no difference"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Distributed Denial of Service (DDoS) uses many sources to overwhelm a target.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-013", type: "mcq", difficulty: "easy",
            question: "A malicious link in a fake 'Bank' email is a classic example of:",
            options: ["Phishing", "Spamming", "Caching", "Debugging"],
            correct: 0,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "This is a phishing attempt to steal bank credentials.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-014", type: "mcq", difficulty: "easy",
            question: "Adware is primarily designed to:",
            options: [
                "Steal passwords",
                "Delete the hard drive",
                "Display unwanted advertisements automatically",
                "Block the internet"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Adware generates revenue for its developer by delivering ads.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-015", type: "mcq", difficulty: "medium",
            question: "A 'Logic Bomb' triggers its malicious action when:",
            options: [
                "The computer is turned on",
                "A specific condition or date is met",
                "The internet is disconnected",
                "The user types 'BOMB'"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Logic bombs lie dormant until a preset event occurs.",
            examTags: ["MH-CET"]
        },

        // --- TOPIC 2: Security Tools (15 Questions) ---
        {
            id: "sec-q-016", type: "mcq", difficulty: "medium",
            question: "What is the PRIMARY function of a Firewall?",
            options: [
                "To remove viruses from the system",
                "To monitor and filter incoming/outgoing network traffic",
                "To speed up internet connection",
                "To backup data automatically"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firewalls act as a barrier between a trusted and untrusted network.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-017", type: "mcq", difficulty: "medium",
            question: "Can a Firewall remove a virus that is already inside the computer?",
            options: ["Yes", "No", "Only if it is hardware", "Only on Windows"],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Firewalls block traffic; they do not scan or remove existing infected files (that is the job of antivirus).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-018", type: "mcq", difficulty: "easy",
            question: "Which of the following can be used to scan and remove malware?",
            options: ["Firewall", "Antivirus software", "Modem", "Router"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Antivirus is specifically designed for malware detection and removal.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-019", type: "mcq", difficulty: "medium",
            question: "Regularly updating Antivirus software is important because:",
            options: [
                "It makes the computer pretty",
                "New malware is released daily",
                "It clears the browser history",
                "It fixes the hardware"
            ],
            correct: 1,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Updates provide 'definitions' for newly discovered threats.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-020", type: "mcq", difficulty: "medium",
            question: "What does active 'Encryption' do to your data?",
            options: [
                "Deletes it permanently",
                "Compresses it to save space",
                "Converts it into an unreadable format (ciphertext)",
                "Sends it to the manufacturer"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Encryption ensures data remains private even if intercepted.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-021", type: "mcq", difficulty: "easy",
            question: "A padlock icon in the browser address bar indicates:",
            options: [
                "The site is blocked",
                "The connection is encrypted using SSL/TLS",
                "The battery is low",
                "The internet is slow"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "The padlock signifies a secure HTTPS connection.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-022", type: "mcq", difficulty: "medium",
            question: "What does 2FA stand for in security?",
            options: [
                "Two-Factor Authentication",
                "Two-File Access",
                "Total Firewall Access",
                "Tier 2 Authentication"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "2FA adds an extra layer of security beyond just a password.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-023", type: "mcq", difficulty: "medium",
            question: "Which of the following is a form of 2FA?",
            options: [
                "Typing your password twice",
                "Password + OTP (One-Time Password)",
                "Updating your browser",
                "Using a longer password"
            ],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "2FA requires 'something you know' (password) and 'something you have/are' (OTP/fingerprint).",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-024", type: "mcq", difficulty: "medium",
            question: "What is the primary benefit of using a VPN?",
            options: [
                "It makes the internet free",
                "It encrypts your traffic and hides your actual IP address",
                "It removes viruses automatically",
                "It cleans the hardware"
            ],
            correct: 1,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "VPNs provide privacy and security over public networks.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-025", type: "mcq", difficulty: "easy",
            question: "Which is the BEST practice for strong password security?",
            options: [
                "Use your birth date",
                "Use '123456'",
                "Use a mix of uppercase, lowercase, numbers, and symbols",
                "Write it on a sticky note on the monitor"
            ],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Complexity makes passwords harder to guess or crack via brute force.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-026", type: "mcq", difficulty: "medium",
            question: "What is the best defense against 'Ransomware'?",
            options: [
                "Buying expensive hardware",
                "Using a dedicated gaming mouse",
                "Regularly maintaining data backups off-site/offline",
                "Turning off the monitor"
            ],
            correct: 2,
            cognitiveType: "functional", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Backups allow you to restore data without paying the attacker.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-027", type: "mcq", difficulty: "easy",
            question: "SSL stands for:",
            options: [
                "Secure Sockets Layer",
                "System Security Link",
                "Standard Software List",
                "Safe Server Log"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "SSL is the predecessor to TLS; both provide web encryption.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-028", type: "mcq", difficulty: "easy",
            question: "Which of the following is NOT a security threat?",
            options: ["Ransomware", "Encryption", "Spyware", "Phishing"],
            correct: 1,
            cognitiveType: "identification", psychometricTemplate: "identification",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Encryption is a security TOOL used to PROTECT data.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-029", type: "mcq", difficulty: "medium",
            question: "A Firewall can be implemented as:",
            options: ["Only software", "Only hardware", "Both hardware and software", "Neither"],
            correct: 2,
            cognitiveType: "recall", psychometricTemplate: "functional",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "Hardware firewalls (routers) and software firewalls (Windows Defender) are both common.",
            examTags: ["MH-CET"]
        },
        {
            id: "sec-q-030", type: "mcq", difficulty: "medium",
            question: "In security, OTP stands for:",
            options: [
                "One-Time Password",
                "Online Transfer Protocol",
                "Open Ticket Path",
                "Over The Phone"
            ],
            correct: 0,
            cognitiveType: "acronym", psychometricTemplate: "acronym",
            timePresure: "speed", speedTarget: 40, negativeMarking: false,
            explanation: "An OTP is a temporary code valid for only one session.",
            examTags: ["MH-CET"]
        }
    ]
};
