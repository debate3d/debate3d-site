<script>
  export default {
    props: ['user']
  }
</script>

<template lang="html">
  <li>
    <b-icon icon="user" pack="fa" size="is-medium"></b-icon>
    <router-link
      class="subtitle"
      :to="`/user/${user.uid}/detail`"> {{ user.name }} </router-link>
  </li>
</template>

<style lang="scss" scoped>
  li {
    margin: 10px 0;
  }

  .avatar {
    width: 40px;
    height: 40px;
    display: inline-block;
  }
</style>
