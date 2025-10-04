import React from 'react';

const ToleranceIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D6EAF8" rx="20" />
    <path d="M 0 150 H 200" stroke="#27AE60" strokeWidth="20" />
    <g transform="translate(50 120)">
      <circle cx="0" cy="0" r="15" fill="#F1C40F" />
      <circle cx="0" cy="0" r="25" fill="none" stroke="#E67E22" strokeWidth="5" />
    </g>
    <g transform="translate(100 120)">
      <path d="M0 0 L 15 -15 L 0 -30 L -15 -15 Z" fill="#E74C3C" />
    </g>
    <g transform="translate(150 120)">
      <circle cx="0" cy="-10" r="20" fill="#8E44AD" />
      <circle cx="0" cy="-10" r="10" fill="#D2B4DE" />
    </g>
  </svg>
);

export default ToleranceIllustration;