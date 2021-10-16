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
              <tr
                v-for="pc in cart.cartDetails"
                :key="pc.idCartDetail"
                class="border-b-2"
              >
                <td class="pb-4 md:table-cell">
                  <img
                    :src="urlImage + '/' + pc.product.proPathImg"
                    class="w-20"
                  />
                </td>
                <td class="w-1/4">
                  <p class="mt-5 mb-2 md:ml-4">{{ pc.product.proName }}</p>
                  <p class="mb-2 md:ml-4">{{ pc.product.brand.brandName }}</p>
                  <div
                    class="mb-2 md:ml-4 inline-flex font-prompt-regular-400 font-medium"
                  >
                    Color: &nbsp;
                    <div
                      class="
                      w-6
                      h-6
                      rounded-sm
                      border
                      "
                      v-bind:style="{ backgroundColor: pc.color.colorCode }"
                    ></div>
                  </div>
                </td>
                <td class="justify-center md:justify-end md:flex mt-6">
                  <div class="mt-14">
                    <div class="relative flex flex-row w-1/2 h-8">
                      <input
                        type="number"
                        min="0"
                        v-model="pc.proPerPiece"
                        @change="persist(pc)"
                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                      />
                    </div>
                  </div>
                </td>
                <td class="hidden text-center md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    {{
                      pc.product.proPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    THB
                  </span>
                </td>
                <td class="text-center">
                  <span class="text-sm lg:text-base font-medium">
                    {{
                      (pc.proPerPiece * pc.product.proPrice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    THB
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

