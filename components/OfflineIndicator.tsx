import React from 'react';

interface OfflineIndicatorProps {
  isOnline: boolean;
  uiStrings: {
    noConnection: string;
    someFeaturesUnavailable: string;
  };
}

const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ isOnline, uiStrings }) => {
  if (isOnline) {
    return null;
  }

  return (
    <div 
      className="bg-amber-500 text-center text-black p-2 rounded-md mb-4 shadow-lg animate-fade-in-up"
      role="status"
    >
      <strong className="font-bold">{uiStrings.noConnection}</strong> {uiStrings.someFeaturesUnavailable}
    </div>
  );
};

export default OfflineIndicator;