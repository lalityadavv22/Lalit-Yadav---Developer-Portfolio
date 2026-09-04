/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlassFilter } from './components/GlassFilter';
import { SilkBackground } from './components/SilkBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceAndSkills } from './components/ExperienceAndSkills';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal, CertificateItem } from './components/CertificateModal';
import { soundFx } from './utils/audio';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  useEffect(() => {
    // Initialize Lenis for ultra-smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Background & SVG Filter Utilities: SilkBackground and GlassFilter preserved */}
      <SilkBackground />
      <GlassFilter />

      {/* Modern interactive cursor with dynamic label tracking */}
      <CustomCursor />

      {/* Main Container */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main>
          <HeroSection onContactClick={handleContactClick} />
          <AboutSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
          <ExperienceAndSkills />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Polished Minimalist Footer */}
        <footer className="mt-20 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>Developed using React, TypeScript, Tailwind CSS & Node.js</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#hero"
              data-cursor="Top"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
            <span>·</span>
            <span>Lalit Yadav · Gurugram, India</span>
          </div>
        </footer>
      </div>

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Certificate Verification Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}
