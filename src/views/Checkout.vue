<template>
  <div class="check-out mt-5 pt-5">
    <Heading checkOut />
    <template v-if="cart.length">
      <div class="container" v-for="item in cart" :key="item.id">
        <div class="row pb-5 pt-4">
          <div class="col-md-1 col-sm-0 col-0"></div>
          <div class="col-md-2 col-sm-3 col-3 text-center">
            <img class="image" alt="shoes" :src="item.imageUrl" width="90px" />
          </div>
          <div class="col-md-2 col-sm-2 col-2 mt-5 text-center">
            <h3 class="name">{{ item.name }}</h3>
          </div>
          <div class="col-md-2 col-sm-3 col-3 mt-5 text-center">
            <button class="btn" @click="removeQuantity(item)">&#10094;</button>
            <span>{{ item.quantity }}</span>
            <button class="btn" @click="addQuantity(item)">&#10095;</button>
          </div>
          <div class="col-md-2 col-sm-2 col-2 mt-5 text-center">
            <h2 class="price">${{ item.price * item.quantity }}</h2>
          </div>
          <div class="col-md-2 col-sm-2 col-2 mt-5 btn-container text-center">
            <button class="removeItem" @click="removeItem(item)">X</button>
          </div>
          <div class="col-md-1 col-sm-0 col-0"></div>
        </div>
      </div>
    </template>
    <p v-else>Your cart is empty</p>
  </div>
</template>

<script>
import Heading from "../components/Heading.vue";
export default {
  name: "Checkout",
  components: {
    Heading,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    addQuantity(item) {
      this.$store.commit("increaseQuantity", item);
    },
    removeQuantity(item) {
      this.$store.commit("decreaseQuantity", item);
    },
    removeItem(item) {
      this.$store.commit("deleteItem", item);
    },
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
