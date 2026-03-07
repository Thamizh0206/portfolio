import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { navigationConfig } from '@/config';
import { Menu, X } from 'lucide-react';

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
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-[var(--bg-primary)]/90 backdrop-blur-lg border-b border-[var(--border-color)]' 
            : 'bg-transparent'
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="text-lg font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {navigationConfig.logo}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium transition-colors hover:text-[var(--accent-blue)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={navigationConfig.contactHref}
                onClick={(e) => handleNavClick(e, navigationConfig.contactHref)}
                className="btn btn-primary text-sm"
              >
                {navigationConfig.contactLabel}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ 
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)'
              }}
              aria-label="Toggle menu"
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
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        )}
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navigationConfig.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                'text-2xl font-semibold transition-all duration-300',
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ 
                color: 'var(--text-primary)',
                transitionDelay: `${i * 50}ms`
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={navigationConfig.contactHref}
            onClick={(e) => handleNavClick(e, navigationConfig.contactHref)}
            className={cn(
              'btn btn-primary mt-4 transition-all duration-300',
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: '250ms' }}
          >
            {navigationConfig.contactLabel}
          </a>
        </div>
      </div>
    </>
  );
}
