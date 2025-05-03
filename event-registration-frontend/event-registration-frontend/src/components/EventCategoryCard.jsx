import React from "react";
import { cn } from "utils/cn";
import { 
  LucideCode, LucideMusic, LucideWrench, LucideCode2, 
  LucideDumbbell, LucidePresentation, LucidePartyPopper,
  LucideMic, LucideGraduationCap, LucidePalette, LucideCalendar, LucideLightbulb 
} from "lucide-react";

// Map of icon names to Lucide icon components
const iconMap = {
  "code": <LucideCode className="h-10 w-10" />,
  "music": <LucideMusic className="h-10 w-10" />,
  "tool": <LucideWrench className="h-10 w-10" />,
  "code-2": <LucideCode2 className="h-10 w-10" />,
  "dumbbell": <LucideDumbbell className="h-10 w-10" />,
  "presentation": <LucidePresentation className="h-10 w-10" />,
  "party-popper": <LucidePartyPopper className="h-10 w-10" />,
  "mic": <LucideMic className="h-10 w-10" />,
  "graduation": <LucideGraduationCap className="h-10 w-10" />,
  "palette": <LucidePalette className="h-10 w-10" />,
  "calendar": <LucideCalendar className="h-10 w-10" />,
  "lightbulb": <LucideLightbulb className="h-10 w-10" />,
};

// Map of colors to tailwind text/border/bg classes
const colorMap = {
  "blue": { iconBg: "bg-blue-100", textColor: "text-blue-700" },
  "purple": { iconBg: "bg-purple-100", textColor: "text-purple-700" },
  "amber": { iconBg: "bg-amber-100", textColor: "text-amber-700" },
  "emerald": { iconBg: "bg-emerald-100", textColor: "text-emerald-700" },
  "red": { iconBg: "bg-red-100", textColor: "text-red-700" },
  "teal": { iconBg: "bg-teal-100", textColor: "text-teal-700" },
  "fuchsia": { iconBg: "bg-fuchsia-100", textColor: "text-fuchsia-700" },
  "orange": { iconBg: "bg-orange-100", textColor: "text-orange-700" },
};

export default function EventCategoryCard({ 
  id, 
  title, 
  description, 
  icon, 
  color, 
  gradient, 
  onClick 
}) {
  // Get color classes based on the color prop
  const { iconBg, textColor } = colorMap[color] || colorMap.blue;
  
  // Get icon component based on the icon prop
  const iconComponent = iconMap[icon] || iconMap.calendar;
  
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/20",
        "transition-all duration-300 ease-in-out shadow-md hover:shadow-xl",
        "group cursor-pointer h-full",
        "transform hover:-translate-y-1 hover:scale-[1.02]"
      )}
    >
      {/* Gradient overlay on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 bg-gradient-to-br", gradient,
        "transition-opacity duration-300 group-hover:opacity-90 z-0"
      )} />
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Icon with background */}
        <div className={cn(
          "rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4",
          iconBg,
          textColor,
          "transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white"
        )}>
          {iconComponent}
        </div>
        
        {/* Content */}
        <h3 className={cn(
          "text-xl font-semibold mb-2", 
          textColor,
          "transition-colors duration-300 group-hover:text-white"
        )}>
          {title}
        </h3>
        
        <p className="text-gray-600 mt-1 flex-grow transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
        
        {/* Arrow indicator that appears on hover */}
        <div className="mt-4 flex justify-end">
          <span className="text-sm font-medium opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white">
            Explore Events →
          </span>
        </div>
      </div>
    </div>
  );
}
