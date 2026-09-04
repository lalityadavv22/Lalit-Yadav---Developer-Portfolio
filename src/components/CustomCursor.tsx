import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check for [data-cursor] attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]');
      const label = cursorTarget?.getAttribute('data-cursor') || null;

      const interactive = !label && !!target?.closest('a, button, [role="button"], input, textarea, select');

      setCursorText(label);
      setIsHoveringInteractive(interactive);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setCursorText(null);
      setIsHoveringInteractive(false);
    };

    const animate = () => {
      // Smooth interpolation
      currentX = lerp(currentX, mouseX, 0.16);
      currentY = lerp(currentY, mouseY, 0.16);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Don't render on mobile/touch
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-out will-change-transform ${
          cursorText
            ? 'w-1.5 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
            : isHoveringInteractive
            ? 'w-2 h-2 bg-emerald-400 scale-150'
            : 'w-1.5 h-1.5 bg-white'
        }`}
      />

      {/* Outer Follower Ring & Label Box */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center will-change-transform"
      >
        {cursorText ? (
          <div
            ref={labelRef}
            className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.3)] animate-in zoom-in-75 duration-200 select-none whitespace-nowrap"
          >
            {cursorText}
          </div>
        ) : (
          <div
            className={`rounded-full border transition-all duration-300 ease-out ${
              isHoveringInteractive
                ? 'w-12 h-12 border-white/60 bg-white/10 backdrop-blur-[2px] scale-110'
                : 'w-8 h-8 border-white/20 bg-transparent'
            }`}
          />
        )}
      </div>
    </div>
  );
};
