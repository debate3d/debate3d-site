<script>
  import { get } from 'lodash'

  export default {
    name: '',
    props: {
      user: Object
    },
    computed: {
      socials () {
        return [
          { label: 'fa-facebook', url: get(this.user, 'facebook') },
          { label: 'fa-instagram', url: get(this.user, 'instagram') },
          { label: 'fa-link', url: get(this.user, 'site') },
          { label: 'fa-twitter', url: get(this.user, 'twitter') },
          { label: 'fa-youtube', url: get(this.user, 'youtube') }
        ]
      },
      hasSocialLink () {
        return this.socials.some(social => social.url !== null)
      }
    },
    data: () => ({

    })
  }
</script>

<template>
  <div class="list-shared" v-if="hasSocialLink">
    <h4 class="subtitle has-text-centered"> Siga ele(a) nas redes sociais </h4>
    <ul>
      <li
        v-for="(social, index) in socials"
        :key="social.label"
        v-if="social.url !== null">
          <a :href="social.url" target="_blank">
            <span class="icon is-large">
              <i class="fa" :class="social.label"></i>
            </span>
          </a>
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .subtitle {
    margin-bottom: 0;
    margin-top: 1.5rem;
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
  }
</style>
