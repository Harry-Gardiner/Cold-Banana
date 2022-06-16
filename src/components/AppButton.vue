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
.button {
  background: linear-gradient(90deg, #73e0a9 0%, #5b68df 100%);
  background-size: 110%;
  border-radius: 100px;
  color: $white;
  border: none;
  transition: 0.2s ease all;
  width: fit-content;

  &:hover {
    transform: scale(105%);
  }

  &--large {
    font-size: 22px;
    height: 60px;
    padding: 0 4rem;
  }

  &--small {
    font-size: 16px;
    height: 40px;
    padding: 0.5rem 4rem;
  }
}
</style>