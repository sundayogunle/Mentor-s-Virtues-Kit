import { useCallback, useRef } from 'react';

// A helper function to play a sequence of notes.
const playTune = (audioContext: AudioContext | null, notes: {freq: number, dur: number}[]) => {
    if (!audioContext) return;
    let startTime = audioContext.currentTime;

    notes.forEach(note => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(note.freq, startTime);
        gainNode.gain.setValueAtTime(0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + note.dur * 0.9);

        oscillator.start(startTime);
        oscillator.stop(startTime + note.dur);
        startTime += note.dur;
    });
}

/**
 * A custom hook to play sound effects using the Web Audio API.
 */
export const useSound = () => {
  // Use a ref to store the AudioContext so it persists across re-renders.
  const audioContextRef = useRef<AudioContext | null>(null);

  /**
   * Initializes the AudioContext on the first user interaction to comply with browser autoplay policies.
   */
  const initializeAudioContext = useCallback(() => {
    if (audioContextRef.current === null) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        audioContextRef.current = new AudioContext();
      }
    }
    // If the context is suspended, resume it.
    if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
    }
  }, []);

  /**
   * Plays a pleasant, rising two-tone chime for correct answers.
   */
  const playCorrectSound = useCallback(() => {
    initializeAudioContext();
    const notes = [
        { freq: 523.25, dur: 0.1 }, // C5
        { freq: 659.25, dur: 0.2 }, // E5
    ];
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);

  /**
   * Plays a gentle, descending two-tone sound for incorrect answers.
   */
  const playIncorrectSound = useCallback(() => {
    initializeAudioContext();
    const notes = [
        { freq: 261.63, dur: 0.15 }, // C4
        { freq: 246.94, dur: 0.2 },  // B3
    ];
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);

  /**
   * Plays a single, cheerful "ding" for completing an activity.
   */
  const playCompletionSound = useCallback(() => {
    initializeAudioContext();
     const notes = [{ freq: 659.25, dur: 0.2 }]; // E5
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);
  
  /**
   * Plays a short, rising arpeggio for major transitions.
   */
  const playTransitionSound = useCallback(() => {
    initializeAudioContext();
    const notes = [
        { freq: 523.25, dur: 0.08 }, // C5
        { freq: 659.25, dur: 0.08 }, // E5
        { freq: 783.99, dur: 0.15 }, // G5
    ];
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);

  /**
   * Plays a simple "blip" for point adjustments.
   */
  const playPointsSound = useCallback(() => {
    initializeAudioContext();
    const notes = [{ freq: 783.99, dur: 0.1 }]; // G5
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);

  /**
   * Plays a celebratory arpeggio for unlocking a badge.
   */
  const playBadgeUnlockSound = useCallback(() => {
    initializeAudioContext();
    const notes = [
        { freq: 523.25, dur: 0.1 }, // C5
        { freq: 659.25, dur: 0.1 }, // E5
        { freq: 783.99, dur: 0.1 }, // G5
        { freq: 1046.50, dur: 0.2 }, // C6
    ];
    playTune(audioContextRef.current, notes);
  }, [initializeAudioContext]);


  return { playCorrectSound, playIncorrectSound, playCompletionSound, playTransitionSound, playPointsSound, playBadgeUnlockSound };
};