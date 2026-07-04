import { useEffect, useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Cycle every 4 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs tracking-widest text-[#A6FF00] font-bold uppercase mb-2">
              // REPUTATION & VALIDATION
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
              CLIENT TESTIMONIALS <span className="text-glow-lime text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">&amp; REVIEWS</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#A6FF00] mt-4 rounded" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
              title="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
              title="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ACTIVE TESTIMONIAL SLIDER VIEW */}
        <div className="max-w-4xl mx-auto relative px-4">
          
          {/* Main Card Container */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="glassmorphism-premium rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden text-left shadow-2xl transition-all duration-500 transform hover:scale-[1.01] hover:border-white/10 border-glow-lime"
          >
            {/* Massive background quotes icon */}
            <div className="absolute top-6 right-6 text-white/[0.02] pointer-events-none select-none">
              <Quote className="w-48 h-48" />
            </div>

            {/* Layout */}
            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Star Ratings */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#A6FF00] text-[#A6FF00] filter drop-shadow-[0_0_4px_rgba(166,255,0,0.5)]" />
                ))}
              </div>

              {/* Quote copy */}
              <p className="font-serif italic text-white text-lg md:text-xl leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="h-[1px] bg-white/5 my-2" />

              {/* Client Profile details */}
              <div className="flex items-center gap-4">
                {/* Custom Vector Avatar frame */}
                <div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-tr from-lime-400 via-emerald-400 to-[#A6FF00] flex items-center justify-center">
                  <div className="w-full h-full bg-[#101010] rounded-full flex items-center justify-center text-white font-display font-extrabold text-sm border border-white/5">
                    {testimonials[activeIndex].name[0]}
                  </div>
                </div>

                <div className="text-left">
                  <span className="block font-display font-bold text-base text-white">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="block font-mono text-xs text-gray-400 font-semibold mt-1">
                    {testimonials[activeIndex].role} • <span className="text-[#A6FF00]">{testimonials[activeIndex].company}</span>
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Stepper Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-8 bg-[#A6FF00] shadow-[0_0_8px_#A6FF00]' 
                    : 'w-2 bg-white/10 hover:bg-white/20'
                }`}
                title={`View Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
