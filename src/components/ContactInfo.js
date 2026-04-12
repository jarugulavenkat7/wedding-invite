import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const ContactInfo = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.contactTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {t.contactSubtitle}
      </motion.p>

      <div className="contact-grid">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="contact-side">{t.brideSide}</h3>
          <p className="contact-name">{t.brideContactName}</p>
          <a href={`tel:${t.brideContactPhone}`} className="contact-phone">📞 {t.brideContactPhone}</a>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="contact-side">{t.groomSide}</h3>
          <p className="contact-name">{t.groomContactName}</p>
          <a href={`tel:${t.groomContactPhone}`} className="contact-phone">📞 {t.groomContactPhone}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
