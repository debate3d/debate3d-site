/**
 * Return dashboard children routes
 */

export default [{
  path: '/dashboard',
  name: 'dashboard-main',
  component: () => import('../dashboard/main.vue'),
  meta: { requireAuth: true }
}]
