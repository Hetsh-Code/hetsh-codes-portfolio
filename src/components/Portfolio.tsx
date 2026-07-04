import { useState, useRef, useEffect } from 'react';
import { 
  Folder, ArrowRight, X, Sparkles, CheckCircle2, ChevronRight, 
  Layers, Copy, Check, Grid, Sun, Moon, Sparkle, RefreshCw, Eye, EyeOff
} from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [gridlinesActive, setGridlinesActive] = useState<boolean>(true);
  const [embossTheme, setEmbossTheme] = useState<'dark' | 'light' | 'metal'>('dark');
  const [canAngle, setCanAngle] = useState<number>(0);
  const [heatmapActive, setHeatmapActive] = useState<boolean>(false);
  const [uiTab, setUiTab] = useState<'balance' | 'market' | 'send'>('balance');

  const categories = ['All', 'Branding', 'Logo Design', 'Packaging', 'Posters', 'UI Design', 'YouTube Thumbnails'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  // Close modal on Escape key and listen to search events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    const handleSearchSelect = (e: Event) => {
      const customEvent = e as CustomEvent<Project>;
      if (customEvent.detail) {
        setSelectedProject(customEvent.detail);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('openProjectDetail', handleSearchSelect);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openProjectDetail', handleSearchSelect);
    };
  }, []);

  return (
    <section 
      id="portfolio" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs tracking-widest text-[#FF2D55] font-bold uppercase mb-2">
              // DESIGN PORTFOLIO ARCHIVE
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
              AWARD-WINNING <span className="text-glow-red text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">CREATIVE WORKS</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#FF2D55] mt-4 rounded" />
          </div>

          {/* Filtering Links */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FF2D55] text-white shadow-md shadow-[#FF2D55]/35'
                    : 'bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            // Pick glowing colors depending on project id or category
            let glowColor = 'hover:shadow-[0_0_25px_rgba(138,46,255,0.25)] hover:border-[#8A2EFF]';
            let categoryColor = 'text-[#8A2EFF] bg-[#8A2EFF]/10 border-[#8A2EFF]/25';

            if (project.category === 'Logo Design') {
              glowColor = 'hover:shadow-[0_0_25px_rgba(166,255,0,0.25)] hover:border-[#A6FF00]';
              categoryColor = 'text-[#A6FF00] bg-[#A6FF00]/10 border-[#A6FF00]/25';
            } else if (project.category === 'Packaging') {
              glowColor = 'hover:shadow-[0_0_25px_rgba(255,45,85,0.25)] hover:border-[#FF2D55]';
              categoryColor = 'text-[#FF2D55] bg-[#FF2D55]/10 border-[#FF2D55]/25';
            }

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`glassmorphism-premium rounded-3xl p-6 border border-white/5 transition-all duration-500 transform hover:-translate-y-2.5 cursor-pointer flex flex-col group overflow-hidden ${glowColor}`}
              >
                {/* Visual Glass Header Card Mockup (Static placeholder representation) */}
                <div className={`w-full h-48 rounded-2xl bg-gradient-to-tr ${project.thumbnailGradient} border border-white/5 relative overflow-hidden mb-6 flex items-center justify-center`}>
                  {/* Subtle vector patterns floating inside */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Abstract Logo icon representing current project inside thumbnail */}
                  <div className="z-10 flex flex-col items-center">
                    <span className="font-display font-extrabold text-white text-3xl tracking-widest text-center filter drop-shadow-md">
                      {project.title.split(' ')[0]}
                    </span>
                    <span className="font-mono text-[9px] text-white/50 tracking-widest mt-1 block uppercase">
                      // PRECISE GEOMETRY
                    </span>
                  </div>

                  {/* Hover Zoom overlay effect */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <span>VIEW FULL SPEC</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-mono font-bold uppercase tracking-wider ${categoryColor}`}>
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500">2026 PROJ</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-glow-lime transition-all">
                  {project.title}
                </h3>
                
                <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#A6FF00] font-mono font-bold uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Deconstruct Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* DETAILED IMMERSIVE FULLSCREEN MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 w-full h-full bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
            <div 
              className="w-full max-w-5xl glassmorphism-premium rounded-3xl border border-white/10 p-6 md:p-8 shadow-3xl text-left relative flex flex-col my-8 overflow-hidden animate-[scale_0.3s_cubic-bezier(0.1,0.8,0.2,1)]"
              style={{ maxHeight: '90vh' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container inside modal */}
              <div className="overflow-y-auto pr-2 custom-scrollbar flex-grow flex flex-col gap-8">
                
                {/* Header Title Section */}
                <div className="border-b border-white/5 pb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF2D55] mb-2 uppercase">
                    <Folder className="w-3.5 h-3.5" />
                    <span>Project File: {selectedProject.id}.design</span>
                  </div>
                  <h3 className="font-display font-black text-3xl md:text-4xl text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mt-2 max-w-3xl">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Grid layout: Left Column (Interactions), Right Column (Stats) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT: INTERACTIVE DESIGN PLAYGROUND (CRITICAL FOR GRAPHIC PORTFOLIO) */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <h4 className="font-display font-bold text-sm text-[#A6FF00] uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Interactive Material &amp; Construction Lab
                    </h4>

                    {/* Interactive UI System Simulator */}
                    {selectedProject.mockupInteractiveType === 'ui' && (
                      <div className="bg-[#0b0b0c] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        {/* Tab Bar controller */}
                        <div className="flex gap-2 bg-black/60 p-1.5 rounded-xl border border-white/5 mb-6">
                          <button 
                            onClick={() => setUiTab('balance')} 
                            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                              uiTab === 'balance' ? 'bg-[#8A2EFF] text-white' : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            Portfolio
                          </button>
                          <button 
                            onClick={() => setUiTab('market')} 
                            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                              uiTab === 'market' ? 'bg-[#8A2EFF] text-white' : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            Markets
                          </button>
                          <button 
                            onClick={() => setUiTab('send')} 
                            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                              uiTab === 'send' ? 'bg-[#8A2EFF] text-white' : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            Transfer
                          </button>
                        </div>

                        {/* Smartphone Screen Simulator Frame */}
                        <div className="w-64 h-96 rounded-3xl bg-[#0c0c0d] border-[3px] border-zinc-800 p-4 shadow-2xl relative overflow-hidden flex flex-col">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-b-xl z-20" />
                          
                          {/* Inner Screen Header */}
                          <div className="flex justify-between items-center text-gray-500 font-mono text-[9px] mt-2 mb-4">
                            <span>09:41 AM</span>
                            <span className="text-[#8A2EFF]">AURA v2.5</span>
                          </div>

                          {/* Render Dynamic Simulated Screen Contents depending on tab selection */}
                          {uiTab === 'balance' && (
                            <div className="flex-grow flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Net Holdings</span>
                                <span className="text-xl font-bold text-white block mt-1">$432,185.00</span>
                                <span className="text-[10px] text-[#A6FF00] font-semibold font-mono mt-0.5 block">+14.2% TODAY</span>
                              </div>

                              {/* Interactive chart layout using SVGs */}
                              <div className="h-28 flex items-end">
                                <svg className="w-full h-full text-[#A6FF00] drop-shadow-[0_0_8px_#A6FF00]" viewBox="0 0 100 50">
                                  <path d="M0,45 Q15,40 25,25 T50,28 T75,10 T100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                                  <path d="M0,45 Q15,40 25,25 T50,28 T75,10 T100,5 L100,50 L0,50 Z" fill="url(#chartGrad)" opacity="0.1" />
                                  <defs>
                                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#A6FF00" />
                                      <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>

                              <div className="flex justify-between items-center bg-white/[0.03] border border-white/5 rounded-xl p-2.5">
                                <div className="text-left">
                                  <span className="text-[9px] text-white font-bold block">Ether Coin</span>
                                  <span className="text-[8px] text-gray-400 font-mono block">ETH-77</span>
                                </div>
                                <span className="text-[9px] font-mono font-bold text-[#A6FF00]">38.52 ETH</span>
                              </div>
                            </div>
                          )}

                          {uiTab === 'market' && (
                            <div className="flex-grow flex flex-col gap-2">
                              <span className="text-[10px] text-gray-500 uppercase font-mono mb-1 block">Live Tickers</span>
                              {[
                                { name: 'BTC / USD', price: '$94,281.50', rate: '+2.8%', green: true },
                                { name: 'ETH / USD', price: '$3,825.10', rate: '+4.5%', green: true },
                                { name: 'SOL / USD', price: '$245.92', rate: '-1.4%', green: false }
                              ].map((coin, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                                  <div className="text-left">
                                    <span className="text-[9px] text-white font-bold block">{coin.name}</span>
                                    <span className="text-[8px] text-gray-500 font-mono block">SECURED PORTAL</span>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-[9px] font-mono text-white block">{coin.price}</span>
                                    <span className={`text-[8px] font-mono block ${coin.green ? 'text-[#A6FF00]' : 'text-[#FF2D55]'}`}>{coin.rate}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {uiTab === 'send' && (
                            <div className="flex-grow flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] text-gray-500 uppercase font-mono mb-2 block">Quick Transfer</span>
                                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left">
                                  <span className="text-[9px] text-gray-400 block font-mono uppercase">Receiver Address</span>
                                  <span className="text-[10px] font-mono text-white block mt-1 overflow-hidden text-ellipsis">0x8A2E...55EF</span>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left mt-2">
                                  <span className="text-[9px] text-gray-400 block font-mono uppercase">Amount to Send</span>
                                  <span className="text-lg font-bold text-white block mt-1">12.50 ETH</span>
                                </div>
                              </div>
                              <button className="w-full py-2 bg-[#8A2EFF] text-white text-[10px] font-mono font-bold tracking-widest rounded-xl hover:bg-[#9c4cff] transition-colors mt-4">
                                AUTHENTICATE &amp; SIGN
                              </button>
                            </div>
                          )}

                        </div>
                      </div>
                    )}

                    {/* Interactive Brand Logo Construction Grid */}
                    {selectedProject.mockupInteractiveType === 'identity' && (
                      <div className="bg-[#0b0b0c] border border-white/10 rounded-2xl p-6 flex flex-col">
                        {/* Control buttons */}
                        <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
                          <button
                            onClick={() => setGridlinesActive(!gridlinesActive)}
                            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 font-mono text-[10px] uppercase font-bold tracking-wider text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                          >
                            <Grid className="w-3.5 h-3.5" />
                            <span>Construction Blueprints: {gridlinesActive ? 'ON' : 'OFF'}</span>
                          </button>
                          
                          <div className="flex gap-1.5 bg-black/60 p-1 rounded-xl border border-white/5">
                            {(['dark', 'light', 'metal'] as const).map((t) => (
                              <button
                                key={t}
                                onClick={() => setEmbossTheme(t)}
                                className={`px-2.5 py-1 rounded-lg font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer ${
                                  embossTheme === t ? 'bg-[#A6FF00] text-black' : 'text-gray-400 hover:text-white'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Large Emblem Construction Box */}
                        <div className={`w-full h-80 rounded-2xl border transition-all duration-500 relative flex items-center justify-center overflow-hidden ${
                          embossTheme === 'dark' ? 'bg-[#050505] border-white/5 text-white' : 
                          embossTheme === 'light' ? 'bg-slate-100 border-zinc-200 text-black' : 
                          'bg-gradient-to-tr from-zinc-800 via-zinc-700 to-zinc-900 border-white/10 text-white shadow-inner shadow-black/80'
                        }`}>
                          
                          {/* Optional Gridlines overlay */}
                          {gridlinesActive && (
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                              {/* Radial blueprint circle axes */}
                              <div className="absolute inset-0 border border-dashed border-sky-400 rounded-full scale-75 animate-pulse" />
                              <div className="absolute inset-0 border border-dashed border-sky-400 rounded-full scale-50" />
                              <div className="absolute inset-0 border border-dashed border-sky-400 rounded-full scale-[0.35]" />
                              {/* Quadrant lines */}
                              <div className="absolute top-1/2 left-0 right-0 h-[1px] border-t border-dashed border-sky-400" />
                              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-sky-400" />
                              {/* Angle grid vectors */}
                              <div className="absolute inset-0 border border-dashed border-sky-400 rounded-none rotate-45 scale-[1.2]" />
                              <div className="absolute inset-0 border border-dashed border-sky-400 rounded-none -rotate-45 scale-[1.2]" />
                            </div>
                          )}

                          {/* Actual Constructed Vector Symbol */}
                          <div className="z-10 relative flex flex-col items-center select-none">
                            <svg className={`w-36 h-36 drop-shadow-2xl transition-all duration-300 ${
                              embossTheme === 'light' ? 'text-zinc-800' : 
                              embossTheme === 'metal' ? 'text-zinc-300 filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] saturate-50 brightness-110' :
                              'text-white text-glow-purple'
                            }`} viewBox="0 0 100 100">
                              {/* Complex Geometric brand monogram mark drawn in SVG */}
                              <path 
                                d="M 50,15 L 85,35 L 85,75 L 50,95 L 15,75 L 15,35 Z" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="3" 
                              />
                              <path 
                                d="M 50,15 L 50,95" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                strokeDasharray={gridlinesActive ? "2 2" : "none"}
                              />
                              <path 
                                d="M 15,35 L 50,55 L 85,35" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                              />
                              <circle 
                                cx="50" 
                                cy="55" 
                                r="22" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeDasharray={gridlinesActive ? "4 4" : "none"}
                              />
                            </svg>
                            <span className="font-mono text-[9px] tracking-widest text-gray-400 mt-4 uppercase">
                              {gridlinesActive ? 'GRID CONSTRAINED VECTOR ARCH' : 'EMBOSSED SPECIMEN PREVIEW'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive 3D Spinning Aluminum Can Packaging */}
                    {selectedProject.mockupInteractiveType === 'packaging' && (
                      <div className="bg-[#0b0b0c] border border-white/10 rounded-2xl p-6 flex flex-col items-center">
                        <div className="flex justify-between items-center w-full mb-6 gap-2">
                          <span className="font-mono text-xs text-[#FF2D55] font-bold uppercase">// Tactile 3D Rotation Test</span>
                          <button
                            onClick={() => setCanAngle(prev => prev + 90)}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[10px] font-bold text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            ROTATE 90°
                          </button>
                        </div>

                        {/* Interactive cylindrical can projection */}
                        <div className="relative w-48 h-72 rounded-3xl bg-[#0e0e0f] border-t-2 border-b-2 border-zinc-700 shadow-3xl overflow-hidden flex items-center justify-center">
                          {/* Inner Aluminum Reflection Shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 z-20 pointer-events-none transform -skew-x-12 animate-[shimmer_5s_infinite_linear]" />
                          
                          {/* Outer Matte can shading */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/85 z-10 pointer-events-none" />

                          {/* Wrap-around label that rotates depending on state */}
                          <div 
                            className="absolute inset-y-0 w-[500px] flex justify-around transition-transform duration-1000 ease-out z-0"
                            style={{ transform: `translateX(${(canAngle % 360) * -1.2}px)` }}
                          >
                            {/* Panel 1 */}
                            <div className="w-44 h-full bg-gradient-to-b from-[#18181a] to-black flex flex-col justify-between py-6 px-4 text-center">
                              <span className="font-mono text-[8px] text-[#FF2D55] font-bold tracking-widest block uppercase">HIGH-OCTANE RECOVERY</span>
                              <div className="flex flex-col items-center justify-center flex-grow">
                                <span className="font-display font-black text-3xl text-white tracking-widest">WARN</span>
                                <span className="font-display font-black text-xl text-[#A6FF00] tracking-wide mt-1 block">ENERGY</span>
                              </div>
                              <span className="font-mono text-[8px] text-gray-500 block">500 ML / CARBONATED</span>
                            </div>

                            {/* Panel 2 */}
                            <div className="w-44 h-full bg-gradient-to-b from-[#18181a] to-black flex flex-col justify-between py-6 px-4 text-center border-l border-white/5">
                              <span className="font-mono text-[8px] text-[#A6FF00] font-bold tracking-widest block uppercase">NUTRITION SYNDICATE</span>
                              <div className="flex flex-col items-start gap-2 justify-center text-left flex-grow">
                                <div className="text-[9px] font-mono text-gray-300">Taurine: <span className="text-[#A6FF00]">2000mg</span></div>
                                <div className="text-[9px] font-mono text-gray-300">Caffeine: <span className="text-[#FF2D55]">160mg</span></div>
                                <div className="text-[9px] font-mono text-gray-300">B-Vitamins: <span className="text-white">100% RI</span></div>
                              </div>
                              <span className="font-mono text-[8px] text-gray-500 block">ZERO SUGAR LABS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive Surreal Dream Poster Wireframe */}
                    {selectedProject.mockupInteractiveType === 'poster' && (
                      <div className="bg-[#0b0b0c] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        <div className="w-full max-w-sm h-96 bg-gradient-to-b from-[#180036] via-[#05050a] to-[#360018] border border-white/10 rounded-xl relative overflow-hidden shadow-2xl p-6 flex flex-col justify-between text-center select-none">
                          {/* Wireframe grids */}
                          <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,240,255,0.08)_100%)] z-0">
                            {/* Perspective Lines drawn inside */}
                            <svg className="w-full h-full opacity-35 text-[#00F0FF]" viewBox="0 0 100 100" preserveAspectRatio="none">
                              {/* Horizontal lines */}
                              <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.2" />
                              <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="0.3" />
                              <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.5" />
                              <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.8" />
                              {/* Radial perspective rays */}
                              <line x1="50" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
                              <line x1="50" y1="0" x2="25" y2="100" stroke="currentColor" strokeWidth="0.4" />
                              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.4" />
                              <line x1="50" y1="0" x2="75" y2="100" stroke="currentColor" strokeWidth="0.4" />
                              <line x1="50" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
                            </svg>
                          </div>

                          {/* Vector Glowing Sun element */}
                          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-[#FF2D55] to-[#FDF000] blur-[1px] shadow-[0_0_20px_#FF2D55] opacity-85 z-0 flex items-center justify-center">
                            {/* Horizontal grid cuts */}
                            <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-40">
                              <div className="h-0.5 bg-black w-full" />
                              <div className="h-1 bg-black w-full" />
                              <div className="h-1.5 bg-black w-full" />
                              <div className="h-2 bg-black w-full" />
                            </div>
                          </div>

                          {/* Elegant text overlays */}
                          <div className="z-10 mt-4">
                            <span className="font-mono text-[9px] text-[#00F0FF] tracking-widest font-bold uppercase block mb-1">RETROWAVE SYNDICATE</span>
                            <h5 className="font-display font-light text-2xl text-white tracking-widest uppercase">
                              AURA RETRO
                            </h5>
                          </div>

                          <div className="z-10 mb-2">
                            <p className="font-mono text-[8px] text-gray-500 tracking-wider">
                              EST. TOKYO-BERLIN 2026 • ALL RIGHTS RESERVED
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interactive CTR Attention Heatmap overlay */}
                    {selectedProject.mockupInteractiveType === 'thumbnail' && (
                      <div className="bg-[#0b0b0c] border border-white/10 rounded-2xl p-6 flex flex-col">
                        <div className="flex justify-between items-center w-full mb-6 gap-2">
                          <span className="font-mono text-xs text-[#A6FF00] font-bold uppercase">// Click-through rate heatmap</span>
                          <button
                            onClick={() => setHeatmapActive(!heatmapActive)}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 font-mono text-[10px] font-bold text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                          >
                            {heatmapActive ? <EyeOff className="w-3.5 h-3.5 text-[#FF2D55]" /> : <Eye className="w-3.5 h-3.5 text-[#A6FF00]" />}
                            <span>{heatmapActive ? 'HIDE EYE FLOW' : 'SHOW ATTENTION ANALYSIS'}</span>
                          </button>
                        </div>

                        {/* Interactive Thumbnail container */}
                        <div className="relative w-full aspect-video rounded-xl bg-zinc-900 overflow-hidden border border-white/5 flex items-center justify-center">
                          {/* Custom Simulated video thumbnail artwork */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#1c0000] via-[#05050a] to-[#0a2300] z-0" />
                          
                          {/* Focal Point (Device Renders) on the right */}
                          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-44 h-24 rounded-lg bg-black/80 border border-glow-lime border border-white/10 flex flex-col items-center justify-center z-10 shadow-2xl">
                            <div className="text-[#A6FF00] font-display font-black text-xs uppercase tracking-widest mb-1">// CORES</div>
                            <div className="text-white font-mono text-[10px] tracking-wider font-semibold">AMD THREADRIPPER</div>
                          </div>

                          {/* Bold typography labels on the left */}
                          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-left z-10">
                            <span className="inline-block bg-[#FF2D55] text-white font-display font-black text-[10px] uppercase tracking-widest px-2 py-0.5 rounded mb-2">
                              TESTED
                            </span>
                            <h5 className="font-display font-black text-xl md:text-3xl tracking-tight text-white leading-none">
                              IT FINALLY<br />
                              <span className="text-[#A6FF00] text-glow-lime">ARRIVED!</span>
                            </h5>
                          </div>

                          {/* Heatmap overlay block */}
                          {heatmapActive && (
                            <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none animate-fade-in">
                              {/* Glowing radial hotspots representing human eyes fixation */}
                              <div className="absolute left-[20%] top-[45%] w-32 h-32 rounded-full bg-gradient-to-r from-red-500/60 via-yellow-400/30 to-transparent blur-md transform -translate-x-1/2 -translate-y-1/2 shadow-inner" />
                              <div className="absolute right-[22%] top-[50%] w-36 h-36 rounded-full bg-gradient-to-r from-red-500/60 via-yellow-400/30 to-transparent blur-md transform -translate-x-1/2 -translate-y-1/2 shadow-inner" />
                              
                              {/* Eye direction flow lines */}
                              <svg className="absolute inset-0 w-full h-full text-white/50" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M 20,45 Q 50,20 78,50" fill="none" stroke="#FF2D55" strokeWidth="2" strokeDasharray="3 3" />
                                <polygon points="78,50 72,44 74,53" fill="#FF2D55" />
                              </svg>

                              <div className="absolute bottom-4 left-4 bg-black/85 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 font-mono text-[9px] text-[#A6FF00] font-bold">
                                <span>CTR Fixation: 98.4% OPTIMAL HIERARCHY</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Branding System Concept */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-white/5 mt-2">
                      <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider block mb-2">// Creative Concept Blueprint</span>
                      <p className="font-sans text-xs text-gray-300 leading-relaxed mb-4">
                        {selectedProject.brandingSystem.concept}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.brandingSystem.keywords.map((word, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[9px] text-gray-400">
                            #{word.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: BRAND PALETTE, TYPOGRAPHY, BEFORE/AFTER, CLIENT FEEDBACK */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Color Palette (Click to Copy!) */}
                    <div className="glassmorphism rounded-2xl p-5 border border-white/5">
                      <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                        <span>Color Palette Matrix</span>
                        <span className="font-mono text-[8px] text-gray-500 font-bold">CLICK HEX TO COPY</span>
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.colorPalette.map((color, i) => {
                          const isCopied = copiedColor === color.hex;
                          return (
                            <div 
                              key={i}
                              onClick={() => copyToClipboard(color.hex)}
                              className="bg-black/30 border border-white/5 hover:border-white/10 rounded-xl p-2 flex items-center gap-2.5 transition-all cursor-pointer group"
                            >
                              <div 
                                className="w-8 h-8 rounded-lg border border-white/10 shadow-md shrink-0 transition-transform duration-300 group-hover:scale-95" 
                                style={{ backgroundColor: color.hex }}
                              />
                              <div className="text-left overflow-hidden">
                                <span className="block font-sans text-[11px] font-bold text-white truncate leading-none mb-1">{color.name}</span>
                                <span className="block font-mono text-[9px] text-gray-400 font-semibold flex items-center gap-1">
                                  {isCopied ? (
                                    <>
                                      <Check className="w-3 h-3 text-[#A6FF00]" />
                                      <span className="text-[#A6FF00]">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3 group-hover:text-white transition-colors" />
                                      {color.hex}
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Logo variations system */}
                    <div className="glassmorphism rounded-2xl p-5 border border-white/5">
                      <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3">Logo Variations &amp; Output</h5>
                      <div className="flex flex-col gap-2.5">
                        {selectedProject.logoVariations.map((v, i) => (
                          <div key={i} className="flex justify-between items-start gap-3 bg-black/20 p-2.5 rounded-xl border border-white/5">
                            <div className="text-left">
                              <span className="font-sans text-[11px] font-bold text-white block">{v.name}</span>
                              <span className="font-mono text-[9px] text-gray-400 mt-1 block leading-tight">{v.purpose}</span>
                            </div>
                            <span className="font-mono text-[8px] text-[#A6FF00] bg-[#A6FF00]/10 px-2 py-0.5 rounded-md border border-[#A6FF00]/25 uppercase shrink-0">
                              {v.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Before & After Deconstruction */}
                    <div className="glassmorphism rounded-2xl p-5 border border-white/5">
                      <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4">System Transformation</h5>
                      <div className="flex flex-col gap-4 text-left">
                        <div className="bg-[#FF2D55]/5 border border-[#FF2D55]/10 rounded-xl p-3">
                          <span className="font-mono text-[9px] text-[#FF2D55] font-bold uppercase block mb-1">Old State (Generic)</span>
                          <p className="font-sans text-[11px] text-gray-300 leading-relaxed">{selectedProject.beforeAndAfter.before}</p>
                        </div>
                        <div className="bg-[#A6FF00]/5 border border-[#A6FF00]/10 rounded-xl p-3">
                          <span className="font-mono text-[9px] text-[#A6FF00] font-bold uppercase block mb-1">New State (High-End)</span>
                          <p className="font-sans text-[11px] text-gray-300 leading-relaxed">{selectedProject.beforeAndAfter.after}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results / Performance metrics */}
                    <div className="glassmorphism rounded-2xl p-5 border border-white/5 border-glow-lime">
                      <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3">Project Deliverable Outcomes</h5>
                      <ul className="flex flex-col gap-2">
                        {selectedProject.projectResults.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-left">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A6FF00] mt-0.5 shrink-0" />
                            <span className="font-sans text-xs text-gray-300 leading-snug">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-[#101011] border border-white/5 rounded-2xl p-5 relative text-left">
                      <h5 className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block mb-3">// CLIENT TESTIMONIAL</h5>
                      <p className="font-serif italic text-gray-300 text-xs leading-relaxed mb-4">
                        "{selectedProject.clientTestimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-rose-400 flex items-center justify-center font-display font-bold text-[10px] text-white">
                          {selectedProject.clientTestimonial.author[0]}
                        </div>
                        <div>
                          <span className="font-sans text-[11px] font-bold text-white block leading-none">{selectedProject.clientTestimonial.author}</span>
                          <span className="font-mono text-[8px] text-gray-500 mt-1 block leading-none">{selectedProject.clientTestimonial.company}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
