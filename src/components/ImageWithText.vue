<template>
  <section class="text-and-image container">
    <div class="row d-flex flex-md-row-reverse">
      <div class="col-md-6 text-and-image__img">
        <img :src="require(`@/assets/images/${filename}`)" alt="" />
      </div>
      <div
        class="
          col-md-6
          text-and-image__content
          d-md-flex
          flex-column
          justify-content-center
        "
      >
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <AppButton type="button--small">Read More</AppButton>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  name: "ImageWithText",
  components: {
    AppButton,
  },
  props: {
    title: String,
    content: String,
    filename: String,
  },
};
</script>

<style lang="scss" scoped>
.text-and-image {
  &__img {
    img {
      width: 100%;
    }
  }

  &__content {
    & > * {
      margin-bottom: 2rem;
    }
  }
}
</style>