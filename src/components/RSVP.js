import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

// REPLACE THIS with your actual Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdzmsfsDKuuzgeVlL-NphFN_4mPokADKt1yoBz63eAsvKGSLg/viewform?usp=dialog';

const RSVP = () => {
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
      className="rsvp-section"
      id="rsvp"
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
        {t.rsvpTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.rsvpSubtitle}
      </motion.p>

      <motion.div
        className="rsvp-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="rsvp-message">
          {t.rsvpMessage}
          <br /><br />
          <span style={{ fontFamily: "'Noto Sans Telugu', 'Noto Sans Kannada', sans-serif", fontSize: '0.95rem', opacity: 0.8 }}>
            {t.rsvpMessageTelugu}
          </span>
        </p>

        <motion.a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rsvp-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.rsvpButton}
        </motion.a>

        <p className="rsvp-note">
          {t.rsvpNote}
        </p>

        {/* Additional contact info */}
        <motion.div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'rgba(139, 26, 26, 0.05)',
            border: '1px solid rgba(212, 168, 67, 0.3)',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p style={{ fontSize: '1rem', color: '#8B1A1A', fontWeight: 600, marginBottom: '0.5rem' }}>
            {t.rsvpContactTitle}
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
            {t.rsvpBrideFamily}<br />
            {t.rsvpGroomFamily}<br />
            {t.rsvpEmail}
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RSVP;
