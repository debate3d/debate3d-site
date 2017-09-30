import TagsMain from './detail/main.vue'

export default beforeEnter => [
  {
    path: '/tag/:label',
    name: 'dashboard-tags',
    component: TagsMain,
    meta: { requireAuth: false },
    beforeEnter
  }
]
