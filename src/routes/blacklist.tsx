import { For, type JSX } from 'solid-js'
import { useLanguage } from '../contexts/languageContext'
import { useData } from '../contexts/dataContext'
import styles from './blacklist.module.scss'

function Blacklist(): JSX.Element {
  const { t } = useLanguage()
  const { cards, expansions, blacklistCard } = useData()

  return (
    <>
      <h1>{t('Blacklist')}</h1>
      <ul aria-label={t('Expansions')} class={styles['expansion-list']}>
        <For each={expansions()}>
          {(expansion) => (
            <li>
              <details open>
                <summary>{expansion.name}</summary>

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
                          <input
                            id={card.name}
                            type="checkbox"
                            onChange={(e) => {
                              blacklistCard(card.name, e.target.checked)
                            }}
                            checked={card.blacklisted}
                          />
                        </li>
                      </>
                    )}
                  </For>
                </ul>
              </details>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}

export default Blacklist
