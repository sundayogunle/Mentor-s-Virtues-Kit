import React, { useState, useEffect } from 'react';
import type { Virtue, UIStrings } from '../types';
import { StarIcon } from './icons/StarIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';


interface FunciseViewProps {
  virtue: Virtue;
  onComplete: (rating: number) => void;
  storedRating?: number;
  onBack: () => void;
  onForward: () => void;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  uiStrings: UIStrings;
}

const StarRating: React.FC<{ rating: number; setRating?: (rating: number) => void; disabled: boolean }> = ({ rating, setRating, disabled }) => {
  return (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button 
          key={star} 
          onClick={() => setRating && setRating(star)} 
          disabled={disabled}
          className="focus:outline-none transform transition-transform disabled:cursor-not-allowed enabled:hover:scale-125"
        >
          <StarIcon className={`h-10 w-10 ${rating >= star ? 'text-yellow-400' : 'text-slate-600'}`} />
        </button>
      ))}
    </div>
  );
};

const FunciseView: React.FC<FunciseViewProps> = ({ 
  virtue, 
  onComplete, 
  storedRating, 
  onBack, 
  onForward, 
  isBackDisabled, 
  isForwardDisabled,
  uiStrings 
}) => {
  const [rating, setRating] = useState(0);
  const isCompleted = storedRating !== undefined;

  useEffect(() => {
    setRating(storedRating || 0);
  }, [storedRating]);

  const navButtonClasses = "p-3 bg-slate-700/50 rounded-full shadow-md hover:bg-slate-600/70 transition disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110";

  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 animate-fade-in-up text-slate-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">{uiStrings.funcise.title}</h2>
      <h3 className="text-xl font-semibold text-center text-yellow-400 mt-2">{virtue.funcise.title}</h3>
      <div className="mt-6 text-slate-300 text-lg leading-relaxed text-center space-y-4 bg-slate-900/50 p-6 rounded-lg">
        <p>{virtue.funcise.description}</p>
      </div>

      <div className="mt-8 border-t-2 border-dashed border-slate-700 pt-6">
        <h3 className="text-xl font-bold text-center text-slate-200">{uiStrings.funcise.parentAppraisal}</h3>
        <p className="text-center text-slate-400 mt-2">{virtue.funcise.parentAppraisalPrompt}</p>
        <div className="mt-4">
          <StarRating rating={rating} setRating={isCompleted ? undefined : setRating} disabled={isCompleted} />
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => onComplete(rating)}
            disabled={rating === 0 || isCompleted}
            className="px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isCompleted ? uiStrings.funcise.completedButton : uiStrings.funcise.completeButton}
          </button>
        </div>
      </div>
       <div className="mt-8 flex items-center justify-between border-t border-slate-700 pt-4">
        <button onClick={onBack} disabled={isBackDisabled} className={navButtonClasses}>
          <ArrowLeftIcon className="h-6 w-6 text-slate-200" />
        </button>
        <span className="text-slate-400 font-semibold">{uiStrings.navigation}</span>
        <button onClick={onForward} disabled={isForwardDisabled} className={navButtonClasses}>
          <ArrowRightIcon className="h-6 w-6 text-slate-200" />
        </button>
      </div>
    </div>
  );
};

export default FunciseView;