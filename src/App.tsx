import { useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { PageOverlay } from '@/components/PageOverlay';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

function App() {
  const { showOverlay } = usePageLoad(1500);

  // Global Smooth Scroll Effect
  useEffect(() => {
    // We can add a simple inertia scroll here if needed, 
    // but the most robust way without a library is 
    // to ensure all sections have proper reveal triggers.
    // I've already added parallax to individual components.
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Page Load Overlay */}
      <PageOverlay isVisible={showOverlay} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Education />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Noise Overlay */}
      <div className="noise" />
    </div>
  );
}

export default App;
