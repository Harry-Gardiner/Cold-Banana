<template>
  <button @click="consoleClick" class="Button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  methods: {
    consoleClick() {
      console.log("Button clicked");
    },
  },
};
</script>