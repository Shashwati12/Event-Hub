import React from "react";

/**
 * A 3D illustration component for the hero section
 * Creates a visual representation of a dashboard with floating event cards, notifications, and calendar popups
 * Using shades of violet, orange, and blue as specified
 */
export const HeroIllustration = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D Effects Background Elements */}
      <div className="absolute w-[85%] h-[85%] bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-2xl right-0 top-16 z-0 shadow-inner transform rotate-6"></div>
      <div className="absolute w-[75%] h-[75%] bg-gradient-to-tr from-orange-100/30 to-pink-200/30 rounded-2xl left-8 top-8 z-0 shadow-inner transform -rotate-3"></div>

      {/* Main Dashboard Card */}
      <div 
        className="absolute w-[80%] h-[70%] bg-white rounded-xl overflow-hidden
                  shadow-[0_20px_50px_rgba(8,112,184,0.2)] transform rotate-2 right-4 top-14 z-10 p-5
                  backdrop-blur-md bg-white/95 border border-violet-200 animate-float-slow"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(5deg) rotateX(3deg)' }}
      >
        {/* Dashboard Header */}
        <div className="w-full h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-md mb-5 flex items-center px-3">
          <div className="w-3 h-3 bg-white rounded-full mr-2 opacity-70"></div>
          <div className="w-3 h-3 bg-white rounded-full mr-2 opacity-70"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="col-span-2 h-6 flex items-center">
            <div className="h-3 w-24 bg-blue-500 rounded-md mr-3"></div>
            <div className="h-3 w-36 bg-gray-200 rounded-md"></div>
          </div>
          <div className="h-28 bg-blue-100 rounded-lg shadow-[0_4px_12px_rgba(8,112,184,0.15)] p-3 transform transition-transform hover:scale-[1.02] duration-300">
            <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
            <div className="h-3 bg-blue-200 rounded-sm w-5/6 mb-2"></div>
            <div className="h-3 bg-blue-200 rounded-sm w-4/6 mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="h-5 w-12 bg-blue-300 rounded-full"></div>
              <div className="h-5 w-8 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <div className="h-28 bg-orange-100 rounded-lg shadow-[0_4px_12px_rgba(251,146,60,0.15)] p-3 transform transition-transform hover:scale-[1.02] duration-300">
            <div className="w-full h-4 bg-orange-500 rounded-sm mb-2"></div>
            <div className="h-3 bg-orange-200 rounded-sm w-5/6 mb-2"></div>
            <div className="h-3 bg-orange-200 rounded-sm w-4/6 mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="h-5 w-12 bg-orange-300 rounded-full"></div>
              <div className="h-5 w-8 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="h-36 bg-violet-100 rounded-lg shadow-[0_4px_12px_rgba(139,92,246,0.15)] p-3">
          <div className="w-full h-4 bg-violet-500 rounded-sm mb-2"></div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="h-20 bg-violet-200/70 rounded-md flex flex-col justify-center items-center p-1">
                <div className="h-3 w-8 bg-violet-400 rounded-full mb-1"></div>
                <div className="h-6 w-6 bg-violet-300 rounded-full mb-1"></div>
                <div className="h-2 w-10 bg-violet-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Calendar Popup */}
      <div 
        className="absolute w-52 h-48 bg-white shadow-[0_10px_30px_rgba(139,92,246,0.25)] rounded-lg top-4 left-8 z-30 p-3
                  transform -rotate-6 backdrop-blur-md bg-white/95 border border-pink-200 animate-float"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg) translateZ(20px)', animationDelay: "1s" }}
      >
        <div className="w-full h-6 bg-gradient-to-r from-pink-400 to-violet-500 rounded-md mb-3 flex items-center px-2">
          <div className="h-2 w-20 bg-white/70 rounded-sm"></div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S','M','T','W','T','F','S'].map((day, i) => (
            <div key={`day-${i}`} className="w-full h-5 flex items-center justify-center">
              <span className="text-xs font-medium text-violet-500">{day}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} 
                className={`w-full h-5 rounded-sm flex items-center justify-center ${
                  i === 15 ? 'bg-violet-500 text-white' : 
                  [8, 11, 19, 22].includes(i) ? 'bg-pink-100' : ''
                }`}
            >
              <span className="text-xs">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Notification Popup */}
      <div 
        className="absolute w-48 h-36 bg-white shadow-[0_10px_30px_rgba(8,112,184,0.25)] rounded-lg bottom-12 left-0 z-40 p-3
                 backdrop-blur-md bg-white/95 border border-blue-200 animate-float"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(8deg) rotateX(-5deg) translateZ(40px)', animationDelay: "0.5s" }}
      >
        <div className="w-full h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md mb-3 flex items-center px-2">
          <div className="h-2 w-24 bg-white/70 rounded-sm"></div>
        </div>
        <div className="space-y-2">
          {['CF', 'DM'].map((abbr, idx) => (
            <div key={idx} className="flex items-center bg-blue-50 p-2 rounded-md">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-2 text-xs font-semibold text-blue-600">{abbr}</div>
              <div className="space-y-1 flex-1">
                <div className="h-3 bg-blue-200 rounded-sm w-full"></div>
                <div className="h-2 bg-blue-100 rounded-sm w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-[0_4px_12px_rgba(239,68,68,0.3)]">3</div>
      </div>
      
      {/* Event Card Popup */}
      <div 
        className="absolute w-60 h-40 bg-white shadow-[0_10px_30px_rgba(251,146,60,0.25)] rounded-lg bottom-24 right-0 z-20 p-4
                 transform rotate-6 backdrop-blur-md bg-white/95 border border-orange-200 animate-float-slow"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-5deg) rotateX(-3deg) translateZ(30px)', animationDelay: "1.5s" }}
      >
        <div className="w-full h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-md mb-3 flex items-center px-2">
          <div className="h-2 w-20 bg-white/70 rounded-sm"></div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="h-10 w-10 rounded-md bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-lg font-bold">24</span>
          </div>
          <div className="space-y-1 flex-1 ml-3">
            <div className="h-4 bg-orange-100 rounded-sm w-3/4"></div>
            <div className="h-3 bg-orange-50 rounded-sm w-5/6"></div>
          </div>
        </div>
        <div className="flex items-center space-x-1 mb-2">
          <div className="h-5 w-5 rounded-full bg-orange-300 flex-shrink-0"></div>
          <div className="h-3 bg-orange-100 rounded-sm w-32"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-1">
            <div className="h-6 w-6 rounded-full bg-orange-200 border border-white"></div>
            <div className="h-6 w-6 rounded-full bg-orange-300 border border-white"></div>
            <div className="h-6 w-6 rounded-full bg-orange-400 border border-white"></div>
          </div>
          <div className="h-6 w-20 bg-orange-400 rounded-full text-white text-xs flex items-center justify-center font-medium">Register</div>
        </div>
      </div>

      {/* Small Decorative Elements */}
      <div className="absolute w-12 h-12 bg-blue-400/30 rounded-full top-0 right-10 blur-sm animate-float" style={{ animationDelay: "0.2s" }}></div>
      <div className="absolute w-8 h-8 bg-violet-400/30 rounded-full bottom-10 right-32 blur-sm animate-float-slow" style={{ animationDelay: "0.7s" }}></div>
      <div className="absolute w-10 h-10 bg-orange-400/30 rounded-full bottom-16 left-32 blur-sm animate-float" style={{ animationDelay: "1.2s" }}></div>
    </div>
  );
};
