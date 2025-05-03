import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, Eye, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MyHostedEvents() {
  const [events, setEvents] = useState(null); // null for loading state
  const [selectedEventRegistrations, setSelectedEventRegistrations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEventName, setSelectedEventName] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const adminEmail = user?.email;

  useEffect(() => {
    const fetchHostedEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/hosted/${adminEmail}`);
        setEvents(res.data);
      } catch (error) {
        console.error("Failed to fetch hosted events", error);
        setEvents([]);
      }
    };

    if (adminEmail) fetchHostedEvents();
  }, [adminEmail]);

  const handleDelete = async (eventId) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/events/${eventId}`);
      setEvents((prev) => prev.filter((e) => e._id !== eventId));
    } catch (err) {
      console.error("Failed to delete event", err);
    }
  };

  const handleUpdate = (event) => {
    navigate("/admin/host", { state: { eventToEdit: event } });
  };

  const handleViewRegistrations = async (eventId, eventName) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/register/event/${eventId}`);
      setSelectedEventRegistrations(res.data);
      setSelectedEventName(eventName);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to fetch registrations", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-400 relative overflow-hidden">
      <AdminNavbar />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 rounded-2xl purple-gradient opacity-30"
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
          className="absolute -bottom-10 left-20 w-64 h-64 rounded-full purple-gradient opacity-20"
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
          className="absolute top-60 left-1/3 w-40 h-40 rounded-2xl purple-gradient opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      <motion.div 
        className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 text-purple-900"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Hosted Events
        </motion.h2>

        {events === null ? (
          <div className="flex justify-center items-center h-64">
            <div className="purple-gradient p-4 rounded-xl text-purple-500 animate-pulse shadow-lg">
              Loading hosted events...
            </div>
          </div>
        ) : events.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                className="bg-purple-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${index * 5}px)`,
                }}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * index, 
                  type: "spring",
                  stiffness: 50,
                  damping: 14
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 25px -5px rgba(49, 12, 126, 0.1), 0 10px 10px -5px rgba(49, 12, 126, 0.04)",
                  transition: { duration: 0.4 } 
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`http://localhost:5000/${event.image}`}
                    alt={event.eventName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{event.eventName}</h3>
                  <p className="text-purple-700">{event.college}</p>
                  <p className="text-sm purple-gradient text-transparent bg-clip-text font-medium mt-1">{event.mode}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-2">{event.description}</p>

                  {/* Update and Delete Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <motion.button
                      onClick={() => handleUpdate(event)}
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 flex items-center gap-2 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </motion.button>
                    <motion.button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </motion.button>
                    <motion.button
                      onClick={() => handleViewRegistrations(event._id, event.eventName)}
                      className="purple-gradient text-purple-500 px-4 py-2 rounded-lg flex items-center gap-2 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      Registrations
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="bg-purple-200 rounded-2xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-purple-700 text-lg">You haven't hosted any events yet.</p>
            <motion.button
              onClick={() => navigate('/admin/host')}
              className="mt-4 purple-gradient text-purple-500 px-6 py-3 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Host Your First Event
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Modal for Registrations */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm">
          <motion.div 
            className="bg-purple-400 rounded-2xl p-6 w-full max-w-3xl overflow-y-auto max-h-[80vh] relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-900">Registrations for {selectedEventName}</h2>
              <motion.button
                onClick={() => setShowModal(false)}
                className="purple-gradient text-purple-500 w-8 h-8 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            {selectedEventRegistrations.length > 0 ? (
              <div className="space-y-4">
                {selectedEventRegistrations.map((reg, index) => (
                  <motion.div 
                    key={index} 
                    className="border border-purple-100 p-5 rounded-xl shadow-sm bg-purple-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: `translateZ(${index * 2}px)` 
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(49, 12, 126, 0.1)" }}
                  >
                    <h3 className="font-semibold text-lg purple-gradient text-transparent bg-clip-text mb-3">
                      Team: {reg.teamName}
                    </h3>
                    <div className="space-y-3 mt-2">
                      {reg.teamMembers.map((member, i) => (
                        <motion.div 
                          key={i}
                          className="p-3 bg-white rounded-lg flex flex-col sm:flex-row sm:items-center gap-2 justify-between"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <div className="font-medium text-purple-900">{member.name}</div>
                          <div className="text-sm text-purple-700">{member.email}</div>
                          <div className="text-sm text-purple-700">{member.phone}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-purple-700 py-8">No registrations found for this event.</p>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
