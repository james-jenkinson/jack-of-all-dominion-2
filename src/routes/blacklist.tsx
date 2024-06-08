import { For, type JSX } from 'solid-js'
import { useLanguage } from '../contexts/languageContext'
import { useData } from '../contexts/dataContext'
import styles from './blacklist.module.scss'

function Blacklist(): JSX.Element {
  const { t } = useLanguage()
  const { cards, expansions } = useData()

  return (
    <>
      <h1>{t('Blacklist')}</h1>
      <ul aria-label={t('Expansions')} class={styles['expansion-list']}>
        <For each={expansions()}>
          {(expansion) => (
            <li>
              {expansion.name}

              <ul
                aria-label={t('Cards within {{expansion}}', {
                  expansion: expansion.name
                })}
              >
                <For each={cards().get(expansion.id)}>
                  {(card) => (
                    <>
                      <li class={styles['card-item']}>
                        <label for={card.name}>{card.name}</label>
                        <input id={card.name} type="checkbox" />
                      </li>
                    </>
                  )}
                </For>
              </ul>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}

export default Blacklist
