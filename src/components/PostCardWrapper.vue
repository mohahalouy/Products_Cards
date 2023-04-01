<template>
  <section class="productCardContainer">
    <PostCard v-for="(product, index) in products" :key="index" :product="product" :index="index"></PostCard>
  </section>
</template>

<script>
import {ref} from "vue";
import PostAPI from "../services/PostAPI";
import PostCard from "./PostCard.vue";

export default {
  name: "PostCardWrapper",
  components: {PostCard},
  async setup() {
    const products = ref([])
    const loadProducts = async () => {
      try {
        const response = await PostAPI.getProducts()
        products.value = response.data
      } catch (err) {
        console.log(err)
      }
    }

    await loadProducts()


    return {
      products,
    }
  },
}
</script>

<style scoped>
.productCardContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  gap: 20px;
}
</style>