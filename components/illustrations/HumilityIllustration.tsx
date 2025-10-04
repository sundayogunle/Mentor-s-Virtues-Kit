import React from 'react';

const HumilityIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#F5F5DC" rx="20" />
    {/* Ground */}
    <path d="M 0 160 C 50 140, 150 180, 200 160 V 200 H 0 Z" fill="#8B4513" />
    {/* Plant */}
    <g transform="translate(100 160)">
        <path d="M 0 0 C -20 -40, 20 -60, 0 -100" stroke="#228B22" strokeWidth="5" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0; 2; -2; 0" dur="4s" repeatCount="indefinite" />
        </path>
        <circle cx="-10" cy="-60" r="15" fill="#32CD32" />
        <circle cx="10" cy="-80" r="15" fill="#32CD32" />
    </g>
    {/* Person kneeling */}
    <g transform="translate(50 160)">
        <circle cx="0" cy="-35" r="15" fill="#FAD7A0" />
        <path d="M -15 -20 a 20 30 0 0 1 30 0 v 20 h -30 z" fill="#4682B4" />
        <path d="M -5 0 h 10 v 20 h -10 z" fill="#2F4F4F" />
    </g>
  </svg>
);

export default HumilityIllustration;