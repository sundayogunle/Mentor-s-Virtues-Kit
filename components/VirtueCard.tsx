
import React, { Suspense } from 'react';
import type { Virtue, UIStrings } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { SpeakerIcon } from './icons/SpeakerIcon';
import VoiceSelector from './VoiceSelector';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import VirtueIllustration from './VirtueIllustration';

interface VirtueCardProps {
  virtue: Virtue;
  onComplete: () => void;
  isCompleted: boolean;
  voices: SpeechSynthesisVoice[];
  selectedVoiceURI: string | null;
  onVoiceChange: (uri: string) => void;
  onBack: () => void;
  onForward: () => void;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  uiStrings: UIStrings;
  language: string;
}

const VirtueCard: React.FC<VirtueCardProps> = ({ 
  virtue, 
  onComplete, 
  isCompleted, 
  voices, 
  selectedVoiceURI, 
  onVoiceChange,
  onBack,
  onForward,
  isBackDisabled,
  isForwardDisabled,
  uiStrings,
  language
}) => {
  const { isSpeaking, speak, cancel } = useSpeechSynthesis();

  const handleSpeak = () => {
    const textToSpeak = `${virtue.name}. ${virtue.definition}`;
    if (isSpeaking) {
      cancel();
    } else {
      const selectedVoice = voices.find(v => v.voiceURI === selectedVoiceURI) || null;
      speak(textToSpeak, selectedVoice);
    }
  };
  
  const navButtonClasses = "p-3 bg-slate-700/50 rounded-full shadow-md hover:bg-slate-600/70 transition disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110";


  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 animate-fade-in-up">
      <div className="w-full h-48 rounded-xl mb-6 shadow-lg border-4 border-slate-700/50 overflow-hidden">
        <Suspense fallback={<div className="w-full h-full bg-slate-700 animate-pulse" />}>
          <VirtueIllustration name={virtue.illustration} alt={`An illustration representing ${virtue.name}`} />
        </Suspense>
      </div>
      <div className="text-center">
        <h2 className="text-sm font-bold uppercase text-yellow-400">{uiStrings.virtueCard.day1Title}</h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">{virtue.name}</h1>
      </div>
      <div className="mt-6 text-slate-300 text-lg leading-relaxed text-center space-y-4">
        <p>{virtue.definition}</p>
        <p className="font-bold text-yellow-300">{uiStrings.virtueCard.parentNote}</p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
        {language === 'English' && (
            <div className="w-full sm:w-auto flex items-center gap-2">
               <button
                  onClick={handleSpeak}
                  className="flex-grow flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white font-bold rounded-full shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-105"
                >
                  <SpeakerIcon />
                  {isSpeaking ? uiStrings.virtueCard.stopReading : uiStrings.virtueCard.readAloud}
                </button>
                <VoiceSelector 
                  voices={voices}
                  selectedVoiceURI={selectedVoiceURI}
                  onVoiceChange={onVoiceChange}
                />
            </div>
        )}
        <button
          onClick={onComplete}
          disabled={isCompleted}
          className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isCompleted ? uiStrings.virtueCard.completedButton : uiStrings.virtueCard.startButton}
        </button>
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

export default VirtueCard;
