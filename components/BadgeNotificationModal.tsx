import React from 'react';
import type { Badge, UIStrings } from '../types';

interface BadgeNotificationModalProps {
  badge: Badge;
  onClose: () => void;
  uiStrings: UIStrings['badgeNotification'];
}

const BadgeNotificationModal: React.FC<BadgeNotificationModalProps> = ({ badge, onClose, uiStrings }) => {
  const Icon = badge.icon;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="badge-title"
    >
      <div
        className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-2xl shadow-2xl max-w-sm w-full p-8 relative border-2 border-yellow-400 text-center transform scale-100 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'pulse-grow 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)' }}
      >
        <style>
          {`
            @keyframes pulse-grow {
              0% { transform: scale(0.7); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
        <h2 id="badge-title" className="text-3xl font-extrabold text-yellow-300">{uiStrings.title}</h2>
        <div className="my-6 flex justify-center">
            <Icon className="w-40 h-40" />
        </div>
        <p className="text-lg text-slate-300">{uiStrings.subtitle}</p>
        <p className="text-2xl font-bold text-white mt-1">{badge.name}</p>
        <p className="text-sm text-slate-400 mt-2">{badge.description}</p>
        <button
          onClick={onClose}
          className="mt-8 w-full px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          {uiStrings.closeButton}
        </button>
      </div>
    </div>
  );
};

export default BadgeNotificationModal;