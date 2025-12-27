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
        "Focuses on research in computer graphics, image and video processing and synthesis, and machine learning.",
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
      image: "images/people/hagar_dolev.jpg",
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
      image: "images/people/ofir_abremovich.jpeg",
      description: "I'm broadly interested in 3D Graphics, focusing on visual reasoning and 3D motion modeling and generation using Transformers",
      linkedin: "https://www.linkedin.com/in/ofir-abramovich-063804168/",
    },
    {
      name: "Rotem Shalev-Arkushin",
      degree: "Ph.D.",
      advisor: "Ohad Fried & Amit Bermano",
      image: "images/people/rotem_shalev.jpeg",
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
	{
      name: "Almog Friedlander",
      degree: "M.Sc.",
      advisor: "Ohad Fried & Ariel Shamir",
      image: "images/people/almog_fridlander.jpeg", 
      description: "Focuses on 3D change detection and generative models.",
      website: "",
      linkedin: "https://www.linkedin.com/in/mogy/",
    },
	{
      name: "Dan Botchan",
      degree: "M.Sc.",
      advisor: "Yacov Hel-Or & Ohad Fried",
      image: "images/people/dan_botchan.jpeg",
      description: "My research focuses on image demixing, where I use text-to-image diffusion models as semantic and natural image priors to separate mixed images, much like how humans instinctively know which features don't belong together when looking at complex visual scenes.",
      website: "",
      linkedin: "https://www.linkedin.com/in/dan-botchan-b7a184141/",
    },
      {
          name: "Nadav Benedek",
          degree: "Ph.D.",
          advisor: "Ohad Fried",
          image: "images/people/Nadav_Benedek.png",
          description: "My research focuses on NLP/LLMs, images, videos and RL.",
          website: "https://nadavb.com",
          linkedin: "https://www.linkedin.com/in/nadavbenedek/",
      },
  ],
  // Alumni
  alumni: [
    {
      name: "Omri Avrahami",
      image: "https://omriavrahami.com/static/images/profile.jpg",
      advisor: "Ohad Fried & Dani Lischinski",
      degree: "Ph.D.",
      year: "2025",
      linkedin: "https://www.linkedin.com/in/omri-avrahami/",
      // website: "https://omriavrahami.com/",
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
    {
      name: "Gal Almog",
      image: "images/people/gal_almog.jpeg",
      advisor: "Ohad Fried",
      degree: "M.Sc.",
      year: "2024",
      linkedin: "https://www.linkedin.com/in/galalmog/",
    },
	{
      name: "Yarin Moshe",
      image: "images/people/yarin_moshe.jpeg",
      advisor: "Ariel Shamir & Yael Moses",
      degree: "M.Sc.",
      year: "2025",
      linkedin: "https://www.linkedin.com/in/yarinmoshe/",
    },
    {
      name: "Eran Levin",
      image:
        "images/people/eran_levin.jpeg",
      advisor: "Ohad Fried & Amir Averbuch",
      degree: "M.Sc. (Tel Aviv U.)",
      year: "2023",
      linkedin: "https://www.linkedin.com/in/eran-levin-4733527b/",
    },
    {
      name: "Or Nachmias",
      image:
        "images/people/or_nachmias.jpeg",
      advisor: "Ohad Fried & Ariel Shamir",
      degree: "M.Sc.",
      year: "2023",
      linkedin: "https://www.linkedin.com/in/or-nachmias-8b8010124/",
    },
    {
      name: "Dudi Dadon",
      image:
        "images/people/dudi_dadon.jpeg",
      advisor: "Ohad Fried & Yacov Hel-Or",
      degree: "M.Sc.",
      year: "2022",
      linkedin: "https://www.linkedin.com/in/dudi-dadon-48a72b193/",
    },
    {
      name: "Asaf Karnieli",
      image:
        "images/people/asaf_karnieli.jpeg",
      advisor: "Ohad Fried & Yacov Hel-Or",
      degree: "M.Sc.",
      year: "2022",
      linkedin: "https://www.linkedin.com/in/karnieli/",
    },
    {
      name: "Gili Knafo",
      image:
        "images/people/gili_knafo.jpeg",
      advisor: "Ohad Fried",
      degree: "M.Sc.",
      year: "2022",
      linkedin: "https://www.linkedin.com/in/gili-knafo-1b591b240/",
    },
	{
      name: "Yael Vinker",
      image:"images/people/yael_vinker.jpeg",
      advisor: "Ariel Shamir & Daniel Cohen-Or",
      degree: "Ph.D. (Tel Aviv U.)",
      year: "2025",
      linkedin: "https://www.linkedin.com/in/yael-vinker-a91a00157/",
    },
    {
      name: "Moab Arar",
      image:"images/people/moab_arar.jpeg",
      advisor: "Ariel Shamir & Amit Bermano",
      degree: "Ph.D. (Tel Aviv U.)",
      year: "2025",
      linkedin: "https://www.linkedin.com/in/moab-arar-36597196/",
    },
  ],


  // News items
  news: [
    {
      title: "We have a new Logo!",
      date: "24-08-2025",
      content: ["We have a new Logo! Check it out above."],
    },
  ],

  // Publications
  publications: [
    {
      title: "Stable Flow: Vital Layers for Training-Free Image Editing",
      authors: ["Omri Avrahami", "Or Patashnik", "Ohad Fried", "Egor Nemchinov", "Kfir Aberman", "Dani Lischinski", "Daniel Cohen-Or"],
      conference: "CVPR",
      date: "13-06-2025", // format: DD-MM-YYYY
      image_link: "images/papers/stable-flow/stable-flow-1920.avif",
      paper_link: "https://arxiv.org/abs/2411.14430",
      project_link: "https://omriavrahami.com/stable-flow/",
      github_link: "https://github.com/snap-research/stable-flow",
      abstract: [
        "Diffusion models have revolutionized the field of content synthesis and editing. Recent models have replaced the traditional UNet architecture with the Diffusion Transformer (DiT), and employed flow-matching for improved training and sampling. However, they exhibit limited generation diversity. In this work, we leverage this limitation to perform consistent image edits via selective injection of attention features. The main challenge is that, unlike the UNet-based models, DiT lacks a coarse-to-fine synthesis structure, making it unclear in which layers to perform the injection. Therefore, we propose an automatic method to identify \"vital layers\" within DiT, crucial for image formation, and demonstrate how these layers facilitate a range of controlled stable edits, from non-rigid modifications to object addition, using the same mechanism. Next, to enable real-image editing, we introduce an improved image inversion method for flow models. Finally, we evaluate our approach through qualitative and quantitative comparisons, along with a user study, and demonstrate its effectiveness across multiple applications.",
      ],
    },
    {
      title: "Differential Diffusion: Giving Each Pixel Its Strength",
      authors: ["Eran Levin", "Ohad Fried"],
      conference: "EuroGraphics",
      date: "12-05-2025", // format: DD-MM-YYYY
      image_link: "images/papers/diff-diff/diff-diff-1920.avif",
      paper_link: "https://arxiv.org/abs/2306.00950",
      project_link: "https://differential-diffusion.github.io/",
      github_link: "https://github.com/exx8/differential-diffusion",
      abstract: [
        "Diffusion models have revolutionized image generation and editing, producing state-of-the-art results in conditioned and unconditioned image synthesis. While current techniques enable user control over the degree of change in an image edit, the controllability is limited to global changes over an entire edited region. This paper introduces a novel framework that enables customization of the amount of change per pixel or per image region. Our framework can be integrated into any existing diffusion model, enhancing it with this capability. Such granular control on the quantity of change opens up a diverse array of new editing capabilities, such as control of the extent to which individual objects are modified, or the ability to introduce gradual spatial changes. Furthermore, we showcase the framework's effectiveness in soft-inpainting -- the completion of portions of an image while subtly adjusting the surrounding areas to ensure seamless integration. Additionally, we introduce a new tool for exploring the effects of different change quantities. Our framework operates solely during inference, requiring no model training or fine-tuning. We demonstrate our method with the current open state-of-the-art models, and validate it via both quantitative and qualitative comparisons, and a user study.",
      ],
    },
    {
      title: "REED-VAE: RE-Encode Decode Training for Iterative Image Editing with Diffusion Models",
      authors: ["Gal Almog", "Ariel Shamir", "Ohad Fried"],
      conference: "EuroGraphics",
      date: "12-05-2025", // format: DD-MM-YYYY
      image_link: "images/papers/reed/reed-1920.avif",
      paper_link: "https://reed-vae.github.io/static/REED_VAE.pdf",
      project_link: "https://reed-vae.github.io/",
      github_link: "https://github.com/galmog/REED-VAE",
      abstract: [
        "While latent diffusion models achieve impressive image editing results, their application to iterative editing of the same image is severely restricted. When trying to apply consecutive edit operations using current models, they accumulate artifacts and noise due to repeated transitions between pixel and latent spaces. Some methods have attempted to address this limitation by performing the entire edit chain within the latent space, sacrificing flexibility by supporting only a limited, predetermined set of diffusion editing operations. We present a RE-encode decode (REED) training scheme for variational autoencoders (VAEs), which promotes image quality preservation even after many iterations. Our work enables multi-method iterative image editing: users can perform a variety of iterative edit operations, with each operation building on the output of the previous one using both diffusion-based operations and conventional editing techniques. We demonstrate the advantage of REED-VAE across a range of image editing scenarios, including text-based and mask-based editing frameworks. In addition, we show how REED-VAE enhances the overall editability of images, increasing the likelihood of successful and precise edit operations. We hope that this work will serve as a benchmark for the newly introduced task of multi-method image editing.",
      ],
    },
    {
      title: "Prediction of Scene Plausibility",
      authors: ["Or Nachmias", "Ohad Fried", "Ariel Shamir"],
      conference: "Computational Visual Media",
      date: "04-06-2025", // format: DD-MM-YYYY
      image_link: "images/papers/scene-plausibility/scene-plausibility-1920.avif",
      paper_link: "https://arxiv.org/abs/2212.01470",
      github_link: "https://github.com/ornachmias/scene_plusibility_prediction",
      abstract: [
        "Understanding the 3D world from 2D images involves more than detection and segmentation of the objects within the scene. It also includes the interpretation of the structure and arrangement of the scene elements. Such understanding is often rooted in recognizing the physical world and its limitations, and in prior knowledge as to how similar typical scenes are arranged. In this research we pose a new challenge for neural network (or other) scene understanding algorithms - can they distinguish between plausible and implausible scenes? Plausibility can be defined both in terms of physical properties and in terms of functional and typical arrangements. Hence, we define plausibility as the probability of encountering a given scene in the real physical world. We build a dataset of synthetic images containing both plausible and implausible scenes, and test the success of various vision models in the task of recognizing and understanding plausibility.",
      ],
    },
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
      title: "SaSPA: Advancing Fine-Grained Classification by Structure and Subject Preserving Augmentation",
      authors: ["Eyal Michaeli", "Ohad Fried"],
      conference: "NeurIPS",
      date: "10-12-2024", // format: DD-MM-YYYY
      image_link: "images/papers/saspa/saspa-1920.avif",
      paper_link: "https://arxiv.org/abs/2406.14551",
      project_link: "https://eyalmichaeli.github.io/SaSPA-Aug/",
      github_link: "https://github.com/EyalMichaeli/SaSPA-Aug",
      abstract: [
        "Fine-grained visual classification (FGVC) involves classifying closely related sub-classes. This task is difficult due to the subtle differences between classes and the high intra-class variance. Moreover, FGVC datasets are typically small and challenging to gather, thus highlighting a significant need for effective data augmentation. Recent advancements in text-to-image diffusion models offer new possibilities for augmenting classification datasets. While these models have been used to generate training data for classification tasks, their effectiveness in full-dataset training of FGVC models remains under-explored. Recent techniques that rely on Text2Image generation or Img2Img methods, often struggle to generate images that accurately represent the class while modifying them to a degree that significantly increases the dataset's diversity. To address these challenges, we present SaSPA: Structure and Subject Preserving Augmentation. Contrary to recent methods, our method does not use real images as guidance, thereby increasing generation flexibility and promoting greater diversity. To ensure accurate class representation, we employ conditioning mechanisms, specifically by conditioning on image edges and subject representation. We conduct extensive experiments and benchmark SaSPA against both traditional and recent generative data augmentation methods. SaSPA consistently outperforms all established baselines across multiple settings, including full dataset training, contextual bias, and few-shot classification. Additionally, our results reveal interesting patterns in using synthetic data for FGVC models; for instance, we find a relationship between the amount of real data used and the optimal proportion of synthetic data.",
      ],
    },
    {
      title: "DiffUHaul: A Training-Free Method for Object Dragging in Images",
      authors: ["Omri Avrahami", "Rinon Gal", "Gal Chechik", "Ohad Fried", "Dani Lischinski", "Arash Vahdat", "Weili Nie"],
      conference: "SIGGRAPH Asia",
      date: "03-12-2024", // format: DD-MM-YYYY
      image_link: "images/papers/diffuhaul/diffuhaul-1920.avif",
      paper_link: "https://arxiv.org/abs/2406.01594",
      project_link: "https://omriavrahami.com/diffuhaul/",
      abstract: [
        "Text-to-image diffusion models have proven effective for solving many image editing tasks. However, the seemingly straightforward task of seamlessly relocating objects within a scene remains surprisingly challenging. Existing methods addressing this problem often struggle to function reliably in real-world scenarios due to lacking spatial reasoning. In this work, we propose a training-free method, dubbed DiffUHaul, that harnesses the spatial understanding of a localized text-to-image model, for the object dragging task. Blindly manipulating layout inputs of the localized model tends to cause low editing performance due to the intrinsic entanglement of object representation in the model. To this end, we first apply attention masking in each denoising step to make the generation more disentangled across different objects and adopt the self-attention sharing mechanism to preserve the high-level object appearance. Furthermore, we propose a new diffusion anchoring technique: in the early denoising steps, we interpolate the attention features between source and target images to smoothly fuse new layouts with the original appearance; in the later denoising steps, we pass the localized features from the source images to the interpolated images to retain fine-grained object details. To adapt DiffUHaul to real-image editing, we apply a DDPM self-attention bucketing that can better reconstruct real images with the localized model. Finally, we introduce an automated evaluation pipeline for this task and showcase the efficacy of our method. Our results are reinforced through a user preference study.",
      ],
    },
    {
      title: "The Chosen One: Consistent Characters in Text-to-Image Diffusion Models",
      authors: ["Omri Avrahami", "Amir Hertz", "Yael Vinker", "Moab Arar", "Shlomi Fruchter", "Ohad Fried", "Daniel Cohen-Or", "Dani Lischinski"],
      conference: "SIGGRAPH",
      date: "28-07-2024", // format: DD-MM-YYYY
      image_link: "images/papers/chosen-one/chosen-one-1920.avif",
      paper_link: "https://arxiv.org/abs/2311.10093",
      project_link: "https://omriavrahami.com/the-chosen-one/",
      github_link: "https://github.com/ZichengDuan/TheChosenOne",
      abstract: [
        "Recent advances in text-to-image generation models have unlocked vast potential for visual creativity. However, the users that use these models struggle with the generation of consistent characters, a crucial aspect for numerous real-world applications such as story visualization, game development, asset design, advertising, and more. Current methods typically rely on multiple pre-existing images of the target character or involve labor-intensive manual processes. In this work, we propose a fully automated solution for consistent character generation, with the sole input being a text prompt. We introduce an iterative procedure that, at each stage, identifies a coherent set of images sharing a similar identity and extracts a more consistent identity from this set. Our quantitative analysis demonstrates that our method strikes a better balance between prompt alignment and identity consistency compared to the baseline methods, and these findings are reinforced by a user study. To conclude, we showcase several practical applications of our approach.",
      ],
    },
    {
      title: "Deep Image Fingerprint: Towards Low Budget Synthetic Image Detection and Model Lineage Analysis",
      authors: ["Sergey Sinitsa", "Ohad Fried"],
      conference: "WACV",
      date: "04-01-2024", // format: DD-MM-YYYY
      image_link: "images/papers/DIF/DIF-1920.avif",
      paper_link: "https://arxiv.org/abs/2303.10762",
      project_link: "https://sergo2020.github.io/DIF/",
      github_link: "https://github.com/Sergo2020/DIF_pytorch_official",
      abstract: [
        "The generation of high-quality images has become widely accessible and is a rapidly evolving process. As a result, anyone can generate images that are indistinguishable from real ones. This leads to a wide range of applications, including malicious usage with deceptive intentions. Despite advances in detection techniques for generated images, a robust detection method still eludes us. Furthermore, model personalization techniques might affect the detection capabilities of existing methods. In this work, we utilize the architectural properties of convolutional neural networks (CNNs) to develop a new detection method. Our method can detect images from a known generative model and enable us to establish relationships between fine-tuned generative models. We tested the method on images produced by both Generative Adversarial Networks (GANs) and recent large text-to-image models (LTIMs) that rely on Diffusion Models. Our approach outperforms others trained under identical conditions and achieves comparable performance to state-of-the-art pre-trained detection methods on images generated by Stable Diffusion and MidJourney, with significantly fewer required train samples.",
      ],
    },
    {
      title: "GEFF: Improving Any Clothes-Changing Person ReID Model using Gallery Enrichment with Face Features",
      authors: ["Daniel Arkushin", "Bar Cohen", "Shmuel Peleg", "Ohad Fried"],
      conference: "RWS @ WACV",
      date: "04-01-2024", // format: DD-MM-YYYY
      image_link: "images/papers/reface/reface-1920.avif",
      paper_link: "https://arxiv.org/abs/2211.13807",
      project_link: "https://vision.huji.ac.il/reface/",
      github_link: "https://github.com/bar371/GEFF",
      abstract: [
        "In the Clothes-Changing Re-Identification (CC-ReID) problem, given a query sample of a person, the goal is to determine the correct identity based on a labeled gallery in which the person appears in different clothes. Several models tackle this challenge by extracting clothes-independent features. However, the performance of these models is still lower for the clothes-changing setting compared to the same-clothes setting in which the person appears with the same clothes in the labeled gallery. As clothing-related features are often dominant features in the data, we propose a new process we call Gallery Enrichment, to utilize these features. In this process, we enrich the original gallery by adding to it query samples based on their face features, using an unsupervised algorithm. Additionally, we show that combining ReID and face feature extraction modules alongside an enriched gallery results in a more accurate ReID model, even for query samples with new outfits that do not include faces. Moreover, we claim that existing CC-ReID benchmarks do not fully represent real-world scenarios, and propose a new video CC-ReID dataset called 42Street, based on a theater play that includes crowded scenes and numerous clothes changes. When applied to multiple ReID models, our method (GEFF) achieves an average improvement of 33.5% and 6.7% in the Top-1 clothes-changing metric on the PRCC and LTCC benchmarks. Combined with the latest ReID models, our method achieves new SOTA results on the PRCC, LTCC, CCVID, LaST and VC-Clothes benchmarks and the proposed 42Street dataset.",
      ],
    },
    {
      title:
        "Monkey see, monkey do: Harnessing self-attention in motion diffusion for zero-shot motion transfer",
      authors: ["Sigal Raab", "Inbar Gat", "Nathan Sala", "Guy Tevet", "Rotem Shalev-Arkushin", "Ohad Fried", "Amit H. Bermano", "Daniel Cohen-Or"],
      conference: "SIGGRAPH Asia",
      date: "01-01-2024", // format: DD-MM-YYYY
      image_link:
        "images/papers/momo/momo-1920.avif",
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
          "images/papers/taming/taming-1920.avif",
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
  {
    title: "SwiftSketch: A Diffusion Model for Image-to-Vector Sketch Generation",
    authors: ["Ellie Arar", "Yarden Frenkel", "Daniel Cohen-Or", "Ariel Shamir", "Yael Vinker"],
    conference: "SIGGRAPH",
    date: "07-08-2025",
    image_link: "https://swiftsketch.github.io/static/figures/teaser_.svg",
    paper_link: "https://arxiv.org/abs/2502.08642",
    project_link: "https://swiftsketch.github.io/", // optional project URL
    abstract: [
      "Recent advancements in large vision-language models have enabled highly expressive and diverse vector sketch generation. However, state-of-the-art methods rely on a time-consuming optimization process involving repeated feedback from a pretrained model to determine stroke placement. Consequently, despite producing impressive sketches, these methods are limited in practical applications. In this work, we introduce SwiftSketch, a diffusion model for image-conditioned vector sketch generation that can produce high-quality sketches in less than a second. SwiftSketch operates by progressively denoising stroke control points sampled from a Gaussian distribution. Its transformer-decoder architecture is designed to effectively handle the discrete nature of vector representation and capture the inherent global dependencies between strokes. To train SwiftSketch, we construct a synthetic dataset of image-sketch pairs, addressing the limitations of existing sketch datasets, which are often created by non-artists and lack professional quality. For generating these synthetic sketches, we introduce ControlSketch, a method that enhances SDS-based techniques by incorporating precise spatial control through a depth-aware ControlNet. We demonstrate that SwiftSketch generalizes across diverse concepts, efficiently producing sketches that combine high fidelity with a natural and visually appealing style."
    ],
  },
  {
    title: "Duet dancing from a solo dance video",
    authors: ["Yarin Moshe", "Yael Moses", "Ariel Shamir"],
    conference: "Computers and Graphics",
    date: "01-08-2025",
    image_link: "https://faculty.runi.ac.il/arik/site/images/research/duetDanceOverview.jpg",
    paper_link: "https://www.sciencedirect.com/science/article/pii/S0097849325000913",
    abstract: [
      "This paper introduces a method to generate duet dance videos from an input solo dancerÕs video performance. Addressing this novel problem, our system tackles a set of sub-tasks, including dancer segmentation, camera motion handling, stage reconstruction and the intricate management of geometric constraints such as dancer scale preservation and dancers collision prevention. The proposed approach leverages existing methodologies and new solutions. Notably, we address collisions in 2D spaceÐtime directly, departing from traditional 3D approaches. We modify the initial location of the dancer to avoid long-time collisions globally, while also modulating the pace of the dance by deliberate slowing down or accelerating motion to avoid short collisions locally. Experimental results attest to the efficacy of our approach. The system not only successfully synthesizes engaging duet dance sequences but also upholds the authenticity of individual performances, as shown by a user study."
    ],
   },
   {
    title: "CLIP-UP: CLIP-Based Unanswerable Problem Detection for Visual Question Answering",
    authors: ["Ben Vardi", "Oron Nir", "Ariel Shamir"],
    conference: "WACV",
    date: "01-01-2026",
    image_link: "https://benvr.github.io/CLIP-UP/static/images/clip_up_results_demo.jpg",
    paper_link: "https://arxiv.org/abs/2501.01371",
	project_link: "https://benvr.github.io/CLIP-UP",
    abstract: [
      "Vision-Language Models (VLMs) demonstrate remarkable capabilities in visual understanding and reasoning, such as in Visual Question Answering (VQA), where the model is asked a question related to a visual input. Still, these models can make distinctly unnatural errors, for example, providing (wrong) answers to unanswerable VQA questions, such as questions asking about objects that do not appear in the image.",
	  "To address this issue, we propose CLIP-UP: CLIP-based Unanswerable Problem detection, a novel lightweight method for equipping VLMs with the ability to withhold answers to unanswerable questions. CLIP-UP leverages CLIP-based similarity measures to extract question-image alignment information to detect unanswerability, requiring efficient training of only a few additional layers, while keeping the original VLMs' weights unchanged. Tested across several models, CLIP-UP achieves significant improvements on benchmarks assessing unanswerability in both multiple-choice and open-ended VQA, surpassing other methods, while preserving original performance on other tasks."],
   },
  ],
};
