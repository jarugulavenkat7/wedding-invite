import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import useT from '../useT';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useT();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'te', label: 'తె' },
    { code: 'kn', label: 'ಕಂ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#invitation', label: t.navInvitation },
    { href: '#events', label: t.navEvents },
    { href: '#venue', label: t.navVenue },
    { href: '#gallery', label: t.navGallery },
    { href: '#rsvp', label: t.navRsvp },
  ];

  const closeMobile = () => setMobileOpen(false);

  const renderLanguageToggle = (className) => (
    <div className={className} role="group" aria-label="Language selector">
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          className={`lang-option ${lang === language.code ? 'active' : ''}`}
          onClick={() => setLang(language.code)}
          aria-pressed={lang === language.code}
        >
          {language.label}
        </button>
      ))}
    </div>
  );

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {mobileOpen && (
          <button
            className="mobile-menu-btn"
            onClick={closeMobile}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
            aria-label="Close menu"
          >
            ✕
          </button>
        )}
        {links.map((link, i) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              onClick={closeMobile}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
        <li>{renderLanguageToggle('lang-toggle desktop')}</li>
      </ul>

      {renderLanguageToggle('lang-toggle mobile')}
    </motion.nav>
  );
};

export default Navbar;
