<template>
  <div class="oneProduct">
  <div v-if="productArray.length == 0" class="font-prompt-regular-400 text-lg text-center text-gray-dark"> Product not found. </div>
    <div class="flex flex-wrap justify-center gap-x-20 gap-y-10">
      <base-card
        v-for="pro in productArray"
        :key="pro.idPro"
        class="
          shadow-md
          2xl:w-1/4
          lg:w-1/3
          w-1/2
          transform
          hover:scale-110
          motion-reduce:transform-none
          duration-700
        "
      >
        <router-link :to="'/detail?id=' + pro.idPro">
          <img class="mb-6" :src="urlImage + '/' + pro.proPathImg" />
          <div class="mt-3 px-6 text-left">
            <p class="font-prompt-regular-400 text-lg">
              <span class="font-medium">Brand :</span> {{ pro.brand.brandName }}
            </p>
            <p class="font-prompt-regular-400 text-lg">
              <span class="font-medium">Product Name :</span> {{ pro.proName }}
            </p>
            <p class="font-prompt-regular-400 text-lg">
              <span class="font-medium">In stocks :</span> {{ pro.proAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="font-prompt-regular-400 text-lg">
              <span class="font-medium">Price : </span><span class="text-red-light font-medium"> {{ pro.proPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} THB</span>
            </p>
          </div>
        </router-link>
        <div class="flex justify-center mt-3 inset-x-0 bottom-0 space-x-5 pb-4">
          <router-link :to="'/product/' + pro.idPro">
            <base-button
              class="
                focus:outline-none
                font-prompt-regular-400
                text-base
                py-1
                lg:px-8
                px-6
                rounded-sm
                hover:bg-red-dark
              "
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="Edit"
            ></base-button>
          </router-link>
          <base-button
            @click.prevent="(sendId = pro.idPro), (sendToDelete = true)"
            class="
              focus:outline-none
              font-prompt-regular-400
              text-base
              lg:px-6
              px-4
              rounded-sm
              hover:bg-gray-dark
            "
            bgcolor="bg-gray-light"
            txtcolor="text-white"
            txtbutt="Delete"
          ></base-button>
        </div>
      </base-card>
      <base-delete
        :send-to-delete="sendToDelete"
        :send-id="sendId"
        @will-set-false="setFalse"
      >
      </base-delete>
    </div>
  </div>
</template>

<script>
export default {
  props: ['search-pro','brand-id','show-all'],
  emits: [],

  data() {
    return {
      brandArray: [],
      productArray: [],
      // urlProduct: `${process.env.VUE_APP_ROOT_API}product`,
      // urlBrand: `${process.env.VUE_APP_ROOT_API}brand`,
      // urlImage: `${process.env.VUE_APP_ROOT_API}image`,
      urlProduct: "http://localhost:3000/main/product",
      urlBrand: "http://localhost:3000/main/brand",
      urlImage: "http://localhost:3000/main/image",
      sendToDelete: false,
      sendId: 0,
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    setFalse(id) {
      this.sendToDelete = false;
      this.productArray = this.productArray.filter((p) => p.idPro !== id);
      this.sendId = 0;
    },
  },
  async created() {
    this.brandArray = await this.fetch(this.urlBrand);
    this.productArray = await this.fetch(this.urlProduct);
  },
   watch: {
    searchPro: async function check() {
        this.productArray = this.searchPro
      },
    brandId: async function checkIdBrand() {
      this.productArray = await this.fetch(this.urlProduct);
      this.productArray = this.productArray.filter(f => f.brand.idBrand == this.brandId)
      },
    showAll: async function all(){
      this.productArray = await this.fetch(this.urlProduct);
    }
      }
};
</script>
