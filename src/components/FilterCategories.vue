<template>
  <section class="filterContainer">
    <p>Filtrar por categoría: &nbsp;</p>
    <div class="select" tabindex="1">
      <input class="selectopt" name="test" type="radio" id="opt1"
             @change="changeCategory" checked>
      <label for="opt1" class="option"></label>
      <template v-for="(category,index) in categories">
        <input class="selectopt" name="test" type="radio" :id="`opt${index+2}`"
               @change="changeCategory(index)">
        <label :for="`opt${index+2}`" class="option">{{ category }}</label>
      </template>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import PostAPI from "../services/PostAPI";

export default {
  name: "FilterCategories",
  props: {
    filterContentSelect: String
  },
  async setup(props, {emit}) {
    const categories = ref([])
    const loadCategories = async () => {
      try {
        const response = await PostAPI.getCategories()
        categories.value = response.data
      } catch (err) {
        console.log(err)
      }
    }

    await loadCategories()


    const changeCategory = (index) => {
      const selectedCategory = categories.value[index] !== undefined ? categories.value[index] : "";
      emit("update:filterContentSelect", selectedCategory);
    };

    return {
      categories,
      changeCategory
    }
  },
}
</script>

<style scoped>
.filterContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  font-weight: bold;
}

.select {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 40px;
  cursor: pointer;
  color: black;
}

.option {
  text-transform: capitalize;
  padding: 0 30px 0 10px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background: #ebf5fc;
  border-top: #222 solid 1px;
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  order: 2;
  z-index: 1;
  transition: background .4s ease-in-out;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}

.option:hover {
  background: #c8eaf8;
}

.select:focus .option {
  position: relative;
  pointer-events: all;
}

input {
  opacity: 0;
  position: absolute;
  left: -99999px;
}

input:checked + label {
  order: 1;
  z-index: 2;
  background: #ebf5fc;
  border-top: none;
  position: relative;
}

input:checked + label:after {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  position: absolute;
  right: 10px;
  top: calc(50% - 2.5px);
  pointer-events: none;
  z-index: 3;
}

input:checked + label:before {
  position: absolute;
  right: 0;
  height: 40px;
  width: 40px;
  content: '';
  background: #ebf5fc;
}
</style>