<template>
  <div class="detail h-screen">
    <!-- component -->
    <div class="flex justify-center pt-24">
      <div
        class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5"
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="hidden pb-4 md:table-cell">
                  <img
                    src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                    class="w-20 rounded"
                    alt="Thumbnail"
                  />
                </td>
                <td>
                  <p class="mb-2 md:ml-4">Earphone</p>
                  <p class="mb-2 md:ml-4">Brand</p>
                  <p class="mb-2 md:ml-4">Color</p>
                  <button type="submit" class="text-gray-700 md:ml-4">
                    <small>(Remove item)</small>
                  </button>
                </td>
                <td class="justify-center md:justify-end md:flex mt-6">
                  <div class="w-20 h-10">
                    <div class="relative flex flex-row w-full h-8">
                      <input
                        type="number"
                        min="0"
                        v-model="quantity"
                        @change="persist(quantity)"
                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                      />
                    </div>
                  </div>
                </td>
                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    10.00€
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium">
                    20.00€
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-full">
              <div class="p-4">
                <div class="flex justify-between border-b">
                  <div
                    class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800"
                  >
                    Subtotal
                  </div>
                  <div
                    class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-red-light"
                  >
                    148,827.53 THB
                  </div>
                </div>
                <div class="flex">
                <button
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-red-light shadow item-center hover:bg-red-dark focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-2 mt-5px">Proceed to checkout</span>
                </button>
                <button @click="clearCart()"
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-light shadow item-center hover:bg-gray-dark focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-2 mt-5px">Clear cart</span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      quantity: localStorage.amount
    };
  },
  methods: {
    clearCart(){
      window.location.reload();
      localStorage.amount = 0
      return localStorage.amount;
    },
    persist(quantity){
      localStorage.amount = quantity;
      // this.quantity = localStorage.amount;
      console.log(this.quantity)
      // console.log(quantity);
      // console.log(localStorage.amount); 
      // this.quantity = $event.target.value;
    }
  },
  //    watch: {
  //   quantity: function check() {
  //     this.persist();
      
  //   },
  // },
   async created() {
    if (this.quantity) {
      this.quantity = localStorage.amount;
    }
   }
};
</script>
