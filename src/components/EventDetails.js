import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useT from '../useT';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const EventDetails = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      className="events-section"
      id="events"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {t.eventsTitle}
      </motion.h2>
      <motion.p
        className="section-title-telugu"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {t.eventsSubtitle}
      </motion.p>

      <div className="events-grid">
        {t.events.map((event, i) => (
          <motion.div
            className="event-card"
            key={event.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.02 }}
          >
            <div className="event-icon">{event.icon}</div>
            <h3 className="event-name">{event.name}</h3>
            <p className="event-name-telugu">{event.nameSub}</p>
            <p className="event-date">
              <span className="label"></span>{event.date}
            </p>
            <p className="event-time">
              <span className="label"></span>{event.time}
            </p>
            <p className="event-venue">
              <span className="label"></span>{event.venue}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EventDetails;
