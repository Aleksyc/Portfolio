import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createI18n } from 'vue-i18n'

import fr from './locales/fr.json'
import en from './locales/en.json'
import 'flag-icons/css/flag-icons.min.css'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    en
  }
} as any)

createApp(App).use(i18n).mount('#app')
