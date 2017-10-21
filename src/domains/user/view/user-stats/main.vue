<script>
  import UserStatsQuery from '../../services/querys/user-stats.gql'
  import StatsCard from './card.vue'
  import { getActionsReceived, getActionsMade } from './helpers'

  export default {
    name: 'user-stats',
    components: {
      StatsCard
    },
    props: {
      uid: {
        type: String,
        default: '',
        required: true
      }
    },
    data: () => ({
      userStats: { }
    }),
    apollo: {
      userStats () {
        return {
          query: UserStatsQuery,
          variables () {
            return {
              uid: this.uid
            }
          }
        }
      }
    },
    computed: {
      actionsReceived () {
        return getActionsReceived(this)
      },
      actionsMade () {
        return getActionsMade(this)
      }
    }
  }
</script>

<template>
  <div class="box">
    <h2 class="title is-4"> Suas ações no Debate3D </h2>
    <h3 class="subtitle is-5"> Recebidos </h3>
    <div class="columns is-multiline is-centered">
      <!-- Actions Received -->
      <stats-card
        col="is-3"
        v-for="card in actionsReceived" :key="card.label"
        :status="card" />
    </div>
    <hr>
    <h3 class="subtitle is-5"> Suas contribuições </h3>
    <div class="columns is-multiline is-centered">
      <!-- Actions Received -->
      <stats-card
        col="is-4"
        v-for="card in actionsMade" :key="card.label"
        :status="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .columns {
    display: flex;
  }

  .section {
    padding: 10px;
    background-color: white;
    overflow-x: hidden;
  }
</style>
