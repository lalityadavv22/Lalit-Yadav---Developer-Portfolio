import React, { useState } from 'react';
import { Briefcase, Code, Terminal, CheckCircle2, Database, Cpu, Layers, Server, Globe, Shield, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { soundFx } from '../utils/audio';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  badge: string;
  description: string[];
  tags: string[];
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: { name: string; tag?: string }[];
  description: string;
  accent: string;
}

export const ExperienceAndSkills: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const experiences: ExperienceItem[] = [
    {
      role: 'Ethical Hacking & Penetration Testing Intern',
      company: 'C-DAC, NOIDA',
      period: 'Jun – Aug 2025',
      badge: 'MeitY Cyber Gyan Project',
      description: [
        'Executed penetration testing on simulated environments under Ministry of Electronics & IT (MeitY) Cyber Gyan Project.',
        'Mastered network vulnerability scanning, ethical hacking methodology, exploit analysis, and enterprise threat analysis.',
        'Assessed critical system vulnerabilities and applied secure evaluation frameworks directly applicable to cybersecurity and cloud defense.',
      ],
      tags: ['Penetration Testing', 'Network Scanning', 'Threat Analysis', 'Linux Hardening', 'Security Audit', 'Vulnerability Assessment'],
    },
    {
      role: 'AI & Data Analytics Intern',
      company: 'AICTE × Shell × Edunet Foundation',
      period: 'Jun – Jul 2025',
      badge: 'Skills4Future Program',
      description: [
        'Built end-to-end data analytics pipelines in Python; applied supervised learning models to industry-relevant datasets as part of Skills4Future program deliverables.',
        'Conducted feature engineering, model validation, and predictive accuracy benchmarking for data-driven insights.',
        'Engineered reusable data transformation workflows utilizing Pandas, NumPy, and Scikit-Learn for statistical evaluation.',
      ],
      tags: ['Python', 'Supervised ML', 'Data Analytics', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Pipelines'],
    },
  ];

  const skillGroups: SkillCategory[] = [
    {
      title: 'Languages & Fundamentals',
      icon: Code,
      accent: 'text-amber-400',
      description: 'Core programming languages for systems, algorithms, and full-stack software architecture.',
      skills: [
        { name: 'Java', tag: 'core' },
        { name: 'Python', tag: 'core' },
        { name: 'JavaScript', tag: 'core' },
        { name: 'TypeScript', tag: 'core' },
        { name: 'SQL', tag: 'core' },
      ],
    },
    {
      title: 'Web & API Architecture',
      icon: Globe,
      accent: 'text-sky-400',
      description: 'High-concurrency full-stack libraries, reactive frontends, and robust API endpoints.',
      skills: [
        { name: 'React', tag: 'featured' },
        { name: 'Node.js', tag: 'featured' },
        { name: 'FastAPI', tag: 'featured' },
        { name: 'REST API', tag: 'featured' },
        { name: 'Express.js', tag: 'featured' },
      ],
    },
    {
      title: 'Databases & Cloud Backend',
      icon: Database,
      accent: 'text-emerald-400',
      description: 'Relational, document, and real-time cloud datastores with ACID-compliant integrity.',
      skills: [
        { name: 'MongoDB', tag: 'featured' },
        { name: 'PostgreSQL', tag: 'featured' },
        { name: 'Supabase', tag: 'featured' },
        { name: 'Firebase', tag: 'featured' },
        { name: 'SQL Ledger', tag: 'core' },
      ],
    },
    {
      title: 'DevOps, Systems & Tooling',
      icon: Terminal,
      accent: 'text-purple-400',
      description: 'Production infrastructure, developer environments, version control, and cloud deployment.',
      skills: [
        { name: 'Git', tag: 'featured' },
        { name: 'Linux', tag: 'featured' },
        { name: 'Vercel', tag: 'featured' },
        { name: 'VS Code', tag: 'tool' },
        { name: 'Jupyter Notebook', tag: 'tool' },
      ],
    },
    {
      title: 'Core CS & Engineering',
      icon: Cpu,
      accent: 'text-rose-400',
      description: 'Underlying computer science principles applied across software and security pipelines.',
      skills: [
        { name: 'Data Structures', tag: 'cs' },
        { name: 'OOP', tag: 'cs' },
        { name: 'Algorithms', tag: 'cs' },
        { name: 'System Design', tag: 'cs' },
        { name: 'Network Security', tag: 'security' },
        { name: 'Penetration Testing', tag: 'security' },
      ],
    },
  ];

  return (
    <section id="experience" className="mb-28 scroll-mt-28">
      {/* Experience Section Header */}
      <div className="mb-10 md:mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
          02 // Experience & Background
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
          Industry Internships
        </h2>
      </div>

      {/* Internships Timeline */}
      <div className="space-y-6 mb-24">
        {experiences.map((exp, index) => (
          <FadeIn key={exp.role} delay={0.1 * (index + 1)}>
            <div className="glass-panel-strong rounded-[2rem] p-6 sm:p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-white/40">{exp.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 mt-1 font-light">
                    {exp.company}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white/70" />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {exp.description.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm sm:text-base font-light text-white/80 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-1" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-xs font-mono text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Technical Arsenal Section Header */}
      <div id="skills" className="mb-10 md:mb-12 scroll-mt-28">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
            03 // Technical Arsenal
          </p>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            ● Production & Engineering Ready
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-white/60 font-light text-base md:text-lg mt-3 max-w-2xl">
          Core toolchain, languages, backend engines, and cloud datastores leveraged to build resilient full-stack systems.
        </p>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <FadeIn key={group.title} delay={0.08 * (idx + 1)}>
            <div className="glass-panel-strong rounded-[2rem] p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <group.icon className={`w-5 h-5 ${group.accent}`} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-white/50 font-light mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      onMouseEnter={() => soundFx.playHover()}
                      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-default ${
                        skill.tag === 'featured'
                          ? 'bg-white/10 border border-white/25 text-white shadow-[0_0_15px_rgba(255,255,255,0.06)] hover:bg-white hover:text-black hover:border-white'
                          : 'bg-white/[0.04] border border-white/10 text-white/85 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span>{group.skills.length} competencies</span>
                <span className="text-emerald-400 font-medium">Verified</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
