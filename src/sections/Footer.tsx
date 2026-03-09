import { useReveal } from '@/hooks/useReveal';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { footerConfig } from '@/config';

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Mail
};

export function Footer() {
  const { ref, isRevealed } = useReveal({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className="relative py-12 lg:py-16 overflow-hidden"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          {/* Brand */}
          <div
            className={`lg:col-span-2 transition-all duration-600 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <a href="#" className="text-2xl font-bold mb-4 inline-block" style={{ color: 'var(--text-primary)' }}>
              <span className="gradient-text">{footerConfig.logo.split(' ')[0]}</span> {footerConfig.logo.split(' ').slice(1).join(' ')}
            </a>
            <p className="text-sm max-w-sm mb-6 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              {footerConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.iconName] || Mail;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/5"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Columns */}
          {footerConfig.columns.map((column, idx) => (
            <div
              key={column.title}
              className={`transition-all duration-600 delay-${(idx + 1) * 100} ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <h4 className="text-label mb-4" style={{ color: 'var(--text-muted)' }}>
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm flex items-center gap-1 group transition-colors hover:text-indigo-400"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 flex flex-col items-center justify-center transition-all duration-600 delay-300 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
