<template>
  <base-back></base-back>
    <div class="2xl:pt-36 2xl:pb-8 lg:pt-36 lg:pb-8 md:pt-32 md:pb-8 pt-32 pb-8 space-y-4">
      <h1
        class="font-prompt-regular-400 text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
      >
        Cart
      </h1>
    </div>

    <div class="w-11/12 mx-auto flex justify-center my-6">
      <div
        class="overflow-x-auto flex flex-col w-full p-8 text-gray-800 border-2 border-gray-500 pin-r pin-y md:w-4/5 lg:w-4/5"
      >
        <div class="overflow-hidden w-full flex-1">
          <table class="font-prompt-regular-400 w-full text-sm lg:text-base overflow-scroll overflow-x-auto" cellspacing="0">
            <thead class="border-b-2">
              <tr class="h-12 uppercase">
                <th class="md:table-cell"></th>
                <th class="text-left pl-4">Product</th>
                <th class="lg:text-center">
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
                    class="2xl:w-20 lg:w-20 md:w-20 w-40"
                  />
                </td>
                <td class="w-1/4">
                  <p class="mt-5 mb-2 md:ml-4 ml-4">{{ pc.product.proName }}</p>
                  <p class="mb-2 md:ml-4 ml-4">{{ pc.product.brand.brandName }}</p>
                  <div
                    class="mb-2 md:ml-4 ml-4 inline-flex font-prompt-regular-400 font-medium"
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
                  <div class="mb-5">
                    <button
                      @click="this.removeOne(pc)"
                      class="text-gray-700 md:ml-4"
                    >
                      <small>(Remove item)</small>
                    </button>
                  </div>
                </td>
                <td class="justify-center md:flex 2xl:mt-3 lg:mt-3 md:mt-1">
                  <div class="mx-auto 2xl:mt-14 lg:mt-14 md:mt-14 mt-1">
                    <div class="relative mx-auto flex flex-row w-1/2 h-8">
                      <input
                        type="number"
                        min="0"
                        step="1"
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
          <div class="w-full my-4 mt-6 mx-auto lg:flex">
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
                    {{
                      this.cart.totalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    THB
                  </div>
                </div>
                <div class="flex justify-between">
                  <button
                    @click="loopCartForDelAll()"
                    class="w-full py-3 mt-6 font-medium text-white uppercase bg-gray-light shadow  hover:bg-gray-dark focus:shadow-outline focus:outline-none"
                  >
                    <span class="ml-2 mt-5">Clear cart</span>
                  </button>
                  <button
                    @click="purchase(this.cart)"
                    class="w-full py-3 mt-6 font-medium text-white uppercase bg-red-light shadow  hover:bg-red-dark focus:shadow-outline focus:outline-none"
                  >
                    <span class="ml-2 mt-5">Purchase</span>
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
import { mapActions } from "vuex";
import BaseBack from "../components/BaseBack.vue";
export default {
  components: { BaseBack },
  data() {
    return {
      product: { brand: { brandName: "" } },
      cart: [],
      quantity: localStorage.amount,
      urlImage: "http://localhost:3000/main/image",
      // urlImage: `${process.env.VUE_APP_ROOT_API}main/image`,
      x: 0,
      cartDetails: [],
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url, {headers: {'Authorization': `Bearer ${this.$store.state.auth.token}`}});
      const data = await res.json(url);
      return data;
    },
     ...mapActions({
      setCart: "auth/saveNumCart"
    }),

    async persist(edit) {
      // console.log(edit)
      if (edit.proPerPiece <= edit.product.proAmount && edit.proPerPiece >= 1) {
        const editQuan = {
          idProduct: edit.product.idPro,
          amount: edit.proPerPiece,
          idCartDetail: edit.idCartDetail,
          sendIdColor: edit.color.idColor,
        };
        this.editAmount(editQuan);
      } else if (edit.proPerPiece > edit.product.proAmount) {
        alert("Sorry, Product is not enough.");
        edit.proPerPiece = 1;
        this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
        // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
      } else {
        const delProWhenZero = {
          idCartDetail: edit.idCartDetail,
        };
        this.removeOne(delProWhenZero);
      }
    },
    async editAmount(editQuan) {
      // console.log(editQuan);

      try {
        await fetch(
          `http://localhost:3000/member/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.idCartDetail}&idcolor=${editQuan.sendIdColor}`,
          // `${process.env.VUE_APP_ROOT_API}member/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.idCartDetail}&idcolor=${editQuan.sendIdColor}`,
          {
            method: "PUT",
            headers: {'Authorization': `Bearer ${this.$store.state.auth.token}`}
          }
        );
        this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
        // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async deleteOne(deletePro) {
      try {
        await fetch(
          `http://localhost:3000/member/deleteitemincart?idcartdetail=${deletePro.idCartDetail}`,
          // `${process.env.VUE_APP_ROOT_API}member/deleteitemincart?idcartdetail=${deletePro.idCartDetail}`,
          {
            method: "DELETE",
            headers: {'Authorization': `Bearer ${this.$store.state.auth.token}`}
          }
        );
        this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
        // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
        this.setCart(this.cart.cartDetails.length)
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
    removeOne(idCartDe) {
      const oneProDel = {
        idCartDetail: idCartDe.idCartDetail,
      };
      this.deleteOne(oneProDel);
      localStorage.amount--;
    },
    loopCartForDelAll() {
      if (this.cart.cartDetails.length == 0) {
        alert("Your cart is empty");
      } else {
        for (let i = 0; i < this.cart.cartDetails.length; i++) {
          this.cartDetails.push(this.cart.cartDetails[i].idCartDetail);
        }
        this.DelAll(this.cartDetails);
        localStorage.amount = 0;
      }
    },
    async DelAll(proForDel) {
      if (confirm("Are you sure to clear your cart?")) {
        try {
          await fetch(
            `http://localhost:3000/member/deletemultipleitemincart?idcartdetail=${proForDel}`,
            // `${process.env.VUE_APP_ROOT_API}member/deletemultipleitemincart?idcartdetail=${proForDel}`,
            {
              method: "DELETE",
              headers: {'Authorization': `Bearer ${this.$store.state.auth.token}`}
            }
          );
        } catch (error) {
          console.log(`Could not delete all product! ${error}`);
        }
        this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
        // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
        this.setCart(this.cart.cartDetails.length)
      }
    },
    async purchase(idPro) {
      if (idPro.cartDetails.length == 0) {
        alert("Your cart is empty");
      }
       else {
         console.log(this.product.proAmount)
        if (
          confirm(
            "Please check your cart carefully before buying, Do you want to buy this order?"
          )
        ) {
          console.log("เข้าpurchase");
          try {
            await fetch(
              `http://localhost:3000/member/purchase?idcart=${idPro.idCart}`,
              // `${process.env.VUE_APP_ROOT_API}member/purchase?idcart=${idPro.idCart}`,
              {
                method: "POST",
                headers: {'Authorization': `Bearer ${this.$store.state.auth.token}`}
              }
            );
            this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
            // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
            this.setCart(this.cart.cartDetails.length)
          } catch (error) {
            console.log(`Could not purchase! ${error}`);
          }
          this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
            // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
        }
      }
    // }
    },
  },
  async beforeCreated() {
     if(this.$store.state.auth.user.idRole.idRole == 3){
    this.product = await this.fetch('http://localhost:3000/main/product');
    // this.product = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/product`);
    this.cart = await this.fetch("http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount);
    // this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount);
  }
  }
};
</script>
