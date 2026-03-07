import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { footerConfig } from '@/config';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer 
      ref={ref} 
      className="py-12 lg:py-16"
      style={{ 
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          {/* Brand */}
          <div 
            className={cn(
              'lg:col-span-2 transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <a 
              href="#" 
              className="text-xl font-semibold mb-4 inline-block"
              style={{ color: 'var(--text-primary)' }}
            >
              {footerConfig.logo}
            </a>
            <p 
              className="text-body-sm max-w-sm mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {footerConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.iconName];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ 
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)'
                    }}
                    aria-label={social.label}
                  >
                    <Icon 
                      className="w-4 h-4" 
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={cn(
              'transition-all duration-600 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <h4 
              className="text-caption mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerConfig.columns[0]?.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-sm flex items-center gap-1 group transition-colors hover:text-[var(--accent-blue)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div 
            className={cn(
              'transition-all duration-600 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <h4 
              className="text-caption mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Technologies
            </h4>
            <ul className="space-y-3">
              {footerConfig.columns[1]?.links.map((link) => (
                <li key={link.label}>
                  <span
                    className="text-body-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={cn(
            'pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-600 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            {footerConfig.copyright}
          </p>
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            {footerConfig.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
