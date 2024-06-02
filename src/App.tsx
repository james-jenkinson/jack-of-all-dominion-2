import { type JSX } from 'solid-js'
import { Router } from '@solidjs/router'
import routes from './routes/route-config'
import './App.css'
import { DataProvider } from './contexts/dataContext'

function App (): JSX.Element {
  return (
    <DataProvider>
      <Router base={import.meta.env.BASE_URL}>
        {routes}
      </Router>
    </DataProvider>
  )
}

export default App
