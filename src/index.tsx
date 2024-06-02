/* @refresh reload */
import { render } from 'solid-js/web'
import translations from 'virtual:i18next-loader'

import './index.scss'
import App from './App'
import database from './data/database'

import i18n, { type Resource } from 'i18next'
import { LanguageProvider } from './contexts/languageContext'

console.log('JJ: Database', database)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!

const resources = Object.keys(translations as Record<string, unknown>).reduce<Resource>((prev, next) => {
  prev[next] = { translation: translations[next] }
  return prev
}, {})

i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources
}).then((t) => {
  render(() => (
    <LanguageProvider t={t}>
      <App />
    </LanguageProvider>
  ), root)
}).catch(console.error)
