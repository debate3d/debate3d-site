<script>
  import allModerators from '@/domains/user/services/querys/moderators.gql'
  import { RankingWrapper, rankingMixin } from '../helpers'

  export default {
    extends: RankingWrapper,
    mixins: [
      rankingMixin('moderators', 'all-moderators', allModerators, 'data.moderators')
    ]
  }
</script>
