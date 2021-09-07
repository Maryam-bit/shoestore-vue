<template>
  <div class="button-container">
    <button class="btn">{{ value }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: String,
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
