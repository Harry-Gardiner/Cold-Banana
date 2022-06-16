<template>
  <AppNavbar />
  <Hero
    ><h1>Lorem ipsum</h1>
    <br />
    <h1>dolor sit amet.</h1>
  </Hero>
  <ImageWithText
    title="Lorem ipsum dolor sit amet."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    filename="Image_Blob_min.png"
  />
  <ProductsGrid />
  <AppFooter />
</template>


<script>
import AppNavbar from "./components/AppNavbar.vue";
import Hero from "./components/AppHero.vue";
import ImageWithText from "./components/ImageWithText.vue";
import ProductsGrid from "./components/ProductsGrid.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    Hero,
    ImageWithText,
    ProductsGrid,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-colour;
  min-height: 100vh;
  overflow: hidden;
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
  text-decoration: none;
}

h1,
h2,
h3 {
  font-style: normal;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0;
  color: $heading-colour;
  text-transform: uppercase;
}

h1 {
  @include fluid-type($min_h1_width, $max_h1_width, $min_h1_font, $max_h1_font);
  // line-height: 96px;
}

h2 {
  @include fluid-type($min_h2_width, $max_h2_width, $min_h2_font, $max_h2_font);
  // line-height: 54px;
}

h3 {
  background: linear-gradient(90.71deg, #73e0a9 0%, #5b68df 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: capitalize;
}

ul,
ol {
  margin: 0;
  list-style: none;
  padding: 0;
}
</style>
