// News items functionality
document.addEventListener("DOMContentLoaded", () => {
  const newsItems = document.querySelectorAll(
    '.news-item[data-expandable="true"]'
  );

  newsItems.forEach((item) => {
    const title = item.querySelector(".news-title");
    const content = item.querySelector(".news-content");

    // Only make clickable if there's content
    if (content && content.innerHTML.trim()) {
      title.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle("expanded");
      });

      // Prevent click on the entire item from triggering
      item.addEventListener("click", (e) => {
        if (e.target === item) {
          e.preventDefault();
          item.classList.toggle("expanded");
        }
      });
    }
  });
});
