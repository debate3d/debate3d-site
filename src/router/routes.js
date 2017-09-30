import routes from '../app/routes'

export default [
  {
    path: '/',
    redirect: '/auth/login',
    meta: { requireAuth: false }
  },
  ...routes
]
