import React from 'react';

const OrderlinessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#D6EAF8" rx="20" />
    <g stroke="white" strokeWidth="2">
      <rect x="60" y="130" width="80" height="30" rx="5" fill="#5DADE2" />
      <rect x="70" y="100" width="60" height="30" rx="5" fill="#2ECC71" />
      <rect x="80" y="70" width="40" height="30" rx="5" fill="#F1C40F" />
      <rect x="85" y="40" width="30" height="30" rx="5" fill="#E74C3C" />
    </g>
  </svg>
);

export default OrderlinessIllustration;