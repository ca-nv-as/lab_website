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
        "https://media.licdn.com/dms/image/v2/C5603AQEHpdspA808ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591189329440?e=1759363200&v=beta&t=WPyd1WM8dRhBXOd7InQcOw8BmQaUEIBx2JTRAxwQN04",
      description:
        "Focusing on Video editing and composition, and video retrival. Graduated from Bezalel - school for the design and arts.",
      website: "https://hagardolev.com",
      linkedin: "https://www.linkedin.com/in/hagardolev/",
    },
    {
      name: "Ofek Basson",
      degree: "M.Sc.",
      advisor: "Yacov Hel-Or & Ohad Fried",
      image: "images/people/ofek_basson.jpg",
      description: "My research lies at the intersection of image generation and 3D understanding, focusing on improving how generative models capture and synthesize the structure of visual scenes.",
      website: "https://github.com/OfekBasson",
      linkedin: "https://www.linkedin.com/in/ofek-basson/",
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
    {
      name: "Shimon Malnick",
      degree: "Ph.D.",
      advisor: "Ohad Fried & Shai Avidan",
      image: "https://www.malnick.net/assets/img/profile_image.jpeg",
      description: "I work on image generation models, with a focus on tasks in privacy-preserving learning and model inversion. At its core, my research examines how generative systems encode and reconstruct visual information, both to uncover their capabilities and to mitigate their risks.",
      website: "https://www.malnick.net/",
      linkedin: "https://www.linkedin.com/in/shimonmalnick/",
    },
    {
      name: "Idan Dov Vidra",
      degree: "M.Sc.",
      advisor: "Ariel Shamir",
      image: "images/people/idan_vidra.jpg",
      description: "My research is on AI and human collaboration and co-creativity.",
      website: "https://scholar.google.com/citations?user=ApJun1YAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/idan-vidra-a7b742180/",
    },
    {
      name: "Rotem Gatenyo",
      degree: "M.Sc.",
      advisor: "Ohad Fried",
      image: "images/people/rotem_gatenyo.jpg",
      description: "My research focuses on generative 3D graphics, with an emphasis on creating and manipulating 3D meshes and textured shapes.",
      website: "https://scholar.google.com/citations?user=MCSaL64AAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/rotem-g8",
    },    
    {
      name: "Adi Rosenthal",
      degree: "M.Sc.",
      advisor: "Ariel Shamir & Doron Friedman",
      image: "images/people/adirosenthal.jpg",
      description: "I work on co-speech gesture synthesis and semantic motion editing. Using audio and text cues, I generate and control gestures that are natural, personalized, and aligned with meaning.",
      website: "https://github.com/Adirosenthal540",
      linkedin: "https://www.linkedin.com/in/adi-rosenthal-24a3291aa/",
    },
    {
      name: "Ben Vardi",
      degree: "Ph.D.",
      advisor: "Ariel Shamir",
      image: "images/people/ben_vardi.jpg",
      description: "My research focuses on the robustness of models combining vision and language. I explore efficient interventions to strengthen robustness in tasks such as text-to-image and image-to-text generation, as well as in pathology applications.",
      website: "",
      linkedin: "https://www.linkedin.com/in/ben-vardi-760432108/",
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
    {
      name: "Or Madar",
      image:
        "images/people/or_madar.jpg",
      advisor: "Ohad Fried",
      degree: "M.Sc.",
      year: "2025",
      linkedin: "https://www.linkedin.com/in/or-madar-a73bb5143/",
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
      authors: ["Nadav Z. Cohen", "Oron Nir", "Ariel Shamir"],
      conference: "CVPR",
      date: "13-06-2025", // format: DD-MM-YYYY
      image_link:
        "https://nadavc220.github.io/conditional-balance.github.io/static/images/results_image_cond.png",
      paper_link: "https://arxiv.org/abs/2412.19853",
      project_link:
        "https://nadavc220.github.io/conditional-balance.github.io/",
      github_link:
        "https://github.com/Nadavc220/conditional-balance",
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
    github_link: "https://github.com/oronnir/UnimodalStrategies",
    abstract: [
      "Density-based clustering methods often surpass centroid-based counterparts, when addressing data with noise or arbitrary data distributions common in real-world problems. In this study, we reveal a key property intrinsic to density-based clustering methods regarding the relation between the number of clusters and the neighborhood radius of core points - we empirically show that it is nearly unimodal, and support this claim theoretically in a specific setting.",
      "We leverage this property to devise new strategies for finding appropriate values for the radius more efficiently based on the Ternary Search algorithm. This is especially important for large scale data that is high-dimensional, where parameter tuning is computationally intensive. We validate our methodology through extensive applications across a range of high-dimensional, large-scale NLP, Audio, and Computer Vision tasks, demonstrating its practical effectiveness and robustness. This work not only offers a significant advancement in parameter control for density-based clustering but also broadens the understanding regarding the relations between their guiding parameters.",
    ],
  },
    {
      title:
          "Memories of Forgotten Concepts",
      authors: ["Matan Rusanovsky", "Shimon Malnick", "Amir Jevnisek", "Ohad Fried", "Shai Avidan"],
      conference: "CVPR",
      date: "13-06-2025", // format: DD-MM-YYYY
      image_link:
          "https://www.malnick.net/assets/img/publication_preview/memories_forgotten_concepts/sphere.png",
      paper_link: "https://arxiv.org/abs/2412.00782",
      project_link:
          "https://matanr.github.io/Memories_of_Forgotten_Concepts/",
      github_link:
          "https://github.com/matanr/Memories_of_Forgotten_Concepts/",
      abstract: [
        "Diffusion models dominate the space of text-to-image generation, yet they may produce undesirable outputs, including explicit content or private data. To mitigate this, concept ablation techniques have been explored to limit the generation of certain concepts. In this paper, we reveal that the erased concept information persists in the model and that erased concept images can be generated using the right latent. Utilizing inversion methods, we show that there exist latent seeds capable of generating high quality images of erased concepts. Moreover, we show that these latents have likelihoods that overlap with those of images outside the erased concept. We extend this to demonstrate that for every image from the erased concept set, we can generate many seeds that generate the erased concept. Given the vast space of latents capable of generating ablated concept images, our results suggest that fully erasing concept information may be intractable, highlighting possible vulnerabilities in current concept ablation techniques.",
      ],
    },
    {
      title: "Taming Normalizing Flows",
      authors: ["Shimon Malnick", "Shai Avidan", "Ohad Fried"],
      conference: "WACV",
      date: "01-01-2024", // format: DD-MM-YYYY
      image_link:
          "https://www.malnick.net/assets/img/publication_preview/taming_flows/taming.png",
      paper_link: "https://arxiv.org/abs/2211.16488",
      project_link:
          "https://www.malnick.net/taming_norm_flows",
      github_link:
          "https://github.com/ShimonMalnick/taming_norm_flows",
      abstract: [
        "We propose an algorithm for taming Normalizing Flow models - changing the probability that the model will produce a specific image or image category. We focus on Normalizing Flows because they can calculate the exact generation probability likelihood for a given image. We demonstrate taming using models that generate human faces, a subdomain with many interesting privacy and bias considerations. Our method can be used in the context of privacy, e.g., removing a specific person from the output of a model, and also in the context of debiasing by forcing a model to output specific image categories according to a given target distribution. Taming is achieved with a fast fine-tuning process without retraining the model from scratch, achieving the goal in a matter of minutes. We evaluate our method qualitatively and quantitatively, showing that the generation quality remains intact, while the desired changes are applied.",
      ],
    },
    {
      title: "Playing Along - Building AI Agents for Co-Creation of Improvised Stories",
      authors: ["Idan Dov Vidra", "Gal Kimron", "Lior Noy", "Ariel Shamir"],
      conference: "ICCC",
      date: "23-06-2025", // format: DD-MM-YYYY
      image_link:
          "images/teasers/yes_and_paper_teaser.png",
      paper_link: "https://idanvidra.github.io/playing_along_paper_site/papers/Playing%20Along%20-%20Building%20AI%20Agents%20for%20Co-Creation%20of%20Improvised%20Stories%20-%20Paper.pdf",
      project_link:
          "https://idanvidra.github.io/playing_along_paper_site/",
      github_link:
          "https://github.com/idanvidra/Yes-And-Game-Paper",
      abstract: [
        "This work focuses on human-agent co-creation of improvised stories, investigating whether Large Language Models can effectively engage in an improvisational practice known as the 'Yes! and…' game. We demonstrate how AI systems can participate successfully in improvisational co-creation, moving beyond response generation to collaborative story-telling. We provide a systematic framework for evaluating creative AI outputs in improvisational contexts, combining human evaluation with computational metrics. Our evaluations show that stories co-created with an AI agent are indistinguishable from stories co-created with a human in terms of novelty, value, and surprise. This shows how 'hallucinations' - typically considered problematic in AI systems - can serve as creative assets in collaborative storytelling. More generally, our approach presents the 'Yes! and…' game as a novel model-system for studying improvised co-creativity in a well-defined and measurable setup"
      ],
    },
    {
      title:
          "Tiled Diffusion",
      authors: ["Or Madar", "Ohad Fried"],
      conference: "CVPR",
      date: "13-06-2025", // format: DD-MM-YYYY
      image_link:
          "https://madaror.github.io/tiled-diffusion.github.io/images/optimized/teaser.webp",
      paper_link: "https://arxiv.org/abs/2412.15185",
      project_link:
          "https://madaror.github.io/tiled-diffusion.github.io/",
      github_link:
          "https://github.com/madaror/tiled-diffusion",
      abstract: [
        "Image tiling—the seamless connection of disparate images to create a coherent visual field—is crucial for applications such as texture creation, video game asset development, and digital art. Traditionally, tiles have been constructed manually, a method that poses significant limitations in scalability and flexibility. Recent research has attempted to automate this process using generative models. However, current approaches primarily focus on tiling textures and manipulating models for single-image generation, without inherently supporting the creation of multiple interconnected tiles across diverse domains. This paper presents Tiled Diffusion, a novel approach that extends the capabilities of diffusion models to accommodate the generation of cohesive tiling patterns across various domains of image synthesis that require tiling. Our method supports a wide range of tiling scenarios, from self-tiling to complex many-to-many connections, enabling seamless integration of multiple images. Tiled Diffusion automates the tiling process, eliminating the need for manual intervention and enhancing creative possibilities in various applications, such as seamlessly tiling of existing images, tiled texture creation, and 360° synthesis.",
      ],
    }
  ],
};
