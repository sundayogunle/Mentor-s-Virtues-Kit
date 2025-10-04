import React from 'react';

const SelfDisciplineIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#EBDEF0" rx="20" />
    <g transform="translate(100 120)">
      <circle cx="0" cy="-30" r="20" fill="#FAD7A0" />
      <path d="M -40 20 L 40 20 L 0 -10 Z" fill="#8E44AD" />
      <path d="M -30 20 C -40 40, 40 40, 30 20" fill="#9B59B6" />
    </g>
  </svg>
);

export default SelfDisciplineIllustration;