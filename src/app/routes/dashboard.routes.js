import beforeEnter from '../../router/before-enter'
import DashboardMain from '../dashboard/main.vue'
import DashboardTopics from '../topics/main.vue'

/**
 * Return dashboard children routes
 */

export default [
  {
    path: '/dashboard',
    name: 'dashboard-main',
    component: DashboardMain,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/dashboard/topics',
    name: 'dashboard-topics',
    component: DashboardTopics,
    meta: { requireAuth: false },
    beforeEnter
  }
]
