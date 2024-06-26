import { For, type JSX } from 'solid-js'
import { useData } from '../contexts/dataContext'
import { useLanguage } from '../contexts/languageContext'
import styles from './home.module.scss'

function Home(): JSX.Element {
  const { expansions, selectExpansion } = useData()
  const { t } = useLanguage()

  return (
    <>
      <h1>{t('Set selection')}</h1>

      <div class={styles['selection-list']}>
        <For each={expansions()}>
          {(expansion) => {
            const id = `expansion-${expansion.name}`
            return (
              <>
                <label for={id}>{expansion.name}</label>
                <input
                  id={id}
                  type="checkbox"
                  onChange={(e) => {
                    selectExpansion(expansion.name, e.target.checked)
                  }}
                  checked={expansion.selected}
                ></input>
              </>
            )
          }}
        </For>
      </div>
    </>
  )
}

export default Home
