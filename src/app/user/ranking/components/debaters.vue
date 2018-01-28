<script>
  import allDebaters from '@/domains/user/services/querys/debaters.gql'
  import { RankingWrapper, rankingMixin } from '../helpers'

  export default {
    extends: RankingWrapper,
    mixins: [
      rankingMixin('debaters', 'all-debaters', allDebaters, 'data.debaters')
    ]
  }
</script>
