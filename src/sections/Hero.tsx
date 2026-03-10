import { useEffect, useState, useRef } from 'react';
import { ScrambleText } from '@/components/ScrambleText';
import { MagneticButton } from '@/components/MagneticButton';
import { ArrowDownRight, Download, Eye, X } from 'lucide-react';
import { heroConfig } from '@/config';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [showResume, setShowResume] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showResume]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Orb - Blue */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)',
            filter: 'blur(100px)',
            left: `${15 + mousePos.x * 10}%`,
            top: `${20 + mousePos.y * 10}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.8s ease-out, top 0.8s ease-out',
          }}
        />
        {/* Secondary Orb - Cyan */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 60%)',
            filter: 'blur(80px)',
            right: `${20 - mousePos.x * 8}%`,
            bottom: `${25 - mousePos.y * 8}%`,
            transform: 'translate(50%, 50%)',
            transition: 'right 0.8s ease-out, bottom 0.8s ease-out',
          }}
        />
        {/* Tertiary Orb - Pink */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f472b6 0%, transparent 60%)',
            filter: 'blur(60px)',
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container-premium w-full text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">

          {/* Label */}
          <div
            className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-label flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              Machine Learning Engineer
              <span className="w-12 h-px bg-gradient-to-r from-indigo-500 via-indigo-500 to-transparent rotate-180" />
            </span>
          </div>

          {/* Main Name - Monumental Center */}
          <h1 className="overflow-hidden mb-8 w-full text-center">
            <span
              className={`text-display font-black tracking-tighter block transition-all duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-full'
                }`}
              style={{
                color: 'var(--text-primary)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0.1s',
              }}
            >
              <ScrambleText text={heroConfig.name} delay={300} />
            </span>
          </h1>

          {/* Role Display */}
          <div
            className={`flex flex-col items-center gap-4 sm:gap-6 mb-10 sm:mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold italic gradient-text px-4" style={{ color: 'var(--text-secondary)' }}>
              {heroConfig.roles[0]}
            </span>
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-sm font-bold uppercase tracking-[0.2rem] sm:tracking-[0.4em] opacity-40 px-4">
              {heroConfig.roles.slice(1).map((role, idx) => (
                <span key={role} className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
                  {role}
                  {idx < heroConfig.roles.length - 2 && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Centered */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16 sm:mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <MagneticButton
              href="#projects"
              className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all group sm:scale-110 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              <span>Explore Portfolio</span>
              <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>

            <div className="flex w-full sm:w-auto bg-white/5 border border-white/10 rounded-2xl sm:rounded-full p-1 sm:p-2 backdrop-blur-md">
              <button
                onClick={() => setShowResume(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all hover:bg-white/10"
                style={{ color: 'var(--text-primary)' }}
              >
                <Eye className="w-4 h-4 opacity-70" />
                View CV
              </button>
              <div className="w-px h-8 bg-white/10 self-center mx-1" />
              <a
                href={heroConfig.resume.download}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all hover:bg-white/10 text-indigo-400"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>

          {/* Stack Intelligence Banner */}
          <div
            className={`flex flex-col items-center gap-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <span className="text-[10px] uppercase font-black tracking-[0.5em] opacity-20">Production Stack</span>
            <div className="flex flex-wrap justify-center gap-4">
              {['Python', 'PyTorch', 'FastAPI', 'AWS', 'Docker'].map((tech) => (
                <div key={tech} className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:border-indigo-500/30 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setShowResume(false)}
          />
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#0a0a0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Eye className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">Professional Resume</h3>
                  <p className="text-[10px] uppercase font-black tracking-widest text-muted">Previewing Internal Document</p>
                </div>
              </div>
              <button
                onClick={() => setShowResume(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1 bg-neutral-900/50">
              <iframe
                src={heroConfig.resume.view}
                className="w-full h-full border-none"
                title="Professional Resume"
              />
            </div>
            <div className="p-4 border-t border-white/10 bg-white/5 flex justify-end">
              <a
                href={heroConfig.resume.download}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-bold transition-all hover:bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <Download className="w-4 h-4" />
                Download Direct
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '0.9s' }}
      >
        <span className="text-label" style={{ color: 'var(--text-muted)' }}>
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-white/[0.03] rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-white/[0.03] rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-white/[0.03] rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-white/[0.03] rounded-br-2xl" />
    </section>
  );
}
