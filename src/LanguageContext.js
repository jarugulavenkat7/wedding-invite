import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

const supportedLanguages = ['en', 'te', 'kn'];

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const savedLanguage = window.localStorage.getItem('wedding-language');
    return supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('wedding-language', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      const currentIndex = supportedLanguages.indexOf(prev);
      return supportedLanguages[(currentIndex + 1) % supportedLanguages.length];
    });
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      supportedLanguages,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
