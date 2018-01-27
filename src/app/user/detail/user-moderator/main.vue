<script>
  import * as Components from '../components'
  import UserStats from '@/domains/user/view/user-stats/main.vue'
  import { gt, get, isEmpty } from 'lodash'

  export default {
    name: 'app-user-moderator-detail',
    props: {
      user: {
        type: Object,
        default: () => ({ })
      }
    },
    computed: {
      hasCards () {
        return gt(get(this.user, 'cards.count'), 0)
      },
      bannerUrl () {
        const { banner_url } = this.user // eslint-disable-line camelcase
        return isEmpty(banner_url)
          ? 'http://fakeimg.pl/1360x350/'
          : banner_url // eslint-disable-line camelcase
      }
    },
    components: {
      UserStats,
      ...Components
    }
  }
</script>

<template lang="html">
  <div class="user-detail">
    <figure class="image user-detail__image">
      <img :src="bannerUrl" aria-hidden="true" alt="">
    </figure>

    <div class="columns user-info">

      <div class="column is-5">
        <user-info :user="user" />
      </div>

      <div class="column is-7">
        <user-stats :uid="user.uid" />
      </div>
    </div>

    <template v-if="hasCards">
      <div class="columns">

        <div class="column is-6">
          <user-cards :user="user" />
        </div>

        <div class="column is-6">
          <user-topics :user="user" :col="10" />
        </div>
      </div>
    </template>

    <template v-if="!hasCards">
      <user-topics :user="user" />
    </template>
  </div>
</template>

<style media="screen" lang="scss" scoped>
  .user-detail {
    position: relative;
    padding: 20px;

    .user-detail__image {
      width: 100%;

      @media (max-width: 768px) {
        min-height: 130px;

        img {
          min-height: 130px;
        }
      }
    }

    .user-info {
      position: relative;

      @media (min-width: 768px) {
        min-height: 100px;
        top: -50px;
      }
    }
  }
</style>
