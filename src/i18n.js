import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Инициализация i18n для React
  .init({
    supportedLngs: ['en', 'ru', 'kz'], // Поддерживаемые языки
    fallbackLng: 'en', // Язык по умолчанию
    backend: {
      loadPath: '/translate/{{lng}}/{{ns}}.json', // Путь к файлам перевода
    },
    react: {
      useSuspense: true, // Включение Suspense
    },
  });

export default i18n;