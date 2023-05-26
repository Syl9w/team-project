import { RouteObject } from 'react-router'
import App from '../layout/App'
import Game from '../../features/game/game'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../../features/homePage/homePage'

export const routes: RouteObject[] = [
  { path: '/', element: <App />, children: [{ path: '', element: <Game /> },{ path: '/home', element: <HomePage /> }] },
]

export const router =createBrowserRouter(routes)