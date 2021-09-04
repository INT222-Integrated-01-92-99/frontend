<template>
  <nav
    class="navbar fixed w-full p-3 pr-20 md:pr-16 top-0 text-black bg-white shadow-md"
  >
    <ul class="2xl:space-x-10 space-x-8 mt-1 flex-row">
      <div class="space-x-5">
        <li class="pb-1 2xl:ml-20 lg:ml-16 ml-14">
          <router-link
            style="float:left"
            @click="changePath('/')"
            to="/"
            class="text-base font-serif font-medium p-2"
            >PUSH&PULL
          </router-link>
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/')"
            to="/"
            :class="{ 'text-red-light': routes == '/' }"
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/team')"
            to="/team"
            :class="{ 'text-red-light': routes == '/team' }"
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Team</router-link
          >
        </li>
        <li>
          <router-link
            style="float:left"
            @click="changePath('/product/views')"
            to="/product/views"
            :class="{ 'text-red-light': routes == '/product/views' }"
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
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
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
            >Sign Up</router-link
          >
        </li>
        <li class="pt-1">|</li>
        <li>
          <router-link
            style="float:right"
            @click="changePath('/sign-in')"
            to="/sign-in"
            :class="{ 'text-red-light': routes == '/sign-in' }"
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:text-red-light active:translate-y-0 p-2"
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
            class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:bg-red-light active:translate-y-0 p-2"
            ><button class="focus:outline-none">
              <img class="" src="./assets/icon/account.svg" />
            </button>
          </router-link>
        </li>
        <li>
          <router-link
            style="float:right"
            @click="changePath('/cart')"
            to="/cart"
            :class="{ 'bg-red-light rounded-sm text-white': routes == '/cart' }"
            class="text-base hover:text-white font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 hover:bg-red-light active:translate-y-0 p-2"
            ><button class="focus:outline-none">
              <img class="" src="./assets/icon/shopping-bag.svg" />
            </button>
            <span class="total-quantity"> {{ totalQuantity }} </span></router-link
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
    };
  },
  methods: {
    changePath(path) {
      this.routes = path;
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
    totalQuantity() {
      //มีproductทั้งหมดกี่ชิ้นในตระกร้า (ไว้แสดงบนรูปตระกร้า)
      // return this.amountOnCart + this.initialAmount;
      
      return localStorage.amount;
    },
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
