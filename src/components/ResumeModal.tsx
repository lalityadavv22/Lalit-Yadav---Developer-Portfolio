import React, { useState } from 'react';
import { X, Download, Printer, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = getLalitResumeText();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Lalit_Yadav_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-white/20 relative my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-20 -mx-6 sm:-mx-10 px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-xl text-white">
              Lalit Yadav — Resume
            </span>
            <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="glass-button p-2.5 rounded-full text-white/80 hover:text-white cursor-pointer"
              title="Download Resume (.txt)"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="glass-button p-2.5 rounded-full text-white/80 hover:text-white cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="glass-button p-2.5 rounded-full text-white/80 hover:text-white cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="text-white/90 space-y-7 print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-5">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              LALIT YADAV
            </h2>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-emerald-400 text-sm mt-2 font-mono">
              <a href="mailto:lalityadavl420@gmail.com" className="hover:underline">
                lalityadavl420@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+917206724591" className="hover:underline">
                (+91) 7206724591
              </a>
              <span>|</span>
              <a href="https://github.com/lalityadavv22" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/lalityadavv22
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/lalit-yadav-823349327/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/lalit-yadav-823349327/
              </a>
            </div>
          </div>

          {/* Skills / Technical Arsenal */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider mb-3">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>TECHNICAL ARSENAL & SKILLS</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-2 text-sm text-white/80">
              <p>
                <strong className="text-white font-semibold">❖ Languages:</strong> Java, Python, JavaScript, TypeScript, SQL
              </p>
              <p>
                <strong className="text-white font-semibold">❖ Web & APIs:</strong> React, Node.js, FastAPI, REST API, Express.js
              </p>
              <p>
                <strong className="text-white font-semibold">❖ Databases & Cloud:</strong> MongoDB, PostgreSQL, Supabase, Firebase, SQL Ledger
              </p>
              <p>
                <strong className="text-white font-semibold">❖ DevOps & Tools:</strong> Git, Linux, Vercel, VS Code, Jupyter Notebook
              </p>
              <p>
                <strong className="text-white font-semibold">❖ Core CS & Security:</strong> Data Structures & Algorithms, OOP, System Design, Network Security, Penetration Testing
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>EDUCATION</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-3 text-sm text-white/80">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="text-white font-semibold">
                  ❖ B.Tech CSE | Gurugram University
                </span>
                <span className="font-mono text-white/50 text-xs">2023 – 2027 (Expected)</span>
              </div>
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="text-white/90">
                  ❖ XII (CBSE) | Vivekanand Sr. Sec. School, Dharuhera
                </span>
                <span className="font-mono text-white/50 text-xs">2023</span>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider mb-3">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>INTERNSHIPS</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-5 text-sm text-white/80">
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-white font-semibold">
                    ❖ Ethical Hacking & Penetration Testing Intern | C-DAC, NOIDA
                  </span>
                  <span className="font-mono text-emerald-400 text-xs">Jun – August 2025</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-white/70">
                  Executed penetration testing on simulated environments under MeitY’s Cyber Gyan Project – mastered network vulnerability scanning, ethical hacking methodology, and threat analysis.
                </p>
                <p className="mt-1 leading-relaxed text-white/70">
                  Assessed system vulnerabilities and applied secure evaluation frameworks – skills directly applicable to cybersecurity and cloud security roles.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-white font-semibold">
                    ❖ AI & Data Analytics Intern | AICTE × Shell × Edunet Foundation
                  </span>
                  <span className="font-mono text-emerald-400 text-xs">Jun – July 2025</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-white/70">
                  Built end-to-end data analytics pipelines in Python; applied supervised learning models to industry-relevant datasets as part of Skills4Future program deliverables.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider mb-3">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>ACADEMIC PROJECTS</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-4 text-sm text-white/80">
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-white font-semibold">
                    ❖ CrickAI — AI-Powered Cricket Training System
                  </span>
                  <span className="text-xs text-white/50 font-mono">Node.js · Firebase · Ollama LLM</span>
                </div>
                <p className="mt-1 leading-relaxed text-white/70">
                  Engineered an LLM-driven coaching assistant (Ollama) with real-time Firebase backend, enabling natural-language training feedback for players and coaches. Deployed cross-platform mobile interface via Antigravity framework.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span className="text-white font-semibold">
                    ❖ Money Transfer System
                  </span>
                  <span className="text-xs text-white/50 font-mono">Python · SQL · Web</span>
                </div>
                <p className="mt-1 leading-relaxed text-white/70">
                  Designed a secure P2P transaction system with SQL-backed ledger, input sanitisation, and role-based access control – reducing manual reconciliation effort.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements / Certifications */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider mb-3">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>ACHIEVEMENTS / CERTIFICATIONS</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-2 text-sm text-white/80">
              <p>● CS50x: Introduction to Computer Science | Harvard University (Jun – Aug 2024)</p>
              <p>● Ethical Hacking & Penetration Testing | C-DAC, NOIDA – Cyber Gyan Project (2025)</p>
              <p>● AI & Data Analytics | AICTE × Shell × Edunet Foundation – Skills4Future (2025)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getLalitResumeText(): string {
  return `LALIT YADAV
lalityadavl420@gmail.com | (+91) 7206724591
github.com/lalityadavv22 | linkedin.com/in/lalit-yadav-823349327/

SKILLS
❖ Languages: Java, JavaScript, Python
❖ Tools & Frameworks: Node.js, Firebase, Git, Jupyter Notebook, Google Colab, VS Code
❖ Concepts: Data Structures, Database Management, OOP, System designing, Algorithms

EDUCATION
❖ B.Tech CSE | Gurugram University | 2023 – 2027 (Expected)
❖ XII (CBSE) | Vivekanand Sr. Sec. School, Dharuhera | 2023

INTERNSHIPS
❖ Ethical Hacking & Penetration Testing Intern | C-DAC, NOIDA | (Jun – August 2025)
- Executed penetration testing on simulated environments under MeitY’s Cyber Gyan Project – mastered network vulnerability scanning, ethical hacking methodology, and threat analysis.
- Assessed system vulnerabilities and applied secure evaluation frameworks – skills directly applicable to cybersecurity and cloud security roles.

❖ AI & Data Analytics Intern | AICTE × Shell × Edunet Foundation | (Jun – July 2025)
- Built end-to-end data analytics pipelines in Python; applied supervised learning models to industry-relevant datasets as part of Skills4Future program deliverables.

ACADEMIC PROJECTS
❖ CrickAI — AI-Powered Cricket Training System | Node.js · Firebase · Ollama LLM
- Engineered an LLM-driven coaching assistant (Ollama) with real-time Firebase backend, enabling natural-language training feedback for players and coaches. Deployed cross-platform mobile interface via Antigravity framework.

❖ Money Transfer System | Python · SQL · Web
- Designed a secure P2P transaction system with SQL-backed ledger, input sanitisation, and role-based access control – reducing manual reconciliation effort.

ACHIEVEMENTS / CERTIFICATIONS
● CS50x: Introduction to Computer Science | Harvard University (Jun – Aug 2024)
● Ethical Hacking & Penetration Testing | C-DAC, NOIDA – Cyber Gyan Project (2025)
● AI & Data Analytics | AICTE × Shell × Edunet Foundation – Skills4Future (2025)
`;
}
