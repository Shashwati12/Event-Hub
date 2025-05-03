import React from "react";
import { cn } from "utils/cn";
import { LucideCalendar, LucideMapPin, LucideGlobe, LucideTag, LucideUsers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Map of category colors to tailwind classes
const categoryColorMap = {
  blue: { 
    bg: "bg-blue-50", 
    border: "border-blue-200", 
    text: "text-blue-700",
    hoverBg: "group-hover:bg-blue-600"
  },
  purple: { 
    bg: "bg-purple-50", 
    border: "border-purple-200", 
    text: "text-purple-700",
    hoverBg: "group-hover:bg-purple-600"
  },
  amber: { 
    bg: "bg-amber-50", 
    border: "border-amber-200", 
    text: "text-amber-700",
    hoverBg: "group-hover:bg-amber-600"
  },
  emerald: { 
    bg: "bg-emerald-50", 
    border: "border-emerald-200", 
    text: "text-emerald-700",
    hoverBg: "group-hover:bg-emerald-600"
  },
  red: { 
    bg: "bg-red-50", 
    border: "border-red-200", 
    text: "text-red-700",
    hoverBg: "group-hover:bg-red-600"
  },
  teal: { 
    bg: "bg-teal-50", 
    border: "border-teal-200", 
    text: "text-teal-700",
    hoverBg: "group-hover:bg-teal-600"
  },
  fuchsia: { 
    bg: "bg-fuchsia-50", 
    border: "border-fuchsia-200", 
    text: "text-fuchsia-700",
    hoverBg: "group-hover:bg-fuchsia-600"
  },
  orange: { 
    bg: "bg-orange-50", 
    border: "border-orange-200", 
    text: "text-orange-700",
    hoverBg: "group-hover:bg-orange-600"
  },
};

// Format date to a readable format
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

function EventCard({ event }) {
  const { 
    bg: categoryBg, 
    border: categoryBorder, 
    text: categoryText,
    hoverBg: categoryHoverBg 
  } = categoryColorMap[event.categoryColor] || categoryColorMap.blue;
  
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-1 hover:scale-[1.01]">
      {/* Event image with overlay on hover */}
      <div className="relative overflow-hidden h-48 w-full">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Color overlay on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-70",
          `bg-gradient-to-t from-${event.categoryColor}-900 to-transparent`
        )} />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge 
            className={cn(
              "py-1 px-3 rounded-full font-medium",
              categoryBg,
              categoryBorder,
              categoryText,
              "transition-colors duration-300",
              "group-hover:bg-white/90 group-hover:border-white/20"
            )}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </Badge>
        </div>
        
        {/* Price or free badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            className={cn(
              "py-1 px-3 rounded-full font-medium",
              event.price === 0 ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-50 text-gray-700 border-gray-200",
              "transition-colors duration-300",
              "group-hover:bg-white/90 group-hover:border-white/20",
              "group-hover:text-gray-900"
            )}
          >
            {event.price === 0 ? "Free" : `₹${event.price}`}
          </Badge>
        </div>
      </div>
      
      {/* Event content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-1 text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="mt-2 text-gray-600 text-sm line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
          {event.description}
        </p>
        
        {/* Event details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <LucideCalendar className="mr-2 h-4 w-4 text-gray-400" />
            <span>{formatDate(event.date)} • {event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <LucideGlobe className="mr-2 h-4 w-4 text-gray-400" />
            <span>{event.college}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <LucideMapPin className="mr-2 h-4 w-4 text-gray-400" />
            <span>{event.isOnline ? "Online" : event.location}</span>
          </div>
          
          {/* Registrations count */}
          <div className="flex items-center text-sm text-gray-500">
            <LucideUsers className="mr-2 h-4 w-4 text-gray-400" />
            <span>{event.registrations} registrations</span>
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
              className="text-xs font-normal py-0 px-2 rounded-md text-gray-600 border-gray-300 bg-transparent hover:bg-gray-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Register button - appears on hover with slide up animation */}
        <div className="mt-4 overflow-hidden">
          <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:transform-none group-hover:opacity-100">
            <Button 
              className={cn(
                "w-full",
                `bg-${event.categoryColor}-600 hover:bg-${event.categoryColor}-700 text-white`,
                // Fallback styles in case the dynamic classes don't work
                "bg-blue-600 hover:bg-blue-700"
              )}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventCard;

