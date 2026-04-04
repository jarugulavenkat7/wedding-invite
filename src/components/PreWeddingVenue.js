import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const PreWeddingVenue = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      className="venue-section"
      id="pre-wedding-venue"
      ref={ref}
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
    </section>
  );
};

export default PreWeddingVenue;
