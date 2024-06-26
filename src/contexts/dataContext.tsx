import {
  type JSX,
  type ParentProps,
  createContext,
  createSignal,
  useContext,
  type Accessor
} from 'solid-js'
import { type Card, type Expansion } from '../data'
import database, { addInitialData } from '../data/database'

const noop = (): void => {}

type ExpansionId = number

type ExpansionWithId = Expansion & { id: ExpansionId }

interface Context {
  expansions: Accessor<ExpansionWithId[]>
  cards: Accessor<Map<ExpansionId, Card[]>>
  availableCards: Accessor<Card[]>
  selectExpansion: (name: string, selected: boolean) => void
  blacklistCard: (name: string, blacklisted: boolean) => void
}

const defaultValue: Context = {
  expansions: createSignal([])[0],
  cards: createSignal(new Map<ExpansionId, Card[]>())[0],
  availableCards: createSignal([])[0],
  selectExpansion: noop,
  blacklistCard: noop
}

const DataContext = createContext<Context>(defaultValue)

export function DataProvider(props: ParentProps): JSX.Element {
  const [expansions, setExpansions] = createSignal<
    Array<Expansion & { id: number }>
  >([])
  const [cards, setCards] = createSignal<Map<ExpansionId, Card[]>>(new Map())

  const initialData = addInitialData()

  initialData
    .then(async () => await database.table('expansions').toArray())
    .then(setExpansions)
    .catch(console.error)

  const indexCards = (cards: Card[]): Map<ExpansionId, Card[]> => {
    return cards.reduce<Map<ExpansionId, Card[]>>((prev, next) => {
      if (prev.get(next.expansionId) == null) {
        prev.set(next.expansionId, [])
      }
      prev.get(next.expansionId)?.push(next)
      return prev
    }, new Map())
  }

  initialData
    .then(async () => await database.table<Card>('cards').toArray())
    .then(indexCards)
    .then(setCards)
    .catch(console.error)

  const selectExpansion = async (
    name: string,
    selected: boolean
  ): Promise<void> => {
    await database
      .table('expansions')
      .where('name')
      .equals(name)
      .modify({ selected })
    setExpansions(await database.table('expansions').toArray())
  }

  const blacklistCard = async (
    cardName: string,
    blacklisted: boolean
  ): Promise<void> => {
    await database
      .table('cards')
      .where('name')
      .equals(cardName)
      .modify({ blacklisted })
    setCards(indexCards((await database.table('cards').toArray()) as Card[]))
  }

  const availableCards = (): Card[] => {
    const _cards = cards()
    const selectedExpansions = expansions().filter(
      (expansion) => expansion.selected
    )
    const cardsFromSelectedExpansions = selectedExpansions
      .map((expansion) => _cards.get(expansion.id) ?? [])
      .flat()
      .filter((card) => !card.blacklisted)
    return cardsFromSelectedExpansions
  }

  return (
    <DataContext.Provider
      value={{
        expansions,
        cards,
        selectExpansion: (name, selected) => {
          void selectExpansion(name, selected)
        },
        availableCards,
        blacklistCard: (name, blacklisted) => {
          void blacklistCard(name, blacklisted)
        }
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export function useData(): Context {
  return useContext(DataContext)
}
