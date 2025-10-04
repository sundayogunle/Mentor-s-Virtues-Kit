import React from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[];
  selectedVoiceURI: string | null;
  onVoiceChange: (uri: string) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ voices, selectedVoiceURI, onVoiceChange }) => {
  if (voices.length === 0) {
    return null; // Don't render if no voices are available
  }

  const selectedVoice = voices.find(v => v.voiceURI === selectedVoiceURI);
  // Simplify the display name for a cleaner look, e.g., "Microsoft David (en-US)" becomes "Microsoft David"
  const displayName = selectedVoice ? selectedVoice.name.split('(')[0].trim() : "Select Voice";

  return (
    <div className="relative inline-flex" style={{ minWidth: '160px' }}>
      {/* Styled background element that looks like a button */}
      <div className="flex items-center justify-between w-full h-[48px] bg-slate-700/50 hover:bg-slate-600/70 text-slate-200 font-semibold py-2 pl-4 pr-10 rounded-full shadow-sm transition-colors cursor-pointer backdrop-blur-sm">
        <span className="truncate" title={selectedVoice?.name}>
          {displayName}
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-slate-400" />
        </div>
      </div>

      {/* The actual select element is invisible and layered on top for functionality and accessibility */}
      <select
        value={selectedVoiceURI || ''}
        onChange={(e) => onVoiceChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Select a voice"
      >
        {voices.map((voice) => (
          <option key={voice.voiceURI} value={voice.voiceURI} className="text-black">
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;