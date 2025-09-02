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
      degree: "Ph.D Candidate.",
      advisor: "Ariel Shamir",
      image:
        "https://media.licdn.com/dms/image/v2/C5103AQFOujTwTRL0mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565009276598?e=1758758400&v=beta&t=Y8qkm0v9VVFwIhP9889kx9zVJ99L_ImyKuP1CWIlZo4",
      description: "I'm broadly interested in 3D Graphics, focusing on visual reasoning and 3D motion modeling and generation using Transformers",
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
      name: "Rotem Shalev-Arkushin",
      degree: "Ph.D.",
      advisor: "Ohad Fried & Amit Bermano",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGRDGv8EQBlqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1583644808028?e=1758758400&v=beta&t=X_iZQVWYkzL42lcO7J2-mJ9w31HFeIfncmbRnJ-ZH8s",
      description: "My main research topic is visual content synthesis, with a focus on low-resource challenges.\n" +
          "In particular, I am interested in Sign Language Production, image and video editing and generation.",
      website: "https://rotem-shalev.github.io/rotemshalevarkushin/",
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
    {
      name: "Raz Cohen",
      degree: "M.Sc.",
      advisor: "Ohad Fried",
      image: "images/people/raz_cohen.jpg",
      description: "My research focuses on text-to-image models, currently working on ways to improve attention to high-detail areas.",
      website: "",
      linkedin: "https://www.linkedin.com/in/raz-cohen-3a4251230/",
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
        "Express4D: Expressive, Friendly, and Extensible 4D Facial Motion Generation Benchmark",
      authors: ["Yaron Aloni", "Rotem Shalev-Arkushin", "Yonatan Shafir", "Guy Tevet", "Ohad Fried", "Amit H. Bermano"],
      conference: "DataCV @ ICCV",
      date: "01-01-2025", // format: DD-MM-YYYY
      image_link:
        "https://rotem-shalev.github.io/rotemshalevarkushin/assets/img/express4d.png",
      paper_link: "https://arxiv.org/abs/2508.12438",
      project_link:
        "https://jaron1990.github.io/Express4D",
      github_link:
        "https://github.com/jaron1990/Express4D/",
      abstract: [
        "Dynamic facial expression generation from natural language is a crucial task in Computer Graphics, with applications in Animation, Virtual Avatars, and Human-Computer Interaction. However, current generative models suffer from datasets that are either speech-driven or limited to coarse emotion labels, lacking the nuanced, expressive descriptions needed for fine-grained control, and were captured using elaborate and expensive equipment. We hence present a new dataset of facial motion sequences featuring nuanced performances and semantic annotation. The data is easily collected using commodity equipment and LLM-generated natural language instructions, in the popular ARKit blendshape format. This provides riggable motion, rich with expressive performances and labels. We accordingly train two baseline models, and evaluate their performance for future benchmarking. Using our Express4D dataset, the trained models can learn meaningful text-to-expression motion generation and capture the many-to-many mapping of the two modalities."
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
      title:
        "Towards AI-driven Sign Language Generation with Non-manual Markers",
      authors: ["Han Zhang", "Rotem Shalev-Arkushin", "Vasileios Baltatzis", "Connor Gillis", "Gierad Laput", "Raja Kushalnagar", "Lorna Quandt", "Leah Findlater", "Abdelkareem Bedri", "Colin Lea"],
      conference: "CHI (top 5%)",
      date: "01-01-2025", // format: DD-MM-YYYY
      image_link:
        "https://rotem-shalev.github.io/rotemshalevarkushin/assets/img/signMeUp.png",
      paper_link: "https://arxiv.org/abs/2502.05661",
      abstract: [
        "Sign languages are essential for the Deaf and Hard-of-Hearing (DHH) community. Sign language generation systems have the potential to support communication by translating from written languages, such as English, into signed videos. However, current systems often fail to meet user needs due to poor translation of grammatical structures, the absence of facial cues and body language, and insufficient visual and motion fidelity. We address these challenges by building on recent advances in LLMs and video generation models to translate English sentences into natural-looking AI ASL signers. The text component of our model extracts information for manual and non-manual components of ASL, which are used to synthesize skeletal pose sequences and corresponding video frames. Our findings from a user study with 30 DHH participants and thorough technical evaluations demonstrate significant progress and identify critical areas necessary to meet user needs."
      ],
    },
      {
      title:
        "V-LASIK: Consistent Glasses-Removal from Videos Using Synthetic Data",
      authors: ["Rotem Shalev-Arkushin", "Aharon Azulay", "Tavi Halperin", "Eitan Richardson", "Amit H. Bermano", "Ohad Fried"],
      conference: "SynthData @ ICLR",
      date: "01-01-2025", // format: DD-MM-YYYY
      image_link:
        "https://rotem-shalev.github.io/rotemshalevarkushin/assets/img/v-lasik.png",
      paper_link: "https://arxiv.org/abs/2406.14510",
      project_link:
        "https://v-lasik.github.io/",
      github_link:
        "https://github.com/v-lasik/v-lasik-code",
      abstract: [
        "Diffusion-based generative models have recently shown remarkable image and video editing capabilities. However, local video editing, particularly removal of small attributes like glasses, remains a challenge. Existing methods either alter the videos excessively, generate unrealistic artifacts, or fail to perform the requested edit consistently throughout the video. In this work, we focus on consistent and identity-preserving removal of glasses in videos, using it as a case study for consistent local attribute removal in videos. Due to the lack of paired data, we adopt a weakly supervised approach and generate synthetic imperfect data, using an adjusted pretrained diffusion model. We show that despite data imperfection, by learning from our generated data and leveraging the prior of pretrained diffusion models, our model is able to perform the desired edit consistently while preserving the original video content. Furthermore, we exemplify the generalization ability of our method to other local video editing tasks by applying it successfully to facial sticker-removal. Our approach demonstrates significant improvement over existing methods, showcasing the potential of leveraging synthetic data and strong video priors for local video editing tasks."
      ],
    },
      {
      title:
        "Monkey see, monkey do: Harnessing self-attention in motion diffusion for zero-shot motion transfer",
      authors: ["Sigal Raab", "Inbar Gat", "Nathan Sala", "Guy Tevet", "Rotem Shalev-Arkushin", "Ohad Fried", "Amit H. Bermano", "Daniel Cohen-Or"],
      conference: "SIGGRAPH Asia",
      date: "01-01-2024", // format: DD-MM-YYYY
      image_link:
        "https://rotem-shalev.github.io/rotemshalevarkushin/assets/img/momo.png",
      paper_link: "https://arxiv.org/abs/2406.06508",
      project_link:
        "https://monkeyseedocg.github.io/",
      github_link:
        "https://github.com/MonkeySeeDoCG/MoMo",
      abstract: [
        "Given the remarkable results of motion synthesis with diffusion models, a natural question arises: how can we effectively leverage these models for mo- tion editing? Existing diffusion-based motion editing methods overlook the profound potential of the prior embedded within the weights of pre-trained models, which enables manipulating the latent feature space; hence, they primarily center on handling the motion space. In this work, we explore the attention mechanism of pre-trained motion diffusion models. We uncover the roles and interactions of attention elements in capturing and representing intricate human motion patterns, and carefully integrate these elements to transfer a leader motion to a follower one while maintaining the nuanced characteristics of the follower, resulting in zero-shot motion transfer. Editing features associated with selected motions allows us to confront a challenge observed in prior motion diffusion approaches, which use general directives (e.g., text, music) for editing, ultimately failing to convey subtle nuances effectively. Our work is inspired by how a monkey closely imitates what it sees while maintaining its unique motion patterns; hence we call it Monkey see, Monkey Do, and dub it MoMo. Employing our technique enables accom- plishing tasks such as synthesizing out-of-distribution motions, style transfer, and spatial editing. Furthermore, diffusion inversion is seldom employed for motions; as a result, editing efforts focus on generated motions, limiting the editability of real ones. MoMo harnesses motion inversion, extending its application to both real and generated motions. Experimental results show the advantage of our approach over the current art. In particular, unlike methods tailored for specific applications through training, our approach is applied at inference time, requiring no training."
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
    },
    {
      title: "VCR: Video Representation for Contextual Retrieval",
      authors: ["Oron Nir", "Idan Vidra", "Avi Neeman", "Barak Kinarti", "Ariel Shamir"],
      conference: "CMLDS",
      date: "12-04-2024",
      image_link: "https://raw.githubusercontent.com/oronnir/VCR/refs/heads/main/ArchiveExplorer-04.png",
      paper_link: "https://arxiv.org/abs/2402.07466",
      project_link: "https://github.com/oronnir/VCR", // optional project URL
      abstract: [
        "Streamlining content discovery within media archives requires integrating advanced data representations and effective visualization techniques for clear communication of video topics to users. The proposed system addresses the challenge of efficiently navigating large video collections by exploiting a fusion of visual, audio, and textual features to accurately index and categorize video content through a text-based method. Additionally, semantic embeddings are employed to provide contextually relevant information and recommendations to users, resulting in an intuitive and engaging exploratory experience over our topics ontology map using OpenAI GPT-4."
      ],
    },
      {
      title:
        "Ham2Pose: Animating Sign Language Notation into Pose Sequences",
      authors: ["Rotem Shalev-Arkushin", "Amit Moryossef", "Ohad Fried"],
      conference: "CVPR",
      date: "01-01-2023", // format: DD-MM-YYYY
      image_link:
        "https://rotem-shalev.github.io/rotemshalevarkushin/assets/img/Ham2Pose.png",
      paper_link: "https://arxiv.org/abs/2211.13613",
      project_link:
        "https://rotem-shalev.github.io/ham-to-pose/",
      github_link:
        "https://github.com/rotem-shalev/Ham2Pose",
      abstract: [
        "Translating spoken languages into Sign languages is necessary for open communication between the hearing and hearing-impaired communities. To achieve this goal, we propose the first method for animating a text written in HamNoSys, a lexical Sign language notation, into signed pose sequences. As HamNoSys is universal by design, our proposed method offers a generic solution invariant to the target Sign language. Our method gradually generates pose predictions using transformer encoders that create meaningful representations of the text and poses while considering their spatial and temporal information. We use weak supervision for the training process and show that our method succeeds in learning from partial and inaccurate data. Additionally, we offer a new distance measurement that considers missing keypoints, to measure the distance between pose sequences using DTW-MJE. We validate its correctness using AUTSL, a large-scale Sign language dataset, show that it measures the distance between pose sequences more accurately than existing measurements, and use it to assess the quality of our generated pose sequences. Code for the data pre-processing, the model, and the distance measurement is publicly released for future research.",
      ],
    },
    {
      title: "CAST: Character labeling in Animation using Self-supervision by Tracking",
      authors: ["Oron Nir", "Gal Rapoport", "Ariel Shamir"],
      conference: "EuroGraphics",
      date: "25-04-2022",
      image_link: "https://github.com/oronnir/CAST/raw/master/figures/RL_flow.png",
      paper_link: "https://arxiv.org/abs/2201.07619",
      project_link: "https://github.com/oronnir/CAST", // optional project URL
      abstract: [
        "Cartoons and animation domain videos have very different characteristics compared to real-life images and videos. In addition, this domain carries a large variability in styles. Current computer vision and deep-learning solutions often fail on animated content because they were trained on natural images. In this paper we present a method to refine a semantic representation suitable for specific animated content.",
  	    "We first train a neural network on a large-scale set of animation videos and use the mapping to deep features as an embedding space. Next, we use self-supervision to refine the representation for any specific animation style by gathering many examples of animated characters in this style, using a multi-object tracking. These examples are used to define triplets for contrastive loss training. The refined semantic space allows better clustering of animated characters even when they have diverse manifestations. Using this space we can build dictionaries of characters in an animation videos, and define specialized classifiers for specific stylistic content (e.g., characters in a specific animation series) with very little user effort. These classifiers are the basis for automatically labeling characters in animation videos. We present results on a collection of characters in a variety of animation styles."
      ],
  },
  {
    title: "CityLifeSim: A High-Fidelity Pedestrian and Vehicle Simulation with Complex Behaviors",
    authors: ["Cheng Yao Wang", "Oron Nir", "Eyal Ofek", "Sai Vemprala", "Ashish Kapoor", "Daniel McDuff", "Mar Gonzalez-Franco"],
    conference: "ICIR",
    date: "14-12-2022",
    image_link: "https://github.com/CitylifeSim/CitylifeSim.github.io/blob/main/video.PNG?raw=true",
    paper_link: "https://ieeexplore.ieee.org/document/10070899",
    project_link: "https://citylifesim.github.io/", // optional project URL
    abstract: [
      "Simulations are a powerful tools particularly in the case of safety critical scenarios. However, simulating complex temporal events in multi-agent scenarios with vehicles and pedestrians, such as those that exist in urban environments, is challenging. We present CityLifeSim, a simulation for the research community that focuses on rich pedestrian behavior, such as the one that arises when different personalities, environmental events, and group goals are simulated. In our simulations we can see cases of people jay walking a red light, sitting on a bench, waiting for the bus, or calling on the phone, but also more complex creation and management of crowds that might even line up or just keep moving while observing interpersonal distances.",
	  "CityLifeSim is configurable and can create unlimited scenarios with detailed logging capabilities. As a demonstration we have run CityLifeSim to create a demo dataset for training setups that includes 17 different cameras, views from a moving vehicle in the street under different weather conditions (rain, snow, sun), and from a drone with frontal and downward views. All content is released with the corresponding original configuration files, ground truth pedestrian segmentation, and RGB-D frames. We evaluate our dataset on a pedestrian detection and identification task with state of the art Multi-Object Tracker (MOT), showing the limitations and opportunities for synthetic data in this use case."
    ],
  },
  {
    title: "Semantic Segmentation in Art Paintings",
    authors: ["Nadav Z. Cohen", "Yael Newman", "Ariel Shamir"],
    conference: "EuroGraphics",
    date: "25-04-2022",
    image_link: "https://nadavc220.github.io/ssiap/static/new_images/teaser.png",
    paper_link: "https://arxiv.org/abs/2203.03238",
    project_link: "https://nadavc220.github.io/ssiap/", // optional project URL
	github_link: "https://github.com/Nadavc220/SemanticSegmentationInArtPaintings",
    abstract: [
      " Semantic segmentation is a difficult task even when trained in a supervised manner on photographs. In this paper, we tackle the problem of semantic segmentation of artistic paintings, an even more challenging task because of a much larger diversity in colors, textures, and shapes and because there are no ground truth annotations available for segmentation. We propose an unsupervised method for semantic segmentation of paintings using domain adaptation. Our approach creates a training set of pseudo-paintings in specific artistic styles by using style-transfer on the PASCAL VOC 2012 dataset, and then applies domain confusion between PASCAL VOC 2012 and real paintings. These two steps build on a new dataset we gathered called DRAM (Diverse Realism in Art Movements) composed of figurative art paintings from four movements, which are highly diverse in pattern, color, and geometry. To segment new paintings, we present a composite multi-domain adaptation method that trains on each sub-domain separately and composes their solutions during inference time. Our method provides better segmentation results not only on the specific artistic movements of DRAM, but also on other, unseen ones. We compare our approach to alternative methods and show applications of semantic segmentation in art paintings"
    ],
  },
  ],
};
