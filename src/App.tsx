import { type JSX } from 'solid-js'
import { Router } from '@solidjs/router'
import routes from './routes/route-config'
import './App.css'

function App (): JSX.Element {
  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App
