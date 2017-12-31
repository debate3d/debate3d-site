import MeCards from './cards/main.vue'
import MeDeck from './deck/main.vue'
import MeTopics from './topics/main.vue'
import Detail from './detail/main.vue'
import Update from './update/main.vue'
import Ranking from './ranking/main.vue'
import TermsOfUse from './terms-of-use/main.vue'
import BeSubscriber from './subscriber/main.vue'
import Administrator from './administrator'
import UserSearch from './search/main.vue'

export default beforeEnter => [
  {
    path: '/app/me/cards',
    name: 'me-cards',
    component: MeCards,
    meta: { requireAuth: true }
  },
  {
    path: '/app/me/deck',
    name: 'me-deck',
    component: MeDeck,
    meta: { requireAuth: true }
  },
  {
    path: '/app/me/topics',
    name: 'me-topics',
    component: MeTopics,
    meta: { requireAuth: true }
  },
  {
    path: '/app/user/:user/detail',
    name: 'user-detail',
    component: Detail,
    meta: { requireAuth: false }
  },
  {
    path: '/app/me/update',
    name: 'user-update',
    component: Update,
    meta: { requireAuth: true }
  },
  {
    path: '/app/ranking',
    name: 'ranking',
    component: Ranking,
    meta: { requireAuth: false }
  },
  {
    path: '/app/terms-of-use',
    name: 'termos-de-uso',
    component: TermsOfUse,
    meta: { requireAuth: false }
  },
  {
    path: '/app/users/subscriber',
    name: 'seja-um-assinante',
    component: BeSubscriber,
    meta: { requireAuth: true }
  },
  {
    path: '/app/users/administrator',
    name: 'manager-users',
    component: Administrator,
    meta: { requireAuth: true }
  },
  {
    path: '/app/user/search',
    name: 'search-users',
    component: UserSearch,
    meta: { requireAuth: false }
  }
]
