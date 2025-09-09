# Canvas Lab Website

A modern, responsive website for the Canvas Lab at Reichman University, showcasing team members, publications, and news.

## Table of Contents

- [Task list](#task-list) - Task list for the website
- [How To?](#how-to) - Content management guide
- [How It Works](#how-it-works) - Technical architecture for developers
- [File Structure](#file-structure) - Project organization
- [Content Management Tips](#content-management-tips) - Best practices
- [Troubleshooting](#troubleshooting) - Common issues and solutions

---

## Task list

- [ ] Add logo tooltip with backronym
- [ ] Fix mobile lighthouse score
- [ ] Add a google scholar field to people
- [ ] Add <meta> tags for better SEO
- [ ] Add a bit of transparency to the navbar?
- [ ] Make the 2025 update automatically.
- [ ] Make sure all the people and publications are there.
- [ ] Once stable, add to the google search index and let team link it from their personal webpages, project pages, github repos, etc.

---

## How To?

### Adding New Students

To add a new student to the website, edit the `scripts/data.js` file and add a new entry to the `students` array:

```javascript
// In scripts/data.js
students: [
  // ... existing students ...
  {
    name: "New Student Name",
    degree: "M.Sc.", // or "Ph.D."
    advisor: "Advisor Name",
    image: "images/people/student_photo.jpg", // or full URL for external image - can be from linkedin or other website
    description: "Brief description of research focus and interests.",
    website: "https://student-website.com", // optional
    linkedin: "https://linkedin.com/in/student-profile", // optional
  },
];
```

**Required fields:**

- `name`: Full name of the student
- `degree`: Academic degree (M.Sc, Ph.D, etc.)
- `advisor`: Name of the supervising faculty member
- `image`: Path to profile photo (local or external URL)
- `description`: Brief description of research interests

**Optional fields:**

- `website`: Personal or research website URL
- `linkedin`: LinkedIn profile URL

### Adding New Publications

To add a new publication, edit the `scripts/data.js` file and add a new entry to the `publications` array:

```javascript
// In scripts/data.js
publications: [
  // ... existing publications ...
  {
    title: "Your Publication Title",
    authors: ["Author 1", "Author 2", "Author 3"],
    conference: "Conference Name", // e.g., "CVPR", "SIGGRAPH"
    date: "DD-MM-YYYY", // format: DD-MM-YYYY
    image_link: "https://example.com/paper_image.jpg", // or local path
    paper_link: "https://arxiv.org/abs/paper_id", // paper URL
    project_link: "https://project-website.com", // optional project URL
    abstract: [
      "First paragraph of the abstract...",
      "Second paragraph if needed...",
    ],
  },
];
```

**Required fields:**

- `title`: Full publication title
- `authors`: Array of author names
- `conference`: Conference or journal name
- `date`: Publication date in DD-MM-YYYY format
- `image_link`: URL or path to paper image/teaser
- `paper_link`: Direct link to the paper (arXiv, DOI, etc.)
- `abstract`: Array of abstract paragraphs

**Optional fields:**

- `project_link`: Link to project website
- `github_link`: Link to code repository

### Adding News Items

To add news updates, edit the `scripts/data.js` file and add a new entry to the `news` array:

```javascript
// In scripts/data.js
news: [
  // ... existing news ...
  {
    title: "News Headline",
    date: "DD-MM-YYYY", // format: DD-MM-YYYY
    content: [
      "First paragraph of the news item...",
      "Second paragraph with more details...",
      "Additional information if needed...",
    ],
  },
];
```

**Required fields:**

- `title`: News headline
- `date`: News date in DD-MM-YYYY format
- `content`: Array of content paragraphs

### Adding Faculty Members

To add new faculty members, edit the `scripts/data.js` file and add a new entry to the `faculty` array:

```javascript
// In scripts/data.js
faculty: [
  // ... existing faculty ...
  {
    name: "Prof. Faculty Name",
    image: "images/people/faculty_photo.jpg",
    description: "Brief description of research focus and expertise.",
    website: "https://faculty-website.com", // optional
  },
];
```

**Required fields:**

- `name`: Full name with title (Prof., Dr., etc.)
- `image`: Path to profile photo
- `description`: Brief description of research interests

**Optional fields:**

- `website`: Personal or lab website URL

### Adding Alumni

To add alumni members, edit the `scripts/data.js` file and add a new entry to the `alumni` array:

```javascript
// In scripts/data.js
alumni: [
  // ... existing alumni ...
  {
    name: "Alumni Name",
    image: "images/people/alumni_photo.jpg", // or full URL
    advisor: "Advisor Name",
    degree: "M.Sc.", // or "Ph.D."
    year: "2024", // graduation year
    linkedin: "https://linkedin.com/in/alumni-profile", // optional
  },
];
```

**Required fields:**

- `name`: Full name of the alumni
- `image`: Path to profile photo
- `advisor`: Name of the supervising faculty member
- `degree`: Academic degree earned
- `year`: Graduation year

**Optional fields:**

- `linkedin`: LinkedIn profile URL

---

## How It Works

### Architecture Overview

This website uses a **static site architecture** with **client-side rendering** and **data-driven content management**. The design separates content from presentation, making it easy for non-developers to update information while maintaining a professional, responsive design.

### Core Components

#### 1. Data Layer (`scripts/data.js`)

- **Centralized content management**: All website content is stored in a single JavaScript object (`LAB_DATA`)
- **Structured data**: Content is organized into logical arrays (faculty, students, publications, news, alumni)
- **No database required**: Content is embedded directly in the JavaScript file
- **Easy updates**: Simply edit the data file and refresh the browser

#### 2. Rendering Engine (`scripts/render.js`)

- **Dynamic content generation**: JavaScript functions automatically generate HTML from data
- **Component-based rendering**: Each content type has its own rendering function
- **Automatic sorting**: Publications and news are automatically sorted by date
- **Responsive layouts**: Grid systems automatically adjust based on screen size

#### 3. Styling System

- **CSS Variables**: Centralized design tokens in `styles/variables.css`
- **Component-based CSS**: Styles organized by functionality in `styles/components.css`
- **Responsive design**: Mobile-first approach with progressive enhancement
- **Modern CSS features**: Grid, Flexbox, CSS custom properties, and animations

### Data Flow

```
User edits data.js → Browser loads page → render.js processes data → HTML generated → CSS styles applied → Page displayed
```

### Key JavaScript Functions

#### Content Rendering

- `renderFaculty()`: Renders faculty members with rotated titles
- `renderStudents()`: Creates student cards with profile information
- `renderAlumni()`: Generates alumni listings
- `renderPublications()`: Creates publication cards with metadata
- `renderNews()`: Generates news items with expandable content

#### Navigation & Interaction

- `renderNavigation()`: Builds navigation menu from data
- `handleTabSwitching()`: Manages tab-based content switching
- `handleNewsExpansion()`: Controls news item expand/collapse

#### Utility Functions

- `sortByDate()`: Sorts publications and news chronologically
- `adjustRotatedTitles()`: Positions rotated section titles dynamically

### CSS Architecture

#### Design System

- **Color palette**: Primary, secondary, and semantic colors defined as CSS variables
- **Typography scale**: Consistent font sizes and weights
- **Spacing system**: Standardized margins and padding using CSS variables
- **Breakpoints**: Mobile-first responsive design with clear breakpoints

#### Layout Patterns

- **CSS Grid**: Used for responsive card layouts (students, alumni, publications)
- **Flexbox**: Used for component-level layouts (cards, navigation)
- **Positioning**: Absolute positioning for rotated titles and overlays

#### Component Styling

- **Card components**: Consistent styling for people, publications, and news
- **Interactive elements**: Hover effects, transitions, and animations
- **Responsive images**: Optimized image handling across devices

## Content Management Tips

### Image Guidelines

- **Profile photos**: Use square images (recommended: 400x400px or larger)
- **Publication images**: Use 16:9 or 4:3 aspect ratios
- **File formats**: JPG for photos, PNG for graphics, SVG for logos
- **File sizes**: Optimize images for web (under 500KB when possible)

### Date Format

- Always use DD-MM-YYYY format (e.g., "15-01-2025")
- This ensures proper sorting and display

### Content Updates

1. Edit the appropriate array in `scripts/data.js`
2. Save the file
3. Refresh the website to see changes
4. No server-side processing required

### Adding New Sections

To add entirely new content sections:

1. Add data to the appropriate array in `data.js`
2. Update the HTML structure in `index.html` if needed
3. Add corresponding CSS styles in `styles/components.css`
4. Update rendering functions in `scripts/render.js`

---

## Troubleshooting

### Content Not Updating

- Ensure you're editing the correct file (`scripts/data.js`)
- Check for JavaScript syntax errors in the browser console
- Clear browser cache and refresh

### Images Not Displaying

- Verify image file paths are correct
- Check that image files exist in the specified directories
- Ensure image URLs are accessible

### Layout Issues

- Check browser console for CSS errors
- Verify all CSS files are properly linked
- Test on different screen sizes

### JavaScript Errors

- Open browser developer tools (F12)
- Check Console tab for error messages
- Verify all script files are loading correctly

---

## Contributing

1. Make content changes in `scripts/data.js`
2. Test changes across different devices and browsers
3. Ensure images are properly optimized
4. Follow the established naming conventions

## Support

For technical issues or questions about content management, please refer to this README or contact the development team.

---

**Last Updated**: August 2025  
**Version**: 1.0  
**Architecture**: Static site with client-side rendering  
**Dependencies**: None (vanilla HTML/CSS/JavaScript)
