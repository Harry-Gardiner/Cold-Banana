<template>
  <footer class="container footer">
    <div class="row">
      <div class="footer__branding col-12 col-xl-5">
        <h2>Chilled Grape</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
      <div class="footer__nav col-12 col-xl-7">
        <div class="row">
          <div class="col-12 col-md-4">
            <h3>Company</h3>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Our Work</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <h3>Products</h3>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Our Work</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <h3>Follow Us</h3>
            Social links
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 40vh;
  a {
    @include fluid-type(
      $min_afooter_width,
      $max_afooter_width,
      $min_afooter_font,
      $max_afooter_font
    );
    font-weight: 400;
    line-height: 27px;
    color: $heading-colour;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: purple;
      color: inherit;
    }
  }
}
</style>