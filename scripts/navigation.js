// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
  const sections = document.querySelectorAll('main > section');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const logo = document.querySelector('.logo');

  function activate(id) {
    sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Update the logo click handler
  const logoContainer = document.querySelector('.logo-container');

  // Logo click handler - go to homepage (about section)
  logoContainer.addEventListener('click', (e) => {
    e.preventDefault();
    activate('about');
    history.pushState(null, '', '/'); // Set URL to root
    closeMobileMenu();
  });

  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close mobile menu
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      activate(id);
      history.pushState(null, '', '#' + id);
      closeMobileMenu();
    });
  });

  // Initialize with about section as homepage
  const initial = location.hash ? location.hash.substring(1) : 'about';
  
  // Ensure about section is active by default
  if (!location.hash) {
    // Clear any existing active states
    sections.forEach(sec => sec.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Activate about section
    const aboutSection = document.getElementById('about');
    const aboutLink = document.querySelector('a[href="#about"]');
    
    if (aboutSection) {
      aboutSection.classList.add('active');
    }
    if (aboutLink) {
      aboutLink.classList.add('active');
    }
  } else {
    activate(initial);
  }

  // Close mobile menu on window resize if it's open
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
});
