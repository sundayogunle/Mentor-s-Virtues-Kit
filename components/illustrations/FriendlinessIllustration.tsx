import React from 'react';

const FriendlinessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E9F7EF" rx="20" />
    <g transform="translate(70 110)">
      <circle cx="0" cy="-25" r="20" fill="#F5CBA7" />
      <path d="M-25 0 h50 v40 h-50z" fill="#58D68D" />
    </g>
    <g transform="translate(130 110)">
      <circle cx="0" cy="-25" r="20" fill="#FAD7A0" />
      <path d="M-25 0 h50 v40 h-50z" fill="#F7DC6F" />
    </g>
    <path d="M 95 110 h 10" stroke="#333" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default FriendlinessIllustration;