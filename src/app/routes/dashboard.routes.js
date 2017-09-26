import beforeEnter from '../../router/before-enter'
import DashboardMain from '../dashboard/main.vue'
import DashboardTopics from '../topics/main.vue'
import TagsMain from '../tag/main.vue'
import TopicMain from '../topic-view/main.vue'
import CardMain from '../card-view/main.vue'
import MyCards from '../my-cards/main.vue'
import MyDeck from '../my-deck/main.vue'
import MyTopics from '../my-topics/main.vue'
import UserView from '../user-view/main.vue'
import Ranking from '../ranking/main.vue'
import CreateTopic from '../create-topic/main.vue'

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
  },
  {
    path: '/tag/:label',
    name: 'dashboard-tags',
    component: TagsMain,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/topic/:topic',
    name: 'dashboard-topic',
    component: TopicMain,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/card/:card',
    name: 'dashboard-card',
    component: CardMain,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/my-cards',
    name: 'my-card',
    component: MyCards,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/my-deck',
    name: 'my-deck',
    component: MyDeck,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/my-topics',
    name: 'my-topics',
    component: MyTopics,
    meta: { requireAuth: true },
    beforeEnter
  },
  {
    path: '/user/:user',
    name: 'user-view',
    component: UserView,
    meta: { requireAuth: false },
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
    path: '/create-topic',
    name: 'create-topic',
    component: CreateTopic,
    meta: { requireAuth: true },
    beforeEnter
  }
]
