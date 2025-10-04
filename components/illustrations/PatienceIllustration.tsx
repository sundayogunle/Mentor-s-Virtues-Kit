import React from 'react';

const PatienceIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FDEBD0" rx="20" />
    <g transform="translate(100 100)">
      <path d="M-30-50 h60 v10 h-60z M-30 40 h60 v10 h-60z" fill="#D2B48C" />
      <path d="M-30-40 L30-40 L0 0 L-30-40 Z" fill="#AED6F1" />
      <path d="M-30 40 L30 40 L0 0 L-30 40 Z" fill="#E6E6FA" />
      <path d="M-15 10 L15 10 L0 0 L-15 10 Z" fill="#AED6F1">
        <animate attributeName="d" values="M-15 10 L15 10 L0 0 L-15 10 Z; M-25 30 L25 30 L0 0 L-25 30 Z; M-15 10 L15 10 L0 0 L-15 10 Z" dur="5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default PatienceIllustration;