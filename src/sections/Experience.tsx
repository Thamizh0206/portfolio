import { useReveal } from '@/hooks/useReveal';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceConfig } from '@/config';

export function Experience() {
  const { ref, isRevealed } = useReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="relative py-20 sm:py-24 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 opacity-15"
        style={{
          background: 'radial-gradient(circle, #4ade80 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div
            className={`transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <span className="text-label flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              {experienceConfig.label}
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            </span>
          </div>

          <h2
            className={`text-section font-bold mt-4 mb-4 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '0.1s', color: 'var(--text-primary)' }}
          >
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-3xl mx-auto">
          {experienceConfig.items.map((exp, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 mb-8 transition-all duration-500 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: `${0.2 + i * 0.1}s`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(74, 222, 128, 0.1)' }}
                  >
                    <Briefcase className="w-6 h-6" style={{ color: 'var(--accent-green)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {exp.title}
                    </h3>
                    <p className="text-body mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg h-fit"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
                >
                  <Calendar className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                  <span className="text-sm font-mono" style={{ color: 'var(--text-tertiary)' }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-body mb-6" style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
              </p>

              {/* Achievements */}
              <div
                className="p-6 rounded-xl"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
              >
                <h4 className="text-label mb-4" style={{ color: 'var(--text-muted)' }}>
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-green)' }} />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
