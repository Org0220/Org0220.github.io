// Personal Information and Data Configuration
const personalInfo = {
    personal: {
        firstName: "Gevorg",
        lastName: "Markarov",
        fullName: "Gevorg Markarov",
        title: "Software Developer & Computer Science Student",
        email: "gevorgmarkarov.w@gmail.com",
        phone: "(514) 451-0803",
        address: "4470 Boulevard Lévesque Ouest, Laval, H7W 5M8",
        linkedin: "https://www.linkedin.com/in/gevorg-markarov-bbb4b1228/",
        github: "https://github.com/Org0220",
        website: "",
        profileImage: ""  // Add path to your profile image here, e.g., "images/profile.jpg"
    },

    hero: {
        greeting: "Hi, I'm",
        description: "Passionate about solving algorithmic problems and building innovative solutions. Currently pursuing my Bachelor's in Computer Science at Concordia University with hands-on experience in DevOps, web development, and game development.",
        primaryButtonText: "View My Projects",
        primaryButtonLink: "projects.html",
        secondaryButtonText: "Download CV",
        secondaryButtonLink: "cv.html"
    },

    summary: "I've always been interested in solving algorithmic problems and learning various programming tools from a young age. Following my passion, I pursued computer science at both Vanier and Concordia to further develop my skills. Despite the progress, my eagerness to learn and acquire more experience in the field persists. Consequently, my current goal is to secure an internship where I can participate in interesting projects and continue expanding my knowledge.",

    stats: [
        { number: "3.84", label: "GPA" },
        { number: "3+", label: "Years Experience" },
        { number: "5+", label: "Projects Completed" },
        { number: "10+", label: "Technologies" }
    ],

    languages: [
        { name: "English", level: "Fluent" },
        { name: "French", level: "Fluent" },
        { name: "Armenian", level: "Native" },
        { name: "Russian", level: "Conversational" }
    ],

    education: [
        {
            degree: "BCompSc",
            institution: "Concordia University",
            field: "Computer Science",
            startDate: "2023",
            endDate: "Present",
            gpa: "3.84",
            description: ""
        },
        {
            degree: "Diploma of Collegial Studies",
            institution: "Vanier College",
            field: "Computer Science Technology",
            startDate: "2020",
            endDate: "2023",
            gpa: "",
            description: ""
        }
    ],

    experience: [
        {
            title: "DevOps Developer Intern",
            company: "MDA Space",
            startDate: "September 2024",
            endDate: "Present",
            description: "Developing automation tools using Jenkins, Docker containers and Python scripts. Managing Linux servers, deploying applications, dealing with security protocols and certifications. Creating VBA scripts for Microsoft based UIs like excel forms.",
            technologies: ["Jenkins", "Docker", "Python", "Linux", "VBA"]
        },
        {
            title: "Web Developer Intern",
            company: "Shooga Marketing",
            startDate: "January 2023",
            endDate: "May 2023",
            description: "Developing a web application called Tabclix: PWA made to create business profiles with their portfolio, contacts and other different information using React.js. They can be shared using their NFC business cards. Laravel PHP: I optimized their API that connects Toronto's E-bike database to a SendInBlue (Now it's called Brevo) account. Its running time decreased from months to a bit more than a day.",
            technologies: ["React.js", "PWA", "Laravel", "PHP", "API Optimization"],
            projectUrl: "https://tabclix.com/"
        },
        {
            title: "Game Developer",
            company: "John Abbott",
            startDate: "October 2022",
            endDate: "May 2023",
            description: "Developing 2 games on Unity engine for John Abbott's Biology and Chemistry department for student evaluation purposes using Firebase and SQLite to store data. I created one of the games almost fully myself and for the second one developed one of the 3 levels.",
            technologies: ["Unity", "C#", "Firebase", "SQLite", "Game Development"]
        }
    ],

    projects: [
        {
            title: "Anti Phishing Academy",
            description: "A comprehensive web application designed to educate employees on phishing attacks using machine learning techniques. This project won the JacHacks hackathon and helps organizations improve their cybersecurity awareness.",
            technologies: ["Machine Learning", "Web Development", "Cybersecurity"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "https://devpost.com/software/anti-phishing-academy",
            featured: true,
            badge: "🏆 JacHacks Winner",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Tissue Classifier",
            description: "Self-supervised learning model for classifying different types of tissue using BYOL (Bootstrap Your Own Latent) and PyTorch. This AI project demonstrates advanced machine learning techniques in medical image analysis.",
            technologies: ["BYOL", "PyTorch", "Computer Vision", "Medical AI"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-microscope"
        },
        {
            title: "Facial Expression Classifier",
            description: "AI project focused on image recognition and neural networks for classifying facial expressions. Utilizes Convolutional Neural Networks (CNN) and Scikit-learn for accurate emotion detection.",
            technologies: ["CNN", "Scikit-learn", "Image Recognition", "Neural Networks"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-smile"
        },
        {
            title: "StalkStocks",
            description: "Real-time financial dashboard displaying National Bank exchange statistics using interactive visualizations. Built for ConuHacks VIII hackathon with modern web technologies and data visualization.",
            technologies: ["Plotly.js", "Real-time Data", "Financial APIs", "Data Visualization"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "ConuHacks VIII",
            icon: "fas fa-chart-line"
        },
        {
            title: "Smart Home Device",
            description: "IoT project using Raspberry Pi and Python to create a smart home automation system. Features include sensor monitoring, device control, and remote access capabilities.",
            technologies: ["Raspberry Pi", "Python", "IoT", "Home Automation"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-home"
        }
    ],

    skillCategories: [
        {
            title: "Programming Languages",
            icon: "fas fa-code",
            skills: ["Java", "C#", "Python", "JavaScript", "PHP", "C", "Clojure"]
        },
        {
            title: "Web Development",
            icon: "fas fa-globe",
            skills: ["React.js", "Laravel", "Node.js", "HTML", "CSS"]
        },
        {
            title: "DevOps & Tools",
            icon: "fas fa-server",
            skills: ["Jenkins", "Docker", "Linux", "Git", "VS Code"]
        },
        {
            title: "Databases & More",
            icon: "fas fa-database",
            skills: ["SQL", "Firebase", "SQLite", "Unity", "Android Studio"]
        }
    ],

    interests: [
        {
            title: "Algorithm Design",
            description: "Strong understanding of different algorithms, data structures and code optimization",
            icon: "fas fa-brain"
        },
        {
            title: "Agile Development",
            description: "Familiar with Agile, Scrum and Waterfall methodologies",
            icon: "fas fa-project-diagram"
        },
        {
            title: "Machine Learning",
            description: "Experience with AI projects including image recognition and neural networks",
            icon: "fas fa-robot"
        },
        {
            title: "Game Development",
            description: "Unity engine development for educational and entertainment purposes",
            icon: "fas fa-gamepad"
        }
    ],

    cvSkills: {
        languages: "English, French, Armenian and Russian",
        programmingLanguages: "Java, C#, HTML, CSS, JavaScript, PHP, Python, SQL, C, Clojure",
        frameworksAndTechnologies: "Node JS (Basics), Laravel, React JS, Jenkins, Docker, Unity, Firebase, SQLite",
        toolsAndMethodologies: "Android Studio, Unity, VS Code, Git, Agile, Scrum and Waterfall methodologies",
        coreCompetencies: "Strong understanding of different algorithms, data structures and code optimization"
    },

    socialLinks: [
        {
            name: "Email",
            url: "mailto:gevorgmarkarov.w@gmail.com",
            icon: "fas fa-envelope",
            display: "gevorgmarkarov.w@gmail.com"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/gevorg-markarov-bbb4b1228/",
            icon: "fab fa-linkedin",
            display: "LinkedIn Profile"
        },
        {
            name: "GitHub",
            url: "https://github.com/Org0220",
            icon: "fab fa-github",
            display: "GitHub Profile"
        },
        {
            name: "Phone",
            url: "tel:+15144510803",
            icon: "fas fa-phone",
            display: "(514) 451-0803"
        }
    ],

    navigation: [
        { name: "Home", url: "index.html" },
        { name: "About", url: "about.html" },
        { name: "Projects", url: "projects.html" },
        { name: "CV", url: "cv.html" }
    ],

    pages: {
        home: {
            title: "Gevorg Markarov - Software Developer",
            metaDescription: "Software Developer and Computer Science Student passionate about solving algorithmic problems and building innovative solutions."
        },
        about: {
            title: "About - Gevorg Markarov",
            pageTitle: "About Me",
            pageSubtitle: "Get to know more about my journey and passion for technology",
            metaDescription: "Learn about Gevorg Markarov's background, education, and passion for computer science and software development."
        },
        projects: {
            title: "Projects - Gevorg Markarov",
            pageTitle: "My Projects",
            pageSubtitle: "A showcase of my work in machine learning, web development, and game development",
            metaDescription: "Explore Gevorg Markarov's portfolio of software development projects including machine learning, web development, and game development."
        },
        cv: {
            title: "CV - Gevorg Markarov",
            pageTitle: "Curriculum Vitae",
            pageSubtitle: "Complete overview of my education, experience, and skills",
            metaDescription: "Download or view Gevorg Markarov's complete curriculum vitae including education, work experience, and technical skills."
        }
    },

    footer: {
        copyright: "© 2025 Gevorg Markarov. All rights reserved."
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalInfo;
}
