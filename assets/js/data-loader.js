// Optional: Load content from portfolio-data.json
// Include this script BEFORE main.js if you want to use JSON-based content management

class PortfolioLoader {
    constructor(jsonPath = 'data/portfolio-data.json') {
        this.jsonPath = jsonPath;
        this.data = null;
    }

    async loadData() {
        try {
            const response = await fetch(this.jsonPath);
            this.data = await response.json();
            this.populateContent();
        } catch (error) {
            console.warn('Could not load portfolio data from JSON, using HTML content instead:', error);
        }
    }

    populateContent() {
        if (!this.data) return;

        // Update page title and meta
        document.title = this.data.seo.title
            .replace('{{name}}', this.data.personal.name)
            .replace('{{title}}', this.data.personal.title);

        // Update navigation
        this.updateNavigation();
        
        // Update hero section
        this.updateHeroSection();
        
        // Update about section
        this.updateAboutSection();
        
        // Update resume section
        this.updateResumeSection();
        
        // Update skills section
        this.updateSkillsSection();
        
        // Update projects section
        this.updateProjectsSection();
        
        // Update contact section
        this.updateContactSection();
    }

    updateNavigation() {
        const logo = document.querySelector('.logo');
        if (logo) logo.textContent = this.data.personal.logo;

        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            // Keep the last item (theme toggle) and replace others
            const themeToggle = navLinks.lastElementChild;
            navLinks.innerHTML = '';
            
            this.data.navigation.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.href;
                a.textContent = item.label;
                li.appendChild(a);
                navLinks.appendChild(li);
            });
            
            navLinks.appendChild(themeToggle);
        }
    }

    updateHeroSection() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroTagline = document.querySelector('.hero-tagline');

        if (heroTitle) {
            heroTitle.innerHTML = `${this.data.personal.name}<span class="terminal-cursor">_</span>`;
        }
        if (heroSubtitle) heroSubtitle.textContent = this.data.personal.title;
        if (heroTagline) heroTagline.textContent = this.data.personal.tagline;
    }

    updateAboutSection() {
        const aboutText = document.querySelector('.about-text');
        const profileImg = document.querySelector('.about-image img');

        if (profileImg && this.data.personal.profileImage) {
            profileImg.src = this.data.personal.profileImage;
            profileImg.alt = `${this.data.personal.name} Profile Picture`;
        }

        if (aboutText) {
            const h3 = aboutText.querySelector('h3');
            if (h3) h3.innerHTML = 'Threat_Hunter.exe';

            // Clear existing paragraphs and add new ones
            const existingPs = aboutText.querySelectorAll('p');
            existingPs.forEach(p => p.remove());

            this.data.personal.bio.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                aboutText.appendChild(p);
            });
        }
    }

    updateResumeSection() {
        const resumeContent = document.querySelector('.resume-content');
        if (!resumeContent) return;

        resumeContent.innerHTML = `
            <div class="resume-column">
                <h3>Experience</h3>
                ${this.data.experience.map(exp => `
                    <div class="resume-item">
                        <h4>${exp.title}</h4>
                        <div class="company">${exp.company}</div>
                        <div class="date">${exp.period}</div>
                        <p>${exp.description}</p>
                    </div>
                `).join('')}
            </div>
            <div class="resume-column">
                <h3>Education</h3>
                ${this.data.education.map(edu => `
                    <div class="resume-item">
                        <h4>${edu.degree}</h4>
                        <div class="company">${edu.institution}</div>
                        <div class="date">${edu.period}</div>
                        <p>${edu.description}</p>
                    </div>
                `).join('')}
                <h3 style="margin-top: 2rem;">Certifications</h3>
                ${this.data.certifications.map(cert => `
                    <div class="resume-item">
                        <h4>${cert.name}</h4>
                        <div class="company">${cert.issuer}</div>
                        <div class="date">${cert.year}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updateSkillsSection() {
        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = this.data.skills.map(skill => `
            <div class="skill-card">
                <div class="skill-icon">${skill.icon}</div>
                <h4>${skill.category}</h4>
                <div class="skill-tags">
                    ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    updateProjectsSection() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = this.data.projects.map(project => `
            <div class="project-card">
                <div class="project-image">${project.icon}</div>
                <div class="project-content">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" class="project-link">${link.label}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateContactSection() {
        const contactInfo = document.querySelector('.contact-info');
        if (!contactInfo) return;

        // Update contact items
        const contactItems = contactInfo.querySelectorAll('.contact-item');
        const contactData = [
            { icon: '@', label: 'Email', value: this.data.personal.email },
            { icon: '#', label: 'Phone', value: this.data.personal.phone },
            { icon: '📍', label: 'Location', value: this.data.personal.location },
            { icon: '🔗', label: 'LinkedIn', value: this.data.personal.linkedin }
        ];

        contactItems.forEach((item, index) => {
            if (contactData[index]) {
                const iconEl = item.querySelector('.contact-icon');
                const textEl = item.querySelector('div:last-child');
                
                if (iconEl) iconEl.textContent = contactData[index].icon;
                if (textEl) {
                    textEl.innerHTML = `
                        <strong>${contactData[index].label}</strong><br>
                        ${contactData[index].value}
                    `;
                }
            }
        });
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    const loader = new PortfolioLoader();
    await loader.loadData();
});

// Export for manual use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioLoader;
}