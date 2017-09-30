<script>
  export default {
    name: 'app-card-header',
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
    <router-link :to="`/user/${uidAuthor}/detail`" class="card-header-title">
      {{ authorName }}
    </router-link>
  </div>
</template>

<style lang="scss">
  @import "../../../../assets/sass/_extend";

  .card-header {
    align-items: center;
    box-shadow: 0 1px 2px rgba(#000, 0.1);
    display: flex;

    .card-header-title {
      color: $text-strong;
      font-size: 22px;
    }

    .card-avatar {
      position: relative;
    }
  }
</style>
