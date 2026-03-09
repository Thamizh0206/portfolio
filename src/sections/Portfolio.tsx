import { useState, useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '@/config';

export function Portfolio() {
  const { ref, isRevealed } = useReveal({ threshold: 0.1 });
  const projects = portfolioConfig.projects;

  return (
    <section id="projects" className="section-premium relative" style={{ background: 'var(--bg-primary)' }}>
      <div ref={ref} className="absolute inset-0 pointer-events-none" />
      {/* Background Decorative Element */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #22d3ee 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-4xl">
            <div
              className={`transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <span className="text-label flex items-center gap-3">
                <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                {portfolioConfig.label}
              </span>
            </div>

            <h2
              className={`text-section font-bold mt-4 mb-8 whitespace-normal lg:whitespace-nowrap transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '0.1s', color: 'var(--text-primary)' }}
            >
              Building with <span className="gradient-text">Purpose</span> & <span className="gradient-text">Precision</span>
            </h2>

            <p
              className={`text-body-lg transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {portfolioConfig.description}
            </p>
          </div>

          <a
            href={portfolioConfig.cta.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 text-sm font-medium transition-all duration-700 hover:gap-3 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ color: 'var(--accent)', transitionDelay: '0.3s' }}
          >
            {portfolioConfig.viewAllLabel}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects Layout - One by One (Premium Flow) */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project: any, i: number) => (
            <ProjectItem key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual project with its own reveal logic
function ProjectItem({ project, index }: { project: any, index: number }) {
  const { ref: revealRef, isRevealed } = useReveal({ threshold: 0.15 });
  const itemRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const scrollPos = (window.innerHeight - rect.top) / window.innerHeight;
      setScrollY(scrollPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxAmount = Math.max(-15, Math.min(15, (scrollY - 0.5) * 30));

  return (
    <div
      ref={(el) => {
        // @ts-ignore
        revealRef.current = el;
        // @ts-ignore
        itemRef.current = el;
      }}
      className={`group flex flex-col lg:flex-row gap-8 lg:gap-20 items-center transition-all duration-1000 ease-out ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image Container */}
      <div className="w-full lg:w-[55%] relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5">
        <div
          className="absolute inset-0 z-10 transition-colors duration-500 group-hover:bg-indigo-500/10"
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[115%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxAmount}px)` }}
        />

        {/* View Project Overlay */}
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-700 ${hovered ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ background: 'rgba(3, 3, 5, 0.7)', backdropFilter: 'blur(10px)' }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-10 py-4 rounded-full group/btn"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </div>

        {/* Floating Number */}
        <div
          className="absolute bottom-8 right-8 z-30 opacity-20 text-[120px] font-black leading-none italic pointer-events-none transition-all duration-700 group-hover:opacity-40"
          style={{ color: 'var(--text-primary)', transform: `translateY(${parallaxAmount * -0.5}px)` }}
        >
          {index + 1}
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full lg:w-[40%] space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-0.5 w-12 bg-indigo-500" />
          <span className="text-sm font-mono opacity-60 uppercase tracking-widest">{project.category}</span>
        </div>

        <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        <p className="text-xl leading-relaxed font-light" style={{ color: 'var(--text-tertiary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-4 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap transition-all duration-300 hover:border-indigo-400 group-hover:bg-indigo-500/5"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'var(--border)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-lg font-bold uppercase tracking-widest"
          >
            <span className="relative">
              Case Highlights
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transition-transform origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left" />
            </span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all duration-500">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
