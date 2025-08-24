// Content management and rendering
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all dynamic content
  RENDER_FUNCTIONS.init();

  // Update lab name and description
  const labNameElements = document.querySelectorAll("[data-lab-name]");
  labNameElements.forEach((el) => {
    el.textContent = LAB_DATA.labName;
  });

  const labDescElements = document.querySelectorAll("[data-lab-description]");
  labDescElements.forEach((el) => {
    el.textContent = LAB_DATA.labDescription;
  });
});
