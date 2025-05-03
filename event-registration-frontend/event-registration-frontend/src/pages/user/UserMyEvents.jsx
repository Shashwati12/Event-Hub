import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Users, Mail, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const UserMyEvents = () => {
  const [events, setEvents] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  // Base URL from .env or fallback
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    if (!email) return;

    axios
      .get(`${baseURL}/api/register/user-events`, {
        params: { userEmail: email },
      })
      .then((res) => {
        console.log("✅ Registered events:", res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.error("Failed to load user events:", err);
        setEvents([]);
      });
  }, [email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 py-10 px-4 md:px-10 relative" 
         style={{ perspective: "1600px" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-purple-300/30 rounded-2xl"
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
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/20 rounded-full"
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
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.button
          onClick={() => window.history.back()}
          className="purple-gradient text-purple-600 px-6 py-3 rounded-full mb-8 flex items-center gap-2 hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <motion.h2 
          className="text-4xl font-bold mb-8 text-purple-900 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          My Registered Events
        </motion.h2>

        {events.length === 0 ? (
          <motion.div 
            className="bg-purple-300 rounded-2xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="text-purple-700 text-lg">You haven't registered for any events yet.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                className="purple-gradient rounded-2xl overflow-hidden transition-all duration-300 text-purple-600 shadow-lg"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${idx * 5}px)`,
                }}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * idx, 
                  type: "spring",
                  stiffness: 50,
                  damping: 14
                }}
                whileHover={{ 
                  boxShadow: "0 30px 60px -15px rgba(147, 114, 193, 0.5)",
                  transition: { duration: 0.4 } 
                }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{event.eventName}</h3>
                      <div className="flex items-center gap-2 text-purple-600">
                        <Users className="w-4 h-4" />
                        <span>Team: {event.teamName}</span>
                      </div>
                    </div>
                    <motion.span 
                      className="text-purple-600"
                      animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div 
                        className="mt-6 space-y-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-semibold text-purple-600 mb-4">Team Members</h4>
                        <div className="grid gap-4">
                          {event.teamMembers?.map((member, i) => (
                            <motion.div
                              key={i}
                              className="bg-white/20 rounded-xl p-4 transition-all hover:bg-white/30"
                              style={{ 
                                transformStyle: "preserve-3d",
                                transform: `translateZ(${i * 3}px)` 
                              }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                              whileHover={{ scale: 1.02, z: 10 }}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-purple-600 font-medium text-lg">{member.name}</span>
                                {i === 0 && (
                                  <motion.span 
                                    className="px-3 py-1 bg-white/30 text-purple-600 text-sm rounded-full"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    Team Leader
                                  </motion.span>
                                )}
                              </div>
                              <div className="space-y-2 text-purple-600">
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  <span className="text-sm">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  <span className="text-sm">{member.phone}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default UserMyEvents;


