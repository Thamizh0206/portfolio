import { useReveal } from '@/hooks/useReveal';
import { Award, Zap, Database, ArrowUpRight, School, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { educationConfig } from '@/config';

export function Education() {
  const { ref: eduRef, isRevealed: eduRevealed } = useReveal({ threshold: 0.1 });
  const { ref: certRef, isRevealed: certRevealed } = useReveal({ threshold: 0.1 });

  return (
    <section id="education" className="relative py-20 sm:py-24 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Immersive Atmospheric Graphics */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* --- LEFT SIDE: Sticky Context --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
            <div className={`transition-all duration-1000 ${eduRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Curriculum Foundation</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.9] text-white mb-8">
                Intellectual <br />
                <span className="gradient-text italic">Continuum</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed max-w-sm mb-12">
                A systematic progression through academic excellence and specialized technical validation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                  <div className="w-8 h-px bg-white/10" />
                  Key Achievements
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="block text-2xl font-black text-white">7.5</span>
                    <span className="text-[9px] font-bold text-muted uppercase tracking-widest">Aggregate CGPA</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="block text-2xl font-black text-white">10+</span>
                    <span className="text-[9px] font-bold text-muted uppercase tracking-widest">Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Scrollable Content --- */}
          <div className="lg:col-span-8 space-y-32">

            {/* Education Items */}
            <div ref={eduRef} className="space-y-8">
              {educationConfig.educationItems.map((edu, idx) => (
                <div
                  key={idx}
                  className={`group relative p-1 transition-all duration-1000 ${eduRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${idx * 0.2}s` }}
                >
                  <div className="relative p-10 sm:p-14 rounded-[3rem] bg-[#0A0A0B]/80 border border-white/5 backdrop-blur-3xl overflow-hidden hover:border-indigo-500/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <School className="w-48 h-48 -mr-12 -mt-12 rotate-12" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-10">
                        <span className="px-4 py-1 rounded-full text-[10px] font-black bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                          {edu.period}
                        </span>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Verified Record</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-12 pt-12 border-t border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                            <GraduationCap className="w-7 h-7 text-indigo-400/80" />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">{edu.institution}</p>
                            <p className="text-xs font-bold text-muted uppercase tracking-widest">Academic Authority</p>
                          </div>
                        </div>

                        {edu.details && (
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest mb-1">Status</span>
                            <span className="text-3xl font-black gradient-text tracking-tighter">{edu.details.split(': ')[1] || edu.details}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- FULL WIDTH: Certifications Subsection --- */}
        <div ref={certRef} className="mt-20 space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <h3 className={`text-4xl sm:text-6xl font-black text-white italic tracking-tighter transition-all duration-1000 ${certRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Verified Expertise
            </h3>
            <div className={`h-1 flex-1 bg-gradient-to-r from-indigo-500/20 via-white/5 to-transparent transition-all duration-1000 delay-300 ${certRevealed ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationConfig.certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-[1px] rounded-[2.5rem] transition-all duration-700 ${certRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                {/* Main Card Body */}
                <div className="relative h-full p-10 rounded-[2.5rem] bg-[#0A0A0C]/90 border border-white/5 backdrop-blur-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500">

                  {/* Glossy Sheen Overlay */}
                  <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                  {/* Architectural Index */}
                  <div className="absolute top-8 right-10 text-[10px] font-mono text-white/5 group-hover:text-indigo-500/40 transition-colors">
                    REF-ID / {String(i + 1).padStart(3, '0')}
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500">
                          {cert.provider === 'Coursera' && <Award className="w-8 h-8 text-blue-400" />}
                          {cert.provider === 'NPTEL' && <BookOpen className="w-8 h-8 text-emerald-400" />}
                          {cert.provider === 'Simplilearn' && <Zap className="w-8 h-8 text-orange-400" />}
                          {!['Coursera', 'NPTEL', 'Simplilearn'].includes(cert.provider) && <Database className="w-8 h-8 text-indigo-400" />}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">{cert.provider}</span>
                      </div>
                      <h4 className="text-2xl font-black text-white leading-tight group-hover:text-indigo-400 transition-colors">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Validated Asset</span>
                      </div>
                      <div className="text-[14px] font-black text-white/5 italic select-none">CERT.V1</div>
                    </div>
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
