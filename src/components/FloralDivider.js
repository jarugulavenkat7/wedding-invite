import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FloralDivider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="floral-divider" ref={ref}>
      <span
        className="line"
        style={{
          width: inView ? 100 : 0,
          transition: 'width 0.6s ease-out',
        }}
      />
      <span
        className="ornament"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0)',
          transition: 'opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s',
        }}
      >
        ❁
      </span>
      <span
        className="ornament"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0)',
          transition: 'opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s',
        }}
      >
        ✦
      </span>
      <span
        className="ornament"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0)',
          transition: 'opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s',
        }}
      >
        ❁
      </span>
      <span
        className="line"
        style={{
          width: inView ? 100 : 0,
          transition: 'width 0.6s ease-out',
        }}
      />
    </div>
  );
};

export default FloralDivider;
