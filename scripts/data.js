// Data configuration for easy content management
const LAB_DATA = {
  // Lab information
  labName: "Canvas Lab",
  labDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  // Navigation structure
  navigation: [
    { id: "about", text: "About" },
    { id: "research", text: "Research" },
    { id: "people", text: "People" },
    { id: "publications", text: "Publications" },
    { id: "join", text: "Join Us" },
  ],

  // Faculty members
  faculty: [
    {
      name: "Prof. Ariel Shamir",
      image: "images/people/ariel_shamir.jpg",
      description:
        "Prof. Ariel Shamir's research focuses on computational photography, image and video synthesis, and machine creativity.",
      website: "https://faculty.runi.ac.il/arik/site/index.asp",
    },
    {
      name: "Prof. Ohad Fried",
      image: "images/people/ohad_fried.jpg",
      description:
        "Prof. Ohad Fried is a computer scientist specializing in computer graphics, computer vision, and generative AI. His research focuses on creating intuitive, AI-driven tools for visual media editing and synthesis.",
      website: "https://www.ohadf.com/",
    },
    {
      name: "Prof. Yacov Hel-Or",
      image: "images/people/toky.jpg",
      description:
        "Prof. Yacov Hel‑Or is Dean of the Efi Arazi School of Computer Science at Reichman University, where he leads research in computer vision, image processing and deep learning.",
      website: "https://example.com/sarah",
    },
  ],

  // Students
  students: [
    {
      name: "Nadav Z. Cohen",
      degree: "Ph.D",
      advisor: "Ariel Shamir",
      image: "images/people/nadav_cohen.jpg",
      description:
        "Specializing in generative models for 2D and 3D content creation, with a strong passion for artistic applications. My research focuses on developing tools that empower creatives to harness the potential of generative models while preserving their unique artistic voice and personal expression.",
      website: "https://nadavc220.github.io/",
      linkedin: "https://linkedin.com/in/nadavc220",
    },
    {
      name: "Hagar Dolev Refaeli",
      degree: "M.Sc",
      advisor: "Ohad Fried",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQEHpdspA808ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591189329440?e=1756339200&v=beta&t=5vdVPzQ0itIrfxBirbaIbnleXPatSfPp0etRfSIeM0Y",
      description: "Focusing on Video editing and composition.",
      website: "https://hagardolev.com",
      linkedin: "https://www.linkedin.com/in/hagardolev/",
    },
  ],

  // Alumni
  alumni: [
    {
      name: "Former Student",
      degree: "Ph.D",
      year: "2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      currentPosition: "Research Scientist at Tech Company",
    },
  ],

  // Research areas
  research: [
    {
      title: "Lorem Ipsum Dolor Sit",
      image: "images/showcase/generative_art.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Consectetur Adipiscing Elit",
      image: "images/showcase/multimodal_ai.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Sed Do Eiusmod Tempor",
      image: "images/showcase/3d_graphics.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Incididunt Ut Labore",
      image: "images/showcase/computational_photography.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Et Dolore Magna Aliqua",
      image: "images/showcase/neural_rendering.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Ut Enim Ad Minim",
      image: "images/showcase/creative_tools.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],

  // News items
  news: [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Sed do eiusmod tempor incididunt ut labore",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ],

  // Publications
  publications: [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Sed do eiusmod tempor incididunt ut labore et dolore",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ],
};
