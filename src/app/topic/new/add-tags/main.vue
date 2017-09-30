<script>
  import tagSearchQuery from './search-tag.gql'
  import { isEmpty } from 'lodash'
  import { propEq, equals, length } from 'ramda'

  const getTags = (tag, collection) => collection.filter(propEq('uid', tag.uid))

  export default {
    props: {
      isActive: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    data () {
      return {
        tagSearch: [],
        text: 'ciencia',
        tags: [],
        selectedTags: []
      }
    },
    apollo: {
      tagSearch () {
        return {
          query: tagSearchQuery,
          variables () {
            return {
              label: this.text
            }
          }
        }
      }
    },
    computed: {
      hasTag () {
        return this.selectedTags.length > 0
      }
    },
    watch: {
      tagSearch () {
        this.tags = [...this.tagSearch]
      }
    },
    methods: {
      setTag (tag) {
        const hasTags = getTags(tag, this.selectedTags)
        // Não inserir a tag que já está selecionada
        if (isEmpty(hasTags)) {
          // Não inserir se já tiver 3 tags
          if (!equals(length(this.selectedTags), 3)) {
            this.selectedTags.push(tag)
            this.text = ''
          }
        }
      },
      remove (tag) {
        const removed = this.selectedTags.filter(item => item.uid !== tag.uid)
        this.selectedTags = [ ...removed ]
      },
      close () {
        this.$emit('update:isActive', false)
        this.$emit('get-select', this.selectedTags)
      }
    }
  }
</script>

<template lang="html">
  <b-modal
    :active.sync="isActive"
    :canCancel="false">

    <div class="add-tags">
      <h2 class="subtitle has-text-centered"> Tags </h2>

      <b-taglist v-if="hasTag">
        <b-tag
          type="is-info"
          v-for="tag in selectedTags"
          :key="tag.uid"
          size="is-medium"
          @close="remove(tag)"
          closable>{{ tag.label }}</b-tag>
      </b-taglist>

      <hr v-if="hasTag">

      <b-field
        label="Pesquise por uma tag ou crie uma - No máximo 3 tags">
        <b-input v-model="text"></b-input>
      </b-field>

      <span
        class="tag is-medium"
        v-for="tag in tags"
        :key="tag.uid"
        @click="setTag(tag)">
          {{ tag.label }}
      </span>

      <hr>

      <button
        class="button"
        @click="close"> Fechar </button>
    </div>

  </b-modal>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/extend.sass";

  .add-tags {
    padding: $space;
    background-color: white;

    .button {
      display: block;
    }

    .tag.is-medium {
      margin: 2px;
      cursor: pointer;
    }
  }
</style>
