<script>
  import tagSearchQuery from './search-tag.gql'
  import test from './test.vue'

  export default {
    props: ['label'],
    data () {
      return {
        data: [],
        name: '',
        template: test
      }
    },
    methods: {
      updateItems (text) {
        this.$apollo.query({
          query: tagSearchQuery,
          variables: {
            label: text
          }
        })
        .then(result => {
          const { tagSearch } = result.data
          this.data = tagSearch
        })
      }
    }
  }
</script>

<template lang="html">
  <b-field
    label="Taggeie seu tópico - 2° tag"
    message="Se não houver uma, será criado automaticamente">
    <v-autocomplete
      :items="data"
      v-model="name"
      :template="template"
      :get-label="item => item.label"
      @update-items="updateItems"
      @item-selected="option => { $emit('select', option) }">
    </v-autocomplete>
  </b-field>
</template>

<style lang="sass">
  @import '../../assets/sass/_bulma-connector'

  v-autocomplete
  .v-autocomplete-input-group
    .v-autocomplete-input
      @extend .input
    &.v-autocomplete-selected
      .v-autocomplete-input
        color: green
        background-color: #f2fff2
  .v-autocomplete-list
    width: 100%
    text-align: left
    border: none
    border-top: none
    max-height: 400px
    overflow-y: auto
    border-bottom: 1px solid #157977
    .v-autocomplete-list-item
      cursor: pointer
      background-color: #fff
</style>
