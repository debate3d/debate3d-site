import routes from '../app/routes'

export default [
  {
    path: '/',
    redirect: '/login',
    meta: { requireAuth: false }
  },
  ...routes
]
