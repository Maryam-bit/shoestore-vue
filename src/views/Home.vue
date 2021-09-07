<template>
  <div class="home">
    <Slider />
    <Heading trendingShoe />
    <collection-overview />
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Heading from "../components/Heading.vue";
import CollectionOverview from "../components/Collection-overview.vue";
export default {
  name: "Home",
  components: {
    Slider,
    Heading,
    CollectionOverview,
  },
};
</script>
