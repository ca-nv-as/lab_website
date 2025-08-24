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
      name: "Gal Almog",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQG9fL_UrQKVuQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696250891607?e=1758758400&v=beta&t=YSZ0MAQuxpzubRZZ0jELEeUhtXrfnkKqeDr9iGy1XRU",
      advisor: "Ohad Fried",
      degree: "M.Sc",
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
      title:
        "Conditional Balance: Improving Multi-Conditioning Trade-Offs in Image Generation",
      authors: ["Nadav Cohen", "Oron Nir", "Ariel Shamir"],
      conference: "CVPR",
      date: "26-12-2025", // format: DD-MM-YYYY
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
      title:
        "Conditional Balance: Improving Multi-Conditioning Trade-Offs in Image Generation",
      authors: ["Nadav Cohen", "Oron Nir", "Ariel Shamir"],
      conference: "CVPR",
      date: "28-12-2025", // format: DD-MM-YYYY
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
      title:
        "Conditional Balance: Improving Multi-Conditioning Trade-Offs in Image Generation",
      authors: ["Nadav Cohen", "Oron Nir", "Ariel Shamir"],
      conference: "CVPR",
      date: "27-12-2025", // format: DD-MM-YYYY
      image_link:
        "https://nadavc220.github.io/conditional-balance.github.io/static/images/results_image_cond.png",
      paper_link: "https://arxiv.org/abs/2412.19853",
      project_link:
        "https://nadavc220.github.io/conditional-balance.github.io/",
      abstract: [
        "Balancing content fidelity and artistic style is a pivotal challenge in image generation. While traditional style transfer methods and modern Denoising Diffusion Probabilistic Models (DDPMs) strive to achieve this balance, they often struggle to do so without sacrificing either style, content, or sometimes both. This work addresses this challenge by analyzing the ability of DDPMs to maintain content and style equilibrium. We introduce a novel method to identify sensitivities within the DDPM attention layers, identifying specific layers that correspond to different stylistic aspects. By directing conditional inputs only to these sensitive layers, our approach enables fine-grained control over style and content, significantly reducing issues arising from over-constrained inputs. Our findings demonstrate that this method enhances recent stylization techniques by better aligning style and content, ultimately improving the quality of generated visual content.",
      ],
    },
  ],
};
