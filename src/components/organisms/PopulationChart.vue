<script setup>
import { computed } from 'vue'
import { Chart } from 'highcharts-vue'

const props = defineProps({
  chartData: Object
})
const chartData = props.chartData

const chartOptions = computed(() => ({
  chart: {
    type: 'line'
  },
  title: {
    text: '総人口推移グラフ'
  },
  xAxis: {
    categories: chartData.years,
    title: {
      text: '年度'
    }
  },
  yAxis: {
    title: {
      text: '人口数'
    },
    accessibility: {
      rangeDescription: 'Range: 2010 to 2020'
    }
  },
  series: chartData.populations,
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }
}))
</script>

<template>
  <div class="container">
    <Chart
      v-if="chartData.populations.length > 0"
      :options="chartOptions"
    />
    <p v-else>都道府県を選択して下さい。</p>
  </div>
</template>

<style scoped>
.container {
  margin-top: 30px;
}
</style>
