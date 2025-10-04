import React from 'react';

const HonourIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E6E6FA" rx="20" />
    {/* Shield */}
    <g transform="translate(100 100)">
        <path d="M -50 -60 L 50 -60 L 50 10 C 50 50, 0 80, -50 10 Z" fill="#C0C0C0" stroke="#A9A9A9" strokeWidth="4" />
        {/* Star on shield */}
        <path d="M 0 -30 L 10 -10 L 30 -10 L 15 5 L 20 25 L 0 15 L -20 25 L -15 5 L -30 -10 L -10 -10 Z" fill="#FFD700" />
    </g>
    {/* Floating aura */}
    <ellipse cx="100" cy="100" rx="70" ry="80" fill="none" stroke="rgba(255, 255, 0, 0.5)" strokeWidth="5" strokeDasharray="10 5">
        <animate attributeName="stroke-dashoffset" from="0" to="15" dur="1s" repeatCount="indefinite" />
    </ellipse>
  </svg>
);

export default HonourIllustration;