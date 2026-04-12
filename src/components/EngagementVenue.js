import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const EngagementVenue = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      className="venue-section"
      id="engagement-venue"
      ref={ref}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.engVenueTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.engVenueSubtitle}
      </motion.p>

      <motion.div
        className="venue-info"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="venue-name">{t.engVenueName}</h3>
        <p className="venue-address">
          {t.engVenueAddr1}<br />
          {t.engVenueAddr2}<br />
          {t.engVenueAddr3}
        </p>

        <motion.a
          href="https://maps.app.goo.gl/ANGvndZmwGxEBLB97"
          target="_blank"
          rel="noopener noreferrer"
          className="venue-map-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.engVenueDirections}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default EngagementVenue;
