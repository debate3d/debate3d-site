import dashboardChildren from './dashboard.routes'
import { authRoutes } from '../auth'
import DashboardComponent from '../root/main.vue'

export default [
  ...authRoutes,
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardComponent,
    meta: { requireAuth: false },
    children: dashboardChildren
  }
]
