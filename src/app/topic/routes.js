import TopicList from './list/main.vue'
import TopicDetail from './detail/main.vue'
import NewTopic from './new/main.vue'

export default beforeEnter => [
  {
    path: '/topic/list',
    name: 'topic-list',
    component: TopicList,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/topic/:topic/detail',
    name: 'topic-detail',
    component: TopicDetail,
    meta: { requireAuth: false },
    beforeEnter
  },
  {
    path: '/topic/new',
    name: 'topic-new',
    component: NewTopic,
    meta: { requireAuth: true },
    beforeEnter
  }
]
