<script setup>
import PrefecturesList from '@/components/organisms/PrefecturesList.vue'
</script>

<template>
  <h2>都道府県別の総人口推移グラフ</h2>
  <p>都道府県</p>
  <Suspense>
    <template #default>
      <PrefecturesList />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
    <template #error>
      <p>エラーが発生しました</p>
    </template>
  </Suspense>
</template>
