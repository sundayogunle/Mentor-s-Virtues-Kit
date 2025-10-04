
import React, { useMemo } from 'react';
import LanguageSelector from './LanguageSelector';
import type { UIStrings } from '../types';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { FireIcon } from './icons/FireIcon';

interface HeaderProps {
  currentWeek: number;
  totalWeeks: number;
  points: number;
  streakCount: number;
  currentDay: number;
  totalDays: number;
  language: string;
  onLanguageChange: (language: string) => void;
  uiStrings: UIStrings;
  isOnline: boolean;
  onOpenParentsCorner: () => void;
  onOpenAdjustPoints: () => void;
  currencySymbol: string;
  pointsToCurrencyRate: number;
}

const Header: React.FC<HeaderProps> = ({ 
  currentWeek, 
  totalWeeks, 
  points, 
  streakCount,
  currentDay, 
  totalDays, 
  language, 
  onLanguageChange, 
  uiStrings, 
  isOnline,
  onOpenParentsCorner,
  onOpenAdjustPoints,
  currencySymbol,
  pointsToCurrencyRate
}) => {
  const weekDayText = uiStrings.header.weekDay
    .replace('{currentWeek}', String(currentWeek))
    .replace('{totalWeeks}', String(totalWeeks))
    .replace('{currentDay}', String(currentDay))
    .replace('{totalDays}', String(totalDays));

  const monetaryValue = useMemo(() => {
    if (pointsToCurrencyRate <= 0) return null;
    const value = (points / pointsToCurrencyRate).toFixed(2);
    return `${currencySymbol}${value}`;
  }, [points, currencySymbol, pointsToCurrencyRate]);

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col items-center text-slate-200 gap-4">
      
      {/* Top Row: Centered Title */}
      <div className="text-center">
        <h1 className="text-xl font-extrabold text-white">
          Mentor's Virtues Kit
        </h1>
        <p className="text-slate-300/80 font-semibold text-sm">{weekDayText}</p>
      </div>

      {/* Bottom Row: Controls */}
      <div className="w-full flex justify-between items-start">
        
        {/* Left Item: Points & Streak */}
        <div className="flex flex-col items-center flex-1">
          <button
            onClick={onOpenAdjustPoints}
            className="flex items-center gap-1.5 bg-yellow-400 text-slate-900 font-bold px-3 py-2 rounded-full shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
            aria-label="Adjust points"
          >
            {streakCount > 0 && (
              <div title={uiStrings.header.streak.replace('{count}', String(streakCount))} className="flex items-center gap-1 text-orange-600 pr-1">
                <FireIcon className="h-5 w-5" />
                <span className="text-lg -ml-1">{streakCount}</span>
              </div>
            )}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lg">{points}</span>
          </button>
          {monetaryValue && <span className="text-xs text-yellow-200/90 font-semibold mt-1.5">{`Value: ${monetaryValue}`}</span>}
        </div>
        
        {/* Middle Item: Parent's Corner */}
        <div className="flex-1 flex justify-center">
            <button
            onClick={onOpenParentsCorner}
            disabled={!isOnline}
            className="p-2.5 bg-slate-700/60 text-white rounded-full shadow-md hover:bg-slate-600/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={uiStrings.header.parentsCornerButton}
            title={uiStrings.header.parentsCornerButton}
            >
            <AcademicCapIcon className="h-6 w-6" />
            </button>
        </div>

        {/* Right Item: Language Selector */}
        <div className="flex-1 flex justify-end">
            <LanguageSelector language={language} onLanguageChange={onLanguageChange} isOnline={isOnline} />
        </div>
      </div>
    </header>
  );
};

export default Header;
