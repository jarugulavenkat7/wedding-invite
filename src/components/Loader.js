import React from 'react';
import { motion } from 'framer-motion';
import useT from '../useT';

const Loader = () => {
  const t = useT();

  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Ganesha / Om */}
      <motion.div
        className="loader-ganapati"
        style={{ width: '120px', height: '120px', marginBottom: '1rem', marginTop: '-2rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#D4A843" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M 25,30 C 50,10 70,30 45,48 C 75,65 50,95 25,75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 45,48 C 45,48 85,50 85,75 C 85,90 65,95 60,85 C 55,75 68,75 72,78"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 65,30 C 80,30 90,15 75,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="50" cy="15" r="3" fill="#D4A843" stroke="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="loader-om"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        🙏
      </motion.div>

      <motion.div
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {t.loaderName}
      </motion.div>

      <motion.div
        className="loader-text-telugu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        {t.loaderSubName}
      </motion.div>

      {/* Animated dots */}
      <motion.div
        style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#D4A843',
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;
