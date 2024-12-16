import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import vi from './locales/vi.json'
import ja from './locales/ja.json'

const messages = {
  en,
  vi,
  ja,
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export default i18n
