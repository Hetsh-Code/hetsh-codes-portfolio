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
        {/* Background Gradient: Rich Green foliage/ambient studio feel */}
        <radialGradient id="avatarBg" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
          <stop offset="0%" stopColor="#4a7b2c" />
          <stop offset="70%" stopColor="#315c1b" />
          <stop offset="100%" stopColor="#1e3e0f" />
        </radialGradient>
        
        {/* Skin Gradient - Smooth 3D-like shading */}
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffdfc4" />
          <stop offset="60%" stopColor="#fcae85" />
          <stop offset="100%" stopColor="#e38d62" />
        </linearGradient>

        {/* Neck Shadow Gradient */}
        <linearGradient id="neckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bc724a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#bc724a" stopOpacity="0" />
        </linearGradient>

        {/* Hair Shading & Highlights - Rich warm 3D brown */}
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#634027" />
          <stop offset="50%" stopColor="#472a15" />
          <stop offset="100%" stopColor="#251206" />
        </linearGradient>

        <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stopColor="#92623e" />
          <stop offset="100%" stopColor="#472a15" stopOpacity="0" />
        </linearGradient>
        
        {/* Vibrant Blue Eye Iris Gradient */}
        <radialGradient id="eyeIris" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#64d8ff" />
          <stop offset="40%" stopColor="#0091ea" />
          <stop offset="85%" stopColor="#01579b" />
          <stop offset="100%" stopColor="#002144" />
        </radialGradient>

        {/* Soft Drop Shadow for glasses and elements */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>

        <filter id="headphoneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.5" />
        </filter>

        {/* Vertical stripes pattern for background texture */}
        <pattern id="verticalStripes" width="4" height="100" patternUnits="userSpaceOnUse">
          <line x1="2" y1="0" x2="2" y2="100" stroke="#254d14" strokeWidth="0.8" opacity="0.35" />
        </pattern>
      </defs>

      {/* Circle Background */}
      <circle cx="50" cy="50" r="49" fill="url(#avatarBg)" />
      {/* Background Vertical Texture */}
      <circle cx="50" cy="50" r="49" fill="url(#verticalStripes)" />

      {/* Neck (Skin) */}
      <rect x="42.5" y="73" width="15" height="16" fill="#fcae85" rx="5" />
      {/* Neck Shadow under chin */}
      <path d="M42.5 73.5 C46 78, 54 78, 57.5 73.5" fill="none" stroke="url(#neckShadow)" strokeWidth="6" strokeLinecap="round" />

      {/* Red Crewneck Shirt */}
      <path d="M23 88 C30 83.5, 39 82, 50 82 C61 82, 70 83.5, 77 88 L77 100 L23 100 Z" fill="#cf3324" />
      {/* Dark Red neckline border with shadow details */}
      <path d="M38 84 C41 86.5, 59 86.5, 62 84" fill="none" stroke="#921a11" strokeWidth="2" strokeLinecap="round" />

      {/* Cute Head & Face Shape */}
      <path d="M29.5 46.5 C29.5 32.5, 70.5 32.5, 70.5 46.5 C70.5 61.5, 63.5 73, 50 73 C36.5 73, 29.5 61.5, 29.5 46.5 Z" fill="url(#skinGrad)" />

      {/* Blush Cheeks (Gives a warm glowing smile depth) */}
      <ellipse cx="34" cy="60" rx="5" ry="3.5" fill="#f4828e" opacity="0.35" />
      <ellipse cx="66" cy="60" rx="5" ry="3.5" fill="#f4828e" opacity="0.35" />

      {/* Ears */}
      <circle cx="28.5" cy="53" r="5.2" fill="#fcae85" />
      <circle cx="71.5" cy="53" r="5.2" fill="#fcae85" />

      {/* Expressive Big Eyes (White of eyes) */}
      <ellipse cx="37" cy="52" rx="7.8" ry="6.2" fill="#ffffff" />
      <ellipse cx="63" cy="52" rx="7.8" ry="6.2" fill="#ffffff" />
      {/* Subtle eye shadow under top eyelids */}
      <path d="M29.5 50.5 C32 48.5, 42 48.5, 44.5 50.5" fill="none" stroke="#bc724a" strokeWidth="1" opacity="0.3" />
      <path d="M55.5 50.5 C58 48.5, 68 48.5, 70.5 50.5" fill="none" stroke="#bc724a" strokeWidth="1" opacity="0.3" />
      
      {/* Eye Irises (Blue) */}
      <circle cx="37" cy="52" r="5" fill="url(#eyeIris)" />
      <circle cx="63" cy="52" r="5" fill="url(#eyeIris)" />

      {/* Inner Pupils (Deep dark blue/black) */}
      <circle cx="37" cy="52" r="2.8" fill="#03111c" />
      <circle cx="63" cy="52" r="2.8" fill="#03111c" />

      {/* Sparkle Highlights for cute/lively appearance */}
      <circle cx="35.5" cy="50" r="1.4" fill="#ffffff" />
      <circle cx="61.5" cy="50" r="1.4" fill="#ffffff" />
      <circle cx="38.8" cy="54" r="0.7" fill="#ffffff" opacity="0.9" />
      <circle cx="64.8" cy="54" r="0.7" fill="#ffffff" opacity="0.9" />

      {/* Eyebrows */}
      <path d="M30.5 44 C32 41.5, 41 41.5, 43.5 43.5" fill="none" stroke="#422511" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M69.5 44 C68 41.5, 59 41.5, 56.5 43.5" fill="none" stroke="#422511" strokeWidth="2.2" strokeLinecap="round" />

      {/* Nose (Soft round form) */}
      <path d="M47.5 57.5 C47.5 55, 52.5 55, 52.5 57.5 C52.5 60.2, 47.5 60.2, 47.5 57.5" fill="#e38d62" opacity="0.8" />
      <path d="M48.5 59 C49.5 59.8, 50.5 59.8, 51.5 59" fill="none" stroke="#bc724a" strokeWidth="1" strokeLinecap="round" />

      {/* Gentle closed smile */}
      <path d="M40.5 62 Q50 67.8 59.5 62" fill="none" stroke="#3d1d0c" strokeWidth="2.8" strokeLinecap="round" />

      {/* Fluffy Layered Brown Hair (Drawn precisely based on the image's cute short messy bangs) */}
      {/* Hair base/underlayer */}
      <path d="M25 43 C23 29, 35 18, 50 18 C65 18, 77 29, 75 43 C77 43, 77 46, 75 47 C73 39, 68 31, 50 31 C32 31, 27 39, 25 47 C23 46, 23 43, 25 43 Z" fill="url(#hairGrad)" />
      
      {/* Hair Highlights */}
      <path d="M33 24 C40 20, 60 20, 67 24 C60 22, 40 22, 33 24 Z" fill="url(#hairHighlight)" opacity="0.6" />

      {/* Spikey layered bangs hanging over forehead */}
      <path d="M26 38 C27 35, 32.5 31, 36.5 33 C37.5 33, 37 35, 35 36" fill="url(#hairGrad)" />
      <path d="M35 36 C39 34, 44 31, 46.5 34 C47.5 34, 45 37, 43 37" fill="url(#hairGrad)" />
      <path d="M43 37 C47.5 34, 52.5 33, 54.5 36 C54.5 36, 52.5 37, 50.5 38" fill="url(#hairGrad)" />
      <path d="M50.5 38 C55 35, 60.5 33, 63.5 37 C64.5 38, 62.5 39, 60.5 39" fill="url(#hairGrad)" />
      <path d="M60.5 39 C64.5 37, 67.5 38, 68.5 40 C66.5 40, 64.5 38, 62.5 40" fill="url(#hairGrad)" />
      {/* Additional side layers */}
      <path d="M25 43 C25.5 38, 28 35, 30 38" fill="url(#hairGrad)" />
      <path d="M75 43 C74.5 38, 72 35, 70 38" fill="url(#hairGrad)" />

      {/* Modern Thick Black/Dark Grey Spectacles with 3D Glare */}
      <g filter="url(#softShadow)">
        {/* Left Lens Frame */}
        <rect x="27.5" y="44" width="18.5" height="15.5" rx="8" ry="7" fill="none" stroke="#1d2022" strokeWidth="3" />
        {/* Right Lens Frame */}
        <rect x="54" y="44" width="18.5" height="15.5" rx="8" ry="7" fill="none" stroke="#1d2022" strokeWidth="3" />
        {/* Bridge */}
        <path d="M46 50 C48.5 48.5, 51.5 48.5, 54 50" fill="none" stroke="#1d2022" strokeWidth="3.2" strokeLinecap="round" />
        {/* Sides/Temples wrapping around to ears */}
        <path d="M27.5 49 C23.5 48, 21.5 47, 21.5 47" fill="none" stroke="#1d2022" strokeWidth="2" />
        <path d="M72.5 49 C76.5 48, 78.5 47, 78.5 47" fill="none" stroke="#1d2022" strokeWidth="2" />

        {/* Diagonal glare/shine on left lens */}
        <path d="M30 46 L42 58 L39 58 L28 47 Z" fill="#ffffff" opacity="0.12" />
        {/* Diagonal glare/shine on right lens */}
        <path d="M56.5 46 L68.5 58 L65.5 58 L54.5 47 Z" fill="#ffffff" opacity="0.12" />
      </g>

      {/* Professional Over-Ear Studio Headphones */}
      <g filter="url(#headphoneShadow)">
        {/* Outer Headband Arch */}
        <path d="M19 50 A31.5 31.5 0 0 1 81 50" fill="none" stroke="#333638" strokeWidth="4.8" strokeLinecap="round" />
        <path d="M21 47.5 A29.5 29.5 0 0 1 79 47.5" fill="none" stroke="#17181c" strokeWidth="2.8" strokeLinecap="round" />
        
        {/* Metallic slide adjusters */}
        <rect x="17.5" y="43" width="3.2" height="11" rx="1.5" fill="#585c60" />
        <rect x="79.3" y="43" width="3.2" height="11" rx="1.5" fill="#585c60" />

        {/* Left Earcup Padded Cushion (Big pill shape matching the 3D model) */}
        <g transform="translate(9, 41)">
          <rect x="0" y="0" width="10.5" height="27" rx="5.2" fill="#17181c" stroke="#0a0a0c" strokeWidth="0.8" />
          {/* Soft padding highlights/lines */}
          <line x1="2.2" y1="4" x2="8.2" y2="4" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="8" x2="8.2" y2="8" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="12" x2="8.2" y2="12" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="16" x2="8.2" y2="16" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="20" x2="8.2" y2="20" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="23" x2="8.2" y2="23" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          {/* Outside metal ring hinge connector */}
          <path d="M9.5 6.5 C12 6.5, 12 20.5, 9.5 20.5" fill="none" stroke="#333638" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right Earcup Padded Cushion */}
        <g transform="translate(80.5, 41)">
          <rect x="0" y="0" width="10.5" height="27" rx="5.2" fill="#17181c" stroke="#0a0a0c" strokeWidth="0.8" />
          {/* Soft padding highlights/lines */}
          <line x1="2.2" y1="4" x2="8.2" y2="4" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="8" x2="8.2" y2="8" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="12" x2="8.2" y2="12" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="16" x2="8.2" y2="16" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="20" x2="8.2" y2="20" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.2" y1="23" x2="8.2" y2="23" stroke="#2a2c30" strokeWidth="1.5" strokeLinecap="round" />
          {/* Outside metal ring hinge connector */}
          <path d="M1 6.5 C-1.5 6.5, -1.5 20.5, 1 20.5" fill="none" stroke="#333638" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
