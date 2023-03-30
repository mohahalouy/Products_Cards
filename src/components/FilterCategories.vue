<template>

</template>

<script>
import {ref} from "vue";
import PostAPI from "../services/PostAPI";

export default {
  name: "FilterCategories",
  async setup() {
    const categories = ref([])
    const loadCategories = async () => {
      try {
        const response = await PostAPI.getCategories()
        products.value = response.data
      } catch (err) {
        console.log(err)
      }
    }

    await loadCategories()


    return {
      categories,
    }
  },
}
</script>

<style scoped>

</style>