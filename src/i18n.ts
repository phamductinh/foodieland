import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import vi from './locales/vi.json'
import ja from './locales/ja.json'

const messages = {
  en,
  vi,
  ja,
}

const savedLanguage = localStorage.getItem('language') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  messages,
})

export default i18n
