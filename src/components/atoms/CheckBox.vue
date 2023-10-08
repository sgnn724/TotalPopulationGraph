<script setup>
const props = defineProps({
  label: String,
  value: Object
})
const label = props.label
const value = props.value
</script>

<template>
  <label>
    <input
      type="checkbox"
      :value="value"
    />
    {{ label }}
  </label>
</template>
