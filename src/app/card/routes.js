import CardDetail from './detail/main.vue'

export default beforeEnter => [
  {
    path: '/app/card/:card/detail',
    name: 'card-detail',
    component: CardDetail,
    meta: { requireAuth: false }
  }
]
