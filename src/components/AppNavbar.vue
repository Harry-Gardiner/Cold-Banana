<template>
  <header>
    <img
      :src="require('@/assets/images/Vector_min.png')"
      class="vector vector--two"
    />
    <nav class="navbar container">
      <div class="navbar__branding">
        <h2>Chilled Grape</h2>
        <img
          :src="require('@/assets/images/Vector_min.png')"
          class="vector vector--one"
        />
      </div>
      <ul
        class="
          navbar__navigation
          d-none d-lg-flex
          align-items-center
          justify-content-end
        "
      >
        <li><a href="/" class="navbar__link">Home</a></li>
        <li><a href="/" class="navbar__link">About</a></li>
        <li><a href="/" class="navbar__link">Blog</a></li>
        <li><a href="/" class="navbar__link">Pricing</a></li>
        <AppButton class="navbar__button" type="button--small">Login</AppButton>
      </ul>
      <div class="navbar__icon d-flex d-lg-none">
        <i
          class="fa-solid fa-bars"
          @click="toggleMobileNav"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="navbar__mobile-nav d-lg-none">
          <li><a href="/" class="navbar__link">Home</a></li>
          <li><a href="/" class="navbar__link">About</a></li>
          <li><a href="/" class="navbar__link">Blog</a></li>
          <li><a href="/" class="navbar__link">Pricing</a></li>
          <li><a href="/" class="navbar__link">Login</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  name: "AppNavbar",
  components: {
    AppButton,
  },
  data() {
    return {
      mobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;

  .vector {
    width: 300px;
    height: 290px;

    @media (min-width: 768px) {
      width: 566px;
      height: 450px;
    }

    position: absolute;

    &--one {
      top: -170px;
      left: -50px;
      transform: rotate(-30deg);

      @media (min-width: 768px) {
        top: -350px;
        left: -140px;
      }

      @media (min-width: 1200px) {
        top: -180px;
        left: -150px;
      }
    }

    &--two {
      transform: rotate(-120deg);
      right: -350px;
      top: 25vh;

      @media (min-width: 768px) {
        right: -300px;
      }

      @media (min-width: 1200px) {
        right: -200px;
      }
    }
  }
}

.navbar {
  position: sticky;
  margin-top: 20px;
  z-index: 99;
  width: 100%;
  top: 0;
  transition: 0.5s ease all;
  color: $heading-colour;

  &__branding {
    text-transform: uppercase;
    h2 {
      position: relative;
      z-index: 10;
      color: $white;
    }
  }

  ul,
  &__link {
    font-weight: 600;
    list-style: none;
    text-decoration: none;
    color: $heading-colour;
  }

  &__icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;

    i {
      cursor: pointer;
      font-size: 30px;
      transition: 0.8s ease all;
      color: #5b68df;
    }

    .icon-active {
      transform: rotate(90deg);
    }
  }

  &__link {
    transition: 0.5s ease all;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: purple;
    }
  }

  &__mobile-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background: $prim-colour;
    top: 0;
    left: 0;
    padding-left: 2rem;
    padding-top: 2rem;
    z-index: 99;

    li {
      margin: 1rem 0;

      a {
        color: $white;
      }
    }
  }

  &__button {
    margin-left: 4rem;
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nave-enter-to {
    transform: translateX(0);
  }

  &__navigation {
    flex: 1;
    z-index: 50;

    li {
      padding: 0 1.5rem;
    }
  }
}
</style>
