import React from 'react';

export const ShieldBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#c0c0c0" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
       <filter id="shieldGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#shieldGlow)">
      <path 
        d="M 50,10 L 90,30 L 90,60 C 90,85 50,95 50,95 C 50,95 10,85 10,60 L 10,30 Z"
        fill="url(#shieldGradient)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M 50 35 L 58 50 L 75 50 L 62 60 L 68 75 L 50 65 L 32 75 L 38 60 L 25 50 L 42 50 Z"
        fill="#ffd700"
      />
    </g>
  </svg>
);