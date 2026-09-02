/**
 * ROSHAN NISHAD - PORTFOLIO & BLOG JAVASCRIPT
 * Interactive functionality: Navigation, Smooth Scroll, Real-Time Dynamic Greeting,
 * Reveal Loading Animations, Scroll Progress, Quick Copy, and Form Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Unified 60-120fps Scroll Pipeline (Progress, Sticky Nav & Active Spy)
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.nav-link');
  const navLinkMap = new Map();

  sections.forEach(sec => {
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) navLinkMap.set(sec, link);
  });

  let scrollTicking = false;

  const onScrollUpdate = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Sticky navbar styling
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Top scroll progress bar
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = `${progressPercent}%`;
    }

    // Active nav link highlight
    let currentActiveSec = null;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (scrollY >= sec.offsetTop - 140) {
        currentActiveSec = sec;
        break;
      }
    }

    if (currentActiveSec) {
      const targetLink = navLinkMap.get(currentActiveSec);
      if (targetLink && !targetLink.classList.contains('active')) {
        navLinks.forEach(l => l.classList.remove('active'));
        targetLink.classList.add('active');
      }
    }

    scrollTicking = false;
  };

  const scheduleScrollUpdate = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(onScrollUpdate);
    }
  };

  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  onScrollUpdate();

  // 2. Real-Time Dynamic Single-Line Typewriter Greeting in Introduction Container
  const initIntroTypewriter = () => {
    const introTextEl = document.getElementById('introTypewriterText');
    if (!introTextEl) return;

    const hour = new Date().getHours();
    let timeGreeting = 'Good evening';
    if (hour >= 5 && hour < 12) {
      timeGreeting = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
      timeGreeting = 'Good afternoon';
    } else {
      timeGreeting = 'Good evening';
    }

    const fullGreeting = `Hello, ${timeGreeting}`;
    const cursor = document.createElement('span');
    cursor.className = 'intro-cursor';

    let k = 0;
    const typeIntro = () => {
      if (k < fullGreeting.length) {
        introTextEl.textContent = fullGreeting.substring(0, k + 1);
        introTextEl.appendChild(cursor);
        k++;
        setTimeout(typeIntro, 55);
      }
    };

    setTimeout(typeIntro, 500);
  };

  initIntroTypewriter();

  // 3. Dynamic Real-Time Typewriter Greeting in Top-Left Corner of Hero Image
  const initCornerTypewriter = () => {
    const line1El = document.getElementById('typewriterLine1');
    const line2El = document.getElementById('typewriterLine2');
    if (!line1El || !line2El) return;

    const hour = new Date().getHours();
    let timeGreeting = 'Good evening';
    if (hour >= 5 && hour < 12) {
      timeGreeting = 'Good morning';
    } else if (hour >= 12 && hour < 17) {
      timeGreeting = 'Good afternoon';
    } else {
      timeGreeting = 'Good evening';
    }

    const line1Text = 'Hello,';
    const line2Text = timeGreeting;

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';

    let i = 0;
    const typeLine1 = () => {
      if (i < line1Text.length) {
        line1El.textContent = line1Text.substring(0, i + 1);
        line1El.appendChild(cursor);
        i++;
        setTimeout(typeLine1, 75);
      } else {
        cursor.remove();
        line2El.appendChild(cursor);
        setTimeout(typeLine2, 280);
      }
    };

    let j = 0;
    const typeLine2 = () => {
      if (j < line2Text.length) {
        line2El.textContent = line2Text.substring(0, j + 1);
        line2El.appendChild(cursor);
        j++;
        setTimeout(typeLine2, 65);
      }
    };

    setTimeout(typeLine1, 350);
  };

  initCornerTypewriter();

  // 4. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksWrap = document.getElementById('navLinksWrap');

  if (mobileToggle && navLinksWrap) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksWrap.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('svg');
      if (isOpen) {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
      } else {
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />`;
      }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinksWrap.classList.contains('open')) {
          navLinksWrap.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.querySelector('svg').innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />`;
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinksWrap.classList.contains('open')) {
        navLinksWrap.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.querySelector('svg').innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />`;
      }
    });
  }

  // 5. Scroll Loading Animation with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback
    revealElements.forEach(el => el.classList.add('in-view'));
  }

  // 6. Toast Notification System
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  // 7. Copy to Clipboard Functionality
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const emailText = btn.getAttribute('data-email') || 'roshan.nishad@thexyzgroup.in';
      try {
        await navigator.clipboard.writeText(emailText);
        showToast(`Email copied: ${emailText}`);
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Email copied: ${emailText}`);
      }
    });
  });

  // 8. Contact Form Interactive Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('senderName');
      const name = nameInput ? nameInput.value.trim() : 'Friend';
      
      showToast(`Thank you, ${name}! Your message has been prepared.`);
      contactForm.reset();
    });
  }
});
