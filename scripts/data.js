// Data configuration for easy content management
const LAB_DATA = {
  // Lab information
  labName: "Canvas Lab",
  labDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  // Navigation structure
  navigation: [
    { id: "about", text: "About" },
    { id: "people", text: "People" },
    { id: "publications", text: "Publications" },
  ],

  // Faculty members
  faculty: [
    {
      name: "Prof. Ariel Shamir",
      image: "images/people/ariel_shamir.jpg",
      description:
        "Focuses on research in computational photography, image and video synthesis, and machine creativity.",
      website: "https://faculty.runi.ac.il/arik/site/index.asp",
    },
    {
      name: "Prof. Ohad Fried",
      image: "images/people/ohad_fried.jpg",
      description:
        "Specializing in computer graphics, computer vision, and generative AI. His research focuses on creating intuitive, AI-driven tools for visual media editing and synthesis.",
      website: "https://www.ohadf.com/",
    },
    {
      name: "Prof. Yacov Hel-Or",
      image: "images/people/toky.jpg",
      description:
        "Dean of the Efi Arazi School of Computer Science at Reichman University, where he leads research in computer vision, image processing and deep learning.",
      website: "https://example.com/sarah",
    },
  ],

  // Students
  students: [
    {
      name: "Nadav Z. Cohen",
      degree: "Ph.D.",
      advisor: "Ariel Shamir",
      image: "images/people/nadav_cohen.jpg",
      description:
        "Specializing in generative models for 2D and 3D content creation, with a strong passion for artistic applications. My research focuses on developing tools that empower creatives to harness the potential of generative models while preserving their unique artistic voice and personal expression.",
      website: "https://nadavc220.github.io/",
      linkedin: "https://linkedin.com/in/nadavc220",
    },
    {
      name: "Hagar Dolev",
      degree: "M.Sc.",
      advisor: "Ohad Fried",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQEHpdspA808ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591189329440?e=1756339200&v=beta&t=5vdVPzQ0itIrfxBirbaIbnleXPatSfPp0etRfSIeM0Y",
      description:
        "Focusing on Video editing and composition, and video retrival. Graduated from Bezalel - school for the design and arts.",
      website: "https://hagardolev.com",
      linkedin: "https://www.linkedin.com/in/hagardolev/",
    },
    {
      name: "Ofir Abramovich",
      degree: "Ph.D.",
      advisor: "Ariel Shamir",
      image:
        "https://media.licdn.com/dms/image/v2/C5103AQFOujTwTRL0mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565009276598?e=1758758400&v=beta&t=Y8qkm0v9VVFwIhP9889kx9zVJ99L_ImyKuP1CWIlZo4",
      description: "OPHIR please add!",
      linkedin: "https://www.linkedin.com/in/ofir-abramovich-063804168/",
    },
    {
      name: "Omri Avrahami",
      degree: "Ph.D.",
      advisor: "Ohad Fried & Dani Lischinski",
      image: "https://omriavrahami.com/static/images/profile.jpg",
      description: "",
      website: "https://omriavrahami.com/",
      linkedin: "https://www.linkedin.com/in/omri-avrahami/",
    },
    {
      name: "Rotem Shalev",
      degree: "M.Sc., Ph.D.",
      advisor: "Ohad Fried & Amit Bermano",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGRDGv8EQBlqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1583644808028?e=1758758400&v=beta&t=X_iZQVWYkzL42lcO7J2-mJ9w31HFeIfncmbRnJ-ZH8s",
      description: "",
      website: "",
      linkedin: "https://www.linkedin.com/in/rotem-shalev/",
    },
    {
      name: "Oron Nir",
      degree: "Ph.D.",
      advisor: "Ariel Shamir",
      image: "images/people/oron.jpg",
      description: "My PhD research advances semantic video analytics, spanning tasks such as animated character recognition, video retrieval, synthesis, and multi-object tracking with re-identification. At its core, I explore how vision–language models can unlock richer, more meaningful understanding of video across domains.",
      website: "https://scholar.google.com/citations?user=f4v5HMgAAAAJ&hl=en", // optional
      linkedin: "https://www.linkedin.com/in/oronnir/", 
    },
  ],
  // Alumni
  alumni: [
    {
      name: "Gal Almog",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQG9fL_UrQKVuQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696250891607?e=1758758400&v=beta&t=YSZ0MAQuxpzubRZZ0jELEeUhtXrfnkKqeDr9iGy1XRU",
      advisor: "Ohad Fried",
      degree: "M.Sc.",
      year: "2024",
      linkedin: "https://www.linkedin.com/in/galalmog/",
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
      title: "We have a new website!",
      date: "24-08-2025",
      content: ["We have a new website! Check it out in the about section."],
    },
    {
      title: "We have a new Logo!",
      date: "24-08-2025",
      content: ["We have a new Logo! Check it out in the about section."],
    },
  ],

  // Publications
  publications: [
    {
      title:
        "Conditional Balance: Improving Multi-Conditioning Trade-Offs in Image Generation",
      authors: ["Nadav Cohen", "Oron Nir", "Ariel Shamir"],
      conference: "CVPR",
      date: "25-12-2025", // format: DD-MM-YYYY
      image_link:
        "https://nadavc220.github.io/conditional-balance.github.io/static/images/results_image_cond.png",
      paper_link: "https://arxiv.org/abs/2412.19853",
      project_link:
        "https://nadavc220.github.io/conditional-balance.github.io/",
      abstract: [
        "Balancing content fidelity and artistic style is a pivotal challenge in image generation. While traditional style transfer methods and modern Denoising Diffusion Probabilistic Models (DDPMs) strive to achieve this balance, they often struggle to do so without sacrificing either style, content, or sometimes both. This work addresses this challenge by analyzing the ability of DDPMs to maintain content and style equilibrium. We introduce a novel method to identify sensitivities within the DDPM attention layers, identifying specific layers that correspond to different stylistic aspects. By directing conditional inputs only to these sensitive layers, our approach enables fine-grained control over style and content, significantly reducing issues arising from over-constrained inputs. Our findings demonstrate that this method enhances recent stylization techniques by better aligning style and content, ultimately improving the quality of generated visual content.",
      ],
    },
    {
    title: "Unimodal Strategies in Density-Based Clustering",
    authors: ["Oron Nir", "Jay Tenenbaum", "Ariel Shamir"],
    conference: "ECML-PKDD",
    date: "15-09-2025",
    image_link: "https://github.com/oronnir/UnimodalStrategies/blob/main/ESC-50/LFW.png?raw=true",
    paper_link: "https://arxiv.org/abs/2506.21695",
    project_link: "https://github.com/oronnir/UnimodalStrategies",
    abstract: [
      "Density-based clustering methods often surpass centroid-based counterparts, when addressing data with noise or arbitrary data distributions common in real-world problems. In this study, we reveal a key property intrinsic to density-based clustering methods regarding the relation between the number of clusters and the neighborhood radius of core points - we empirically show that it is nearly unimodal, and support this claim theoretically in a specific setting.",
      "We leverage this property to devise new strategies for finding appropriate values for the radius more efficiently based on the Ternary Search algorithm. This is especially important for large scale data that is high-dimensional, where parameter tuning is computationally intensive. We validate our methodology through extensive applications across a range of high-dimensional, large-scale NLP, Audio, and Computer Vision tasks, demonstrating its practical effectiveness and robustness. This work not only offers a significant advancement in parameter control for density-based clustering but also broadens the understanding regarding the relations between their guiding parameters.",
    ],
  },
  ],
};
