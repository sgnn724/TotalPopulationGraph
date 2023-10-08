<script setup>
import { ref } from 'vue'
import CheckBox from '../atoms/CheckBox.vue'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'

const props = defineProps({
  getPopulation: Function,
  uncheckedPref: Function
})
const getPopulation = props.getPopulation
const uncheckedPref = props.uncheckedPref

const selectedItems = ref([])
const prefectures = ref([])

const prefecturesRepository = RepositoryFactory.get('prefectures')
const data = await prefecturesRepository.get()
prefectures.value = data.result

const handleChecked = (item) => {
  const prefCode = item.prefCode
  if (selectedItems.value.includes(prefCode)) {
    const index = selectedItems.value.indexOf(prefCode)
    selectedItems.value.splice(index, 1)
    uncheckedPref(item)
  } else {
    selectedItems.value.push(prefCode)
    getPopulation(item)
  }
}
</script>

<template>
  <div class="container">
    <CheckBox
      v-for="(item, index) in prefectures"
      :key="index"
      :label="item.prefName"
      :value="item"
      @input="handleChecked(item)"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
