// al-folio Theme Script for Site 1

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Handler
  const themeToggle = document.getElementById('themeToggle');
  const htmlTag = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  htmlTag.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlTag.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlTag.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Mobile Navbar Toggle
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarNav = document.getElementById('navbarNav');

  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });
  }

  // Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section, header.post');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
