import TopicList from './list/main.vue'
import TopicDetail from './detail/main.vue'
import NewTopic from './new/main.vue'
import SearchTopic from './search/main.vue'
import EditTopic from './edit/main.vue'

export default beforeEnter => [
  {
    path: '/app/topic/list',
    name: 'topic-list',
    component: TopicList,
    meta: { requireAuth: false }
  },
  {
    path: '/app/topic/:topic/detail',
    name: 'topic-detail',
    component: TopicDetail,
    meta: { requireAuth: false }
  },
  {
    path: '/app/topic/new',
    name: 'topic-new',
    component: NewTopic,
    meta: { requireAuth: true }
  },
  {
    path: '/app/topic/search',
    name: 'topic-search',
    component: SearchTopic,
    meta: { requireAuth: false }
  },
  {
    path: '/app/topic/:topic/edit',
    name: 'topic-edit',
    component: EditTopic,
    meta: { requireAuth: true }
  }
]
