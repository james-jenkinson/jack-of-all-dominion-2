import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/testing-library'
import { type Component } from 'solid-js'

export function renderWithRouter (ComponentToRender: Component): void {
  render(() =>
      <Router>
        <Route path="/" component={ComponentToRender} />
      </Router>
  )
}
