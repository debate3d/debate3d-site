import dashboardChildren from './dashboard.routes'

export default [{
  path: '/login',
  name: 'login',
  component: () => import('../login/main'),
  meta: { requireAuth: false }
}, {
  path: '/register',
  name: 'register',
  component: () => import('../register/main'),
  meta: { requireAuth: false }
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('../root'),
  meta: { requireAuth: false },
  children: dashboardChildren
}]
