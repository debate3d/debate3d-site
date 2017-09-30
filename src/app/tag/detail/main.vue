<script>
  import { boxTopic } from '@/domains/topics/view'
  import { schemaTopicBox } from '@/domains/topics/schemas'
  import searchTag from '@/domains/tag/services/querys/search-tag.gql'

  export default {
    components: { boxTopic },
    computed: {
      topics () {
        return this.tagSearch.reduce((acc, tag) => {
          acc.push(tag.topics)
          return acc
        }, [])[0]
      },
      countTopics () {
        return this.topics.length
      },
      tagName () {
        return this.tagSearch[0].label
      }
    },
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
    apollo: {
      tagSearch () {
        return {
          query: searchTag,
          variables () {
            return {
              label: this.$route.params.label
            }
          }
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
