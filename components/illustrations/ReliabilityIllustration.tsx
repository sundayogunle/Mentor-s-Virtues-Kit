import React from 'react';

const ReliabilityIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D6EAF8" rx="20" />
    <path d="M 0 150 H 200" stroke="#5DADE2" strokeWidth="20" />
    <path d="M 20 150 A 80 80 0 0 1 180 150" fill="#A9CCE3" />
    <rect x="20" y="80" width="160" height="20" fill="#85929E" />
    <g stroke="#5D6D7E" strokeWidth="5">
      <path d="M60 100 v 50" />
      <path d="M100 100 v 50" />
      <path d="M140 100 v 50" />
    </g>
  </svg>
);

export default ReliabilityIllustration;