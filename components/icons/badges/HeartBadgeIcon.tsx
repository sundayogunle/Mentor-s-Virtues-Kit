import React from 'react';

export const HeartBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="heartGradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#ff8fab" />
        <stop offset="100%" stopColor="#f13c77" />
      </radialGradient>
      <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#heartGlow)">
      <path
        d="M 50,90 C 10,60 30,20 50,45 C 70,20 90,60 50,90 Z"
        fill="url(#heartGradient)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);