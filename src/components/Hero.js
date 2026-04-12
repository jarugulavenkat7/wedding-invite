import React, { memo, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import useT from '../useT';

const PETAL_EMOJIS = ['🌸', '🪷', '🌺', '💐', '🌼'];

const FloatingPetals = memo(() => {
  const petalConfigs = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 10,
      drift: Math.sin(i) * 60,
      rotate: 360 * (i % 2 === 0 ? 1 : -1),
      emoji: PETAL_EMOJIS[i % PETAL_EMOJIS.length],
    })),
    [],
  );

  return petalConfigs.map((petal) => (
    <motion.div
      key={petal.id}
      className="petal"
      style={{
        left: petal.left,
        top: '-5%',
        position: 'absolute',
      }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, petal.drift],
        rotate: [0, petal.rotate],
        opacity: [0, 0.5, 0.3, 0],
      }}
      transition={{
        duration: petal.duration,
        repeat: Infinity,
        delay: petal.delay,
        ease: 'linear',
      }}
    >
      {petal.emoji}
    </motion.div>
  ));
});

const Hero = () => {
  const t = useT();
  // Countdown to wedding date
  const weddingDate = new Date('2026-05-10T09:02:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const isTimeUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="hero" id="home">
      {/* Decorative borders */}
      <div className="hero-border" />
      <div className="hero-border-inner" />
      <div className="kolam-bg" />

      {/* Floating petals */}
      <FloatingPetals />

      {/* Previous leaf decoration kept here for reference
      <div className="hero-mango-leaves">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="mango-leaf"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            🍃
          </motion.span>
        ))}
      </div>
      */}

      {/* Auspicious text */}
      <motion.div
        className="hero-auspicious"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {t.auspicious}
      </motion.div>

      <motion.div
        className="hero-om"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
      >

      </motion.div>

      <motion.div
        className="hero-subtitle-top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {t.heroSubtitle}
      </motion.div>

      <motion.div
        className="hero-names"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 1, type: 'spring', stiffness: 80 }}
      >
        {t.heroName1}
        <span className="hero-ampersand">&</span>
        {t.heroName2}
      </motion.div>

      <motion.div
        className="hero-date"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {t.heroDate}
      </motion.div>

      {/* Countdown or Live Stream */}
      {isTimeUp ? (
        <motion.div
          className="celebration-live"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="celebration-message">{t.celebrationBegun}</h3>
          <a href="https://youtube.com/live/YOUR_LINK_HERE" target="_blank" rel="noopener noreferrer" className="watch-live-btn">
            {t.watchLive}
          </a>
        </motion.div>
      ) : (
        <motion.div
          className="countdown"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { val: timeLeft.days, label: t.days },
            { val: timeLeft.hours, label: t.hours },
            { val: timeLeft.minutes, label: t.minutes },
            { val: timeLeft.seconds, label: t.seconds },
          ].map((item, i) => (
            <div className="countdown-item" key={item.label}>
              <motion.span
                className="countdown-number"
                key={item.val}
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(item.val).padStart(2, '0')}
              </motion.span>
              <span className="countdown-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="scroll-text">{t.scrollDown}</span>
        <motion.span
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
