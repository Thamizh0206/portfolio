import { useEffect, useState } from 'react';

interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative">
          <span className="text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            <span className="gradient-text">T</span>R
          </span>
          {/* Pulse Ring */}
          <div className="absolute inset-0 -m-4">
            <div className="w-full h-full rounded-full border border-indigo-500/30 animate-ping" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-0.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              background: 'linear-gradient(90deg, var(--accent), var(--accent-secondary))',
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Loading Text */}
        <span className="text-label" style={{ color: 'var(--text-muted)' }}>
          Loading experience...
        </span>
      </div>
    </div>
  );
}
