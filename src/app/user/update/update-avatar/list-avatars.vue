<script>
  import Avatar from './avatar.vue'

  export default {
    name: 'list-avatars',
    components: {
      Avatar
    },
    data: () => ({
      selected: 1
    }),
    methods: {
      choiseAvatar (value) {
        console.log(value)
        this.selected = value
      }
    }
  }
</script>

<template>
  <div class="list-avatars">
    <div class="box">
      <h4 class="title is-5 has-text-centered"> Escolha seu avatar </h4>
      <avatar
        v-for="number in 11"
        :key="number"
        :number="number"
        :active="selected === number"
        @update-select="value => selected = value"/>
      <div class="escape">
        <button
          class="button is-info"
          @click="$emit('choose-avatar', selected)"> Ok </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list-avatars {
    .box {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .title {
      width: 100%;
    }

    .escape {
      width: 100%;
      padding-left: 5px;
    }
  }
</style>
