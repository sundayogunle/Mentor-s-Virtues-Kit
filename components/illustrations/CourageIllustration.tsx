import React from 'react';

const CourageIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#CCD1D1" rx="20" />
    <path d="M 180 200 C 100 150, 150 50, 50 50 C -50 50, 50 150, 20 200 Z" fill="rgba(44, 62, 80, 0.7)" />
    <g transform="translate(60 150)">
      <circle cx="0" cy="-15" r="10" fill="#BDC3C7" />
      <rect x="-10" y="-5" width="20" height="30" fill="#7F8C8D" />
      <path d="M-5 -15 h 10 v -10 h-10z" fill="#ECF0F1" />
      <path d="M 15 -10 v 25" stroke="#E74C3C" strokeWidth="4" />
    </g>
  </svg>
);

export default CourageIllustration;