<template>
  <div class="navbar-container">
    <b-navbar
      toggleable="lg"
      class="navbar-container shadow fixed-top p-3"
      variant="light"
    >
      <img src="../assets/shoeLogo.png" alt="" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto nav-item">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link :to="{ name: 'Product' }"> Products </router-link>
          </b-nav-item>

          <b-nav-item>
            <!-- <router-link :to="{ name: 'Checkout' }"> -->
            <!-- <i class="fa fa-shopping-cart"></i>
              <span class="count">0</span> -->
            <!-- <b-dropdown id="dropdown-dropleft" dropleft class="m-2 fa fa-shopping-cart p-0">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown> -->
            <!-- </router-link> -->

            <div class="dropdown m-0 p-0 dropleft">
              <button
                class="btn dropdown-btn m-0 p-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-shopping-cart"></i>
                <div class="counter">
                  <span class="count">{{ cart.length }}</span>
                </div>
              </button>

              <div
                class="dropdown-menu mt-4"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="items">
                  <div v-if="cart.length">
                    <Dropdown :cart="cart" />
                  </div>
                  <p v-else>Your cart is empty</p>
                </div>

                <div class="dropdown-item bbtn-droopdown">
                  <div class="moreProd text-center">
                    <router-link :to="{ name: 'Checkout' }">
                      <Button value="Go to Checkout" />
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Dropdown from "../components/Dropdown.vue";
export default {
  name: "Navbar",
  components: {
    Button,
    Dropdown,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style lang="sass">
@import '../scss/main.scss'
</style>
