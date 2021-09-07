<template>
  <div class="menu-item-container card m-4">
    <img class="card-img-top" :src="data.imageUrl" alt="Card cap" />
    <div class="card-body p-0 m-0 d-block text-center p-2">
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <span class="name d-block">{{ data.name }}</span>
      <span class="price">${{ data.price }}</span>
      <p v-show="data.sale" class="saleY">
        {{ data.sale }}
      </p>
    </div>
    <button className="[!sale ? btn : btn2]" @click="addToCart(data)">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    data: Object,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addToCart(cart) {
      this.$store.commit("addToCart", cart);
      console.log("my cart", this.cart);
    },
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
