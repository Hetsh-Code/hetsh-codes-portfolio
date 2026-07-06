import { useEffect, useState } from 'react';
import { Target, Lightbulb, Workflow, Award, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
}

function Counter({ end, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span className="font-display font-black text-3xl sm:text-4xl text-white select-none">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: 120, suffix: '+' },
    { label: 'Happy Clients', value: 45, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Design Awards', value: 8, suffix: '' },
    { label: 'Asset Downloads', value: 10, suffix: 'k+' },
    { label: 'Positive Reviews', value: 100, suffix: '%' }
  ];

  const strengths = [
    'Golden-Ratio Geometry Vector Drafting',
    'Tactile Matte Packaging Design Systems',
    'Stealth Dark Luxury UI Layouts',
    'Interactive 3D Material Mapping (Blender)',
    'Cinematic High-Contrast Photo Editing',
    'Attention Hierarchy & Conversion Tactics'
  ];

  const workflowSteps = [
    { step: '01', name: 'Deconstruct Brief', text: 'Deconstructing core values, competitor positioning, and primary audience triggers.' },
    { step: '02', name: 'Precision Drafting', text: 'Generating extensive physical sketches, mathematical vectors, and geometry grids.' },
    { step: '03', name: 'Virtual Simulation', text: 'Mapping artwork onto premium 3D assets to evaluate depth, textures, and lighting.' },
    { step: '04', name: 'Seamless Handover', text: 'Delivering pixel-perfect vectors, source files, and physical printing calibrations.' }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs tracking-widest text-[#8A2EFF] font-bold uppercase mb-2">
            // INTRODUCING THE ARTIST
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
            CREATIVE IDENTITY <span className="text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">&amp;</span> VISION
          </h2>
          <div className="w-16 h-[2px] bg-[#8A2EFF] mt-4 rounded" />
        </div>

        {/* ASYMMETRIC GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Biography, Philosophy & Strengths (Bento Grid) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="glassmorphism-premium rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden premium-card-3d premium-card-3d-purple cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Workflow className="w-48 h-48" />
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4">
                Hetsh Udhnawala • Professional Designer
              </h3>
              <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                I am a professional Graphic Designer who believes design is not just cosmetic — it is structural language. Operating at the intersection of high-street avant-garde, cyberpunk minimalism, and luxury branding, I help innovative brands establish immediate authority.
              </p>
              <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed">
                Whether creating a symmetrical corporate emblem, a neon energy packaging can, or a dark fintech interface, my designs prioritize strict geometric harmony, high-contrast typography, and beautiful, functional layouts.
              </p>
            </div>

            {/* Sub Bento Grid (Mission, Vision, Strengths) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mission & Vision Card */}
              <div className="glassmorphism rounded-2xl p-6 border border-white/5 relative flex flex-col justify-between premium-card-3d premium-card-3d-lime cursor-pointer">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#8A2EFF]/10 border border-[#8A2EFF]/20 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5 text-[#8A2EFF]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">My Mission</h4>
                  <p className="font-sans text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    To eliminate generic layouts. I replace cookie-cutter aesthetics with bespoke, geometry-constructed visual assets that convey absolute confidence.
                  </p>
                </div>
                <div className="h-[1px] bg-white/5 my-3" />
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#A6FF00]/10 border border-[#A6FF00]/20 flex items-center justify-center mb-4">
                    <Lightbulb className="w-5 h-5 text-[#A6FF00]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">The Vision</h4>
                  <p className="font-sans text-gray-400 text-xs md:text-sm leading-relaxed">
                    Bridging tactile physical packaging with augmented immersive spaces. Creating visual standard assets that stand the test of time.
                  </p>
                </div>
              </div>

              {/* Core Strengths Card */}
              <div className="glassmorphism rounded-2xl p-6 border border-white/5 relative premium-card-3d premium-card-3d-red cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-[#FF2D55]/10 border border-[#FF2D55]/20 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-[#FF2D55]" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-4">Core Strengths</h4>
                <ul className="flex flex-col gap-3">
                  {strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A6FF00] mt-0.5 shrink-0" />
                      <span className="font-sans text-xs md:text-sm text-gray-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Workflow Timeline Block */}
            <div className="glassmorphism rounded-3xl p-6 md:p-8 border border-white/5 mt-2 premium-card-3d premium-card-3d-lime cursor-pointer">
              <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#A6FF00]" />
                Creative Workflow Strategy
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative">
                {workflowSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col relative group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-[#A6FF00] bg-[#A6FF00]/10 border border-[#A6FF00]/20 px-2 py-0.5 rounded-md">
                        {step.step}
                      </span>
                      <span className="font-display font-bold text-sm text-white group-hover:text-[#A6FF00] transition-colors">
                        {step.name}
                      </span>
                    </div>
                    <p className="font-sans text-gray-400 text-xs leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Animate Counters & Floating Badges */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* Visual Experience Counters Panel */}
            <div className="glassmorphism-premium rounded-3xl p-6 border border-white/10 flex flex-col gap-6 border-glow-lime premium-card-3d premium-card-3d-lime cursor-pointer">
              <span className="font-mono text-[9px] text-[#A6FF00] font-bold tracking-widest uppercase">
                // SYSTEM TELEMETRY
              </span>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="bg-black/40 border border-white/5 hover:border-white/10 rounded-2xl p-4 flex flex-col items-start transition-all duration-300"
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                    <span className="font-sans text-[10px] md:text-xs text-gray-400 mt-2 font-medium tracking-wide leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Holographic Asset Box */}
            <div className="glassmorphism rounded-3xl p-6 border border-white/5 relative overflow-hidden flex flex-col items-center text-center premium-card-3d premium-card-3d-purple cursor-pointer">
              {/* Spinning geometric wireframe background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
                <svg className="w-64 h-64 text-white animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 100 100">
                  <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
              
              <h4 className="font-display font-bold text-base text-white mb-2">Design Philosophy</h4>
              <p className="font-serif italic text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                "Simplicity is the final layer of complexity. Real luxury design stands out by utilizing generous negative space, severe mathematical alignment, and high-impact micro-detailing."
              </p>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#8A2EFF] font-bold tracking-wider uppercase">
                <Eye className="w-3.5 h-3.5" />
                ESTHETIC RIGOR SECURED
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
