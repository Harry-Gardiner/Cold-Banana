<template>
  <AppNavbar />
  <AppButton>Login</AppButton>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppButton from "./components/AppButton";
export default {
  name: "App",
  components: {
    AppNavbar,
    AppButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-colour;
}

p {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
  @include fluid-type($min_p_width, $max_p_width, $min_p_font, $max_p_font);
}

a {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  @include fluid-type($min_a_width, $max_a_width, $min_a_font, $max_a_font);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-style: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
}

h1 {
  @include fluid-type($min_h1_width, $max_h1_width, $min_h1_font, $max_h1_font);
  line-height: 96px;
}

h2 {
  @include fluid-type($min_h2_width, $max_h2_width, $min_h2_font, $max_h2_font);
  line-height: 54px;
}

footer {
  a {
    @include fluid-type(
      $min_afooter_width,
      $max_afooter_width,
      $min_afooter_font,
      $max_afooter_font
    );
    font-weight: 400;
    line-height: 27px;
  }
}

ul,
ol {
  margin: 0;
}
</style>
