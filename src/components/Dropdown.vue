<template>
  <div>
    <div class="dropdown-item p-3" v-for="item in cart" :key="item.id">
      <div class="image">
        <img :src="item.imageUrl" alt="shoes" />
      </div>
      <div class="details">
        <span class="name">{{ item.name }}</span>
        <span class="price">{{ item.quantity }} X ${{ item.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  props: {
    cart: Array,
  },
};
</script>
<style lang="sass">
@import '../scss/main.scss'
</style>
