import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/config';
import { Code2, Brain, Rocket } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Best practices' },
  { icon: Brain, label: 'AI/ML Expert', desc: 'Deep learning' },
  { icon: Rocket, label: 'Production Ready', desc: 'Scalable systems' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <span 
                className={cn(
                  'text-caption inline-block mb-4 transition-all duration-600',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ color: 'var(--accent-blue)' }}
              >
                About Me
              </span>
              <h2 
                className={cn(
                  'text-h1 font-semibold mb-6 transition-all duration-600 delay-100',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ color: 'var(--text-primary)' }}
              >
                Passionate about building{' '}
                <span className="gradient-text">intelligent systems</span>
              </h2>
            </div>

            {/* Description */}
            <p 
              className={cn(
                'text-body-lg transition-all duration-600 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ color: 'var(--text-secondary)' }}
            >
              {aboutConfig.description}
            </p>

            {/* Highlights */}
            <div 
              className={cn(
                'grid grid-cols-3 gap-4 pt-4 transition-all duration-600 delay-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
            >
              {highlights.map((item, i) => (
                <div 
                  key={i}
                  className="text-center p-4 rounded-xl"
                  style={{ 
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <item.icon 
                    className="w-5 h-5 mx-auto mb-2" 
                    style={{ color: 'var(--accent-blue)' }}
                  />
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {item.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div 
            className={cn(
              'grid grid-cols-2 gap-4 transition-all duration-600 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {/* Main Stat */}
            <div 
              className="col-span-2 p-8 rounded-2xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-blue)/10, var(--accent-purple)/10)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-6xl lg:text-7xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {aboutConfig.experienceValue}
                </span>
                <span 
                  className="text-h3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Years
                </span>
              </div>
              <p className="text-body mt-2" style={{ color: 'var(--text-tertiary)' }}>
                of hands-on experience in AI/ML development
              </p>
            </div>

            {/* Other Stats */}
            {aboutConfig.stats.map((stat, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl"
                style={{ 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <span 
                  className="text-4xl font-bold block mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {stat.value}
                </span>
                <span 
                  className="text-body-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {stat.label.replace('\n', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
