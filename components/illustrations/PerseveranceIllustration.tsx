import React from 'react';

const PerseveranceIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D4E6F1" rx="20" />
    <path d="M 0 200 L 120 50 L 200 200 Z" fill="#AAB7B8" />
    <path d="M 100 70 L 120 50 L 140 70 Z" fill="white" />
    <g transform="translate(80 100)">
      <circle cx="0" cy="-10" r="10" fill="#FAD7A0" />
      <path d="M-10 0 h20 v30 h-20z" fill="#E74C3C" />
    </g>
  </svg>
);

export default PerseveranceIllustration;