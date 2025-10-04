import React from 'react';

const ConsiderationIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D5F5E3" rx="20" />
    {/* Character 1 (Thinking) */}
    <g transform="translate(130 130)">
      <circle cx="0" cy="-25" r="20" fill="#FAD7A0" />
      <path d="M -25 0 a 25 25 0 0 1 50 0 z" fill="#5DADE2" />
    </g>
    {/* Thought bubble */}
    <g>
      <path d="M 70 75 a 40 40 0 1 1 0 -0.1 Z" fill="white" stroke="#B2BABB" strokeWidth="2.5" />
      <circle cx="90" cy="100" r="5" fill="#B2BABB" />
      <circle cx="105" cy="110" r="3" fill="#B2BABB" />
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="3s" repeatCount="indefinite" />
    </g>
    {/* Character 2 (Inside bubble) */}
    <g transform="translate(70 80) scale(0.6)">
      <circle cx="0" cy="-25" r="20" fill="#F5CBA7" />
      <path d="M -25 0 a 25 25 0 0 1 50 0 z" fill="#F1948A" />
    </g>
  </svg>
);

export default ConsiderationIllustration;
