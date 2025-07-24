// Configuration des informations personnelles et données (Version Française)
const personalInfoFR = {
    personal: {
        firstName: "Gevorg",
        lastName: "Markarov",
        fullName: "Gevorg Markarov",
        title: "Développeur de Logiciels & Étudiant en Sciences Informatiques",
        email: "gevorgmarkarov.w@gmail.com",
        phone: "(514) 451-0803",
        address: "4470 Boulevard Lévesque Ouest, Laval, H7W 5M8",
        linkedin: "https://www.linkedin.com/in/gevorg-markarov-bbb4b1228/",
        github: "https://github.com/Org0220",
        website: "",
        profileImage: ""  // Ajoutez le chemin vers votre image de profil ici, ex. "images/profile.jpg"
    },

    hero: {
        greeting: "Salut, je suis",
        description: "Passionné par la résolution de problèmes algorithmiques et la création de solutions innovantes. Actuellement étudiant en sciences informatiques à l'Université Concordia tout en recherchant des opportunités de recherche en IA et une carrière professionnelle en DevOps ou apprentissage automatique appliqué. Expérience pratique avec CI/CD, intégration de systèmes web et automatisation intelligente.",
        primaryButtonText: "Voir Mes Projets",
        primaryButtonLink: "projects.html",
        secondaryButtonText: "Télécharger CV",
        secondaryButtonLink: "cv.html"
    },

    summary: "Depuis mon enfance, j'ai toujours été intéressé par la résolution des problèmes algorithmiques et par la programmation. En suivant ma passion, j'ai fait mes études en informatique à Vanier et à Concordia afin de perfectionner mes compétences dans le domaine. Malgré les progrès en cours, mon désir d'apprendre et d'acquérir plus d'expérience persiste. Par conséquent, mon objectif actuel est de trouver un stage qui me permettra de participer à des projets intéressants et de continuer à enrichir mes connaissances.",

    stats: [
        { number: "3.84", label: "GPA" },
        { number: "3+", label: "Années d'Expérience" },
        { number: "5+", label: "Projets Complétés" },
        { number: "10+", label: "Technologies" }
    ],

    languages: [
        { name: "Anglais", level: "Courant" },
        { name: "Français", level: "Courant" },
        { name: "Arménien", level: "Langue maternelle" },
        { name: "Russe", level: "Conversationnel" }
    ],

    education: [
        {
            degree: "BCompSc",
            institution: "Université Concordia",
            field: "Sciences Informatiques",
            startDate: "2023",
            endDate: "Présent",
            gpa: "3.84",
            description: ""
        },
        {
            degree: "DEC",
            institution: "Cégep Vanier",
            field: "Technique de Sciences Informatiques",
            startDate: "2020",
            endDate: "2023",
            gpa: "",
            description: ""
        }
    ],

    experience: [
        {
            title: "Stagiaire Développeur DevOps",
            company: "MDA Space",
            startDate: "Septembre 2024",
            endDate: "Présent",
            description: "Développement d'outils d'automatisation en utilisant Jenkins, des conteneurs Docker et des scripts Python. Gestion de serveurs Linux, déploiement d'applications, gestion des protocoles de sécurité et des certifications. Création de scripts VBA pour des interfaces utilisateur basées sur Microsoft, telles que les formulaires Excel.",
            technologies: ["Jenkins", "Docker", "Python", "Linux", "VBA", "Jira", "CI/CD", "Rétro-ingénierie Web"]
        },
        {
            title: "Stagiaire, Développeur du Web",
            company: "Shooga Marketing",
            startDate: "Janvier 2023",
            endDate: "Mai 2023",
            description: "Développement d'une application web Tabclix : PWA qui permet de créer des profils professionnels avec leur portfolio, leurs contacts et d'autres informations qui peuvent être partagées à l'aide de leurs cartes de visite NFC. Laravel PHP : J'ai optimisé leur API qui connecte la base de données des vélos électriques de Toronto à un compte SendInBlue (maintenant appelé Brevo). Son temps de performance est passé de plusieurs mois à un peu plus d'une journée.",
            technologies: ["React.js", "PWA", "Laravel", "PHP", "Optimisation d'API"],
            projectUrl: "https://tabclix.com/"
        },
        {
            title: "Développeur de Jeux",
            company: "John Abbott",
            startDate: "Octobre 2022",
            endDate: "Mai 2023",
            description: "Développement de 2 jeux sur le moteur de jeux Unity pour le département de biologie et de chimie de John Abbott pour l'évaluation les connaissances des étudiants en utilisant Firebase et SQLite pour la base des données. J'ai créé l'un des jeux presque entièrement moi-même et pour la deuxième, j'ai développé l'un des 3 niveaux.",
            technologies: ["Unity", "C#", "Firebase", "SQLite", "Développement de Jeux"]
        }
    ],

    projects: [
        {
            title: "Anti-Phishing Academy",
            description: "Application web pour éduquer les employés sur les attaques de phishing en utilisant des techniques d'apprentissage automatique. Ce projet a remporté le hackathon JacHacks et aide les organisations à améliorer leur sensibilisation à la cybersécurité.",
            technologies: ["Apprentissage Automatique", "Développement Web", "Cybersécurité"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "https://devpost.com/software/anti-phishing-academy",
            featured: true,
            badge: "🏆 Gagnant de JacHacks",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Classificateur de Tissus",
            description: "Modèle d'apprentissage auto-supervisé pour classifier les types de tissus en utilisant BYOL (Bootstrap Your Own Latent) et PyTorch. Ce projet d'IA démontre des techniques avancées d'apprentissage automatique dans l'analyse d'images médicales.",
            technologies: ["BYOL", "PyTorch", "Vision par Ordinateur", "IA Médicale"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-microscope"
        },
        {
            title: "Classificateur d'Expressions Faciales",
            description: "Projet d'IA impliquant la reconnaissance d'images et les réseaux neuronaux pour classifier les expressions faciales. Utilise des réseaux de neurones convolutifs (CNN) et Scikit-learn pour une détection précise des émotions.",
            technologies: ["CNN", "Scikit-learn", "Reconnaissance d'Images", "Réseaux de Neurones"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-smile"
        },
        {
            title: "StalkStocks",
            description: "Tableau de bord financier en temps réel affichant les statistiques de change de la Banque Nationale en utilisant des visualisations interactives. Construit pour le hackathon ConuHacks VIII avec des technologies web modernes et la visualisation de données.",
            technologies: ["Plotly.js", "Données en Temps Réel", "APIs Financières", "Visualisation de Données"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "ConuHacks VIII",
            icon: "fas fa-chart-line"
        },
        {
            title: "Appareil pour une Maison Intelligente",
            description: "Projet IoT utilisant Raspberry Pi et Python pour créer un système de domotique intelligente. Comprend la surveillance de capteurs, le contrôle d'appareils et les capacités d'accès à distance.",
            technologies: ["Raspberry Pi", "Python", "IoT", "Domotique"],
            githubUrl: "https://github.com/Org0220",
            liveUrl: "",
            featured: false,
            badge: "",
            icon: "fas fa-home"
        }
    ],

    skillCategories: [
        {
            title: "Langages de Programmation",
            icon: "fas fa-code",
            skills: ["Java", "C#", "Python", "JavaScript", "PHP", "C", "Clojure"]
        },
        {
            title: "Développement Web",
            icon: "fas fa-globe",
            skills: ["React.js", "Laravel", "Node.js", "HTML", "CSS"]
        },
        {
            title: "DevOps et Outils",
            icon: "fas fa-server",
            skills: ["Jenkins", "Docker", "Linux", "Git", "Jira", "Pipelines CI/CD", "Débogage de Requêtes Web", "VS Code"]
        },
        {
            title: "Bases de Données et Plus",
            icon: "fas fa-database",
            skills: ["SQL", "Firebase", "SQLite", "Unity", "Android Studio"]
        }
    ],

    interests: [
        {
            title: "Conception d'Algorithmes",
            description: "Bonne compréhension de différents algorithmes et structures de données",
            icon: "fas fa-brain"
        },
        {
            title: "Développement Agile",
            description: "Familier avec les méthodologies Agile, Scrum et Waterfall",
            icon: "fas fa-project-diagram"
        },
        {
            title: "Apprentissage Automatique",
            description: "Expérience avec des projets d'IA incluant la reconnaissance d'images et les réseaux de neurones",
            icon: "fas fa-robot"
        },
        {
            title: "Développement de Jeux",
            description: "Développement avec le moteur Unity à des fins éducatives et de divertissement",
            icon: "fas fa-gamepad"
        },
        {
            title: "Ingénierie DevOps",
            description: "Expérience pratique avec CI/CD, automatisation de pipelines Jenkins, flux de travail Jira et analyse du trafic web pour l'intégration logicielle.",
            icon: "fas fa-cogs"
        }
    ],

    cvSkills: {
        languages: "Anglais, Français, Arménien, Russe",
        programmingLanguages: "Java, C#, HTML, CSS, JavaScript, PHP, Python, SQL, C, Clojure",
        frameworksAndTechnologies: "Node JS (Bases), Laravel, React JS, Jenkins, Docker, Unity, Firebase, SQLite",
        toolsAndMethodologies: "Android Studio, Unity, VS Code, Git, Jira, Pipelines CI/CD, méthodologies Agile, Scrum et Waterfall",
        coreCompetencies: "Bonne compréhension des algorithmes, structures de données, automatisation de pipelines DevOps, analyse de requêtes web et optimisation de code"
    },

    socialLinks: [
        {
            name: "Courriel",
            url: "mailto:gevorgmarkarov.w@gmail.com",
            icon: "fas fa-envelope",
            display: "gevorgmarkarov.w@gmail.com"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/gevorg-markarov-bbb4b1228/",
            icon: "fab fa-linkedin",
            display: "Profil LinkedIn"
        },
        {
            name: "GitHub",
            url: "https://github.com/Org0220",
            icon: "fab fa-github",
            display: "Profil GitHub"
        },
        {
            name: "Téléphone",
            url: "tel:+15144510803",
            icon: "fas fa-phone",
            display: "(514) 451-0803"
        }
    ],

    navigation: [
        { name: "Accueil", url: "index.html" },
        { name: "À Propos", url: "about.html" },
        { name: "Projets", url: "projects.html" },
        { name: "CV", url: "cv.html" }
    ],

    pages: {
        home: {
            title: "Gevorg Markarov - Développeur de Logiciels",
            metaDescription: "Développeur de logiciels et étudiant en sciences informatiques passionné par la résolution de problèmes algorithmiques et la création de solutions innovantes."
        },
        about: {
            title: "À Propos - Gevorg Markarov",
            pageTitle: "À Propos de Moi",
            pageSubtitle: "Apprenez-en plus sur mon parcours et ma passion pour la technologie",
            metaDescription: "Découvrez le parcours de Gevorg Markarov, son éducation et sa passion pour les sciences informatiques et le développement de logiciels."
        },
        projects: {
            title: "Projets - Gevorg Markarov",
            pageTitle: "Mes Projets",
            pageSubtitle: "Une vitrine de mon travail en apprentissage automatique, développement web et développement de jeux",
            metaDescription: "Explorez le portfolio de projets de développement logiciel de Gevorg Markarov incluant l'apprentissage automatique, le développement web et le développement de jeux."
        },
        cv: {
            title: "CV - Gevorg Markarov",
            pageTitle: "Curriculum Vitae",
            pageSubtitle: "Aperçu complet de mon éducation, expérience et compétences",
            metaDescription: "Téléchargez ou consultez le curriculum vitae complet de Gevorg Markarov incluant l'éducation, l'expérience professionnelle et les compétences techniques."
        }
    },

    footer: {
        copyright: "© 2025 Gevorg Markarov. Tous droits réservés."
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = personalInfoFR;
}
