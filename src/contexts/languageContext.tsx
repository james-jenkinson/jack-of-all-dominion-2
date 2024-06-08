import { type JSX, createContext, useContext } from 'solid-js'

interface Props {
  t: (value: string) => string
  children: JSX.Element
}

interface Context {
  t: (value: string) => string
}

const defaultValue: Context = {
  t: (value) => value
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
