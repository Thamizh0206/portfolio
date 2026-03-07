// Site configuration
// Portfolio for Thamizhvendhan R - Machine Learning Engineer

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Thamizhvendhan R | ML Engineer & Generative AI Developer",
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
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Thamizhvendhan R",
  roles: [
    "Machine Learning Engineer",
    "Generative AI Developer",
    "RAG Systems Expert",
    "LLM Specialist",
  ],
  backgroundImage: "/images/hero-bg.jpg",
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
  description: "I am an ML engineer experienced in building end-to-end AI/ML systems with expertise in NLP, recommendation engines, and generative AI. I excel in Python, TensorFlow, PyTorch, and FastAPI, with deep knowledge of scalable ML pipelines and RAG architectures. I am passionate about creating production-ready AI solutions that solve real-world problems.",
  experienceValue: "3+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "15+", label: "ML Projects\nCompleted" },
    { value: "10+", label: "AI Models\nDeployed" },
    { value: "5+", label: "RAG Systems\nBuilt" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "ML Engineer Workspace" },
    { src: "/images/about-2.jpg", alt: "Data Visualization" },
    { src: "/images/about-3.jpg", alt: "Neural Network" },
    { src: "/images/about-4.jpg", alt: "AI Technology" },
  ],
};

// Services section configuration - Repurposed as Tech Skills
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Technical Skills",
  heading: "Expertise Across the ML Stack",
  services: [
    {
      iconName: "Code",
      title: "Programming Languages",
      description: "Python, Java, C, SQL - Building robust and scalable code foundations for ML systems with clean architecture and best practices.",
      image: "/images/skill-1.jpg",
    },
    {
      iconName: "Brain",
      title: "ML/DL Frameworks",
      description: "TensorFlow, PyTorch, scikit-learn, Pandas, NumPy - Developing and training state-of-the-art machine learning models.",
      image: "/images/skill-2.jpg",
    },
    {
      iconName: "Bot",
      title: "AI/LLM Technologies",
      description: "RAG, FAISS, LangChain, OpenAI APIs, Prompt Engineering - Building intelligent systems with large language models.",
      image: "/images/skill-3.jpg",
    },
    {
      iconName: "Cloud",
      title: "Cloud & DevOps",
      description: "FastAPI, Docker, AWS/GCP/Azure - Deploying and scaling ML pipelines in production cloud environments.",
      image: "/images/skill-4.jpg",
    },
  ],
};

// Portfolio section configuration - Featured Projects
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
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
  label: "Featured Projects",
  heading: "AI/ML Projects That Deliver Impact",
  description: "Showcasing production-ready AI systems built with cutting-edge technologies. Each project demonstrates end-to-end ML pipeline development from data processing to deployment.",
  projects: [
    {
      title: "AI Resume Analyzer & Job Match Engine",
      category: "NLP | FastAPI | Gemini",
      year: "2024",
      image: "/images/project-1.jpg",
      featured: true,
    },
    {
      title: "AI-Powered Documentation Generator",
      category: "LLM | OpenAI | LangChain",
      year: "2024",
      image: "/images/project-2.jpg",
    },
    {
      title: "DocuMind AI - RAG-Based PDF QA",
      category: "RAG | FAISS | React",
      year: "2024",
      image: "/images/project-3.jpg",
    },
    {
      title: "Anomaly Detection System",
      category: "Cybersecurity | AWS | ML",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Recommendation Engine",
      category: "Deep Learning | TensorFlow",
      year: "2023",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Let's Collaborate",
    heading: "Have a project in mind?",
    linkText: "Get in Touch",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration - Repurposed as Experience & Education
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Experience & Education",
  heading: "Professional Journey",
  testimonials: [
    {
      quote: "Used ML to detect security breaches on AWS/GCP/Azure cloud platforms. Developed anomaly detection and predictive analytics pipelines. Achieved real-time detection of network threats in production environments, reducing response time by 60%.",
      author: "Machine Learning & Cybersecurity Engineer",
      role: "Full-time Position",
      company: "Nitroware Tech Pvt Ltd",
      image: "/images/about-3.jpg",
      rating: 5,
    },
    {
      quote: "B.E. in Artificial Intelligence & Machine Learning with comprehensive coursework in deep learning, neural networks, and data science. Graduated with strong foundation in both theoretical and practical aspects of AI.",
      author: "B.E. AI & ML",
      role: "Undergraduate Degree",
      company: "KPR Institute of Engineering and Technology",
      image: "/images/about-2.jpg",
      rating: 5,
    },
    {
      quote: "Completed certifications in Machine Learning Specialization (Coursera), IoT (NPTEL), Large Language Models (NPTEL), and Prompt Engineering (Simplilearn). Continuously learning and staying updated with latest AI advancements.",
      author: "Professional Certifications",
      role: "Continuous Learning",
      company: "Coursera, NPTEL, Simplilearn",
      image: "/images/about-4.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration - Contact Section
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Machine Learning Engineer", "Generative AI Developer", "RAG Systems Expert"],
  heading: "Let's Build Something Amazing Together",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a production-ready AI system or want to explore the possibilities of generative AI, let's connect.",
  buttonText: "Download Resume",
  buttonHref: "#",
  email: "thamizhvendhan0206@gmail.com",
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
  description: "Machine Learning Engineer specializing in Generative AI, RAG systems, and scalable ML pipelines. Building production-ready AI solutions that drive real-world impact.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { label: "Python & TensorFlow", href: "#" },
        { label: "LangChain & LLMs", href: "#" },
        { label: "FastAPI & Docker", href: "#" },
        { label: "AWS/GCP/Azure", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com/Thamizh0206/portfolio" },
        { label: "Email Me", href: "mailto:thamizhvendhan0206@gmail.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com/Thamizh0206/portfolio", label: "GitHub" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:thamizhvendhan0206@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get updates on my latest projects and AI insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Thamizhvendhan R. All rights reserved.",
  credit: "Built with React, Tailwind CSS & shadcn/ui",
};
