import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface Certification {
  name: string;
  provider: string;
}

const education: EducationItem = {
  degree: 'B.E. in Artificial Intelligence & Machine Learning',
  institution: 'KPR Institute of Engineering and Technology',
  period: '2020 - 2024',
};

const certifications: Certification[] = [
  { name: 'Machine Learning Specialization', provider: 'Coursera (Stanford)' },
  { name: 'Large Language Models', provider: 'NPTEL' },
  { name: 'Internet of Things', provider: 'NPTEL' },
  { name: 'Prompt Engineering', provider: 'Simplilearn' },
  { name: 'Deep Learning Specialization', provider: 'Coursera' },
];

export function Education() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span 
            className={cn(
              'text-caption inline-block mb-4 transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ color: 'var(--accent-green)' }}
          >
            Education & Certifications
          </span>
          <h2 
            className={cn(
              'text-h1 font-semibold mb-4 transition-all duration-600 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-primary)' }}
          >
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Card */}
          <div 
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
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-green)15' }}
              >
                <GraduationCap 
                  className="w-5 h-5" 
                  style={{ color: 'var(--accent-green)' }}
                />
              </div>
              <h3 
                className="text-h3 font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Education
              </h3>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{ 
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div 
                className="flex items-center gap-2 mb-3"
              >
                <Calendar className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                <span 
                  className="text-sm font-geist-mono"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {education.period}
                </span>
              </div>
              <h4 
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {education.degree}
              </h4>
              <p 
                className="text-body-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {education.institution}
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div 
            className={cn(
              'rounded-2xl p-8 transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ 
              transitionDelay: '300ms',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-purple)15' }}
              >
                <Award 
                  className="w-5 h-5" 
                  style={{ color: 'var(--accent-purple)' }}
                />
              </div>
              <h3 
                className="text-h3 font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-white/5"
                  style={{ 
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {cert.name}
                    </p>
                    <p 
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {cert.provider}
                    </p>
                  </div>
                  <ExternalLink 
                    className="w-4 h-4 flex-shrink-0" 
                    style={{ color: 'var(--text-muted)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
