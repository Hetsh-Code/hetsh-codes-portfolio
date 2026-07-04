import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Linkedin, Instagram, ArrowUpRight, MessageSquare, ExternalLink, RefreshCw } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', projectType: 'brand', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // --- HTML5 CANVAS 3D PARTICLE GLOBE ENGINE ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = 400;
    let height = canvas.height = 400;

    // Handle Resize observer for high-DPI displays
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      width = rect.width;
      height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class representing 3D node
    interface Particle {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
    }

    const particles: Particle[] = [];
    const numParticles = 200;
    const radius = 120;
    const focalLength = 300;

    // Distribute nodes evenly across a sphere using Golden Spiral
    for (let i = 0; i < numParticles; i++) {
      const phi = Math.acos(-1 + (2 * i) / numParticles);
      const theta = Math.sqrt(numParticles * Math.PI) * phi;

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        px: 0,
        py: 0
      });
    }

    let angleY = 0.003;
    let angleX = 0.001;

    // Mouse interactive tracking to alter rotation speed
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      angleY = mouseX * 0.00003;
      angleX = mouseY * 0.00003;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Trigonometrics for fast rotation matrix computation
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      particles.forEach((p) => {
        // Rotate around Y-axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X-axis
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;

        // Project onto 2D viewport
        const scale = focalLength / (focalLength + z2);
        p.px = p.x * scale + width / 2;
        p.py = p.y * scale + height / 2;

        // Draw node
        if (p.px >= 0 && p.px <= width && p.py >= 0 && p.py <= height) {
          // Compute brightness based on depth (z-coordinate)
          const alpha = Math.max(0.1, (radius - z2) / (2 * radius));
          ctx.beginPath();
          ctx.arc(p.px, p.py, scale * 1.5, 0, 2 * Math.PI);
          
          // Render glowing highlights depending on depth
          ctx.fillStyle = `rgba(166, 255, 0, ${alpha * 0.8})`;
          ctx.shadowBlur = scale * 2;
          ctx.shadowColor = '#A6FF00';
          ctx.fill();
        }
      });

      // Draw subtle orbital rings
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.ellipse(width / 2, height / 2, radius, radius * 0.3, Math.PI / 6, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(138, 46, 255, 0.15)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- FORM HANDLING & VALIDATION ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Full Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Invalid Email coordinates';
    }
    if (!form.message.trim()) tempErrors.message = 'Please input project details';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Project Inquiry: [${form.projectType.toUpperCase()}] from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Hetsh,\n\n` +
      `I would like to initiate a new project inquiry with you.\n\n` +
      `--- CLIENT DETAILS ---\n` +
      `Full Name: ${form.name}\n` +
      `Email Coordinates: ${form.email}\n` +
      `Inquiry Vector: ${form.projectType.toUpperCase()}\n\n` +
      `--- PROJECT OBJECTIVES ---\n` +
      `${form.message}\n\n` +
      `Sent via Portfolio Site Inquiry System.`
    );

    // Simulate premium terminal transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.location.href = `mailto:ssefashions@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 xl:px-12 relative overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs tracking-widest text-[#FF2D55] font-bold uppercase mb-2">
            // COMMUNICATIONS HUB
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white select-none">
            PROJECT INQUIRY <span className="text-glow-red text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">&amp; INTAKE</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#FF2D55] mt-4 rounded" />
        </div>

        {/* CONTACT ROW: Left (Form), Right (Interactive Globe + Links) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: GLASS CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="glassmorphism-premium rounded-3xl p-6 md:p-8 border border-white/5 relative border-glow-red">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/30 to-transparent" />
              
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                  <span className="font-mono text-[9px] text-[#FF2D55] font-bold tracking-widest block uppercase">
                    // DIAGNOSTIC INPUT PORTS
                  </span>

                  {/* Name field */}
                  <div className="relative">
                    <label 
                      className={`block font-mono text-[10px] tracking-wider uppercase mb-1.5 transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-[#FF2D55]' : 'text-gray-400'
                      }`}
                    >
                      FullName_
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      placeholder="e.g. Ren Takahashi"
                      className={`w-full bg-black/40 border rounded-xl px-4 py-3.5 text-sm text-white font-sans focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-red-500 bg-red-500/5' : 
                        focusedField === 'name' ? 'border-[#FF2D55] shadow-[0_0_12px_rgba(255,45,85,0.15)] bg-black/60' : 
                        'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 font-mono text-[9px] text-red-400 mt-1.5">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label 
                      className={`block font-mono text-[10px] tracking-wider uppercase mb-1.5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#FF2D55]' : 'text-gray-400'
                      }`}
                    >
                      EmailCoordinates_
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      placeholder="e.g. client@agency.com"
                      className={`w-full bg-black/40 border rounded-xl px-4 py-3.5 text-sm text-white font-sans focus:outline-none transition-all duration-300 ${
                        errors.email ? 'border-red-500 bg-red-500/5' : 
                        focusedField === 'email' ? 'border-[#FF2D55] shadow-[0_0_12px_rgba(255,45,85,0.15)] bg-black/60' : 
                        'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 font-mono text-[9px] text-red-400 mt-1.5">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Project selection field */}
                  <div className="relative">
                    <label 
                      className="block font-mono text-[10px] tracking-wider uppercase mb-1.5 text-gray-400"
                    >
                      InquiryVectors_
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-gray-300 font-sans focus:outline-none hover:border-white/20 focus:border-[#FF2D55] cursor-pointer"
                    >
                      <option value="brand">Brand Identity System Development</option>
                      <option value="logo">Precision Geometric Logo Design</option>
                      <option value="packaging">Tactile CPG Packaging &amp; Labeling</option>
                      <option value="ui">Glassmorphic UI Mobile/Web Interfaces</option>
                      <option value="thumbnail">High-CTR Creator Thumbnail Assets</option>
                      <option value="other">Bespoke Creative Studio Consultation</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label 
                      className={`block font-mono text-[10px] tracking-wider uppercase mb-1.5 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-[#FF2D55]' : 'text-gray-400'
                      }`}
                    >
                      ProjectObjectives_
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      placeholder="Briefly detail your creative vision, required deliverables, and schedule..."
                      className={`w-full bg-black/40 border rounded-xl px-4 py-3.5 text-sm text-white font-sans focus:outline-none transition-all duration-300 ${
                        errors.message ? 'border-red-500 bg-red-500/5' : 
                        focusedField === 'message' ? 'border-[#FF2D55] shadow-[0_0_12px_rgba(255,45,85,0.15)] bg-black/60' : 
                        'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 font-mono text-[9px] text-red-400 mt-1.5">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-mono text-xs font-bold tracking-widest text-white bg-gradient-to-r from-red-600 to-pink-500 shadow-[0_0_15px_rgba(255,45,85,0.25)] hover:shadow-[0_0_25px_rgba(255,45,85,0.45)] hover:brightness-110 active:scale-98 transform transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        TRANSMITTING SECURE DATA...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        TRANSMIT INQUIRY BLUEPRINT
                      </>
                    )}
                  </button>
                </form>
              ) : (
                // SUCCESS BLUEPRINT TERMINAL RECEIPT (HIGHLY DETAILED & PREMIUM)
                <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#A6FF00]/10 border border-[#A6FF00]/30 flex items-center justify-center mb-6 shadow-lg shadow-[#A6FF00]/5 animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-[#A6FF00]" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-white">TRANSMISSION COMPLETED!</h4>
                  <p className="font-sans text-gray-400 text-xs mt-2 max-w-sm leading-relaxed">
                    Inquiry secured in Hetsh's diagnostic pipeline. A complete creative proposal blueprint will be transmitted back to your coordinates within 24 hours.
                  </p>

                  {/* Glowing Diagnostic receipt terminal card */}
                  <div className="w-full max-w-md bg-black/60 border border-white/5 rounded-2xl p-5 mt-8 text-left font-mono text-[10px] leading-relaxed text-gray-400 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 text-[#A6FF00] text-[9px] font-bold uppercase animate-pulse">
                      // BUFFER_ONLINE
                    </div>
                    <span className="block text-white font-bold mb-3">// TRANSMISSION DATA PACKET</span>
                    <span className="block">CLIENT_ID: HU-{Math.floor(Math.random() * 900000 + 100000)}</span>
                    <span className="block">NAME: {form.name}</span>
                    <span className="block">EMAIL: {form.email}</span>
                    <span className="block">VECTORS: {form.projectType.toUpperCase()}</span>
                    <span className="block mt-2 font-sans italic text-white/80 border-t border-white/5 pt-2">"{form.message}"</span>
                  </div>

                  <button
                    onClick={() => {
                      setForm({ name: '', email: '', projectType: 'brand', message: '' });
                      setSubmitSuccess(false);
                    }}
                    className="mt-8 px-5 py-2.5 rounded-xl border border-white/10 hover:border-[#FF2D55] text-gray-400 hover:text-white font-mono text-[10px] transition-all cursor-pointer"
                  >
                    TRANSMIT NEW PACKET
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: INTERACTIVE 3D PARTICLE GLOBE & SOCIAL STATION */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 text-center lg:text-left">
            
            {/* Interactive globe wrapper */}
            <div className="relative w-full max-w-sm aspect-square glassmorphism rounded-3xl p-4 flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-x-0 bottom-4 text-center z-10 pointer-events-none">
                <span className="font-mono text-[9px] tracking-widest text-[#A6FF00] font-bold uppercase block">
                  // HU VECTOR INTAKE NETWORK
                </span>
                <span className="font-mono text-[8px] text-gray-500 uppercase block mt-0.5">
                  DRAG CURSOR OVER MATRIX TO DEFLECT ROTATION
                </span>
              </div>
              
              <canvas 
                ref={canvasRef} 
                className="w-full h-full max-w-[320px] max-h-[320px] cursor-grab active:cursor-grabbing z-0" 
              />
            </div>

            {/* Direct Connect Station */}
            <div className="w-full max-w-sm glassmorphism rounded-2xl p-5 border border-white/5 text-left flex flex-col gap-4">
              <span className="font-mono text-[9px] text-[#FF2D55] font-bold uppercase tracking-wider block">// DIRECT CHANNELS</span>
              
              {/* Channel 1: Email */}
              <a 
                href="mailto:ssefashions@gmail.com?subject=Project Inquiry" 
                className="flex justify-between items-center bg-black/40 p-3.5 rounded-xl border border-white/5 hover:border-[#FF2D55] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FF2D55]/10 text-[#FF2D55] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-bold text-white">Direct Email Address</span>
                    <span className="block font-mono text-[9px] text-gray-500 mt-0.5">ssefashions@gmail.com</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              {/* Channel 2: WhatsApp */}
              <a 
                href="https://wa.me/919023720637" 
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center bg-black/40 p-3.5 rounded-xl border border-white/5 hover:border-[#A6FF00] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#A6FF00]/10 text-[#A6FF00] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-bold text-white">WhatsApp Briefing Link</span>
                    <span className="block font-mono text-[9px] text-gray-500 mt-0.5">+91 90237 20637</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
