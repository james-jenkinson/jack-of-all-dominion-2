import { type Card } from '../data'

function buildKingdom(cards: Card[]): Card[] {
  return [...cards].splice(0, 10)
}

const kingdomBuilderService = {
  buildKingdom
}

export default kingdomBuilderService
