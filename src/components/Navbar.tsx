import { useState, useEffect } from 'react';
import { Menu, X, Search, ShieldCheck, Download, Sparkles, Orbit } from 'lucide-react';
import AvatarLogo from './AvatarLogo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onSearchOpen: () => void;
  onResumeOpen: () => void;
  themePreset: 'stealth' | 'cyber';
  setThemePreset: (preset: 'stealth' | 'cyber') => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  onSearchOpen,
  onResumeOpen,
  themePreset,
  setThemePreset,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to handle Auto-Hide on scroll down & Show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for transparent to dense glass background
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> Hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> Show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
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

  const toggleThemePreset = () => {
    setThemePreset(themePreset === 'stealth' ? 'cyber' : 'stealth');
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-28'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glassmorphic bg-black/75 px-6 py-3 border-white/10 border shadow-2xl' 
            : 'bg-transparent px-4 py-4 border-transparent border'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand Signature */}
          <div 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8A2EFF] to-[#A6FF00] shadow-lg flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black rounded-full scale-[0.98] z-0" />
              <div className="absolute inset-[1px] rounded-full overflow-hidden z-10">
                <AvatarLogo className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-white select-none block leading-none">
                HETSH
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#A6FF00] font-bold block mt-0.5">
                UDHNAWALA
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-pointer ${
                  activeSection === link.id
                    ? 'text-white bg-white/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {/* Neon Indicator Dot under active */}
                {activeSection === link.id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#A6FF00] shadow-[0_0_8px_#A6FF00]" />
                )}
                {/* Hover slide effect */}
                <span className="absolute inset-0 w-full h-full rounded-lg bg-white/5 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-[-1]" />
              </button>
            ))}
          </div>

          {/* Nav Controls (Theme, Search, Resume, Mobile Menu Toggle) */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={onSearchOpen}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
              title="Search Portfolio"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Tactile Theme Preset Toggle */}
            <button
              onClick={toggleThemePreset}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer flex items-center gap-1.5 text-xs font-mono group"
              title={`Switch Theme: currently ${themePreset}`}
            >
              <Sparkles className={`w-4 h-4 transition-transform duration-500 group-hover:rotate-180 ${
                themePreset === 'cyber' ? 'text-[#A6FF00] drop-shadow-[0_0_4px_#A6FF00]' : 'text-gray-400'
              }`} />
              <span className="hidden sm:inline capitalize font-semibold">{themePreset}</span>
            </button>

            {/* Premium Resume Button */}
            <button
              onClick={onResumeOpen}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 text-white text-xs font-mono font-medium border border-white/10 hover:border-[#A6FF00] hover:text-[#A6FF00] transition-all duration-300 shadow-md group cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              RESUME
            </button>

            {/* Mobile Navigation Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Menu) */}
      <div
        className={`lg:hidden fixed top-24 left-4 right-4 z-50 rounded-2xl glassmorphic bg-black/95 border border-white/10 p-6 shadow-2xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeSection === link.id
                  ? 'text-[#A6FF00] bg-white/5 pl-6'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 pl-4'
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-2 h-2 rounded-full bg-[#A6FF00] shadow-[0_0_8px_#A6FF00]" />
              )}
            </button>
          ))}
          <div className="h-[1px] bg-white/5 my-2" />
          <button
            onClick={() => {
              onResumeOpen();
              setIsOpen(false);
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-rose-500 to-[#A6FF00] p-[1px] flex items-center justify-center font-bold text-sm text-white cursor-pointer"
          >
            <div className="bg-black w-full h-full py-2.5 rounded-[11px] flex items-center justify-center gap-2">
              <Download className="w-4 h-4 text-[#A6FF00]" />
              <span>Download Resume</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
