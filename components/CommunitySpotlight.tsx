import React, { useState } from 'react';
import type { ContestSubmission, ContestWinner, UIStrings } from '../types';
import { ShareIcon } from './icons/ShareIcon';

interface CommunitySpotlightProps {
  submissions: ContestSubmission[];
  winners: ContestWinner[];
  onSubmit: (url: string) => void;
  onSelectWinner: (submission: ContestSubmission) => void;
  isAdmin: boolean;
  uiStrings: UIStrings['parentsCorner']['shareAndWin'];
}

const CommunitySpotlight: React.FC<CommunitySpotlightProps> = ({ submissions, winners, onSubmit, onSelectWinner, isAdmin, uiStrings }) => {
    const [url, setUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        let submissionUrl = url.trim();
        if (submissionUrl) {
            // Automatically prepend https:// if a protocol is missing.
            // This is more user-friendly than rejecting the URL.
            if (!/^https?:\/\//i.test(submissionUrl)) {
                submissionUrl = 'https://' + submissionUrl;
            }

            try {
                new URL(submissionUrl); // Validate the potentially corrected URL
                onSubmit(submissionUrl);
                setUrl('');
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000); // Reset message after 3 seconds
            } catch (_) {
                setError('Please enter a valid URL.');
            }
        }
    };

    const renderStep2 = () => {
        const step2String = uiStrings.step2;
        const hashtag = "#Mentor'sVirtuesKit";
        const parts = step2String.split(hashtag);

        // If the hashtag is found, wrap it in a styled span for emphasis.
        if (parts.length === 2) {
            return (
                <p>
                    {parts[0]}
                    <span className="font-bold text-yellow-400">{hashtag}</span>
                    {parts[1]}
                </p>
            );
        }
        // Fallback for translations that might not contain the hashtag.
        return <p>{step2String}</p>;
    };

    return (
        <div className="space-y-8 text-slate-300">
            {/* INSTRUCTIONS */}
            <div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.instructionsTitle}</h4>
                <div className="bg-slate-900/50 p-4 rounded-lg space-y-2 text-sm">
                    <p>{uiStrings.step1}</p>
                    {renderStep2()}
                    <p>{uiStrings.step3}</p>
                    <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-700/50">{uiStrings.copyLinkTip}</p>
                </div>
            </div>

            {/* SELECTION PROCESS */}
            <div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.selectionProcessTitle}</h4>
                <div className="bg-slate-900/50 p-4 rounded-lg space-y-2 text-sm">
                    <p>{uiStrings.selectionStep1}</p>
                    <p>{uiStrings.selectionStep2}</p>
                    <p>{uiStrings.selectionStep3}</p>
                    <p>{uiStrings.selectionStep4}</p>
                    <p>{uiStrings.selectionStep5}</p>
                </div>
            </div>

            {/* SUBMISSION FORM */}
            <div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.submissionTitle}</h4>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={uiStrings.urlPlaceholder}
                        required
                        className="flex-grow bg-slate-700 border border-slate-600 rounded-full py-2 px-4 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
                        aria-label="Social media post link"
                    />
                    <button type="submit" className="flex items-center justify-center gap-2 px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition">
                        <ShareIcon className="h-5 w-5" />
                        {uiStrings.submitButton}
                    </button>
                </form>
                {submitted && <p className="text-green-400 text-center mt-2 animate-fade-in-up">{uiStrings.submittedMessage}</p>}
                {error && <p className="text-red-400 text-center mt-2">{error}</p>}
            </div>
            
            {/* WINNERS LIST */}
            <div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">{uiStrings.winnersTitle}</h4>
                <div className="bg-slate-900/50 p-4 rounded-lg space-y-3 max-h-48 overflow-y-auto">
                    {winners.length > 0 ? (
                        [...winners].reverse().map((winner) => (
                            <a href={winner.url} target="_blank" rel="noopener noreferrer" key={winner.url + winner.week} className="block bg-slate-800/70 p-3 rounded-lg hover:bg-slate-700/70 transition">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-slate-200 truncate pr-2">{winner.name}</p>
                                    <span className="text-xs font-bold bg-green-500 text-white py-1 px-2 rounded-full whitespace-nowrap">{uiStrings.winnerPill.replace('{week}', String(winner.week))}</span>
                                </div>
                            </a>
                        ))
                    ) : (
                        <p className="text-slate-400 text-center italic">{uiStrings.noWinners}</p>
                    )}
                </div>
            </div>

            {/* ADMIN VIEW */}
            {isAdmin && (
                <div className="pt-6 border-t-2 border-slate-700/50">
                    <h4 className="text-lg font-bold text-red-400 mb-2">{uiStrings.adminSubmissionsTitle}</h4>
                    <div className="bg-slate-900/50 p-4 rounded-lg space-y-3 max-h-60 overflow-y-auto">
                        {submissions.length > 0 ? (
                            [...submissions].reverse().map((sub) => (
                                <div key={sub.date} className="bg-slate-800/70 p-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div className="flex-1 min-w-0">
                                        <a href={sub.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-sky-400 hover:underline truncate block">{sub.url}</a>
                                        <p className="text-xs text-slate-400">Week {sub.week} - Submitted: {new Date(sub.date).toLocaleDateString()}</p>
                                    </div>
                                    <button onClick={() => onSelectWinner(sub)} className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full hover:bg-green-500 transition whitespace-nowrap">
                                        {uiStrings.makeWinnerButton}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-400 text-center italic">{uiStrings.noSubmissions}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommunitySpotlight;