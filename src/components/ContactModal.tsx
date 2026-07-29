import React, { useState } from 'react';
import { X, Send, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Chalets & Hotels',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
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
            IRIS Photography
          </h2>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            Request our complete confidential high-resolution portfolio deck or commission architectural & luxury maritime photography services.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 size={48} className="mx-auto text-neutral-900 stroke-[1.5]" />
            <h3 className="font-serif-heading text-xl font-medium text-neutral-900">
              Inquiry Sent Successfully
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Thank you for contacting IRIS Photography. Our director will reach out with the complete portfolio catalog shortly.
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
                  Area of Interest
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-neutral-200 focus:outline-none focus:border-neutral-900 text-neutral-800 bg-neutral-50/50"
                >
                  <option value="Chalets & Hotels">Chalets & Hotels</option>
                  <option value="Marine & Superyachts">Marine & Superyachts</option>
                  <option value="Ritual & Desert Architecture">Ritual & Desert Architecture</option>
                  <option value="Commercial & Editorial">Commercial & Editorial</option>
                </select>
              </div>
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
                className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold uppercase tracking-wider rounded text-[11px] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Full Portfolio</span>
                <Send size={14} />
              </button>

              <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  <Mail size={12} /> info@iris-photography.com
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> Zurich | Dubai
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
