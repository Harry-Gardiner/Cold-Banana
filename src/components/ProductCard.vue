<template>
  <div class="product-card">
    <img :src="prodImage" alt="" />
    <div class="product-card__content">
      <p class="product-card__content__title">{{ prodTitle }}</p>
      <p class="product-card__content__price">£{{ prodPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    prodImage: String,
    prodTitle: String,
    prodPrice: String,
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  img {
    width: 100%;
    border-radius: 30px;
    filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.25));
  }

  &__content {
    padding: 1rem 1.5rem;

    &__title {
      font-weight: bold;
    }

    &__price {
      color: $price-colour;
    }
  }
}
</style>