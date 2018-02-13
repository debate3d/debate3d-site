<script>
  import BoxUser from '@/domains/user/view/box-user'

  export default {
    name: 'render-topics',
    props: ['users', 'successMessage', 'errorMessage', 'column'],
    components: { BoxUser },
    computed: {
      count () {
        return this.users.count
      },
      records () {
        return this.users.records
      }
    }
  }
</script>

<template lang="html">
  <div>
    <p class="title is-5 has-text-centered" v-if="count > '0'">
      {{ successMessage }}
    </p>
    <p class="title is-5 has-text-centered" v-if="count === '0'">
      {{ errorMessage }}
    </p>
    <div class="columns is-multiline">
      <div class="column" :class="column" v-for="(user, index) in records">
        <box-user
          :key="index"
          :user="user" />
      </div>
    </div>
  </div>
</template>
