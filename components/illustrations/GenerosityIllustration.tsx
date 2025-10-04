import React from 'react';

const GenerosityIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#F4ECF7" rx="20" />
    <g transform="translate(0 20)">
      <path d="M 60 140 C 40 120, 70 80, 90 90 L 100 160 L 60 140 Z" fill="#FAD7A0" />
      <path d="M 140 140 C 160 120, 130 80, 110 90 L 100 160 L 140 140 Z" fill="#F5CBA7" />
    </g>
    <g transform="translate(100 80)">
      <rect x="-20" y="-20" width="40" height="40" fill="#E74C3C" />
      <rect x="-25" y="-5" width="50" height="10" fill="#F1C40F" />
    </g>
  </svg>
);

export default GenerosityIllustration;