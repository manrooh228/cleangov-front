import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend'; // Подключение backend для загрузки переводов
import LanguageDetector from 'i18next-browser-languagedetector'; // Для автоматического определения языка

i18n
  .use(HttpApi)
  .use(initReactI18next) // Инициализация i18n для React
  .init({
    lng: "en",
    supportedLngs: ['en', 'ru', 'kz'], // Поддерживаемые языки
    nonExplicitWhitelist: true,
    allbackLng: 'ru', 
    backend: {
      loadPath: 'locales/{{lng}}/translation.json', // Путь к файлам перевода
    },
    react: {
      useSuspense: true, // Включение Suspense
    },
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;