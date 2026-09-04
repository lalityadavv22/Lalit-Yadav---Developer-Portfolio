import React from 'react';
import { ExternalLink, ShieldCheck, GraduationCap, Award, BookOpen } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { CertificateItem } from './CertificateModal';
import { soundFx } from '../utils/audio';

interface AboutSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const certificationsData: CertificateItem[] = [
  {
    id: 'cs50x',
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    issueDate: "Jun – Aug 2024",
    credentialId: "CS50X-2024-LALIT",
    skills: ["Algorithms", "Data Structures", "C", "Python", "SQL", "Memory Management", "Web Development"],
    link: "https://cs50.harvard.edu/x/",
    summary: "Comprehensive mastery in foundational computer science: computational thinking, memory allocation, pointers, algorithmic complexity, data structures (hash tables, trees, graphs), and software engineering.",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  {
    id: 'cdac-cyber',
    name: "Ethical Hacking & Penetration Testing",
    issuer: "C-DAC, NOIDA · MeitY",
    issueDate: "Jun – Aug 2025",
    credentialId: "CDAC-CYBERGYAN-2025",
    skills: ["Vulnerability Assessment", "Network Scanning", "Threat Analysis", "Linux Hardening", "Penetration Testing"],
    link: "https://www.cdac.in/",
    summary: "Practical offensive security training and penetration testing under Ministry of Electronics & IT (MeitY) Cyber Gyan Project, analyzing simulated architectures and enterprise threat vectors.",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: 'aicte-shell',
    name: "AI & Data Analytics — Skills4Future",
    issuer: "AICTE × Shell × Edunet Foundation",
    issueDate: "Jun – Jul 2025",
    credentialId: "EDUNET-S4F-SHELL-2025",
    skills: ["Python", "Supervised ML", "Data Pipelines", "Model Evaluation", "Scikit-Learn", "Pandas"],
    link: "https://edunetfoundation.org/",
    summary: "Built end-to-end data analytics pipelines in Python; applied supervised machine learning models to industry-relevant datasets as part of the nationwide Skills4Future program.",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectCertificate }) => {
  return (
    <section id="about" className="mb-28 scroll-mt-28">
      {/* Section Header */}
      <div className="mb-10 md:mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
          01 // About & Background
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
          Engineering & Education
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Background & Education */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <div
              id="about-card"
              className="glass-panel-strong rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col justify-between h-full"
            >
              <div className="space-y-6 text-white/80 font-light leading-relaxed text-base md:text-lg">
                <p>
                  I am a <span className="text-white font-medium">Computer Science & Engineering</span> undergraduate at{' '}
                  <span className="text-white font-medium">Gurugram University</span> (2023 – 2027), focused on full-stack software development, systems engineering, and practical AI implementations.
                </p>
                <p>
                  My technical foundation spans object-oriented programming in Java and Python, backend development with Node.js and Firebase, and secure database design with SQL. With hands-on experience in penetration testing (C-DAC) and predictive data analytics (AICTE × Shell), I enjoy solving complex problems and engineering dependable software systems.
                </p>
              </div>

              {/* Education Grid Card - Strictly No CGPA */}
              <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>Academic Record</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                        Undergraduate
                      </span>
                      <h4 className="text-sm font-semibold text-white">
                        B.Tech Computer Science & Engineering
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Gurugram University
                      </p>
                    </div>
                    <span className="text-xs font-mono text-white/40 mt-3 block">
                      2023 – 2027 (Expected)
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                        Senior Secondary (Class XII)
                      </span>
                      <h4 className="text-sm font-semibold text-white">
                        CBSE Science & Mathematics
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Vivekanand Sr. Sec. School, Dharuhera
                      </p>
                    </div>
                    <span className="text-xs font-mono text-white/40 mt-3 block">
                      Completed 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="lg:col-span-5 flex flex-col">
          <FadeIn delay={0.2} className="h-full">
            <div
              id="certifications-card"
              className="glass-panel-strong rounded-[2rem] p-8 md:p-10 border border-white/10 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-heading font-semibold text-lg text-white">
                      Verified Credentials
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-white/5 text-white/60 px-2.5 py-1 rounded-full border border-white/10">
                    {certificationsData.length} Certified
                  </span>
                </div>

                <div className="space-y-4">
                  {certificationsData.map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => {
                        soundFx.playClick();
                        onSelectCertificate(cert);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      data-cursor="Verify"
                      className="group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                            {cert.issuer}
                          </span>
                          <h4 className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors mt-2">
                            {cert.name}
                          </h4>
                        </div>
                        <ExternalLink size={14} className="text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                      </div>

                      <p className="text-xs text-white/50 line-clamp-2 mt-1.5 font-light">
                        {cert.summary}
                      </p>

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-white/40">
                        <span>{cert.issueDate}</span>
                        <span className="text-emerald-400/80 group-hover:underline">Verify Credential →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                <span className="flex items-center gap-1.5">
                  <Award size={13} className="text-emerald-400" />
                  <span>Verified Credentials</span>
                </span>
                <span>Click to view details</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
