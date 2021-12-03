<template>
  <body class="antialiased">
    <nav
      class="
        navbar
        mx-auto
        fixed
        w-full
        md:pr-16
        top-0
        text-black
        bg-white
        border-b-2 border-black
        flex flex-wrap
        items-center
        z-20
      "
    >
      <div
        class="
          2xl:ml-10
          lg:ml-10
          md:ml-8
          ml-8
          flex-1 flex
          justify-between
          items-center
        "
      >
        <router-link
          to="/"
          class="
            font-rozha
            2xl:text-2xl
            lg:text-2xl
            md:text-xl
            text-xl
            font-medium
            p-2
          "
          >PUSH & PULL
        </router-link>
      </div>

      <label
        for="menu-toggle"
        class="pointer-cursor lg:hidden block 2xl:mr-0 lg:mr-0 md:mr-0 mr-8"
        ><svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
      ></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul
            class="
              lg:flex
              items-center
              justify-between
              text-base text-gray-700
              pt-4
              lg:pt-0
              pl-10
            "
          >
            <li>
              <router-link
                to="/"
                :class="{ 'text-red-light': routes == 'Home' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/team"
                :class="{ 'text-red-light': routes == 'Team' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
                >Team</router-link
              >
            </li>
            <li>
              <router-link
                v-if="
                  $store.state.auth.user
                    ? $store.state.auth.user.idRole.idRole == 2 ||
                      $store.state.auth.user.idRole.idRole == 3
                    : false
                "
                to="/product/views"
                :class="{ 'text-red-light': routes == 'Product' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
                >Product</router-link
              >
              <div v-if="!$store.state.auth.user">
                <router-link
                  to="/product/views"
                  :class="{ 'text-red-light': routes == 'Product' }"
                  class="
                    font-prompt-regular-400
                    text-base
                    font-medium
                    lg:p-4
                    md:py-2
                    py-3
                    px-0
                    block
                    border-b-2 border-transparent
                    2xl:hover:border-red-light
                    lg:hover:border-red-light
                  "
                  >Product</router-link
                >
              </div>
            </li>
            <li>
              <router-link
                v-if="
                  $store.state.auth.user
                    ? $store.state.auth.user.idRole.idRole == 1
                    : false
                "
                to="/account"
                :class="{ 'text-red-light': routes == 'Account' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
                >Manage</router-link
              >
            </li>
            <li>
              <router-link
                v-if="!$store.state.auth.user"
                to="/signup"
                :class="{ 'text-red-light': routes == 'SignUp' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link
                v-if="!$store.state.auth.user"
                to="/signin"
                :class="{ 'text-red-light': routes == 'SignIn' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  lg:hover:border-red-light
                "
              >
                Sign In
              </router-link>
            </li>

            <li class="2xl:block lg:block md:hidden hidden">
              <div
                v-if="$store.state.auth.user"
                class="2xl:relative lg:p-4 py-3 px-0"
              >
                <button
                  @click="isOpen = !isOpen"
                  class="mt-1 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                    />
                  </svg>
                </button>
                <div
                  v-if="isOpen"
                  @click="isOpen = false"
                  class="
                    2xl:fixed
                    lg:fixed
                    top-0
                    right-0
                    bottom-0
                    left-0
                    h-full
                    w-full
                  "
                ></div>
                <div
                  v-if="isOpen"
                  class="
                    2xl:absolute
                    lg:absolute
                    bg-white
                    2xl:border 2xl:border-black 2xl:rounded-sm
                    lg:border lg:border-black lg:rounded-sm
                    w-max
                  "
                >
                  <router-link
                    to="/profile"
                    class="
                      font-prompt-regular-400
                      text-sm
                      font-medium
                      lg:p-4
                      md:py-2
                      py-3
                      px-0
                      block
                      hover:bg-red-light hover:text-white
                    "
                    >My Profile</router-link
                  >
                  <router-link
                    v-if="
                      $store.state.auth.user
                        ? $store.state.auth.user.idRole.idRole == 3
                        : false
                    "
                    to="/receipt"
                    class="
                      font-prompt-regular-400
                      text-sm
                      font-medium
                      lg:p-4
                      md:py-2
                      py-3
                      px-0
                      block
                      hover:bg-red-light hover:text-white
                    "
                    >Purchase History</router-link
                  >
                  <div
                    @click.prevent="signOut()"
                    class="
                      font-prompt-regular-400
                      text-sm
                      font-medium
                      lg:p-4
                      md:py-2
                      py-3
                      px-0
                      block
                      hover:bg-red-light hover:text-white
                      cursor-pointer
                    "
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            </li>
            <!-- เขียนใหม่ -->
            <li class="2xl:hidden lg:hidden md:block block">
              <router-link
                v-if="$store.state.auth.user"
                to="/profile"
                :class="{ 'text-red-light': routes == 'Profile' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                "
                >My Profile</router-link
              >
            </li>
            <li class="2xl:hidden lg:hidden md:block block">
              <router-link
                v-if="
                  $store.state.auth.user
                    ? $store.state.auth.user.idRole.idRole == 3
                    : false
                "
                to="/receipt"
                :class="{ 'text-red-light': routes == 'Receipt' }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                "
                >Purchase History</router-link
              >
            </li>
            <li class="2xl:hidden lg:hidden md:block block">
              <div
                v-if="$store.state.auth.user"
                @click.prevent="signOut()"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                  cursor-pointer
                "
              >
                Sign Out
              </div>
            </li>

            <li>
              <router-link
                v-if="
                  $store.state.auth.user
                    ? $store.state.auth.user.idRole.idRole == 3
                    : false
                "
                to="/cart"
                :class="{
                  'border-red-light': routes == '/cart',
                }"
                class="
                  font-prompt-regular-400
                  text-base
                  font-medium
                  lg:p-4
                  md:py-2
                  py-3
                  px-0
                  block
                  border-b-2 border-transparent
                  2xl:hover:border-red-light
                "
                ><button class="mt-1 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                      <path
                        d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"
                      />
                    </g>
                  </svg>
                </button>
                <span class="font-prompt-regular-400 total-quantity">
                  {{ $store.state.auth.cart }}
                </span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <router-view />
  </body>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {
      isOpen: false,
      initialAmount: 0,
      amountOnCart: 0,
      cart: [],
    };
  },
  methods: {
    toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    },
    async fetch(url) {
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${this.$store.state.auth.token}` },
      });
      const data = await res.json(url);
      return data;
    },
    ...mapActions({
      signOutAction: "auth/signOut",
      attempt: "auth/attempt",
      setCart: "auth/saveNumCart",
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Home",
        });
      });
    },
  },
  computed: {
    routes() {
      return this.$route.name;
    },
  },
  async created() {
    // console.log(this.$route.name);
    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.idRole.idRole == 3
    ) {
      this.cart = await this.fetch(
        "http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount
        // `${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount
      );
      // console.log(this.cart.cartDetails.length);
      this.setCart(this.cart.cartDetails.length);
      // console.log(this.$store.state.auth.cart);
    }
  },
};
</script>

<style>
#menu-toggle:checked + #menu {
  display: block;
}

nav {
  z-index: 20;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}

svg:hover {
  fill: #a34655;
}
</style>
