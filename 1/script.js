// GitProfile — Developer Dashboard Script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Active link highlighters on scroll
  const sections = document.querySelectorAll('section, header');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Data (Strictly aligned with resume facts)
  const modalData = {
    p1: {
      title: "WhatsApp Lead-Nurturing Workflow",
      tech: ["n8n", "Docker", "Google Sheets"],
      summary: "Automated a WhatsApp follow-up workflow using n8n and Docker, with Google Sheets used to track leads and messages.",
      architecture: "Google Sheets (Lead Tracking) ──> n8n (Docker Container) ──> WhatsApp Messaging",
      learned: "Practiced workflow automation using n8n, self-hosting tools inside Docker containers, and integrating Google Sheets for tracking."
    },
    p2: {
      title: "Coding Assistant Integrations",
      tech: ["MCP", "Playwright", "Firecrawl", "Google Sheets"],
      summary: "Connected AI coding assistants with MCP, Playwright, and Firecrawl for browser automation and web data extraction, with outputs synced to Google Sheets.",
      architecture: "AI Coding Assistant ──> Model Context Protocol (MCP) ──> Playwright & Firecrawl ──> Google Sheets",
      learned: "Gained practical experience connecting AI assistants to external tools via MCP, automating browser interactions with Playwright, and syncing data to Google Sheets."
    },
    p3: {
      title: "Bookbot",
      tech: ["Python", "OOP", "CLI"],
      summary: "Built a CLI text analyzer that counts word and character frequencies, using Python classes and methods.",
      architecture: "Text Input File ──> Python Analysis Engine (OOP) ──> Terminal Output Report",
      learned: "Strengthened core Python object-oriented programming skills, string parsing, class methods, and CLI program design."
    },
    p4: {
      title: "Asteroids Clone",
      tech: ["Python", "Pygame", "OOP"],
      summary: "Built an Asteroids-style game with Python and Pygame, implementing player movement, collision detection, and game-loop logic.",
      architecture: "Pygame Main Loop ──> Player Movement & Physics ──> Collision Detection ──> Render Loop",
      learned: "Applied object-oriented programming principles to game development, vector math, collision detection algorithms, and game loop architecture."
    }
  };

  // Modal Handlers
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const openModalBtns = document.querySelectorAll('.open-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const data = modalData[modalId];
      if (!data) return;

      modalBody.innerHTML = `
        <h3 class="modal-title">${data.title}</h3>
        <div class="project-tech font-mono" style="margin-bottom: 1.5rem;">
          ${data.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        
        <div class="modal-section">
          <div class="modal-section-title font-mono">// SUMMARY</div>
          <p class="modal-p">${data.summary}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title font-mono">// ARCHITECTURE FLOW</div>
          <div class="arch-flow">${data.architecture}</div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title font-mono">// WHAT WAS EXPLORED</div>
          <p class="modal-p">${data.learned}</p>
        </div>
      `;

      modalOverlay.classList.add('active');
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
});
