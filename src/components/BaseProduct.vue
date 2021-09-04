<template>
  <div class="oneProduct bg-cream-light bg-fixed">
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
            <p class="font-serif font-medium text-lg">
              Brand: {{ pro.brand.brandName }}
            </p>
            <p class="font-serif font-medium text-lg">
              Product Name: {{ pro.proName }}
            </p>
            <p class="font-serif font-medium text-lg">
              Price: {{ pro.proPrice }} THB
            </p>
          </div>
        </router-link>
        <div class="flex justify-center mt-3 inset-x-0 bottom-0 space-x-5 pb-4">
          <router-link :to="'/product/' + pro.idPro">
            <base-button
              class="
                focus:outline-none
                font-serif
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
              font-serif
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
  props: [],
  emits: [],

  data() {
    return {
      brandArray: [],
      productArray: [],
      urlProduct: "http://localhost:3000/product",
      urlBrand: "http://localhost:3000/brand",
      urlImage: "http://localhost:3000/image",
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
};
</script>
