import { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe2, Linkedin, Github, Youtube, Sparkles, Award, User, BookOpen, Languages, Heart, MessageSquare, HeartHandshake } from 'lucide-react';
import AvatarLogo from './AvatarLogo';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      {/* Click outside closure */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Resume Board Panel */}
      <div className="w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-3xl shadow-3xl z-10 relative flex flex-col my-8 overflow-hidden print:bg-white print:text-black print:border-none print:my-0">
        
        {/* Neon decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A6FF00]/40 to-transparent print:hidden" />

        {/* Modal Controls */}
        <div className="flex justify-between items-center px-6 py-4 md:px-8 border-b border-white/5 bg-[#0e0e11] print:hidden">
          <span className="font-mono text-[10px] text-[#A6FF00] font-bold tracking-[0.3em] uppercase">// OFFICIAL RESUME INTAKE</span>
          <div className="flex items-center gap-3">
            <button
              onClick={triggerPrint}
              className="px-4 py-2 rounded-xl bg-[#A6FF00]/10 hover:bg-[#A6FF00]/20 border border-[#A6FF00]/20 font-mono text-xs font-bold text-[#A6FF00] flex items-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              PRINT / SAVE PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE RESUME SHEET (Scrollable on screen, static on print) */}
        <div className="overflow-y-auto max-h-[80vh] p-6 md:p-8 print:max-h-none print:overflow-visible print:p-0 text-left bg-gradient-to-b from-[#09090b] to-[#040405] print:from-white print:to-white">
          
          {/* HEADER SECTION (Deep lush green foliage look matching PDF layout) */}
          <div className="relative rounded-2xl p-6 md:p-8 overflow-hidden bg-gradient-to-br from-[#122e20] via-[#0b1b13] to-[#060c08] border border-emerald-900/40 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 print:bg-gradient-to-r print:from-zinc-100 print:to-zinc-50 print:border-zinc-200 print:text-black">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A6FF00_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            {/* User Bio and title */}
            <div className="relative z-10 flex-1">
              <h1 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight leading-tight uppercase print:text-zinc-900">
                Hetsh Udhnawala
              </h1>
              <p className="font-mono text-sm text-[#A6FF00] font-semibold tracking-wider mt-1.5 uppercase print:text-emerald-700">
                Video Editor &bull; Graphic Designer &bull; YouTuber
              </p>
              
              {/* Quick Contact Chips inside Header */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs font-mono text-gray-300 print:text-zinc-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>ssefashions@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+91 90237 20637</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Hetsh Code on Gmail</span>
                </div>
              </div>
            </div>

            {/* Avatar block representing the cute cartoon with glasses & headphones on green circle */}
            <div className="relative z-10 flex-shrink-0 self-center md:self-auto">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#A6FF00]/10 to-emerald-500/10 p-1 border-2 border-[#A6FF00]/40 flex items-center justify-center relative overflow-hidden shadow-xl print:border-zinc-300 print:from-zinc-200 print:to-zinc-100">
                <AvatarLogo className="w-full h-full" />
                {/* Micro Orange Ribbon Badge */}
                <span className="absolute bottom-1 right-1 bg-[#FF2D55] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full scale-90">
                  CREATOR
                </span>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA CONNECTIONS ROW (LinkedIn, GitHub, YouTube) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 print:border-t print:border-b print:py-3 print:my-4 print:border-zinc-200">
            <a 
              href="https://www.linkedin.com/in/hetshcode/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#8A2EFF] hover:bg-[#8A2EFF]/5 transition-all cursor-pointer select-none print:bg-transparent print:border-none print:p-0"
            >
              <div className="p-2 rounded-lg bg-[#0077B5]/10 text-[#0077B5]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-400 block uppercase tracking-wider print:text-zinc-500">LinkedIn Profile</span>
                <span className="text-xs font-semibold text-white hover:text-[#8A2EFF] print:text-zinc-800">Hetsh Code on LinkedIn</span>
              </div>
            </a>

            <a 
              href="https://www.github.com/Hetsh-Code/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#8A2EFF] hover:bg-[#8A2EFF]/5 transition-all cursor-pointer select-none print:bg-transparent print:border-none print:p-0"
            >
              <div className="p-2 rounded-lg bg-white/10 text-white print:text-zinc-800">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-400 block uppercase tracking-wider print:text-zinc-500">GitHub Codebase</span>
                <span className="text-xs font-semibold text-white hover:text-[#8A2EFF] print:text-zinc-800">Hetsh Code on GitHub</span>
              </div>
            </a>

            <a 
              href="https://www.youtube.com/@HetshCode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all cursor-pointer select-none print:bg-transparent print:border-none print:p-0"
            >
              <div className="p-2 rounded-lg bg-[#FF0000]/10 text-[#FF0000]">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-400 block uppercase tracking-wider print:text-zinc-500">YouTube Channel</span>
                <span className="text-xs font-semibold text-white hover:text-[#FF0000] print:text-zinc-800">Hetsh Code on YouTube</span>
              </div>
            </a>
          </div>

          {/* MAIN BODY LAYOUT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT SIDEBAR (Summary & Skills Grid - 8 columns) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* SUMMARY SECTION */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 print:border-zinc-200">
                  <User className="w-4 h-4 text-[#A6FF00]" />
                  <h2 className="font-display font-black text-lg text-white tracking-wide uppercase print:text-zinc-900">
                    Summary
                  </h2>
                </div>
                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed print:text-zinc-800">
                  Creative and detail-oriented <strong className="text-[#A6FF00] font-bold italic print:text-black">content creator</strong> with expertise in <strong className="font-semibold text-white print:text-black">video editing, graphic design, and YouTube content production</strong>. Skilled in transforming ideas into engaging visual stories through high-quality videos, eye-catching designs, and optimized digital content. Experienced in managing end-to-end video creation, from concept development to final editing, ensuring audience engagement and growth.
                </p>
                <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed mt-2 print:text-zinc-800">
                  Alongside creative skills, possess <strong className="font-semibold text-white print:text-black">deep knowledge in occult sciences</strong> including astrology, numerology, vastu, and Lal Kitab, enabling the creation of meaningful and insightful content for niche audiences. Passionate about blending creativity with strategy to build impactful digital presence and deliver value-driven content across multiple platforms.
                </p>
              </div>

              {/* SKILLS SECTION (Styled as 2x2 grid representing the 4 core columns from resume) */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 print:border-zinc-200">
                  <Award className="w-4 h-4 text-[#8A2EFF]" />
                  <h2 className="font-display font-black text-lg text-white tracking-wide uppercase print:text-zinc-900">
                    Core Expertise
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Skill 1: Video Editing */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:border-[#A6FF00]/30 transition-all print:bg-transparent print:border-none print:p-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1.5 print:border-zinc-200">
                      <span className="font-display font-bold text-sm text-[#A6FF00] print:text-zinc-900">Video Editing</span>
                      <span className="w-12 h-1 bg-[#A6FF00] rounded-full print:hidden" />
                    </div>
                    <p className="text-xs text-gray-400 print:text-zinc-700 leading-relaxed">
                      Skilled in editing raw footage into engaging videos using cuts, transitions, effects, color correction, and audio enhancement. Strong sense of timing, storytelling, and audience engagement, with experience in creating content for YouTube and social media.
                    </p>
                  </div>

                  {/* Skill 2: Graphic Design */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:border-[#8A2EFF]/30 transition-all print:bg-transparent print:border-none print:p-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1.5 print:border-zinc-200">
                      <span className="font-display font-bold text-sm text-[#8A2EFF] print:text-zinc-900">Graphic Design</span>
                      <span className="w-12 h-1 bg-[#8A2EFF] rounded-full print:hidden" />
                    </div>
                    <p className="text-xs text-gray-400 print:text-zinc-700 leading-relaxed">
                      Skilled in creating visually appealing designs using layouts, typography, colors, and images. Experienced in designing content for social media, branding, and digital platforms with a strong sense of creativity and visual storytelling.
                    </p>
                  </div>

                  {/* Skill 3: YouTube Video Creating */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:border-[#FF2D55]/30 transition-all print:bg-transparent print:border-none print:p-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1.5 print:border-zinc-200">
                      <span className="font-display font-bold text-sm text-[#FF2D55] print:text-zinc-900">YouTube Video Creating</span>
                      <span className="w-12 h-1 bg-[#FF2D55] rounded-full print:hidden" />
                    </div>
                    <p className="text-xs text-gray-400 print:text-zinc-700 leading-relaxed">
                      Experienced in creating engaging YouTube videos from concept to final upload, including scripting, editing, thumbnail design, and SEO optimization. Skilled in understanding audience trends, improving viewer retention, and growing channel performance through creative and strategic content.
                    </p>
                  </div>

                  {/* Skill 4: Occult */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:border-emerald-500/30 transition-all print:bg-transparent print:border-none print:p-0">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1.5 print:border-zinc-200">
                      <span className="font-display font-bold text-sm text-emerald-400 print:text-zinc-900">Occult Sciences</span>
                      <span className="w-12 h-1 bg-emerald-500 rounded-full print:hidden" />
                    </div>
                    <p className="text-xs text-gray-400 print:text-zinc-700 leading-relaxed">
                      Knowledgeable in astrology, numerology, vastu, and Lal Kitab, with the ability to analyze charts, interpret patterns, and provide meaningful insights and remedies. Skilled in creating engaging and informative content for spiritual and niche audiences.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR (Languages, Interests, References, Declaration - 4 columns) */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:border-l lg:border-white/5 lg:pl-8 print:border-zinc-200 print:pl-4">
              
              {/* LANGUAGES SECTION */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 print:border-zinc-200">
                  <Languages className="w-4 h-4 text-[#A6FF00]" />
                  <h2 className="font-display font-black text-sm text-white tracking-wide uppercase print:text-zinc-900">
                    Languages
                  </h2>
                </div>
                
                <div className="flex flex-col gap-3 font-sans text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-white print:text-zinc-950">
                      <span>English</span>
                      <span className="text-[#A6FF00] print:text-emerald-700">Expert</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 print:text-zinc-600">
                      Expert in reading, writing, and communication, with the ability to create clear and engaging content.
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-2.5 print:border-zinc-100">
                    <div className="flex justify-between font-bold text-white print:text-zinc-950">
                      <span>Hindi</span>
                      <span className="text-[#8A2EFF] print:text-purple-700">Native</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 print:text-zinc-600">
                      Native-level proficiency with strong verbal and written communication skills.
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-2.5 print:border-zinc-100">
                    <div className="flex justify-between font-bold text-white print:text-zinc-950">
                      <span>Gujarati</span>
                      <span className="text-[#FF2D55] print:text-rose-700">Native</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 print:text-zinc-600">
                      Native proficiency with excellent reading, writing, and speaking skills for regional audiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* INTERESTS SECTION */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 print:border-zinc-200">
                  <Heart className="w-4 h-4 text-[#FF2D55]" />
                  <h2 className="font-display font-black text-sm text-white tracking-wide uppercase print:text-zinc-900">
                    Interests
                  </h2>
                </div>
                
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF00] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold print:text-zinc-900">Designing:</strong>{' '}
                      <span className="text-gray-400 print:text-zinc-700">Passionate about creating visually appealing designs, exploring styles &amp; trends.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A2EFF] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold print:text-zinc-900">Occult:</strong>{' '}
                      <span className="text-gray-400 print:text-zinc-700">Astrology, numerology, vastu, Lal Kitab, exploring spiritual insights.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white font-semibold print:text-zinc-900">Creating:</strong>{' '}
                      <span className="text-gray-400 print:text-zinc-700">Content, visuals, videos, focus on innovation &amp; bringing ideas to life.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* REFERENCES SECTION */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 print:border-zinc-200">
                  <MessageSquare className="w-4 h-4 text-[#8A2EFF]" />
                  <h2 className="font-display font-black text-sm text-white tracking-wide uppercase print:text-zinc-900">
                    References
                  </h2>
                </div>
                
                <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 print:bg-transparent print:border-none print:p-0">
                  <div className="font-display font-extrabold text-xs text-[#A6FF00] print:text-zinc-950">
                    Prath Udhnawala
                  </div>
                  <p className="font-mono text-[10px] text-gray-400 italic mt-0.5 print:text-zinc-600">
                    Data Scientist | AI | ML | Android Developer
                  </p>
                  <p className="font-sans text-[11px] text-gray-500 mt-1 print:text-zinc-600">
                    Red &amp; White Skill Education
                  </p>
                  <div className="flex flex-col gap-0.5 mt-2 font-mono text-[10px] text-gray-300 print:text-zinc-700 border-t border-white/5 pt-2 print:border-zinc-100">
                    <span>askforvarn@gmail.com</span>
                    <span>+91 90237 20637</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* DECLARATION SECTION (Signature space) */}
          <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-6 items-end print:border-zinc-200">
            <div className="md:col-span-8">
              <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase block mb-1.5">// SOLEMN DECLARATION</span>
              <p className="font-sans text-xs italic text-gray-400 print:text-zinc-700 leading-relaxed max-w-lg">
                &ldquo;This is not the end. I think you want my signature, Here it is&rdquo;
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-center md:items-end">
              {/* Fake Interactive Handwriting Signature */}
              <div className="relative select-none text-center">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">AUTHOR SIGNATURE</span>
                <div 
                  className="font-sans text-3xl font-light italic text-[#A6FF00] py-1 select-none tracking-wide print:text-zinc-900" 
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Hetsh Code
                </div>
                <div className="w-32 h-[1px] bg-white/20 mt-1 mx-auto md:mr-0 print:bg-zinc-300" />
                <p className="font-mono text-[9px] text-gray-500 mt-1">Surat, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* THANK YOU BLOCK */}
          <div className="mt-8 rounded-2xl p-6 bg-[#A6FF00]/5 border border-[#A6FF00]/15 relative overflow-hidden flex items-start gap-4 print:bg-transparent print:border-zinc-200 print:p-4">
            <HeartHandshake className="w-8 h-8 text-[#A6FF00] shrink-0 animate-bounce print:text-zinc-700" />
            <div className="flex-1">
              <h4 className="font-display font-bold text-sm text-[#A6FF00] tracking-wide uppercase print:text-zinc-900">
                Thank You Very Much
              </h4>
              <p className="font-sans text-xs text-gray-300 leading-relaxed mt-1 print:text-zinc-700">
                Thank you for taking the time to review my resume. I truly appreciate your consideration and the opportunity to present my skills and experience. I look forward to the possibility of contributing my creativity and dedication to your organization.
              </p>
              <p className="font-sans text-xs text-[#A6FF00] font-semibold mt-2 flex items-center gap-1 print:text-zinc-900">
                Goodbye, and have a great day ahead! &bull; <span className="animate-pulse">✨</span>
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Embedded style block specifically to support standard clean white browser print */}
      <style>{`
        @media print {
          body, html, #root {
            background: white !important;
            color: black !important;
          }
          .glassmorphism, .glassmorphism-premium {
            background: white !important;
            border: none !important;
            box-shadow: none !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
