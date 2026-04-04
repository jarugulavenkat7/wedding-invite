import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const WEDDING_VENUE_QUERY = encodeURIComponent('Elegance Ballroom & Event Center, 8740 Ohio Dr A1, Plano, TX 75024');

const Venue = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="venue-section" id="venue" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.venueTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.venueSubtitle}
      </motion.p>

      <motion.div
        className="venue-info"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="venue-name">{t.venueName}</h3>
        <p className="venue-address">
          {t.venueAddr1}<br />
          {t.venueAddr2}<br />
          {t.venueAddr3}
        </p>

        <motion.a
          href={`https://www.google.com/maps/dir/?api=1&destination=${WEDDING_VENUE_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-map-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.venueDirections}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Venue;
