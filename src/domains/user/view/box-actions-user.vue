<script>
  import Avatar from '@/components/avatar'

  export default {
    name: 'box-actions-user',
    components: {
      Avatar
    },
    props: {
      user: Object,
      position: Number
    },
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
    <b-field>
      <b-checkbox v-model="userChoise">Basic</b-checkbox>
    </b-field>
    <avatar :number="user.avatar_id" :length="30" />
    <router-link
      :to="`/user/${user.uid}/detail`"
      class="title is-5"> {{ user.name }} </router-link>
    <span class="tag is-info is-medium"> {{ user.ponts }} pts </span>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/_extend";

  .box {
    position: relative;
    display: flex;
    align-items: center;

    .avatar {
      margin-right: 10px;
    }

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
