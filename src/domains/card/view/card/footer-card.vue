<script>
  import LikeButton from './like-button.vue'
  import DislikeButton from './dislike-button.vue'
  import FavoriteButton from './favorite-button.vue'
  import Comments from './comments.vue'
  import AppTabsModal from './modal-tabs.vue'

  export default {
    props: {
      card: Object,
      url: String,
      isMyArgument: Boolean
    },
    components: {
      LikeButton,
      DislikeButton,
      FavoriteButton,
      Comments,
      AppTabsModal
    },
    methods: {
      refresh () {
        this.$emit('refresh')
      }
    },
    mounted () {
      if (window !== undefined && window.FB !== undefined) {
        window.FB.XFBML.parse()
      }
    }
  }
</script>

<template lang="html">
  <footer class="card-footer">
    <like-button
      :card="card"
      class="card-footer-item"
      @showLike="$refs.modal.openModal(0)" />

    <dislike-button
      :card="card"
      class="card-footer-item"
      @showDislike="$refs.modal.openModal(1)" />

    <favorite-button
      :card="card"
      class="card-footer-item"
      @showFavorite="$refs.modal.openModal(2)"
      @refresh="refresh"/>

    <Comments :url="url" class="card-footer-item" />

    <app-tabs-modal ref="modal" :card="card"></app-tabs-modal>
  </footer>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .card-footer {
    width: 100%;
    display: flex;
    align-items: stretch;
    border-top: 1px solid $border;
    background-color: rgba(221, 220, 220, 0.59);
  }

  .card-footer-item {
    align-items: center;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    padding: 0.75rem;
    font-size: 1.3em;
    font-weight: 500;

    &:not(:last-child) {
      border-right: 1px solid $border;
    }

    .vote {
      margin-left: .4em;
    }

    a,
    span {
      color: #949494;
    }

    .positive:hover span,
    .card-footer-item:hover .positive + .vote,
    .positive.is-active + .vote,
    .positive.is-active span {
      color: #009a00;
    }

    .negative:hover span,
    .card-footer-item:hover .negative + .vote,
    .negative.is-active + .vote,
    .negative.is-active span {
      color: #ff4a4a;
    }

    .favorited:hover span,
    .card-footer-item:hover .favorited + .vote,
    .favorited.is-active + .vote,
    .favorited.is-active span {
      color: #EBE000;
    }
  }
</style>
