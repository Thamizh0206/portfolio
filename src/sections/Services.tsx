import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// Skills section - no external config needed
import { 
  Code2, 
  Brain, 
  Bot, 
  Cloud
} from 'lucide-react';

// Skill categories with icons

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript'],
    color: 'var(--accent-blue)',
  },
  {
    icon: Brain,
    title: 'ML/DL Frameworks',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy'],
    color: 'var(--accent-purple)',
  },
  {
    icon: Bot,
    title: 'AI/LLM Tools',
    skills: ['LangChain', 'OpenAI API', 'RAG', 'FAISS', 'Prompt Engineering'],
    color: 'var(--accent-cyan)',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['FastAPI', 'Docker', 'AWS', 'GCP', 'Azure'],
    color: 'var(--accent-green)',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className={cn(
              'text-caption inline-block mb-4 transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ color: 'var(--accent-blue)' }}
          >
            Technical Skills
          </span>
          <h2 
            className={cn(
              'text-h1 font-semibold mb-4 transition-all duration-600 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-primary)' }}
          >
            Expertise Across the <span className="gradient-text">ML Stack</span>
          </h2>
          <p 
            className={cn(
              'text-body-lg transition-all duration-600 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-tertiary)' }}
          >
            Proficient in modern AI/ML technologies with focus on production-ready solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={cn(
                'group p-6 lg:p-8 rounded-2xl transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ 
                transitionDelay: `${300 + i * 100}ms`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    background: `${category.color}15`,
                  }}
                >
                  <category.icon 
                    className="w-6 h-6" 
                    style={{ color: category.color }}
                  />
                </div>
                <h3 
                  className="text-h3 font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 hover:scale-105"
                    style={{ 
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
