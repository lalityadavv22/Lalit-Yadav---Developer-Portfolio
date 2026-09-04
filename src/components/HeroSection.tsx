import React from 'react';
import { ArrowRight, MapPin, Github, Linkedin, Mail, Phone, Send, Terminal, Cpu } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { soundFx } from '../utils/audio';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playClick();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/lalityadavv22',
      label: 'github.com/lalityadavv22',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lalit-yadav-823349327/',
      label: 'linkedin.com/in/lalit-yadav',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:lalityadavl420@gmail.com',
      label: 'lalityadavl420@gmail.com',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+917206724591',
      label: '+91 7206724591',
    },
  ];

  return (
    <section id="hero" className="relative w-full pt-10 sm:pt-16 pb-20 md:pb-28 scroll-mt-28">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none -z-10" />

      <FadeIn delay={0.05} className="w-full">
        {/* Role & Expertise Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-white/80 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="tracking-widest uppercase text-[11px] font-mono">Full-Stack / Software Engineer & AI</span>
        </div>

        {/* Hero Title Line 1: Lalit */}
        <div className="hero-title-1-wrapper">
          <h1 className="hero-title-1 text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-medium tracking-tighter leading-[1.02]">
            <span className="text-gradient">Lalit</span>
          </h1>
        </div>

        {/* Hero Title Line 2: Yadav. + Action CTA & Social Symbols */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mt-1 md:mt-2">
          <div className="hero-title-2-wrapper">
            <span className="block hero-title-2 text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-medium tracking-tighter leading-[1.02] italic font-light text-white/60">
              Yadav.
            </span>
          </div>

          <div className="hero-buttons-wrapper">
            <div className="hero-buttons flex flex-wrap items-center gap-3 sm:gap-4 mt-2 lg:mt-0">
              <a
                href="#projects"
                onClick={scrollToProjects}
                data-cursor="Explore"
                onMouseEnter={() => soundFx.playHover()}
                className="group flex items-center gap-3 bg-white text-black px-7 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95 tracking-normal font-sans shadow-lg shadow-white/10"
              >
                <span>View Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Social Symbols */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    data-cursor={item.name}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="glass-pill p-3.5 md:p-4 rounded-full text-white/70 hover:text-white hover:scale-110 hover:border-white/30 transition-all duration-300"
                    aria-label={item.name}
                    title={item.label}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Descriptions - Strict Resume Based */}
        <div className="mt-10 md:mt-14 max-w-4xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-snug tracking-tight">
            Building robust full-stack software systems, secure architectures, and intelligent machine learning applications.
          </p>

          <p className="text-white/60 font-light text-base md:text-lg mt-5 leading-relaxed max-w-3xl">
            Currently pursuing B.Tech in Computer Science & Engineering at Gurugram University. Specialized in core software development with Java, Python, JavaScript, Node.js, and Firebase, paired with practical experience in Ethical Hacking & Penetration Testing (C-DAC, NOIDA) and AI & Data Analytics (AICTE × Shell).
          </p>
        </div>

        {/* Professional Metadata & Highlights Strip */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-white/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-white/80 font-medium">Fullstack / Software Engineer & AI</span>
            </div>

            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white/40" />
              <span>B.Tech CSE · Gurugram University</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/40" />
              <span>Gurugram, Haryana · IST (UTC+5:30)</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onContactClick();
            }}
            data-cursor="Say Hello"
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer text-xs font-mono uppercase tracking-widest group"
          >
            <span>Let's talk</span>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </FadeIn>
    </section>
  );
};
