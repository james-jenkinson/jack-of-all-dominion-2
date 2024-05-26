import { type JSX, createContext, useContext } from 'solid-js'

interface Props {
  t: (value: string) => string
  children: JSX.Element
}

interface Context {
  t: (value: string) => string
}

const LanguageContext = createContext<Context>()

export function LanguageProvider (props: Props): JSX.Element {
  return (
    <LanguageContext.Provider value={{ t: props.t }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export function useLanguage (): Context {
  const context = useContext(LanguageContext)

  if (context == null) {
    throw new Error('Language context used out of scope. Ensure language context is provided.')
  }

  return context
}
