import dashboardChildren from './dashboard.routes'
import { authRoutes } from '../auth'
import DashboardComponent from '../root/main.vue'

export default [
  ...authRoutes,
  {
    path: '/app',
    name: 'dashboard',
    component: DashboardComponent,
    redirect: '/dashboard',
    children: dashboardChildren
  }
]
