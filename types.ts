import type { FC, SVGProps } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Funcise {
  title: string;
  description: string;
  parentAppraisalPrompt: string;
}

export type ActivityType = 'story' | 'drawing' | 'discussion';

export interface VirtueActivity {
  type: ActivityType;
  title: string;
  description: string;
}

export interface Virtue {
  id: number;
  name: string;
  definition: string;
  illustration: string;
  quiz: QuizQuestion[];
  funcise: Funcise;
  activities: VirtueActivity[];
}

export interface ParentContent {
  title: string;
  conversationStarters: string[];
  whyItMatters: string;
  practicalTips: string[];
}

export interface PointsHistoryEntry {
  date: string;
  amount: number;
  reason: string;
}

export interface StreakData {
  count: number;
  lastCompletionDate: string; // YYYY-MM-DD
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  requiredVirtues: number[];
}

export interface ContestSubmission {
  url: string;
  date: string;
  week: number;
}

export interface ContestWinner {
  name: string;
  url: string;
  week: number;
}

export interface UIStrings {
  header: {
    weekDay: string;
    points: string;
    parentsCornerButton: string;
    streak: string;
  };
  virtueCard: {
    day1Title: string;
    parentNote: string;
    stopReading: string;
    readAloud: string;
    completedButton: string;
    startButton: string;
  };
  quiz: {
    title: string;
    correct: string;
    incorrect: string;
    correctAnswerWas: string;
  };
  activity: {
    stopListening: string;
    listen: string;
    completedButton: string;
    doneButton: string;
  };
  funcise: {
    title: string;
    parentAppraisal: string;
    completedButton: string;
    completeButton: string;
  };
  summary: {
    wellDone: string;
    completedWeek: string;
    keepPracticing: string;
    nextWeekButton: string;
  };
  completionScreen: {
    congratulations: string;
    completedProgram: string;
    totalPoints: string;
  },
  navigation: string;
  translating: string;
  progressBarLabel: string;
  adjustPointsModal: {
    title: string;
    currentPoints: string;
    amountLabel: string;
    reasonLabel: string;
    addPointsButton: string;
    deductPointsButton: string;
    closeButton: string;
    amountPlaceholder: string;
    reasonPlaceholder: string;
  };
  parentsCorner: {
    title: string;
    closeButton: string;
    loadingText: string;
    errorText: string;
    conversationStarters: string;
    whyItMatters: string;
    practicalTips: string;
    pointsHistoryTitle: string;
    noHistory: string;
    masteryTitle: string;
    badgesTitle: string;
    noBadges: string;
    exchangeRateTitle: string;
    currencySymbolLabel: string;
    pointsPerCurrencyLabel: string;
    currentValueLabel: string;
    saveRateButton: string;
    tabTips: string;
    tabProgress: string;
    tabShare: string;
    shareAndWin: {
      title: string;
      instructionsTitle: string;
      step1: string;
      step2: string;
      step3: string;
      copyLinkTip: string;
      selectionProcessTitle: string;
      selectionStep1: string;
      selectionStep2: string;
      selectionStep3: string;
      selectionStep4: string;
      selectionStep5: string;
      submissionTitle: string;
      urlPlaceholder: string;
      submitButton: string;
      submittedMessage: string;
      winnersTitle: string;
      noWinners: string;
      winnerPill: string;
      adminSubmissionsTitle: string;
      noSubmissions: string;
      makeWinnerButton: string;
    };
  };
  badgeNotification: {
    title: string;
    subtitle: string;
    closeButton: string;
  };
  offlineIndicator: {
    noConnection: string;
    someFeaturesUnavailable: string;
  };
}