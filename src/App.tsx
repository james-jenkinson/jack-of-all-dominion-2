import { type JSX } from 'solid-js'
import { Router } from '@solidjs/router'
import routes from './routes/route-config'
import './App.css'

function App (): JSX.Element {
  return (
    <Router base={import.meta.env.BASE_URL}>
      {routes}
    </Router>
  )
}

export default App
