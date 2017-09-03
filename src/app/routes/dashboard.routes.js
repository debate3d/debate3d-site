import beforeEnter from '../../router/before-enter'

/**
 * Return dashboard children routes
 */

export default [
  {
    path: '/dashboard',
    name: 'dashboard-main',
    component: () => import('../dashboard/main.vue'),
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/dashboard/topics',
    name: 'dashboard-topics',
    component: () => import('../topics/main.vue'),
    meta: { requireAuth: false },
    beforeEnter
  }
]
