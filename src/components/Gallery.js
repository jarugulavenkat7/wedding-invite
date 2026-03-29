import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const Gallery = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="gallery-section" id="gallery" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.galleryTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.gallerySubtitle}
      </motion.p>

      <div className="gallery-grid">
        {t.galleryItems.map((item, i) => (
          <motion.div
            className="gallery-item"
            key={item.emoji}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="gallery-placeholder">
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '3rem' }}>{item.emoji}</span>
                <span style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: '#8B1A1A',
                  fontFamily: "'Playfair Display', serif",
                  marginTop: '0.5rem',
                  letterSpacing: '1px',
                }}>
                  {item.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        style={{
          marginTop: '2rem',
          fontSize: '0.95rem',
          color: '#B8A898',
          fontStyle: 'italic',
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        {t.galleryHint}
      </motion.p>
    </section>
  );
};

export default Gallery;
