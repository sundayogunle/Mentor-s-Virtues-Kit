import React from 'react';

const ForgivenessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#F0F8FF" rx="20" />
    {/* Sun */}
    <circle cx="150" cy="50" r="30" fill="#FFD700">
        <animate attributeName="r" values="30;32;30" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Dove */}
    <g transform="translate(100 100)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="2s" repeatCount="indefinite" />
        <path d="M -30 0 C -50 -30, 0 -40, 0 -10 C 0 -40, 50 -30, 30 0 C 20 20, -20 20, -30 0 Z" fill="white"/>
        <path d="M -10 -5 L -20 -15" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <circle cx="5" cy="-15" r="3" fill="#333" />
    </g>
    {/* Hands */}
    <g fill="#FAD7A0">
        <path d="M 60 180 C 40 150, 70 110, 90 120 L 100 200 L 60 180 Z" />
        <path d="M 140 180 C 160 150, 130 110, 110 120 L 100 200 L 140 180 Z" />
    </g>
  </svg>
);

export default ForgivenessIllustration;