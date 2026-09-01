# Roshan Nishad - Modern Portfolio & Interactive CV

A modern, responsive, and high-converting personal website and interactive portfolio engineered using **vanilla HTML5, CSS3, and ES6+ JavaScript only** (zero build dependencies, zero frameworks, instantaneous load speed, and 100% portable).

Designed specifically for **recruiters, hiring managers, potential clients, and engineering collaborators**.

---

## 🌟 Key Highlights & Features

### 1. Visual Style & UI/UX
- **Tech-Focused Dark / Light Modes**: Sleek glassmorphism aesthetic with CSS variables and automatic `localStorage` persistence + system `prefers-color-scheme` support.
- **Micro-Animations & Smooth Scrolling**: Subtle card hover glows, border transitions, smooth section scrolling, and pulsing live availability indicator.
- **Fully Responsive**: Fluid layout scaling effortlessly across Mobile (<640px), Tablet (641px - 1024px), and Desktop (>1024px) viewports with animated mobile drawer.

### 2. Architecture & Core Sections
- **Header & Navigation**: Sticky navbar with backdrop blur (`backdrop-filter: blur(16px)`), live status dot, theme toggle, and direct "Resume" CTA.
- **Hero Section**:
  - High-impact headline & value proposition.
  - Interactive **macOS/Unix terminal emulation** running system diagnostic commands (`roshan.profile`, `roshan.coreStack`, `roshan.queryImpact()`).
  - Key performance metrics banner: *4+ Yrs Experience*, *85k/s Peak Ingestion*, *62% LLM Cost Saved*, *1.4k★ Open Source*.
  - Direct conversion CTAs & quick social links (GitHub, LinkedIn, Twitter/X, Email).
- **Interactive Portfolio & Case Studies**:
  - Filterable project grid ("All", "AI & LLM", "Cloud & Backend", "Web Apps", "Open Source").
  - Project cards with business & technical impact badges, live demo links, and GitHub repos.
  - **In-Depth Case Study Modal**: Deep-dive popup for each project showing Problem Statement, Architectural Solution, Implementation Notes, Challenges, and Quantitative Metrics.
- **Interactive CV & Experience Timeline**:
  - Chronological timeline covering professional engineering positions and academic foundations at NIT.
  - **Expandable Accordions**: Click to toggle detailed accomplishments, leadership metrics, and tech stack tags.
- **Technical Skills & Tools Hub**:
  - Categorized badges for Languages & Core Systems, Frameworks, AI & LLMs, Cloud/DevOps, and Databases.
  - **Live Interactive Search**: Filter and highlight skills in real-time as you type.
  - Competitive Achievements grid (LeetCode Knight, 1st Place Hackathon, Top 1% National Exam).
- **Recruiter-Ready ATS Resume & Print Engine**:
  - Dual-mode viewer: **Executive Formatted View** vs **Raw Plain-Text ATS View**.
  - One-click "Copy ATS Text" with toast notification for pasting into job portals.
  - **Print / Save as PDF**: Invokes `@media print` CSS that automatically strips navigation, buttons, and backgrounds to produce a crisp, standard 1-to-2 page ATS resume.
- **Verified Certifications Grid**:
  - Verified badges for Google Cloud Professional Cloud Architect, DeepLearning.AI GenAI, AWS Solutions Architect, and Meta Front-End.
- **Engineering Notes & Technical Writing**:
  - Cards for engineering post-mortems with in-page modal reader.
- **High-Converting Contact Section**:
  - Direct contacts with one-click "Copy Email" button and toast notification.
  - Interactive contact form with client-side validation and automated mailto fallback.
  - 15-minute intro meeting booking CTA (Calendly).
- **Footer**:
  - Quick navigation, copyright info, and smooth "Back to Top" trigger.

---

## 📁 Project Structure

```
roshan/
├── index.html        # Main semantic HTML5 markup containing all sections and modals
├── css/
│   ├── styles.css    # Primary CSS3 design system (dark/light themes, typography, layout, modals)
│   └── print.css     # Dedicated ATS print stylesheet for pixel-perfect PDF export
├── js/
│   ├── data.js       # Complete structured portfolio dataset (projects, experience, skills, certs)
│   └── app.js        # Pure ES6+ interactivity (theme, filters, modals, accordions, search, toasts)
└── README.md         # Documentation and project overview
```

---

## 🚀 How to Run Locally

Because this project is built using pure **HTML, CSS, and JS**, there are **no build steps, npm installs, or compilers required**:

1. Simply double-click `index.html` in your file explorer to view the site directly in any browser (Chrome, Edge, Firefox, Safari).
2. Or serve it via any simple local static server:
   ```bash
   # Using Python:
   python -m http.server 8080
   # Then open: http://localhost:8080

   # Or using Node:
   npx serve .
   ```

---

## 🌐 Free Instant Deployment Options

- **GitHub Pages**: Push this repository to GitHub, go to **Settings > Pages**, and select `Deploy from a branch (main / root)`.
- **Vercel / Netlify**: Simply drag and drop the folder into Vercel or Netlify for instantaneous global CDN deployment.
