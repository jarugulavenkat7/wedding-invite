import React from 'react';
import { motion } from 'framer-motion';
import useT from '../useT';

const Footer = () => {
  const t = useT();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-names">{t.footerNames}</div>
      <div className="footer-date">{t.footerDate}</div>
      <div className="footer-divider" />
      <p className="footer-message" style={{ whiteSpace: 'pre-line' }}>
        {t.footerQuote}
      </p>
      <div className="footer-divider" />
      <p style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '1rem' }}>
        {t.footerMadeWith}
      </p>
    </motion.footer>
  );
};

export default Footer;
