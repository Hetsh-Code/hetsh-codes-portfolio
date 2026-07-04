import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hoveredType, setHoveredType] = useState<'link' | 'lime' | 'purple' | 'red' | 'none'>('none');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const trailRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Check if touch device
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);
      setIsMobile(mobile);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic hover states using custom data attributes or tag selectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      if (interactive) {
        const cursorAttr = interactive.getAttribute('data-cursor');
        if (cursorAttr === 'lime') setHoveredType('lime');
        else if (cursorAttr === 'purple') setHoveredType('purple');
        else if (cursorAttr === 'red') setHoveredType('red');
        else setHoveredType('link');
      } else {
        setHoveredType('none');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Soft trailing ring using lerp (Linear Interpolation)
  useEffect(() => {
    if (isMobile) return;

    let animId: number;
    const lerp = () => {
      // Lerp positioning
      trailRef.current.x += (position.x - trailRef.current.x) * 0.15;
      trailRef.current.y += (position.y - trailRef.current.y) * 0.15;
      setTrailPosition({ x: trailRef.current.x, y: trailRef.current.y });
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);

    return () => cancelAnimationFrame(animId);
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  // Custom styles depending on hovered item
  let ringStyle = 'border-[#ffffff] scale-100';
  let dotStyle = 'bg-[#ffffff]';

  if (hoveredType === 'link') {
    ringStyle = 'border-[#A6FF00] bg-[#A6FF00]/10 scale-150 border-glow-lime';
    dotStyle = 'bg-[#A6FF00] scale-75';
  } else if (hoveredType === 'lime') {
    ringStyle = 'border-[#A6FF00] bg-[#A6FF00]/15 scale-180 border-glow-lime';
    dotStyle = 'bg-[#A6FF00] scale-50';
  } else if (hoveredType === 'purple') {
    ringStyle = 'border-[#8A2EFF] bg-[#8A2EFF]/15 scale-180 border-glow-purple';
    dotStyle = 'bg-[#8A2EFF] scale-50';
  } else if (hoveredType === 'red') {
    ringStyle = 'border-[#FF2D55] bg-[#FF2D55]/15 scale-180 border-glow-red';
    dotStyle = 'bg-[#FF2D55] scale-50';
  }

  return (
    <>
      {/* Inner Neon Dot */}
      <div
        id="custom-cursor-dot"
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-lg ${dotStyle}`}
        style={{ left: position.x, top: position.y }}
      />

      {/* Outer Glowing Ring */}
      <div
        id="custom-cursor-ring"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out mix-blend-screen ${ringStyle}`}
        style={{ left: trailPosition.x, top: trailPosition.y }}
      />
    </>
  );
}
