import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Projects section - data defined locally
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Resume Analyzer',
    category: 'NLP & Job Matching',
    year: '2024',
    image: '/images/project-1.jpg',
    description: 'Automated candidate-job matching using NLP skill extraction and Gemini embeddings for semantic similarity scoring.',
    tech: ['FastAPI', 'NLP', 'Gemini', 'Python'],
    featured: true,
  },
  {
    title: 'AI Documentation Generator',
    category: 'LLM Tool',
    year: '2024',
    image: '/images/project-2.jpg',
    description: 'Auto-generates Markdown documentation from code repositories using GPT and LangChain.',
    tech: ['Python', 'OpenAI', 'LangChain'],
    featured: false,
  },
  {
    title: 'DocuMind AI',
    category: 'RAG-Based PDF QA',
    year: '2024',
    image: '/images/project-3.jpg',
    description: 'Multi-PDF Q&A application with 40% improved answer relevance using FAISS retrieval.',
    tech: ['RAG', 'FAISS', 'React', 'FastAPI'],
    featured: false,
  },
];

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span 
              className={cn(
                'text-caption inline-block mb-4 transition-all duration-600',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ color: 'var(--accent-purple)' }}
            >
              Featured Projects
            </span>
            <h2 
              className={cn(
                'text-h1 font-semibold mb-4 transition-all duration-600 delay-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ color: 'var(--text-primary)' }}
            >
              Projects That <span className="gradient-text">Deliver Impact</span>
            </h2>
            <p 
              className={cn(
                'text-body-lg transition-all duration-600 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ color: 'var(--text-tertiary)' }}
            >
              Production-ready AI systems built with cutting-edge technologies
            </p>
          </div>
          
          <a 
            href="#" 
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium transition-all duration-600 delay-300 hover:gap-3',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--accent-blue)' }}
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          {/* Featured Project */}
          <div 
            className={cn(
              'lg:col-span-2 group rounded-2xl overflow-hidden transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ 
              transitionDelay: '300ms',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                style={{ background: 'rgba(0,0,0,0.6)' }}
              >
                <button 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <ExternalLink className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                </button>
                <button 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <Github className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="text-caption"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  {projects[0].category}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span 
                  className="text-caption"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {projects[0].year}
                </span>
              </div>
              <h3 
                className="text-h2 font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {projects[0].title}
              </h3>
              <p 
                className="text-body mb-4"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tech.map((t) => (
                  <span 
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md"
                    style={{ 
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-6">
            {projects.slice(1).map((project, i) => (
              <div 
                key={project.title}
                className={cn(
                  'group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ 
                  transitionDelay: `${400 + i * 100}ms`,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="text-caption"
                      style={{ color: 'var(--accent-purple)' }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 
                    className="text-h3 font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-body-sm mb-3"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2 py-0.5 text-xs rounded"
                        style={{ 
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
