import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, ClipboardList, Image as ImageIcon, Monitor, School } from "lucide-react";
import { motion } from "framer-motion";

export default function EditHostedEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    college: "",
    mode: "",
    startDate: "",
    endDate: "",
    deadline: "",
    prize: "",
    judgingCriteria: "",
    minTeam: "",
    maxTeam: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${id}`);
        setFormData({
          eventName: res.data.eventName || "",
          description: res.data.description || "",
          college: res.data.college || "",
          mode: res.data.mode || "",
          startDate: res.data.startDate ? res.data.startDate.split('T')[0] : "",
          endDate: res.data.endDate ? res.data.endDate.split('T')[0] : "",
          deadline: res.data.deadline ? res.data.deadline.split('T')[0] : "",
          prize: res.data.prize || "",
          judgingCriteria: res.data.judgingCriteria || "",
          minTeam: res.data.minTeam || "",
          maxTeam: res.data.maxTeam || "",
        });
      } catch (err) {
        console.error("Failed to fetch event", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/events/${id}`, formData);
      alert("Event updated successfully!");
      navigate("/admin/my-events");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update event.");
    }
  };

  const formFields = [
    { name: "eventName", label: "Event Name", icon: Calendar },
    { name: "description", label: "Description", type: "textarea", icon: ClipboardList },
    { name: "college", label: "College", icon: School },
    { name: "mode", label: "Mode", icon: Monitor, type: "select", options: ["Online", "Offline"] },
    { name: "startDate", label: "Start Date", type: "date", icon: Calendar },
    { name: "endDate", label: "End Date", type: "date", icon: Calendar },
    { name: "deadline", label: "Registration Deadline", type: "date", icon: Calendar },
    { name: "prize", label: "Prize Pool", icon: Trophy },
    { name: "judgingCriteria", label: "Judging Criteria", type: "textarea", icon: ClipboardList },
    { name: "minTeam", label: "Minimum Team Size", type: "number", icon: Users },
    { name: "maxTeam", label: "Maximum Team Size", type: "number", icon: Users },
  ];

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
      <div className="text-purple-900 text-xl font-semibold">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 py-10 px-4 md:px-10 relative"
         style={{ perspective: "1500px" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute bottom-40 left-20 w-40 h-40 rounded-full purple-gradient opacity-20"
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
          className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full purple-gradient opacity-10"
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

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="purple-gradient text-white px-6 py-3 rounded-full mb-8 flex items-center gap-2 hover:shadow-lg transition-all shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, rotateX: -10 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="p-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-purple-900"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Edit Event
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <motion.div 
                    key={field.name} 
                    className={`${field.type === 'textarea' ? 'md:col-span-2' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.05), duration: 0.5 }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: `translateZ(${index * 2}px)` 
                    }}
                  >
                    <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
                      <field.icon className="w-4 h-4 purple-gradient text-transparent bg-clip-text" />
                      {field.label}
                    </label>
                    
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-purple-50 border border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                      />
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-purple-50 border border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="" disabled>Select {field.label.toLowerCase()}...</option>
                        {field.options.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-purple-50 border border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="w-full purple-gradient text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(147, 114, 193, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Update Event
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}