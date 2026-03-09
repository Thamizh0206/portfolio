import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '@/config';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
          }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              <span className="gradient-text">{navigationConfig.logo.charAt(0)}</span>
              {navigationConfig.logo.substring(1)}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-premium text-sm"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
              style={{
                background: isMenuOpen ? 'var(--bg-tertiary)' : 'transparent',
                border: '1px solid var(--border)',
              }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navigationConfig.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-3xl font-bold transition-all duration-500 px-6 py-3 rounded-xl ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ color: 'var(--text-primary)', transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`btn-premium mt-6 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '250ms' }}
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </>
  );
}
