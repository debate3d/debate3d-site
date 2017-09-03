<script>
  export default {
    name: 'topic-panel',
    props: ['user', 'position'],
    computed: {
      ponts () {
        return this.user.ponts
      },
      name () {
        return this.user.name.split(' ').slice(0, 2).join(' ')
      }
    }
  }
</script>

<template lang="html">
  <div class="box">
    <span class="tag is-primary is-medium is-rounded"> {{ position }} </span>
    <router-link :to="`/${user.uid}`" class="title is-5"> {{ user.name }} </router-link>
    <span class="tag is-info is-medium"> {{ user.ponts }} pts </span>
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
