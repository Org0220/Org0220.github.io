// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.skill-category, .stat-item, .project-card, .interest-item, .timeline-item, .contact-link');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Skills Progress Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 500);
    });
}

// Contact Form Handling (if you add a contact form later)
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Show success message (you can replace this with actual form submission)
            showNotification('Message sent successfully!', 'success');

            // Reset form
            this.reset();
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Dark Mode Toggle (optional feature)
function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');

    if (isDark) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

// Initialize dark mode from localStorage
document.addEventListener('DOMContentLoaded', function () {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Project Card Interactions
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Copy to Clipboard Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        showNotification('Copied to clipboard!', 'success');
    }).catch(function (err) {
        console.error('Could not copy text: ', err);
        showNotification('Failed to copy to clipboard', 'error');
    });
}

// Add copy functionality to email and phone
document.addEventListener('DOMContentLoaded', function () {
    const contactItems = document.querySelectorAll('.contact-item, .contact-link');

    contactItems.forEach(item => {
        const emailLink = item.querySelector('span');
        const phoneLink = item.querySelector('span');

        if (emailLink && emailLink.textContent.includes('@')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function (e) {
                e.preventDefault();
                copyToClipboard(emailLink.textContent);
            });
        }

        if (phoneLink && phoneLink.textContent.includes('(514)')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function (e) {
                e.preventDefault();
                copyToClipboard(phoneLink.textContent);
            });
        }
    });
});

// Lazy Loading for Images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function () {
    handleContactForm();
    lazyLoadImages();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Any scroll-based animations or calculations can go here
}, 16); // 60fps

window.addEventListener('scroll', debouncedScroll);

// Advanced typing animation that handles HTML elements
function typeWriter(element, htmlContent, speed = 100) {
    element.innerHTML = '';

    // For the specific case of "Hi, I'm <span class="gradient-text">Name</span>"
    // Let's handle this more directly
    console.log("Hi, I'm Gevorg Markarov");
    let i = 0;
    function typeSimple() {
        if (i < htmlContent.length) {
            if (htmlContent[i] == '<') {
                // Handle HTML tags
                const tagEnd = htmlContent.indexOf('>', i);
                if (tagEnd !== -1) {
                    element.innerHTML += htmlContent.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                }
                console.log(`Skipping tag: ${htmlContent.substring(i, tagEnd + 1)}`)
            }
            element.innerHTML = htmlContent.substring(0, i + 1);
            i++;
            setTimeout(typeSimple, speed);
        }
    }
    typeSimple();

}
// Initialize typing animation after content is loaded
function initializeTypingAnimation() {
    const heroTitle = document.querySelector('.hero h1, .hero-title');

    console.log("Hi, I'm Gevorg Markarov");
    if (heroTitle) {
        // Clear existing content and prepare element
        heroTitle.innerHTML = '';
        heroTitle.classList.add('hero-title');
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';

        // Get name from personalInfo data
        let name = 'Gevorg Markarov'; // Fallback
        if (window.personalInfo && window.personalInfo.personal) {
            name = window.personalInfo.personal.fullName || window.personalInfo.personal.firstName + ' ' + window.personalInfo.personal.lastName;
        }

        // Create the greeting text with gradient styling
        const htmlContent = `Hi, I'm <span class="gradient-text">${name}</span>`;
        typeWriter(heroTitle, htmlContent, 80);
    }
}// Make typing animation available globally
window.initializeTypingAnimation = initializeTypingAnimation;
