<template>
  <section class="text-and-image container">
    <div class="row">
      <div class="col-md-6">
        <img src="" alt="" />
      </div>
      <div class="col-md-6">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <AppButton>Read More</AppButton>
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
  },
};
</script>

<style lang="scss" scoped>
</style>