<script>
  import { head, get, size } from 'lodash'
  import { mapGetters } from 'vuex'
  import followTopic from '../services/follow-topic'
  import { setLastRoute, EventBus } from '@/helpers'

  export default {
    name: 'follow-button',
    props: {
      topic: Object
    },
    data: () => ({
      btnDisabled: false
    }),
    computed: {
      ...mapGetters({
        user: 'getUser',
        topicFollowed: 'getTopicsFollowed'
      }),
      followed () {
        return head(this.followers.filter(item => {
          return item.uid_user === this.uidUser
        }))
      },
      uidTopic () {
        return get(this.topic, 'uid', '') || ''
      },
      uidUser () {
        return get(this.user, 'uid', '') || ''
      },
      label () {
        return this.followed ? 'Seguindo' : 'Seguir tópico'
      },
      followers () {
        return get(this.topic, 'followers', []) || []
      },
      followersCount () {
        return size(this.followers)
      }
    },
    methods: {
      follow () {
        if (this.btnDisabled) return

        if (!this.$__isLogged) {
          return setLastRoute(this.$route.path)
            .then(() => {
              return EventBus.$emit('open:login:modal')
            })
        }

        this.btnDisabled = true
        followTopic(this, this.uidUser, this.uidTopic)
          .then(() => {
            EventBus.$emit('refresh:apollo')
            this.btnDisabled = false
          })
      }
    }
  }
</script>

<template lang="html">
  <div class="follow-topic-buttom">
    <button
      class="button"
      :class="{ 'is-active': followed }"
      @click="follow"
      :disabled="btnDisabled">
      <b-icon pack="fa" icon="bell" @click.native="follow" />
      <span> {{ label }} | {{ followersCount }} seguidores </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend";

  .follow-topic-buttom .button {
    cursor: pointer;
    color: $orange;
    border-color: $orange;

    &.is-active {
      background-color: $orange;
      color: white;
    }
  }
</style>
