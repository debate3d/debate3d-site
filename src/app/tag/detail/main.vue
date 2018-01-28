<script>
  import { head } from 'lodash'
  import { boxTopic } from '@/domains/topics/view'
  import { schemaTopicBox } from '@/domains/topics/schemas'
  import query from '@/domains/tag/services/querys/search-tag.gql'
  import { apolloLoadingMixin } from '@/support/mixins'

  export default {
    components: { boxTopic },
    mixins: [
      apolloLoadingMixin(query, 'tagSearch', schemaTopicBox, 'data.tagSearch')
    ],
    data () {
      return {
        tagSearch: [
          {
            uid: '',
            label: '',
            topics: [ schemaTopicBox ]
          }
        ]
      }
    },
    computed: {
      topics () {
        return head(this.tagSearch.reduce((acc, tag) => {
          acc.push(tag.topics)
          return acc
        }, []))
      },
      countTopics () {
        return this.topics.length
      },
      tagName () {
        return this.tagSearch[0].label
      },
      apolloVariables () {
        return {
          label: this.$route.params.label
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="tag-info">
    <h1 class="title is-4">
      {{ countTopics }} tema(s) encontrado(s) para a tag {{ tagName }}
    </h1>
    <div class="columns is-multiline">
      <div
        class="column is-half-tablet is-one-third-desktop"
        v-for="(topic, key) in topics">
        <box-topic :topic="topic" :position="key + 1"></box-topic>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .tag-info {
    padding: $space;
  }
</style>
