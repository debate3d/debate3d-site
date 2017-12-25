<script>
  import numeral from 'numeral'
  import { isEmpty, gt } from 'lodash'

  import AppVoteChart from '@/components/app-vote-chart.vue'

  const getValue = (context, property) => {
    const total = (context.total) ? context.total : 1
    const val = (context.data[property].length / total) * 100
    return (val === 0) ? 0 : numeral(val).format('00')
  }

  const setWidth = (value) => { return { width: value } }

  const setDisplayNone = () => { return { display: 'none' } }

  const bothIsEmpty = (context) => {
    return isEmpty(context.positive) && isEmpty(context.negative)
  }

  const returnCssSpecific = (context, property) => {
    return bothIsEmpty(context)
      ? setWidth('50%')
      : isEmpty(context[property])
      ? setDisplayNone()
      : setWidth(context[property] + '%')
  }

  export default {
    props: ['data', 'height', 'position', 'isLoading'],
    components: { AppVoteChart },
    computed: {
      total () {
        const count = numeral(this.data.count)
        return count.value()
      },
      positive () {
        return getValue(this, 'positive')
      },
      negative () {
        return getValue(this, 'negative')
      },
      widthFavor () {
        return returnCssSpecific(this, 'positive')
      },
      widthNotFavor () {
        return returnCssSpecific(this, 'negative')
      },
      positivePosition () {
        return this.position.positive
      },
      negativePosition () {
        return this.position.negative
      },
      labels () {
        return [ this.positivePosition, this.negativePosition ]
      },
      dataset () {
        return [
          {
            backgroundColor: [ '#0098DA', '#DB3438' ],
            data: [ this.positive, this.negative ]
          }
        ]
      },
      dataPie () {
        return {
          labels: this.labels,
          datasets: this.dataset
        }
      },
      hasVotes () {
        return gt(this.data.count, 0)
      }
    }
  }
</script>

<template>
  <div class="column is-6">
    <div v-if="hasVotes">
      <app-vote-chart
        v-if="!isLoading"
        class="app-progress" :data="dataPie" />

      <span class="icon is-large" v-if="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<style media="screen" scoped lang="scss">
  .app-progress {
    max-width: 250px;
    margin: 0 auto;
  }

  .icon {
    display: block;
    margin: 0 auto;
  }
</style>
