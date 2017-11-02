<script>
  import { Pie } from 'vue-chartjs'

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
      this.$nextTick(() => {
        this.renderChart(this.data, {
          responsive: true,
          maintainAspectRatio: false
        })
      })
    }
  }
</script>
