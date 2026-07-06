import React, { useState, useRef } from 'react';
import { ArrowUpRight, Github, Youtube, Linkedin, MessageSquare, Briefcase, BadgeCheck, Zap, Globe2, Sparkles, MessageCircle } from 'lucide-react';
import AvatarLogo from './AvatarLogo';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 127.14 96.36" 
    fill="currentColor" 
    className={props.className}
    style={props.style}
    {...props}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,73.1,0c.82.71,1.68,1.4,2.58,2a68.69,68.69,0,0,1-10.5,5,77.84,77.84,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.5,47,123.11,24.3,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

interface HeroProps {
  onContactClick: () => void;
  onPortfolioClick: () => void;
  onResumeOpen: () => void;
}

export default function Hero({ onContactClick, onPortfolioClick, onResumeOpen }: HeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates from -0.5 to 0.5 relative to center of the card
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    // Smooth 3D rotation angles (capped at max 15 degrees)
    setTilt({
      x: -y * 22, // tilt around x-axis
      y: x * 22   // tilt around y-axis
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 md:px-8 xl:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Deep Luxury Introduction & Call-to-actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-none">
          {/* Tagline */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-none border border-white/20 bg-white/5 backdrop-blur-md mb-6">
            <span className="font-mono text-xs tracking-[0.4em] text-[#A6FF00] font-bold uppercase">
              PREMIUM PORTFOLIO v2.0
            </span>
          </div>

          {/* Huge Neon-Glowing Typography pairing filled white & stroked outlined text */}
          <h1 
            className="font-display font-black text-6xl sm:text-7xl md:text-8xl xl:text-[100px] leading-[0.85] tracking-tighter uppercase italic text-white mix-blend-difference mb-4 select-none"
            style={{ textShadow: '0 0 40px rgba(138, 46, 255, 0.4)' }}
          >
            HETSH<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff', opacity: 0.8 }}>
              UDHNA
            </span>
            WALA
          </h1>

          <p className="text-2xl font-light tracking-wide text-white/80 mt-2 mb-6 font-display">
            Graphic Designer &amp; Visual Alchemist
          </p>

          <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-lg mb-10">
            Architecting high-end digital experiences for elite brands worldwide. Specializing in high-octane brand identities, luxury structural packaging, golden-ratio geometry logos, and pixel-perfect interactive digital interfaces.
          </p>

          {/* Immersive / Brutalist Action Buttons from the Design Guide */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Action 1: Hire Me */}
            <button
              onClick={onContactClick}
              data-cursor="lime"
              className="px-8 py-4 bg-[#A6FF00] text-black font-bold uppercase tracking-widest text-xs rounded-none border-r-4 border-b-4 border-black shadow-[4px_4px_0px_#8A2EFF] hover:shadow-[2px_2px_0px_#8A2EFF] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 cursor-pointer flex items-center gap-2 group font-mono"
            >
              HIRE ME NOW
              <ArrowUpRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Action 2: View Portfolio */}
            <button
              onClick={onPortfolioClick}
              data-cursor="purple"
              className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-widest text-xs backdrop-blur-md rounded-none hover:border-[#8A2EFF] hover:bg-white/5 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer group font-mono"
            >
              EXPLORE WORKS
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A2EFF] group-hover:bg-white transition-colors animate-ping" />
            </button>

            {/* Action 3: Download Resume */}
            <button
              onClick={onResumeOpen}
              data-cursor="red"
              className="px-8 py-4 bg-transparent text-gray-300 font-bold uppercase tracking-widest text-xs backdrop-blur-sm rounded-none border border-dashed border-white/15 hover:border-[#FF2D55] hover:text-white hover:bg-white/[0.02] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer font-mono"
            >
              GET RESUME
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Holographic 3D Floating Profile Card with premium theme adjustments */}
        <div className="lg:col-span-5 flex justify-center perspective-1000">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            id="holographic-card"
            className="w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] relative flex flex-col items-center text-center shadow-2xl select-none animate-[float_8s_ease-in-out_infinite] preserve-3d"
            style={{ 
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`,
              transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {/* Design HTML: Crimson Circular Ribbon PRO Badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF2D55] rounded-full flex items-center justify-center font-bold text-white text-[10px] rotate-12 shadow-lg z-30 animate-pulse">
              PRO
            </div>

            {/* Design HTML: Absolute Bottom-Left Micro Badge with 3 color bullets */}
            <div className="absolute -bottom-6 -left-6 bg-[#050505] border border-white/10 p-4 rounded-xl flex gap-3 shadow-xl z-30">
              <div className="w-2 h-2 rounded-full bg-[#A6FF00]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FF2D55]"></div>
              <div className="w-2 h-2 rounded-full bg-[#8A2EFF]"></div>
            </div>

            {/* Dynamic Glass Top Highlights */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8A2EFF]/30 to-transparent" />
            
            {/* Online Status Dot */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A6FF00]"></span>
              </span>
              <span className="font-mono text-[9px] tracking-wider text-gray-300 font-bold">LIVE BRIEFING</span>
            </div>

            {/* Profile Lens with Custom Avatar Logo in Circle */}
            <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-tr from-[#8A2EFF] via-[#FF2D55] to-[#A6FF00] shadow-2xl mb-6 mt-4 group">
              <div className="absolute inset-0 rounded-full bg-black scale-[0.98] z-0" />
              <div className="absolute inset-[2px] rounded-full overflow-hidden border border-white/10 shadow-inner z-10">
                <AvatarLogo className="w-full h-full transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Holographic orbital particles */}
              <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#A6FF00] shadow-[0_0_12px_#A6FF00] animate-ping" />
              <div className="absolute bottom-4 left-0 w-3 h-3 rounded-full bg-[#8A2EFF] shadow-[0_0_10px_#8A2EFF] animate-pulse" />
            </div>

            {/* Card Information */}
            <h3 className="font-display font-bold text-2xl text-white tracking-wide">
              Hetsh Udhnawala
            </h3>
            <p className="font-mono text-xs text-[#A6FF00] font-semibold tracking-widest mb-4 uppercase">
              PROFESSIONAL GRAPHIC DESIGNER
            </p>

            {/* Supporting Details */}
            <div className="w-full grid grid-cols-2 gap-2 mb-6 text-left">
              <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">Language</span>
                <span className="font-sans text-xs font-semibold text-white mt-1 flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                  English / Hindi
                </span>
              </div>
              <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col">
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider">Freelance</span>
                <span className="font-sans text-xs font-semibold text-[#A6FF00] mt-1 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#A6FF00]" />
                  Available Now
                </span>
              </div>
            </div>

            {/* Glowing Badges Grid */}
            <div className="w-full flex flex-col gap-2 mb-6">
              {/* Badge 1: Verified Designer */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/5 bg-[#8A2EFF]/5">
                <BadgeCheck className="w-5 h-5 text-[#8A2EFF] filter drop-shadow-[0_0_5px_#8A2EFF]" />
                <div className="text-left">
                  <span className="block font-sans text-xs font-bold text-white leading-none">Verified Premium Designer</span>
                  <span className="block font-mono text-[8px] text-gray-400 tracking-wider mt-0.5">GLOBAL ART SYNDICATE</span>
                </div>
              </div>

              {/* Badge 2: Creative Thinker */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/5 bg-[#A6FF00]/5">
                <Zap className="w-5 h-5 text-[#A6FF00] filter drop-shadow-[0_0_5px_#A6FF00]" />
                <div className="text-left">
                  <span className="block font-sans text-xs font-bold text-white leading-none">Creative Visionary Architect</span>
                  <span className="block font-mono text-[8px] text-gray-400 tracking-wider mt-0.5">GOLDEN RATIO GEOMETRIES</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full h-[1px] bg-white/5 mb-4" />
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/hetshcode/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.github.com/Hetsh-Code/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@HetshCode" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919023720637" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href="https://discord.gg/b4UjXU83Rh" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-[#5865F2] hover:bg-[#5865F2]/10 transition-colors cursor-pointer"
                title="Discord"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
