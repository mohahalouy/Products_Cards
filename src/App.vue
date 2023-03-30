<template>
  <Suspense>
    <HomeCard></HomeCard>
    <template #fallback>
      Loading
    </template>
  </Suspense>
</template>

<script setup>
import HomeCard from './views/HomeCard.vue'
</script>

<style scoped>
</style>
