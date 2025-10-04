import React from 'react';

const HonestyIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#F0FFFF" rx="20" />
    {/* Diamond */}
    <g transform="translate(100 100)">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
        <path d="M 0 -50 L 50 0 L 0 50 L -50 0 Z" fill="#B0E0E6" />
        <path d="M 0 -50 L 25 -25 L 50 0 L 25 25 L 0 50 L -25 25 L -50 0 L -25 -25 Z" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M -50 0 L 0 0 L 0 -50 M 0 0 L 50 0 M 0 0 L 0 50" stroke="#FFFFFF" strokeWidth="2" />
    </g>
    {/* Sparkles */}
    <g fill="white">
        <path d="M 40 40 L 42 48 L 50 50 L 42 52 L 40 60 L 38 52 L 30 50 L 38 48 Z">
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 160 150 L 162 158 L 170 160 L 162 162 L 160 170 L 158 162 L 150 160 L 158 158 Z">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
        </path>
    </g>
  </svg>
);

export default HonestyIllustration;