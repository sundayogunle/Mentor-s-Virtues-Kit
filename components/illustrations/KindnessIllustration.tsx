import React from 'react';

const KindnessIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="#FFD0D5" rx="20" />
    {/* The heart */}
    <path d="M100 180 L180 100 A 40 40 0 0 0 100 60 A 40 40 0 0 0 20 100 L100 180 Z" fill="#FF69B4">
      <animate attributeName="fill" values="#FF69B4;#FF1493;#FF69B4" dur="3s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="scale" values="1; 1.05; 1" additive="sum" dur="1.5s" repeatCount="indefinite" />
    </path>
    {/* Sparkles/sun rays from the heart */}
    <g stroke="white" strokeWidth="3" strokeLinecap="round">
      <path d="M100 40 L 100 20">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M60 50 L 40 30">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M140 50 L 160 30">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </path>
      <path d="M40 100 L 20 100">
        <animate attributeName="opacity" values="1;0;1" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M160 100 L 180 100">
        <animate attributeName="opacity" values="1;0;1" dur="2s" begin="2s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default KindnessIllustration;