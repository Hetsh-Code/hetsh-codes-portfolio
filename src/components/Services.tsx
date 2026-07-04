import React, { useState } from 'react';
import * as Icons from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  iconName: keyof typeof Icons;
  description: string;
  accent: 'lime' | 'purple' | 'red';
  deliverables: string[];
}

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: 'brand-identity',
      title: 'Brand Identity',
      iconName: 'Sparkles',
      description: 'Complete visual ecosystems, branding guidelines, and premium color/typography systems.',
      accent: 'lime',
      deliverables: ['Identity Guidebooks', 'Palette Matrix', 'Monograms']
    },
    {
      id: 'logo-design',
      title: 'Logo Design',
      iconName: 'Cpu',
      description: 'Golden-ratio geometric logos and vector marks built for extreme mathematical clarity.',
      accent: 'purple',
      deliverables: ['Scalable Vectors', '3D Metallic Previews', 'Brand Seals']
    },
    {
      id: 'social-media',
      title: 'Social Media Graphics',
      iconName: 'Share2',
      description: 'High-visibility frames, stream graphics, post grids, and gaming campaign assets.',
      accent: 'red',
      deliverables: ['Instagram Banners', 'Twitch Overlays', 'Post Presets']
    },
    {
      id: 'packaging',
      title: 'Packaging Design',
      iconName: 'Box',
      description: 'Tactile physical wraps, labels, matte aluminum containers, and premium box unboxings.',
      accent: 'lime',
      deliverables: ['Print Dielines', '3D Bottle Renders', 'CPG Mockups']
    },
    {
      id: 'business-cards',
      title: 'Business Cards',
      iconName: 'CreditCard',
      description: 'Sleek physical stationery, metal cards, letterheads, and corporate business paperware.',
      accent: 'purple',
      deliverables: ['Custom Metal Specs', 'UV Spot Files', 'Print Layouts']
    },
    {
      id: 'posters',
      title: 'Posters',
      iconName: 'Image',
      description: 'Limited edition high-impact screen prints, festival posters, and futuristic vaporwave art.',
      accent: 'red',
      deliverables: ['Halftone Screen Prints', 'CMYK Large-format', 'Event Collateral']
    },
    {
      id: 'flyers',
      title: 'Flyers',
      iconName: 'FileText',
      description: 'Modern, high-energy single-sheet promotional leaflets and marketing print material.',
      accent: 'lime',
      deliverables: ['Double-sided Layouts', 'Digital Leaflets', 'Distribution Files']
    },
    {
      id: 'ui-design',
      title: 'UI Design',
      iconName: 'LayoutGrid',
      description: 'Immersive digital interfaces, dark luxury wallet dashboards, and mobile wireframes.',
      accent: 'purple',
      deliverables: ['Figma Design Files', 'Design Tokens', 'Dark Theme Layouts']
    },
    {
      id: 'photo-editing',
      title: 'Photo Editing',
      iconName: 'Camera',
      description: 'High-contrast lighting manipulation, color grading, and cyber glow retouching.',
      accent: 'red',
      deliverables: ['High-End Retouching', 'Dynamic Grading', 'Visual Effects']
    },
    {
      id: 'marketing-graphics',
      title: 'Marketing Graphics',
      iconName: 'BarChart3',
      description: 'Targeted visual ads, billboard layouts, and conversion-optimized digital banners.',
      accent: 'purple',
      deliverables: ['Google Ad Banners', 'Billboard Specifications', 'Social Ad Kits']
    },
    {
      id: 'creative-consultation',
      title: 'Creative Consultation',
      iconName: 'MessageSquare',
      description: '1-on-1 strategic visual auditing, composition theory sessions, and layout reviews.',
      accent: 'red',
      deliverables: ['Competitor Auditing', 'Composition Feedback', 'Layout Reports']
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-[#A6FF00] font-bold uppercase mb-2">
            // SOLUTIONS DEPLOYMENT
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
            PREMIUM <span className="text-glow-lime text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF00] to-emerald-400">DESIGN SERVICES</span>
          </h2>
          <p className="font-sans text-gray-400 text-xs md:text-sm max-w-xl mt-3 leading-relaxed">
            Tailored visual systems engineered with mathematical precision and luxury aesthetic rigor. Expanding your brand's authority across 12 distinct vectors.
          </p>
          <div className="w-16 h-[2px] bg-[#A6FF00] mt-4 rounded" />
        </div>

        {/* 12 SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = Icons[service.iconName] as React.ComponentType<any>;
            const isHovered = hoveredId === service.id;

            // Define neon accents depending on style
            let accentClass = 'group-hover:border-[#A6FF00] group-hover:text-[#A6FF00] border-glow-lime';
            let iconBoxClass = 'bg-[#A6FF00]/10 border-[#A6FF00]/15 text-[#A6FF00]';
            let bgGlow = 'rgba(166, 255, 0, 0.05)';

            if (service.accent === 'purple') {
              accentClass = 'group-hover:border-[#8A2EFF] group-hover:text-[#8A2EFF] border-glow-purple';
              iconBoxClass = 'bg-[#8A2EFF]/10 border-[#8A2EFF]/15 text-[#8A2EFF]';
              bgGlow = 'rgba(138, 46, 255, 0.05)';
            } else if (service.accent === 'red') {
              accentClass = 'group-hover:border-[#FF2D55] group-hover:text-[#FF2D55] border-glow-red';
              iconBoxClass = 'bg-[#FF2D55]/10 border-[#FF2D55]/15 text-[#FF2D55]';
              bgGlow = 'rgba(255, 45, 85, 0.05)';
            }

            return (
              <a
                key={service.id}
                href="https://www.linkedin.com/in/hetshcode/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`glassmorphism-premium rounded-3xl p-6 border border-white/5 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group overflow-hidden select-none cursor-pointer no-underline ${
                  isHovered ? accentClass : ''
                }`}
                style={{
                  boxShadow: isHovered ? `0 15px 30px ${bgGlow}` : ''
                }}
              >
                {/* Visual Glass Glow Layer inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none" />

                <div>
                  {/* Glowing Icon Circular Container */}
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 transition-all duration-500 ${
                    isHovered ? 'scale-110' : ''
                  } ${iconBoxClass}`}>
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2 transition-all group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro deliverables pill box */}
                <div className="flex flex-col gap-1.5 pt-4 border-t border-white/5">
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block text-left mb-1">// Deliverables</span>
                  <div className="flex flex-wrap gap-1">
                    {service.deliverables.map((item, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-[8px] font-mono text-gray-400 leading-none">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
