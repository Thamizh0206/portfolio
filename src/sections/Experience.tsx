import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Machine Learning & Cybersecurity Engineer',
    company: 'Nitroware Tech Pvt Ltd',
    location: 'India',
    period: '2023 - Present',
    description: 'Leading ML initiatives for cybersecurity applications, developing anomaly detection systems and predictive analytics pipelines for cloud infrastructure.',
    achievements: [
      'Achieved 60% reduction in threat response time',
      'Built pipelines processing 10M+ events daily',
      'Deployed models on AWS/GCP/Azure production',
    ],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span 
            className={cn(
              'text-caption inline-block mb-4 transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ color: 'var(--accent-cyan)' }}
          >
            Work Experience
          </span>
          <h2 
            className={cn(
              'text-h1 font-semibold mb-4 transition-all duration-600 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-primary)' }}
          >
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl p-8 transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ 
                transitionDelay: '200ms',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-cyan)15' }}
                  >
                    <Briefcase 
                      className="w-5 h-5" 
                      style={{ color: 'var(--accent-cyan)' }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-h3 font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.title}
                    </h3>
                    <p 
                      className="text-body mt-1"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{ 
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <Calendar className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                  <span 
                    className="text-sm font-geist-mono"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-body mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                {exp.description}
              </p>

              {/* Achievements */}
              <div 
                className="p-5 rounded-xl"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <h4 
                  className="text-caption mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: 'var(--accent-green)' }}
                      />
                      <span 
                        className="text-body-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
