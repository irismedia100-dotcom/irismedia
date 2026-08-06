import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, ArrowUp, Mail, MapPin, CheckCircle, Clock, Phone, MessageSquare } from 'lucide-react';
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

  const ACCESS_KEY = '50dab767-3aab-44c6-a761-2d7fcaeb8baa';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesList[0] || 'Hospitality & Tourism Production',
    message: '',
    botcheck: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = lang === 'ar' ? 'يرجى إدخال الاسم' : 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      errs.phone = lang === 'ar' ? 'يرجى إدخال رقم الهاتف / الواتساب' : 'Please enter phone / WhatsApp number';
    }

    if (!formData.email.trim()) {
      errs.email = lang === 'ar' ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: null, message: '' });

    if (!validate()) return;

    if (formData.botcheck) return;

    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: '🔔 طلب جديد من الموقع',
          from_name: 'نموذج التواصل',
          botcheck: formData.botcheck,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setSubmitted(true);
        setFormStatus({
          type: 'success',
          message: lang === 'ar' ? '✅ تم إرسال طلبك بنجاح!' : '✅ Message transmitted successfully!'
        });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#a1a1aa', '#52525b']
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          service: servicesList[0] || 'Hospitality & Tourism Production',
          message: '',
          botcheck: ''
        });
        setErrors({});
      } else {
        setLoading(false);
        setFormStatus({
          type: 'error',
          message: lang === 'ar' ? '❌ حدث خطأ، حاول مرة أخرى' : '❌ An error occurred, please try again.'
        });
      }
    } catch {
      setLoading(false);
      setFormStatus({
        type: 'error',
        message: lang === 'ar' ? '❌ حدث خطأ، حاول مرة أخرى' : '❌ An error occurred, please try again.'
      });
    }
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
                  onClick={() => {
                    setSubmitted(false);
                    setFormStatus({ type: null, message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-syne font-bold text-white hover:bg-white hover:text-black transition-colors"
                >
                  {t.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <input type="hidden" name="access_key" value={ACCESS_KEY} />
                <input type="hidden" name="subject" value="🔔 طلب جديد من الموقع" />
                <input type="hidden" name="from_name" value="نموذج التواصل" />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  checked={Boolean(formData.botcheck)}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? 'true' : '' })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/60 border text-white font-inter text-sm placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-white'
                      }`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 font-inter"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone / Contact Number Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="01028875361 / +20 12 74795553"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-black/60 border text-white font-inter text-sm placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-white'
                      }`}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 font-inter"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alexander@brand.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl bg-black/60 border text-white font-inter text-sm placeholder-zinc-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-white'
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 font-inter"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-syne font-bold text-zinc-300 tracking-wider uppercase block">
                    {t.serviceLabel}
                  </label>
                  <select
                    name="service"
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
                    name="message"
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
                  className="w-full py-4 rounded-xl bg-white text-black font-syne font-extrabold text-sm tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-2xl transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                  onMouseEnter={() => onHoverStart?.('SEND')}
                  onMouseLeave={() => onHoverEnd?.()}
                >
                  {loading ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div id="form-result">
                  {formStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl border text-sm font-inter flex items-center gap-3 ${
                        formStatus.type === 'success'
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                          : 'bg-red-950/40 border-red-500/40 text-red-300'
                      }`}
                    >
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}
                </div>
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

              {/* WhatsApp Direct Card (+20 12 74795553) */}
              <a
                href="https://wa.me/201274795553"
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 rounded-2xl flex items-center justify-between block group border border-emerald-500/30 hover:border-emerald-400 transition-colors"
                onMouseEnter={() => onHoverStart?.('WHATSAPP')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/40 flex items-center justify-center bg-emerald-950/60 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-syne font-bold text-emerald-400 block uppercase">
                      WHATSAPP DIRECT
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-200">
                      +20 12 74795553
                    </span>
                  </div>
                </div>
              </a>

              {/* Call Direct Card (01028875361) */}
              <a
                href="tel:01028875361"
                className="glass-card p-6 rounded-2xl flex items-center justify-between block group border border-white/10 hover:border-white/40 transition-colors"
                onMouseEnter={() => onHoverStart?.('PHONE')}
                onMouseLeave={() => onHoverEnd?.()}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/60 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-syne font-bold text-zinc-400 block uppercase">
                      PHONE CALL DIRECT
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-300">
                      +20 102 887 5361
                    </span>
                  </div>
                </div>
              </a>

              {/* Gmail Compose Card */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=irismediaproduction01@gmail.com"
                target="_blank"
                rel="noreferrer"
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
                      GMAIL DIRECT
                    </span>
                    <span className="font-syne font-bold text-sm text-white group-hover:text-zinc-300">
                      irismediaproduction01@gmail.com
                    </span>
                  </div>
                </div>
              </a>

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
            </div>

            {/* Back to top button */}
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
          </div>
        </div>
      </div>
    </footer>
  );
};
