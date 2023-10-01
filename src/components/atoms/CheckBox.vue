<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  label: String,
  modelValue: Boolean
})
const label = props.label
const isChecked = ref(props.modelValue)
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="label">
    <input
      type="checkbox"
      v-model="isChecked"
    />
    {{ label }}
  </label>
</template>
