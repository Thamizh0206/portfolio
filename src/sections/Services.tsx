import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Code2, Brain, Bot, Cloud, Layers, ChevronRight } from 'lucide-react';
import { servicesConfig } from '@/config';

const iconMap: Record<string, any> = {
  Code2,
  Brain,
  Bot,
  Layers,
  Cloud,
};

export function Services() {
  const { ref, isRevealed } = useReveal({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = servicesConfig.categories;

  return (
    <section id="skills" className="section-premium relative" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <span className="text-label flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              {servicesConfig.label}
              <span className="w-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </span>
          </div>

          <h2
            className={`text-section font-bold mt-4 mb-4 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '0.1s', color: 'var(--text-primary)' }}
          >
            {servicesConfig.heading.split(' ').map((word, i) => (
              word === 'ML' || word === 'Deep' || word === 'AI' || word === 'Stack' || word === 'Landscape' ?
                <span key={i} className="gradient-text">{word} </span> : word + ' '
            ))}
          </h2>

          <p
            className={`text-body-lg transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Proficient in modern AI/ML technologies with focus on production-ready solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, i) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.title}
                className={`group relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: `${0.3 + i * 0.1}s`,
                  background: 'var(--bg-card)',
                  borderColor: activeCard === i ? `${category.color}40` : 'var(--border)',
                  boxShadow: activeCard === i ? `0 0 60px -20px ${category.color}30` : 'none',
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 60%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${category.color}15` }}
                      >
                        <Icon
                          className="w-6 h-6 transition-colors"
                          style={{ color: category.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-card font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {category.title}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-5" style={{ color: 'var(--text-tertiary)' }}>
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg border transition-all duration-200"
                        style={{
                          background: hoveredSkill === skill ? `${category.color}15` : 'var(--bg-tertiary)',
                          borderColor: hoveredSkill === skill ? `${category.color}40` : 'var(--border)',
                          color: hoveredSkill === skill ? category.color : 'var(--text-secondary)',
                        }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                  style={{
                    width: activeCard === i ? '100%' : '0%',
                    background: `linear-gradient(90deg, ${category.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
