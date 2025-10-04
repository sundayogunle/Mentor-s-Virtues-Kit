import React from 'react';

const RespectIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FADBD8" rx="20" />
    <g transform="translate(60 100) rotate(-15)">
      <circle cx="0" cy="-30" r="15" fill="#F5CBA7" />
      <path d="M-20 -15 h40 v40 h-40z" fill="#8E44AD" />
    </g>
    <g transform="translate(140 100) rotate(15) scale(-1, 1)">
      <circle cx="0" cy="-30" r="15" fill="#FAD7A0" />
      <path d="M-20 -15 h40 v40 h-40z" fill="#2980B9" />
    </g>
  </svg>
);

export default RespectIllustration;