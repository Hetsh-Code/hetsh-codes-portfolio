import React from 'react';

interface AvatarLogoProps {
  className?: string;
}

export default function AvatarLogo({ className = "w-full h-full" }: AvatarLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`select-none ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Premium Neon Cyber Gradients */}
        <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A6FF00" />
          <stop offset="50%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#8A2EFF" />
        </linearGradient>

        <linearGradient id="bgLuxury" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0e12" />
          <stop offset="100%" stopColor="#030406" />
        </linearGradient>

        <linearGradient id="signatureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#A6FF00" />
        </linearGradient>

        {/* Circular text path mapping for HETSH UDHNAWALA */}
        <path id="circularTextPath" d="M 50, 50 m -39, 0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" />
      </defs>

      {/* Dark premium glass circle background */}
      <circle cx="50" cy="50" r="48" fill="url(#bgLuxury)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
      
      {/* Dynamic outer neon ring accents */}
      <circle cx="50" cy="50" r="44.5" fill="none" stroke="url(#cyberGrad)" strokeWidth="0.8" opacity="0.35" />
      <circle cx="50" cy="50" r="44.5" fill="none" stroke="#A6FF00" strokeWidth="1.5" strokeDasharray="12 40" strokeLinecap="round" opacity="0.8" />
      <circle cx="50" cy="50" r="44.5" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="8 60" strokeLinecap="round" opacity="0.8" transform="rotate(180 50 50)" />

      {/* Rotating / Static Curved Text wrapping around the circle */}
      <text fill="url(#signatureGrad)" fontSize="5.2" fontWeight="900" letterSpacing="2" className="font-mono uppercase select-none">
        <textPath href="#circularTextPath" startOffset="0%">
          • HETSH UDHNAWALA • DESIGNER • DEVELOPER • EDITOR •
        </textPath>
      </text>

      {/* Beautiful Center Typography Stacking */}
      <g transform="translate(50, 50)">
        {/* Subtle geometric grid markers */}
        <line x1="-20" y1="0" x2="20" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="23" fill="none" stroke="rgba(166, 255, 0, 0.08)" strokeWidth="0.5" strokeDasharray="2 3" />
        
        {/* Sparkle top right */}
        <path d="M12,-12 L14,-10 L12,-8 L10,-10 Z" fill="#A6FF00" opacity="0.7" />
        {/* Sparkle bottom left */}
        <path d="M-14,10 L-12,12 L-14,14 L-16,12 Z" fill="#00E5FF" opacity="0.7" />

        {/* Elegant typography "HETSH" */}
        <text 
          x="0" 
          y="-3" 
          textAnchor="middle" 
          fill="#ffffff" 
          fontSize="9.5" 
          fontWeight="900" 
          letterSpacing="2.5" 
          fontFamily="system-ui, -apple-system, sans-serif"
          className="tracking-widest"
        >
          HETSH
        </text>

        {/* Modern high-contrast display text "UDHNAWALA" */}
        <text 
          x="0" 
          y="7" 
          textAnchor="middle" 
          fill="url(#cyberGrad)" 
          fontSize="6.8" 
          fontWeight="800" 
          letterSpacing="1.8" 
          fontFamily="system-ui, -apple-system, sans-serif"
          filter="url(#logoGlow)"
          className="tracking-wider"
        >
          UDHNAWALA
        </text>

        {/* Est / Badge line */}
        <text 
          x="0" 
          y="15" 
          textAnchor="middle" 
          fill="rgba(255,255,255,0.4)" 
          fontSize="3.8" 
          fontWeight="bold" 
          letterSpacing="1.2" 
          fontFamily="monospace"
        >
          EST. 2022
        </text>
      </g>
    </svg>
  );
}
