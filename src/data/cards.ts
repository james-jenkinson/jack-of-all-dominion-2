import { type Card } from './Card'
import dominionCards from './expansionCards/dominion'
import renaissanceCards from './expansionCards/renaissance'

type CardWithoutExpansion = Omit<Card, 'expansionId'>
type CardWithExpansionName = CardWithoutExpansion & { expansionName: string }

const addExpansionName = (expansionName: string) => (cardWithoutExpansion: CardWithoutExpansion): CardWithExpansionName => {
  return {
    ...cardWithoutExpansion,
    expansionName
  }
}

const cards: CardWithExpansionName[] = [
  ...dominionCards.map(addExpansionName('Dominion')),
  ...renaissanceCards.map(addExpansionName('Renaissance'))
]

export default cards
