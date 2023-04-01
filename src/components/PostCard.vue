<template>
  <div class="product-card">
    <div class="product-image">
      <img
          :src="product.image"
          alt="Imagen del producto">
    </div>
    <div class="product-info">
      <h2 class="product-title">{{product.title}}</h2>
      <p class="product-description">{{product.description}}</p>
      <p class="product-price">
        {{
          product.price.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
          })
        }}
      </p>
    </div>
  </div>

</template>

<script>

export default {
  name: "PostCard",
  props: ['product']

}
</script>

<style scoped>
.product-card {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 300px;
  color: black;
}

.product-image {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
}

.product-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 20px;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.product-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f60;
  margin-bottom: 20px;
}
</style>