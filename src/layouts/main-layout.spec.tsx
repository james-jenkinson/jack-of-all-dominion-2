import { render, screen } from '@solidjs/testing-library'
import MainLayout from './main-layout'
import { Route, Router } from '@solidjs/router'

describe('MainLayout', () => {
  it('should have text content', () => {
    render(() =>
      <Router>
        <Route path="/" component={MainLayout} />
      </Router>
    )

    const text = screen.getByText('This is the layout')
    expect(text).toBeInTheDocument()
  })
})
