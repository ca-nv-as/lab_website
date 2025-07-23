// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a, .mobile-menu a");
  const sections = document.querySelectorAll("main > section");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  function activate(id) {
    sections.forEach((sec) => sec.classList.toggle("active", sec.id === id));
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === "#" + id)
    );
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openMobileMenu() {
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    mobileMenuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close mobile menu
  mobileMenuClose.addEventListener("click", closeMobileMenu);
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);

  // Navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      activate(id);
      history.pushState(null, "", "#" + id);
      closeMobileMenu();
    });
  });

  // Initialize with hash or default to about
  const initial = location.hash ? location.hash.substring(1) : "about";
  activate(initial);

  // Close mobile menu on window resize if it's open
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
});
