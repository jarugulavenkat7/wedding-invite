import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const PreWeddingVenue = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="venue-section"
      id="pre-wedding-venue"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.preVenueTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.preVenueSubtitle}
      </motion.p>

      <motion.div
        className="venue-info"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="venue-name">{t.preVenueName}</h3>
        <p className="venue-address">
          {t.preVenueAddr1}<br />
          {t.preVenueAddr2}<br />
          {t.preVenueAddr3}
        </p>

        <motion.div
          style={{
            width: '100%',
            maxWidth: '500px',
            height: '250px',
            margin: '0 auto 2rem',
            border: '2px solid rgba(212,168,67,0.3)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <iframe
            title="Pre-Wedding Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0!2d-96.5476161!3d33.2236629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c0d0867889379%3A0x90d33fbb9ee65c3b!2s2621+FM1827%2C+McKinney%2C+TX+75071!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.a
          href="https://www.google.com/maps/place/2621+FM1827,+McKinney,+TX+75071/@33.2236629,-96.5476161,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="venue-map-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.preVenueDirections}
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default PreWeddingVenue;
