import { type JSX, createContext, useContext } from 'solid-js'
import { type TFunction } from 'i18next'

interface Props {
  t: TFunction
  children: JSX.Element
}

interface Context {
  t: TFunction
}

const defaultValue: Context = {
  // @ts-expect-error Issue with i18n types
  t: (value) => value.toString()
}

const LanguageContext = createContext<Context>(defaultValue)

export function LanguageProvider(props: Props): JSX.Element {
  return (
    <LanguageContext.Provider value={{ t: props.t }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): Context {
  return useContext(LanguageContext)
}
