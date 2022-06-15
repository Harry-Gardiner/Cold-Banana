<template>
  <nav class="navbar container">
    <div class="navbar__branding">
      <h1>Chilled Grape</h1>
    </div>
    <ul class="navabr__navigation d-none d-md-flex">
      <li><a href="/" class="navbar__navigation__link">Home</a></li>
      <li><a href="/" class="navbar__navigation__link">About</a></li>
      <li><a href="/" class="navbar__navigation__link">Blog</a></li>
      <li><a href="/" class="navbar__navigation__link">Pricing</a></li>
    </ul>
    <div class="navbar__icon d-flex d-md-none">
      <i @click="toggleMobileNav" class="fa fa-bars"></i>
    </div>
    <ul v-show="mobileNav" class="navbar__mobile-nav d-md-none">
      <li><a href="/" class="navbar__navigation__link">Home</a></li>
      <li><a href="/" class="navbar__navigation__link">About</a></li>
      <li><a href="/" class="navbar__navigation__link">Blog</a></li>
      <li><a href="/" class="navbar__navigation__link">Pricing</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
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
</style>
