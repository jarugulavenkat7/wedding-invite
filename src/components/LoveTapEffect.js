import React, { useEffect, useState } from 'react';

const LoveTapEffect = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');

    const handlePointerDown = (event) => {
      if (!mediaQuery.matches) {
        return;
      }

      const heart = {
        id: `${Date.now()}-${Math.random()}`,
        x: event.clientX,
        y: event.clientY,
        drift: Math.random() * 36 - 18,
        scale: 0.9 + Math.random() * 0.45,
      };

      setHearts((current) => [...current, heart]);

      window.setTimeout(() => {
        setHearts((current) => current.filter((item) => item.id !== heart.id));
      }, 1100);
    };

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <div className="tap-love-layer" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="tap-love"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            '--tap-love-drift': `${heart.drift}px`,
            '--tap-love-scale': heart.scale,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
};

export default LoveTapEffect;