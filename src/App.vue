<script setup>
import Home from '@/components/pages/Home.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
    <template #error>
      <p>エラーが発生しました</p>
    </template>
  </Suspense>
</template>
