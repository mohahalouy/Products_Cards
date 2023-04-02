<template>
  <section class="productCardContainer">
    <PostCard v-for="(product, index) in filteredProducts" :key="product.id" :product="product" :index="index"
              data-aos="fade-up"></PostCard>
  </section>
</template>

<script>
import {ref, computed} from "vue";
import PostAPI from "../services/PostAPI";
import PostCard from "./ProductCard.vue";

export default {
  name: "PostCardWrapper",
  components: {PostCard},
  props: {
    filterContentSelect: String
  },
  async setup(props) {
    const products = ref([])
    const loadProducts = async () => {
      try {
        const response = await PostAPI.getProducts();
        products.value = response.data;
      } catch (err) {
        console.log(err);
      }
    };

    await loadProducts()

    const filteredProducts = computed(() => {
      if (!props.filterContentSelect) {
        return products.value;
      }
      const query = props.filterContentSelect.toLowerCase();
      return products.value.filter(product => {
        return product.category.toLowerCase().includes(query)
      });
    });


    return {
      filteredProducts
    }
  },
}
</script>

<style scoped>
.productCardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
}


</style>