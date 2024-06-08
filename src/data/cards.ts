import { type Card } from '.'
import { type Card as ExpansionCard } from './expansionCards/ExpansionCard'
import dominionCards from './expansionCards/dominion'
import empiresCards from './expansionCards/empires'
import renaissanceCards from './expansionCards/renaissance'

type CardWithExpansionName = Omit<Card, 'expansionId'> & {
  expansionName: string
}

const addExpansionName =
  (expansionName: string) =>
  (cardWithoutExpansion: ExpansionCard): CardWithExpansionName => {
    return {
      ...cardWithoutExpansion,
      expansionName,
      blacklisted: false
    }
  }

const cards: CardWithExpansionName[] = [
  ...dominionCards.map(addExpansionName('Dominion')),
  ...renaissanceCards.map(addExpansionName('Renaissance')),
  ...empiresCards.map(addExpansionName('Empires'))
]

export default cards
