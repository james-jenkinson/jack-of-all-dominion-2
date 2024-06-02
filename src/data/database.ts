import { Dexie } from 'dexie'
import expansions from './expansions'
import cards from './cards'

const versionNumber = 1

const database = new Dexie('dominion')
database.version(versionNumber).stores({
  expansions: '++id, &name',
  cards: '++id, &name, expansionId'
})

async function addInitialData (): Promise<void> {
  const expansionsTable = database.table('expansions')
  const cardsTable = database.table('cards')

  for (const expansion of expansions) {
    const existing = await expansionsTable.get({ name: expansion.name })
    if (existing == null) {
      await expansionsTable.add(expansion)
    }
  }

  for (const card of cards) {
    const existing = await cardsTable.get({ name: card.name })
    if (existing != null) {
      continue
    }

    const expansion = await expansionsTable.get({ name: card.expansionName })

    if (expansion == null) {
      throw new Error(`Card is set with an expansion name that does not exist, please check, card: ${card.name}, expansion: ${card.expansionName}`)
    }

    const expansionId = expansion.id
    await cardsTable.add({
      name: card.name,
      expansionId
    })
  }
}

addInitialData().catch(console.error)

export default database
