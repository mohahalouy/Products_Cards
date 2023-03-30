<template>

</template>

<script>
import {ref} from "vue";
import PostAPI from "../services/PostAPI";

export default {
  name: "PostCardWrapper",
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

</style>