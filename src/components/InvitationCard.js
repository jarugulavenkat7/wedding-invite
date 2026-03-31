import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const InvitationCard = () => {
  const { lang } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Use Telugu image for Telugu and Kannada, English image for English
  const imageSrc = lang === 'en' 
    ? `${PUBLIC_URL}/english.jpg` 
    : `${PUBLIC_URL}/telugu.jpg`;

  const imageAlt = lang === 'en'
    ? 'Wedding Invitation - Sushmitha & Naresh Kumar'
    : lang === 'te'
    ? 'వివాహ శుభలేఖ - సుష్మిత & నరేష్ కుమార్'
    : 'ಮದುವೆ ಆಮಂತ್ರಣ - ಸುಷ್ಮಿತಾ & ನರೇಶ್ ಕುಮಾರ್';

  return (
    <section className="invitation-section" id="invitation" ref={ref}>
      <motion.div
        className="invitation-image-card"
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Decorative border frame */}
        <div className="invitation-image-frame">
          {/* Corner ornaments */}
          <span className="frame-corner top-left">❋</span>
          <span className="frame-corner top-right">❋</span>
          <span className="frame-corner bottom-left">❋</span>
          <span className="frame-corner bottom-right">❋</span>
          
          {/* Side ornaments */}
          <span className="frame-side side-top">✦ ✦ ✦</span>
          <span className="frame-side side-bottom">✦ ✦ ✦</span>
          
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="invitation-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationCard;
