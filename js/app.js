/**
 * Roshan - Modern Portfolio & Interactive CV Application Engine
 * Pure ES6+ JavaScript (Zero Dependencies, Ultra-Fast & Accessible)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initTerminal();
  initProjects();
  initExperience();
  initSkillsSearch();
  initResumeSection();
  initBlogModal();
  initContactForm();
  initScrollSpy();
  initBackToTop();
});

/* ==========================================================================
   1. THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('roshan_portfolio_theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Default to dark mode unless explicitly saved as light or system preference is light
  const currentTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
    
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('roshan_portfolio_theme', nextTheme);
      themeToggleBtn.setAttribute('aria-label', `Switch to ${nextTheme === 'dark' ? 'light' : 'dark'} mode`);
      showToast(`Switched to ${nextTheme} theme`);
    });
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  function openDrawer() {
    drawer.classList.add('open');
    menuBtn.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}

/* ==========================================================================
   3. DYNAMIC TERMINAL EMULATION IN HERO
   ========================================================================== */
function initTerminal() {
  const termBody = document.getElementById('hero-terminal-body');
  if (!termBody) return;

  const scripts = [
    { cmd: "roshan.profile", out: "Full-Stack Engineer & AI Systems Architect (Bangalore, IN)" },
    { cmd: "roshan.coreStack", out: "['TypeScript', 'Python', 'Go', 'Gemini 2.0 API', 'Kafka', 'React', 'Docker']" },
    { cmd: "roshan.queryImpact()", out: "⚡ 85k events/sec • 62% LLM API cost cut • 3.4x faster agent reasoning" },
    { cmd: "roshan.status", out: "🟢 Available for Full-Time High-Impact Roles & Consulting" }
  ];

  let scriptIndex = 0;

  function renderTerminal() {
    let html = '';
    for (let i = 0; i <= scriptIndex; i++) {
      const item = scripts[i];
      html += `
        <div class="terminal-line">
          <span class="t-prompt">roshan@prod:~$</span>
          <span class="t-cmd">${item.cmd}</span>
          <div class="t-output">${item.out}</div>
        </div>
      `;
    }

    if (scriptIndex < scripts.length - 1) {
      html += `
        <div class="terminal-line">
          <span class="t-prompt">roshan@prod:~$</span>
          <span class="t-cursor"></span>
        </div>
      `;
    } else {
      html += `
        <div class="terminal-line">
          <span class="t-prompt">roshan@prod:~$</span>
          <span class="t-highlight">// Ready for production scale.</span>
          <span class="t-cursor"></span>
        </div>
      `;
    }

    termBody.innerHTML = html;

    if (scriptIndex < scripts.length - 1) {
      scriptIndex++;
      setTimeout(renderTerminal, 1400);
    }
  }

  setTimeout(renderTerminal, 600);
}

/* ==========================================================================
   4. PROJECTS SHOWCASE & CASE STUDY MODAL
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('case-study-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (!container) return;

  // Render Projects Grid
  renderProjectCards(portfolioData.projects);

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjectCards(portfolioData.projects);
      } else {
        const filtered = portfolioData.projects.filter(p => p.category === filter);
        renderProjectCards(filtered);
      }
    });
  });

  // Modal Close Events
  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderProjectCards(projectsList) {
    if (!projectsList || projectsList.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No projects found in this category.</p>`;
      return;
    }

    container.innerHTML = projectsList.map(project => `
      <article class="project-card" data-category="${project.category}">
        <div>
          <div class="project-top">
            <span class="badge ${getCategoryBadgeClass(project.category)} project-category-tag">${getCategoryLabel(project.category)}</span>
            ${project.featured ? '<span class="project-featured-badge">★ Featured</span>' : ''}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <p class="project-desc">${project.description}</p>
        </div>

        <div>
          <div class="project-impact">
            <span>${project.impact}</span>
          </div>
          <div class="project-tags">
            ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary btn-sm open-case-study-btn" data-project-id="${project.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Case Study
            </button>
            <div class="project-links">
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="GitHub Repository">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Code
              </a>
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach case study click listeners
    const caseStudyBtns = container.querySelectorAll('.open-case-study-btn');
    caseStudyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        openCaseStudy(pId);
      });
    });
  }

  function openCaseStudy(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project || !project.caseStudy) return;

    const modalBody = document.getElementById('case-study-content');
    if (!modalBody) return;

    const cs = project.caseStudy;
    modalBody.innerHTML = `
      <div class="modal-header-banner">
        <span class="badge ${getCategoryBadgeClass(project.category)}">${getCategoryLabel(project.category)}</span>
        <h2 class="modal-title" style="margin-top: 0.75rem;">${cs.title}</h2>
        <p class="modal-subtitle">${cs.subtitle}</p>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> Project Overview</h4>
        <p>${cs.overview}</p>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> The Challenge & Problem Statement</h4>
        <p>${cs.problem}</p>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Architectural Solution</h4>
        <p>${cs.solution}</p>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> Architecture Highlights</h4>
        <ul>
          ${cs.architectureNotes.map(note => `<li>${note}</li>`).join('')}
        </ul>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Key Engineering Obstacles Overcome</h4>
        <ul>
          ${cs.keyChallenges.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="case-study-section">
        <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Quantitative Outcomes & Production Metrics</h4>
        <div class="case-study-metrics-grid">
          ${cs.metrics.map(m => `<div class="case-metric-box">✓ ${m}</div>`).join('')}
        </div>
      </div>

      <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          Launch Live Demo
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          View Source Repository
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function getCategoryBadgeClass(category) {
    switch(category) {
      case 'ai': return 'badge-teal';
      case 'cloud': return 'badge-indigo';
      case 'web': return 'badge-purple';
      case 'opensource': return 'badge-amber';
      default: return 'badge-indigo';
    }
  }

  function getCategoryLabel(category) {
    switch(category) {
      case 'ai': return 'AI & LLM';
      case 'cloud': return 'Cloud & Backend';
      case 'web': return 'Web Apps';
      case 'opensource': return 'Open Source';
      default: return category;
    }
  }
}

/* ==========================================================================
   5. EXPERIENCE & EDUCATION ACCORDION TIMELINE
   ========================================================================== */
function initExperience() {
  const timelineContainer = document.getElementById('experience-timeline-container');
  if (!timelineContainer) return;

  timelineContainer.innerHTML = portfolioData.experience.map((item, index) => {
    const isEdu = item.type === 'education';
    // Open the first item by default
    const isOpen = index === 0;

    return `
      <div class="timeline-item ${isOpen ? 'open' : ''}" id="timeline-${item.id}">
        <div class="timeline-pin ${isEdu ? 'pin-edu' : ''}">
          ${isEdu ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          `}
        </div>
        <div class="timeline-card">
          <div class="timeline-header" role="button" tabindex="0" aria-expanded="${isOpen}">
            <div class="timeline-header-info">
              <div class="timeline-role-row">
                <span class="timeline-role">${item.role}</span>
                ${item.isCurrent ? '<span class="badge badge-teal">Current</span>' : ''}
              </div>
              <div class="timeline-company">${item.organization}</div>
              <div class="timeline-meta">
                <span>📍 ${item.location}</span>
                <span>📅 ${item.period}</span>
              </div>
            </div>
            <div class="timeline-toggle-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          <div class="timeline-impact-line">
            <span>${item.impact}</span>
          </div>

          <div class="timeline-body">
            <p class="timeline-summary">${item.summary}</p>
            <ul class="timeline-accomplishments">
              ${item.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
            </ul>
            <div class="timeline-tech-stack">
              ${item.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach Accordion Toggle Click Handlers
  const headers = timelineContainer.querySelectorAll('.timeline-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.timeline-item');
      const isCurrentlyOpen = parentItem.classList.contains('open');

      if (isCurrentlyOpen) {
        parentItem.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}

/* ==========================================================================
   6. SKILLS SEARCH & INTERACTIVE FILTER
   ========================================================================== */
function initSkillsSearch() {
  const searchInput = document.getElementById('skill-search-input');
  const skillsContainer = document.getElementById('skills-grid-container');
  const achievementsContainer = document.getElementById('achievements-grid-container');

  if (skillsContainer) {
    skillsContainer.innerHTML = portfolioData.skillCategories.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <div class="skill-category-icon">
            ${getCategoryIconSvg(cat.icon)}
          </div>
          <h3 class="skill-category-title">${cat.category}</h3>
        </div>
        <p class="skill-category-desc">${cat.description}</p>
        <div class="skills-pill-wrap">
          ${cat.skills.map(skill => `
            <span class="skill-pill ${skill.featured ? 'featured' : ''}" data-skill-name="${skill.name.toLowerCase()}">
              <span class="skill-level-dot ${skill.level.toLowerCase() === 'expert' ? 'expert' : ''}"></span>
              ${skill.name}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Achievements
  if (achievementsContainer) {
    achievementsContainer.innerHTML = portfolioData.achievements.map(achieve => `
      <div class="achievement-card">
        <div class="achievement-top">
          <span class="achievement-badge">${achieve.badge}</span>
          <span class="badge badge-indigo">${achieve.year}</span>
        </div>
        <div class="achievement-metric">${achieve.metric}</div>
        <div class="achievement-title">${achieve.title} (${achieve.issuer})</div>
        <p class="achievement-desc">${achieve.description}</p>
      </div>
    `).join('');
  }

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      const allPills = document.querySelectorAll('.skill-pill');

      if (!query) {
        allPills.forEach(p => p.classList.remove('highlight'));
        return;
      }

      allPills.forEach(pill => {
        const name = pill.getAttribute('data-skill-name');
        if (name && name.includes(query)) {
          pill.classList.add('highlight');
        } else {
          pill.classList.remove('highlight');
        }
      });
    });
  }

  function getCategoryIconSvg(icon) {
    switch(icon) {
      case 'code':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case 'layout':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`;
      case 'cpu':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
      case 'cloud':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`;
      case 'database':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
      default:
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }
}

/* ==========================================================================
   7. RESUME PREVIEWER & ATS EXPORT CONTROLS
   ========================================================================== */
function initResumeSection() {
  const tabFormatted = document.getElementById('tab-resume-formatted');
  const tabRaw = document.getElementById('tab-resume-raw');
  const viewFormatted = document.getElementById('resume-formatted-view');
  const viewRaw = document.getElementById('resume-raw-view');
  const copyRawBtn = document.getElementById('btn-copy-ats-resume');
  const printPdfBtn = document.getElementById('btn-print-resume');
  const rawTextarea = document.getElementById('resume-raw-textarea');

  if (rawTextarea) {
    rawTextarea.value = portfolioData.atsResumeText.trim();
  }

  if (tabFormatted && tabRaw && viewFormatted && viewRaw) {
    tabFormatted.addEventListener('click', () => {
      tabFormatted.classList.add('active');
      tabRaw.classList.remove('active');
      viewFormatted.style.display = 'block';
      viewRaw.classList.remove('active');
    });

    tabRaw.addEventListener('click', () => {
      tabRaw.classList.add('active');
      tabFormatted.classList.remove('active');
      viewFormatted.style.display = 'none';
      viewRaw.classList.add('active');
    });
  }

  // Copy Plain Text ATS Resume
  if (copyRawBtn) {
    copyRawBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.atsResumeText.trim())
        .then(() => {
          showToast('ATS Plain-Text Resume copied to clipboard!');
        })
        .catch(() => {
          showToast('Failed to copy to clipboard. Please select and copy manually.');
        });
    });
  }

  // Print to PDF
  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   8. BLOG / CASE STUDY ARTICLE MODAL READER
   ========================================================================== */
function initBlogModal() {
  const blogContainer = document.getElementById('blog-grid-container');
  const blogModal = document.getElementById('blog-reader-modal');
  const blogClose = document.getElementById('blog-close-btn');

  if (blogContainer) {
    blogContainer.innerHTML = portfolioData.blogPosts.map(post => `
      <article class="blog-card" data-post-id="${post.id}">
        <div>
          <div class="blog-meta">
            <span>📅 ${post.date}</span>
            <span>•</span>
            <span>⏱️ ${post.readTime}</span>
            <span>•</span>
            <span class="badge badge-indigo">${post.category}</span>
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
        </div>

        <div>
          <div class="blog-tags">
            ${post.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="blog-read-btn">
            Read Technical Brief
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    const cards = blogContainer.querySelectorAll('.blog-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-post-id');
        openBlogPost(id);
      });
    });
  }

  if (blogClose && blogModal) {
    blogClose.addEventListener('click', closeBlogModal);
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) closeBlogModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && blogModal.classList.contains('active')) {
        closeBlogModal();
      }
    });
  }

  function closeBlogModal() {
    blogModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openBlogPost(postId) {
    const post = portfolioData.blogPosts.find(p => p.id === postId);
    if (!post || !blogModal) return;

    const contentBox = document.getElementById('blog-modal-content');
    if (!contentBox) return;

    contentBox.innerHTML = `
      <div class="modal-header-banner">
        <div class="blog-meta" style="margin-bottom: 0.5rem;">
          <span>📅 ${post.date}</span>
          <span>•</span>
          <span>⏱️ ${post.readTime}</span>
          <span>•</span>
          <span class="badge badge-teal">${post.category}</span>
        </div>
        <h2 class="modal-title">${post.title}</h2>
        <div class="blog-tags" style="margin-top: 1rem;">
          ${post.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="case-study-section" style="font-size: 1.05rem; line-height: 1.8;">
        ${post.content.map(para => `<p style="margin-bottom: 1.25rem;">${para}</p>`).join('')}
      </div>

      <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.9rem; color: var(--text-muted);">Written by <strong>Roshan Nishad</strong></span>
        <button class="btn btn-secondary btn-sm" onclick="document.getElementById('blog-close-btn').click();">Close Article</button>
      </div>
    `;

    blogModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/* ==========================================================================
   9. INTERACTIVE CONTACT FORM & EMAIL COPY
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const copyBtn = document.getElementById('btn-copy-email');
  const feedback = document.getElementById('contact-form-feedback');

  // Copy Email Button
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = portfolioData.personalInfo.socials.email;
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast(`Copied ${email} to clipboard!`);
        })
        .catch(() => {
          showToast(email);
        });
    });
  }

  // Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput ? subjectInput.value.trim() : 'Project Inquiry';
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please fill in all required fields.';
        }
        return;
      }

      // Validated: display success feedback
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.textContent = `Thank you, ${name}! Your message has been prepared. Opening your mail client...`;
      }

      showToast('Message sent! Roshan will respond within 24 hours.');

      // Open mailto link as fallback
      const mailtoUrl = `mailto:${portfolioData.personalInfo.socials.email}?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 750);

      form.reset();
    });
  }
}

/* ==========================================================================
   10. SCROLL SPY FOR NAVBAR ACTIVE LINKS
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   11. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backTopBtn = document.getElementById('back-to-top-btn');
  if (!backTopBtn) return;

  backTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   12. TOAST NOTIFICATION UTILITY
   ========================================================================== */
let toastTimeout;
function showToast(message, duration = 3200) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-teal);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
