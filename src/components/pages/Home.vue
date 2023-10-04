<script setup>
import { ref } from 'vue'
import PrefecturesList from '../organisms/PrefecturesList.vue'

const checkedValue = ref([])
</script>

<template>
  <h2>都道府県別の総人口推移グラフ</h2>
  <p>都道府県</p>
  <PrefecturesList v-model="checkedValue" />
</template>
