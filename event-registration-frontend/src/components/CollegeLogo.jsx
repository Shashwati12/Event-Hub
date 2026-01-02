import React from "react";

/**
 * Component to display fictional college logos in different variants
 */
export const CollegeLogo = ({ name, variant, className = "" }) => {
  // Different logo SVG styles based on variant
  const renderLogoContent = () => {
    switch (variant) {
      case 1: // Shield style
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg viewBox="0 0 100 120" className="w-16 h-16">
              <path d="M50 0 L100 30 L100 90 L50 120 L0 90 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
              <path d="M50 10 L90 35 L90 85 L50 110 L10 85 L10 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <text x="50" y="60" fontFamily="serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor">{name.substring(0, 2)}</text>
              <text x="50" y="80" fontFamily="serif" fontSize="12" textAnchor="middle" fill="currentColor">EST. 1895</text>
            </svg>
            <div className="mt-1 font-serif font-semibold text-sm">{name}</div>
          </div>
        );

      case 2: // Circular emblem
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.1" />
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
              <text x="50" y="45" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">{name.substring(0, 4)}</text>
              <line x1="30" y1="55" x2="70" y2="55" stroke="currentColor" strokeWidth="1" />
              <text x="50" y="75" fontFamily="sans-serif" fontSize="12" textAnchor="middle" fill="currentColor">UNIVERSITY</text>
            </svg>
            <div className="mt-1 font-sans font-medium text-sm">{name}</div>
          </div>
        );

      case 3: // Square academic logo
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <rect x="10" y="10" width="80" height="80" fill="currentColor" fillOpacity="0.1" />
              <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M30 40 L50 30 L70 40 L70 45 L30 45 Z" fill="currentColor" fillOpacity="0.3" />
              <rect x="48" y="45" width="4" height="20" fill="currentColor" />
              <rect x="40" y="65" width="20" height="5" fill="currentColor" />
              <text x="50" y="85" fontFamily="sans-serif" fontSize="10" textAnchor="middle" fill="currentColor">{name}</text>
            </svg>
          </div>
        );

      case 4: // Modern horizontal logo
        return (
          <div className="flex items-center justify-center w-full h-full">
            <svg viewBox="0 0 160 60" className="w-24 h-10">
              <rect x="5" y="10" width="40" height="40" fill="currentColor" fillOpacity="0.2" rx="4" />
              <text x="25" y="35" fontFamily="sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="currentColor">{name.substring(0, 1)}</text>
              <text x="85" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="bold" textAnchor="start" fill="currentColor">{name}</text>
              <text x="85" y="45" fontFamily="sans-serif" fontSize="10" textAnchor="start" fill="currentColor">INSTITUTE</text>
            </svg>
          </div>
        );

      case 5: // Classic text logo with underline
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg viewBox="0 0 120 60" className="w-20 h-12">
              <text x="60" y="25" fontFamily="serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">{name}</text>
              <text x="60" y="40" fontFamily="serif" fontSize="10" textAnchor="middle" fill="currentColor">COLLEGE</text>
              <line x1="30" y1="45" x2="90" y2="45" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="48" x2="80" y2="48" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        );

      default:
        return <div className="font-bold text-xl">{name}</div>;
    }
  };

  return (
    <div className={`w-36 h-20 bg-white rounded-md shadow-md flex items-center justify-center transition-transform hover:scale-105 ${className}`}>
      {renderLogoContent()}
    </div>
  );
};
