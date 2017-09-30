import dashboardChildren from './dashboard.routes'
import { authRoutes } from '../auth'

export default [
  ...authRoutes,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../root/main.vue'),
    meta: { requireAuth: false },
    children: dashboardChildren
  }
]
