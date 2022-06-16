<template>
  <footer class="container footer">
    <div class="row">
      <div class="bg-full col-12 col-xl-5 mb-xl-0">
        <div class="footer__branding">
          <img
            v-bind:src="require('@/assets/images/Vector_min.png')"
            class="vector vector--one d-none d-xl-flex"
          />
          <h2>Chilled Grape</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
      <div class="footer__nav col-12 col-xl-7 mt-4">
        <div class="row">
          <div class="col-12 col-md-4 mb-5">
            <h3>Company</h3>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Our Work</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <h3>Products</h3>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Our Work</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-4 mb-5">
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
.footer {
  margin-top: 40vh;

  .bg-full {
    position: relative;

    @media (max-width: 1200px) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 100vw;
        background: $prim-colour;
      }
    }
  }

  &__branding {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: $white;
    position: relative;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   //   left: -200px;
    //   //   top: -150px;
    //   width: 500px;
    //   height: 641px;
    //   background-image: url("~@/assets/images/large_vector.png?inline");
    //   background-size: cover;
    // }
    img {
      width: 800px;
      height: 741px;
      position: absolute;
      left: -250px;
      top: -200px;
      transform: rotate(-140deg);
    }

    h2 {
      margin-bottom: 1.5rem;
      color: inherit;
    }

    h2,
    p {
      position: relative;
      z-index: 10;
    }
  }

  &__nav {
    @media (min-width: 1200px) {
      padding-left: 7rem;
    }

    h3 {
      margin-bottom: 1.5rem;
    }

    li {
      padding: 0.5rem 0;
    }

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
}
</style>