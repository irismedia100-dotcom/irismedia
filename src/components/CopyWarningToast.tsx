import React, { useEffect } from 'react';
import { ShieldAlert, Lock } from 'lucide-react';

interface CopyWarningToastProps {
  show: boolean;
  onDismiss: () => void;
}

export const CopyWarningToast: React.FC<CopyWarningToastProps> = ({ show, onDismiss }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white px-5 py-3.5 rounded-lg shadow-2xl border border-neutral-700 flex items-center gap-3 animate-bounce select-none pointer-events-auto">
      <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
        <Lock size={18} />
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
          Image Download Disabled
        </h4>
        <p className="text-[11px] text-neutral-400 font-sans">
          All images are copyright protected by IRIS Photography.
        </p>
      </div>
    </div>
  );
};
