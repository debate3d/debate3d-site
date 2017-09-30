import { topicMenu } from './topic'
import { userMenu } from './user'
import { dashMenu } from './dashboard'

export default [
  ...dashMenu,
  ...topicMenu,
  ...userMenu
]
