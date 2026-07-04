import { useState } from 'react';
import * as Icons from 'lucide-react';
import { timelineItems } from '../data';

export default function Timeline() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <section 
      id="experience" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs tracking-widest text-[#8A2EFF] font-bold uppercase mb-2">
            // HISTORIC RECORDS & MILESTONES
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
            EXPERIENCE <span className="text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-rose-500 to-[#A6FF00]">&amp; TIMELINE</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#8A2EFF] mt-4 rounded" />
        </div>

        {/* TIMELINE TREE CONTROLLER */}
        <div className="relative max-w-4xl mx-auto py-12">
          
          {/* Centered Glowing Vertical Spine Connector (Visible on desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8A2EFF] via-[#FF2D55] to-[#A6FF00] opacity-30 pointer-events-none transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {timelineItems.map((item, idx) => {
              const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;
              const isEven = idx % 2 === 0;
              const isHovered = hoveredNodeId === item.id;

              // Color configuration depending on category
              let accentColor = 'border-[#8A2EFF] text-[#8A2EFF] bg-[#8A2EFF]/10 shadow-[0_0_12px_#8A2EFF]';
              let badgeColor = 'text-[#8A2EFF] bg-[#8A2EFF]/10';

              if (item.type === 'award') {
                accentColor = 'border-[#A6FF00] text-[#A6FF00] bg-[#A6FF00]/10 shadow-[0_0_12px_#A6FF00]';
                badgeColor = 'text-[#A6FF00] bg-[#A6FF00]/10';
              } else if (item.type === 'milestone') {
                accentColor = 'border-[#FF2D55] text-[#FF2D55] bg-[#FF2D55]/10 shadow-[0_0_12px_#FF2D55]';
                badgeColor = 'text-[#FF2D55] bg-[#FF2D55]/10';
              }

              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setHoveredNodeId(item.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className={`flex flex-col md:flex-row items-start relative w-full transition-all duration-300 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* LEFT / RIGHT CONTENT BLOCK */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pl-12' : 'md:pr-12'
                  }`}>
                    <div className={`glassmorphism-premium rounded-2xl p-6 border border-white/5 transition-all duration-500 text-left ${
                      isHovered ? 'scale-[1.02] border-white/15 shadow-xl shadow-black/80' : ''
                    }`}>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="font-mono text-xs font-bold text-[#A6FF00]">
                          {item.year}
                        </span>
                        <span className={`px-2 py-0.5 rounded-md font-mono text-[8px] font-bold uppercase tracking-widest ${badgeColor}`}>
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="font-sans text-xs text-gray-400 font-semibold mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* GLOWING CONNECTOR BULLET */}
                  <div 
                    className={`absolute left-8 md:left-1/2 top-4 md:top-8 w-8 h-8 rounded-full border-2 z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${accentColor} ${
                      isHovered ? 'scale-125' : ''
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </div>

                  {/* Space-holder for other side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
