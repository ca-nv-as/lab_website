// Render functions to dynamically generate content
const RENDER_FUNCTIONS = {
  // Render navigation
  renderNavigation: () => {
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileNav = document.querySelector('.mobile-menu ul');
    
    if (desktopNav) {
      desktopNav.innerHTML = LAB_DATA.navigation.map(item => 
        `<li><a href="#${item.id}">${item.text}</a></li>`
      ).join('');
    }
    
    if (mobileNav) {
      mobileNav.innerHTML = LAB_DATA.navigation.map(item => 
        `<li><a href="#${item.id}">${item.text}</a></li>`
      ).join('');
    }
  },

  // Render faculty members with rotated title
  renderFaculty: () => {
    const container = document.querySelector('.leaders-container');
    if (!container) return;
    
    // Add rotated title if it doesn't exist
    const peopleSection = document.getElementById('people');
    if (peopleSection && !peopleSection.querySelector('.section-title-rotated')) {
      const rotatedTitle = document.createElement('h1');
      rotatedTitle.className = 'section-title-rotated';
      rotatedTitle.textContent = 'Faculty';
      peopleSection.insertBefore(rotatedTitle, peopleSection.firstChild);
    }
    
    container.innerHTML = LAB_DATA.faculty.map(member => `
      <div class="leader">
        <img src="${member.image}" alt="${member.name}" />
        <p>
          <strong>${member.name}</strong>
          ${member.website ? `
            <a href="${member.website}" target="_blank" class="faculty-website-link" title="Visit ${member.name}'s website">
              <svg viewBox="0 0 24 24" fill="currentColor" class="website-icon">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </a>
          ` : ''}
          <br />${member.description}
        </p>
      </div>
    `).join('');
  },

  // Render students
  renderStudents: () => {
    const container = document.getElementById('students-tab');
    if (!container) return;
    
    container.innerHTML = LAB_DATA.students.map(student => `
      <div class="student">
        <img src="${student.image}" alt="${student.name}" />
        <div class="student-info">
          <h3>${student.name} | ${student.degree} | Advisor: ${student.advisor}</h3>
          <p>${student.description}</p>
          <a href="${student.website}" target="_blank">Website</a>
          ${student.linkedin ? `<a href="${student.linkedin}" target="_blank">LinkedIn</a>` : ''}
        </div>
      </div>
    `).join('');
  },

  // Render alumni
  renderAlumni: () => {
    const container = document.getElementById('alumni-tab');
    if (!container) return;
    
    if (LAB_DATA.alumni.length === 0) {
      container.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
      return;
    }
    
    container.innerHTML = LAB_DATA.alumni.map(alumni => `
      <div class="alumni">
        <h3>${alumni.name} | ${alumni.degree} | ${alumni.year}</h3>
        <p>${alumni.description}</p>
        <p><strong>Current Position:</strong> ${alumni.currentPosition}</p>
      </div>
    `).join('');
  },

  // Render research areas
  renderResearch: () => {
    const container = document.querySelector('.research-gallery');
    if (!container) return;
    
    container.innerHTML = LAB_DATA.research.map(item => `
      <div class="research-item">
        <img src="${item.image}" alt="${item.title}" class="research-image" />
        <div class="research-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');
  },

  // Render news items
  renderNews: (containerSelector, newsData = null) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const itemsToRender = newsData || LAB_DATA.news;
    
    container.innerHTML = itemsToRender.map(item => `
      <li class="news-item" data-expandable="true">
        <div class="news-title">${item.title}</div>
        <div class="news-content">
          ${item.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
      </li>
    `).join('');
  },

  // Render publications
  renderPublications: () => {
    const container = document.querySelector('#publications .news-list');
    if (!container) return;
    
    container.innerHTML = LAB_DATA.publications.map(item => `
      <li class="news-item" data-expandable="true">
        <div class="news-title">${item.title}</div>
        <div class="news-content">
          ${item.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
      </li>
    `).join('');
  },

  // Adjust rotated title positioning based on text length
  adjustRotatedTitles: () => {
    const rotatedTitles = document.querySelectorAll('.section-title-rotated');
    
    rotatedTitles.forEach(title => {
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
      title.style.setProperty('--title-left', `${leftOffset}px`);
      title.style.setProperty('--title-top', `${topOffset}px`);
    });
  },

  // Initialize all content
  init: () => {
    RENDER_FUNCTIONS.renderNavigation();
    RENDER_FUNCTIONS.renderFaculty();
    RENDER_FUNCTIONS.renderStudents();
    RENDER_FUNCTIONS.renderAlumni();
    RENDER_FUNCTIONS.renderResearch();
    RENDER_FUNCTIONS.renderNews('#about .news-list'); // News in about section
    RENDER_FUNCTIONS.renderPublications(); // Publications in publications section
    
    // Adjust rotated titles after content is rendered
    setTimeout(() => {
      RENDER_FUNCTIONS.adjustRotatedTitles();
    }, 100);
    
    // Ensure about section is active on initial load
    setTimeout(() => {
      if (!location.hash) {
        const aboutSection = document.getElementById('about');
        const aboutLink = document.querySelector('a[href="#about"]');
        
        if (aboutSection && !aboutSection.classList.contains('active')) {
          // Clear all active states
          document.querySelectorAll('main > section').forEach(sec => sec.classList.remove('active'));
          document.querySelectorAll('nav a, .mobile-menu a').forEach(link => link.classList.remove('active'));
          
          // Activate about
          aboutSection.classList.add('active');
          if (aboutLink) aboutLink.classList.add('active');
        }
      }
    }, 50);
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  RENDER_FUNCTIONS.init();
}); 