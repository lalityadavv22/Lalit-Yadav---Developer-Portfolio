import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Sparkles, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { soundFx } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  const contactData = {
    email: 'lalityadavl420@gmail.com',
    phone: '+91 7206724591',
    cleanPhone: '917206724591',
    linkedin: 'linkedin.com/in/lalit-yadav',
    linkedinUrl: 'https://www.linkedin.com/in/lalit-yadav-823349327/',
    github: 'github.com/lalityadavv22',
    githubUrl: 'https://github.com/lalityadavv22',
    text: "Open for Full-Stack / Software Engineering & AI opportunities. Feel free to reach out if you're looking for a developer, have an engineering query, or want to connect.",
  };

  // Easter egg: Listen for "hiredev" typed anywhere
  useEffect(() => {
    let buffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key.length === 1) {
        buffer = (buffer + e.key.toLowerCase()).slice(-7);
        if (buffer === 'hiredev') {
          buffer = '';
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
          setIsEasterEggActive(true);
          soundFx.playChime();
          window.setTimeout(() => setIsEasterEggActive(false), 3000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyEmail = async () => {
    try {
      soundFx.playClick();
      await navigator.clipboard.writeText(contactData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard fallback
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      soundFx.playChime();

      try {
        const history = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        history.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('contact_messages', JSON.stringify(history));
      } catch {
        // Ignore localStorage error
      }

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send. Please try again.';
      setErrorMessage(msg);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const openWhatsApp = () => {
    soundFx.playClick();
    const text = formData.message
      ? `Hi Lalit, my name is ${formData.name || 'a visitor'}. ${formData.message}`
      : `Hi Lalit, I saw your portfolio and would like to connect!`;
    const url = `https://wa.me/${contactData.cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="w-full relative z-30 mb-28 scroll-mt-28">
      <FadeIn delay={0.1}>
        <div
          id="contact-card"
          className={`contact-card glass-panel-strong rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden border transition-all duration-700 ${
            isEasterEggActive
              ? 'border-emerald-400 shadow-[0_0_50px_rgba(52,211,153,0.35)] scale-[1.01]'
              : 'border-white/10'
          }`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.04] rounded-full blur-[90px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            {/* Left Column: Direct Links & Info */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="contact-label text-sm font-mono uppercase tracking-[0.2em] text-white/40 mb-4" aria-hidden="true">
                  05 // Contact
                </p>

                <h2 className="contact-heading text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight mb-6 text-gradient">
                  Let's build
                  <br />
                  together.
                </h2>

                <p className="contact-subtext text-white/60 font-light text-base sm:text-lg mb-12 max-w-md leading-relaxed">
                  {contactData.text}
                </p>

                <div className="flex flex-col gap-5">
                  {/* Email with copy button */}
                  <div className="contact-link flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors group w-full md:w-fit rounded-2xl px-3 py-2 -mx-3 hover:bg-white/[0.04]">
                    <a
                      href={`mailto:${contactData.email}`}
                      data-cursor="Email"
                      onMouseEnter={() => soundFx.playHover()}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <span className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <Mail size={18} />
                      </span>
                      <span className="font-light text-sm sm:text-base md:text-lg break-all">
                        {contactData.email}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      data-cursor="Copy"
                      aria-label={copiedEmail ? 'Email copied' : 'Copy email address'}
                      title="Copy email address"
                      className="rounded-full border border-white/15 bg-white/5 p-2 text-white/60 transition-all duration-300 hover:bg-white/15 hover:text-white active:scale-90 cursor-pointer ml-1"
                    >
                      {copiedEmail ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${contactData.cleanPhone}`}
                    data-cursor="Call Me"
                    onMouseEnter={() => soundFx.playHover()}
                    className="contact-link flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors group w-full md:w-fit rounded-2xl px-3 py-2 -mx-3 hover:bg-white/[0.04]"
                  >
                    <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Phone size={18} />
                    </div>
                    <span className="font-light text-sm sm:text-base md:text-lg">
                      {contactData.phone}
                    </span>
                  </a>

                  {/* WhatsApp Quick Chat */}
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    data-cursor="WhatsApp"
                    onMouseEnter={() => soundFx.playHover()}
                    className="contact-link flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors group w-full md:w-fit rounded-2xl px-3 py-2 -mx-3 hover:bg-white/[0.04] text-left cursor-pointer"
                  >
                    <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <MessageCircle size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-light text-sm sm:text-base md:text-lg">
                        Chat on WhatsApp
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        Instant response · Direct messaging
                      </span>
                    </div>
                  </button>

                  {/* LinkedIn */}
                  <a
                    href={contactData.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LinkedIn"
                    onMouseEnter={() => soundFx.playHover()}
                    className="contact-link flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors group w-full md:w-fit rounded-2xl px-3 py-2 -mx-3 hover:bg-white/[0.04]"
                  >
                    <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-[#0077B5] group-hover:text-white transition-all">
                      <Linkedin size={18} />
                    </div>
                    <span className="font-light text-sm sm:text-base md:text-lg">
                      {contactData.linkedin}
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={contactData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="GitHub"
                    onMouseEnter={() => soundFx.playHover()}
                    className="contact-link flex items-center gap-3 sm:gap-4 text-white/80 hover:text-white transition-colors group w-full md:w-fit rounded-2xl px-3 py-2 -mx-3 hover:bg-white/[0.04]"
                  >
                    <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Github size={18} />
                    </div>
                    <span className="font-light text-sm sm:text-base md:text-lg">
                      {contactData.github}
                    </span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response turnaround typically within 24 hours</span>
              </div>
            </div>

            {/* Right Column: Sleek Form with Peer Floating Labels */}
            <div className="contact-form-panel glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <div className="mb-6">
                <h3 className="font-display text-xl font-medium text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-white/40 uppercase tracking-wider">
                  Delivers instantly to inbox & backend
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Name Input with Floating Label */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/20 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors text-base"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white font-light pointer-events-none"
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Input with Floating Label */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/20 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors text-base"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white font-light pointer-events-none"
                    >
                      Your Email Address
                    </label>
                  </div>

                  {/* Message Input with Floating Label */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/20 py-3.5 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors text-base resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white font-light pointer-events-none"
                    >
                      Your Message
                    </label>
                  </div>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been sent. I'll get back to you shortly.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    data-cursor="Send"
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-sm sm:text-base hover:bg-white/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-60 cursor-pointer shadow-lg shadow-white/10"
                  >
                    <span>{status === 'submitting' ? 'Sending message...' : 'Send Message'}</span>
                    <Send size={16} />
                  </button>

                  <span className="text-xs font-mono text-white/40 hidden sm:inline">
                    Press <span className="text-white/70">Enter</span> to send
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
