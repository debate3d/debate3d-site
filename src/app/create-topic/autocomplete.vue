<script>
  import tagSearchQuery from './search-tag.gql'
  import { debounce } from 'lodash'

  export default {
    props: ['label'],
    data () {
      return {
        tagSearch: [],
        data: [],
        name: ''
      }
    },
    apollo: {
      tagSearch () {
        return {
          query: tagSearchQuery,
          variables () {
            return {
              label: this.name
            }
          },
          manual: true,
          result ({ data, loading }) {
            if (loading) {
              this.isFetching = true
            }
            if (!loading) {
              this.data = data.tagSearch
              this.isFetching = false
            }
          }
        }
      }
    },
    methods: {
      setSelected: debounce(function () {
        console.log(this.name)
        this.$emit('selected', this.name)
      }, 500)
    }
  }
</script>

<template lang="html">
  <b-field
    label="Taggeie seu tópico - 2° tag"
    message="Se não houver uma, será criado automaticamente">
    <b-autocomplete
      :data="data"
      v-model="name"
      field="label"
      placeholder="e.g. ciencia"
      @input="setSelected"
      expanded
      @select="option => { $emit('select', option) }">
        <template scope="props">
          {{ props.option.label }}
        </template>
        <template slot="empty">No results found</template>
      </b-autocomplete>
  </b-field>
</template>

<style lang="css">
</style>
