export default [
  {
    path: '/auth/login',
    name: 'auth-login',
    component: () => import('./login/main'),
    meta: { requireAuth: false }
  }, {
    path: '/auth/register',
    name: 'auth-register',
    component: () => import('./register/main'),
    meta: { requireAuth: false }
  }
]
