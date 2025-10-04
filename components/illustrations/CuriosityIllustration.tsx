import React from 'react';

const CuriosityIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E8F8F5" rx="20" />
    <path d="M 120 120 C 110 140, 90 150, 70 140 C 50 130, 40 110, 50 90 C 60 70, 80 60, 100 70" fill="#2ECC71" stroke="#28B463" strokeWidth="3" />
    <g transform="translate(100 80) rotate(45)">
      <circle cx="0" cy="0" r="40" fill="rgba(174, 214, 241, 0.7)" stroke="#5DADE2" strokeWidth="5" />
      <rect x="-10" y="35" width="20" height="40" rx="10" fill="#AAB7B8" />
    </g>
  </svg>
);

export default CuriosityIllustration;