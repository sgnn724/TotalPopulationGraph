<script setup>
import { ref } from 'vue'
import CheckBox from '../atoms/CheckBox.vue'
import { RepositoryFactory } from '@/repositories/RepositoryFactory'

const props = defineProps({
  modelValue: Array
})
const emit = defineEmits(['update:modelValue'])
const checkboxItems = ref([])
const prefecturesRepository = RepositoryFactory.get('prefectures')
const data = await prefecturesRepository.get()
checkboxItems.value = data.result

const handleChecked = (e) => {
  const prefCode = e.target.value
  const newValue = [...props.modelValue]
  if (newValue.includes(prefCode)) {
    const index = newValue.indexOf(prefCode)
    newValue.splice(index, 1)
  } else {
    newValue.push(prefCode)
  }
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="container">
    <CheckBox
      v-for="(item, index) in checkboxItems"
      :key="index"
      :label="item.prefName"
      :value="item.prefCode"
      @input="handleChecked"
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
