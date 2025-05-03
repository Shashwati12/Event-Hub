import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Trophy,
  ClipboardList,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HostEvent() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const eventToEdit = state?.eventToEdit;

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

  const [imageFile, setImageFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const createdBy = user?.email;

  useEffect(() => {
    if (eventToEdit) {
      setFormData({
        eventName: eventToEdit.eventName || "",
        description: eventToEdit.description || "",
        college: eventToEdit.college || "",
        mode: eventToEdit.mode || "",
        startDate: eventToEdit.startDate || "",
        endDate: eventToEdit.endDate || "",
        deadline: eventToEdit.deadline || "",
        prize: eventToEdit.prize || "",
        judgingCriteria: eventToEdit.judgingCriteria || "",
        minTeam: eventToEdit.minTeam || "",
        maxTeam: eventToEdit.maxTeam || "",
      });
    }
  }, [eventToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (imageFile) payload.append("image", imageFile);
      payload.append("createdBy", createdBy);

      if (eventToEdit) {
        await axios.put(
          `http://localhost:5000/api/events/${eventToEdit._id}`,
          payload
        );
        alert("Event updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/events/create", payload);
        alert("Event created successfully!");
      }

      navigate("/admin/my-events");
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Something went wrong.");
    }
  };

  const formFields = [
    { name: "eventName", label: "Event Name", icon: Calendar },
    { name: "description", label: "Description", type: "textarea", icon: ClipboardList },
    { name: "college", label: "College", icon: MapPin },
    { name: "mode", label: "Mode", icon: Users },
    { name: "startDate", label: "Start Date", type: "date", icon: Calendar },
    { name: "endDate", label: "End Date", type: "date", icon: Calendar },
    { name: "deadline", label: "Registration Deadline", type: "date", icon: Calendar },
    { name: "prize", label: "Prize Pool", icon: Trophy },
    { name: "judgingCriteria", label: "Judging Criteria", type: "textarea", icon: ClipboardList },
    { name: "minTeam", label: "Minimum Team Size", type: "number", icon: Users },
    { name: "maxTeam", label: "Maximum Team Size", type: "number", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-purple-500 py-10 px-4 md:px-10 relative" style={{ perspective: "1500px" }}>
      {/* Decorative animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-40 right-20 w-32 h-32 rounded-2xl purple-gradient opacity-30"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-40 left-20 w-40 h-40 rounded-full purple-gradient opacity-20"
          animate={{ y: [0, -30, 0], rotate: [0, -5, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full purple-gradient opacity-10"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      </div>

      <motion.div className="relative z-10 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.button onClick={() => navigate(-1)} className="purple-gradient text-purple-500 px-6 py-3 rounded-full mb-8 flex items-center gap-2 hover:shadow-lg transition-all shadow-md"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <motion.div className="bg-purple-300 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, rotateX: -10 }} animate={{ opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          style={{ transformStyle: "preserve-3d" }}>
          <div className="p-8">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-900"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              {eventToEdit ? "Edit Event" : "Host New Event"}
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <motion.div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}>
                    <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
                      <field.icon className="w-4 h-4 purple-gradient text-transparent bg-clip-text" />
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea name={field.name} value={formData[field.name]} onChange={handleChange}
                        className="w-full bg-purple-200 border-4 border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4} />
                    ) : (
                      <input type={field.type || "text"} name={field.name} value={formData[field.name]} onChange={handleChange}
                        className="w-full bg-purple-200 border-4 border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>

              {!eventToEdit && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}>
                  <label className="block text-purple-900 font-medium mb-2 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 purple-gradient text-transparent bg-clip-text" />
                    Event Image
                  </label>
                  <input type="file" accept="image/*" onChange={handleImageChange}
                    className="w-full bg-purple-300 border-4 border-purple-200 text-purple-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:purple-gradient file:text-white hover:file:bg-purple-700" />
                </motion.div>
              )}

              <motion.button type="submit"
                className="w-full purple-gradient text-purple-500 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }}>
                {eventToEdit ? "Update Event" : "Host Event"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
