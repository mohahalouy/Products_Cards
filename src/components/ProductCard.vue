<template>
  <div class="product-card">
    <div class="box">
      <div class="product-image">
        <img
            :src="product.image"
            alt="Imagen del producto">
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
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
  position: relative;
  width: 320px;
  height: 600px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, .05), inset -5px -5px 5px hsla(0, 0%, 100%, .5), 5px 5px 5px rgba(0, 0, 0, .05), -5px -5px 5px hsla(0, 0%, 100%, .5);
  border-radius: 15px;
  margin: 30px;
  color: black;
  background-color: #ebf5fc;
}

.product-card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.product-card .box:hover {
  transform: translateY(-50px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
  cursor: pointer;
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
  width: 100%;
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

@media (max-width: 400px) {
  .product-card {
    width: 220px;
    height: 500px;
  }
}
</style>