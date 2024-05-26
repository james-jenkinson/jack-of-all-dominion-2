import { type JSX } from 'solid-js'
import './App.css'
import { useLanguage } from './contexts/languageContext'

function App (): JSX.Element {
  const { t } = useLanguage()

  return (
    <>
      <h1>Hello</h1>
      <p>
        {t('Test not working :(')}
      </p>
    </>
  )
}

export default App
