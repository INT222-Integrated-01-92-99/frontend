<template>
  <div @scroll="backToTop()" class="productHorizontal">
    <div class="pr-20 flex justify-start">
      <button
        @click="topFunction()"
        id="myBtn"
        class="hidden fixed z-10 2xl:p-4 lg:p-4 md:p-4 p-2 bottom-5 right-8 bg-red-light rounded-full shadow-xl focus:outline-none hover:bg-red-dark"
      >
        <img src="../assets/icon/arrow-up.svg" />
      </button>
    </div>
    <div class="2xl:pt-36 2xl:pb-8 lg:pt-36 lg:pb-8 md:pt-32 md:pb-8 pt-32 pb-8 space-y-4">
      <h1
        class="font-prompt-regular-400 text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
      >
        View Products
      </h1>
    </div>
    <div
      class="pt-2 2xl:w-1/3 lg:w-1/3 md:w-2/3 w-3/4 relative mx-auto text-gray-600 flex-col mb-10"
    >
      <form @submit.prevent="getData">
        <input
          class="font-prompt-regular-400 border-b-2 border-gray-400 bg-white h-10 w-full px-1 pr-16 text-sm focus:border-gray-dark focus:outline-none"
          type="search"
          name="search"
          v-model="this.query"
          placeholder="Search by product name"
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
      </form>
      <div class="2xl:space-x-6 space-x-3 w-full">
        <span @click="showAll = this.i++" class="font-prompt-regular-400 2xl:text-base lg:text-base md:text-base text-xs uppercase cursor-pointer hover:underline"
          >all</span
        >
        <span
          @click="sendBrand(b)"
          v-for="b in brand"
          :key="b.idBrand"
          class="font-prompt-regular-400 2xl:text-base lg:text-base md:text-base text-xs cursor-pointer hover:underline"
          >{{ b.brandName }}</span
        >
      </div>
    </div>
    <base-product :searchPro="searchPro" :brandId="brandId" :showAll ="showAll"></base-product>
  </div>
</template>

<script>
import axios from "axios";
import BaseProduct from "./BaseProduct.vue";
export default {
  name: "Product",
  components: {
    BaseProduct,
  },

  props: [],
  emits: [],

  data() {
    return {
      brand: [],
      keepId: 1,
      query: null,
      searchPro: [],
      brandId: 0,
      showAll: 0,
      i: 1
    };
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
    sendBrand(brand) {
      this.brandId = brand.idBrand;
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    // async getData(){
    //   try {
    //     await fetch(
    //       `http://localhost:3000/search?proname=${this.query}&idbrand=${this.keepId}`,
    //       // `${process.env.VUE_APP_ROOT_API}edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.idCartDetail}&idcolor=${editQuan.sendIdColor}`,
    //       {
    //         method: "GET",
    //       }
    //     );
    //   } catch (error) {
    //     console.log(`Could not save! ${error}`);
    //   }
    // }

    async getData() {
      // await axios.get(`http://localhost:3000/search?proname=${this.query}&idbrand=${this.keepId}`).then((response)=>{
      await axios
        .get(
          `http://localhost:3000/main/search?proname=${this.query}&idbrand=${this.keepId}`
          // `${process.env.VUE_APP_ROOT_API}search?proname=${this.query}&idbrand=${this.keepId}`
        )
        .then((response) => {
          this.searchPro = response.data;
          console.log(this.searchPro);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    window.addEventListener("scroll", this.backToTop);
    this.brand = await this.fetch("http://localhost:3000/main/brand");
    // this.brand = await this.fetch(`${process.env.VUE_APP_ROOT_API}brand`);
  },
  // watch: {
  //   brandId: async function check() {
  //       if(this.brandId == 1){
  //         console.log("1")
  //       }else if(this.brandId == 2){
  //         console.log("2")
  //       }else if(this.brandId == 3){
  //         console.log("3")
  //       }else{
  //         console.log("4")
  //       }
  //     }
  // },
};
</script>
