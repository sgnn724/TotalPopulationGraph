<script setup>
import { reactive, ref } from 'vue'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'
import PrefecturesList from '@/components/organisms/PrefecturesList.vue'
import PopulationChart from '@/components/organisms/PopulationChart.vue'

const chartData = reactive({
  populations: [],
  years: []
})
const boundaryYear = ref('')

const populationRepository = RepositoryFactory.get('population')
const getPopulation = async ({ prefCode, prefName }) => {
  const data = await populationRepository.get({
    prefCode,
    cityCode: '-'
  })
  boundaryYear.value = data.result.boundaryYear
  addChartData(prefName, data.result.data[0].data)
}

const addChartData = (name, data) => {
  const actualValue = []
  data.forEach((value) => {
    if (value.year <= boundaryYear.value) {
      actualValue.push(value.value)
      if (!chartData.years.includes(value.year)) {
        chartData.years.push(value.year)
      }
    }
  })
  const population = {
    name,
    data: actualValue
  }
  chartData.populations.push(population)
}

const uncheckedPref = ({ prefName }) => {
  chartData.populations = chartData.populations.filter(
    (value) => value.name !== prefName
  )
}
</script>

<template>
  <h2 class="title">都道府県別の総人口推移グラフ</h2>
  <PrefecturesList
    :getPopulation="getPopulation"
    :uncheckedPref="uncheckedPref"
  />
  <PopulationChart :chartData="chartData" />
</template>

<style scoped>
.title {
  text-align: center;
}
</style>
