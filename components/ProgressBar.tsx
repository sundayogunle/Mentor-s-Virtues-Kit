import React from 'react';
import type { UIStrings } from '../types';

interface ProgressBarProps {
  progress: number;
  uiStrings: UIStrings;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, uiStrings }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="mt-4">
      <div 
        className="w-full bg-slate-700/50 rounded-full h-4 shadow-inner"
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={uiStrings.progressBarLabel}
      >
        <div
          className="bg-yellow-400 h-4 rounded-full transition-all duration-500 ease-out shadow-md"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;