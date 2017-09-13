<script>
  import queryMiniCard from '../../services/querys/mini-card.gql'

  export default {
    data () {
      return {
        card: {}
      }
    },
    apollo: {
      card () {
        return {
          query: queryMiniCard,
          variables () {
            return {
              uid: '382644a1-59c5-40d0-9bea-a43c7c293e08'
            }
          }
        }
      }
    }
  }
</script>

<template lang="html">

</template>
