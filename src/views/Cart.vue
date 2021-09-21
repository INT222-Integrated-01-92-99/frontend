<template>
  <div class="detail h-screen">
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
    <!-- component -->
    <div class="w-11/12 container mx-auto mt-10 pb-0.5">
      <div class="flex my-10 space-x-5">
        <div class="w-3/4 bg-white border-2 border-gray-light px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-prompt-regular-400 font-medium text-2xl">
              Shopping Cart
            </h1>
            <!-- <h2 class="font-semibold text-2xl">3 Items</h2> -->
          </div>
          <div class="flex mt-10 mb-5">
            <h3
              class="font-prompt-regular-400 font-medium text-gray-600 text-sm uppercase w-2/5"
            >
              Product Details
            </h3>
            <h3
              class="font-prompt-regular-400 font-medium text-center text-gray-600 text-sm uppercase w-1/5"
            >
              Quantity
            </h3>
            <h3
              class="font-prompt-regular-400 font-medium text-center text-gray-600 text-sm uppercase w-1/5"
            >
              Price
            </h3>
            <h3
              class="font-prompt-regular-400 font-medium text-center text-gray-600 text-sm uppercase w-1/5"
            >
              Total
            </h3>
          </div>

          <!-- item 1 -->
          <div v-for="pc in cart.cartDetails" :key="pc.idCartDetail">
            <div class="flex items-center -mx-8 px-6 py-5">
              <!--<div v-for="pc in cart" :key="pc.idCart">-->
              <div class="flex w-2/5">
                <div class="w-2/5">
                  <img class="" :src="urlImage + '/' + pc.product.proPathImg" />
                </div>
                <div class="flex flex-col space-y-3 ml-4 flex-grow">
                  <span class="font-prompt-regular-400 font-medium text-sm">
                    {{ pc.product.proName }}</span
                  >
                  <span class="font-prompt-regular-400 font-medium text-gray-light text-sm">{{
                    pc.product.brand.brandName
                  }}</span>
                  <span class="inline-flex font-prompt-regular-400 font-medium text-sm">
                    Color: &nbsp;  
                    <div
                      class="
                      w-6
                      h-6
                      rounded-sm
                      border
                      "
                      v-bind:style="{ backgroundColor: pc.color.colorCode }"
                    ></div
                  ></span>
                  <a
                    href="#"
                    class="font-prompt-regular-400 font-medium hover:underline text-red-light text-xs"
                    >Remove</a
                  >
                </div>
              </div>
              <!-- quantity -->
              <div class="flex justify-center w-1/5">
                <!-- <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path
                  d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
              </svg>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
              </svg> -->
               <!-- <div class="relative flex flex-row w-1/3 h-8">
                  <input
                    type="number"
                    min="0"
                    v-model="quantity"
                    @change="persist(quantity)"
                    class="w-full font-prompt-regular-400 font-medium text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                  />
                </div> -->
                <div class="relative flex flex-row w-1/3 h-8">
                  <input
                    type="number"
                    min="0"
                    value="{{ this.cart.cartDetails.proPerPiece }}"
                    class="w-full font-prompt-regular-400 font-medium text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                  />
                </div>
              </div>
              <!-- quantity -->
              <span
                class="text-center w-1/5 font-prompt-regular-400 font-medium text-sm"
                >{{
                  pc.product.proPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
                THB</span
              >
              <span
                class="text-center w-1/5 font-prompt-regular-400 font-medium text-sm"
                >{{ (pc.proPerPiece * pc.product.proPrice).toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} THB</span
              >
            </div>
            <hr/>
          </div>
          <!-- item 1 -->
          <!-- </div> -->
        </div>
        <div id="summary" class="border-2 border-gray-light w-1/4 px-8 py-10">
          <h1
            class="font-prompt-regular-400 font-medium text-2xl border-b pb-8"
          >
            Order Summary
          </h1>
          <!-- <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div> -->
          <!-- <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase"
              >Shipping</label
            >
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div> -->
          <!-- <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
              >Promo Code</label
            >
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div> -->
          <!-- <button
            class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
          >
            Apply
          </button> -->
          <div class="mt-1">
            <div
              class="flex font-prompt-regular-400 font-medium justify-between py-6 text-base uppercase"
            >
              <span>Total cost</span>
              <span class="text-red-light font-semibold">600 THB</span>
            </div>
            <button
              @click="clearCart()"
              class="bg-gray-light font-prompt-regular-400 font-medium tracking-wider hover:bg-gray-dark py-3 text-sm text-white uppercase w-full"
            >
              Clear cart
            </button>
            <button
              class="mt-3 bg-red-light font-prompt-regular-400 font-medium tracking-wider hover:bg-red-dark py-3 text-sm text-white uppercase w-full"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- component -->
    <!-- <div class="flex justify-center pt-2">
      <div
        class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5"
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="pl-4 text-left">Product details</th>
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
                <td class="hidden w-1/4 pr-5 md:table-cell">
                  <img
                    src="../assets/base-clothes.png"
                    class="w-full h-full rounded-none"
                    alt="Thumbnail"
                  />
                </td>
                <td class="pb-32">
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
                <td class="pb-56 hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    10.00€
                  </span>
                </td>
                <td class="pb-56 text-right">
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
                  <button
                    @click="clearCart()"
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
    </div> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cart: [],
      quantity: localStorage.amount,
      image: { url: "" },
      urlImage: "http://localhost:3000/image",
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    clearCart() {
      confirm("Are you sure to clear your cart?")
      window.location.reload();
      localStorage.amount = 0;
      return localStorage.amount;
    },
    persist(quantity) {
      localStorage.amount = quantity;
      console.log(this.quantity);
    },
  },
  async created() {
    this.cart = await this.fetch("http://localhost:3000/cart/1");
    // this.image = await fetch(this.urlImage + "/" + this.cart.cartDetails.product.proPathImg);
    if (this.quantity) {
      this.quantity = localStorage.amount;
    }
    // console.log(this.urlImage + "/" + this.cart.cartDetails.product.proPathImg)
    console.log(this.cart.cartDetails[0].product.proName);
  },
};
</script>
