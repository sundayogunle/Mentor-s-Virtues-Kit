import React from 'react';

const ExcellenceIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E8DAEF" rx="20" />
    {/* Trophy */}
    <g transform="translate(100 110)">
       <animateTransform attributeName="transform" type="scale" values="1; 1.05; 1" additive="sum" dur="2s" repeatCount="indefinite" />
      <path d="M -40 0 C -40 -50, 40 -50, 40 0 L 30 0 C 30 -30, -30 -30, -30 0 Z" fill="#F1C40F"/>
      <rect x="-30" y="0" width="60" height="15" fill="#F1C40F" />
      <rect x="-15" y="15" width="30" height="40" fill="#F1C40F" />
      <rect x="-40" y="55" width="80" height="15" rx="5" fill="#D4AC0D"/>
      {/* Star on trophy */}
      <path d="M 0 -25 L 5 -15 L 15 -15 L 7 -8 L 10 2 L 0 -5 L -10 2 L -7 -8 L -15 -15 L -5 -15 Z" fill="white"/>
    </g>
    {/* Confetti */}
    <g>
      <rect x="30" y="0" width="5" height="10" fill="#5DADE2" transform="rotate(20 30 30)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 5 80; 10 200" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;0" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="80" y="0" width="5" height="10" fill="#E74C3C" transform="rotate(-30 80 20)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 80; 0 200" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="150" y="0" width="5" height="10" fill="#2ECC71" transform="rotate(10 150 40)">
        <animateTransform attributeName="transform" type="translate" values="0 0; -5 80; -10 200" dur="2.2s" begin="1s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="1;1;0" dur="2.2s" begin="1s" repeatCount="indefinite" />
      </rect>
    </g>
  </svg>
);

export default ExcellenceIllustration;
