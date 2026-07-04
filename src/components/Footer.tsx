import React, { useState } from 'react';
import { Orbit, Send, Sparkles, Check, Linkedin, Youtube, Github, MessageSquare } from 'lucide-react';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;

    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-8 px-4 md:px-8 xl:px-12 overflow-hidden select-none">
      {/* Background Soft Glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A6FF00]/40 to-transparent shadow-[0_0_12px_#A6FF00]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start text-left">
          
          {/* Column 1: Branding Logo & Statement */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onLinkClick('home')}>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-rose-500 to-lime-400 p-[1px] shadow-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black rounded-[11px] group-hover:opacity-0 transition-opacity duration-300" />
                <Orbit className="w-5 h-5 text-white z-10 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-wider text-white block leading-none">
                  HETSH
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#A6FF00] font-bold block mt-0.5">
                  UDHNAWALA
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm mt-2">
              Award-winning premium portfolio and creative design services index. Building geometry-constructed visual standards and luxury dark interfaces for global innovators.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: <Linkedin className="w-4 h-4" />, url: 'https://www.linkedin.com/in/hetshcode/', title: 'LinkedIn' },
                { icon: <Github className="w-4 h-4" />, url: 'https://www.github.com/Hetsh-Code/', title: 'GitHub' },
                { icon: <Youtube className="w-4 h-4" />, url: 'https://www.youtube.com/@HetshCode', title: 'YouTube' },
                { icon: <MessageSquare className="w-4 h-4" />, url: 'https://wa.me/919023720637', title: 'WhatsApp' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-[#A6FF00] hover:border-[#A6FF00] hover:bg-white/5 transition-all cursor-pointer"
                  title={item.title}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links Directory */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[9px] text-[#A6FF00] font-bold tracking-widest block uppercase mb-6">
              // ARCHIVE_LINKS
            </span>
            <ul className="flex flex-col gap-3.5">
              {[
                { id: 'home', label: 'Home Node' },
                { id: 'about', label: 'About Bio' },
                { id: 'skills', label: 'Skills Index' },
                { id: 'portfolio', label: 'Works Archive' },
                { id: 'services', label: 'Solutions List' },
                { id: 'experience', label: 'Milestones' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="font-sans text-xs text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#A6FF00] transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Design Solutions Directory */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[9px] text-[#8A2EFF] font-bold tracking-widest block uppercase mb-6">
              // DESIGN_SOLUTIONS
            </span>
            <ul className="flex flex-col gap-3.5">
              {[
                { id: 'brand-identity', label: 'Brand Identity Systems' },
                { id: 'logo-design', label: 'Golden-Ratio Logo Drafting' },
                { id: 'packaging', label: 'Tactile CPG Packaging' },
                { id: 'ui-design', label: 'Luxury Dark Wallet UI' },
                { id: 'posters', label: 'Retro Vaporwave Poster Art' },
                { id: 'creative-consultation', label: 'Strategic Layout Audits' }
              ].map((sol, i) => (
                <li key={i}>
                  <button
                    onClick={() => onLinkClick('services')}
                    className="font-sans text-xs text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1 cursor-pointer group"
                  >
                    <span className="w-1 h-1 bg-[#8A2EFF]/30 group-hover:bg-[#8A2EFF] transition-colors rounded-sm" />
                    {sol.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscriber Hub */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[9px] text-[#FF2D55] font-bold tracking-widest block uppercase mb-6">
              // INTEL_FEED_SUBSCRIBE
            </span>
            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
              Subscribe to Hetsh's diagnostic design feed. Receive custom vector resources, layout mockups, and typography breakdowns.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 relative">
              <input
                type="email"
                placeholder="e.g. designer@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
                className="bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF2D55] flex-grow font-sans min-w-0"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="p-3 bg-[#FF2D55] hover:brightness-110 active:scale-95 text-white rounded-xl flex items-center justify-center cursor-pointer shadow-[0_0_10px_rgba(255,45,85,0.2)] transition-all"
                title="Subscribe Hub"
              >
                {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            {isSubscribed && (
              <span className="font-mono text-[8px] text-[#A6FF00] font-bold block mt-2 text-left">
                ✦ COORDINATES LOCKED. RESOURCE FEED CONNECTED!
              </span>
            )}
          </div>

        </div>

        {/* Lower copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <span className="font-mono text-[9px] text-gray-500 tracking-wider">
            © 2026 HETSH UDHNAWALA • GLOBAL DESIGN STANDARDS INTAKE. ALL VECTORS CONTEXT-SECURED.
          </span>
          <div className="flex gap-6">
            <button onClick={() => onLinkClick('home')} className="font-mono text-[8px] text-gray-500 hover:text-white transition-colors cursor-pointer uppercase">
              // TELEMETRY_RESET
            </button>
            <button onClick={() => onLinkClick('contact')} className="font-mono text-[8px] text-gray-500 hover:text-white transition-colors cursor-pointer uppercase">
              // SYSTEM_DIAGNOSTICS
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
