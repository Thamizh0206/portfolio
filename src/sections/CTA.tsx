import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Github, Linkedin, ArrowUpRight, MessageSquare, Globe, AtSign } from 'lucide-react';
import { ctaConfig } from '@/config';

export function CTA() {
  const { ref, isRevealed } = useReveal({ threshold: 0.15 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Web3Forms Access Key
    const accessKey = "23d56c33-e542-455b-8e54-51ef542f1a51";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28" style={{ background: 'var(--bg-primary)' }}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(120px)' }}
      />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(100px)' }}
      />



      <div className="container-premium relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">

          {/* Monumental Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 transition-all duration-700 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-tertiary)' }}>Available for New Projects</span>
            </div>

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              LET'S START A <br />
              <span className="gradient-text italic">CONVERSATION</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-stretch">

            {/* Left: Info Bento Grid */}
            <div className={`space-y-6 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email Card */}
                <a href={`mailto:${ctaConfig.email}`} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <AtSign className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Email Me</h3>
                  <p className="text-base font-bold truncate group-hover:text-indigo-400 transition-colors" style={{ color: 'var(--text-primary)' }}>{ctaConfig.email}</p>
                </a>

                {/* Location Card */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Location</h3>
                  <p className="text-base font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>{ctaConfig.location}</p>
                </div>
              </div>

              {/* Status / Follow Large Card */}
              <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-500/[0.03] to-cyan-500/[0.03] backdrop-blur-3xl overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Social Reach</h3>
                    <p className="text-muted text-sm max-w-xs mb-8">Follow my journey and latest AI explorations on social platforms.</p>
                    <div className="flex gap-4">
                      <MagneticButton href="https://linkedin.com/in/thamizhvendhan-r-a4a550375/" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                        <Linkedin className="w-6 h-6" />
                      </MagneticButton>
                      <MagneticButton href="https://github.com/Thamizh0206" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                        <Github className="w-6 h-6" />
                      </MagneticButton>
                    </div>
                  </div>
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
                    <div className="relative z-20 w-full h-full rounded-full border-2 border-dashed border-indigo-500/30 animate-[spin_20s_linear_infinite] p-4">
                      <div className="w-full h-full rounded-full border-2 border-indigo-500/50 flex items-center justify-center">
                        <MessageSquare className="w-12 h-12 text-indigo-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Premium Form */}
            <div className={`transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-14 px-6 rounded-xl bg-white/[0.03] border border-white/10 outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div className="group space-y-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-14 px-6 rounded-xl bg-white/[0.03] border border-white/10 outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>
                <div className="group space-y-2">
                  <textarea
                    rows={6}
                    placeholder="Tell me about your vision..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm font-medium resize-none"
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all group overflow-hidden relative ${isSubmitting ? 'bg-neutral-800 cursor-not-allowed text-white/50' : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? 'Submitting vision...' : 'Send Proposal'}
                    {!isSubmitting && <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  )}
                </MagneticButton>

                {/* Status Notifications */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold text-center animate-in fade-in slide-in-from-top-2">
                    ✓ Message received! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold text-center animate-in fade-in slide-in-from-top-2">
                    ✕ Submission failed. Please try again or email me directly.
                  </div>
                )}
              </form>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-30">
                <div className="h-px flex-1 bg-white" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Global Reach</span>
                <div className="h-px flex-1 bg-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
