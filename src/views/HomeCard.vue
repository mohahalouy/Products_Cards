<template>
  <p style="color: #222222">{{filterContentSelect}}</p>
  <section class="homeCard">
    <FilterCategories class="filterContainer" v-model:filterContentSelect="filterContentSelect"></FilterCategories>
    <PostCardWrapper class="productCardContainer" :filterContentSelect="filterContentSelect"></PostCardWrapper>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.homeCard {
  font-family: 'Poppins', sans-serif;;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  grid-template-areas:
    "Filter"
    "Product";
}

.filterContainer{
  grid-area: Filter;
}

.productCardContainer{
  grid-area: Product;
}
</style>