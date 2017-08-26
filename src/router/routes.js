import { routes } from '../app'

export default [
  {
    path: '/',
    redirect: '/login',
    meta: { requireAuth: false }
  },
  ...routes
]
