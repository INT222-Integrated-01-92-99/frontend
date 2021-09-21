<template>
  <nav
    class="navbar mx-auto fixed w-full p-3 pr-20 md:pr-16 top-0 text-black bg-white border-b-2 border-black"
  >
    <ul class="2xl:space-x-10 space-x-8 mt-1 flex-row">
      <div class="space-x-5">
        <li class="2xl:ml-20 lg:ml-16 ml-14">
          <router-link
            style="float:left"
            @click="changePath('/')"
            to="/"
            class="font-rozha text-2xl font-medium p-2"
            >PUSH & PULL
          </router-link>
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/')"
            to="/"
            :class="{ 'text-red-light': routes == '/' }"
            class="mt-1 font-prompt-regular-400 text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/team')"
            to="/team"
            :class="{ 'text-red-light': routes == '/team' }"
            class="mt-1 font-prompt-regular-400 text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Team</router-link
          >
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/product/views')"
            to="/product/views"
            :class="{ 'text-red-light': routes == '/product/views' }"
            class="mt-1 font-prompt-regular-400 text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Product</router-link
          >
        </li>
      </div>
      <div class="space-x-5" style="float:right">
        <li>
          <router-link
            style="float:right"
            @click="changePath('/sign-up')"
            to="/sign-up"
            :class="{ 'text-red-light': routes == '/sign-up' }"
            class="mt-1 font-prompt-regular-400 text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Sign Up</router-link
          >
        </li>
        <li class="pt-2">|</li>
        <li>
          <router-link
            style="float:right"
            @click="changePath('/sign-in')"
            to="/sign-in"
            :class="{ 'text-red-light': routes == '/sign-in' }"
            class="mt-1 font-prompt-regular-400 text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
          >
            Sign In
          </router-link>
        </li>
        <li>
          <router-link
            style="float:right"
            @click="changePath('/profile')"
            to="/profile"
            :class="{ 'bg-red-light rounded-sm': routes == '/profile' }"
            class="text-base font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:bg-red-light active:translate-y-0 p-2"
            ><button class="mt-1 focus:outline-none">
              <img class="" src="./assets/icon/account.svg" />
            </button>
          </router-link>
        </li>
        <li>
          <router-link
            style="float:right"
            @click="changePath('/cart')"
            to="/cart"
            :class="{
              'bg-red-light rounded-sm text-white': routes == '/cart',
            }"
            class="text-base hover:text-white font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:bg-red-light active:translate-y-0 p-2"
            ><button class="mt-1 focus:outline-none">
              <img class="" src="./assets/icon/shopping-bag.svg" />
            </button>
            <span class="font-prompt-regular-400 total-quantity">
              {{ numCart() }}
            </span></router-link
          >
        </li>
      </div>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      routes: "/",
      initialAmount: 0,
      amountOnCart: 0,
      cart: [],
    };
  },
  methods: {
    changePath(path) {
      this.routes = path;
    },
    numCart(){
      // console.log(this.cart.cartDetails.length)
      // return this.cart.cartDetails.length
    },
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
  },
  // watch: {
  //   trueToCart: function check() {
  //     if (this.trueToCart == true) {
  //       this.totalQuantity();
  //     }
  //   },
  // },
  computed: {
    // totalQuantity() {
    //   //มีproductทั้งหมดกี่ชิ้นในตระกร้า (ไว้แสดงบนรูปตระกร้า)
    //   // return this.amountOnCart + this.initialAmount;
    //   // return localStorage.amount;
    //   return this.cart.cartDetails.length
    // },
  },
  async created() {
    this.cart = await this.fetch("http://localhost:3000/cart/1");
  },
};
</script>

<style>
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}

li {
  float: left;
  display: block;
  text-align: left;
  text-decoration: none;
}
</style>
