import React, { useState, useEffect } from 'react';
import type { QuizQuestion, UIStrings } from '../types';
import { useSound } from '../hooks/useSound';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface QuizViewProps {
  question: QuizQuestion;
  virtueName: string;
  onAnswer: (selectedIndex: number) => void;
  storedAnswer?: number;
  onBack: () => void;
  onForward: () => void;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
  uiStrings: UIStrings;
}

const QuizView: React.FC<QuizViewProps> = ({ 
  question, 
  virtueName, 
  onAnswer, 
  storedAnswer,
  onBack,
  onForward,
  isBackDisabled,
  isForwardDisabled,
  uiStrings
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { playCorrectSound, playIncorrectSound } = useSound();
  const isAnswered = storedAnswer !== undefined;

  useEffect(() => {
    if (isAnswered) {
      setSelectedAnswer(storedAnswer);
      setIsCorrect(storedAnswer === question.correctAnswerIndex);
    } else {
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  }, [question, storedAnswer, question.correctAnswerIndex, isAnswered]);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === question.correctAnswerIndex;
    setIsCorrect(correct);
    
    if (correct) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }

    onAnswer(answerIndex);
  };
  
  const getButtonClass = (index: number) => {
    const baseClasses = 'p-4 rounded-lg shadow-md font-semibold transition-all duration-300 flex items-center';

    if (selectedAnswer === null) {
      return `${baseClasses} bg-slate-700/50 text-slate-100 hover:bg-indigo-700/70 transform hover:scale-105`;
    }

    const isTheCorrectAnswer = index === question.correctAnswerIndex;
    const isTheSelectedAnswer = index === selectedAnswer;
    
    if (isTheCorrectAnswer) {
      return `${baseClasses} bg-green-500 text-white transform scale-105 ring-4 ring-green-300 cursor-default`;
    }

    if (isTheSelectedAnswer && !isCorrect) {
      return `${baseClasses} bg-red-500 text-white animate-shake cursor-default`;
    }
    
    return `${baseClasses} bg-slate-700/50 text-slate-400 opacity-60 cursor-not-allowed`;
  };
  
  const navButtonClasses = "p-3 bg-slate-700/50 rounded-full shadow-md hover:bg-slate-600/70 transition disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110";

  return (
    <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 animate-fade-in-up text-slate-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">{uiStrings.quiz.title.replace('{virtueName}', virtueName)}</h2>
      <div className="mt-6">
        <p className="text-xl text-center font-semibold text-slate-200">{question.question}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={`${getButtonClass(index)} text-left`}
            >
              <span className="font-bold mr-3 text-lg">{String.fromCharCode(65 + index)}.</span>
              <span>{option}</span>
            </button>
          ))}
        </div>
        {selectedAnswer !== null && (
          <div className="mt-6 text-center animate-fade-in-up">
            <p className={`text-2xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? uiStrings.quiz.correct : uiStrings.quiz.incorrect}
            </p>
             {isAnswered && !isCorrect && (
                <p className="text-lg text-slate-300 mt-2">
                    {uiStrings.quiz.correctAnswerWas
                      .replace('{letter}', String.fromCharCode(65 + question.correctAnswerIndex))
                      .replace('{answer}', question.options[question.correctAnswerIndex])}
                </p>
            )}
          </div>
        )}
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
    </div>
  );
};

export default QuizView;