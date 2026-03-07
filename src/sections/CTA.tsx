import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Github, Linkedin, Download, FileText, ArrowRight } from 'lucide-react';
import { ctaConfig } from '@/config';

export function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('Resume download started! (Demo - connect real file in production)');
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div 
            className={cn(
              'rounded-3xl p-8 lg:p-12 transition-all duration-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ 
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <span 
                className="text-caption inline-block mb-4"
                style={{ color: 'var(--accent-blue)' }}
              >
                Get In Touch
              </span>
              <h2 
                className="text-h1 font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Let's Build Something{' '}
                <span className="gradient-text">Amazing</span>
              </h2>
              <p 
                className="text-body-lg max-w-xl mx-auto"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Open to discussing new projects, creative ideas, or opportunities
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {/* Download Resume */}
              <div 
                className="p-6 rounded-2xl"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))'
                    }}
                  >
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-h3 font-semibold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Download Resume
                    </h3>
                    <p 
                      className="text-body-sm mb-4"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      Get my complete professional profile
                    </p>
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="btn btn-primary w-full"
                    >
                      {isDownloading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download CV</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div 
                className="p-6 rounded-2xl"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-green)20' }}
                  >
                    <Mail 
                      className="w-5 h-5" 
                      style={{ color: 'var(--accent-green)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-h3 font-semibold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Email Me
                    </h3>
                    <p 
                      className="text-body-sm mb-4"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      Let's discuss your project
                    </p>
                    <a
                      href={`mailto:${ctaConfig.email}`}
                      className="btn btn-outline w-full group"
                    >
                      <span className="truncate">{ctaConfig.email}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <span 
                className="text-body-sm mr-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Or connect via:
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)'
                }}
                aria-label="GitHub"
              >
                <Github 
                  className="w-5 h-5" 
                  style={{ color: 'var(--text-secondary)' }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)'
                }}
                aria-label="LinkedIn"
              >
                <Linkedin 
                  className="w-5 h-5" 
                  style={{ color: 'var(--text-secondary)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
