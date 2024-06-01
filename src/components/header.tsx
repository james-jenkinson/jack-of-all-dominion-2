import { A, useBeforeLeave } from '@solidjs/router'
import { Show, createEffect, createSignal, onCleanup, type JSX } from 'solid-js'
import { useLanguage } from '../contexts/languageContext'
import styles from './header.module.scss'

function Header (): JSX.Element {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = createSignal(false)
  const [homeRef, setHomeRef] = createSignal<HTMLAnchorElement>()

  createEffect(() => {
    const isMenuOpen = menuOpen()
    if (!isMenuOpen) {
      return
    }
    homeRef()?.focus()
  })

  const toggleMenu = (): void => { setMenuOpen((previousValue) => !previousValue) }
  const closeMenu = (): void => { setMenuOpen(false) }

  createEffect(() => {
    const onKeydown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') { closeMenu() }
    }
    document.addEventListener('keydown', onKeydown)
    onCleanup(() => { document.removeEventListener('keydown', onKeydown) })
  })

  useBeforeLeave(() => {
    closeMenu()
  })

  return (
    <header>
      <button
        class={`button-icon ${styles['menu-button']}`}
        onClick={toggleMenu}
        aria-expanded={menuOpen()}
      >{t('Open navigation menu')}</button>
      <Show when={(menuOpen())}>
        <nav class={styles.nav}>
          <button
            class={'button-icon close-button'}
            onClick={closeMenu}
          >{t('Close navigation menu')}</button>
          <div class={styles['navigation-items']}>
            <A href='/' ref={setHomeRef}>{t('Home')}</A>
            <A href='/page-2'>Page 2</A>
          </div>
        </nav>
        <div classList={{ [styles.backdrop]: menuOpen() }} onClick={closeMenu}></div>
      </Show>
    </header>
  )
}

export default Header
