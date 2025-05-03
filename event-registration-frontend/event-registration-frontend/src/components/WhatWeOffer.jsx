import React from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, 
  FiMap, 
  FiUsers, 
  FiCreditCard, 
  FiMessageSquare, 
  FiBarChart2 
} from "react-icons/fi";

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -10, z: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateY: 0,
        z: 0,
        transition: { duration: 0.6, delay: index * 0.1, type: "spring" } 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.08,
        rotateY: 10,
        rotateX: -8,
        z: 50,
        boxShadow: "0 30px 60px -15px rgba(147, 114, 193, 0.35)",
        transition: { duration: 0.4, type: "spring" } 
      }}
      className="group relative"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        boxShadow: "0 15px 30px -10px rgba(147, 114, 193, 0.2)",
        transform: `translateZ(${index * 5}px)`,
      }}
    >
      <div 
        className="rounded-xl p-6 h-full flex flex-col relative z-10 overflow-hidden bg-white shadow-xl"
        style={{
          transform: "translateZ(0)", // Starting 3D position
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 15px 30px -10px rgba(147, 114, 193, 0.2)"
        }}
      >
        {/* 3D Effect Layers */}
        <div className="absolute inset-0 rounded-xl border-2 border-purple-300/50 z-0 group-hover:border-purple-400/70 transition-all duration-300"
          style={{
            transform: "translateZ(-2px)",
            boxShadow: "0 10px 30px -15px rgba(49, 12, 126, 0.3)"
          }}
        ></div>
        
        {/* Background gradient that intensifies on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 rounded-xl z-0 group-hover:from-white group-hover:to-purple-100 transition-colors duration-300"
          style={{
            transform: "translateZ(-4px)"
          }}
        ></div>
        
        {/* Background glow effect */}
        <div 
          className="absolute -inset-0 bg-gradient-to-r from-[#310C7E]/5 to-[#9372C1]/5 rounded-xl blur-sm z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-[1.02] pointer-events-none"
          style={{
            transform: "translateZ(-6px)"
          }}
        ></div>

        {/* Icon - 3D effect */}
        <motion.div 
          className="bg-purple-100 text-purple-700 p-3 rounded-lg mb-4 w-fit relative z-10 group-hover:bg-purple-200 group-hover:text-purple-800 transition-colors duration-300"
          style={{ transform: "translateZ(30px)" }} // Enhanced 3D pop effect
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -5, 5, 0],
            boxShadow: "0 15px 25px -5px rgba(147, 114, 193, 0.4)",
            transition: { repeat: 0 }
          }}
          animate={{
            y: [0, -5, 0],
            rotateZ: [0, 3, 0, -3, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>
        
        {/* Content - different 3D layers */}
        <h3 
          className="text-xl font-bold text-purple-800 mb-2 relative z-10 group-hover:text-purple-900 transition-colors duration-300"
          style={{ transform: "translateZ(6px)" }}
        >{title}</h3>
        <p 
          className="text-gray-600 text-sm relative z-10 flex-grow group-hover:text-gray-700 transition-colors duration-300"
          style={{ transform: "translateZ(4px)" }}
        >{description}</p>
      </div>
    </motion.div>
  );
};

export const WhatWeOffer = ({ id = "what-we-offer" }) => {
  const services = [
    {
      icon: <FiCalendar />,
      title: "Event Planning",
      description: "Intuitive tools for creating, scheduling, and managing events of any size or complexity."
    },
    {
      icon: <FiMap />,
      title: "Venue Mapping",
      description: "Interactive floorplans and seating charts to optimize your event space and attendee experience."
    },
    {
      icon: <FiUsers />,
      title: "Attendee Management",
      description: "Streamlined registration, check-in processes, and real-time attendee analytics."
    },
    {
      icon: <FiCreditCard />,
      title: "Ticketing & Payments",
      description: "Secure payment processing with flexible ticketing options and discount management."
    },
    {
      icon: <FiMessageSquare />,
      title: "Communication Tools",
      description: "Multi-channel messaging to keep attendees informed before, during, and after your event."
    },
    {
      icon: <FiBarChart2 />,
      title: "Analytics & Insights",
      description: "Comprehensive reporting tools to measure success and identify growth opportunities."
    }
  ];

  return (
    <section 
      id={id} 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#f5f0ff', perspective: "2000px" }} // Soft lavender background with perspective
    >
      {/* 3D floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hexagons */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute bg-purple-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
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
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating circles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-indigo-200/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${Math.random() * 60 - 30}deg) rotateY(${Math.random() * 60 - 30}deg) translateZ(${Math.random() * 40}px)`,
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8 + Math.random() * 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              opacity: { duration: 8 + Math.random() * 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          style={{ perspective: "1000px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold inline-block bg-gradient-to-r from-[#310C7E] to-[#9372C1] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, z: -100 }}
            whileInView={{
              opacity: 1,
              z: 0,
              transition: { duration: 0.8, type: "spring" } 
            }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, z: -50 }}
            whileInView={{
              opacity: 1,
              z: 0,
              transition: { duration: 0.8, delay: 0.2, type: "spring" } 
            }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for event professionals at every stage
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* 3D Decorative elements */}
          <motion.div
            className="absolute -left-10 top-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-200/10 to-indigo-200/10 hidden lg:block"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(60px) rotateX(20deg) rotateY(-10deg)",
              boxShadow: "0 20px 40px -10px rgba(147, 114, 193, 0.2)"
            }}
            animate={{
              y: [0, -30, 0],
              rotateY: [-10, 10, -10],
              rotateX: [20, 10, 20],
              transition: {
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }
            }}
          />

          <motion.div
            className="absolute -right-10 bottom-1/4 w-32 h-32 rounded-lg bg-gradient-to-br from-purple-300/10 to-blue-300/10 hidden lg:block"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(40px) rotateX(-15deg) rotateY(25deg)",
              boxShadow: "0 15px 35px -10px rgba(99, 102, 241, 0.15)"
            }}
            animate={{
              y: [0, 40, 0],
              rotateY: [25, 0, 25],
              rotateX: [-15, -5, -15],
              transition: {
                y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }
            }}
          />

          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center hidden lg:flex"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(50px)"
            }}
            animate={{
              y: [0, -15, 0],
              rotateY: [0, 360, 0],
              transition: {
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              }
            }}
          >
            <div className="text-3xl text-purple-600" style={{ transform: "translateZ(20px)" }}>
              <FiMap />
            </div>
          </motion.div>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};