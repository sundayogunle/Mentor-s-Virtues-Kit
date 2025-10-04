import React from 'react';

const LoyaltyIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D5DBDB" rx="20" />
    <g transform="translate(100 110)">
      <path d="M -40 0 C -40 -50, 40 -50, 40 0 V 50 H -40 Z" fill="#A0522D" />
      <circle cx="-15" cy="-20" r="5" fill="black" />
      <circle cx="15" cy="-20" r="5" fill="black" />
      <path d="M 0 -5 L 0 10 M -5 15 L 5 15" stroke="black" strokeWidth="2" />
      <path d="M -50 -10 C -60 -30, -40 -40, -40 -20" fill="#A0522D" />
      <path d="M 50 -10 C 60 -30, 40 -40, 40 -20" fill="#A0522D" />
    </g>
  </svg>
);

export default LoyaltyIllustration;