import React from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex flex-col items-center justify-center p-4 text-white text-center animate-fade-in-up">
      <div className="bg-slate-800/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-2xl max-w-2xl">
        <div className="mb-6 text-center">
            <h1 className="text-5xl font-extrabold text-white">
              Mentor's Virtues <span className="text-yellow-400">Kit</span><sup className="text-2xl font-bold top-[-1.2em] ml-1">&trade;</sup>
            </h1>
            <p className="text-yellow-400 font-semibold mt-2 text-sm">
              A 28 Weeks Virtue Training Plan For Your Child
            </p>
        </div>
        <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
          An interactive 28-week journey to help your child learn and practice important virtues.
        </p>
        <button
          onClick={onComplete}
          className="px-12 py-4 bg-yellow-400 text-slate-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default Onboarding;