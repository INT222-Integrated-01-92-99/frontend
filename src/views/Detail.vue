<template>
  <div class="detail bg-cream-light h-screen">
    <div class="mx-auto fixed w-full bg-gray-extra-light pt-20">
      <button
        @click="this.$router.push('/product/views')"
        class="2xl:w-20 2xl:h-9 w-10 h-7 mt-3 ml-24 flex justify-center transition ease-in duration-300 transform hover:-translate-x-6 active:translate-x-0"
      >
        <img class="h-2/3" src="../assets/icon/arrow-back.svg" />
        <span class="font-prompt-regular-400">Back</span>
      </button>
    </div>
    <base-detail-product></base-detail-product>
  </div>
</template>

<script>
import BaseDetailProduct from "../components/BaseDetailProduct.vue";
export default {
  components: { BaseDetailProduct },
  data() {
    return {
      routes: "/product/views",
    };
  },
};
</script>
