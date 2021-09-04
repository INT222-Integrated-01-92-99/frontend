<template>
  <div class="productHorizontal">
    <div class="bg-cream-light h-screen">
      <div class="2xl:pt-6 2xl:pb-8 lg:pt-6 lg:pb-8 pt-6 pb-8 space-y-4">
        <h1
          class="font-serif text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
        >
          View Products
        </h1>
      </div>

      <base-product></base-product>

      <footer class="bg-cream-light p-4 flex justify-end">
        <button
          id="scrollToTopBtn"
          class="focus:outline-none rounded-full w-12"
          @click="backToTop"
        >
          <img src="../assets/icon/up-arrow.svg" class="-mt-6" />
        </button>
      </footer>
    </div>
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
    backToTop() {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      var rootElement = document.documentElement;

      function scrollToTop() {
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
    },
  },
};
</script>
