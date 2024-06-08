import { type RouteDefinition } from '@solidjs/router'
import MainLayout from '../layouts/main-layout'
import Home from './home'
import KingdomBuilder from './kingdom-builder'

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
        path: '/kingdom',
        component: KingdomBuilder
      }
    ]
  }
]

export default routes
