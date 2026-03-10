import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { Github, Linkedin, Send, Mail, MapPin, ArrowRight } from 'lucide-react';
import { ctaConfig } from '@/config';

export function CTA() {
  const { ref, isRevealed } = useReveal({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const accessKey = "23d56c33-e542-455b-8e54-51ef542f1a51";
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `Inquiry from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-[#050505] overflow-hidden" ref={ref}>
      {/* Background Architectural Text - Integrated into the design */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <div className="flex whitespace-nowrap animate-marquee-subtle">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[20vw] font-black tracking-tighter text-stroke-white uppercase mr-20">
              Interaction • Innovation • Intelligence •
            </span>
          ))}
        </div>
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading - Scaled Down */}
          <div className="mb-16 lg:mb-24">
            <div className={`transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-indigo-500/50" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-400">Collaboration Port</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                LET'S START A <br />
                <span className="gradient-text italic">CONVERSATION</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Column: Contact Meta - More Compact */}
            <div className="lg:col-span-5 space-y-12 lg:space-y-16">
              <div className={`transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                  Have an idea? <br />
                  <span className="text-white/30 italic">Just say hello.</span>
                </h3>

                <div className="space-y-8">
                  <div className="group flex items-center gap-5 transition-transform hover:translate-x-1">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-0.5">Official Inquiry</p>
                      <a href={`mailto:${ctaConfig.email}`} className="text-base font-bold text-white hover:text-indigo-400 transition-colors">
                        {ctaConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 transition-transform hover:translate-x-1">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-0.5">Base Location</p>
                      <p className="text-base font-bold text-white">{ctaConfig.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials - More Minimal */}
              <div className={`pt-8 border-t border-white/5 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex gap-3">
                  <MagneticButton href="https://linkedin.com/in/thamizhvendhan-r-a4a550375/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white transition-all text-white hover:text-black">
                    <Linkedin className="w-4 h-4" />
                  </MagneticButton>
                  <MagneticButton href="https://github.com/Thamizh0206" target="_blank" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white transition-all text-white hover:text-black">
                    <Github className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form - Refined Sizes */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <form onSubmit={handleSubmit} className="space-y-10 lg:space-y-12">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-base text-white peer placeholder-transparent"
                    id="cta-name"
                    placeholder=" "
                  />
                  <label htmlFor="cta-name" className="absolute left-0 top-4 text-sm text-white/30 transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-indigo-400 peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-base text-white peer placeholder-transparent"
                    id="cta-email"
                    placeholder=" "
                  />
                  <label htmlFor="cta-email" className="absolute left-0 top-4 text-sm text-white/30 transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-indigo-400 peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    required
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-indigo-500 transition-all text-base text-white peer placeholder-transparent resize-none min-h-[80px]"
                    id="cta-message"
                    placeholder=" "
                  />
                  <label htmlFor="cta-message" className="absolute left-0 top-4 text-sm text-white/30 transition-all peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-indigo-400 peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[9px] uppercase tracking-widest">
                    Message Details
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-5 text-white disabled:opacity-50"
                  >
                    <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-indigo-400 transition-all duration-500 bg-white/0 group-hover:bg-indigo-500/10 active:scale-95">
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xl lg:text-2xl font-black uppercase tracking-tight">
                        {isSubmitting ? 'Syncing...' : 'Send Message'}
                      </span>
                      <span className="block text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold">
                        Secure Transmission
                      </span>
                    </div>
                  </button>
                </div>

                {submitStatus !== 'idle' && (
                  <div className={`mt-6 p-4 border rounded-xl text-[10px] font-bold uppercase tracking-widest text-center transition-all ${submitStatus === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}>
                    {submitStatus === 'success' ? 'Transmission Successful' : 'Transmission Error'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
