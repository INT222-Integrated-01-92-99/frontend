<template>
  <div class="bg-gray-extra-light pt-20">
    <button
      @click="this.$router.push('/product/views')"
      :class="{ 'text-red-light underline': routes == '/product/views' }"
      class="2xl:w-20 2xl:h-9 w-10 h-7 mt-3 ml-24 flex transition ease-in duration-300 transform hover:-translate-x-6 active:translate-y-0"
    >
      <img class="h-2/3" src="../assets/icon/arrow-back.svg" />
      <span class="font-prompt-regular-400">Back</span>
    </button>
  </div>
  <div class="2xl:pt-6 2xl:pb-3 lg:pt-6 lg:pb-8 pt-6 pb-8 space-y-4">
    <h1
      class="font-prompt-regular-400 text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
    >
      <slot name="header"></slot>
    </h1>
  </div>
  <div class="flex justify-center my-6">
    <div
      class="flex flex-col w-full p-8 text-gray-800 border-2 border-gray-500 pin-r pin-y md:w-4/5 lg:w-4/5"
    >
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead class="border-b-2">
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-center text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Qtd</span>
                <span class="hidden lg:inline">Quantity</span>
              </th>
              <th class="hidden text-center md:table-cell">Unit price</th>
              <th class="text-center">Total price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b-2">
              <td class="pb-4 md:table-cell">
                <slot name="img"></slot>
              </td>
              <td class="w-1/4">
                <p class="mt-5 mb-2 md:ml-4"><slot name="proName"></slot></p>
                <p class="mb-2 md:ml-4"><slot name="brandName"></slot></p>
                <div
                  class="mb-2 md:ml-4 inline-flex font-prompt-regular-400 font-medium"
                >
                  Color: &nbsp; <slot name="color"></slot>
                </div>
                <slot name="remove"></slot>
              </td>
              <td class="justify-center md:justify-end md:flex mt-6">
                <div class="mt-14">
                    <slot name="quantity"></slot>
                </div>
              </td>
              <td class="hidden text-center md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  <slot name="unitPrice"></slot> THB
                </span>
              </td>
              <td class="text-center">
                <span class="text-sm lg:text-base font-medium">
                  <slot name="totalPriceDetail"></slot> THB
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="w-full my-4 mt-6 -mx-2 lg:flex">
          <div class="lg:px-2 lg:w-full">
            <div class=" p-4 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Order Details</h1>
            </div>
            <div class="p-4">
              <div class="flex justify-between pt-4 border-b">
                <div
                  class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800"
                >
                  Total
                </div>
                <div
                  class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900"
                >
                  <slot name="totalPrice"></slot> THB
                </div>
              </div>
              <slot name="button"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      urlImage: "http://localhost:3000/image",
      // urlImage: `${process.env.VUE_APP_ROOT_API}image`,
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
  },
  async created() {
    this.cart = await this.fetch("http://localhost:3000/cart/1");
  },
};
</script>
