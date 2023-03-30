<template>
  <FilterCategories></FilterCategories>
  <PostCardWrapper></PostCardWrapper>
</template>

<script>

import PostCardWrapper from "../components/PostCardWrapper.vue";
import FilterCategories from "../components/FilterCategories.vue";

export default {
  name: "HomeCard",
  components: {FilterCategories, PostCardWrapper},
}
</script>

<style scoped>
</style>