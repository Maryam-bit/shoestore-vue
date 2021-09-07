<template>
  <div class="heading-container mt-5">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <h2 v-if="trendingShoe">
      <span>T</span> RENDING <span>S</span> H<span class="o">O</span>ES
    </h2>
    <h2 v-else-if="checkOut">
      <span>Y</span><span class="o">O</span>UR <span>C</span>
      <span class="o">A</span>RT
    </h2>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    trendingShoe: Boolean,
    checkOut: Boolean,
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
