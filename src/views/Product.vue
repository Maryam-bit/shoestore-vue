<template>
  <div class="container-fluid p-5 mt-5 pt-5">
    <Heading trendingShoe />
    <div class="row">
      <div class="col-md-3 p-0" v-for="data in shoedata" :key="data.id">
        <menu-item :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "../components/Menu-item.vue";
import Heading from "../components/Heading.vue";
import SHOE_DATA from "../shoedata";
export default {
  name: "Product",
  components: {
    MenuItem,
    Heading,
  },
  data() {
    return {
      shoedata: SHOE_DATA,
      // trendingShoe: true
    };
  },
  computed: {
    trendingShoes() {
      return this.shoedata
        .filter((item) => item.id < 9)
        .map((item) => {
          return item;
        });
    },
  },
};
</script>
