import { useLanguage } from './LanguageContext';
import translations from './translations';

const useT = () => {
  const { lang } = useLanguage();
  return translations[lang];
};

export default useT;
