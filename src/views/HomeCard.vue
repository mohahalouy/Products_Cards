<template>
  <section class="homeCard">
    <FilterCategories v-model:filterContentSelect="filterContentSelect"></FilterCategories>
    <PostCardWrapper :filterContentSelect="filterContentSelect"></PostCardWrapper>
  </section>
</template>

<script>

import PostCardWrapper from "../components/ProductCardWrapper.vue";
import FilterCategories from "../components/FilterCategories.vue";
import {ref} from "vue";

export default {
  name: "HomeCard",
  components: {FilterCategories, PostCardWrapper},
  setup() {
    const filterContentSelect = ref("");

    return {
      filterContentSelect,
    };
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:200,300.400,500,600,700,800,900&display=swap";

@font-face {
  font-family: Poppins;
  src: url("https://fonts.googleapis.com/css?family=Poppins:200,300.400,500,600,700,800,900&display=swap");
}

.homeCard {
  font-family: Poppins, sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  grid-template-areas:
    "filterInput"
    "Card";
}
</style>