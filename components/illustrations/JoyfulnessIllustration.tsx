import React from 'react';

const JoyfulnessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FFFACD" rx="20" />
    {/* Sun */}
    <circle cx="100" cy="100" r="80" fill="#FFD700">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
    </circle>
    {/* Smiling Face */}
    <g transform="translate(100 100)">
        <circle cx="-25" cy="-10" r="8" fill="white" />
        <circle cx="-25" cy="-10" r="4" fill="#333" />
        <circle cx="25" cy="-10" r="8" fill="white" />
        <circle cx="25" cy="-10" r="4" fill="#333" />
        <path d="M -30 20 Q 0 50, 30 20" stroke="#333" strokeWidth="5" fill="none" strokeLinecap="round" />
    </g>
    {/* Musical Notes */}
    <g fill="#FF6347">
        <text x="30" y="60" fontSize="30" >♪</text>
        <text x="150" y="80" fontSize="40" >♫</text>
        <text x="50" y="160" fontSize="35" >♪</text>
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 -10; 0 0" dur="2s" repeatCount="indefinite" />
    </g>
  </svg>
);

export default JoyfulnessIllustration;