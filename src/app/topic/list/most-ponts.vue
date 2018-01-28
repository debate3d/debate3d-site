<script>
  import { isEmpty, toNumber } from 'lodash'

  import mostPontsQuery from '@/domains/topics/services/querys/most-ponts.gql'
  import { paginationMixin } from '../helpers'

  export default {
    name: 'most-ponts',
    mixins: [ paginationMixin('mostPonts', mostPontsQuery, 'topics') ],
    methods: {
      emitCount (value) {
        this.$emit('set-count', value)
      }
    },
    watch: {
      count: {
        handler (newValue) {
          this.emitCount(newValue)
        },
        deep: true
      }
    },
    computed: {
      count () {
        const topics = this.topics
        return isEmpty(topics) ? 1 : toNumber(topics.count)
      }
    },
    mounted () {
      this.emitCount(1)
    }
  }
</script>

<template lang="html">
  <div class="columns is-multiline is-centered">
    <div class="column is-half-tablet is-one-third-desktop" v-for="(topic, key) in allTopics">
      <box-topic :topic="topic" :position="key + 1"></box-topic>
    </div>
  </div>
</template>
