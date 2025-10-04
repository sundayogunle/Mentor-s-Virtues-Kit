import React from 'react';
import type { Virtue, UIStrings } from '../types';
import { TrophyIcon } from './icons/TrophyIcon';

interface WeeklySummaryProps {
  virtue: Virtue;
  onNextWeek: () => void;
  uiStrings: UIStrings;
}

const WeeklySummary: React.FC<WeeklySummaryProps> = ({ virtue, onNextWeek, uiStrings }) => {
  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 text-center animate-fade-in-up">
      <TrophyIcon className="h-16 w-16 text-yellow-400 mx-auto" />
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-400 mt-4">{uiStrings.summary.wellDone}</h2>
      <p className="mt-2 text-xl text-slate-200">{uiStrings.summary.completedWeek}</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">{virtue.name}</h1>
      <p className="mt-6 text-lg text-slate-300">
        {uiStrings.summary.keepPracticing}
      </p>
      <div className="mt-8">
        <button
          onClick={onNextWeek}
          className="px-10 py-4 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 animate-pulse"
        >
          {uiStrings.summary.nextWeekButton}
        </button>
      </div>
    </div>
  );
};

export default WeeklySummary;