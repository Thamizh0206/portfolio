// Site configuration
// Portfolio for Thamizhvendhan R - Machine Learning Engineer

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Thamizhvendhan R | Machine Learning Engineer",
  description: "Portfolio of Thamizhvendhan R - Machine Learning Engineer specializing in Generative AI, RAG systems, LLMs, and scalable ML pipelines.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Thamizhvendhan R",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ],
  contactLabel: "Contact Me",
  contactHref: "mailto:thamizhvendhan0206@gmail.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
  profileImage: string;
  resume: {
    view: string;
    download: string;
  };
}

export const heroConfig: HeroConfig = {
  name: "Thamizhvendhan R",
  roles: [
    "Machine Learning Engineer",
    "Generative AI Developer",
    "RAG Systems Specialist",
    "NLP & LLM Expert",
  ],
  backgroundImage: "/images/hero-bg.jpg",
  profileImage: "/images/profile.jpg",
  resume: {
    view: "https://drive.google.com/drive/folders/1vOdNUo1CleQdOFSr-pD_zBwIzU1LVR3q?usp=drive_link",
    download: "https://drive.google.com/drive/folders/1vOdNUo1CleQdOFSr-pD_zBwIzU1LVR3q?usp=drive_link",
  },
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I am a Machine Learning Engineer with hands-on experience in building and deploying end-to-end ML systems across NLP, Generative AI, and adaptive learning architectures. I am proficient in Python, TensorFlow, PyTorch, and FastAPI, with strong expertise in scalable ML pipelines, hybrid RAG systems, and production-ready AI solutions that prioritize accuracy and personalized user experiences.",
  experienceValue: "3+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "16+", label: "ML Projects\nCompleted" },
    { value: "12+", label: "AI Models\nDeployed" },
    { value: "6+", label: "RAG Systems\nBuilt" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "ML Engineer Workspace" },
    { src: "/images/about-2.jpg", alt: "Data Visualization" },
    { src: "/images/about-3.jpg", alt: "Neural Network" },
    { src: "/images/about-4.jpg", alt: "AI Technology" },
  ],
};

// Skills section configuration - Tech Skills
export interface SkillCategory {
  iconName: string;
  title: string;
  skills: string[];
  description: string;
  color: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  categories: SkillCategory[];
}

export const servicesConfig: ServicesConfig = {
  label: "Technical Skills",
  heading: "Expertise Across the AI/ML Landscape",
  categories: [
    {
      iconName: "Code2",
      title: "Languages",
      skills: ["Python", "Java", "C", "SQL", "C++"],
      description: "Proficient in core programming languages for system design and ML implementation.",
      color: "#6366f1",
    },
    {
      iconName: "Brain",
      title: "Libraries & Math",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "FAISS"],
      description: "Expertise in data manipulation, mathematical computing, and vector search.",
      color: "#c084fc",
    },
    {
      iconName: "Bot",
      title: "AI/LLM Stack",
      skills: ["RAG", "Agentic AI", "Adaptive Learning", "Semantic Search", "LangChain"],
      description: "Building advanced intelligent systems with large language models and retrieval logic.",
      color: "#22d3ee",
    },
    {
      iconName: "Layers",
      title: "ML & Deep Learning",
      skills: ["Regression", "Classification", "Clustering", "CNNs", "RNNs", "Transformers"],
      description: "Deep understanding of supervised, unsupervised, and neural network architectures.",
      color: "#f472b6",
    },
    {
      iconName: "Cloud",
      title: "Tools & DevOps",
      skills: ["FastAPI", "Docker", "AWS", "GCP", "Azure"],
      description: "Deploying and scaling production-ready ML systems across cloud platforms.",
      color: "#4ade80",
    },
  ],
};

// Portfolio section configuration - Featured Projects
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Featured Highlights",
  heading: "Real-World AI Implementations",
  description: "Each project represents a production-ready system tackling specific challenges in NLP, documentation, and document intelligence.",
  projects: [
    {
      title: "AI-Powered Documentation Generator",
      category: "LLM | OpenAI | LangChain",
      year: "2024",
      image: "/images/project-2.jpg",
      description: "Built an AI-driven repository documentation generator using OpenAI GPT and LangChain to extract code functions and produce structured Markdown/JSON docs.",
      tech: ["Python", "OpenAI", "LangChain"],
      link: "https://git2doc.vercel.app/",
      featured: true,
    },
    {
      title: "AI Resume Analyzer & Job Match Engine",
      category: "NLP | FastAPI | Gemini",
      year: "2024",
      image: "/images/project-1.jpg",
      description: "Built a scalable analyzer using hybrid matching (Skill extraction + Gemini embedding similarity) to compute candidate–job fit scores with automated screening.",
      tech: ["FastAPI", "NLP", "Gemini", "Python"],
      link: "https://thamizh0206-resume-analyzer.hf.space/",
    },
    {
      title: "EduGen AI (Adaptive Learning Engine)",
      category: "RAG | Adaptive AI | FastAPI",
      year: "2024",
      image: "/images/project-edu.jpg.png",
      description: "An AI-powered adaptive learning engine that transforms static study materials into structured summaries, intelligent quizzes, and personalized learning insights using RAG, semantic embeddings, and performance tracking.",
      tech: ["FastAPI", "RAG", "FAISS", "SentenceTransformers", "Python"],
      link: "#",
    },
    {
      title: "DocuMind AI (LLM-Based QA System)",
      category: "RAG | FAISS | React",
      year: "2024",
      image: "/images/project-3.jpg",
      description: "Scalable RAG-based multi-PDF QA system using FAISS and GPT LLMs, achieving 40% improvement in answer relevance with semantic retrieval.",
      tech: ["RAG", "FAISS", "React", "FastAPI"],
      link: "https://thamizh0206-documind-ai.hf.space/",
    },
  ],
  cta: {
    label: "Innovation",
    heading: "Pushing the boundaries of AI",
    linkText: "View My GitHub",
    linkHref: "https://github.com/Thamizh0206",
  },
  viewAllLabel: "View All Projects",
};

// Experience section configuration
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ExperienceConfig {
  label: string;
  heading: string;
  items: ExperienceItem[];
}

export const experienceConfig: ExperienceConfig = {
  label: "Work Experience",
  heading: "Professional Journey",
  items: [
    {
      title: "Machine Learning and Cybersecurity Engineer",
      company: "Nitroware Tech Pvt Ltd",
      location: "India",
      period: "Jan 2025 - Feb 2025",
      description: "Leading ML initiatives for cybersecurity applications, developing anomaly detection systems and predictive analytics pipelines for cloud infrastructure.",
      achievements: [
        "Developed and deployed ML-based cyber breach detection systems using Python, Scikit-learn, TensorFlow, and PyTorch.",
        "Applied anomaly detection and predictive analytics to identify security threats across AWS, GCP, and Azure environments.",
        "Built pipelines processing 10M+ events daily with real-time ML detection.",
      ],
    },
  ],
};

// Education section configuration
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  link: string;
}

export interface EducationConfig {
  label: string;
  heading: string;
  educationItems: EducationItem[];
  certifications: CertificationItem[];
}

export const educationConfig: EducationConfig = {
  label: "Education & Certifications",
  heading: "Academic Background",
  educationItems: [
    {
      degree: "B.E. Computer Science Engineering (Artificial Intelligence and Machine Learning)",
      institution: "KPR Institute of Engineering and Technology",
      period: "2023 - 2027",
      details: "CGPA: 7.4",
    },
    {
      degree: "SSLC & HSC (SSLC: 89.9%, HSC: 89.9%)",
      institution: "Arunmozhy Matric Higher Secondary School",
      period: "Graduated with Honors",
    },
  ],
  certifications: [
    {
      name: "Supervised Machine Learning: Regression and Classification",
      provider: "Coursera",
      link: "https://drive.google.com/file/d/1gHvVC0GhPigLteabUqC0oH6AR99nsGVD/view?usp=drive_link",
    },
    {
      name: "Introduction to Industry 4.0 and IIoT",
      provider: "NPTEL",
      link: "https://drive.google.com/file/d/1R369CDr01mnHlod7kvdUSl4w1-nddW6K/view?usp=drive_link",
    },
    {
      name: "Introduction to Large Language Models (LLMs)",
      provider: "NPTEL",
      link: "https://drive.google.com/file/d/11zhuG8gd9fOJe4N2o9iA1HHXcxHAd9rw/view?usp=drive_link",
    },
    {
      name: "Introduction to Prompt Engineering",
      provider: "Simplilearn",
      link: "https://drive.google.com/file/d/1u8Jl2T3cO-5sB1tqP10u2SHr_08YIefP/view?usp=drive_link",
    },
    {
      name: "C, C++, Java",
      provider: "IIT Bombay Spoken Tutorial",
      link: "https://drive.google.com/drive/folders/1U0--y-QGYPvl4Es3UqWwiLa-pO9u2jPG?usp=drive_link",
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  phone: string;
  location: string;
  status: {
    label: string;
    description: string;
  };
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["ML Engineer", "GenAI Enthusiast", "Problem Solver"],
  heading: "Let's Start a Conversation",
  description: "I'm always open to discussing advanced AI architectures, RAG implementations, or scalable ML systems. Let's build something intelligent together.",
  buttonText: "Send Message",
  buttonHref: "mailto:thamizhvendhan0206@gmail.com",
  email: "thamizhvendhan0206@gmail.com",
  phone: "+91 6369446216",
  location: "Coimbatore, India",
  status: {
    label: "Open to collaborations",
    description: "Interested in collaborations, product development and research partnerships"
  },
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Thamizhvendhan R",
  description: "Machine Learning Engineer specializing in Generative AI, RAG systems, and production-ready ML solutions that solve real-world problems.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
        { label: "My Resume", href: "https://drive.google.com/file/d/1YtPn0QnfFaDvBQsCi-6j1idgSQA4l1lo/view?usp=drive_link" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/thamizhvendhan-r-a4a550375/" },
        { label: "GitHub", href: "https://github.com/Thamizh0206" },
        { label: "Email", href: "mailto:thamizhvendhan0206@gmail.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com/Thamizh0206", label: "GitHub" },
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/thamizhvendhan-r-a4a550375/", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:thamizhvendhan0206@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay in the loop",
  newsletterDescription: "Subscribe to receive insights on latest AI trends and my recent projects.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Email address",
  copyright: "© 2024 Thamizhvendhan R. All rights reserved.",
  credit: "Built with React, Tailwind & shadcn",
};
