<script>
  import numeral from 'numeral'
  import { isEmpty } from 'lodash'

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
    props: ['data', 'height', 'position'],
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
      }
    }
  }
</script>

<template>
  <div class="progress">
    <div class="labels">
      <div class="label1" :style="widthFavor">
        <p class="subtitle"> {{ positivePosition }} </p>
      </div>
      <div class="label1" :style="widthNotFavor">
        <p class="subtitle"> {{ negativePosition }} </p>
      </div>
    </div>
    <div class="values">
      <div
        class="positiveVoteProgess"
        :style="widthFavor">
          <p> {{ positive }}% </p>
        </div>
      <div
        class="negativeFavorVoteProgress"
        :style="widthNotFavor">
          <p> {{ negative }}% </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .progress {
    width: 80%;
    margin: auto;
    height: auto;
    border-radius: 2px;

    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
    }

    .labels,
    .values {
      display: flex;
    }

    div {
      display: block;
      text-align: center;
      padding: 0.25em;

      &.positiveVoteProgess {
        background-color: $positive-color;
        color: #FFF;
        border-radius: 2px 0 0 2px;
      }

      &.negativeFavorVoteProgress {
        background-color: $negative-color;
        color: #FFF;
        border-radius: 0 2px 2px 0;
      }
    }
  }
</style>
