import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],
  },
  getters: {},
  mutations: {
    increaseQuantity(state, payload) {
      payload.quantity++;
    },
    deleteItem(state, payload) {
      const itemIndex = state.cart.indexOf(payload);
      state.cart.splice(itemIndex, 1);
    },
    decreaseQuantity(state, payload) {
      if (payload.quantity > 1) payload.quantity--;
      // else
      // this.deleteItem(state, payload)
    },

    addToCart(state, payload) {
      console.log("payload", payload, " cart ", state.cart);
      let itemInCart = state.cart.find((data) => data.name == payload.name);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        Vue.set(payload, "quantity", "1");
        // payload.quantity = 1
        state.cart.unshift(payload);
      }
    },
  },
  actions: {},
});

export default store;
