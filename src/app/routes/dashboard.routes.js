import beforeEnter from '../../router/before-enter'
import { topicRoutes } from '../topic'
import { userRoutes } from '../user'
import { cardRoutes } from '../card'
import { tagRoutes } from '../tag'
import DashboardMain from '../dashboard/main.vue'
import { finishRoute } from '../auth/routes'

/**
 * Return dashboard children routes
 */
export default [
  ...topicRoutes(beforeEnter),
  ...userRoutes(beforeEnter),
  ...cardRoutes(beforeEnter),
  ...tagRoutes(beforeEnter),
  finishRoute,
  {
    path: '/dashboard',
    name: 'dashboard-main',
    component: DashboardMain,
    meta: { requireAuth: false }
  }
]
