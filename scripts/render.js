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

    container.innerHTML = LAB_DATA.faculty
      .map(
        (member) => `
      <div class="leader">
        <img src="${member.image}" alt="${member.name}" />
        <p>
          <strong class="faculty-name">${member.name}</strong>
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
    const container = document.querySelector(".students-container");
    if (!container) return;

    const sortedStudents = [...LAB_DATA.students].sort((a, b) => {
      // First sort by degree, using the custom order defined in customDegreeOrder
      const customDegreeOrder = ['Ph.D.', 'M.Sc.', 'Visiting'];

      let aIndex = customDegreeOrder.indexOf(a.degree);
      let bIndex = customDegreeOrder.indexOf(b.degree);

      // Items not in the customOrder will be last
      if (aIndex === -1) {aIndex = customDegreeOrder.length}
      if (bIndex === -1) {bIndex = customDegreeOrder.length}

      const degreeComparison = aIndex - bIndex; // Sort based on the index in customOrder

      if (degreeComparison !== 0) {
        return degreeComparison; // If degrees are different, we use that to sort
      }

      // Otherwise, we use the last name to sort
      const aLastName = a.name.split(" ").pop();
      const bLastName = b.name.split(" ").pop();
      return aLastName.localeCompare(bLastName);
    });

    container.innerHTML = sortedStudents
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
    const container = document.querySelector(".alumni-container");
    if (!container) return;

    if (LAB_DATA.alumni.length === 0) {
      container.innerHTML =
        "<p class='no-alumni-message'>No alumni information available at the moment.</p>";
      return;
    }

    // Sort alumni by year in descending order (most recent first), and by last name
    const sortedAlumni = [...LAB_DATA.alumni].sort((a, b) => {
      const yearComparison = parseInt(b.year) - parseInt(a.year);

      if (yearComparison !== 0) {
        return yearComparison; // If years are different, we use that to sort
      }

      // Otherwise, we use the last name to sort
      const aLastName = a.name.split(" ").pop();
      const bLastName = b.name.split(" ").pop();
      return aLastName.localeCompare(bLastName);
    });

    container.innerHTML = sortedAlumni
      .map(
        (alumni) => `
      <div class="alumni">
        <img src="${alumni.image}" alt="${alumni.name}" class="alumni-image" />
        <div class="alumni-info">
          <div class="alumni-header">
            <h3 class="alumni-name">${alumni.name}</h3>
            <div class="alumni-links">
              ${
                alumni.linkedin
                  ? `
                <a href="${alumni.linkedin}" target="_blank" class="alumni-linkedin-link" title="Visit ${alumni.name}'s LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="linkedin-icon">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              `
                  : ""
              }
            </div>
          </div>
          <div class="alumni-details">
            <h4 class="alumni-degree">${alumni.degree}</h4>
            <p class="alumni-advisor">Advised by ${alumni.advisor}</p>
            <p class="alumni-year">Graduated: ${alumni.year}</p>
          </div>
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

    // Get latest 5 publications instead of 3
    const recentPublications = [...LAB_DATA.publications]
      .sort((a, b) => {
        const dateA = new Date(a.date.split("-").reverse().join("-"));
        const dateB = new Date(b.date.split("-").reverse().join("-"));
        return dateB - dateA;
      })
      .slice(0, 5); // Changed from 3 to 5

    // Update the template inside renderRecentPublications
    container.innerHTML = recentPublications
      .map(
        (pub) => `
    <li class="recent-publication-item">
        <div class="recent-publication-image">
            <img src="${pub.image_link}" alt="${pub.title}" />
        </div>
        <div class="recent-publication-details">
            <h3 class="recent-publication-title">
                ${pub.title}
            </h3>
            <div class="recent-authors">
                ${pub.authors.join(", ")}
            </div>
            <div class="recent-meta-row">
                <span class="publication-conference">${pub.conference}</span>
                <span class="publication-year">${pub.date.split("-")[2]}</span>
                <div class="publication-links">
                    ${pub.paper_link ? `<a href="${pub.paper_link}" target="_blank" class="publication-link arxiv-link" title="View on arXiv">
                        <img src="images/icons/arxiv-logomark-small.svg" alt="arXiv" />
                    </a>` : ""}
                    ${pub.project_link ? `<a href="${pub.project_link}" target="_blank" class="publication-link project-link" title="View Project">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                    </a>` : ""}
                    ${pub.github_link ? `<a href="${pub.github_link}" target="_blank" class="publication-link github-link" title="View on GitHub">
                        <img src="images/icons/github.png" alt="GitHub" />
                    </a>` : ""}
                </div>
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
            <div class="publication-authors">${publication.authors.join(", ")}</div>
            <div class="publication-meta-row">
              <span class="publication-conference">${publication.conference}</span>
              <span class="publication-year">${publication.date.split("-")[2]}</span>
              <div class="publication-links">
                ${
                  publication.paper_link
                    ? `<a href="${publication.paper_link}" target="_blank" class="publication-link arxiv-link" title="View on arXiv">
                        <img src="images/icons/arxiv-logomark-small.svg" alt="arXiv"/>
                       </a>`
                    : ""
                }
                ${
                  publication.project_link
                    ? `<a href="${publication.project_link}" target="_blank" class="publication-link project-link" title="View Project">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                       </a>`
                    : ""
                }
                ${
                  publication.github_link
                    ? `<a href="${publication.github_link}" target="_blank" class="publication-link github-link" title="View on GitHub">
                        <img src="images/icons/github.png" alt="GitHub"/>
                       </a>`
                    : ""
                }
              </div>
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
