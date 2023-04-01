<template>
  <Suspense>
    <HomeCard></HomeCard>
    <template #fallback>
      <LoaderCard></LoaderCard>
    </template>
  </Suspense>
</template>

<script setup>
import HomeCard from './views/HomeCard.vue'
import LoaderCard from "./components/LoaderCard.vue";
</script>

<style scoped>
</style>
