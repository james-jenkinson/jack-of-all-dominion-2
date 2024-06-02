import { type JSX, type ParentProps, createContext, createSignal, useContext, type Accessor } from 'solid-js'
import { type Expansion } from '../data'
import database from '../data/database'

interface Context {
  expansions: Accessor<Expansion[]>
}

const defaultValue: Context = {
  expansions: createSignal([])[0]
}

const DataContext = createContext<Context>(defaultValue)

export function DataProvider (props: ParentProps): JSX.Element {
  const [expansions, setExpansions] = createSignal<Expansion[]>([])

  database.table('expansions')
    .toArray()
    .then((values) => {
      console.log('JJ: Expansion values', values)
      setExpansions(values)
    })
    .catch(console.error)

  return (
    <DataContext.Provider value={{
      expansions
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export function useData (): Context {
  return useContext(DataContext)
}
