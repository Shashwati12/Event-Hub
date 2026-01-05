import React, { useState } from 'react';
import { Calendar, Bell, ChevronLeft, ChevronRight, Users, Clock, Plus } from 'lucide-react';
import AdminNavbar from '../../components/AdminNavbar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [currentMonth] = useState("April 2025");
  
  const scheduleItems = [
    { 
      time: "1:00 PM",
      title: "Project Meeting",
      subtitle: "UX Solutions for EventMaster",
      attendees: 4
    },
    {
      time: "3:00 PM",
      title: "Out of office",
      subtitle: "Break time",
      attendees: 1
    },
    {
      time: "5:00 PM",
      title: "Event Review",
      subtitle: "Weekly review of upcoming events",
      attendees: 5
    }
  ];

  const upcomingEvents = [
    {
      tag: "Featured",
      title: "Tech Conference 2024",
      date: "06 December"
    },
    {
      tag: "Free",
      title: "Community Meetup",
      date: "21 December"
    }
  ];

  const handleCreateEvent = () => {
    navigate('/admin/host-event');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-purple-400 relative pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-40 w-64 h-64 rounded-2xl purple-gradient opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-60 left-40 w-80 h-80 rounded-full purple-gradient opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -5, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full purple-gradient opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Sidebar */}
          <motion.div 
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-600 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full purple-gradient flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-600" />
                </div>
                <div>
                  <h2 className="text-purple-900 font-medium">Today's Schedule</h2>
                  <p className="text-purple-500 text-sm">April 21, Friday</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  >
                    <div className="text-sm text-purple-500 mb-1">{item.time}</div>
                    <div className="bg-purple-200 rounded-lg p-4 hover:bg-purple-300 transition-colors">
                      <h3 className="text-purple-900 font-medium">{item.title}</h3>
                      <p className="text-purple-600 text-sm mt-1">{item.subtitle}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center text-purple-700">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{item.attendees} attendees</span>
                        </div>
                        <motion.button 
                          className="text-600 purple-gradient px-3 py-1 rounded-full text-sm hover:shadow-md transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Join
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Calendar Area */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-purple-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-purple-900">{currentMonth}</h2>
                <div className="flex items-center space-x-2">
                  <motion.button 
                    className="p-2 hover:bg-purple-400 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-purple-700" />
                  </motion.button>
                  <motion.button 
                    className="p-2 hover:bg-purple-400 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5 text-purple-700" />
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-purple-600 text-sm py-2 font-medium">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2;
                  const isToday = day === 21;
                  const isSelected = day === 6;
                  return (
                    <motion.button
                      key={i}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm
                        ${day < 1 ? 'text-purple-500' : 'text-purple-800'}
                        ${isToday ? 'purple-gradient text-600' : ''}
                        ${isSelected ? 'bg-purple-300' : ''}
                        hover:bg-purple-500 transition-colors
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {day > 0 && day}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="bg-600 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-purple-900 font-medium">Upcoming Events</h2>
                <button className="text-purple-600 text-sm hover:text-purple-800 transition-colors">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-purple-200 rounded-lg p-4 hover:bg-purple-400 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
                  >
                    <span className="inline-block px-2 py-1 purple-gradient text-xs text-600 rounded-full mb-2">
                      {event.tag}
                    </span>
                    <h3 className="text-purple-900 font-medium">{event.title}</h3>
                    <p className="text-purple-600 text-sm mt-1">{event.date}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                onClick={handleCreateEvent}
                className="w-full mt-6 purple-gradient text-purple-600 rounded-xl py-3 flex items-center justify-center space-x-2 transition-all shadow-md"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(147, 114, 193, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                <span>Create Event</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;