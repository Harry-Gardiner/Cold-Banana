<template>
  <div
    class="product-card"
    data-aos="zoom-in"
    data-aos-easing="ease-in-out."
    data-aos-duration="1500"
    data-aos-once="true"
  >
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
    prodPrice: Number,
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.15);
  border-radius: 30px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 314px;
    object-fit: cover;
    border-radius: 30px;
    filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.25));
    transition: 0.3s ease all;
  }

  &__content {
    padding: 1rem 1.5rem;

    &__title {
      font-weight: bold;
      text-transform: uppercase;
      font-weight: 700;
    }

    &__price {
      color: $price-colour;
      font-weight: 700;
    }
  }
}
</style>