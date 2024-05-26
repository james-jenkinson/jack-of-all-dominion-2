import { type RouteDefinition } from '@solidjs/router'
import MainLayout from '../layouts/main-layout'
import Home from './home'
import Page2 from './page-2'

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/page-2',
        component: Page2
      }
    ]
  }
]

export default routes
