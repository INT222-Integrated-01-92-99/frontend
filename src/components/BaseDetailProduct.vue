<template>
  <div class="detailProduct">
    <div class="grid place-items-center h-screen">
      <section
        class="flex 2xl:flex-row lg:flex-row flex-col gap-11 px-5 w-11/12 md:max-w-max"
      >
        <div class="flex flex-col 2xl:justify-between mx-auto w-1/2">
          <img class="" :src="image.url" />
        </div>
        <div class="font-prompt-regular-400 space-y-2 w-3/4 mx-auto">
          <h3 class="2xl:text-2xl text-lg font-medium">
            {{ product.proName }}
          </h3>
          <h3 class="text-red-light 2xl:text-2xl text-lg font-semibold">
            {{
              product.proPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            THB
          </h3>
          <h3 class="2xl:text-base text-lg font-medium">
            {{ product.brand.brandName }}
          </h3>
          <p class="2xl:text-base text-sm">
            {{ product.proDescript }}
          </p>
          <p class="2xl:text-base text-sm">MFD : {{ product.proMfd }}</p>
          <span>Color</span>
          {{ products.item }}
          <div class="flex flex-row">
            <div
              @click="selectColor(color)"
              v-for="color in product.prowithcolor"
              :key="color.color.idColor"
              class="
                  w-6
                  h-6
                  rounded-sm
                  border
                  hover:border-black
                  transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2
                  hover:opacity-75
                  m-2
                  cursor-pointer
                "
              v-bind:style="{ backgroundColor: color.color.colorCode }"
              :class="{
                'w-7 h-7 border-8 border-red-500':
                  products.item.color?.idColor === color.color.idColor,
                // 'border-8 border-red-500': product.prowithcolor
              }"
            ></div>
            <div
              class="font-prompt-regular-400 text-center text-red-600 mt-2"
              v-if="ChooseColor"
            >
              Please select color!
            </div>
          </div>
          <div class="cart">
            <div class="inStocks flex flex-row">
              <p>In stocks : {{ product.proAmount }}</p>
            </div>
            <div class="mt-3 space-x-3 inline-flex">
              <span>Quantity : </span>
              <span class="relative flex flex-row w-20">
                <input
                  type="number"
                  min="0"
                  v-model="this.initialAmount"
                  @change="boxQuan(this.initialAmount, product)"
                  class="w-full font-medium text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                />
              </span>
              <!--  <button class="cart_button" @click="updateCart('subtract')">
                -
              </button>

              <span class="cart_quantity">{{ initialAmount }}</span>

              <button class="cart_button" @click="updateCart('add')">
                +
              </button> -->
            </div>
            <span
              class="font-prompt-regular-400 text-center text-red-600 mt-2"
              v-if="SelectAmount"
            >
              Please select amount and amount cannot be negative number!
            </span>
          </div>

          <div
            class="flex 2xl:justify-start lg:justify-start justify-center lg:pb-5 pb-3 lg:pt-5 pt-3 space-x-5"
          >
            <router-link :to="'/product/' + product.idPro">
              <base-button
                class="font-prompt-regular-400 focus:outline-none py-1 px-7 rounded-sm hover:bg-red-dark"
                bgcolor="bg-red-light"
                txtcolor="text-white"
                txtbutt="Edit"
              ></base-button>
            </router-link>

            <base-button
              @click.prevent="(sendToDelete = true), (sendId = product.idPro)"
              class="font-prompt-regular-400 focus:outline-none px-6 rounded-sm hover:bg-gray-dark"
              bgcolor="bg-gray-light"
              txtcolor="text-white"
              txtbutt="Delete"
            ></base-button>
            <base-delete
              :send-to-delete="sendToDelete"
              :send-id="sendId"
            ></base-delete>

            <base-button
              @click="addToCart()"
              class="font-prompt-regular-400 focus:outline-none px-6 rounded-sm hover:bg-red-dark"
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="Add to cart"
            ></base-button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  emits: [],

  data() {
    return {
      product: { brand: { brandName: "" } },
      // urlProduct: "http://localhost:3000/product",
      urlProduct: `${process.env.VUE_APP_ROOT_API}product`,
      sendToDelete: false,
      sendId: 0,
      // urlImage: "http://localhost:3000/image",
      urlImage: `${process.env.VUE_APP_ROOT_API}image`,
      image: { url: "" },
      initialAmount: 0,
      colorArray: [],
      cart: [],
      account: [],
      products: {
        item: [],
      },
      idCartDetailArray: [],
      idCartDetail: [],
      ChooseColor: false,
      SelectAmount: false,
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    // updateCart(updateType) {
    //   if (updateType === "subtract") {
    //     if (this.initialAmount !== 0) {
    //       //ก็แค่เพื่อไม่ให้จำนวนสินค้าติดลบ
    //       this.initialAmount--;
    //     }
    //   } else {
    //     this.initialAmount++;
    //   }
    // },
    selectColor(color) {
      this.products.item = color;
      console.log(this.products.item);
    },
    addToCart() {
      // console.log(this.cart.cartDetails.map((c) => c.product.idPro));
      this.checkChoosePro();
      if (!this.ChooseColor && !this.SelectAmount) {
        if (this.initialAmount <= this.product.proAmount) {
          if (
            this.cart.cartDetails
              .map((c) => c.product.idPro)
              .includes(this.product.idPro)
          ) {
            if (
              this.cart.cartDetails
                .map((c) => c.color.idColor)
                .includes(this.products.item.color?.idColor)
            ) {
              console.log("edit");
              for (let i = 0; i < this.cart.cartDetails.length; i++) {
                this.idCartDetailArray.push(this.cart.cartDetails[i]);
                console.log(this.idCartDetailArray);
              }
              console.log(
                "ตอนนี้this.idCartDetailArray=" + this.idCartDetailArray
              );
              this.idCartDetail = this.idCartDetailArray.find(
                (c) =>
                  c.product.idPro === this.product.idPro &&
                  c.color.idColor == this.products.item.color.idColor
              );
              console.log(
                "idCartDetailที่จะส่งไป =" + this.idCartDetail.idCartDetail
              );
              const editProDetail = {
                idProduct: this.product.idPro,
                amount: this.initialAmount,
                sendIdCartDetail: this.idCartDetail.idCartDetail,
                sendIdColor: this.products.item.color.idColor,
              };
              this.editDetailPro(editProDetail);
            
            } else {
              //      if (
              //   this.cart.cartDetails
              //     .map((c) => !c.product.idPro)
              //     .includes(this.product.idPro)
              // ){
              console.log("ADD");
              const proForCar = {
                idProduct: this.product.idPro,
                amount: this.initialAmount,
                idCart: this.account.idAccount,
                sendIdColor: this.products.item.color.idColor,
              };
              this.addToCartDetail(proForCar);
              // }
            }
          } else {
            console.log("Add new product in cart");
            const proForCart = {
              idProduct: this.product.idPro,
              amount: this.initialAmount,
              idCart: this.account.idAccount,
              sendIdColor: this.products.item.color.idColor,
            };
            this.addToCartDetail(proForCart);
            // localStorage.amount =
            //   parseInt(localStorage.amount) + this.initialAmount;
            // // window.location.reload();
            // this.initialAmount = 0;
          }
        } else {
          alert("Sorry, Product is not enough.");
        }
      }
    },
    async editDetailPro(editQuan) {
      console.log(editQuan);

      try {
        await fetch(
          // `http://localhost:3000/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.sendIdCartDetail}&idcolor=${editQuan.sendIdColor}`,
          `${process.env.VUE_APP_ROOT_API}edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.sendIdCartDetail}&idcolor=${editQuan.sendIdColor}`,
          {
            method: "PUT",
          }
        );
        alert("Edit your cart already")
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async addToCartDetail(proInCart) {
      console.log(proInCart);

      try {
        await fetch(
          // `http://localhost:3000/additemtocart?idpro=${proInCart.idProduct}&amount=${proInCart.amount}&idcart=${proInCart.idCart}&idcolor=${proInCart.sendIdColor}`,
          `${process.env.VUE_APP_ROOT_API}additemtocart?idpro=${proInCart.idProduct}&amount=${proInCart.amount}&idcart=${proInCart.idCart}&idcolor=${proInCart.sendIdColor}`,
          {
            method: "POST",
          }
        );
        // this.cart = await this.fetch("http://localhost:3000/cart/1");
        this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}cart/1`);
        alert("Add to cart")
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    checkChoosePro() {
      this.ChooseColor = this.products.item.length === 0 ? true : false;
      this.SelectAmount = this.initialAmount === 0 ? true : false;
    },
    boxQuan(initial, product) {
      // localStorage.amount = quantity;
      // console.log(this.quantity);
      if(initial < 0){
        this.SelectAmount = true;
        this.initialAmount = 0;
      } else {
        if(initial > product.proAmount){
        alert("Sorry, Product is not enough.");
        this.initialAmount = 0;
        }
      }
    },
    //   amountProduct(id){
    // 	return this.totalCart;
    // }
  },
  computed: {},
  async created() {
    // if (localStorage.amount) {
    //   this.initialAmount = localStorage.amount;
    // }

    //ไม่ได้ใช้
    // this.colorArray = await this.fetch("http://localhost:3000/color");
    // this.colorArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}color`);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    this.product = await this.fetch(this.urlProduct + `/${id}`);
    this.image = await fetch(this.urlImage + "/" + this.product.proPathImg);
    // this.cart = await this.fetch("http://localhost:3000/cart/1");
    this.cart = await this.fetch(`${process.env.VUE_APP_ROOT_API}cart/1`);
    // this.account = await this.fetch("http://localhost:3000/account/1");
    this.account = await this.fetch(`${process.env.VUE_APP_ROOT_API}account/1`);
  },
};
</script>
