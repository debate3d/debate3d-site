<script>
  import { mapGetters } from 'vuex'

  import * as Components from './components'

  export default {
    props: {
      card: Object
    },
    components: { ...Components },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      argument () {
        return `${this.card.content.slice(0, 130)} ...`
      },
      position () {
        return (this.card.position === 'true') ? 'is-positive' : 'is-negative'
      },
      hasVideo () {
        return this.card.has_video || false
      },
      urlVideo () {
        return this.card.url_video
      }
    }
  }
</script>

<template lang="html">
  <div class="card" :class="position">
    <app-card-header :author="card.author"></app-card-header>
    <div class="card-content">
      <div class="content">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            v-if="hasVideo"
            class="embed-responsive-item"
            :src="urlVideo"
            frameborder="0"
            gesture="media"
            allowfullscreen></iframe>
        </div>

        <p class="subtitle" v-if="!hasVideo">
          &ldquo;{{ argument }}&rdquo;
        </p>

        <div class="links">
          <router-link :to="`/card/${card.uid}/detail`">
            Ver mais detalhes
          </router-link>
          <router-link :to="`/topic/${card.topic.nickname}/detail`">
            Tema: {{ card.topic.title }}
          </router-link>
        </div>
      </div>
    </div>
    <app-card-footer
      :card="card"
      :url="''"
      :isMyArgument="false" />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .card {
    display: flex;
    flex-direction: column;
    background-color: $white;
    color: $text;
    width: 295px;
    height: 450px;
    position: relative;
    margin: .8em auto;
    border-radius: 2px;

    .embed-responsive iframe {
      max-width: 100%;
    }

    .card-content {
      position: relative;
      flex-grow: 1;

      .links {
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
      }

      a {
        display: block;
        margin-bottom: 5px;
      }
    }

    @media screen and (max-width: 768px) {
      margin: 1em auto;
    }

    &.is-positive {
      & .card-header,
      & .card-header-title {
        background-color: #0098DA;
        color: white;
      }
    }

    &.is-negative {
      & .card-header,
      & .card-header-title {
        background-color: #DB3438;
        color: white;
      }
    }
  }
</style>
