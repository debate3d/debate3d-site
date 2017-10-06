<script>
  import AppAvatar from '@/components/avatar.vue'

  export default {
    name: 'app-card-header',
    components: {
      AppAvatar
    },
    props: {
      author: Object
    },
    computed: {
      authorName () {
        const split = this.author.name.split(' ')
        return [split[0], split[1], split[2]].join(' ')
      },
      uidAuthor () {
        return this.author.uid
      }
    }
  }
</script>

<template lang="html">
  <div class="card-header">
    <app-avatar
      :number="author.avatar_id"
      :length="60"></app-avatar>
    <router-link :to="`/user/${uidAuthor}/detail`" class="card-header-title">
      {{ authorName }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .card-header {
    align-items: center;
    box-shadow: 0 1px 2px rgba(#000, 0.1);
    display: flex;
    padding: $space / 2 0 $space / 2 $space / 2;

    .card-header-title {
      color: $white;
      font-size: 22px;
    }

    .card-avatar {
      position: relative;
    }
  }
</style>
