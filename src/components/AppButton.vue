<template>
  <button @click="consoleClick" v-bind:class="['button', type]">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: String,
  },
  methods: {
    consoleClick() {
      console.log("Button clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>