import CardDetail from './detail/main.vue'

export default beforeEnter => [
  {
    path: '/card/:card/detail',
    name: 'card-detail',
    component: CardDetail,
    meta: { requireAuth: false },
    beforeEnter
  }
]
