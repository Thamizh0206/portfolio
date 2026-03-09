import { useReveal } from '@/hooks/useReveal';
import { GraduationCap, Award, ExternalLink, Zap, Database } from 'lucide-react';
import { educationConfig } from '@/config';

export function Education() {
  const { ref: eduRef, isRevealed: eduRevealed } = useReveal({ threshold: 0.1 });
  const { ref: certRef, isRevealed: certRevealed } = useReveal({ threshold: 0.1 });

  return (
    <section id="education" className="section-premium relative py-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Background Accents */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      <div className="container-premium relative z-10">
        {/* --- EDUCATION BLOCK --- */}
        <div ref={eduRef} className="mb-32 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 ${eduRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <span className="text-label flex items-center gap-3">
                  <span className="w-8 h-px bg-indigo-500" />
                  Academic Excellence
                </span>
              </div>
              <h2
                className={`text-section font-bold mt-4 transition-all duration-700 ${eduRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '0.1s', color: 'var(--text-primary)' }}
              >
                My <span className="gradient-text">Education</span>
              </h2>
            </div>

            <div className={`hidden md:block transition-all duration-700 ${eduRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center rotate-12"
                style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <GraduationCap className="w-10 h-10 text-indigo-400" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {educationConfig.educationItems.map((edu, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-3xl transition-all duration-700 ${eduRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{
                  transitionDelay: `${idx * 0.2}s`,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-md text-[10px] font-bold tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase">
                        {edu.period}
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium opacity-80" style={{ color: 'var(--accent)' }}>
                      {edu.institution}
                    </p>
                  </div>

                  {edu.details && (
                    <div className="md:text-right">
                      <div className="inline-block px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="block text-xs uppercase tracking-widest text-muted mb-1">Performance</span>
                        <span className="text-xl font-bold gradient-text">{edu.details}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CERTIFICATIONS BLOCK --- */}
        <div ref={certRef} className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 ${certRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <span className="text-label flex items-center gap-3">
                  <span className="w-8 h-px bg-cyan-500" />
                  Continuous Learning
                </span>
              </div>
              <h2
                className={`text-section font-bold mt-4 transition-all duration-700 ${certRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '0.1s', color: 'var(--text-primary)' }}
              >
                Professional <span className="gradient-text">Certifications</span>
              </h2>
            </div>

            <div className={`hidden md:block transition-all duration-700 ${certRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center -rotate-12"
                style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.2)' }}>
                <Award className="w-10 h-10 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationConfig.certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 rounded-[2rem] transition-all duration-700 hover:-translate-y-2 ${certRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-500">
                      {cert.provider === 'Coursera' && <Award className="w-7 h-7 text-blue-400" />}
                      {cert.provider === 'NPTEL' && <GraduationCap className="w-7 h-7 text-green-400" />}
                      {cert.provider === 'Simplilearn' && <Zap className="w-7 h-7 text-orange-400" />}
                      {cert.provider.includes('IIT') && <Database className="w-7 h-7 text-red-400" />}
                    </div>
                    <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-muted group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                      Verified
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400/80">
                      {cert.provider}
                    </p>
                    <h4 className="text-xl font-bold leading-tight group-hover:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>
                      {cert.name}
                    </h4>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">View Credential</span>
                    <ExternalLink className="w-4 h-4 text-muted group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
