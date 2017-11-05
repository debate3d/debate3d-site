<script>
  import { Pie } from 'vue-chartjs'
  import { EventBus } from '@/helpers'

  export default {
    name: 'vote-pie-bar',
    extends: Pie,
    props: {
      data: {
        type: Object,
        default: () => ({ })
      }
    },
    mounted () {
      EventBus.$on('refresh:apollo', () => {
        console.log(this.$forceUpdate)
      })

      this.$nextTick(() => {
        this.renderChart(this.data, {
          responsive: true,
          maintainAspectRatio: false
        })
      })
    }
  }
</script>
