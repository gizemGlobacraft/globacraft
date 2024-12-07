import React from "react";

export const AbstractAnimation = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full floating">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF5A5F", stopOpacity: 0.6 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#FF5A5F", stopOpacity: 0.8 }}
        />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#2B4EA2", stopOpacity: 0.6 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#2B4EA2", stopOpacity: 0.8 }}
        />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
    </defs>

    {/* Main shapes */}
    <circle
      cx="250"
      cy="250"
      r="120"
      fill="url(#grad1)"
      className="animate-pulse"
      style={{ transformOrigin: "center", animation: "pulse 3s infinite" }}
    />

    <path
      d="M280 150 Q400 180 380 300 T280 380 T180 300 T280 150"
      fill="url(#grad2)"
      opacity="0.7"
      className="animate-float"
      style={{
        transformOrigin: "center",
        animation: "float 6s ease-in-out infinite",
      }}
    />

    {/* Background effects */}
    <circle
      cx="250"
      cy="250"
      r="180"
      stroke="#4B5563"
      strokeWidth="1"
      fill="none"
      opacity="0.2"
    />

    <circle
      cx="250"
      cy="250"
      r="210"
      stroke="#4B5563"
      strokeWidth="1"
      fill="none"
      opacity="0.1"
    />

    {/* Floating points */}
    {[...Array(8)].map((_, i) => (
      <circle
        key={i}
        cx={250 + Math.cos((i * Math.PI) / 4) * 160}
        cy={250 + Math.sin((i * Math.PI) / 4) * 160}
        r="4"
        fill="#FF5A5F"
        className="animate-ping"
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: "3s",
        }}
      />
    ))}
  </svg>
);
