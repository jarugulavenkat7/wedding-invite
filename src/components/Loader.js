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
      {/* Rotating mandala */}
      <motion.div
        className="loader-mandala"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.6">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="45" />
            <circle cx="100" cy="100" r="30" />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={100 + 30 * Math.cos(angle)}
                  y1={100 + 30 * Math.sin(angle)}
                  x2={100 + 90 * Math.cos(angle)}
                  y2={100 + 90 * Math.sin(angle)}
                />
              );
            })}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const cx = 100 + 52 * Math.cos(angle);
              const cy = 100 + 52 * Math.sin(angle);
              return <circle key={`d-${i}`} cx={cx} cy={cy} r="8" />;
            })}
          </g>
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
