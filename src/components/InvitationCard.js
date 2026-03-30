import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const InvitationCard = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="invitation-section"
      id="invitation"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        className="invitation-card"
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Corner ornaments */}
        <span className="corner-ornament top-left">❋</span>
        <span className="corner-ornament top-right">❋</span>
        <span className="corner-ornament bottom-left">❋</span>
        <span className="corner-ornament bottom-right">❋</span>

        <div className="invitation-header">
          <motion.div
            className="invitation-om"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            🙏🕉️🙏
          </motion.div>

          <motion.p
            className="invitation-telugu-text"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.8 } : {}}
            transition={{ delay: 0.5 }}
          >
            {t.invocationText}
          </motion.p>

          <motion.h2
            className="invitation-title"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            {t.invitationTitle}
          </motion.h2>
        </div>

        <motion.div
          className="invitation-body"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#8B1A1A' }}>
            {t.blessingLine}
          </p>

          <p className="parents">
            {t.brideParents}
          </p>
          <p style={{ margin: '0.3rem 0', fontStyle: 'italic', opacity: 0.7 }}>
            {t.inviteLine}
          </p>

          <motion.span
            className="couple-names"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8, type: 'spring' }}
          >
            {t.brideName}
          </motion.span>

          <p style={{ fontSize: '1.2rem', color: '#D4A843', margin: '0.3rem 0' }}>{t.withText}</p>

          <motion.span
            className="couple-names"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
          >
            {t.groomName}
          </motion.span>

          <p className="parents" style={{ marginTop: '0.5rem' }}>
            {t.groomParents}
          </p>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(212,168,67,0.3)', paddingTop: '1.5rem' }}>
            <p className="detail-line">
              <span className="highlight">{t.dateLabel}</span> {t.dateValue}
            </p>
            <p className="detail-line">
              <span className="highlight">{t.muhurthamLabel}</span> {t.muhurthamValue}
            </p>
            <p className="detail-line">
              <span className="highlight">{t.venueLabel}</span> {t.venueValue}
            </p>
            <p className="detail-line" style={{ fontSize: '0.95rem', opacity: 0.7 }}>
              {t.venueAddress}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default InvitationCard;
