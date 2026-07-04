import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { 
  FileText, ArrowDownToLine, MoveUp, HelpCircle, Sparkles, 
  Linkedin, Github, Youtube, Mail, Phone, MapPin, CheckCircle2, Award, User, ChevronUp 
} from 'lucide-react';
import AvatarLogo from './AvatarLogo';

export default function Resume() {
  const [isUnzipped, setIsUnzipped] = useState(false);
  const [zipProgress, setZipProgress] = useState(0); // 0 = fully zipped, 100 = fully unzipped
  const [isDraggingPDF, setIsDraggingPDF] = useState(false);
  const [pdfPosition, setPdfPosition] = useState(0); // tracking scroll/drag position for UI feedback
  
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Triggering the unzipping sequence
  const handleZipToggle = () => {
    if (isUnzipped) {
      // Re-zip
      setIsUnzipped(false);
      let p = 100;
      const interval = setInterval(() => {
        p -= 4;
        if (p <= 0) {
          setZipProgress(0);
          clearInterval(interval);
        } else {
          setZipProgress(p);
        }
      }, 16);
    } else {
      // Unzip
      let p = 0;
      const interval = setInterval(() => {
        p += 4;
        if (p >= 100) {
          setZipProgress(100);
          setIsUnzipped(true);
          clearInterval(interval);
        } else {
          setZipProgress(p);
        }
      }, 16);
    }
  };

  // Dragging the PDF sheet
  const handlePDFDrag = (event: any, info: any) => {
    setPdfPosition(info.point.y);
  };

  // Simulated download
  const handleDownload = () => {
    window.print();
  };

  return (
    <section 
      id="resume" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-black/40 border-t border-b border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8A2EFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A6FF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-[#A6FF00] font-bold uppercase mb-2">
            // INTERACTIVE SPEC-SHEET
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
            UNZIP MY <span className="text-glow-lime text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF00] to-emerald-400">RESUME</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-md mt-4 font-sans leading-relaxed">
            Interact with the premium bag zipper below to unlock Hetsh Udhawala's professional resume. Pull the paper sheet upward to read the full experience.
          </p>
          <div className="w-16 h-[2px] bg-[#A6FF00] mt-4 rounded" />
        </div>

        {/* MAIN INTERACTIVE AREA */}
        <div className="relative flex flex-col items-center justify-center min-h-[900px] w-full" ref={containerRef}>
          
          {/* PDF VIEWPORT LAYER - Uses a sandwich layout with clipping */}
          <div className="relative w-full max-w-[760px] h-[720px] rounded-3xl bg-[#0d0e12]/80 border border-white/10 shadow-2xl flex flex-col items-center">
            
            {/* Top Indicator bar */}
            <div className="w-full bg-[#12131a] px-6 py-3.5 border-b border-white/10 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF2D55]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#A6FF00]" />
                <span className="font-mono text-[9.5px] text-gray-500 font-bold ml-2 tracking-wider">HETSH_RESUME_v3.pdf</span>
              </div>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#A6FF00]/10 border border-[#A6FF00]/20 hover:bg-[#A6FF00] hover:text-black font-mono text-[9px] text-[#A6FF00] font-black uppercase tracking-wider transition-all cursor-pointer"
                title="Print or Save PDF"
              >
                <ArrowDownToLine className="w-3" />
                Download PDF
              </button>
            </div>

            {/* THE SANDWICH CONTAINER */}
            <div className="relative w-full flex-1 flex justify-center">

              {/* 1. BAG BACK PANEL (z-0) - The deep interior of the leather briefcase */}
              <div className="absolute inset-x-0 bottom-0 h-[480px] bg-gradient-to-t from-[#090a0d] to-[#14161f] border-t border-white/5 rounded-t-[40px] z-0 flex flex-col items-center justify-center shadow-inner">
                {/* Holographic internal compartments / wireframe styling */}
                <div className="w-4/5 h-3/4 border border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center opacity-40">
                  <FileText className="w-12 h-12 text-gray-600 mb-2 animate-pulse" />
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest font-black uppercase">SECURE COMPARTMENT</span>
                </div>
              </div>

              {/* 2. THE PDF SHEET (z-25) - Emerging halfway when unzipped, draggable, with high z-index to overlay top elements when dragged */}
              <motion.div 
                ref={pdfRef}
                drag={isUnzipped ? "y" : false}
                dragConstraints={{ top: -950, bottom: 210 }}
                dragElastic={0.08}
                dragMomentum={true}
                onDrag={handlePDFDrag}
                onDragStart={() => setIsDraggingPDF(true)}
                onDragEnd={() => setIsDraggingPDF(false)}
                initial={{ y: 550 }}
                animate={{ 
                  y: isUnzipped ? 120 : 550 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 15 
                }}
                className={`absolute w-full max-w-[670px] bg-[#fdfdfd] shadow-[0_-15px_30px_rgba(0,0,0,0.5)] rounded-2xl z-25 select-text overflow-hidden text-zinc-900 cursor-grab active:cursor-grabbing border border-zinc-200`}
                style={{ height: '1200px' }}
              >
                {/* Subtle Printable Watermark Grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />

                {/* PDF HEADER SECTION - Match green image exactly */}
                <div className="relative p-6 sm:p-8 text-white bg-[#0e3025] overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-200">
                  {/* Textured leaf overlay */}
                  <div className="absolute inset-0 bg-cover bg-center opacity-[0.08] pointer-events-none mix-blend-overlay" 
                       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600&auto=format&fit=crop')` }} />
                  
                  <div className="relative z-10 flex-1">
                    <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none mb-1.5 text-[#f0f9f6]">
                      Hetsh Udhnawala
                    </h1>
                    <p className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-[#a4d2c2] mb-4 flex items-center gap-1.5">
                      Video Editor <span className="text-[#A6FF00]">|</span> Graphic Designer <span className="text-[#A6FF00]">|</span> YouTuber
                    </p>

                    {/* Meta info grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] font-sans font-medium text-[#bfe1d5]">
                      <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#A6FF00]" /> ssefashions@gmail.com</span>
                      <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#A6FF00]" /> Surat, Gujarat, India</span>
                      <span className="flex items-center gap-2"><Linkedin className="w-3.5 h-3.5 text-[#A6FF00]" /> Hetsh Code on LinkedIn</span>
                      <span className="flex items-center gap-2"><Github className="w-3.5 h-3.5 text-[#A6FF00]" /> Hetsh Code on GitHub</span>
                      <span className="flex items-center gap-2"><Youtube className="w-3.5 h-3.5 text-[#A6FF00]" /> Hetsh Code on YouTube</span>
                      <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#A6FF00]" /> +91 90237 20637</span>
                    </div>
                  </div>

                  {/* PDF Avatar Circle */}
                  <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-xl overflow-hidden p-[2.5px] bg-gradient-to-tr from-[#A6FF00] to-emerald-400 shadow-lg flex-shrink-0 self-center md:self-auto">
                    <div className="absolute inset-0 bg-[#0e3025] rounded-[10px]" />
                    <div className="absolute inset-[1px] rounded-[9px] overflow-hidden">
                      <AvatarLogo className="w-full h-full" />
                    </div>
                  </div>
                </div>

                {/* PDF MAIN BODY SHEET */}
                <div className="p-6 sm:p-8 flex flex-col gap-6 font-sans leading-relaxed text-zinc-800">
                  
                  {/* Summary */}
                  <div>
                    <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-2.5 flex items-center gap-2">
                      <User className="w-4 h-4" /> Summary
                    </h3>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                      Creative and detail-oriented <strong className="font-black text-zinc-900">content creator</strong> with expertise in <strong className="font-bold text-zinc-900">video editing, graphic design, and YouTube content production</strong>. Skilled in transforming ideas into engaging visual stories through high-quality videos, eye-catching designs, and optimized digital content. Experienced in managing end-to-end video creation, from concept development to final editing, ensuring audience engagement and growth.
                    </p>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal mt-2">
                      Alongside creative skills, possess <strong className="font-bold text-zinc-900">deep knowledge in occult sciences</strong> including astrology, numerology, vastu, and Lal Kitab, enabling the creation of meaningful and insightful content for niche audiences. Passionate about blending creativity with strategy to build impactful digital presence and deliver value-driven content across multiple platforms.
                    </p>
                  </div>

                  {/* Skills Grid - Matching PDF Screenshot columns exactly */}
                  <div>
                    <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" /> Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      
                      {/* Column 1: Video Editing */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                          <span className="font-display font-bold text-xs text-zinc-900">Video Editing</span>
                          <span className="w-16 h-[2.5px] bg-zinc-900" />
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                          Skilled in editing raw footage into engaging videos using cuts, transitions, effects, color correction, and audio enhancement. Strong sense of timing, storytelling, and audience engagement, with experience in creating content for YouTube and social media.
                        </p>
                      </div>

                      {/* Column 2: Graphic Design */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                          <span className="font-display font-bold text-xs text-zinc-900">Graphic Design</span>
                          <span className="w-16 h-[2.5px] bg-zinc-900" />
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                          Skilled in creating visually appealing designs using layouts, typography, colors, and images. Experienced in designing content for social media, branding, and digital platforms with a strong sense of creativity and visual storytelling.
                        </p>
                      </div>

                      {/* Column 3: YouTube Video Creating */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                          <span className="font-display font-bold text-xs text-zinc-900">YouTube Video Creating</span>
                          <span className="w-16 h-[2.5px] bg-zinc-900" />
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                          Experienced in creating engaging YouTube videos from concept to final upload, including scripting, editing, thumbnail design, and SEO optimization. Skilled in understanding audience trends, improving viewer retention, and growing channel performance through creative and strategic content.
                        </p>
                      </div>

                      {/* Column 4: Occult */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                          <span className="font-display font-bold text-xs text-zinc-900">Occult</span>
                          <span className="w-16 h-[2.5px] bg-zinc-900" />
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                          Knowledgeable in astrology, numerology, vastu, and Lal Kitab, with the ability to analyze charts, interpret patterns, and provide meaningful insights and remedies. Skilled in creating engaging and informative content for spiritual and niche audiences.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Page 2 contents start */}
                  <div className="border-t border-dashed border-zinc-300 my-2 pt-4">
                    <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-2.5">
                      Languages
                    </h3>
                    <p className="text-xs text-zinc-700 leading-relaxed">
                      <strong>English</strong> – Expert in reading, writing, and communication, with the ability to create clear and engaging content for digital platforms. <span className="mx-2">•</span> <strong>Hindi</strong> – Native-level proficiency with strong verbal and written communication skills, enabling effective interaction and content creation for diverse audiences. <span className="mx-2">•</span> <strong>Gujarati</strong> – Native proficiency with excellent reading, writing, and speaking skills, enabling clear communication and content creation for regional audiences.
                    </p>
                  </div>

                  {/* Interests */}
                  <div>
                    <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-3">
                      Interests
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-zinc-700">
                      <div>
                        <strong className="text-zinc-950 font-bold block mb-1">Designing</strong>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">Passionate about creating visually appealing and creative designs, exploring new styles, trends, and techniques to enhance visual content.</p>
                      </div>
                      <div>
                        <strong className="text-zinc-950 font-bold block mb-1">Occult</strong>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">Strong interest in astrology, numerology, vastu, and Lal Kitab, with a passion for exploring spiritual insights and traditional knowledge.</p>
                      </div>
                      <div>
                        <strong className="text-zinc-950 font-bold block mb-1">Creating</strong>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">Passionate about creating engaging content, visuals, and videos, with a focus on creativity, innovation, and bringing ideas to life.</p>
                      </div>
                    </div>
                  </div>

                  {/* References & Declaration */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-2">
                    <div className="md:col-span-6">
                      <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-2.5">
                        References
                      </h3>
                      <p className="text-xs font-bold text-zinc-900">Prath Udhnawala</p>
                      <p className="text-[11px] italic text-zinc-500 mb-1 leading-tight">Data Scientist | AI | ML | Android App Development</p>
                      <p className="text-[10px] text-zinc-500 font-mono">Red & White Skill Education</p>
                      <p className="text-[10px] text-zinc-600 font-mono mt-1">askforvarn@gmail.com, +91 90237 20637</p>
                    </div>

                    <div className="md:col-span-6 flex flex-col items-end text-right">
                      <h3 className="font-display font-black text-sm tracking-widest text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5 mb-2.5 w-full">
                        Declaration
                      </h3>
                      <p className="text-[11px] italic text-zinc-600 text-left md:text-right mb-4">
                        This is not the end. I think you want my signature, Here it is
                      </p>
                      <div className="flex flex-col items-center justify-center border-b border-zinc-300 pb-1 w-40">
                        {/* Custom vector elegant signature */}
                        <svg viewBox="0 0 100 35" className="w-32 h-10 text-zinc-950">
                          <path d="M10,25 C18,12 25,5 30,15 C34,25 38,28 42,12 C46,2 52,20 58,18 C64,15 70,8 74,16 C78,25 84,22 92,14" 
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="28" cy="14" r="1.5" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="font-display font-bold text-xs text-zinc-950 mt-1.5">Hetsh Code</span>
                      <span className="text-[10px] text-zinc-500">Surat, Gujarat, India</span>
                    </div>
                  </div>

                  {/* Thank You section */}
                  <div className="bg-[#f0fdf4] border border-emerald-100 rounded-xl p-4 mt-2 text-center">
                    <span className="font-display font-black text-xs uppercase text-emerald-800 tracking-wider flex items-center justify-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Thank You!
                    </span>
                    <strong className="text-xs text-emerald-950 block mb-1">Thank You very much</strong>
                    <p className="text-[11px] text-emerald-800/80 leading-relaxed">
                      Thank you for taking the time to review my resume. I truly appreciate your consideration and the opportunity to present my skills and experience. I look forward to the possibility of contributing my creativity and dedication to your organization.
                      <br />
                      <span className="font-bold">Goodbye, and have a great day ahead! ✨</span>
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* 3. BAG FRONT PANEL (z-30) - The outer shell containing the sliding zipper */}
              <div className="absolute inset-x-0 bottom-0 h-[480px] z-30 pointer-events-none select-none">
                
                {/* Visual Front leather jacket/pouch representing the bag */}
                <div className="w-full h-full bg-gradient-to-b from-[#111319] via-[#090a0d] to-[#040507] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.8)] relative flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Carbon Fiber / Leather pattern layer */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e2230_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

                  {/* Top Zipper Line / Seam (Where the PDF slides out from!) */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-zinc-950 flex items-center justify-center border-b border-white/5 relative z-30">
                    
                    {/* Metal Zipper Teeth Track (Left side) */}
                    <div className="absolute left-0 top-[6px] right-1/2 h-[2.5px] bg-repeat-x pointer-events-auto"
                         style={{ 
                           backgroundImage: `linear-gradient(90deg, #555 1.5px, transparent 1.5px)`, 
                           backgroundSize: '4px 100%',
                           clipPath: `polygon(0% 0%, ${100 - (zipProgress / 2)}% 0%, ${100 - (zipProgress / 2)}% 100%, 0% 100%)`
                         }} />
                    
                    {/* Metal Zipper Teeth Track (Right side) */}
                    <div className="absolute right-0 top-[6px] left-1/2 h-[2.5px] bg-repeat-x pointer-events-auto"
                         style={{ 
                           backgroundImage: `linear-gradient(90deg, #555 1.5px, transparent 1.5px)`, 
                           backgroundSize: '4px 100%',
                           clipPath: `polygon(${zipProgress / 2}% 0%, 100% 0%, 100% 100%, ${zipProgress / 2}% 100%)`
                         }} />

                    {/* Gap / Reveal Slot */}
                    <div className="absolute top-0 bottom-0 w-2.5 bg-zinc-950 border-l border-r border-white/5" />

                    {/* INTERACTIVE ZIP SLIDER (The Puller Button) */}
                    <button
                      onClick={handleZipToggle}
                      className="absolute w-12 h-12 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/50 hover:border-[#A6FF00] hover:shadow-[0_0_15px_#A6FF00/30] shadow-2xl flex items-center justify-center cursor-pointer transition-all active:scale-95 group select-none pointer-events-auto"
                      style={{ 
                        left: `calc(${zipProgress}% - 24px)`,
                        top: '-16px',
                        zIndex: 100
                      }}
                      title={isUnzipped ? "Click to Zip Bag" : "Click to Unzip Bag"}
                    >
                      {/* Zipper Puller Metal Tag visual */}
                      <div className="relative flex flex-col items-center">
                        {/* Hinge loop */}
                        <div className="w-4 h-3 rounded-full border-2 border-zinc-500 bg-transparent mb-[-2px] group-hover:border-[#A6FF00] transition-colors" />
                        {/* Metal pull plate */}
                        <div className="w-6 h-8 rounded-md bg-gradient-to-b from-zinc-700 to-zinc-900 border border-zinc-600 flex flex-col items-center justify-center group-hover:from-zinc-800 group-hover:to-zinc-950 group-hover:border-[#A6FF00] transition-all">
                          {/* Inner slit */}
                          <div className="w-1.5 h-3.5 rounded-full bg-black/60 mb-1" />
                          <span className="font-mono text-[7px] text-zinc-400 font-bold group-hover:text-[#A6FF00] tracking-wider leading-none">ZIP</span>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Bag brand plate & pockets */}
                  <div className="w-full flex-1 p-8 flex flex-col justify-between relative z-10 pointer-events-none">
                    
                    {/* Metal Logo Plate */}
                    <div className="self-center mt-6 px-6 py-2.5 rounded bg-black/60 border border-white/10 backdrop-blur-sm shadow-xl flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded bg-[#A6FF00] animate-pulse" />
                      <span className="font-display text-[10.5px] font-black tracking-widest text-white">HETSH_STUDIOS_2026</span>
                    </div>

                    {/* Pull up / Instruction guidance */}
                    <div className="flex flex-col items-center gap-1.5 mb-10 transition-opacity duration-500">
                      {!isUnzipped ? (
                        <div className="flex flex-col items-center gap-2 pointer-events-auto">
                          <button 
                            onClick={handleZipToggle}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-wider uppercase font-mono font-black text-[#A6FF00] hover:bg-white/10 transition-all cursor-pointer animate-bounce"
                          >
                            Slide or Click Zip to Open Bag
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 pointer-events-auto">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#A6FF00]/10 border border-[#A6FF00]/20 text-[#A6FF00] font-mono text-[10px] font-black uppercase tracking-wider">
                            <MoveUp className="w-3.5 h-3.5 animate-bounce" />
                            Drag PDF Sheet Upward to View
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom accent details representing briefcase leather panels */}
                    <div className="flex justify-between items-center text-[8.5px] font-mono text-gray-500 tracking-wider">
                      <span>SERIES: BRIEFCASE-O-90</span>
                      <span>SECURE DOUBLE-POCKET SEAMS</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* SATELLITE HELP GUIDELINE BUTTON */}
          <div className="absolute right-0 bottom-4 text-right hidden lg:flex flex-col items-end gap-1 font-mono text-[10px] text-gray-500">
            <span className="text-[#A6FF00] font-bold">TACTILE FEEDBACK</span>
            <span>Unzip the designer briefcase</span>
            <span>Then click-and-drag paper</span>
          </div>

        </div>

      </div>
    </section>
  );
}
