import { useState, useEffect, useCallback } from 'react';

/**
 * A robust hook for handling speech synthesis.
 * It manages speaking state, handles cancellation, and prevents overlapping audio instances.
 */
export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

  const speak = useCallback((text: string, voice: SpeechSynthesisVoice | null) => {
    if (!synth || !text) return;

    // To prevent multiple audio instances and handle rapid clicks,
    // we always cancel any ongoing or pending speech first.
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };
    
    utterance.onerror = (event) => {
      // The "interrupted" error is expected when we cancel speech, so we don't log it.
      if (event.error !== 'interrupted') {
        console.error('SpeechSynthesisUtterance error:', event.error);
      }
      setIsSpeaking(false);
    };

    synth.speak(utterance);
  }, [synth]);

  const cancel = useCallback(() => {
    if (!synth) return;

    // Directly cancel and update state. This makes the stop button reliable.
    // The onend event for the cancelled utterance will not fire, so we must
    // update the state manually.
    synth.cancel();
    setIsSpeaking(false);
  }, [synth]);

  // Cleanup effect to stop speech when the component unmounts.
  useEffect(() => {
    return () => {
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, [synth]);

  return { isSpeaking, speak, cancel };
};