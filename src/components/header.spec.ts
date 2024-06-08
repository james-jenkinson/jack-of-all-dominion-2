import { screen, waitFor } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import Header from './header'
import { renderWithRouter } from '../tests'

describe('Header', () => {
  describe('When first loaded', () => {
    it('should not have the navigation menu', () => {
      renderWithRouter(Header)

      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    })
  })

  describe('After clicking the menu button', () => {
    it('should include the navigation menu', async () => {
      renderWithRouter(Header)

      const button = screen.getByRole('button', {
        name: 'Open navigation menu'
      })

      await userEvent.click(button)

      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('Should dismiss the menu with the escape button', async () => {
      renderWithRouter(Header)

      const button = screen.getByRole('button', {
        name: 'Open navigation menu'
      })

      await userEvent.click(button)

      await waitFor(() => screen.getByRole('navigation'))

      await userEvent.keyboard('{Escape}')

      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    })
  })
})
