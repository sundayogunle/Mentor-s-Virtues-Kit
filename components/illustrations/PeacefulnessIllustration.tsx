import React from 'react';

const PeacefulnessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E8F6F3" rx="20" />
    <g transform="translate(100 100)">
        <path d="M -40 0 C -60 -40, 0 -50, 0 -20 C 0 -50, 60 -40, 40 0 C 20 30, -20 30, -40 0 Z" fill="white"/>
        <circle cx="10" cy="-25" r="4" fill="#333" />
        <path d="M -5 -20 C 5 -15, 15 -25, 25 -20" stroke="#2ECC71" strokeWidth="4" fill="none"/>
    </g>
  </svg>
);

export default PeacefulnessIllustration;