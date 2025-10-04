import React from 'react';

const ModerationIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#EAF2F8" rx="20" />
    <g stroke="#566573" strokeWidth="4" strokeLinecap="round">
      <path d="M100 160 v -120" />
      <path d="M40 40 h 120" />
      <path d="M40 40 v 20" />
      <path d="M160 40 v 20" />
      <path d="M20 90 h 40" />
      <path d="M140 90 h 40" />
    </g>
    <text x="75" y="115" fontFamily="Arial, sans-serif" fontSize="18" fill="#2E86C1">Work</text>
    <text x="115" y="85" fontFamily="Arial, sans-serif" fontSize="18" fill="#E67E22">Play</text>
  </svg>
);

export default ModerationIllustration;