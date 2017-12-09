<script>
  import { get } from 'lodash'
  import { mapGetters } from 'vuex'

  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'

  export default {
    components: { AppAvatar, SharedList },
    props: {
      topic: Object
    },
    data: () => ({
      isPublic: false
    }),
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      author () {
        return get(this.topic, 'author', { })
      },
      hasAuthor () {
        return this.user.uid === this.author.uid
      }
    }
  }
</script>

<template lang="html">
  <div class="card">
    <div class="card-header">
      <b-dropdown v-model="isPublic" v-if="hasAuthor">
        <span class="icon is-medium" slot="trigger">
          <i class="fa fa-ellipsis-v fa-lg"></i>
        </span>

        <b-dropdown-item :value="true">
          <router-link
            class="button is-info is-fullwidth"
            :to="`/app/topic/${topic.nickname}/edit`">
            Editar
          </router-link>
        </b-dropdown-item>
      </b-dropdown>

      <p class="card-header-title">
        <router-link :to="`/app/user/${author.nickname}/detail`">
          {{ author.name }}
        </router-link>
      </p>
    </div>
    <div class="card-content">
      <app-avatar
        :number="author.avatar_id"
        :length="100"></app-avatar>
      <div class="content has-text-centered">
        Email: {{ author.email }}
      </div>
      <shared-list :user="author"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    .card-header-title {
      justify-content: center;
    }

    .avatar {
      display: block;
      margin: 0 auto;
    }

    .dropdown {
      position: absolute;
      top: 8px;
      left: 0;

      .dropdown-content {
        border-radius: 0;
        box-shadow: none;
        padding: 0;
      }

      a.dropdown-item {
        padding: 2px;
        white-space: nowrap;
      }
    }
  }
</style>
