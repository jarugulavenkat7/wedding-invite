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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

  const links = [
    { href: '#invitation', label: t.navInvitation },
    { href: '#events', label: t.navEvents },
    { href: '#venue', label: t.navVenue },
    { href: '#rsvp', label: t.navRsvp },
  ];

  const closeMobile = () => setMobileOpen(false);

  const renderLinks = () => (
    <ul className="nav-links" id="primary-navigation">
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
  );

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
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          type="button"
          className={`mobile-menu-btn ${mobileOpen ? 'is-hidden' : ''}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
        >
          ☰
        </button>

        <div className="nav-menu desktop-nav">
          {renderLinks()}
        </div>

        {renderLanguageToggle('lang-toggle mobile')}
      </motion.nav>

      {mobileOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="nav-menu mobile-open">
            {renderLinks()}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
