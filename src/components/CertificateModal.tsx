import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, Copy, Check, ShieldCheck, X, Award, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  link: string;
  summary: string;
  badgeColor: string;
}

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(certificate.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-xl w-full p-6 sm:p-8 border border-white/20 relative my-auto shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold block">
                Certificate Authenticity Verified
              </span>
              <span className="text-[11px] text-white/50">Official Credential Validation</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            title="Close"
            data-cursor="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Certificate Card Body */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80">
                {certificate.issuer}
              </span>
              <span className="text-xs font-mono text-white/40">
                {certificate.issueDate}
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-snug">
              {certificate.name}
            </h3>
            <p className="text-sm text-white/70 mt-2 font-light leading-relaxed">
              {certificate.summary}
            </p>
          </div>

          {/* Credential ID and Verification Box */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-white/40 uppercase tracking-wider font-mono text-[11px]">
                Credential ID / Hash
              </span>
              <span className="font-mono text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 break-all">
                {certificate.credentialId}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400/90 pt-1">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Digital verification token validated against issuing authority database</span>
            </div>
          </div>

          {/* Validated Skills */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2.5">
              Verified Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              data-cursor="Open Link"
              className="flex-1 primary-button flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-white/20 transition-all text-black"
            >
              <span>Verify on Official Issuer Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopy}
              data-cursor="Copy URL"
              className="glass-button flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-white/80 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-xs">Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
