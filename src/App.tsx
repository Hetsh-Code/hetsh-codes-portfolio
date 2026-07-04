import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [themePreset, setThemePreset] = useState<'stealth' | 'cyber'>('stealth');

  // Monitor scroll height to trigger Navbar Active Section highlights automatically
  useEffect(() => {
    const handleScrollUpdate = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'experience', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200; // Trigger slightly before the section hits top

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollUpdate);
    return () => window.removeEventListener('scroll', handleScrollUpdate);
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative min-h-screen text-white select-none ${
      themePreset === 'cyber' ? 'theme-cyber' : 'theme-stealth'
    }`}>
      {/* 1. Custom Interactive Glow Trail Cursor */}
      <Cursor />

      {/* 2. 3D Parallax Space Grid Background */}
      <Background />

      {/* 3. Sliding Translucent Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onSearchOpen={() => setSearchOpen(true)}
        onResumeOpen={() => setResumeOpen(true)}
        themePreset={themePreset}
        setThemePreset={setThemePreset}
      />

      {/* MAIN SECTIONS WRAPPER */}
      <main className="relative z-10">
        {/* 4. Split Fullscreen Premium Hero */}
        <Hero
          onContactClick={() => handleNavigate('contact')}
          onPortfolioClick={() => handleNavigate('portfolio')}
          onResumeOpen={() => setResumeOpen(true)}
        />

        {/* 5. Asymmetric Bento Biography */}
        <About />

        {/* 6. Glowing Circular Software Dashboard */}
        <Skills />

        {/* 7. Interactive Spec-Showcase Portfolio */}
        <Portfolio />

        {/* 8. 12-Solutions Glass Services */}
        <Services />

        {/* 9. Vertical Milestone Experience */}
        <Timeline />

        {/* 10. Auto-Scrolling Star Testimonials */}
        <Testimonials />

        {/* 11. Form Validation terminal & 3D Canvas Globe Contact */}
        <Contact />
      </main>

      {/* 12. Luxury Glass Divider Footer */}
      <Footer onLinkClick={handleNavigate} />

      {/* 13. Floating Spotlight Search Overlay */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onProjectSelect={(project) => {
          // Trigger the portfolio modal through a temporary click/event simulated dispatch if needed,
          // but we can simply handle selected project modal in Portfolio component,
          // or scroll the user straight to portfolio section and open the modal!
          const portfolioSec = document.getElementById('portfolio');
          if (portfolioSec) {
            handleNavigate('portfolio');
            // We'll dispatch a custom event that Portfolio component is listening to!
            // This is a highly robust custom-event routing communication trick.
            const searchEvent = new CustomEvent('openProjectDetail', { detail: project });
            window.dispatchEvent(searchEvent);
          }
        }}
        onSectionNavigate={handleNavigate}
      />

      {/* 14. Printable Spec-Sheet Resume */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* 15. Fixed Live Status Indicator (from Atmospheric / Immersive Media design) */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2 pointer-events-none select-none">
        <div className="p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <div className="w-6 h-6 rounded-full bg-[#A6FF00] shadow-[0_0_15px_#A6FF00] animate-pulse"></div>
        </div>
        <p className="text-[9px] uppercase tracking-tighter text-white font-black opacity-40">Live Status</p>
      </div>

      {/* Cyber theme overrides using CSS in styles tag */}
      <style>{`
        /* Dynamic Preset Switcher styling classes */
        .theme-cyber {
          --color-neon-lime: #ff2d55;
          --color-[#A6FF00]: #ff2d55;
          --color-electric-purple: #00F0FF;
        }

        .theme-cyber #custom-cursor-dot {
          background-color: #A6FF00 !important;
          box-shadow: 0 0 10px #A6FF00;
        }

        .theme-cyber #custom-cursor-ring {
          border-color: #8A2EFF !important;
        }
      `}</style>
    </div>
  );
}
