import React, { useState } from 'react';
import type { UIStrings } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface AdjustPointsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPoints: number;
  onAdjust: (amount: number, reason: string) => void;
  uiStrings: UIStrings['adjustPointsModal'];
}

const AdjustPointsModal: React.FC<AdjustPointsModalProps> = ({ isOpen, onClose, currentPoints, onAdjust, uiStrings }) => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleAdjust = (multiplier: 1 | -1) => {
    const numAmount = parseInt(amount, 10);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid positive number.');
      return;
    }
    setError('');
    onAdjust(numAmount * multiplier, reason);
    setAmount('');
    setReason('');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setAmount(e.target.value);
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adjust-points-title"
    >
      <div
        className="bg-slate-800/90 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-700/80 hover:bg-slate-600/80 transition text-slate-300"
          aria-label={uiStrings.closeButton}
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <h2 id="adjust-points-title" className="text-2xl font-extrabold text-white text-center mb-2">{uiStrings.title}</h2>
        <div className="text-center text-lg text-slate-300 mb-6">
          {uiStrings.currentPoints}: <span className="font-bold text-yellow-400 text-2xl">{currentPoints}</span>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="points-amount" className="block text-sm font-medium text-slate-300 mb-1">{uiStrings.amountLabel}</label>
            <input
              type="number"
              id="points-amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder={uiStrings.amountPlaceholder}
              className="w-full bg-slate-900/70 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
              min="1"
            />
          </div>
          <div>
            <label htmlFor="points-reason" className="block text-sm font-medium text-slate-300 mb-1">{uiStrings.reasonLabel}</label>
            <textarea
              id="points-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={uiStrings.reasonPlaceholder}
              className="w-full bg-slate-900/70 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
              rows={3}
            />
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleAdjust(1)}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
            disabled={!amount}
          >
            {uiStrings.addPointsButton}
          </button>
          <button
            onClick={() => handleAdjust(-1)}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
            disabled={!amount}
          >
            {uiStrings.deductPointsButton}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdjustPointsModal;