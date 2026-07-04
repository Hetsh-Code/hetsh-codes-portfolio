import { useState, useEffect, useRef } from 'react';
import { Search, X, Folder, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { projects, services, skills } from '../data';
import { Project, Service, Skill } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectSelect: (project: Project) => void;
  onSectionNavigate: (sectionId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onProjectSelect,
  onSectionNavigate
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-focus input on opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle Escape key closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Real-time matching filter arrays
  const matchedProjects = query.trim() === '' ? [] : projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const matchedServices = query.trim() === '' ? [] : services.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchedSkills = query.trim() === '' ? [] : skills.filter(sk =>
    sk.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = matchedProjects.length + matchedServices.length + matchedSkills.length;

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black/85 backdrop-blur-md flex items-start justify-center pt-[10vh] px-4">
      {/* Outer Click dismiss */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Spotlight Frame */}
      <div className="w-full max-w-xl bg-[#0d0d0e]/95 border border-white/10 rounded-2xl p-4 shadow-3xl z-10 flex flex-col relative overflow-hidden animate-[fadeIn_0.2s_ease-out]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A6FF00]/30 to-transparent" />

        {/* Input Bar */}
        <div className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl px-4 py-3 mb-4">
          <Search className="w-5 h-5 text-[#A6FF00]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type coordinates (e.g. Logo, Figma, Packaging, UI)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-white text-sm flex-grow font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Feed Results */}
        <div className="overflow-y-auto max-h-[50vh] pr-1 flex flex-col gap-4 text-left">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-gray-500 text-xs font-mono uppercase tracking-wider">
              ✦ ENTER PARAMETERS TO SEARCH PORTFOLIO
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-gray-500 text-xs font-mono uppercase tracking-wider">
              ✦ ZERO RESULTS FOUND MATCHING PARAMETERS
            </div>
          ) : (
            <>
              {/* Projects List */}
              {matchedProjects.length > 0 && (
                <div>
                  <span className="font-mono text-[8px] text-[#FF2D55] font-bold tracking-widest block uppercase mb-2">
                    // MATCHED WORKS ARCHIVES ({matchedProjects.length})
                  </span>
                  <div className="flex flex-col gap-2">
                    {matchedProjects.map(project => (
                      <div
                        key={project.id}
                        onClick={() => {
                          onProjectSelect(project);
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF2D55] flex items-center justify-between cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Folder className="w-4 h-4 text-[#FF2D55]" />
                          <div>
                            <span className="block font-sans text-xs font-bold text-white leading-none">{project.title}</span>
                            <span className="block font-sans text-[10px] text-gray-400 mt-1 leading-none">{project.category}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services List */}
              {matchedServices.length > 0 && (
                <div>
                  <span className="font-mono text-[8px] text-[#A6FF00] font-bold tracking-widest block uppercase mb-2">
                    // MATCHED SERVICES ({matchedServices.length})
                  </span>
                  <div className="flex flex-col gap-2">
                    {matchedServices.map(service => (
                      <div
                        key={service.id}
                        onClick={() => {
                          onSectionNavigate('services');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#A6FF00] flex items-center justify-between cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-4 h-4 text-[#A6FF00]" />
                          <div>
                            <span className="block font-sans text-xs font-bold text-white leading-none">{service.title}</span>
                            <span className="block font-sans text-[10px] text-gray-400 mt-1 leading-none truncate max-w-sm">{service.description}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills List */}
              {matchedSkills.length > 0 && (
                <div>
                  <span className="font-mono text-[8px] text-[#8A2EFF] font-bold tracking-widest block uppercase mb-2">
                    // MATCHED STACK CAPABILITIES ({matchedSkills.length})
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {matchedSkills.map(skill => (
                      <div
                        key={skill.id}
                        onClick={() => {
                          onSectionNavigate('skills');
                          onClose();
                        }}
                        className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#8A2EFF] flex items-center gap-2.5 cursor-pointer transition-colors"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#8A2EFF]" />
                        <span className="font-display font-bold text-xs text-white">{skill.name}</span>
                        <span className="font-mono text-[9px] text-[#8A2EFF] bg-[#8A2EFF]/10 px-1.5 py-0.5 rounded-md font-bold">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
