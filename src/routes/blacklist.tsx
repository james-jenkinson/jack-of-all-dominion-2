import { type JSX } from 'solid-js'
import { useLanguage } from '../contexts/languageContext'

function Blacklist(): JSX.Element {
  const { t } = useLanguage()

  return (
    <>
      <h1>{t('Blacklist')}</h1>
    </>
  )
}

export default Blacklist
