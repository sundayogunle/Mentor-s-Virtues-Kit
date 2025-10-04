import React from 'react';

const AssertivenessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#87CEEB" rx="20" />
    {/* Lion */}
    <g transform="translate(100 110) scale(1.2)">
      {/* Mane */}
      <circle cx="0" cy="0" r="40" fill="#D2691E" />
      <circle cx="0" cy="0" r="35" fill="#FFB347" />
      {/* Face */}
      <circle cx="0" cy="0" r="28" fill="#FFD700" />
      {/* Eyes */}
      <circle cx="-10" cy="-5" r="5" fill="white" />
      <circle cx="-10" cy="-5" r="2.5" fill="#281800" />
      <circle cx="10" cy="-5" r="5" fill="white" />
      <circle cx="10" cy="-5" r="2.5" fill="#281800" />
      {/* Eyebrows */}
      <path d="M -15 -12 Q -10 -16 -5 -12" stroke="#281800" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 5 -12 Q 10 -16 15 -12" stroke="#281800" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose and Mouth */}
      <path d="M 0 0 l -4 6 l 8 0 z" fill="#281800" />
      <path d="M 0 6 Q 0 10 -5 10" stroke="#281800" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 0 6 Q 0 10 5 10" stroke="#281800" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
    {/* Crown */}
    <path d="M 85 40 L 90 55 L 100 50 L 110 55 L 115 40 Z" fill="#FFD700" stroke="#DAA520" strokeWidth="2">
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2; 0 0" dur="1.5s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default AssertivenessIllustration;