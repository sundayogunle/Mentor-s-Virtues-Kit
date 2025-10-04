import React from 'react';

const CommunicationIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FEF9E7" rx="20" />
    <path d="M 40 50 a 30 20 0 1 1 60 0 a 30 20 0 1 1 -60 0 L 70 70 L 60 80 Z" fill="#F7DC6F" />
    <path d="M 160 100 a 30 20 0 1 0 -60 0 a 30 20 0 1 0 60 0 L 130 120 L 140 130 Z" fill="#82E0AA" />
  </svg>
);

export default CommunicationIllustration;