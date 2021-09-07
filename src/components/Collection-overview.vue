<template>
  <div class="container-fluid p-5">
    <div class="row">
      <div class="col-md-3 p-0" v-for="data in trendingShoes" :key="data.id">
        <menu-item :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./Menu-item.vue";
import SHOE_DATA from "../shoedata";
export default {
  name: "CollectionOverview",
  components: {
    MenuItem,
  },
  data() {
    return {
      shoedata: SHOE_DATA,
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
  created() {
    this.shoedata
      .filter((item) => item.id < 8)
      .map((item) => console.log(item));
  },
};
</script>
