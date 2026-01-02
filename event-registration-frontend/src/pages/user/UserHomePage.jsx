import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUser, Calendar, CalendarCheck, Shapes } from 'lucide-react';
import { motion } from "framer-motion";

export default function UserHomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center relative overflow-hidden"
         style={{ perspective: "1000px" }}>
      {/* Subtle Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-300/30 rounded-2xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl w-full mx-4"
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 14
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="purple-gradient rounded-3xl p-12 text-center text-purple-700/60 overflow-hidden shadow-xl"
          whileHover={{
            boxShadow: "0 30px 60px -15px rgba(49, 12, 126, 0.3)",
            transition: { duration: 0.4 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* User welcome section */}
          <motion.div 
            className="mb-8"
            style={{ transform: "translateZ(20px)" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <CircleUser className="w-20 h-20 mx-auto mb-4 text-purple-600/60" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Welcome Back!
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Logged in as: <span className="font-semibold">{user?.email}</span>
            </motion.p>
          </motion.div>

          {/* Option Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            style={{ transform: "translateZ(10px)" }}
          >
            <motion.button
              onClick={() => navigate("/user/all-events")}
              className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all duration-300 text-left relative overflow-hidden shadow-md"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5, 
                z: 30,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative z-10"
                style={{ transform: "translateZ(20px)" }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="w-fit p-3 purple-gradient rounded-lg mb-4 text-purple-400"
                >
                  <Calendar className="w-10 h-10 transition-transform" />
                </motion.div>
                <h2 className="text-2xl font-semibold mb-2 text-purple-900">View All Events</h2>
                <p className="text-purple-700">Browse through all available events and activities</p>
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => navigate("/user/my-events")}
              className="bg-white/80 hover:bg-white p-6 rounded-2xl transition-all duration-300 text-left relative overflow-hidden shadow-md"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5, 
                z: 30,
                transition: { duration: 0.4 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative z-10"
                style={{ transform: "translateZ(20px)" }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="w-fit p-3 purple-gradient rounded-lg mb-4 text-purple-400"
                >
                  <CalendarCheck className="w-10 h-10 transition-transform" />
                </motion.div>
                <h2 className="text-2xl font-semibold mb-2 text-purple-900">My Registered Events</h2>
                <p className="text-purple-700">Check your upcoming registered events</p>
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-12 flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ transform: "translateZ(5px)" }}
          >
            <Shapes className="w-6 h-6 animate-spin-slow text-purple-400" />
            <span className="text-purple-400">Explore your dashboard</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}