import { useState } from 'react';
import { Cpu, Layout, Sparkles, Sliders } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'creative'>('all');
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Filter skills
  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  // Circle circumference helper for 2 * PI * R (R = 34)
  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  return (
    <section 
      id="skills" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs tracking-widest text-[#A6FF00] font-bold uppercase mb-2">
              // TECHNICAL STACK & CREDENTIALS
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
              DESIGN <span className="text-glow-lime text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-[#A6FF00]">CAPABILITIES</span> INDEX
            </h2>
            <div className="w-16 h-[2px] bg-[#A6FF00] mt-4 rounded" />
          </div>

          {/* Filtering Toggles */}
          <div className="flex items-center gap-2 bg-black/40 border border-white/5 p-1 rounded-xl backdrop-blur-md">
            {(['all', 'software', 'creative'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#A6FF00] text-black shadow-md shadow-[#A6FF00]/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SOFTWARE GRID (Holographic Circular Meters) */}
        {activeCategory !== 'creative' && (
          <div className="mb-12">
            <h3 className="font-display font-bold text-lg text-gray-300 mb-8 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#A6FF00]" />
              Software Core Systems
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredSkills
                .filter(s => s.category === 'software')
                .map((skill) => {
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  const isHovered = hoveredSkillId === skill.id;

                  // Define dynamic styling depending on skill.color
                  let colorClass = 'text-[#A6FF00]';
                  let bgGlow = 'rgba(166, 255, 0, 0.1)';
                  let borderGlow = 'border-glow-lime';

                  if (skill.color === 'purple') {
                    colorClass = 'text-[#8A2EFF]';
                    bgGlow = 'rgba(138, 46, 255, 0.1)';
                    borderGlow = 'border-glow-purple';
                  } else if (skill.color === 'red') {
                    colorClass = 'text-[#FF2D55]';
                    bgGlow = 'rgba(255, 45, 85, 0.1)';
                    borderGlow = 'border-glow-red';
                  } else if (skill.color === 'white') {
                    colorClass = 'text-white';
                    bgGlow = 'rgba(255, 255, 255, 0.1)';
                    borderGlow = 'shadow-[0_0_15px_rgba(255,255,255,0.1)]';
                  }

                  return (
                    <div
                      key={skill.id}
                      onMouseEnter={() => setHoveredSkillId(skill.id)}
                      onMouseLeave={() => setHoveredSkillId(null)}
                      className={`glassmorphism-premium rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/5 relative group cursor-pointer premium-card-3d ${
                        skill.color === 'purple' ? 'premium-card-3d-purple' : skill.color === 'red' ? 'premium-card-3d-red' : 'premium-card-3d-lime'
                      } ${isHovered ? borderGlow : ''}`}
                    >
                      {/* Interactive Circular Progress Meter */}
                      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                        {/* Outer Rotating Cybernetic Ring */}
                        <svg 
                          className={`absolute inset-0 w-full h-full opacity-35 transition-all duration-500 ${colorClass} ${
                            isHovered ? 'animate-[spin_8s_linear_infinite]' : 'animate-[spin_15s_linear_infinite_reverse]'
                          }`} 
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15 2 2" />
                          <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.2" />
                        </svg>

                        {/* Interactive Main SVG Meter */}
                        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                          {/* Inner Track Circle */}
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            className="text-white/5"
                            strokeWidth="4"
                            fill="transparent"
                            stroke="currentColor"
                          />
                          {/* Pulsing glowing colored value arc */}
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            className={`transition-all duration-1000 ease-out ${colorClass}`}
                            strokeWidth="4.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            fill="transparent"
                            stroke="currentColor"
                            style={{
                              filter: isHovered ? `drop-shadow(0 0 5px currentColor)` : ''
                            }}
                          />
                        </svg>

                        {/* Centered Percentage Indicator */}
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="font-display font-black text-sm text-white leading-none">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Tool Label */}
                      <span className="font-display font-bold text-xs text-white group-hover:text-glow-lime transition-all">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[8px] text-gray-500 mt-1 uppercase tracking-wider">
                        // CORE DRIVER
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* CREATIVE STRENGTHS (Geometric Horizontal Progress Metrics) */}
        {activeCategory !== 'software' && (
          <div className="mt-12">
            <h3 className="font-display font-bold text-lg text-gray-300 mb-8 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#8A2EFF]" />
              Creative Competency Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills
                .filter(s => s.category === 'creative')
                .map((skill) => {
                  const isHovered = hoveredSkillId === skill.id;

                  let barColorClass = 'bg-[#A6FF00] shadow-[#A6FF00]/20';
                  let textColorClass = 'text-[#A6FF00]';

                  if (skill.color === 'purple') {
                    barColorClass = 'bg-[#8A2EFF] shadow-[#8A2EFF]/20';
                    textColorClass = 'text-[#8A2EFF]';
                  } else if (skill.color === 'red') {
                    barColorClass = 'bg-[#FF2D55] shadow-[#FF2D55]/20';
                    textColorClass = 'text-[#FF2D55]';
                  } else if (skill.color === 'white') {
                    barColorClass = 'bg-white shadow-white/10';
                    textColorClass = 'text-white';
                  }

                  return (
                    <div
                      key={skill.id}
                      onMouseEnter={() => setHoveredSkillId(skill.id)}
                      onMouseLeave={() => setHoveredSkillId(null)}
                      className={`glassmorphism rounded-xl p-5 border border-white/5 relative group premium-card-3d ${
                        skill.color === 'purple' ? 'premium-card-3d-purple' : skill.color === 'red' ? 'premium-card-3d-red' : 'premium-card-3d-lime'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="font-display font-bold text-sm text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${barColorClass}`} />
                          {skill.name}
                        </span>
                        <span className={`font-mono text-xs font-bold ${textColorClass}`}>
                          {skill.level} / 100
                        </span>
                      </div>

                      {/* Progress Line */}
                      <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out shadow-lg ${barColorClass}`}
                          style={{ 
                            width: `${skill.level}%`,
                            boxShadow: isHovered ? `0 0 10px currentColor` : ''
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
