<template>
  <div @scroll="backToTop()" class="productHorizontal">
    <div class="pr-20 flex justify-start">
      <button
        @click="topFunction()"
        id="myBtn"
        class="hidden fixed z-auto p-4 bottom-5 right-8 bg-red-light rounded-full focus:outline-none hover:bg-red-dark"
      >
        <img src="../assets/icon/arrow-up.svg" />
      </button>
    </div>
    <div class="2xl:pt-6 2xl:pb-8 lg:pt-6 lg:pb-8 pt-6 pb-8 space-y-4">
      <h1
        class="font-prompt-regular-400 text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
      >
        View Products
      </h1>
    </div>
    <div class="pt-2 2xl:w-1/3 lg:w-1/3 w-1/2 relative mx-auto text-gray-600 flex-col mb-10">
      <input
        class="font-prompt-regular-400 border-b-2 border-gray-400 bg-white h-10 w-full px-1 pr-16 text-sm focus:border-gray-dark focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background:new 0 0 56.966 56.966;"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
      <div class="space-x-6 w-full">
        <span class="font-prompt-regular-400 cursor-pointer hover:underline"
          >LOUIS VUITTON</span
        >
        <span class="font-prompt-regular-400 cursor-pointer hover:underline"
          >SHEIN</span
        >
        <span class="font-prompt-regular-400 cursor-pointer hover:underline"
          >H&M</span
        >
        <span class="font-prompt-regular-400 cursor-pointer hover:underline"
          >UNIQLO</span
        >
      </div>
    </div>
    <base-product></base-product>
  </div>
</template>

<script>
import BaseProduct from "./BaseProduct.vue";
export default {
  name: "Product",
  components: {
    BaseProduct,
  },

  props: [],
  emits: [],

  data() {
    return {};
  },
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    backToTop() {
      var mybutton = document.getElementById("myBtn");

      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.backToTop);
  },
};
</script>
