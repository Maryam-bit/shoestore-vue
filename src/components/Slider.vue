<template>
  <div class="main-image-container">
    <div class="img-content">
      <p>THINKING OF BUYING A SHOES</p>
      <h2>
        Trending <br />
        Shoes
      </h2>
      <Button value="Shop Now" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Slider",
  components: {
    Button,
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
