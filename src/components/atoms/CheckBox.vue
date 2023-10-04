<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: String,
  prefCode: Number,
  modelValue: Array
})
const label = props.label
const prefCode = props.prefCode
const emit = defineEmits(['update:modelValue'])
const toggleCheckbox = () => {
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
  <label>
    <input
      type="checkbox"
      :value="prefCode"
      @input="toggleCheckbox"
    />
    {{ label }}
  </label>
</template>
