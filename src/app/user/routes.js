import MeCards from './cards/main.vue'
import MeDeck from './deck/main.vue'
import MeTopics from './topics/main.vue'
import Detail from './detail/main.vue'
import Update from './update/main.vue'
import Ranking from './ranking/main.vue'
import TermsOfUse from './terms-of-use/main.vue'
import BeSubscriber from './subscriber/main.vue'
import Administrator from './administrator/main.vue'

export default beforeEnter => [
  {
    path: '/me/cards',
    name: 'me-cards',
    component: MeCards,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/me/deck',
    name: 'me-deck',
    component: MeDeck,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/me/topics',
    name: 'me-topics',
    component: MeTopics,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/user/:user/detail',
    name: 'user-detail',
    component: Detail,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/me/update',
    name: 'user-update',
    component: Update,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/terms-of-use',
    name: 'termos-de-uso',
    component: TermsOfUse,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/users/subscriber',
    name: 'seja-um-assinante',
    component: BeSubscriber,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/users/administrator',
    name: 'manager-users',
    component: Administrator,
    meta: { requireAuth: true },
    beforeEnter
  }
]
