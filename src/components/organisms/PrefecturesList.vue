<script setup>
import { ref } from 'vue'
import CheckBox from '../atoms/CheckBox.vue'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'

const prefecturesRepository = RepositoryFactory.get('prefectures')
const checkboxItems = ref([])
const data = await prefecturesRepository.get()
checkboxItems.value = data.result
</script>

<template>
  <div class="container">
    <CheckBox
      v-for="(item, index) in checkboxItems"
      :key="index"
      :label="item.prefName"
      v-model:modelValue="item.isChecked"
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
