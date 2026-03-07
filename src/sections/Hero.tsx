import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orb */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-main w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div 
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-700',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ 
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
            <span className="text-caption" style={{ color: 'var(--text-secondary)' }}>
              Available for Opportunities
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className={cn(
              'text-display font-bold mb-6 transition-all duration-700 delay-100',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <span style={{ color: 'var(--text-primary)' }}>{heroConfig.name}</span>
          </h1>

          {/* Role / Subtitle */}
          <p 
            className={cn(
              'text-h2 font-medium mb-4 transition-all duration-700 delay-200',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-secondary)' }}
          >
            {heroConfig.roles[0]} <span style={{ color: 'var(--text-muted)' }}>|</span> {heroConfig.roles[1]}
          </p>

          {/* Tagline */}
          <p 
            className={cn(
              'text-body-lg max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ color: 'var(--text-tertiary)' }}
          >
            Building production-ready AI systems with RAG, LLMs & scalable ML pipelines
          </p>

          {/* CTA Buttons */}
          <div 
            className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div 
            className={cn(
              'flex flex-wrap items-center justify-center gap-2 mt-12 transition-all duration-700 delay-500',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'FastAPI', 'AWS'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 text-sm rounded-lg"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-tertiary)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-600 cursor-pointer',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-caption">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
