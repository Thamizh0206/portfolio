import { useReveal } from '@/hooks/useReveal';
import { Brain, Zap, Database, Shield, Rocket } from 'lucide-react';
import { aboutConfig } from '@/config';

const highlights = [
  { icon: Shield, label: 'Cyber AI', desc: 'Anomaly detection & threat intelligence' },
  { icon: Brain, label: 'Generative Systems', desc: 'Expertise in LLMs, RAG, & Prompting' },
  { icon: Zap, label: 'Real-Time MLOps', desc: 'Processing 10M+ daily events' },
  { icon: Database, label: 'Cloud Intelligence', desc: 'ML pipelines on AWS, GCP, & Azure' },
];

export function About() {
  const { ref: sectionRef, isRevealed } = useReveal({ threshold: 0.1 });

  return (
    <section id="about" className="section-premium relative overflow-hidden py-32 sm:py-48" style={{ background: 'var(--bg-primary)' }}>
      {/* Immersive Background Decor */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)', filter: 'blur(150px)' }}
      />
      <div className="absolute -bottom-20 -left-20 select-none pointer-events-none opacity-[0.03] text-[25vw] font-black leading-none uppercase tracking-tighter whitespace-nowrap">
        VISION
      </div>

      <div className="container-premium relative z-10">
        <div ref={sectionRef} className="max-w-7xl mx-auto">

          {/* Top Tier: Vision & Portrait */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">

            {/* Header & Subtitle (Left) */}
            <div className={`lg:col-span-7 text-left transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`flex items-center justify-start gap-4 mb-8 transition-all duration-700 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-12 h-px bg-indigo-500" />
                <span className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
                  {aboutConfig.label}
                </span>
              </div>

              <h2 className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-12 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                I ARCHITECT <br />
                <span className="gradient-text italic">NEXT-GEN INTELLIGENCE</span>
              </h2>

              <p className={`text-xl sm:text-2xl leading-relaxed max-w-3xl transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ color: 'var(--text-tertiary)', transitionDelay: '0.2s' }}>
                {aboutConfig.description}
              </p>
            </div>

            {/* Portrait (Right) */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group bg-neutral-900">
                {/* Background Accents */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80" />
                <div className="absolute -inset-20 bg-indigo-500/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />

                {/* Photo */}
                <img
                  src="/images/profile.jpg"
                  alt="Engineering Profile"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                />

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-10 left-10 z-20 transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">ENGINEER.ACTIVE</span>
                  </div>
                  <h4 className="text-2xl font-black text-white italic">THAMIZH R.</h4>
                </div>
              </div>

              {/* Decorative Technical Plate */}
              <div className="mt-8 p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-indigo-500/30 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-indigo-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted">Core Specialization</p>
                    <p className="text-sm font-bold text-white uppercase italic">Generative Systems</p>
                  </div>
                </div>
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Bottom Tier: Highlights */}
          <div className={`space-y-12 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.4s' }}>

            {/* Quick Highlights */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 px-2">
                <div className="w-8 h-px bg-white/10" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">Knowledge Domains</h3>
                <div className="flex-grow h-px bg-white/10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                      <item.icon className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
