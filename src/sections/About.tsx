import { useReveal } from '@/hooks/useReveal';
import { aboutConfig } from '@/config';

export function About() {
  const { ref: sectionRef, isRevealed } = useReveal({ threshold: 0.1 });

  return (
    <section id="about" className="section-premium relative overflow-hidden py-10 sm:py-16" style={{ background: 'var(--bg-primary)' }}>
      {/* Immersive Background Decor */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)', filter: 'blur(150px)' }}
      />

      <div className="container-premium relative z-10">
        <div ref={sectionRef} className="max-w-7xl mx-auto">

          {/* Top Tier: Vision & Portrait */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-10 lg:mb-16">

            {/* Header & Subtitle (Left) */}
            <div className={`lg:col-span-7 text-left transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`flex items-center justify-start gap-4 mb-4 transition-all duration-700 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-12 h-px bg-indigo-500" />
                <span className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
                  {aboutConfig.label}
                </span>
              </div>

              <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
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

                <div className="absolute bottom-10 left-10 z-20 transition-transform duration-700 group-hover:-translate-y-2">
                  <h4 className="text-2xl font-black text-white italic">THAMIZH R.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
