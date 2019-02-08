import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

// the translations
import translationEN1 from './locales/en-GB/page1.json';
import translationEN2 from './locales/en-GB/page2.json';
import commonsEN from './locales/en-GB/common.json';
import translationDE1 from './locales/de/page1.json';
import translationDE2 from './locales/de/page2.json';
import commonsDE from './locales/de/common.json';
import commonsCN from './locales/zh-CN/common.json';

const resources = {
  en: {
    page1: translationEN1,
    page2: translationEN2,
    commons: commonsEN,
  },
  de: {
    page1: translationDE1,
    page2: translationDE2,
    commons: commonsDE,
  },
  cn: {
    commons: commonsCN,
  },
};

// config
i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['page1', 'page2'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  });
export default i18n;
