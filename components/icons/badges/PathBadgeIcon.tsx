import React from 'react';

export const PathBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
       <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#87ceeb" />
        <stop offset="100%" stopColor="#4682b4" />
      </linearGradient>
       <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#pathGlow)">
      <circle cx="50" cy="50" r="45" fill="url(#pathGradient)" stroke="#fff" strokeWidth="3" />
      <path
        d="M 25,75 Q 50,50 40,30 T 70,15"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="10 5"
      />
       <path 
        d="M 60 25 L 70 15 L 80 25 Z"
        fill="white"
       />
    </g>
  </svg>
);