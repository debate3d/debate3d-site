<template lang="html">
  <b-modal :active.sync="activeModal">
    <div class="box">
      <h3 class="subtitle"> Dados do Card de {{ card.author.name }} </h3>

      <b-tabs
        v-model="activeTab"
        type="is-boxed"
        position="is-centered"
        expanded>

        <b-tab-item label="Likes" icon="thumbs-up" pack="fa">
          <p v-if="!hasLikes">
            Nenhuma pessoa gostou do card ainda
          </p>
          <ul v-if="hasLikes">
            <user-list
              v-for="(like, key) in likes"
              :user="like.user"
              :key="key"></user-list>
          </ul>
        </b-tab-item>

        <b-tab-item label="Dislikes" icon="thumbs-down" pack="fa">
          <p v-if="!hasDislikes">
            Nenhuma pessoa não gostou do card ainda
          </p>
          <ul v-if="hasDislikes">
            <user-list
              v-for="(dislike, key) in dislikes"
              :user="dislike.user"
              :key="key"></user-list>
          </ul>
        </b-tab-item>

        <b-tab-item label="Favorites" icon="star" pack="fa">
          <p v-if="!hasFavorites">
            Nenhuma pessoa guardou no deck o card ainda
          </p>
          <ul v-if="hasFavorites">
            <user-list
              v-for="(favorite, key) in favorites"
              :user="favorite.user"
              :key="key"></user-list>
          </ul>
        </b-tab-item>
      </b-tabs>
    </div>
  </b-modal>
</template>

<script>
  import UserList from './user-list'

  export default {
    name: 'app-tabs-modal',
    components: { UserList },
    props: {
      card: Object
    },
    data () {
      return {
        activeTab: 0,
        activeModal: false
      }
    },
    computed: {
      hasFavorites () {
        return this.favorites.length > 0
      },
      favorites () {
        return this.card.deck
      },
      hasDislikes () {
        return this.dislikes.length > 0
      },
      dislikes () {
        return this.card.dislikes
      },
      hasLikes () {
        return this.likes.length > 0
      },
      likes () {
        return this.card.likes
      }
    },
    methods: {
      openModal (value) {
        this.activeModal = true
        this.activeTab = value
      },
      closeModal () {
        this.activeModal = false
      }
    }
  }
</script>
