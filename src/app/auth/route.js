export default [
  {
    path: '/auth',
    name: 'auth.root',
    redirect: { name: 'auth.login' },
    component: () => import('../../layouts/auth'),
    children: [
      {
        path: '/auth/login',
        name: 'auth.login',
        component: () => import('./login')
      },
      {
        path: '/auth/register',
        name: 'auth.register',
        component: () => import('./register')
      }
    ]
  }
]
