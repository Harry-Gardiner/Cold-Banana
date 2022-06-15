<template>
  <section
    class="hero d-flex align-items-center"
    :style="{
      backgroundImage: `url(${require('@/assets/images/Hero_BG_min.png')})`,
    }"
  >
    <div class="container hero__content col-md-6">
      <div class="hero__content__title">
        <slot>Title</slot>
      </div>
      <div class="hero__content__btn-wrapper">
        <AppButton type="button--large">Read More</AppButton>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  name: "AppHero",
  components: {
    AppButton,
  },
};
</script>

<style lang="scss">
.hero {
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh;
  min-height: 400px;
  width: 100%;

  @media (min-width: 768px) {
    background-position: right center;
  }

  &__content {
    &__title {
      text-transform: uppercase;
    }

    &__btn-wrapper {
      margin-top: 1rem;
    }
  }
}
</style>