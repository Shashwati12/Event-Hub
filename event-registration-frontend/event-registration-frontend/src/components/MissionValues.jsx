import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiStar, FiHeart } from "react-icons/fi";

const ValueCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15, z: -50 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, z: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7,
        delay: 0.2 * index, // Staggered delay based on index
        type: "spring",
        stiffness: 50,
        damping: 14
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        z: 30,
        boxShadow: "0 30px 60px -15px rgba(147, 114, 193, 0.5)",
        transition: { duration: 0.4, type: "spring" } 
      }}
      className="relative group overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: `translateZ(${index * 10}px)`,
        boxShadow: "0 15px 35px -15px rgba(147, 114, 193, 0.3)", 
      }}
    >
      <div 
        className="p-8 rounded-xl overflow-hidden relative z-10 h-full flex flex-col border border-purple-200 shadow-lg"
        style={{
          transform: "translateZ(0)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 10px 30px -15px rgba(147, 114, 193, 0.3)"
        }}
      >
        {/* 3D Layered Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-200 to-indigo-100 opacity-90 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ transform: "translateZ(-10px)" }}
          whileHover={{ filter: "brightness(1.05)" }}
        ></motion.div>
        
        {/* Hover effect - animated border with 3D effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#310C7E] to-[#9372C1] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 rounded-xl"
          style={{ transform: "translateZ(-5px)" }}
        ></motion.div>
        
        {/* Animated effect in background with 3D parallax */}
        <motion.div 
          className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-purple-300/20 blur-3xl group-hover:bg-purple-400/30 transition-colors duration-500"
          style={{ transform: "translateZ(-15px)" }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        {/* Icon with 3D pop and interaction */}
        <motion.div 
          className="bg-purple-500/20 text-purple-700 p-3 rounded-lg w-fit mb-4 relative z-10"
          style={{ transform: "translateZ(40px)" }}
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -10, 10, 0],
            boxShadow: "0 15px 25px -5px rgba(147, 114, 193, 0.4)",
            transition: { duration: 0.5 }
          }}
          animate={{
            y: [0, -5, 0],
            rotateZ: [0, 5, 0, -5, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <div className="text-2xl">{icon}</div>
        </motion.div>
        
        {/* Content with 3D layering */}
        <motion.h3 
          className="text-xl font-bold text-purple-800 mb-3 relative z-10"
          style={{ transform: "translateZ(15px)" }}
        >{title}</motion.h3>
        <motion.p 
          className="text-gray-700 relative z-10 flex-grow"
          style={{ transform: "translateZ(10px)" }}
        >{description}</motion.p>
      </div>
    </motion.div>
  );
};

export const MissionValues = ({ id = "mission-values" }) => {
  const values = [
    {
      icon: <FiTarget />,
      title: "Our Mission",
      description: "To revolutionize how people discover, participate in, and remember events by providing intuitive tools that bring communities together through shared experiences."
    },
    {
      icon: <FiStar />,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in event technology, integrating cutting-edge solutions that enhance user experience while remaining accessible to all."
    },
    {
      icon: <FiHeart />,
      title: "Community",
      description: "We believe in the power of human connection. Our platform is built to foster meaningful interactions and create spaces where diverse communities can thrive."
    }
  ];

  return (
    <section 
      id={id} 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#f9f5ff', perspective: "2000px" }} // Soft lavender background with perspective
    >

      {/* Background 3D shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg bg-purple-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 40,
              height: Math.random() * 60 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${Math.random() * 60 - 30}deg) rotateY(${Math.random() * 60 - 30}deg) translateZ(${Math.random() * 50}px)`,
            }}
            animate={{
              rotateX: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              rotateY: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              translateZ: [Math.random() * -10, Math.random() * 30],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative"
          style={{ perspective: "1200px" }}
        >
          {/* Floating icons around the section title */}
          <motion.div
            className="absolute -top-5 right-1/4 w-10 h-10 flex items-center justify-center text-purple-600 hidden md:flex"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 360, 0],
              z: [10, 40, 10],
              transition: {
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                z: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }
            }}
          >
            <FiTarget className="text-2xl" style={{ transform: "translateZ(30px)" }} />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/4 w-12 h-12 flex items-center justify-center text-indigo-500 hidden md:flex"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              y: [0, 10, 0],
              rotateZ: [0, 10, -10, 0],
              z: [20, 50, 20],
              transition: {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                z: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
            }}
          >
            <FiHeart className="text-3xl" style={{ transform: "translateZ(40px)" }} />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 right-1/3 w-8 h-8 flex items-center justify-center text-purple-400 hidden md:flex"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              y: [0, -15, 0],
              rotateY: [0, -360, 0],
              z: [15, 35, 15],
              transition: {
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                z: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
            }}
          >
            <FiStar className="text-xl" style={{ transform: "translateZ(25px)" }} />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-[#310C7E] to-[#9372C1] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, rotateX: 45, z: -100 }}
            whileInView={{ 
              opacity: 1, 
              rotateX: 0,
              z: 0,
              transition: { 
                duration: 0.8, 
                type: "spring",
                bounce: 0.4 
              } 
            }}
            viewport={{ once: true }}
          >
            Mission & Values
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, rotateX: 45, z: -50 }}
            whileInView={{ 
              opacity: 1,
              rotateX: 0, 
              z: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2, 
                type: "spring",
                bounce: 0.3 
              } 
            }}
            viewport={{ once: true }}
          >
            The core principles that drive everything we do at EventHub
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Floating 3D decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 md:left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/30 to-indigo-400/30 hidden md:block"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px -5px rgba(49, 12, 126, 0.15)",
              transform: "translateZ(30px) rotateX(20deg) rotateY(-10deg)"
            }}
            animate={{
              y: [0, -15, 0],
              rotateY: [-10, 10, -10],
              rotateX: [20, 5, 20],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          />

          <motion.div
            className="absolute -bottom-10 right-0 md:right-10 w-20 h-20 rounded-lg bg-gradient-to-br from-purple-300/20 to-blue-300/20 hidden md:block"
            style={{ 
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px -5px rgba(49, 12, 126, 0.1)",
              transform: "translateZ(40px) rotateX(-10deg) rotateY(20deg)"
            }}
            animate={{
              y: [0, 20, 0],
              rotateY: [20, -5, 20],
              rotateX: [-10, -20, -10],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-200/10 to-purple-200/10 backdrop-blur-sm hidden md:block"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(-20px)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotateZ: [0, 360],
              transition: {
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 40, repeat: Infinity, ease: "linear" },
              }
            }}
          />
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};