import { For, type JSX } from 'solid-js'
import { useLanguage } from '../contexts/languageContext'
import kingdomBuilderService from '../services/kingdom-builder.service'
import { useData } from '../contexts/dataContext'
import { type Card } from '../data'

function KingdomBuilder (): JSX.Element {
  const { t } = useLanguage()
  const { availableCards } = useData()

  const kingdom = (): Card[] => {
    const cards = availableCards()
    return kingdomBuilderService.buildKingdom(cards)
  }

  return (
    <>
      <h1>{t('Kingdom Builder')}</h1>
      <ul>
        <For each={kingdom()}>{card => (
          <li>{card.name}</li>
        )}
        </For>
      </ul>
    </>
  )
}

export default KingdomBuilder
