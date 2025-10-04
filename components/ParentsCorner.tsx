import React, { useState, useEffect, useMemo } from 'react';
import type { ParentContent, UIStrings, PointsHistoryEntry, Virtue, Badge, ContestSubmission, ContestWinner } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import CommunitySpotlight from './CommunitySpotlight';

interface ParentsCornerProps {
  isOpen: boolean;
  onClose: () => void;
  content: ParentContent | null;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  isOnline: boolean;
  points: number;
  pointsHistory: PointsHistoryEntry[];
  completedWeeks: number[];
  earnedBadges: string[];
  allBadges: Badge[];
  allVirtues: Virtue[];
  currencySymbol: string;
  pointsToCurrencyRate: number;
  onExchangeRateUpdate: (symbol: string, rate: number) => void;
  contestSubmissions: ContestSubmission[];
  contestWinners: ContestWinner[];
  onContestSubmit: (url: string) => void;
  onSelectWinner: (submission: ContestSubmission) => void;
  currentWeek: number;
  uiStrings: UIStrings['parentsCorner'];
}

const CURRENCY_SYMBOLS = ['$', '€', '£', '¥', '₹', '₦'];

const ParentsCorner: React.FC<ParentsCornerProps> = ({ 
  isOpen, 
  onClose, 
  content, 
  isLoading, 
  error, 
  onRetry, 
  isOnline,
  points,
  pointsHistory,
  completedWeeks,
  earnedBadges,
  allBadges,
  allVirtues,
  currencySymbol,
  pointsToCurrencyRate,
  onExchangeRateUpdate,
  contestSubmissions,
  contestWinners,
  onContestSubmit,
  onSelectWinner,
  currentWeek,
  uiStrings 
}) => {
  const [localSymbol, setLocalSymbol] = useState(currencySymbol);
  const [localRate, setLocalRate] = useState(pointsToCurrencyRate.toString());
  const [activeTab, setActiveTab] = useState('tips');
  const [adminClicks, setAdminClicks] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Reset tab and admin state when corner is opened/closed
    if (isOpen) {
      setActiveTab('tips');
      setAdminClicks(0);
      setIsAdmin(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (adminClicks >= 5 && !isAdmin) {
      setIsAdmin(true);
      alert('Admin mode activated!');
    }
  }, [adminClicks, isAdmin]);

  const handleTitleClick = () => {
    setAdminClicks(c => c + 1);
  };

  useEffect(() => {
    setLocalSymbol(currencySymbol);
    setLocalRate(pointsToCurrencyRate.toString());
  }, [currencySymbol, pointsToCurrencyRate, isOpen]);

  const calculatedValue = useMemo(() => {
    const rate = pointsToCurrencyRate > 0 ? pointsToCurrencyRate : 1;
    const value = points / rate;
    return `${currencySymbol}${value.toFixed(2)}`;
  }, [points, currencySymbol, pointsToCurrencyRate]);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const earnedBadgesList = allBadges.filter(badge => earnedBadges.includes(badge.id));

  const handleSaveRate = () => {
    const rateNumber = parseInt(localRate, 10);
    if (localSymbol.trim() && !isNaN(rateNumber) && rateNumber > 0) {
        onExchangeRateUpdate(localSymbol.trim(), rateNumber);
    }
  };
  
  const TabButton: React.FC<{tabId: string, label: string}> = ({ tabId, label }) => (
     <button onClick={() => setActiveTab(tabId)} className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tabId ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-400'}`}>
        {label}
    </button>
  );

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="parents-corner-title"
    >
      <div 
        className="bg-slate-800/90 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative border border-slate-700" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-700/80 hover:bg-slate-600/80 transition text-slate-300"
          aria-label={uiStrings.closeButton}
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <AcademicCapIcon className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
          <h2 id="parents-corner-title" className="text-3xl font-extrabold text-white cursor-pointer" onClick={handleTitleClick}>
            {uiStrings.title}
          </h2>
        </div>
        
        {/* TABS */}
        <div className="border-b border-slate-700 mb-6 sticky top-0 bg-slate-800/90 z-10 -mt-6 pt-2">
            <nav className="-mb-px flex justify-center space-x-4 sm:space-x-8" aria-label="Tabs">
                <TabButton tabId="tips" label={uiStrings.tabTips} />
                <TabButton tabId="progress" label={uiStrings.tabProgress} />
                <TabButton tabId="share" label={uiStrings.tabShare} />
            </nav>
        </div>

        {/* TAB CONTENT */}
        <div className="animate-fade-in-up">
            {activeTab === 'tips' && (
              // AI CONTENT SECTION
              <div>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div>
                    <p className="text-xl font-semibold mt-4 text-slate-200">{uiStrings.loadingText}</p>
                  </div>
                )}

                {error && !content && (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <svg className="h-12 w-12 text-red-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-lg text-red-400 mb-4">{error}</p>
                    <button
                      onClick={onRetry}
                      disabled={!isOnline}
                      className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed"
                      title={!isOnline ? "You must be online to retry" : ""}
                    >
                      Retry
                    </button>
                  </div>
                )}

                {!isLoading && content && (
                  <div className="space-y-6 text-slate-300">
                    <h3 className="text-2xl font-bold text-white text-center -mt-2 mb-2">{content.title}</h3>
                    <div>
                      <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.conversationStarters}</h4>
                      <ul className="list-disc list-inside space-y-2 pl-4 bg-slate-900/50 p-4 rounded-lg">
                        {content.conversationStarters.map((starter, index) => <li key={index}>{starter}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.whyItMatters}</h4>
                      <p className="bg-slate-900/50 p-4 rounded-lg">{content.whyItMatters}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.practicalTips}</h4>
                      <ul className="list-disc list-inside space-y-2 pl-4 bg-slate-900/50 p-4 rounded-lg">
                        {content.practicalTips.map((tip, index) => <li key={index}>{tip}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'progress' && (
              <div className="space-y-8">
                {/* VIRTUE MASTERY */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-3 text-center">{uiStrings.masteryTitle}</h3>
                  <div className="grid grid-cols-7 gap-2 bg-slate-900/50 p-3 rounded-lg">
                    {allVirtues.map(virtue => (
                      <div 
                        key={virtue.id} 
                        className={`w-full aspect-square rounded-md flex items-center justify-center font-bold text-lg
                          ${completedWeeks.includes(virtue.id) ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}`}
                        title={virtue.name}
                      >
                        {virtue.id}
                      </div>
                    ))}
                  </div>
                </div>
                {/* BADGES */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-3 text-center">{uiStrings.badgesTitle}</h3>
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    {earnedBadgesList.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {earnedBadgesList.map(badge => {
                          const Icon = badge.icon;
                          return (
                            <div key={badge.id} className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-800/50">
                              <Icon className="w-16 h-16 mb-2" />
                              <p className="font-bold text-sm text-yellow-400">{badge.name}</p>
                              <p className="text-xs text-slate-400 mt-1">{badge.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-slate-400 text-center italic py-4">{uiStrings.noBadges}</p>
                    )}
                  </div>
                </div>
                 {/* EXCHANGE RATE SECTION */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4 text-center">{uiStrings.exchangeRateTitle}</h3>
                  <div className="bg-slate-900/50 p-4 rounded-lg space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-end">
                      <div className="flex-1">
                        <label htmlFor="currency-symbol" className="block text-sm font-medium text-slate-300 mb-1">{uiStrings.currencySymbolLabel}</label>
                        <div className="relative">
                            <select
                              id="currency-symbol"
                              value={localSymbol}
                              onChange={(e) => setLocalSymbol(e.target.value)}
                              className="w-full appearance-none bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none pr-8"
                            >
                              {CURRENCY_SYMBOLS.map(symbol => (
                                <option key={symbol} value={symbol} className="bg-slate-800">
                                  {symbol}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-300">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                      </div>
                      <div className="flex-1">
                        <label htmlFor="exchange-rate" className="block text-sm font-medium text-slate-300 mb-1">{uiStrings.pointsPerCurrencyLabel.replace('{symbol}', localSymbol || '$')}</label>
                        <input
                          type="number"
                          id="exchange-rate"
                          value={localRate}
                          onChange={(e) => setLocalRate(e.target.value)}
                          placeholder="100"
                          min="1"
                          className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={handleSaveRate}
                            className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
                        >
                            {uiStrings.saveRateButton}
                        </button>
                    </div>
                    <div className="text-center pt-4 border-t border-slate-700">
                        <p className="text-lg text-slate-300">{uiStrings.currentValueLabel}:</p>
                        <p className="text-3xl font-bold text-green-400">{calculatedValue}</p>
                    </div>
                  </div>
                </div>
                 {/* POINTS HISTORY SECTION */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4 text-center">{uiStrings.pointsHistoryTitle}</h3>
                  {pointsHistory.length > 0 ? (
                    <ul className="space-y-3 max-h-48 overflow-y-auto pr-2">
                      {[...pointsHistory].reverse().map((entry, index) => (
                        <li key={index} className="bg-slate-900/50 p-3 rounded-lg flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{entry.reason || 'No reason provided'}</p>
                            <p className="text-xs text-slate-400">{formatDate(entry.date)}</p>
                          </div>
                          <span className={`font-bold text-lg whitespace-nowrap ${entry.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {entry.amount > 0 ? `+${entry.amount}` : entry.amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-center italic">{uiStrings.noHistory}</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'share' && (
              <CommunitySpotlight
                submissions={contestSubmissions}
                winners={contestWinners}
                onSubmit={onContestSubmit}
                onSelectWinner={onSelectWinner}
                isAdmin={isAdmin}
                uiStrings={uiStrings.shareAndWin}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default ParentsCorner;