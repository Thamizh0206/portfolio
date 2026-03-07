import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
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
  const { showOverlay } = usePageLoad(800);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <PageOverlay isVisible={showOverlay} />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Education />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
