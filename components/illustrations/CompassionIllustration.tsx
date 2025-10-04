import React from 'react';

const CompassionIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#AED6F1" rx="20" />
    {/* Character 1 (Giver) */}
    <g transform="translate(75 130)">
      <circle cx="0" cy="-25" r="20" fill="#FAD7A0" />
      <path d="M -25 0 a 25 25 0 0 1 50 0 z" fill="#82E0AA" />
    </g>
    {/* Character 2 (Receiver) */}
    <g transform="translate(125 130)">
      <circle cx="0" cy="-25" r="20" fill="#F5CBA7" />
      <path d="M -25 0 a 25 25 0 0 1 50 0 z" fill="#F7DC6F" />
    </g>
    {/* Heart being passed */}
    <g transform="translate(100 80)">
      <path d="M 0 0 L 10 -10 A 5 5 0 1 1 0 -20 A 5 5 0 1 1 -10 -10 Z" fill="#E74C3C">
        <animateTransform attributeName="transform" type="scale" values="1; 1.2; 1" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default CompassionIllustration;
