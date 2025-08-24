// Render functions to dynamically generate content
const RENDER_FUNCTIONS = {
  // Render navigation
  renderNavigation: () => {
    const desktopNav = document.querySelector(".desktop-nav");
    const mobileNav = document.querySelector(".mobile-menu ul");

    if (desktopNav) {
      desktopNav.innerHTML = LAB_DATA.navigation
        .map((item) => `<li><a href="#${item.id}">${item.text}</a></li>`)
        .join("");
    }

    if (mobileNav) {
      mobileNav.innerHTML = LAB_DATA.navigation
        .map((item) => `<li><a href="#${item.id}">${item.text}</a></li>`)
        .join("");
    }
  },

  // Render faculty members with rotated title
  renderFaculty: () => {
    const container = document.querySelector(".leaders-container");
    if (!container) return;

    // Add rotated title if it doesn't exist
    const peopleSection = document.getElementById("people");
    if (
      peopleSection &&
      !peopleSection.querySelector(".section-title-rotated")
    ) {
      const rotatedTitle = document.createElement("h1");
      rotatedTitle.className = "section-title-rotated";
      rotatedTitle.textContent = "Faculty";
      peopleSection.insertBefore(rotatedTitle, peopleSection.firstChild);
    }

    container.innerHTML = LAB_DATA.faculty
      .map(
        (member) => `
      <div class="leader">
        <img src="${member.image}" alt="${member.name}" />
        <p>
          <strong>${member.name}</strong>
          ${
            member.website
              ? `
            <a href="${member.website}" target="_blank" class="faculty-website-link" title="Visit ${member.name}'s website">
              <svg viewBox="0 0 24 24" fill="currentColor" class="website-icon">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </a>
          `
              : ""
          }
          <br />${member.description}
        </p>
      </div>
    `
      )
      .join("");
  },

  // Render students
  renderStudents: () => {
    const container = document.getElementById("students-tab");
    if (!container) return;

    container.innerHTML = LAB_DATA.students
      .map(
        (student) => `
      <div class="student">
        <img src="${student.image}" alt="${student.name}" />
        <div class="student-info">
          <div class="student-header">
            <h3 class="student-name">${student.name}</h3>
            <div class="student-links">
              ${
                student.website
                  ? `
                <a href="${student.website}" target="_blank" class="student-website-link" title="Visit ${student.name}'s website">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="website-icon">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                </a>
              `
                  : ""
              }
              ${
                student.linkedin
                  ? `
                <a href="${student.linkedin}" target="_blank" class="student-linkedin-link" title="Visit ${student.name}'s LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="linkedin-icon">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              `
                  : ""
              }
            </div>
          </div>
          <div class="student-details">
            <h4 class="student-degree">${student.degree}</h4>
            <p class="student-advisor">Advised by ${student.advisor}</p>
          </div>
          <p class="student-description">${student.description}</p>
        </div>
      </div>
    `
      )
      .join("");
  },

  // Render alumni
  renderAlumni: () => {
    const container = document.getElementById("alumni-tab");
    if (!container) return;

    if (LAB_DATA.alumni.length === 0) {
      container.innerHTML =
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
      return;
    }

    container.innerHTML = LAB_DATA.alumni
      .map(
        (alumni) => `
      <div class="alumni">
        <h3>${alumni.name} | ${alumni.degree} | ${alumni.year}</h3>
        <p>${alumni.description}</p>
        <p><strong>Current Position:</strong> ${alumni.currentPosition}</p>
      </div>
    `
      )
      .join("");
  },

  // Render research areas
  renderResearch: () => {
    const container = document.querySelector(".research-gallery");
    if (!container) return;

    container.innerHTML = LAB_DATA.research
      .map(
        (item) => `
      <div class="research-item">
        <img src="${item.image}" alt="${item.title}" class="research-image" />
        <div class="research-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `
      )
      .join("");
  },

  // Render news items
  renderNews: (containerSelector, newsData = null) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const itemsToRender = newsData || LAB_DATA.news;

    container.innerHTML = itemsToRender
      .map(
        (item) => `
      <li class="news-item-simple">
        <div class="news-date-simple">${item.date}</div>
        <div class="news-title-simple">${item.title}</div>
        <div class="news-content-simple">
          ${item.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </li>
    `
      )
      .join("");
  },

  // Render recent publications for about section (shorter version, last 3 by date)
  renderRecentPublications: () => {
    const container = document.querySelector("#about .publications-list");
    if (!container) return;

    // Sort publications by date (newest first) and take last 3
    const sortedPublications = [...LAB_DATA.publications]
      .sort((a, b) => {
        const dateA = new Date(a.date.split("-").reverse().join("-"));
        const dateB = new Date(b.date.split("-").reverse().join("-"));
        return dateB - dateA;
      })
      .slice(0, 3);

    container.innerHTML = sortedPublications
      .map(
        (publication) => `
      <li class="recent-publication-item">
        <div class="recent-publication-details">
          <h3 class="recent-publication-title">
            ${publication.paper_link ? `<a href="${publication.paper_link}" target="_blank" class="recent-publication-title-link">${publication.title}</a>` : publication.title}
          </h3>
          <div class="recent-publication-meta">
            <span class="recent-authors">${publication.authors.join(
              ", "
            )}</span>
            <span class="recent-conference">${publication.conference}</span>
            <span class="recent-year">${publication.date.split("-")[2]}</span>
          </div>
        </div>
      </li>
    `
      )
      .join("");
  },

  // Render publications (ordered by date, newest first)
  renderPublications: () => {
    const container = document.querySelector("#publications .news-list");
    if (!container) return;

    // Sort publications by date (newest first)
    const sortedPublications = [...LAB_DATA.publications].sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return dateB - dateA;
    });

    container.innerHTML = sortedPublications
      .map(
        (publication) => `
      <li class="publication-item">
        <div class="publication-header">
          <h3 class="publication-title">${publication.title}</h3>
          <div class="publication-meta">
            <div class="publication-authors">${publication.authors.join(
              ", "
            )}</div>
            <div class="publication-meta-row">
              <span class="publication-conference">${
                publication.conference
              }</span>
              <span class="publication-year">${
                publication.date.split("-")[2]
              }</span>
              ${
                publication.paper_link
                  ? `<a href="${publication.paper_link}" target="_blank" class="publication-link paper-link">Paper</a>`
                  : ""
              }
              ${
                publication.project_link
                  ? `<a href="${publication.project_link}" target="_blank" class="publication-link project-link">Project</a>`
                  : ""
              }
            </div>
          </div>
        </div>
        <div class="publication-image">
          <img src="${publication.image_link}" alt="${publication.title}" />
        </div>
      </li>
    `
      )
      .join("");
  },

  // Adjust rotated title positioning based on text length
  adjustRotatedTitles: () => {
    const rotatedTitles = document.querySelectorAll(".section-title-rotated");

    rotatedTitles.forEach((title) => {
      const text = title.textContent;
      const textLength = text.length;

      // Calculate positioning based on text length
      let leftOffset, topOffset;

      if (textLength <= 8) {
        // Short titles like "Research", "Join Us"
        leftOffset = -60;
        topOffset = 220;
      } else if (textLength <= 12) {
        // Medium titles like "Publications"
        leftOffset = -60;
        topOffset = 240;
      } else {
        // Long titles like "Welcome to Canvas Lab"
        leftOffset = -60;
        topOffset = 260;
      }

      // Apply the calculated values
      title.style.setProperty("--title-left", `${leftOffset}px`);
      title.style.setProperty("--title-top", `${topOffset}px`);
    });
  },

  // Initialize all content
  init: () => {
    RENDER_FUNCTIONS.renderNavigation();
    RENDER_FUNCTIONS.renderFaculty();
    RENDER_FUNCTIONS.renderStudents();
    RENDER_FUNCTIONS.renderAlumni();
    RENDER_FUNCTIONS.renderResearch();
    RENDER_FUNCTIONS.renderNews("#about .news-list"); // Add this line
    RENDER_FUNCTIONS.renderRecentPublications();
    RENDER_FUNCTIONS.renderPublications();

    // Adjust rotated titles after content is rendered
    setTimeout(() => {
      RENDER_FUNCTIONS.adjustRotatedTitles();
    }, 100);

    // Ensure about section is active on initial load
    setTimeout(() => {
      if (!location.hash) {
        const aboutSection = document.getElementById("about");
        const aboutLink = document.querySelector('a[href="#about"]');

        if (aboutSection && !aboutSection.classList.contains("active")) {
          // Clear all active states
          document
            .querySelectorAll("main > section")
            .forEach((sec) => sec.classList.remove("active"));
          document
            .querySelectorAll("nav a, .mobile-menu a")
            .forEach((link) => link.classList.remove("active"));

          // Activate about
          aboutSection.classList.add("active");
          if (aboutLink) aboutLink.classList.add("active");
        }
      }
    }, 50);
  },
};

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  RENDER_FUNCTIONS.init();
});
