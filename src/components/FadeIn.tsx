import React, { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  key?: React.Key;
}

export const FadeIn = ({ children, delay = 0, className = '', id }: FadeInProps) => {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;
      gsap.fromTo(
        elRef.current,
        { opacity: 0, y: 60, scale: 0.95, rotationX: 5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          delay: delay * 0.6,
          ease: 'power3.out',
          onComplete: () => {
            elRef.current?.classList.remove('no-transition');
            gsap.set(elRef.current, { clearProps: 'scale,rotationX' });
          },
          scrollTrigger: {
            trigger: elRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );
    },
    { scope: elRef }
  );

  return (
    <div
      id={id}
      ref={elRef}
      className={`no-transition ${className}`}
      style={{ perspective: '1000px' }}
    >
      {children}
    </div>
  );
};
