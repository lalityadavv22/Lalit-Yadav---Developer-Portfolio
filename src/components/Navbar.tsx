import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundFx.playClick();
    setIsMobileMenuOpen(false);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-4 z-40 w-full mb-10">
      <nav
        id="navbar-card"
        className="glass-panel-strong px-4 py-2.5 sm:px-6 sm:py-3 rounded-full flex justify-between items-center max-w-6xl mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-xl bg-black/60"
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-2.5 group"
          id="nav-logo"
          data-cursor="Top"
          onMouseEnter={() => soundFx.playHover()}
        >
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs text-white tracking-wider group-hover:scale-105 group-hover:border-white/40 transition-all duration-300">
            LY
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              Lalit <span className="text-white/40">Yadav</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor={item.label}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 relative ${
                  isActive
                    ? 'text-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.1)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Say Hello Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor="Say Hello"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <span>Say Hello</span>
          </a>

          {/* Get Resume Modal Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            id="btn-get-resume"
            data-cursor="Resume"
            onMouseEnter={() => soundFx.playHover()}
            className="primary-button flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold text-black shadow-md hover:shadow-white/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-6xl mx-auto glass-panel-strong rounded-3xl p-5 border border-white/15 animate-in fade-in slide-in-from-top-3 duration-200 backdrop-blur-2xl bg-black/80">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-white/50 flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
              Full-Stack / Software Engineer & AI
            </span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs font-semibold text-emerald-400 hover:underline"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
