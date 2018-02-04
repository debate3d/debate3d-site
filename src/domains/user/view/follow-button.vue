<script>
  import { head, get, size } from 'lodash'
  import { mapGetters } from 'vuex'
  import followUser from '../services/follow-user'
  import { setLastRoute, EventBus } from '@/helpers'

  export default {
    name: 'follow-button',
    props: {
      moderator: Object
    },
    data: () => ({
      btnDisabled: false
    }),
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      followed () {
        return head(this.followers.filter(item => {
          return item.uid_user === this.uidUser
        }))
      },
      uidModerator () {
        return get(this.moderator, 'uid', '') || ''
      },
      uidUser () {
        return get(this.user, 'uid', '') || ''
      },
      label () {
        return this.followed ? 'Seguindo' : 'Seguir moderador'
      },
      followers () {
        return get(this.moderator, 'followers', []) || []
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
        followUser(this, this.uidUser, this.uidModerator)
          .then(() => {
            EventBus.$emit('refresh:apollo')
            this.btnDisabled = false
          })
      }
    }
  }
</script>

<template lang="html">
  <div class="follow-user-buttom">
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

  .follow-user-buttom {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .follow-user-buttom .button {
    cursor: pointer;
    color: $orange;
    border-color: $orange;

    &.is-active {
      background-color: $orange;
      color: white;
    }
  }
</style>
