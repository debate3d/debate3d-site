<script>
  import { isEmpty } from 'lodash'

  export default {
    name: 'topic-panel',
    props: ['user', 'position'],
    computed: {
      hasUser () {
        return !isEmpty(this.user)
      },
      ponts () {
        return (this.hasUser) ? this.user.ponts : 0
      },
      name () {
        return (this.hasUser && !isEmpty(this.user.name)) ? this.user.name.split(' ').slice(0, 2).join(' ') : ''
      }
    }
  }
</script>

<template lang="html">
  <div class="box">
    <span class="tag is-primary is-medium is-rounded"> {{ position }} </span>
    <router-link :to="`/dashboard`" class="title is-5"> {{ name }} </router-link>
    <span class="tag is-info is-medium"> {{ ponts }} pts </span>
  </div>
</template>

<style scoped lang="scss">
  @import "../assets/sass/_extend";

  .box {
    position: relative;
    display: flex;
    align-items: center;

    > .tag.is-primary {
      margin: 0 $space / 2 0 0;
    }

    .title {
      margin-bottom: 0;
    }

    .tag:last-child {
      position: absolute;
      top: $space;
      right: 1.25rem;
    }
  }
</style>
