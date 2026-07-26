import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, ArrowUp, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import { TRANSLATIONS, Language } from '../data/translations';

interface ContactFooterProps {
  lang: Language;
  onHoverStart?: (text: string) => void;
  onHoverEnd?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang, onHoverStart, onHoverEnd }) => {
  const t = TRANSLATIONS[lang].contact;
  const servicesList = TRANSLATIONS[lang].services.items.map(s => s.title);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: servicesList[0] || 'Hospitality & Tourism Production',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#a1a1aa', '#52525b']
      });
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Top Header CTA */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="text-[11px] font-syne font-bold tracking-[0.3em] text-zinc-400 uppercase block">
            {t.badge}
          </span>

          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.02]">
            {t.title}
          </h2>

          <p className="text-zinc-400 font-inter text-base sm:text-lg font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Form & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/10">
          
          {/* Form Container */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-2xl border border-white/15">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-syne text-3xl font-extrabold text-white uppercase">
                  {t.successTitle}
                </h3>
                <p className="text-zinc-400 font-inter text-sm max-w-md mx-auto">
                  {t.successDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-syne font-bold text-white hover:bg-white hover:text-black transition-colors"
                >
                  {t.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-inter text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexander@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-inter text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                    {t.serviceLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-inter text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                  >
                    {servicesList.map((service) => (
                      <option key={service} value={service} className="bg-black text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Brief */}
                <div className="space-y-2">
                  <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                    {t.scopeLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-inter text-sm placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-white text-black font-syne font-extrabold text-sm tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-2xl transform hover:scale-[1.01]"
                  onMouseEnter={() => onHoverStart?.('SEND')}
                  onMouseLeave={() => onHoverEnd?.()}
                >
                  {loading ? (
                    <span>{t.transmitting}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Direct Info Sidebar */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Brand Logo in Footer */}
              <div className="pb-4">
                <img
                  src="/assets/iris-logo-01.png"
                  alt="IRIS Media Production Logo"
                  className="h-12 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              <h3 className="text-xs font-syne font-bold tracking-[0.25em] text-zinc-400 uppercase">
                {t.directChannels}
              </h3>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/iris.media_production/"
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 rounded-2xl flex items-center justify-between block group border border-white/10 hover:border-white/40"
                onMouseEnter={() => onHoverStart?.('INSTAGRAM')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-syne font-bold text-zinc-400 block uppercase">
                      {t.instagramLabel}
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-300">
                      @iris.media_production
                    </span>
                  </div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/share/1JhB6ZMycS/"
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 rounded-2xl flex items-center justify-between block group border border-white/10 hover:border-white/40"
                onMouseEnter={() => onHoverStart?.('FACEBOOK')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-syne font-bold text-zinc-400 block uppercase">
                      FACEBOOK
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-300">
                      IRIS Media Production
                    </span>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contact@iris-media.com"
                className="glass-card p-6 rounded-2xl flex items-center justify-between block group border border-white/10 hover:border-white/40"
                onMouseEnter={() => onHoverStart?.('EMAIL')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-syne font-bold text-zinc-400 block uppercase">
                      {t.emailTitle}
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-300">
                      contact@iris-media.com
                    </span>
                  </div>
                </div>
              </a>

              {/* HQ Location & Time Card */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs font-syne text-zinc-400">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-syne text-zinc-400">
                  <Clock className="w-4 h-4 text-white" />
                  <span>{t.timezone}</span>
                </div>
              </div>
            </div>

            {/* Back to top magnetic button */}
            <button
              onClick={scrollToTop}
              className="w-full py-4 rounded-2xl border border-white/20 bg-black/40 text-xs font-syne font-bold tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 group"
              onMouseEnter={() => onHoverStart?.('TOP')}
              onMouseLeave={() => onHoverEnd?.()}
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-inter gap-4">
          <div className="flex items-center gap-3">
            <span className="font-syne font-bold text-white tracking-widest">
              IRIS MEDIA PRODUCTION
            </span>
            <span>© {new Date().getFullYear()} {t.rights}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/iris.media_production/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              INSTAGRAM
            </a>
            <a href="https://www.facebook.com/share/1JhB6ZMycS/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              FACEBOOK
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              SHOWREEL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
