// Data Handler - Populates all content dynamically from info.js with language support
class DataHandler {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.data = this.currentLanguage === 'fr' ? personalInfoFR : personalInfo;
        this.currentPage = this.getCurrentPage();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('about.html')) return 'about';
        if (path.includes('projects.html')) return 'projects';
        if (path.includes('cv.html')) return 'cv';
        return 'home';
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.data = lang === 'fr' ? personalInfoFR : personalInfo;
        this.init();
        this.updateLanguageToggle();
    }

    updateLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            const currentFlag = languageToggle.querySelector('.current-flag');
            const currentLang = languageToggle.querySelector('.current-lang');

            if (this.currentLanguage === 'fr') {
                currentFlag.textContent = '🇨🇦';
                currentLang.textContent = 'FR';
            } else {
                currentFlag.textContent = '🇨🇦';
                currentLang.textContent = 'EN';
            }
        }
    }

    init() {
        this.setPageTitle();
        this.populateNavigation();
        this.populateFooter();
        this.updateLanguageToggle();

        switch (this.currentPage) {
            case 'home':
                this.populateHomePage();
                break;
            case 'about':
                this.populateAboutPage();
                break;
            case 'projects':
                this.populateProjectsPage();
                break;
            case 'cv':
                this.populateCVPage();
                break;
        }

        // Dispatch event to signal content is loaded
        setTimeout(() => {
            const event = new CustomEvent('cvContentLoaded', {
                detail: { currentPage: this.currentPage }
            });
            document.dispatchEvent(event);
        }, 100);
    }

    // Set page title and meta
    setPageTitle() {
        const pageData = this.data.pages[this.currentPage];
        if (pageData) {
            document.title = pageData.title;

            // Set meta description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = pageData.metaDescription;
        }
    }

    // Populate navigation
    populateNavigation() {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.innerHTML = '';
            this.data.navigation.forEach(item => {
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'nav-link';
                link.textContent = item.name;

                // Set active class
                if ((this.currentPage === 'home' && item.url === 'index.html') ||
                    (this.currentPage !== 'home' && item.url.includes(this.currentPage))) {
                    link.classList.add('active');
                }

                navMenu.appendChild(link);
            });

            // Add language toggle
            const languageToggle = document.createElement('div');
            languageToggle.className = 'language-toggle';
            languageToggle.innerHTML = `
                <button class="language-btn" onclick="dataHandler.toggleLanguage()">
                    <span class="current-flag">${this.currentLanguage === 'fr' ? '🇫🇷' : '🇨🇦'}</span>
                    <span class="current-lang">${this.currentLanguage === 'fr' ? 'FR' : 'EN'}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="language-dropdown">
                    <div class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}" onclick="dataHandler.switchLanguage('en')">
                        <span class="flag">🇨🇦</span>
                        <span>English</span>
                    </div>
                    <div class="language-option ${this.currentLanguage === 'fr' ? 'active' : ''}" onclick="dataHandler.switchLanguage('fr')">
                        <span class="flag">🇫🇷</span>
                        <span>Français</span>
                    </div>
                </div>
            `;
            navMenu.appendChild(languageToggle);
        }

        // Set logo
        const navLogo = document.querySelector('.nav-logo h2');
        if (navLogo) {
            navLogo.textContent = this.data.personal.firstName.charAt(0) + this.data.personal.lastName.charAt(0);
        }
    }

    toggleLanguage() {
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    }

    // Populate footer
    populateFooter() {
        const footer = document.querySelector('.footer p');
        if (footer) {
            footer.textContent = this.data.footer.copyright;
        }
    }

    populateHomePage() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            // Use advanced typing animation that handles HTML elements
            if (this.typeWriter) {
                // Clear the element first
                heroTitle.innerHTML = '';
                // Start typing animation after a short delay with HTML content
                setTimeout(() => {
                    const greeting = `${this.data.hero.greeting} <span class="gradient-text">${this.data.personal.fullName}</span>`;
                    this.typeWriter(heroTitle, greeting, 80);
                }, 300);
            } else {
                // Fallback to direct content
                heroTitle.innerHTML = `${this.data.hero.greeting} <span class="gradient-text">${this.data.personal.fullName}</span>`;
            }
        }

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = this.data.personal.title;
        }

        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            heroDescription.textContent = this.data.hero.description;
        }

        const heroButtons = document.querySelector('.hero-buttons');
        if (heroButtons) {
            heroButtons.innerHTML = `
                <a href="${this.data.hero.primaryButtonLink}" class="btn btn-primary">${this.data.hero.primaryButtonText}</a>
                <a href="${this.data.hero.secondaryButtonLink}" class="btn btn-secondary">${this.data.hero.secondaryButtonText}</a>
            `;
        }

        this.populateHeroImage();
        this.populateStats();
        this.populateSkillsPreview();
        this.populateContactLinks();
    }

    populateHeroImage() {
        const heroImage = document.querySelector('.hero-image .image-placeholder');
        if (heroImage) {
            if (this.data.personal.profileImage) {
                heroImage.innerHTML = `<img src="${this.data.personal.profileImage}" alt="${this.data.personal.fullName}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            } else {
                heroImage.innerHTML = `<i class="fas fa-user-circle"></i>`;
            }
        }
    }

    populateStats() {
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsGrid.innerHTML = '';
            this.data.stats.forEach(stat => {
                const statItem = document.createElement('div');
                statItem.className = 'stat-item';
                statItem.innerHTML = `
                    <div class="stat-number">${stat.number}</div>
                    <div class="stat-label">${stat.label}</div>
                `;
                statsGrid.appendChild(statItem);
            });
        }
    }

    populateSkillsPreview() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (skillsGrid) {
            skillsGrid.innerHTML = '';
            this.data.skillCategories.forEach(category => {
                const skillCategory = document.createElement('div');
                skillCategory.className = 'skill-category';
                skillCategory.innerHTML = `
                    <i class="${category.icon}"></i>
                    <h3>${category.title}</h3>
                    <p>${category.skills.join(', ')}</p>
                `;
                skillsGrid.appendChild(skillCategory);
            });
        }
    }

    populateContactLinks() {
        const contactLinks = document.querySelector('.contact-links');
        if (contactLinks) {
            contactLinks.innerHTML = '';
            this.data.socialLinks.forEach(link => {
                const contactLink = document.createElement('a');
                contactLink.href = link.url;
                contactLink.className = 'contact-link';
                if (link.url.startsWith('http')) {
                    contactLink.target = '_blank';
                }
                contactLink.innerHTML = `
                    <i class="${link.icon}"></i>
                    <span>${link.display}</span>
                `;
                contactLinks.appendChild(contactLink);
            });
        }
    }

    populateAboutPage() {
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            pageTitle.textContent = this.data.pages.about.pageTitle;
        }

        const pageSubtitle = document.querySelector('.page-subtitle');
        if (pageSubtitle) {
            pageSubtitle.textContent = this.data.pages.about.pageSubtitle;
        }

        const aboutText = document.querySelector('.about-text .about-section p');
        if (aboutText) {
            aboutText.textContent = this.data.summary;
        }

        this.populateLanguages();
        this.populatePersonalInfo();
        this.populateEducation();
        this.populateInterests();
    }

    populateLanguages() {
        const languages = document.querySelector('.languages');
        if (languages) {
            languages.innerHTML = '';
            this.data.languages.forEach(lang => {
                const langItem = document.createElement('div');
                langItem.className = 'language-item';
                langItem.innerHTML = `
                    <i class="fas fa-globe"></i>
                    <span>${lang.name} (${lang.level})</span>
                `;
                languages.appendChild(langItem);
            });
        }
    }

    populatePersonalInfo() {
        const infoCard = document.querySelector('.info-card');
        if (infoCard) {
            const infoItems = infoCard.querySelectorAll('.info-item');
            if (infoItems.length >= 4) {
                infoItems[0].innerHTML = `
                    <i class="fas fa-user"></i>
                    <span><strong>Name:</strong> ${this.data.personal.fullName}</span>
                `;
                infoItems[1].innerHTML = `
                    <i class="fas fa-map-marker-alt"></i>
                    <span><strong>Location:</strong> ${this.data.personal.address}</span>
                `;
                infoItems[2].innerHTML = `
                    <i class="fas fa-envelope"></i>
                    <span><strong>Email:</strong> ${this.data.personal.email}</span>
                `;
                infoItems[3].innerHTML = `
                    <i class="fas fa-phone"></i>
                    <span><strong>Phone:</strong> ${this.data.personal.phone}</span>
                `;
            }
        }
    }

    populateEducation() {
        const educationCard = document.querySelectorAll('.info-card')[1];
        if (educationCard) {
            const educationContainer = educationCard.querySelector('div');
            if (educationContainer) {
                educationContainer.innerHTML = '';
                this.data.education.forEach(edu => {
                    const eduItem = document.createElement('div');
                    eduItem.className = 'education-item';
                    eduItem.innerHTML = `
                        <h4>${edu.degree}</h4>
                        <p><strong>${edu.institution}</strong> (${edu.startDate} - ${edu.endDate})</p>
                        ${edu.gpa ? `<p>GPA: ${edu.gpa}</p>` : ''}
                    `;
                    educationContainer.appendChild(eduItem);
                });
            }
        }
    }

    populateInterests() {
        const interestsGrid = document.querySelector('.interests-grid');
        if (interestsGrid) {
            interestsGrid.innerHTML = '';
            this.data.interests.forEach(interest => {
                const interestItem = document.createElement('div');
                interestItem.className = 'interest-item';
                interestItem.innerHTML = `
                    <i class="${interest.icon}"></i>
                    <h3>${interest.title}</h3>
                    <p>${interest.description}</p>
                `;
                interestsGrid.appendChild(interestItem);
            });
        }
    }

    populateProjectsPage() {
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            pageTitle.textContent = this.data.pages.projects.pageTitle;
        }

        const pageSubtitle = document.querySelector('.page-subtitle');
        if (pageSubtitle) {
            pageSubtitle.textContent = this.data.pages.projects.pageSubtitle;
        }

        this.populateProjectsGrid();
        this.populateTimeline();
    }

    populateProjectsGrid() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            this.data.projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = `project-card ${project.featured ? 'featured' : ''}`;

                const techTags = project.technologies.map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('');

                const projectLinks = `
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View Project
                    </a>` : ''}
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                `;

                projectCard.innerHTML = `
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="${project.icon}"></i>
                        </div>
                        ${project.badge ? `<div class="project-badge">${project.badge}</div>` : ''}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">${techTags}</div>
                    <div class="project-links">${projectLinks}</div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        }
    }

    populateTimeline() {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            timeline.innerHTML = '';
            this.data.experience.forEach(exp => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';

                const techTags = exp.technologies.map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('');

                timelineItem.innerHTML = `
                    <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
                    <div class="timeline-content">
                        <h3>${exp.title} - ${exp.company}</h3>
                        <p>${exp.description}</p>
                        <div class="project-tech">${techTags}</div>
                        ${exp.projectUrl ? `
                            <div class="project-links">
                                <a href="${exp.projectUrl}" target="_blank" class="project-link">
                                    <i class="fas fa-external-link-alt"></i> Live Site
                                </a>
                            </div>
                        ` : ''}
                    </div>
                `;
                timeline.appendChild(timelineItem);
            });
        }
    }

    populateCVPage() {
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            pageTitle.textContent = this.data.pages.cv.pageTitle;
        }

        const pageSubtitle = document.querySelector('.page-subtitle');
        if (pageSubtitle) {
            pageSubtitle.textContent = this.data.pages.cv.pageSubtitle;
        }

        this.populateCVHeader();
        this.populateCVSummary();
        this.populateCVEducation();
        this.populateCVExperience();
        this.populateCVProjects();
        this.populateCVSkills();
    }

    // Populate CV header
    populateCVHeader() {
        const cvName = document.querySelector('.cv-name h1');
        if (cvName) {
            cvName.textContent = this.data.personal.fullName.toUpperCase();
        }

        const cvTitle = document.querySelector('.cv-title');
        if (cvTitle) {
            cvTitle.textContent = this.data.personal.title;
        }

        // CV contact info
        const cvContact = document.querySelector('.cv-contact');
        if (cvContact) {
            cvContact.innerHTML = `
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${this.data.personal.address}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${this.data.personal.phone}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${this.data.personal.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fab fa-linkedin"></i>
                    <span>${this.data.personal.linkedin.replace('https://', '')}</span>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github"></i>
                    <span>${this.data.personal.github.replace('https://', '')}</span>
                </div>
            `;
        }
    }

    // Populate CV summary
    populateCVSummary() {
        const cvSummary = document.querySelector('.cv-section p');
        if (cvSummary) {
            cvSummary.textContent = this.data.summary;
        }
    }

    // Populate CV education
    populateCVEducation() {
        const educationSection = document.querySelectorAll('.cv-section')[1];
        if (educationSection) {
            // Clear existing content except title
            const title = educationSection.querySelector('.cv-section-title');
            educationSection.innerHTML = '';
            educationSection.appendChild(title);

            this.data.education.forEach(edu => {
                const cvItem = document.createElement('div');
                cvItem.className = 'cv-item';
                cvItem.innerHTML = `
                    <div class="cv-item-header">
                        <h3>${edu.degree} | ${edu.institution}</h3>
                        <span class="cv-date">${edu.startDate} – ${edu.endDate}</span>
                    </div>
                    <p><strong>${edu.field}</strong>${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</p>
                `;
                educationSection.appendChild(cvItem);
            });
        }
    }

    // Populate CV experience
    populateCVExperience() {
        const experienceSection = document.querySelectorAll('.cv-section')[2];
        if (experienceSection) {
            // Clear existing content except title
            const title = experienceSection.querySelector('.cv-section-title');
            experienceSection.innerHTML = '';
            experienceSection.appendChild(title);

            this.data.experience.forEach(exp => {
                const cvItem = document.createElement('div');
                cvItem.className = 'cv-item';
                cvItem.innerHTML = `
                    <div class="cv-item-header">
                        <h3>${exp.title} | ${exp.company}</h3>
                        <span class="cv-date">${exp.startDate} – ${exp.endDate}</span>
                    </div>
                    <p>${exp.description}</p>
                    ${exp.projectUrl ? `<p><a href="${exp.projectUrl}" target="_blank">${exp.projectUrl}</a></p>` : ''}
                `;
                experienceSection.appendChild(cvItem);
            });
        }
    }

    // Populate CV projects
    populateCVProjects() {
        const projectsSection = document.querySelectorAll('.cv-section')[3];
        if (projectsSection) {
            const cvProjects = projectsSection.querySelector('.cv-projects');
            if (cvProjects) {
                cvProjects.innerHTML = '';
                this.data.projects.forEach((project, index) => {
                    const cvProject = document.createElement('div');
                    cvProject.className = 'cv-project';
                    cvProject.innerHTML = `
                        <h4>${index + 1}. ${project.title}</h4>
                        <p>${project.description.split('.')[0]} | ${project.technologies.join(', ')}${project.liveUrl ? ` | ${project.liveUrl}` : ''}</p>
                    `;
                    cvProjects.appendChild(cvProject);
                });
            }
        }
    }

    // Populate CV skills
    populateCVSkills() {
        const skillsSection = document.querySelectorAll('.cv-section')[4];
        if (skillsSection) {
            const cvSkills = skillsSection.querySelector('.cv-skills');
            if (cvSkills) {
                cvSkills.innerHTML = `
                    <div class="skill-category">
                        <h4>Languages</h4>
                        <p>${this.data.cvSkills.languages}</p>
                    </div>
                    <div class="skill-category">
                        <h4>Programming Languages</h4>
                        <p>${this.data.cvSkills.programmingLanguages}</p>
                    </div>
                    <div class="skill-category">
                        <h4>Frameworks & Technologies</h4>
                        <p>${this.data.cvSkills.frameworksAndTechnologies}</p>
                    </div>
                    <div class="skill-category">
                        <h4>Tools & Methodologies</h4>
                        <p>${this.data.cvSkills.toolsAndMethodologies}</p>
                    </div>
                    <div class="skill-category">
                        <h4>Core Competencies</h4>
                        <p>${this.data.cvSkills.coreCompetencies}</p>
                    </div>
                `;
            }
        }
    }

    // Advanced typing animation method that handles HTML elements
    typeWriter(element, htmlContent, speed = 100) {
        element.innerHTML = '';

        // Parse HTML content to separate text from HTML tags
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${htmlContent}</div>`, 'text/html');
        const container = doc.body.firstChild;

        // Extract structure and text content
        const structure = [];

        function parseNode(node, currentPath = []) {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                if (text.trim()) {
                    structure.push({
                        type: 'text',
                        content: text,
                        path: [...currentPath]
                    });
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const elementInfo = {
                    type: 'element',
                    tagName: node.tagName.toLowerCase(),
                    attributes: {},
                    path: [...currentPath]
                };

                // Store attributes
                for (let attr of node.attributes) {
                    elementInfo.attributes[attr.name] = attr.value;
                }

                structure.push(elementInfo);

                // Process children
                for (let i = 0; i < node.childNodes.length; i++) {
                    parseNode(node.childNodes[i], [...currentPath, i]);
                }

                // Add closing tag info
                structure.push({
                    type: 'closeElement',
                    tagName: node.tagName.toLowerCase(),
                    path: [...currentPath]
                });
            }
        }

        // Parse the container's children
        for (let i = 0; i < container.childNodes.length; i++) {
            parseNode(container.childNodes[i], [i]);
        }

        // Create typing animation
        let currentIndex = 0;
        let currentTextIndex = 0;
        let currentStructureItem = null;

        function type() {
            if (currentIndex >= structure.length) {
                return; // Animation complete
            }

            const item = structure[currentIndex];

            if (item.type === 'element') {
                // Create and append HTML element instantly
                const attrs = Object.entries(item.attributes)
                    .map(([key, value]) => `${key}="${value}"`)
                    .join(' ');
                element.innerHTML += `<${item.tagName}${attrs ? ' ' + attrs : ''}>`;
                currentIndex++;
                setTimeout(type, 10); // Small delay for smooth rendering

            } else if (item.type === 'closeElement') {
                // Close HTML element instantly
                element.innerHTML += `</${item.tagName}>`;
                currentIndex++;
                setTimeout(type, 10);

            } else if (item.type === 'text') {
                // Type text character by character
                if (currentTextIndex === 0) {
                    currentStructureItem = item;
                }

                if (currentTextIndex < item.content.length) {
                    element.innerHTML += item.content.charAt(currentTextIndex);
                    currentTextIndex++;
                    setTimeout(type, speed);
                } else {
                    // Finished typing this text block
                    currentTextIndex = 0;
                    currentIndex++;
                    setTimeout(type, 10);
                }
            }
        }

        type();
    }
}

// Initialize global dataHandler
let dataHandler;

document.addEventListener('DOMContentLoaded', function () {
    dataHandler = new DataHandler();
    dataHandler.init();

    // Close language dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const languageToggle = document.querySelector('.language-toggle');
        const dropdown = document.querySelector('.language-dropdown');

        if (languageToggle && dropdown && !languageToggle.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
