
import React from 'react';
import type { VirtueActivity, UIStrings } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useSound } from '../hooks/useSound';
import { BookIcon } from './icons/BookIcon';
import { PaletteIcon } from './icons/PaletteIcon';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { SpeakerIcon } from './icons/SpeakerIcon';
import VoiceSelector from './VoiceSelector';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ActivityViewProps {
  activity: VirtueActivity;
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

const activityStyling: Record<VirtueActivity['type'], { icon: React.ReactNode; bg: string; text: string; }> = {
  story: { icon: <BookIcon className="h-12 w-12" />, bg: 'bg-blue-900/50', text: 'text-blue-300' },
  drawing: { icon: <PaletteIcon className="h-12 w-12" />, bg: 'bg-purple-900/50', text: 'text-purple-300' },
  discussion: { icon: <ChatBubbleIcon className="h-12 w-12" />, bg: 'bg-teal-900/50', text: 'text-teal-300' },
};

const ActivityView: React.FC<ActivityViewProps> = ({ 
  activity, 
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
  const { playCompletionSound } = useSound();
  const styling = activityStyling[activity.type];

  const handleSpeak = () => {
    if (isSpeaking) {
      cancel();
    } else {
      const selectedVoice = voices.find(v => v.voiceURI === selectedVoiceURI) || null;
      speak(activity.description, selectedVoice);
    }
  };

  const handleComplete = () => {
    if (isCompleted) return;
    playCompletionSound();
    onComplete();
  };

  const navButtonClasses = "p-3 bg-slate-700/50 rounded-full shadow-md hover:bg-slate-600/70 transition disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110";

  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 animate-fade-in-up">
      <div className="flex flex-col items-center text-center">
        <div className={`flex items-center justify-center h-24 w-24 rounded-full ${styling.bg} ${styling.text} mb-4 transition-colors duration-300`}>
          {styling.icon}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{activity.title}</h2>
        <div className="mt-6 text-slate-300 text-lg leading-relaxed text-center space-y-4 bg-slate-900/50 p-6 rounded-lg">
          <p>{activity.description}</p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {language === 'English' && (
            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                onClick={handleSpeak}
                className="flex-grow flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-sky-500 text-white font-bold rounded-full shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-105"
              >
                <SpeakerIcon />
                {isSpeaking ? uiStrings.activity.stopListening : uiStrings.activity.listen}
              </button>
              <VoiceSelector 
                voices={voices}
                selectedVoiceURI={selectedVoiceURI}
                onVoiceChange={onVoiceChange}
              />
            </div>
          )}
          <button
            onClick={handleComplete}
            disabled={isCompleted}
            className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isCompleted ? uiStrings.activity.completedButton : uiStrings.activity.doneButton}
          </button>
        </div>
        <div className="mt-8 w-full flex items-center justify-between border-t border-slate-700 pt-4">
          <button onClick={onBack} disabled={isBackDisabled} className={navButtonClasses}>
            <ArrowLeftIcon className="h-6 w-6 text-slate-200" />
          </button>
          <span className="text-slate-400 font-semibold">{uiStrings.navigation}</span>
          <button onClick={onForward} disabled={isForwardDisabled} className={navButtonClasses}>
            <ArrowRightIcon className="h-6 w-6 text-slate-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityView;
