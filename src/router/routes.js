import { AuthRoutes } from '../app/auth'

export default [
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  },
  {
    path: '/',
    redirect: { name: 'auth.root' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/dashboard')
  },
  ...AuthRoutes
]
