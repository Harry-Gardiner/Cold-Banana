<template>
  <section class="container products">
    <div class="products__grid justify-content-center" v-if="dataLoaded">
      <div v-for="product in productsLoaded" :key="product.id">
        <ProductCard
          :prodImage="product.image"
          :prodTitle="product.product_name"
          :prodPrice="product.price"
        />
      </div>
    </div>
    <div class="products__button">
      <button v-if="count < numOfProducts" @click="loadMore">
        <p>Load More</p>
      </button>
    </div>
  </section>
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
      count: 6,
      dataLoaded: false,
      numOfProducts: null,
    };
  },
  mounted() {
    axios
      .get(this.apiUrl)
      .then((response) => {
        // console.log(response);
        const productsData = response.data[0];
        // console.log(products);
        this.products = productsData;
        this.numOfProducts = this.products.length;
        this.dataLoaded = true;
      })
      .catch((err) => {
        console.log("Error getting all data from API", err);
      });
  },
  methods: {
    loadMore() {
      if (this.count > this.products.length) return;
      this.count = this.count + 6;
    },
  },
  computed: {
    productsLoaded() {
      return this.products.slice(0, this.count);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  &__grid {
    margin-top: 30vh;
    display: grid;
    column-gap: 5rem;
    row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 369px));
  }

  &__button {
    width: 100%;
    text-align: center;

    @media (min-width: 1200px) {
      text-align: start;
    }

    button {
      border: none;
      color: #5c6dde;
      background: none;
      font-weight: 600;
      margin-top: 3rem;

      @media (min-width: 768px) {
        padding-left: 1rem;
      }
    }
  }
}
</style>