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

  // Modal Data
  const modalData = {
    p1: {
      title: "WhatsApp Lead-Nurturing Workflow",
      tech: ["n8n", "Docker", "Google Sheets"],
      problem: "Lead response delays can lead to lost interest. Manual follow-ups across messaging channels are prone to human error and inconsistency.",
      solution: "Configured an automated lead-nurturing engine powered by n8n self-hosted inside a Docker container. Leads captured in Google Sheets automatically trigger automated WhatsApp notification flows.",
      architecture: "Google Sheets Trigger ──> n8n (Docker Container) ──> Messaging Webhook ──> WhatsApp API",
      learned: "Deepened practical knowledge of Docker containerization, Webhook payload handling, n8n node automation pipelines, and Google Sheets API integration."
    },
    p2: {
      title: "Coding Assistant Integrations",
      tech: ["MCP (Model Context Protocol)", "Playwright", "Firecrawl", "Google Sheets"],
      problem: "AI coding assistants traditionally lack real-time browser interaction capabilities and web extraction workflows.",
      solution: "Integrated Model Context Protocol (MCP) servers with Playwright for browser automation and Firecrawl for deep web page content extraction, automatically syncing scraped data directly into Google Sheets.",
      architecture: "AI Assistant (Claude/Cursor) ──> MCP Gateway ──> Playwright / Firecrawl ──> Structured Data ──> Google Sheets API",
      learned: "Hands-on experience extending AI model capabilities via MCP tool definitions, programmatic browser automation with Playwright, and web content extraction."
    },
    p3: {
      title: "Bookbot",
      tech: ["Python", "OOP", "CLI"],
      problem: "Analyzing text density, word counts, and character breakdown efficiently from plain text files via command line.",
      solution: "Developed a Python CLI utility that parses text documents, calculates total word metrics, and constructs a sorted character frequency breakdown utilizing custom Python classes.",
      architecture: "Plain Text File ──> Python File Reader ──> Character Frequency Engine (OOP) ──> Terminal Reporter",
      learned: "Strengthened core Python fundamentals, OOP class design, dictionary/list manipulation, and CLI application structure."
    },
    p4: {
      title: "Asteroids Clone",
      tech: ["Python", "Pygame", "OOP"],
      problem: "Understanding 2D physics rendering, vector math, collision detection algorithms, and event-driven game loops.",
      solution: "Engineered a desktop Asteroids game clone using Python and Pygame featuring full player movement dynamics, rotational math, bullet trajectories, dynamic asteroid splitting, and collision checks.",
      architecture: "Pygame Event Loop ──> Player Control & Velocity ──> Collision Detection Engine ──> Screen Renderer",
      learned: "Gained hands-on experience with game loops, vector math, delta time calculation, dynamic sprite rendering, and object hierarchy."
    }
  };

  // Modal Handlers
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const openModalBtns = document.querySelectorAll('.open-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = btn.getAttribute('data-modal');
      const data = modalData[modalId];
      if (!data) return;

      modalBody.innerHTML = `
        <h3 class="modal-title">${data.title}</h3>
        <div class="project-tech font-mono" style="margin-bottom: 1.5rem;">
          ${data.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        
        <div class="modal-section">
          <div class="modal-section-title font-mono">// PROBLEM & CONTEXT</div>
          <p class="modal-p">${data.problem}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title font-mono">// AUTOMATION & SOLUTION</div>
          <p class="modal-p">${data.solution}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title font-mono">// ARCHITECTURE FLOW</div>
          <div class="arch-flow">${data.architecture}</div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title font-mono">// KEY TAKEAWAYS</div>
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
