<script>
  import { isNull, isUndefined } from 'lodash'

  import List from './list-avatars.vue'
  import Avatar from './avatar.vue'

  export default {
    name: 'update-avatar',
    components: {
      Avatar,
      List
    },
    props: {
      avatar_id: Number
    },
    data: () => ({
      avatar: 1,
      activeModal: false
    }),
    methods: {
      chooseAvatar (value) {
        this.$emit('choose-avatar', value)
        this.activeModal = false
      }
    },
    computed: {
      urlAvatar () {
        return (isNull(this.avatar_id) || isUndefined(this.avatar_id))
          ? 'static/avatars/placeholder.jpg'
          : `static/avatars/avatar${this.avatar_id}.jpg`
      }
    }
  }
</script>

<template>
  <div>
    <div
      class="avatar-container"
      @click="activeModal = true">
      <figure class="inner">
        <img :src="urlAvatar">
      </figure>
      <div class="bg">
        <b-icon
          pack="fa"
          icon="cogs"
          size="is-large" />
      </div>
    </div>
    <b-modal
      :active.sync="activeModal"
      @close="activeModal = false">
      <list @choose-avatar="chooseAvatar" />
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/extend";

  $length: 100px;

  .avatar-container {
    position: relative;
    width: $length;
    height: $length;
    background-color: #f1f1f1;
    margin: 0 auto $space - 5px auto;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      .bg {
        opacity: 1;
      }
    }

    .inner,
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      background-color: rgba(0, 0, 0, .3);
      transition: all 1s ease;
    }
  }
</style>
