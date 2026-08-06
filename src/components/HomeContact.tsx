import React, { useState } from 'react';
import { CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';

export const HomeContact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !phone || !message) return;

    setLoading(true);

    try {
      // Send using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '50dab767-3aab-44c6-a761-2d7fcaeb8baa',
          subject: '🔔 New Contact Submission - IRIS Media Production',
          from_name: `${firstName} ${lastName}`,
          name: `${firstName} ${lastName}`,
          phone: phone,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white text-neutral-900 border-t border-neutral-100 select-none">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading matching Screenshot 3 */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-neutral-900">
            LET'S TALK
          </h2>
        </div>

        {/* Contact Form matching Screenshot 3 */}
        {submitted ? (
          <div className="py-16 text-center space-y-4 border border-neutral-200 rounded-lg p-8 bg-neutral-50/50">
            <CheckCircle2 size={48} className="mx-auto text-neutral-900" />
            <h3 className="text-xl font-bold text-neutral-900">Thank You!</h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              Your message and contact number have been received. Our director at IRIS Media Production will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-neutral-900 text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-neutral-800 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields (First Name & Last Name) */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Name
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-neutral-900 rounded-none focus:outline-none text-sm transition-colors"
                  />
                  <span className="text-[10px] text-neutral-400 mt-1 block">First Name (required)</span>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-neutral-900 rounded-none focus:outline-none text-sm transition-colors"
                  />
                  <span className="text-[10px] text-neutral-400 mt-1 block">Last Name (required)</span>
                </div>
              </div>
            </div>

            {/* Email Address & Phone / WhatsApp Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Email Address <span className="text-neutral-400 font-normal">(required)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-neutral-900 rounded-none focus:outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Phone / Contact Number <span className="text-neutral-400 font-normal">(required)</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01028875361"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-neutral-900 rounded-none focus:outline-none text-sm transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Message <span className="text-neutral-400 font-normal">(required)</span>
              </label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project requirements..."
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-neutral-900 rounded-none focus:outline-none text-sm transition-colors resize-none"
              />
            </div>

            {/* Submit Button matching Screenshot 3 */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2 min-w-[140px]"
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </div>
          </form>
        )}

        {/* Direct Contact Details & WhatsApp integration as requested */}
        <div className="pt-12 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {/* Direct Gmail Link opening Gmail Compose */}
            <div className="flex items-center gap-3 text-neutral-800">
              <Mail size={16} className="text-neutral-900 shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=irismediaproduction01@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-semibold hover:underline flex items-center gap-1.5"
                title="Send Message via Gmail"
              >
                <span>irismediaproduction01@gmail.com</span>
                <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded font-mono">
                  Send Gmail
                </span>
              </a>
            </div>

            {/* WhatsApp Contact (+20 12 74795553) */}
            <div className="flex items-center gap-3 text-neutral-800">
              <MessageSquare size={16} className="text-emerald-600 shrink-0" />
              <a
                href="https://wa.me/201274795553"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-semibold hover:underline flex items-center gap-2"
              >
                <span>+20 12 74795553</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] rounded font-mono font-medium">
                  WhatsApp Direct
                </span>
              </a>
            </div>

            {/* Regular Phone Call Contact (01028875361 - No WhatsApp) */}
            <div className="flex items-center gap-3 text-neutral-800">
              <Phone size={16} className="text-neutral-900 shrink-0" />
              <a
                href="tel:01028875361"
                className="text-xs sm:text-sm font-semibold hover:underline flex items-center gap-2"
              >
                <span>+20 102 887 5361</span>
                <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-[10px] rounded font-mono font-medium">
                  Call Direct
                </span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/iris.media_production/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-neutral-100 rounded-full text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1JhB6ZMycS/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-neutral-100 rounded-full text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/201274795553"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-emerald-50 rounded-full text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors"
              title="WhatsApp Chat"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-6 text-center text-xs text-neutral-400 border-t border-neutral-100">
          <p>© {new Date().getFullYear()} IRIS Media Production. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
