import { cn } from '@/lib/utils';
import { siteConfig } from '@/config';

interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="flex flex-col items-center gap-4">
        <span 
          className="text-xl font-semibold animate-pulse"
          style={{ color: 'var(--text-primary)' }}
        >
          {siteConfig.title?.split('|')[0].trim() || 'Loading'}
        </span>
        <div 
          className="w-32 h-0.5 rounded-full overflow-hidden"
          style={{ background: 'var(--border-color)' }}
        >
          <div 
            className="h-full animate-[slide_1s_ease-in-out_infinite] w-1/3 rounded-full"
            style={{ background: 'var(--accent-blue)' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
