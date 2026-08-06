import React, { useState } from 'react';
import { X, Send, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Hotels',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '50dab767-3aab-44c6-a761-2d7fcaeb8baa',
          subject: '🔔 Portfolio Inquiry - IRIS Media Production',
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.category,
          message: formData.message
        })
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md transition-all select-none">
      <div className="bg-white text-neutral-900 rounded-lg shadow-2xl max-w-xl w-full p-8 relative overflow-hidden border border-neutral-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-neutral-100 pb-5">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 block mb-1">
            PORTFOLIO INQUIRIES & COMMISSIONS
          </span>
          <h2 className="font-serif-heading text-3xl font-normal tracking-wide text-neutral-900">
            IRIS Media Production
          </h2>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            Request our complete confidential high-resolution portfolio deck or commission architectural & luxury maritime production services.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 size={48} className="mx-auto text-neutral-900 stroke-[1.5]" />
            <h3 className="font-serif-heading text-xl font-medium text-neutral-900">
              Inquiry Sent Successfully
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Thank you for contacting IRIS Media Production. Our director will reach out with the complete portfolio catalog shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block uppercase tracking-wider font-semibold text-[10px] text-neutral-500 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jean-Luc Dupont"
                className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold text-[10px] text-neutral-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-[10px] text-neutral-500 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+20 102 887 5361"
                  className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[10px] text-neutral-500 mb-1">
                Area of Interest
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50"
              >
                <option value="Hotels">Hotels & Luxury Resorts</option>
                <option value="Nile Cruise">Nile Cruise Productions</option>
                <option value="Nile Dahabiya">Nile Dahabiya Heritage</option>
                <option value="Commercial & Editorial">Commercial & Editorial</option>
              </select>
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[10px] text-neutral-500 mb-1">
                Project Scope / Message
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your architectural project or maritime shoot..."
                className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold uppercase tracking-wider rounded text-[11px] transition-all flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Sending...' : 'Request Full Portfolio'}</span>
                <Send size={14} />
              </button>

              <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-mono">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=irismediaproduction01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
                  title="Open Gmail Compose"
                >
                  <Mail size={12} /> irismediaproduction01@gmail.com
                </a>
                <a
                  href="https://wa.me/201274795553"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
                  title="WhatsApp Direct"
                >
                  <Phone size={12} /> +20 12 74795553
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
