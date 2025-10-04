import React from 'react';

const CleanlinessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#E1FAFF" rx="20" />
    {/* Bubbles */}
    <circle cx="60" cy="70" r="30" fill="rgba(173, 216, 230, 0.7)">
      <animate attributeName="cy" values="70;0;70" dur="3s" repeatCount="indefinite" />
      <animate attributeName="cx" values="60;63;60" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="140" cy="120" r="40" fill="rgba(255, 255, 255, 0.8)">
      <animate attributeName="cx" values="140;145;140" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="150" r="25" fill="rgba(173, 216, 230, 0.6)" />
    <circle cx="50" cy="140" r="15" fill="rgba(255, 255, 255, 0.9)" />
    {/* Sparkles */}
    <g fill="#FFFF00" opacity="0.9">
      <path d="M100 20 L105 45 L130 50 L105 55 L100 80 L95 55 L70 50 L95 45 Z">
        <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="10s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
    <g fill="#FFFFFF" opacity="0.8">
      <path d="M40 100 L45 120 L65 125 L45 130 L40 150 L35 130 L15 125 L35 120 Z">
        <animateTransform attributeName="transform" type="rotate" from="360 40 125" to="0 40 125" dur="12s" repeatCount="indefinite" />
      </path>
    </g>
    <g fill="#FFFFFF" opacity="0.8">
      <path d="M160 50 L165 70 L185 75 L165 80 L160 100 L155 80 L135 75 L155 70 Z">
        <animateTransform attributeName="transform" type="rotate" from="0 160 75" to="360 160 75" dur="8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default CleanlinessIllustration;