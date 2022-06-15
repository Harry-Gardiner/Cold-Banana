<template>
  <nav class="navbar container">
    <div class="navbar__branding">
      <h1>Chilled Grape</h1>
    </div>
    <ul class="navabr__navigation">
      <li><a href="/" class="navbar__navigation__link">Home</a></li>
      <li><a href="/" class="navbar__navigation__link">About</a></li>
      <li><a href="/" class="navbar__navigation__link">Blog</a></li>
      <li><a href="/" class="navbar__navigation__link">Pricing</a></li>
    </ul>
    <div class="navbar__icon">
      <i class="fa fa-bars"></i>
    </div>
    <ul class="navbar__mobile-nav">
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
};
</script>

<style lang="scss" scoped>
</style>
