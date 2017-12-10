import TagsMain from './detail/main.vue'

export default beforeEnter => [
  {
    path: '/app/tag/:label',
    name: 'dashboard-tags',
    component: TagsMain,
    meta: { requireAuth: false }
  }
]
