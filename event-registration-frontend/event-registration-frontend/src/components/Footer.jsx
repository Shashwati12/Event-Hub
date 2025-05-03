import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGlobe,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";

export const Footer = ({ id = "footer" }) => {
  return (
    <footer
      id={id}
      className="relative pt-24 pb-12 bg-purple-100 text-purple-500 overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      {/* Wave effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-16 md:h-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-purple-900 opacity-20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-purple-800 opacity-10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              background: `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(Math.random() * 150 + 100)}, ${Math.random() * 0.3 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70 + 10}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, Math.random() * -50 - 20],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div className="flex items-center mb-6">
              <motion.div
                className="mr-3 text-3xl text-purple-500"
                animate={{
                  rotateY: [0, 360],
                  transition: { duration: 6, repeat: Infinity, ease: "linear" },
                }}
              >
                <FiGlobe />
              </motion.div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">EventHub</h3>
            </motion.div>
            <p className="text-purple-800 mb-6">
              Revolutionizing how people discover, plan, and experience events through our innovative platform that connects communities and creates lasting memories.
            </p>
            <div className="flex space-x-4">
              {[FiTwitter, FiFacebook, FiInstagram, FiLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-900 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Events", "Features", "Testimonials", "Pricing", "Blog"].map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.2, duration: 0.5 }}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                    whileHover={{ x: 5, color: "#a17dfc" }}
                  >
                    <motion.span className="mr-2 opacity-0" whileHover={{ opacity: 1 }}>
                      <FiArrowRight size={12} />
                    </motion.span>
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: FiMapPin, text: "123 Event Street, San Francisco, CA 94107" },
                { icon: FiPhone, text: "+1 (555) 123-4567" },
                { icon: FiMail, text: "hello@eventhub.com" },
              ].map((item, i) => (
                <motion.li key={i} className="flex items-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}>
                  <motion.div className="mt-1 mr-3 text-purple-500" whileHover={{ scale: 1.2, rotate: 10 }}>
                    <item.icon />
                  </motion.div>
                  <span className="text-gray-400">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on new events and features.
            </p>
            <form className="flex">
              <motion.div className="relative flex-grow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 text-gray-200 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#310C7E] to-[#9372C1] hover:from-[#3a0e96] hover:to-[#a07fd7] px-4 py-3 rounded-r-lg flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }}>
          <p>© {new Date().getFullYear()} EventHub. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
