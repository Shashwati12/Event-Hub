import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventCategoryCard from "components/EventCategoryCard";
import { FiArrowLeft } from "react-icons/fi";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "technical",
      title: "Technical Events",
      description: "Hackathons, coding competitions, and tech workshops to boost your skills.",
      icon: "code",
      color: "blue",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: "cultural",
      title: "Cultural Fests",
      description: "Music, dance, drama, and art showcases to express your creativity.",
      icon: "music",
      color: "purple",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: "workshops",
      title: "Workshops",
      description: "Hands-on sessions to learn practical skills from industry experts.",
      icon: "tool",
      color: "amber",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      id: "hackathons",
      title: "Hackathons",
      description: "Intense problem-solving challenges to build innovative solutions.",
      icon: "code-2",
      color: "emerald",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      id: "sports",
      title: "Sports",
      description: "Competitive tournaments and sports events to showcase athletic talents.",
      icon: "dumbbell",
      color: "red",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: "lectures",
      title: "Guest Lectures",
      description: "Insightful talks and discussions with industry leaders and academics.",
      icon: "presentation",
      color: "teal",
      gradient: "from-teal-400 to-teal-600"
    },
    {
      id: "fests",
      title: "College Fests",
      description: "Annual celebrations with a variety of events and activities.",
      icon: "party-popper",
      color: "fuchsia",
      gradient: "from-fuchsia-400 to-fuchsia-600"
    },
    {
      id: "openmic",
      title: "Open Mic & Fun Events",
      description: "Casual gatherings for sharing talents and having fun with friends.",
      icon: "mic",
      color: "orange",
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header section */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/")}
            className="mr-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50"
          >
            <FiArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Event Categories
            </h1>
            <p className="text-gray-600 mt-2">Explore events based on your interests</p>
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <EventCategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              color={category.color}
              gradient={category.gradient}
              onClick={() => {
                console.log(`Navigating to ${category.id} events`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
