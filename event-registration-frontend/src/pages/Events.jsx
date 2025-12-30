// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCardD";
import { Loader2 } from "lucide-react";

// Sample event data (static, no backend)
const sampleEvents = [
  {
    title: "Annual Tech Festival",
    date: "2025-05-15",
    time: "10:00 AM - 6:00 PM",
    location: "Main Campus Auditorium",
    description:
      "Join us for a day of innovation, workshops, and exciting tech demonstrations. Connect with industry professionals and showcase your skills.",
    organizer: "Tech Club",
    attendees: 120,
    maxAttendees: 200,
    tags: ["technology", "innovation", "workshops"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Career Fair 2025",
    date: "2025-05-20",
    time: "9:00 AM - 4:00 PM",
    location: "Student Center, Building B",
    description: "Meet representatives from over 50 companies looking to hire graduates. Bring your resume and be ready for on-site interviews.",
    organizer: "Career Development Center",
    attendees: 85,
    maxAttendees: 150,
    tags: ["career", "networking", "professional"],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Alumni Networking Night",
    date: "2025-06-05",
    time: "6:30 PM - 9:00 PM",
    location: "Alumni Hall",
    description: "Connect with successful alumni from various industries. Great opportunity to build professional networks and seek mentorship.",
    organizer: "Alumni Association",
    attendees: 64,
    maxAttendees: 100,
    tags: ["networking", "alumni", "mentorship"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    title: "Sports Tournament",
    date: "2025-06-12",
    time: "9:00 AM - 7:00 PM",
    location: "University Sports Complex",
    description: "Compete in various sports categories including basketball, football, cricket, and athletics. Open to all students and faculty members.",
    organizer: "Sports Department",
    attendees: 230,
    maxAttendees: 300,
    tags: ["sports", "competition", "athletics"],
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Cultural Fest",
    date: "2025-06-25",
    time: "5:00 PM - 10:00 PM",
    location: "Open Air Theater",
    description: "Experience diverse cultures through music, dance, food, and art. Celebrate diversity and inclusion with performances from different cultural groups.",
    organizer: "Cultural Committee",
    attendees: 175,
    maxAttendees: 250,
    tags: ["culture", "music", "dance", "art"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  },
  {
    title: "Entrepreneurship Summit",
    date: "2025-07-10",
    time: "10:00 AM - 4:00 PM",
    location: "Business School Auditorium",
    description: "Learn from successful entrepreneurs, pitch your ideas, and get feedback from investors. Great opportunity for budding entrepreneurs.",
    organizer: "Entrepreneurship Cell",
    attendees: 92,
    maxAttendees: 120,
    tags: ["entrepreneurship", "startup", "business"],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
  // ... [You can include other events from the original sample list here]
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async load from backend
    setTimeout(() => {
      setEvents(sampleEvents);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* <Navbar /> */}
      <div className="container mx-auto pt-28 pb-16 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#310C7E] to-[#9372C1] mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover and register for exciting college events happening around your campus.
            Never miss out on opportunities to learn, network, and have fun!
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mb-8 text-center">
            <Loader2 className="animate-spin h-8 w-8 text-purple-600 mx-auto" />
            <p className="text-gray-700 mt-2">Loading events...</p>
          </div>
        )}

        {/* Events Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                attendees={event.attendees}
                image={event.image}
                onClick={() => alert(`Registered for event: ${event.title}`)}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking for more?</h2>
          <p className="text-gray-700 mb-6">
            Check back frequently as new events are added regularly!
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium border border-purple-100">
            Coming Soon: Submit Your Own Event
          </div>
        </div>

        <footer className="bg-white/80 backdrop-blur-md py-6 border-t border-purple-100 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 EventHub | The Ultimate College Event Platform</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Events;