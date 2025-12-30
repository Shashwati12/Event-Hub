import React from "react";
import { motion } from "framer-motion";

export const JoinUsCTA = ({ id = "join-us" }) => {
  return (
    <section
      id={id}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-lavender-50 to-lavender-100"
      style={{ backgroundColor: '#f0e6ff', perspective: "2000px" }} // Fallback soft lavender background with perspective
    >
      {/* Background 3D shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg bg-purple-200/30 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${Math.random() * 60 - 30}deg) rotateY(${Math.random() * 60 - 30}deg) translateZ(${Math.random() * 50}px)`,
            }}
            animate={{
              rotateX: [Math.random() * 60 - 30, Math.random() * 60 - 30],
              rotateY: [Math.random() * 60 - 30, Math.random() * 60 - 30],
              translateZ: [Math.random() * -20, Math.random() * 20],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Floating calendar graphic 1 */}
          <motion.div
            className="absolute -top-10 -left-10 md:left-0 w-20 h-20 rounded-lg bg-white shadow-xl border border-purple-300 overflow-hidden hidden md:block"
            animate={{
              y: [0, -8, 0],
              rotateY: [0, 10, 0, -10, 0],
              rotateX: [0, 5, 0, -5, 0],
              z: [0, 20, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              z: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px -10px rgba(49, 12, 126, 0.3)"
            }}
          >
            <div className="h-6 bg-gradient-to-r from-[#310C7E] to-[#9372C1] flex items-center justify-center">
              <span className="text-white text-xs font-medium">2025</span>
            </div>
            <div className="flex flex-col items-center justify-center h-14 bg-white">
              <div className="text-lg font-bold text-purple-800">15</div>
              <div className="text-xs text-purple-600">AUGUST</div>
            </div>
          </motion.div>
          
          {/* Floating calendar graphic 2 - new */}
          <motion.div
            className="absolute top-20 -right-10 md:right-0 w-24 h-28 rounded-lg bg-white shadow-xl border border-purple-300 overflow-hidden hidden md:block"
            animate={{
              y: [0, 10, 0],
              rotateY: [0, -15, 0, 15, 0],
              rotateX: [5, 0, -5, 0, 5],
              z: [10, 30, 10],
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              z: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 15px 35px -15px rgba(49, 12, 126, 0.4)"
            }}
          >
            <div className="h-7 bg-gradient-to-r from-[#310C7E] to-[#9372C1] flex items-center justify-center">
              <span className="text-white text-xs font-medium">SEPTEMBER</span>
            </div>
            <div className="grid grid-cols-7 gap-px text-center p-1 bg-white">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-[8px] text-purple-700">{day}</div>
              ))}
              {[...Array(30)].map((_, i) => (
                <div key={i} className={`text-[8px] ${i === 14 ? 'bg-purple-100 rounded-full text-purple-900 font-bold' : 'text-gray-600'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Floating event card - new */}
          <motion.div
            className="absolute -bottom-5 -left-5 md:left-10 w-36 h-auto rounded-lg bg-white shadow-xl border border-purple-300 overflow-hidden hidden md:block p-2"
            animate={{
              y: [0, -12, 0],
              rotateZ: [0, 3, 0, -3, 0],
              rotateY: [5, 0, -5, 0, 5],
              z: [0, 15, 0],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              z: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 15px 35px -15px rgba(49, 12, 126, 0.4)"
            }}
          >
            <div className="h-3 w-20 bg-gradient-to-r from-purple-300 to-purple-100 rounded-sm mb-2"></div>
            <div className="h-2 w-28 bg-gray-200 rounded-sm mb-2"></div>
            <div className="h-2 w-16 bg-gray-200 rounded-sm mb-2"></div>
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
              <div className="h-2 w-12 bg-gray-200 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-400 mr-1"></div>
              <div className="h-2 w-20 bg-gray-200 rounded-sm"></div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30, z: -50 }}
            whileInView={{ opacity: 1, y: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ z: -30 }}
              animate={{ z: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transform: "translateZ(0px)" }}
            >
              Ready to Create <motion.span 
                className="bg-gradient-to-r from-[#310C7E] to-[#9372C1] bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
                style={{ display: "inline-block" }}
              >Unforgettable</motion.span> Events?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              initial={{ z: -20 }}
              animate={{ z: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transform: "translateZ(0px)" }}
            >
              Join thousands of event creators who trust EventHub to bring their visions to life
            </motion.p>
            
            {/* Pulsing button */}
            <div className="relative inline-block">
              {/* Pulse animation layers */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#310C7E] to-[#9372C1] blur-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.4, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#310C7E] to-[#9372C1] blur-sm"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.8, 0.5, 0.8]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
              {/* The actual button */}
              <motion.button
                className="relative py-4 px-8 text-lg font-bold text-white rounded-full bg-gradient-to-r from-[#310C7E] to-[#9372C1] hover:from-[#4517A9] hover:to-[#A587D4] shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  z: 30,
                  boxShadow: "0 15px 30px -10px rgba(49, 12, 126, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  transform: "translateZ(10px)",
                  transformStyle: "preserve-3d"
                }}
              >
                Start Exploring
              </motion.button>
            </div>
            
            <motion.p 
              className="text-gray-500 mt-6"
              initial={{ z: -10 }}
              animate={{ z: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transform: "translateZ(0px)" }}
            >
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Floating notification - right side */}
      <motion.div
        className="absolute bottom-20 right-5 md:right-40 w-44 h-auto rounded-lg bg-white shadow-xl border border-purple-200 overflow-hidden hidden md:block p-3"
        animate={{
          y: [0, -8, 0],
          rotateY: [-5, 5, -5],
          rotateX: [2, -2, 2],
          z: [5, 20, 5],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          z: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          transformStyle: "preserve-3d",
          boxShadow: "0 15px 35px -15px rgba(49, 12, 126, 0.4)"
        }}
      >
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          </div>
          <div>
            <div className="font-medium text-gray-800 text-sm mb-1">Your event is live!</div>
            <div className="text-xs text-gray-500">TechSummit 2025 tickets are now available for purchase</div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};