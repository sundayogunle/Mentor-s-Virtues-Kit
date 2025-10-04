import React from 'react';

const JusticeIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#DCDCDC" rx="20" />
    {/* Scales of Justice */}
    <g stroke="#36454F" strokeWidth="5" strokeLinecap="round">
        {/* Base */}
        <path d="M 60 180 L 140 180" />
        <path d="M 100 180 L 100 40" />
        {/* Beam */}
        <g>
            <animateTransform attributeName="transform" type="rotate" values="-5 100 50; 5 100 50; -5 100 50" dur="4s" repeatCount="indefinite" />
            <path d="M 30 50 L 170 50" />
            {/* Left Pan */}
            <path d="M 30 50 L 30 80" />
            <path d="M 10 100 C 30 120, 50 120, 70 100" fill="#BDB76B" />
             {/* Right Pan */}
            <path d="M 170 50 L 170 80" />
            <path d="M 150 100 C 170 120, 190 120, 210 100" transform="translate(-40 0)" fill="#BDB76B" />
        </g>
    </g>
  </svg>
);

export default JusticeIllustration;