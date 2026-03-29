import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

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

        {/* Embedded map placeholder */}
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
            title="Wedding Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ0LjAiTiA3OcKwMjUnMDkuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.a
          href="https://maps.google.com/?q=Tirupati+Kalyana+Mandapam"
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
