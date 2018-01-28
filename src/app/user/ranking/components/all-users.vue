<script>
  import allUsers from '@/domains/user/services/querys/all-users.gql'
  import { RankingWrapper, rankingMixin } from '../helpers'

  export default {
    extends: RankingWrapper,
    mixins: [
      rankingMixin('users', 'all-users', allUsers, 'data.users')
    ]
  }
</script>
