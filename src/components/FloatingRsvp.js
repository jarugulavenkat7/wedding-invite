import React from 'react';
import { motion } from 'framer-motion';
import useT from '../useT';
import { GOOGLE_FORM_URL } from '../rsvpFormUrl';

const FloatingRsvp = () => {
  const t = useT();

  return (
    <motion.a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rsvp-fab"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={t.navRsvp}
    >
      <span className="rsvp-fab-text">{t.navRsvp}</span>
    </motion.a>
  );
};

export default FloatingRsvp;
