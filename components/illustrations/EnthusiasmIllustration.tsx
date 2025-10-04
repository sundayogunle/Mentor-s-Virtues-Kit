import React from 'react';

const EnthusiasmIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FCF3CF" rx="20" />
    {/* Character jumping */}
    <g>
       <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 0" dur="0.5s" repeatCount="indefinite" />
      <g transform="translate(100 120)">
        <circle cx="0" cy="-30" r="20" fill="#FAD7A0"/>
        <rect x="-25" y="-10" width="50" height="40" rx="15" fill="#5DADE2"/>
        <rect x="-20" y="30" width="15" height="20" rx="5" fill="#A9CCE3"/>
        <rect x="5" y="30" width="15" height="20" rx="5" fill="#A9CCE3"/>
      </g>
    </g>
    {/* Sparkles */}
    <g fill="#F1C40F">
      <path d="M50 50 L 55 60 L 65 62 L 55 64 L 50 74 L 45 64 L 35 62 L 45 60 Z">
         <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M150 80 L 155 90 L 165 92 L 155 94 L 150 104 L 145 94 L 135 92 L 145 90 Z">
        <animate attributeName="opacity" values="1;0;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
      </path>
       <path d="M80 150 L 85 160 L 95 162 L 85 164 L 80 174 L 75 164 L 65 162 L 75 160 Z">
        <animate attributeName="opacity" values="1;0;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default EnthusiasmIllustration;
