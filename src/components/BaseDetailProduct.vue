<template>
  <div class="detailProduct">
    <div class="grid place-items-center h-screen pt-36">
      <section
        class="
          flex
          2xl:flex-row
          lg:flex-row
          flex-col
          gap-11
          px-5
          w-11/12
          md:max-w-max
        "
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
          <div class="flex flex-row">
            <div
              @click="
                $store.state.auth.user &&
                $store.state.auth.user.idRole.idRole == 3
                  ? selectColor(color)
                  : ''
              "
              v-for="color in product.prowithcolor"
              :key="color.color.idColor"
              class="w-6 h-6 rounded-sm m-2 border"
              v-bind:style="{ backgroundColor: color.color.colorCode }"
              :class="[
                {
                  'border hover:border-black transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 hover:opacity-75 cursor-pointer':
                    $store.state.auth.user &&
                    $store.state.auth.user.idRole.idRole == 3,
                },
                {
                  'w-7 h-7 border-8 border-red-500':
                    products.item.color?.idColor === color.color.idColor
                },
              ]"
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

            <div v-if="$store.state.auth.user">
              <div v-if="$store.state.auth.user.idRole.idRole == 3">
                <div class="mt-3 space-x-3 inline-flex">
                  <span>Quantity : </span>
                  <span class="relative flex flex-row w-20">
                    <input
                      type="number"
                      min="0"
                      v-model="this.initialAmount"
                      @change="boxQuan(this.initialAmount, product)"
                      class="
                        w-full
                        font-medium
                        text-center text-gray-700
                        bg-gray-200
                        outline-none
                        focus:outline-none
                        hover:text-black
                        focus:text-black
                      "
                    />
                  </span>
                </div>
                <span
                  class="font-prompt-regular-400 text-center text-red-600 mt-2"
                  v-if="SelectAmount"
                >
                  *Limit 99 pieces per product <br />Please select amount and
                  amount cannot be negative number!
                </span>
              </div>

              <div
                class="
                  flex
                  2xl:justify-start
                  lg:justify-start
                  justify-center
                  lg:pb-5
                  pb-3
                  lg:pt-5
                  pt-3
                  space-x-5
                "
              >
                <div
                  v-if="
                    $store.state.auth.user
                      ? $store.state.auth.user.idRole.idRole == 2
                      : false
                  "
                  class="space-x-5"
                >
                  <router-link :to="'/product/' + product.idPro">
                    <base-button
                      class="
                        font-prompt-regular-400
                        focus:outline-none
                        py-1
                        px-7
                        rounded-sm
                        hover:bg-red-dark
                      "
                      bgcolor="bg-red-light"
                      txtcolor="text-white"
                      txtbutt="Edit"
                    ></base-button>
                  </router-link>

                  <base-button
                    @click.prevent="
                      (sendToDelete = true), (sendId = product.idPro)
                    "
                    class="
                      font-prompt-regular-400
                      focus:outline-none
                      py-1
                      px-6
                      rounded-sm
                      hover:bg-gray-dark
                    "
                    bgcolor="bg-gray-light"
                    txtcolor="text-white"
                    txtbutt="Delete"
                  ></base-button>
                  <base-delete
                    :send-to-delete="sendToDelete"
                    :send-id="sendId"
                  ></base-delete>
                </div>

                <base-button
                  v-if="
                    $store.state.auth.user
                      ? $store.state.auth.user.idRole.idRole == 3
                      : false
                  "
                  @click="addToCart()"
                  class="
                    font-prompt-regular-400
                    focus:outline-none
                    mt-3
                    py-1
                    px-6
                    rounded-sm
                    hover:bg-red-dark
                  "
                  bgcolor="bg-red-light"
                  txtcolor="text-white"
                  txtbutt="Add to cart"
                ></base-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  props: [],
  emits: [],

  data() {
    return {
      product: { brand: { brandName: "" } },
      // urlProduct: "http://localhost:3000/main/product",
      urlProduct: `${process.env.VUE_APP_ROOT_API}main/product`,
      sendToDelete: false,
      sendId: 0,
      // urlImage: "http://localhost:3000/main/image",
      urlImage: `${process.env.VUE_APP_ROOT_API}main/image`,
      image: { url: "" },
      initialAmount: 1,
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
      error: "",
    };
  },
  methods: {
    async fetch(url) {
      let res;
      if (this.$store.state.auth.user) {
        res = await fetch(url, {
          headers: { Authorization: `Bearer ${this.$store.state.auth.token}` },
        });
      } else {
        res = await fetch(url);
      }
      const data = await res.json(url);
      return data;
    },
    selectColor(color) {
      this.products.item = color;
      // console.log(this.products.item);
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
              // console.log(
              //   "ตอนนี้this.idCartDetailArray=" + this.idCartDetailArray
              // );
              this.idCartDetail = this.idCartDetailArray.find(
                (c) =>
                  c.product.idPro === this.product.idPro &&
                  c.color.idColor == this.products.item.color.idColor
              );
              // console.log(
              //   "idCartDetailที่จะส่งไป =" + this.idCartDetail.idCartDetail
              // );
              const editProDetail = {
                idProduct: this.product.idPro,
                amount: this.initialAmount,
                sendIdCartDetail: this.idCartDetail.idCartDetail,
                sendIdColor: this.products.item.color.idColor,
              };
              this.editDetailPro(editProDetail);
            } else {
              console.log("ADD");
              const proForCar = {
                idProduct: this.product.idPro,
                amount: this.initialAmount,
                idCart: this.$store.state.auth.user.idAccount,
                sendIdColor: this.products.item.color.idColor,
              };
              this.addToCartDetail(proForCar);
            }
          } else {
            console.log("Add new product in cart");
            const proForCart = {
              idProduct: this.product.idPro,
              amount: this.initialAmount,
              idCart: this.$store.state.auth.user.idAccount,
              sendIdColor: this.products.item.color.idColor,
            };
            this.addToCartDetail(proForCart);
          }
        } else {
          alert("Sorry, Product is not enough.");
        }
      }
    },
    async editDetailPro(editQuan) {
      // console.log(editQuan);

      try {
        await fetch(
          // `http://localhost:3000/member/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.sendIdCartDetail}&idcolor=${editQuan.sendIdColor}`,
          `${process.env.VUE_APP_ROOT_API}member/edititemincart?idpro=${editQuan.idProduct}&amount=${editQuan.amount}&idcartdetail=${editQuan.sendIdCartDetail}&idcolor=${editQuan.sendIdColor}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        alert("Edit your cart already");
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async addToCartDetail(proInCart) {
      // console.log(proInCart);
      try {
        const response = await fetch(
          // `http://localhost:3000/member/additemtocart?idpro=${proInCart.idProduct}&amount=${proInCart.amount}&idcart=${proInCart.idCart}&idcolor=${proInCart.sendIdColor}`,
          `${process.env.VUE_APP_ROOT_API}member/additemtocart?idpro=${proInCart.idProduct}&amount=${proInCart.amount}&idcart=${proInCart.idCart}&idcolor=${proInCart.sendIdColor}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        this.error = await response.json();
        // console.log(this.error);
        if (this.error.errorCode == "AMOUNT_VALUE") {
          alert(
            "Sorry, Product is not enough. Please check amount of this product."
          );
        }
        this.cart = await this.fetch(
          // "http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount
          `${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount
        );

        this.setCart(this.cart.cartDetails.length);
        this.$forceUpdate();
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    checkChoosePro() {
      this.ChooseColor = this.products.item.length === 0 ? true : false;
      this.SelectAmount = this.initialAmount === 0 || this.initialAmount > 99;
    },
    boxQuan(initial, product) {
      if (initial < 0) {
        this.SelectAmount = true;
        this.initialAmount;
      } else {
        if (initial > product.proAmount) {
          alert("Sorry, Product is not enough.");
          this.initialAmount;
        }
      }
    },
    ...mapActions({
      setCart: "auth/saveNumCart",
    }),
  },
  computed: {},
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    this.product = await this.fetch(this.urlProduct + `/${id}`);
    this.image = await fetch(this.urlImage + "/" + this.product.proPathImg);
    if (this.$store.state.auth.user) {
      this.cart = await this.fetch(
        // "http://localhost:3000/member/cart/" + this.$store.state.auth.user.idAccount
        `${process.env.VUE_APP_ROOT_API}member/cart/` + this.$store.state.auth.user.idAccount
      );
      // console.log(this.cart);
    }
  },
};
</script>
