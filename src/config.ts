export const siteConfig = {
  name: "Aditya S",
  wordmark: "ADITYA.S",
  location: "Bangalore, India",
  resume: "resume.pdf",
  accentColor: "#3B82F6",
  seo: {
    title: "Aditya S — Software, AI & Automation",
    description:
      "Aditya S is an Information Science Engineering student building practical software, AI automations and developer tools.",
    siteName: "Aditya S — Portfolio",
  },
  social: {
    email: "aditya.s274adi@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-s-8179ab38b",
    github: "https://github.com/aditya-zig",
  },
  hero: {
    status: "Available for internships",
    headline: "I build automation, AI tooling, and practical software.",
    sub: "First-year Information Science Engineering student building with Python, n8n, Docker and AI developer tools.",
  },
  aboutMe:
    "I'm Aditya, an Information Science Engineering student at RR College of Engineering, Bengaluru. I build practical projects — automation workflows, AI tooling and small games — while steadily deepening my skills in AI engineering, backend development and DevOps. Alongside my coursework, I study through coding boot camps covering Python, Linux, Git, Python OOP and introductory DSA, and I actively participate in hackathons — including a Top 5 placement.",
  educationShort: "B.Tech ISE, RRCE — Expected 2029",
  focus: [
    {
      title: "AI Engineering",
      description: "Exploring practical AI systems and developer tooling.",
    },
    {
      title: "Automation",
      description: "Building workflow automation with n8n.",
    },
    {
      title: "Backend",
      description: "Strengthening JavaScript and backend fundamentals.",
    },
    {
      title: "DevOps",
      description: "Learning containers, Linux and deployment.",
    },
  ],
  skills: [
    {
      group: "Comfortable with",
      items: ["Python", "C", "Git", "Linux"],
    },
    {
      group: "Building with",
      items: ["n8n", "Docker", "MCP", "Playwright", "Firecrawl"],
    },
    {
      group: "Currently learning",
      items: ["JavaScript", "TypeScript", "SQL", "HTML/CSS"],
      note: "Actively learning through projects and coursework.",
    },
    {
      group: "AI developer tools",
      items: ["Claude Code", "Codex CLI", "OpenCode", "Cursor", "Gemini CLI", "OpenAI API", "Ollama"],
      note: "Everyday tools for AI-assisted development and automation.",
    },
    {
      group: "Tools",
      items: ["GitHub", "VS Code", "Obsidian", "Notion"],
    },
  ],
  projects: [
    {
      name: "WhatsApp Lead-Nurturing Workflow",
      description:
        "Automated a WhatsApp follow-up workflow using n8n and Docker, with Google Sheets used to track leads and messages.",
      skills: ["n8n", "Docker", "Google Sheets"],
      category: "Automation",
      featured: true,
      motif: "chat",
      monogram: "WL",
      why: "Keep follow-ups consistent and track every lead and message in a spreadsheet instead of logging them by hand.",
      how: "n8n orchestrates the follow-up flow between WhatsApp and Google Sheets, running as a containerized service with Docker.",
      result: "A working automated follow-up workflow connecting n8n, Google Sheets and WhatsApp.",
      learned:
        "Building the workflow taught me how to connect automation steps, manage structured lead data, and work with Dockerized services.",
      architecture: [
        { label: "Google Sheets", sub: "lead & message tracking" },
        { label: "n8n", sub: "workflow automation (Docker)" },
        { label: "WhatsApp", sub: "follow-up messages" },
      ],
    },
    {
      name: "Coding Assistant Integrations",
      description:
        "Connected AI coding assistants with MCP, Playwright, and Firecrawl for browser automation and web data extraction, with outputs synced to Google Sheets.",
      skills: ["MCP", "Playwright", "Firecrawl"],
      category: "AI / Developer Tooling",
      motif: "plug",
      monogram: "CI",
      why: "Give AI coding assistants access to browser automation and web data extraction.",
      how: "MCP connects the assistant to Playwright for browser automation and Firecrawl for web data extraction; outputs are synced to Google Sheets.",
      result: "Working integrations that automate browser actions and extract web data for coding assistants, with outputs saved to Google Sheets.",
      learned:
        "How MCP servers expose tools to coding assistants, and how browser automation and data extraction pipelines fit together.",
      architecture: [
        { label: "AI Coding Assistant" },
        { label: "MCP", sub: "tool protocol" },
        { parallel: ["Playwright", "Firecrawl"], sub: "browser automation · web data" },
        { label: "Google Sheets", sub: "output sync" },
      ],
    },
    {
      name: "Bookbot",
      description:
        "Built a CLI text analyzer that counts word and character frequencies, using Python classes and methods.",
      skills: ["Python", "OOP", "CLI"],
      category: "Python",
      motif: "book",
      monogram: "BB",
      why: "Practice Python object-oriented programming on a real command-line tool.",
      how: "A CLI text analyzer built with Python classes and methods that count word and character frequencies.",
      result: "A working command-line text analyzer.",
      learned: "Solidified Python OOP fundamentals — classes, methods and clean CLI structure.",
    },
    {
      name: "Asteroids Clone",
      description:
        "Built an Asteroids-style game with Python and Pygame, implementing player movement, collision detection, and game-loop logic.",
      skills: ["Python", "Pygame"],
      category: "Python / Game Development",
      motif: "asteroids",
      monogram: "AC",
      repo: "https://github.com/aditya-zig/Asteroid-game",
      why: "Learn game development fundamentals by building a classic arcade game from scratch.",
      how: "A Python and Pygame implementation with player movement, collision detection and a persistent game loop.",
      result: "A playable Asteroids-style game.",
      learned: "Player movement, collision detection and game-loop logic with Pygame.",
    },
  ],
  education: [
    {
      school: "RR College of Engineering (RRCE), Bengaluru",
      degree: "B.Tech — Information Science Engineering",
      dateRange: "Expected 2029",
      achievements: [
        "Concurrent self-study through coding boot camps, including Python, Linux, Git, Python OOP, and introductory DSA.",
      ],
    },
  ],
  cta: {
    heading: "Let's build something useful.",
    text: "I'm currently seeking AI/automation-focused internship opportunities where I can learn, contribute and build practical software.",
  },
};
