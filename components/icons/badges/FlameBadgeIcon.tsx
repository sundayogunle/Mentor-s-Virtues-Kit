import React from 'react';

export const FlameBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
       <radialGradient id="flameGradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#ffcc00" />
        <stop offset="80%" stopColor="#ff4500" />
      </radialGradient>
       <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#flameGlow)">
      <path
        d="M 50,95 C 20,80 30,50 50,50 C 70,50 80,80 50,95 Z"
        fill="url(#flameGradient)"
      />
      <path
        d="M 50,95 C 30,65 40,30 50,15 C 60,30 70,65 50,95 Z"
        fill="url(#flameGradient)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
        transform="scale(0.8) translate(12, 12)"
      />
    </g>
  </svg>
);