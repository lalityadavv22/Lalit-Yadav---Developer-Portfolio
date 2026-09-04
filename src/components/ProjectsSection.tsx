import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code2, Sparkles, Layers, X, CheckCircle2, ChevronRight, Shield, Database, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'all' | 'ai' | 'backend' | 'security';
  description: string;
  features: string[];
  tech: string[];
  github: string;
  live?: string;
  highlight?: string;
}

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Strictly Lalit Yadav's resume academic and internship projects
  const projects: Project[] = [
    {
      id: 'crickai',
      title: 'CrickAI — AI Cricket Training System',
      category: 'AI & SPORTS / FULL-STACK',
      categoryFilter: 'ai',
      description:
        'Engineered an LLM-driven coaching assistant (powered by Ollama) with real-time Firebase backend, enabling natural-language tactical training feedback and athlete telemetry. Deployed cross-platform interface via Antigravity framework.',
      features: [
        'Local LLM inference via Ollama providing customized stroke mechanics & tactical feedback',
        'Real-time Firebase Firestore synchronization for training drills and session telemetry',
        'Interactive performance dashboards tracking batting strike rates and bowling line-and-length consistency',
        'Cross-platform responsive interface built for athletic coaches and sports academies',
      ],
      tech: ['Node.js', 'Firebase', 'Ollama LLM', 'JavaScript', 'Antigravity Framework', 'Real-Time Telemetry'],
      github: 'https://github.com/lalityadavv22',
      highlight: 'Local LLM & Real-Time Telemetry',
    },
    {
      id: 'money-transfer-system',
      title: 'Money Transfer System',
      category: 'FINTECH & SECURITY',
      categoryFilter: 'security',
      description:
        'Designed a secure peer-to-peer transaction system with an SQL-backed ledger, comprehensive input sanitisation, and role-based access control (RBAC) – reducing manual reconciliation effort and ensuring atomic balance integrity.',
      features: [
        'Atomic SQL-backed ledger guaranteeing zero transaction loss and double-entry balance verification',
        'Multi-factor role-based permissions (RBAC) isolating standard users from administrative auditing logs',
        'Cryptographically signed tokens and parameterized queries shielding against injection vectors',
        'Real-time account balance updates with live transaction confirmation receipts',
      ],
      tech: ['Python', 'SQL Ledger', 'Node.js', 'RBAC Security', 'JWT Auth', 'Web Architecture'],
      github: 'https://github.com/lalityadavv22',
      highlight: 'Atomic SQL Ledger & RBAC',
    },
    {
      id: 'data-analytics-pipeline',
      title: 'AI & Data Analytics Pipeline',
      category: 'DATA ENGINEERING & ML',
      categoryFilter: 'ai',
      description:
        'End-to-end data analytics and predictive modeling pipeline built in Python, evaluating energy and sustainability datasets as part of the AICTE × Shell × Edunet Foundation Skills4Future program.',
      features: [
        'Automated data ingestion, cleansing, and statistical feature engineering in Python',
        'Supervised machine learning algorithms with precision, recall, and accuracy benchmarking',
        'Interactive data visualization of predictive trends and statistical metrics with Pandas & Scikit-Learn',
        'Scalable pipeline architecture designed for repeatable batch evaluation and model validation',
      ],
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Pipelines', 'Supervised ML'],
      github: 'https://github.com/lalityadavv22',
      highlight: 'Skills4Future Program',
    },
    {
      id: 'vulnerability-scanner',
      title: 'Vulnerability Assessment & Network Scanner',
      category: 'OFFENSIVE SECURITY',
      categoryFilter: 'security',
      description:
        'Security scanning and vulnerability assessment framework developed during ethical hacking internship at C-DAC, NOIDA under Ministry of Electronics & IT (MeitY) Cyber Gyan Project.',
      features: [
        'Automated port and service vulnerability enumeration across simulated enterprise environments',
        'Security evaluation frameworks directly applicable to cybersecurity and cloud defense',
        'Threat analysis script suite identifying misconfigurations and exploit vectors',
        'Structured audit reports documenting remediation steps for network defense and system hardening',
      ],
      tech: ['Linux Hardening', 'Network Scanning', 'Python', 'Threat Analysis', 'Security Audit', 'Pen Testing'],
      github: 'https://github.com/lalityadavv22',
      highlight: 'MeitY Cyber Gyan Project',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.categoryFilter === selectedCategory);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeProject]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Data Science' },
    { id: 'security', label: 'Security & Systems' },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 w-full mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="work-header border-b border-white/[0.08] pb-8 mb-4">
        <div className="flex items-baseline justify-between mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            04 // Selected Works
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 hidden sm:inline">
            Fullstack / Software Engineer & AI
          </span>
        </div>

        {/* Original, distinctive headline */}
        <h2 className="mt-6 font-display uppercase font-light leading-[0.92] tracking-[-0.04em] text-[clamp(2.5rem,7vw,7rem)] text-white">
          Architected
          <br />
          Software &
          <br />
          <span className="font-medium text-gradient">AI Systems.</span>
        </h2>

        {/* Project count and categories */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            <span>{projects.length} Verified Projects</span>
            <span>·</span>
            <span>Python · Java · Node.js · Firebase · AI/ML</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List with Editorial High-End Layout */}
      <div className="divide-y divide-white/[0.08]">
        {filteredProjects.map((project, idx) => {
          const formattedIndex = String(idx + 1).padStart(2, '0');

          return (
            <article
              key={project.id}
              className="work-item group relative py-12 md:py-16 transition-colors hover:bg-white/[0.015]"
            >
              {/* Background Watermark Index */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-display font-light leading-none tracking-[-0.05em] text-white/[0.04] text-[clamp(4.5rem,9vw,9rem)] hidden lg:block"
              >
                {formattedIndex}
              </span>

              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12">
                {/* Left Column: Project Details */}
                <div className="col-span-1 flex flex-col items-start gap-4 md:col-span-7 lg:pl-16 xl:pl-20">
                  {/* Category and Highlight Badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <>
                        <span className="text-white/20">·</span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/5">
                          {project.highlight}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title with hover slide effect */}
                  <h3 className="font-display font-medium uppercase tracking-[-0.03em] leading-none transition-transform duration-300 group-hover:translate-x-1.5 text-[clamp(2rem,3.5vw,3.2rem)] text-white">
                    <button
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        setActiveProject(project);
                      }}
                      className="text-left text-white hover:text-white/90 focus-visible:outline-none cursor-pointer group-hover:text-gradient"
                    >
                      {project.title}
                    </button>
                  </h3>

                  {/* Description */}
                  <p className="max-w-xl text-base font-light leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  {/* Tech stack bulleted tags */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 py-1">
                    {project.tech.map((t, tIdx) => (
                      <span key={t} className="flex items-center gap-x-2.5">
                        {tIdx > 0 && (
                          <span aria-hidden="true" className="text-white/20">
                            ·
                          </span>
                        )}
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                          {t}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="Source"
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                    >
                      <Github size={13} />
                      <span>Source Repository</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        setActiveProject(project);
                      }}
                      data-cursor="Architecture"
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-wider font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-md"
                    >
                      <span>System Specs</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>

                {/* Right Column: High-tech Media/Architecture Preview */}
                <div className="col-span-1 md:col-span-5">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveProject(project);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveProject(project);
                      }
                    }}
                    data-cursor="Case Study"
                    onMouseEnter={() => soundFx.playHover()}
                    className="group/media relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-black/50 p-6 flex flex-col justify-between hover:border-white/25 transition-all duration-500 shadow-2xl"
                  >
                    {/* Visual Blueprint Grid & Glowing Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] transition-transform duration-500 group-hover/media:scale-105 pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

                    {/* Header of Preview Box */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="ml-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-white/30 tracking-widest">
                        SYS::{formattedIndex}
                      </span>
                    </div>

                    {/* Central Schematic / High-Tech Visual */}
                    <div className="relative z-10 py-3 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover/media:scale-110 group-hover/media:border-white/30 transition-all duration-300">
                        {project.categoryFilter === 'ai' ? (
                          <Sparkles className="w-6 h-6 text-emerald-400" />
                        ) : project.categoryFilter === 'security' ? (
                          <Shield className="w-6 h-6 text-indigo-400" />
                        ) : (
                          <Code2 className="w-6 h-6 text-white/80" />
                        )}
                      </div>
                      <p className="font-display font-medium text-base sm:text-lg text-white/90 tracking-tight">
                        {project.title}
                      </p>
                      <p className="font-mono text-[11px] text-white/40 mt-1">
                        {project.tech.slice(0, 3).join(' · ')}
                      </p>
                    </div>

                    {/* Footer of Preview Box */}
                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                      <span className="flex items-center gap-1.5 text-emerald-400/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>System Architecture</span>
                      </span>
                      <span className="flex items-center gap-1 group-hover/media:text-white transition-colors">
                        <span>Click to inspect</span>
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Full Case Study & Architecture Modal */}
      {activeProject && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[90] flex h-[100dvh] flex-col bg-[#030303] text-white animate-fadeIn"
        >
          {/* Modal Header */}
          <header className="shrink-0 border-b border-white/[0.08] bg-[#030303]/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveProject(null);
                }}
                data-cursor="Back"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-white/70 transition-all duration-300 hover:bg-white hover:text-black active:scale-95 cursor-pointer"
              >
                <X size={14} />
                <span>All Projects</span>
              </button>

              <p className="font-mono text-xs tracking-widest text-white/40" aria-live="polite">
                {activeProject.category} — {activeProject.title}
              </p>
            </div>
          </header>

          {/* Modal Content */}
          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 py-10 md:grid-cols-12 md:gap-14 md:px-12 md:py-12">
              {/* Left Column: Project Overview & Specs */}
              <div className="md:col-span-6 flex flex-col">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400">
                  Engineering Spec — {activeProject.category}
                </p>

                <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium uppercase leading-[0.98] tracking-tight text-gradient">
                  {activeProject.title}
                </h1>

                <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-white/70">
                  {activeProject.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="mt-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
                    Architectural & Engineering Highlights
                  </h4>
                  <ul className="space-y-3">
                    {activeProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/80 font-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-8">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="GitHub"
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-black transition-all hover:bg-white/90 active:scale-95"
                  >
                    <Github size={14} />
                    <span>Explore GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Architecture Panel */}
              <div className="md:col-span-6">
                <div className="glass-panel-strong rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                      System Verification & Metrics
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-1">
                        System Status
                      </p>
                      <p className="font-medium text-white flex items-center gap-2">
                        <span>Completed Academic & Internship Work</span>
                        <span className="text-emerald-400 text-xs font-mono">● Verified</span>
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-1">
                        Architecture Design
                      </p>
                      <p className="text-sm font-light text-white/80 leading-relaxed">
                        Engineered with modular code organization, rigorous input sanitization, and dependable data layers adhering to computer science best practices.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-1">
                        Author & Institution
                      </p>
                      <p className="text-xs font-mono text-white/70">
                        Lalit Yadav · B.Tech CSE, Gurugram University
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                    <span>Press ESC to exit</span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="text-white/70 hover:text-white underline cursor-pointer"
                    >
                      Close view
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </section>
  );
};
