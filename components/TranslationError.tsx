import React from 'react';

interface TranslationErrorProps {
  message: string;
  onRetry: () => void;
  isOnline: boolean;
  onContinueInEnglish: () => void;
}

const TranslationError: React.FC<TranslationErrorProps> = ({ message, onRetry, isOnline, onContinueInEnglish }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex flex-col items-center justify-center p-4 text-slate-100 text-center">
      <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md animate-fade-in-up">
        <svg className="h-16 w-16 text-red-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 className="text-2xl font-bold text-red-400 mt-4">Translation Failed</h2>
        <p className="mt-2 text-slate-300">{message}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetry}
            disabled={!isOnline}
            className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:transform-none"
            title={!isOnline ? "You must be online to retry." : ""}
          >
            Retry
          </button>
          <button
            onClick={onContinueInEnglish}
            className="px-6 py-2 bg-slate-700 text-slate-200 font-semibold rounded-full hover:bg-slate-600 transition-transform transform hover:scale-105"
          >
            Continue in English
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationError;