<template>
  <section class="products-grid container">
    <ProductCard
      prodImage="http://dummyimage.com/281x278.png/5fa2dd/ffffff"
      prodTitle="Lorem Ipsum"
      prodPrice="12.99"
    />
    <div class="product">P2</div>
    <div class="product">P3</div>
    <div class="product">P4</div>
    <div class="product">P5</div>
    <div class="product">P6</div>
  </section>
  <hr />
  <div v-for="product in products" v-bind:key="product.id">test</div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductsGrid",
  components: { ProductCard },
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    axios.get(this.apiUrl).then((response) => {
      // console.log(response);
      const productsData = response.data[0];
      // console.log(products);
      this.products = productsData;
    });
  },
};
</script>

<style lang="scss" scoped>
.products-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 33%));
}
</style>