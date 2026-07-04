import { useEffect, useState } from 'react';

export default function Background() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center (-1 to 1)
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setParallax({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="ambient-3d-background" className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#050505]">
      {/* LAYER 0: Vignette & Ambient Mesh Gradients (Static and slow pulsing) */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(16,16,16,1)_0%,rgba(5,5,5,1)_100%] z-0" />
      
      {/* Design HTML: top-left purple radial gradient, blur 80px, opacity 0.2 */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-20 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #8A2EFF 0%, transparent 70%)', 
          filter: 'blur(80px)',
          transform: `translate3d(${parallax.x * -8}px, ${parallax.y * -8}px, 0)`
        }}
      />

      {/* Design HTML: bottom-right lime radial gradient, blur 100px, opacity 0.1 */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #A6FF00 0%, transparent 70%)', 
          filter: 'blur(100px)',
          transform: `translate3d(${parallax.x * 8}px, ${parallax.y * 8}px, 0)`
        }}
      />

      {/* Design HTML: repeating linear scanline overlay */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none"
        style={{ 
          background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)', 
          backgroundSize: '100% 4px' 
        }}
      />
      
      {/* Top Right Neon Lime Ambient Glow (Parallaxed backup) */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#A6FF00]/4 blur-[140px] animate-pulse-glow"
        style={{ transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)` }}
      />
      
      {/* Mid Left Electric Purple Ambient Glow */}
      <div 
        className="absolute top-1/3 -left-60 w-[700px] h-[700px] rounded-full bg-[#8A2EFF]/3 blur-[160px] animate-pulse-glow"
        style={{ animationDelay: '2s', transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 12}px, 0)` }}
      />

      {/* Bottom Right Crimson Red Ambient Glow */}
      <div 
        className="absolute -bottom-40 -right-20 w-[650px] h-[650px] rounded-full bg-[#FF2D55]/3 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: '4s', transform: `translate3d(${parallax.x * -8}px, ${parallax.y * -8}px, 0)` }}
      />

      {/* LAYER 1: Moving Cyber Grid Matrix (Background Parallax - Scale 0.2) */}
      <div 
        className="absolute inset-0 grid-bg animate-grid-move opacity-35"
        style={{ 
          transform: `translate3d(${parallax.x * -15}px, ${parallax.y * -15}px, 0) scale(1.05)`,
          transition: 'transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      />

      {/* LAYER 2: Holographic Rings & Geometric Wireframes (Deep Parallax - Scale 0.4) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          transform: `translate3d(${parallax.x * -25}px, ${parallax.y * -25}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      >
        {/* Holographic Ring 1 */}
        <svg className="absolute top-[15%] left-[10%] w-72 h-72 opacity-15 text-purple-500 animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="10 5" />
        </svg>

        {/* 3D Wireframe Cube (SVG representation) */}
        <svg className="absolute bottom-[20%] left-[15%] w-44 h-44 opacity-10 text-lime-400 animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
          <path d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 15 L50 85" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <path d="M20 32.5 L50 50 L80 32.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20 67.5 L50 50 L80 67.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>

        {/* Holographic Concentric Circles */}
        <svg className="absolute top-[25%] right-[15%] w-96 h-96 opacity-10 text-rose-500 animate-[spin_60s_linear_infinite_reverse]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="5 20 15 10" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="20 4" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      {/* LAYER 3: Glassmorphic Shards (Medium Parallax - Scale 0.7) */}
      <div 
        className="absolute inset-0 z-20"
        style={{ 
          transform: `translate3d(${parallax.x * -40}px, ${parallax.y * -40}px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      >
        {/* Glass Shard 1 */}
        <div 
          className="absolute top-[45%] right-[8%] w-32 h-44 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-[4px] rotate-[15deg] shadow-2xl animate-[float_10s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        >
          {/* Shard Highlight Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Glass Shard 2 */}
        <div 
          className="absolute bottom-[25%] right-[22%] w-24 h-24 rounded-lg border border-white/5 bg-white/[0.01] backdrop-blur-[2px] -rotate-[35deg] shadow-2xl animate-[float_12s_ease-in-out_infinite]"
          style={{ animationDelay: '3s' }}
        >
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* Glass Shard 3 */}
        <div 
          className="absolute top-[12%] left-[25%] w-36 h-20 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-[3px] rotate-[50deg] shadow-2xl animate-[float_15s_ease-in-out_infinite]"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/10 to-transparent" />
        </div>
      </div>

      {/* LAYER 4: Glowing Floating Micro-particles & Tiny Sparkles (Foreground Parallax - Scale 1.2) */}
      <div 
        className="absolute inset-0 z-30"
        style={{ 
          transform: `translate3d(${parallax.x * -60}px, ${parallax.y * -60}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.1, 0.8, 0.2, 1)'
        }}
      >
        {/* Floating Particles (represented by glowing HTML elements) */}
        <div className="absolute top-[20%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#A6FF00] shadow-[0_0_10px_#A6FF00] opacity-40 animate-pulse" />
        <div className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full bg-[#8A2EFF] shadow-[0_0_12px_#8A2EFF] opacity-50 animate-[ping_3s_infinite_ease-in-out]" />
        <div className="absolute bottom-[15%] left-[40%] w-1 h-1 rounded-full bg-[#FF2D55] shadow-[0_0_8px_#FF2D55] opacity-60 animate-pulse" />
        <div className="absolute top-[50%] right-[30%] w-2 h-2 rounded-full bg-[#FFFFFF] shadow-[0_0_10px_#FFFFFF] opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[40%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#8A2EFF] shadow-[0_0_10px_#8A2EFF] opacity-45 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[80%] right-[45%] w-1 h-1 rounded-full bg-[#A6FF00] shadow-[0_0_8px_#A6FF00] opacity-50 animate-pulse" style={{ animationDuration: '5s' }} />

        {/* Star Sparkles */}
        <div className="absolute top-[10%] left-[65%] text-white/20 text-xs font-serif animate-[ping_4s_infinite_ease-in-out]">✦</div>
        <div className="absolute bottom-[35%] left-[28%] text-white/30 text-[10px] font-serif animate-[ping_6s_infinite_ease-in-out]" style={{ animationDelay: '2s' }}>✦</div>
        <div className="absolute top-[40%] left-[82%] text-white/15 text-sm font-serif animate-[ping_5s_infinite_ease-in-out]" style={{ animationDelay: '1s' }}>✦</div>
      </div>

      {/* CSS float helper inside style tags */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--r, 0deg));
          }
          50% {
            transform: translateY(-15px) rotate(calc(var(--r, 0deg) + 2deg));
          }
        }
      `}</style>
    </div>
  );
}
