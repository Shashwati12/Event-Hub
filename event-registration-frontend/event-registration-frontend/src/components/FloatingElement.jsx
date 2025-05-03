import { motion } from 'framer-motion';

export const FloatingElement = ({ className }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-white/10 backdrop-blur-sm ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
