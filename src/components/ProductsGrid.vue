<template>
  <section class="products-grid container">
    <div class="product">P1</div>
    <div class="product">P2</div>
    <div class="product">P3</div>
    <div class="product">P4</div>
    <div class="product">P5</div>
    <div class="product">P6</div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsGrid",
  components: {},
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios.get(this.apiUrl).then((response) => (this.data = response));
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