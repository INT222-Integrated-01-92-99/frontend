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
              <tr v-for="pc in cart.cartDetails" :key="pc.idCartDetail" class="border-b-2">
                <td class="pb-4 md:table-cell">
                  <img
                    :src="urlImage + '/' + pc.product.proPathImg"
                    class="w-20"
                  />
                </td>
                <td class="w-1/4">
                  <p class="mt-5 mb-2 md:ml-4">{{ pc.product.proName }}</p>
                  <p class="mb-2 md:ml-4">{{ pc.product.brand.brandName }}</p>
                  <div class="mb-2 md:ml-4 inline-flex font-prompt-regular-400 font-medium">
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
                  ></div>
                  <div class="mb-5">
                    <button
                      @click="this.removeOne(pc)"
                      class="text-gray-700 md:ml-4"
                    >
                      <small>(Remove item)</small>
                    </button>
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
          <div class="w-full my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4 bg-gray-100 rounded-full">
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
                    17,859.3 THB
                  </div>
                </div>
                <button @click="loopCartForDelAll()"
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-light shadow item-center hover:bg-gray-dark focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-2 mt-5px">Clear cart</span>
                </button>
                <button
                  class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-red-light shadow item-center hover:bg-red-dark focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-2 mt-5px">Purchase</span>
                </button>
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
      cart: [],
      quantity: localStorage.amount,
      image: { url: "" },
      // urlImage: "http://localhost:3000/image",
      urlImage: `${process.env.VUE_APP_ROOT_API}image`,
      x: 0,
      cartDetails: [],
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },

    persist(edit) {
      if (edit.proPerPiece <= edit.product.proAmount && edit.proPerPiece >=1) {
        const editQuan = {
          idProduct: edit.product.idPro,
          amount: edit.proPerPiece,
          idCartDetail: edit.idCartDetail,
          sendIdColor: edit.color.idColor,
        };
        this.editAmount(editQuan);
      } else if(edit.proPerPiece > edit.product.proAmount) {
        alert("Sorry, Product is not enough.");
      } else{
        this.deleteOne(edit.idCartDetail);
      }
      // localStorage.amount = quantity;
      // console.log(this.quantity);
    },
    async editAmount(editQuan) {
      console.log(editQuan);

      try {
        await fetch(
          // `http://localhost:3000/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.idCartDetail}&idcolor=${editQuan.sendIdColor}`,
          `${process.env.VUE_APP_ROOT_API}edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.idCartDetail}&idcolor=${editQuan.sendIdColor}`,
          {
            method: "PUT",
          }
        );
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async deleteOne(deletePro) {
      try {
        await fetch(
          // `http://localhost:3000/deleteitemincart?idcartdetail=${deletePro.idCartDetail}`,
          `${process.env.VUE_APP_ROOT_API}deleteitemincart?idcartdetail=${deletePro.idCartDetail}`,
          {
            method: "DELETE",
          }
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
    removeOne(idCartDe) {
      const oneProDel = {
        idCartDetail: idCartDe.idCartDetail,
      };
      this.deleteOne(oneProDel);
    },
    loopCartForDelAll(){
      for(let i=0; i<this.cart.cartDetails.length; i++){
        this.cartDetails.push(this.cart.cartDetails[i].idCartDetail)
      }
      this.DelAll(this.cartDetails);
      
  },
  async DelAll(proForDel) {
      confirm("Are you sure to clear your cart?");
      try {
        await fetch(
          // `http://localhost:3000/deletemultipleitemincart?idcartdetail=${proForDel}`,
          `${process.env.VUE_APP_ROOT_API}deletemultipleitemincart?idcartdetail=${proForDel}`,
          {
            method: "DELETE",
          }
        );
      } catch (error) {
        console.log(`Could not delete all product! ${error}`);
      }

      // window.location.reload();
      // localStorage.amount = 0;
      // return localStorage.amount;
    },
  },
  async created() {
    // this.cart = await this.fetch("http://localhost:3000/cart/1");
    this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}cart/1`);
    // this.image = await fetch(this.urlImage + "/" + this.cart.cartDetails.product.proPathImg);
    if (this.quantity) {
      this.quantity = localStorage.amount;
    }
    // console.log(this.urlImage + "/" + this.cart.cartDetails.product.proPathImg)
    console.log(this.cart.cartDetails[0].product.proName);
  },
};
</script>
