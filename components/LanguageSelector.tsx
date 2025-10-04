import React from 'react';
import { SUPPORTED_LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
  isOnline: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange, isOnline }) => {
  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        disabled={!isOnline}
        className="appearance-none bg-slate-700/60 backdrop-blur-sm rounded-full shadow-md py-2.5 px-4 pr-8 text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Select language"
        title={!isOnline ? "Language selection is disabled while offline" : "Select language"}
      >
        {SUPPORTED_LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.name} className="text-black">
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-300">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};

export default LanguageSelector;