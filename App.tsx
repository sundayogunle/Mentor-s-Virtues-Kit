
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { VIRTUES_DATA, INITIAL_UI_STRINGS, SUPPORTED_LANGUAGES, BADGE_DEFINITIONS } from './constants';
import type { Virtue, QuizQuestion, VirtueActivity, UIStrings, ParentContent, PointsHistoryEntry, StreakData, Badge, ContestSubmission, ContestWinner } from './types';
import Header from './components/Header';
import VirtueCard from './components/VirtueCard';
import QuizView from './components/QuizView';
import FunciseView from './components/FunciseView';
import WeeklySummary from './components/WeeklySummary';
import ActivityView from './components/ActivityView';
import ProgressBar from './components/ProgressBar';
import { GoogleGenAI } from '@google/genai';
import TranslationError from './components/TranslationError';
import { useSound } from './hooks/useSound';
import OfflineIndicator from './components/OfflineIndicator';
import Onboarding from './components/Onboarding';
import ParentsCorner from './components/ParentsCorner';
import AdjustPointsModal from './components/AdjustPointsModal';
import BadgeNotificationModal from './components/BadgeNotificationModal';

type Task = 
  | { type: 'definition'; data: Virtue }
  | { type: 'quiz'; data: QuizQuestion; virtueName: string }
  | { type: 'activity'; data: VirtueActivity }
  | { type: 'funcise'; data: Virtue };

const App: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [points, setPoints] = useState<number>(0);
  const [showSummary, setShowSummary] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [viewedTaskIndex, setViewedTaskIndex] = useState(0);
  const [progressTaskIndex, setProgressTaskIndex] = useState(0);
  const [completionData, setCompletionData] = useState<Record<number, any>>({});
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | null>(null);

  const [language, setLanguage] = useState('English');
  const [translatedVirtue, setTranslatedVirtue] = useState<Virtue | null>(null);
  const [uiStrings, setUiStrings] = useState<UIStrings>(INITIAL_UI_STRINGS);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [translationCache, setTranslationCache] = useState<Record<string, { virtue: Virtue, ui: UIStrings }>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { playTransitionSound, playPointsSound, playBadgeUnlockSound } = useSound();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // State for Parent's Corner
  const [showParentsCorner, setShowParentsCorner] = useState(false);
  const [parentsCornerContent, setParentsCornerContent] = useState<ParentContent | null>(null);
  const [isFetchingParentContent, setIsFetchingParentContent] = useState(false);
  const [parentContentError, setParentContentError] = useState<string | null>(null);
  const [parentsCornerCache, setParentsCornerCache] = useState<Record<string, ParentContent>>({});

  // State for Points Adjustment
  const [pointsHistory, setPointsHistory] = useState<PointsHistoryEntry[]>([]);
  const [isAdjustPointsModalOpen, setIsAdjustPointsModalOpen] = useState(false);

  // State for Gamification
  const [streakData, setStreakData] = useState<StreakData>({ count: 0, lastCompletionDate: '' });
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([]);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [newlyEarnedBadge, setNewlyEarnedBadge] = useState<Badge | null>(null);

  // State for Point-to-Currency Conversion
  const [currencySymbol, setCurrencySymbol] = useState<string>('$');
  const [pointsToCurrencyRate, setPointsToCurrencyRate] = useState<number>(100);

  // State for Social Contest
  const [contestSubmissions, setContestSubmissions] = useState<ContestSubmission[]>([]);
  const [contestWinners, setContestWinners] = useState<ContestWinner[]>([]);


  // Add online/offline event listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load progress, check onboarding, and get translation cache from localStorage on initial render
  useEffect(() => {
    try {
      const hasOnboarded = localStorage.getItem('hasCompletedOnboarding') === 'true';
      setShowOnboarding(!hasOnboarded);

      const savedProgressJSON = localStorage.getItem('virtuesAppProgress');
      if (savedProgressJSON) {
        const savedProgress = JSON.parse(savedProgressJSON);
        
        if (savedProgress && typeof savedProgress.currentWeek === 'number') {
            const loadedWeek = savedProgress.currentWeek;
            const loadedPoints = savedProgress.points || 0;
            const loadedCompletionData = savedProgress.completionData || {};
            const loadedTranslationCache = savedProgress.translationCache || {};
            const loadedParentsCornerCache = savedProgress.parentsCornerCache || {};
            const loadedPointsHistory = savedProgress.pointsHistory || [];
            const loadedStreakData = savedProgress.streakData || { count: 0, lastCompletionDate: '' };
            const loadedCompletedWeeks = savedProgress.completedWeeks || [];
            const loadedEarnedBadges = savedProgress.earnedBadges || [];
            const loadedCurrencySymbol = savedProgress.currencySymbol || '$';
            const loadedPointsToCurrencyRate = savedProgress.pointsToCurrencyRate || 100;
            const loadedSubmissions = savedProgress.contestSubmissions || [];
            const loadedWinners = savedProgress.contestWinners || [];

            setCurrentWeek(loadedWeek);
            setPoints(loadedPoints);
            setCompletionData(loadedCompletionData);
            setTranslationCache(loadedTranslationCache);
            setParentsCornerCache(loadedParentsCornerCache);
            setPointsHistory(loadedPointsHistory);
            setStreakData(loadedStreakData);
            setCompletedWeeks(loadedCompletedWeeks);
            setEarnedBadges(loadedEarnedBadges);
            setCurrencySymbol(loadedCurrencySymbol);
            setPointsToCurrencyRate(loadedPointsToCurrencyRate);
            setContestSubmissions(loadedSubmissions);
            setContestWinners(loadedWinners);

            const virtueForLoadedWeek = VIRTUES_DATA[loadedWeek - 1];
            if (virtueForLoadedWeek) {
                const totalTasks = 1 + virtueForLoadedWeek.quiz.length + virtueForLoadedWeek.activities.length + 1;
                let newProgressIndex = 0;
                while (newProgressIndex < totalTasks && loadedCompletionData[newProgressIndex] !== undefined) {
                    newProgressIndex++;
                }
                
                if (newProgressIndex >= totalTasks) {
                    setShowSummary(true);
                    setProgressTaskIndex(totalTasks);
                    setViewedTaskIndex(totalTasks - 1);
                } else {
                    setProgressTaskIndex(newProgressIndex);
                    setViewedTaskIndex(newProgressIndex);
                }
            }
        }
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage:", error);
    } finally {
        setIsLoaded(true);
    }
  }, []);

  // Save progress and caches to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        const progressToSave = { 
          currentWeek, 
          points, 
          completionData, 
          translationCache, 
          parentsCornerCache, 
          pointsHistory,
          streakData,
          completedWeeks,
          earnedBadges,
          currencySymbol,
          pointsToCurrencyRate,
          contestSubmissions,
          contestWinners
        };
        localStorage.setItem('virtuesAppProgress', JSON.stringify(progressToSave));
      } catch (error) {
        console.error("Failed to save progress to localStorage:", error);
      }
    }
  }, [currentWeek, points, completionData, translationCache, parentsCornerCache, pointsHistory, streakData, completedWeeks, earnedBadges, currencySymbol, pointsToCurrencyRate, contestSubmissions, contestWinners, isLoaded]);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      
      const filteredVoices = availableVoices.filter(
        v => v.lang === 'en-US' || v.lang === 'en-GB'
      );
      
      setVoices(filteredVoices);

      // Use the functional form of setState to avoid a dependency on selectedVoiceURI
      setSelectedVoiceURI(currentSelectedURI => {
        const isSelectedVoiceValid = filteredVoices.some(v => v.voiceURI === currentSelectedURI);
        
        if (filteredVoices.length > 0 && !isSelectedVoiceValid) {
          // If no voice is selected, or the selected one is no longer available, default to the first one.
          return filteredVoices[0].voiceURI;
        }
        
        if (filteredVoices.length === 0) {
          // If no voices match the filter, clear the selection.
          return null;
        }
        
        // Otherwise, keep the current selection.
        return currentSelectedURI;
      });
    };
    
    // The 'voiceschanged' event is the standard way to get voices, but some browsers
    // populate the list immediately. We handle both scenarios.
    if (synth.getVoices().length > 0) {
        updateVoices();
    }
    synth.addEventListener('voiceschanged', updateVoices);

    return () => {
      synth.removeEventListener('voiceschanged', updateVoices);
    };
  }, []); // This effect should run once on mount to set up the voice list.


  useEffect(() => {
    if (voices.length === 0) return;
    const langCode = SUPPORTED_LANGUAGES.find(l => l.name === language)?.code;
    if (!langCode) return;

    const matchingVoices = voices.filter(v => v.lang.startsWith(langCode));
    if (matchingVoices.length > 0) {
        if(!matchingVoices.some(v => v.voiceURI === selectedVoiceURI)) {
            setSelectedVoiceURI(matchingVoices[0].voiceURI);
        }
    }
  }, [language, voices, selectedVoiceURI]);

  const currentVirtue: Virtue | undefined = useMemo(() => VIRTUES_DATA[currentWeek - 1], [currentWeek]);
  
  const translateContent = useCallback(async () => {
    if (!currentVirtue) return;
    
    setTranslationError(null);

    if (language === 'English') {
      setTranslatedVirtue(currentVirtue);
      setUiStrings(INITIAL_UI_STRINGS);
      return;
    }
    
    const cacheKey = `${currentVirtue.id}-${language}`;
    if (translationCache[cacheKey]) {
        setTranslatedVirtue(translationCache[cacheKey].virtue);
        setUiStrings(translationCache[cacheKey].ui);
        return;
    }

    if (!isOnline) {
      setTranslationError(`You are offline. We couldn't load the translation for ${language}.`);
      return;
    }

    setIsTranslating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const virtueToTranslate = {
          name: currentVirtue.name,
          definition: currentVirtue.definition,
          quiz: currentVirtue.quiz.map(q => ({ question: q.question, options: q.options })),
          activities: currentVirtue.activities.map(a => ({ title: a.title, description: a.description })),
          funcise: {
              title: currentVirtue.funcise.title,
              description: currentVirtue.funcise.description,
              parentAppraisalPrompt: currentVirtue.funcise.parentAppraisalPrompt
          }
      };

      const prompt = `Translate the following JSON object's string values into ${language}. Do not translate the keys or any placeholders like {variableName}. Maintain the exact JSON structure. It is critical that the output is a single, valid JSON object that can be parsed directly, without any markdown formatting like \`\`\`json. Ensure all string values are properly JSON-escaped (e.g., use \\" for double quotes and \\n for newlines inside a string).\n\n${JSON.stringify({ virtue: virtueToTranslate, ui: INITIAL_UI_STRINGS })}`;

      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
              responseMimeType: "application/json",
          }
      });

      let translatedData;
      const rawText = response.text;

      try {
        let jsonText = rawText.trim();
        const startIndex = jsonText.indexOf('{');
        const endIndex = jsonText.lastIndexOf('}');

        if (startIndex !== -1 && endIndex > startIndex) {
            jsonText = jsonText.substring(startIndex, endIndex + 1);
        }
        
        translatedData = JSON.parse(jsonText);
      } catch (parseError) {
        console.error("JSON parsing failed for translated content.", parseError);
        console.error("Received malformed text from API:", rawText);
        throw new Error("The translated content was not in a valid format.");
      }
      
      const { virtue: translatedVirtueContent, ui: translatedUi } = translatedData;

      const newTranslatedVirtue = {
          ...currentVirtue,
          name: translatedVirtueContent.name,
          definition: translatedVirtueContent.definition,
          quiz: currentVirtue.quiz.map((q, i) => ({ ...q, question: translatedVirtueContent.quiz[i].question, options: translatedVirtueContent.quiz[i].options })),
          activities: currentVirtue.activities.map((a, i) => ({ ...a, title: translatedVirtueContent.activities[i].title, description: translatedVirtueContent.activities[i].description })),
          funcise: { ...currentVirtue.funcise, title: translatedVirtueContent.funcise.title, description: translatedVirtueContent.funcise.description, parentAppraisalPrompt: translatedVirtueContent.funcise.parentAppraisalPrompt }
      };

      setTranslationCache(prev => ({
          ...prev,
          [cacheKey]: { virtue: newTranslatedVirtue, ui: translatedUi }
      }));

      setTranslatedVirtue(newTranslatedVirtue);
      setUiStrings(translatedUi);
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslationError("Sorry, we couldn't translate the content. Please check your connection and try again.");
    } finally {
      setIsTranslating(false);
    }
  }, [currentVirtue, language, translationCache, isOnline]);

  useEffect(() => {
    translateContent();
  }, [translateContent]);

  const handleRetryTranslation = () => {
    translateContent();
  };

  const handleContinueInEnglish = () => {
    setTranslationError(null);
    setLanguage('English');
  };
  
  const handleOnboardingComplete = () => {
    try {
      localStorage.setItem('hasCompletedOnboarding', 'true');
      setShowOnboarding(false);
    } catch (error) {
      console.error("Failed to save onboarding status to localStorage:", error);
      setShowOnboarding(false);
    }
  };

  const displayVirtue = translatedVirtue;

  const fetchParentContent = useCallback(async () => {
    if (!displayVirtue) return;

    const cacheKey = `${displayVirtue.id}-${language}`;
    if (parentsCornerCache[cacheKey]) {
      setParentsCornerContent(parentsCornerCache[cacheKey]);
      return;
    }

    if (!isOnline) {
      setParentContentError("You are offline. Please connect to the internet to get parenting tips.");
      return;
    }

    setIsFetchingParentContent(true);
    setParentContentError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `You are an expert in child psychology and development, specializing in character education. For the virtue of '${displayVirtue.name}' (defined as: '${displayVirtue.definition}'), provide practical parenting advice for discussing this with a child aged 5-7. The target language for your response is ${language}. Please provide your response as a single, valid JSON object, without any markdown formatting like \`\`\`json. The JSON object must have the following keys: 'title' (a translated title for the section, e.g., 'Parent's Corner on ${displayVirtue.name}'), 'conversationStarters' (an array of 3-4 engaging questions to ask a child), 'whyItMatters' (a concise paragraph explaining the importance of this virtue), and 'practicalTips' (an array of 3-4 actionable tips for parents to encourage the virtue).`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      
      const rawText = response.text;
      let parsedContent: ParentContent;

      // Defensive parsing to handle markdown fences or other noise from the API response.
      let jsonText = rawText.trim();
      const startIndex = jsonText.indexOf('{');
      const endIndex = jsonText.lastIndexOf('}');
      
      if (startIndex !== -1 && endIndex > startIndex) {
        jsonText = jsonText.substring(startIndex, endIndex + 1);
      } else {
        // If we can't find a JSON object, throw an error to be caught below.
        throw new Error("No valid JSON object found in the parent content response.");
      }
      
      parsedContent = JSON.parse(jsonText);

      // Validate the structure of the parsed object to prevent runtime errors in child components.
      if (
        !parsedContent ||
        typeof parsedContent.title !== 'string' ||
        !Array.isArray(parsedContent.conversationStarters) ||
        typeof parsedContent.whyItMatters !== 'string' ||
        !Array.isArray(parsedContent.practicalTips)
      ) {
        throw new Error("Parsed JSON does not match the expected ParentContent structure.");
      }
      
      setParentsCornerContent(parsedContent);
      setParentsCornerCache(prev => ({ ...prev, [cacheKey]: parsedContent }));

    } catch (error) {
      console.error("Failed to fetch or parse parent content:", error);
      setParentContentError("Sorry, we couldn't load the parenting tips right now. Please try again later.");
    } finally {
      setIsFetchingParentContent(false);
    }
  }, [displayVirtue, language, parentsCornerCache, isOnline]);


  const handleOpenParentsCorner = () => {
    setShowParentsCorner(true);
    fetchParentContent();
  };
  
  const handleAdjustPoints = (amount: number, reason: string) => {
    setPoints(p => Math.max(0, p + amount)); // Prevent points from going below zero
    setPointsHistory(prev => [...prev, { date: new Date().toISOString(), amount, reason }]);
    playPointsSound();
    setIsAdjustPointsModalOpen(false);
  };
  
  const handleExchangeRateUpdate = (symbol: string, rate: number) => {
    setCurrencySymbol(symbol);
    setPointsToCurrencyRate(rate);
  };

  const handleContestSubmit = (url: string) => {
    const newSubmission: ContestSubmission = {
        url,
        date: new Date().toISOString(),
        week: currentWeek,
    };
    setContestSubmissions(prev => [...prev, newSubmission]);
  };

  const handleSelectWinner = (submission: ContestSubmission) => {
      // Simple way to get a "name" - extract from URL hostname
      let name = `Entry from...`;
      try {
        name = `Entry from ${new URL(submission.url).hostname}`;
      } catch (e) { /* ignore invalid URL for this purpose */ }

      const newWinner: ContestWinner = {
          name,
          url: submission.url,
          week: submission.week,
      };
      // Avoid duplicate winners from the same URL
      if (!contestWinners.some(w => w.url === newWinner.url)) {
          setContestWinners(prev => [...prev, newWinner]);
      }
      // Remove from submissions list
      setContestSubmissions(prev => prev.filter(s => s.url !== submission.url));
  };


  const weeklyTasks: Task[] = useMemo(() => {
    if (!displayVirtue) return [];
    
    return [
      { type: 'definition', data: displayVirtue },
      { type: 'quiz', data: displayVirtue.quiz[0], virtueName: displayVirtue.name },
      { type: 'quiz', data: displayVirtue.quiz[1], virtueName: displayVirtue.name },
      ...displayVirtue.activities.map(act => ({ type: 'activity', data: act as VirtueActivity })),
      { type: 'funcise', data: displayVirtue },
    ];
  }, [displayVirtue]);

  const updateStreak = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

    if (streakData.lastCompletionDate === todayStr) {
      return; // Already completed a task today
    }
    
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (streakData.lastCompletionDate === yesterdayStr) {
      // It's a consecutive day
      setStreakData({ count: streakData.count + 1, lastCompletionDate: todayStr });
    } else {
      // Not consecutive, or first time
      setStreakData({ count: 1, lastCompletionDate: todayStr });
    }
  };

  const handleCompleteTask = (taskIndex: number, data: any, pointsEarned = 0) => {
    if (completionData[taskIndex] !== undefined) return;
    setPoints(p => p + pointsEarned);
    setCompletionData(prev => ({ ...prev, [taskIndex]: data }));
    updateStreak();
    if (progressTaskIndex === taskIndex && progressTaskIndex < weeklyTasks.length) {
      setProgressTaskIndex(p => p + 1);
    }
  };

  const handleGoBack = () => {
    if (viewedTaskIndex > 0) setViewedTaskIndex(v => v - 1);
  };
  
  const handleGoForward = () => {
    if (viewedTaskIndex < progressTaskIndex) {
        if(viewedTaskIndex >= weeklyTasks.length - 1) {
            setShowSummary(true);
        } else {
            setViewedTaskIndex(v => v + 1);
        }
    }
  };

  const checkBadges = (updatedCompletedWeeks: number[]) => {
    for (const badge of BADGE_DEFINITIONS) {
      if (!earnedBadges.includes(badge.id)) {
        const hasAllVirtues = badge.requiredVirtues.every(virtueId => updatedCompletedWeeks.includes(virtueId));
        if (hasAllVirtues) {
          setEarnedBadges(prev => [...prev, badge.id]);
          setNewlyEarnedBadge(badge);
          playBadgeUnlockSound();
        }
      }
    }
  };

  const handleNextWeek = () => {
    playTransitionSound();

    const updatedCompletedWeeks = [...new Set([...completedWeeks, currentWeek])];
    setCompletedWeeks(updatedCompletedWeeks);
    checkBadges(updatedCompletedWeeks);

    if (currentWeek < VIRTUES_DATA.length) {
      setCurrentWeek(prev => prev + 1);
      setViewedTaskIndex(0);
      setProgressTaskIndex(0);
      setCompletionData({});
      setShowSummary(false);
      setParentsCornerContent(null); // Clear parent content for the new week
    } else {
      setIsCompleted(true);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div>
      </div>
    );
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (isCompleted || !currentVirtue) {
    return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex flex-col items-center justify-center p-4 text-white">
        <h1 className="text-4xl font-bold mb-4">{uiStrings.completionScreen.congratulations}</h1>
        <p className="text-xl">{uiStrings.completionScreen.completedProgram}</p>
        <p className="text-2xl mt-8">{uiStrings.completionScreen.totalPoints.replace('{points}', String(points))}</p>
      </div>
    );
  }

  if (translationError) {
    return (
      <TranslationError
        message={translationError}
        onRetry={handleRetryTranslation}
        isOnline={isOnline}
        onContinueInEnglish={handleContinueInEnglish}
      />
    );
  }

  if (isTranslating || !displayVirtue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex flex-col items-center justify-center p-4 text-slate-200">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div>
        <p className="text-xl font-semibold mt-4">{uiStrings.translating}</p>
      </div>
    );
  }

  const currentTask = weeklyTasks[viewedTaskIndex];
  const progress = showSummary ? 100 : (progressTaskIndex / weeklyTasks.length) * 100;

  const isBackDisabled = viewedTaskIndex === 0;
  const isForwardDisabled = viewedTaskIndex >= progressTaskIndex;

  const renderTask = () => {
    if (!currentTask) return null;
    const isTaskCompleted = completionData[viewedTaskIndex] !== undefined;

    switch (currentTask.type) {
      case 'definition':
        return <VirtueCard 
          virtue={currentTask.data} 
          onComplete={() => {
            handleCompleteTask(viewedTaskIndex, true);
            if (viewedTaskIndex < weeklyTasks.length - 1) {
              setViewedTaskIndex(v => v + 1);
            } else {
              setShowSummary(true);
            }
          }}
          isCompleted={isTaskCompleted}
          voices={voices}
          selectedVoiceURI={selectedVoiceURI}
          onVoiceChange={setSelectedVoiceURI}
          onBack={handleGoBack}
          onForward={handleGoForward}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          uiStrings={uiStrings}
          language={language}
        />
      case 'quiz':
        return <QuizView 
          question={currentTask.data} 
          virtueName={currentTask.virtueName} 
          onAnswer={(selectedIndex) => {
            const correct = selectedIndex === currentTask.data.correctAnswerIndex;
            handleCompleteTask(viewedTaskIndex, { selectedIndex }, correct ? 50 : 0);
          }}
          storedAnswer={completionData[viewedTaskIndex]?.selectedIndex}
          onBack={handleGoBack}
          onForward={handleGoForward}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          uiStrings={uiStrings}
        />
      case 'activity':
        return <ActivityView 
          activity={currentTask.data} 
          onComplete={() => {
            handleCompleteTask(viewedTaskIndex, true);
            if (viewedTaskIndex < weeklyTasks.length - 1) {
              setViewedTaskIndex(v => v + 1);
            } else {
              setShowSummary(true);
            }
          }}
          isCompleted={isTaskCompleted}
          voices={voices}
          selectedVoiceURI={selectedVoiceURI}
          onVoiceChange={setSelectedVoiceURI}
          onBack={handleGoBack}
          onForward={handleGoForward}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          uiStrings={uiStrings}
          language={language}
        />
      case 'funcise':
        return <FunciseView 
          virtue={currentTask.data} 
          onComplete={(rating) => {
            handleCompleteTask(viewedTaskIndex, { rating }, rating * 10);
            setShowSummary(true);
            playTransitionSound();
          }}
          storedRating={completionData[viewedTaskIndex]?.rating}
          onBack={handleGoBack}
          onForward={handleGoForward}
          isBackDisabled={isBackDisabled}
          isForwardDisabled={isForwardDisabled}
          uiStrings={uiStrings}
        />
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6 lg:p-8 text-slate-100">
      <div className="max-w-4xl mx-auto">
        <OfflineIndicator isOnline={isOnline} uiStrings={uiStrings.offlineIndicator} />
        <Header 
          currentWeek={currentWeek} 
          totalWeeks={VIRTUES_DATA.length} 
          points={points}
          streakCount={streakData.count}
          currentDay={viewedTaskIndex + 1}
          totalDays={weeklyTasks.length}
          language={language}
          onLanguageChange={setLanguage}
          uiStrings={uiStrings}
          isOnline={isOnline}
          onOpenParentsCorner={handleOpenParentsCorner}
          onOpenAdjustPoints={() => setIsAdjustPointsModalOpen(true)}
          currencySymbol={currencySymbol}
          pointsToCurrencyRate={pointsToCurrencyRate}
        />
        <ProgressBar progress={progress} uiStrings={uiStrings} />
        <main className="mt-6">
          {showSummary ? (
            <WeeklySummary virtue={displayVirtue} onNextWeek={handleNextWeek} uiStrings={uiStrings} />
          ) : (
            renderTask()
          )}
        </main>
        <ParentsCorner 
          isOpen={showParentsCorner}
          onClose={() => setShowParentsCorner(false)}
          content={parentsCornerContent}
          isLoading={isFetchingParentContent}
          error={parentContentError}
          onRetry={fetchParentContent}
          isOnline={isOnline}
          points={points}
          pointsHistory={pointsHistory}
          completedWeeks={completedWeeks}
          earnedBadges={earnedBadges}
          allBadges={BADGE_DEFINITIONS}
          allVirtues={VIRTUES_DATA}
          currencySymbol={currencySymbol}
          pointsToCurrencyRate={pointsToCurrencyRate}
          onExchangeRateUpdate={handleExchangeRateUpdate}
          contestSubmissions={contestSubmissions}
          contestWinners={contestWinners}
          onContestSubmit={handleContestSubmit}
          onSelectWinner={handleSelectWinner}
          currentWeek={currentWeek}
          uiStrings={uiStrings.parentsCorner}
        />
        <AdjustPointsModal
          isOpen={isAdjustPointsModalOpen}
          onClose={() => setIsAdjustPointsModalOpen(false)}
          currentPoints={points}
          onAdjust={handleAdjustPoints}
          uiStrings={uiStrings.adjustPointsModal}
        />
        {newlyEarnedBadge && (
            <BadgeNotificationModal
                badge={newlyEarnedBadge}
                onClose={() => setNewlyEarnedBadge(null)}
                uiStrings={uiStrings.badgeNotification}
            />
        )}
      </div>
    </div>
  );
};

export default App;