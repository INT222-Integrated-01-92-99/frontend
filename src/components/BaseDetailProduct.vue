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
            {{ product.proPrice }} THB
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
                'border-8 border-red-500': products.item.color?.idColor=== color.color.idColor
                  // 'border-8 border-red-500': product.prowithcolor
                  
              }"
            ></div>
          </div>
          <div class="cart">
            <div class="inStocks flex flex-row">
              <p>In stocks : {{ product.proAmount }}</p>
            </div>
            <span>Quantity: </span>
            <button class="cart_button" @click="updateCart('subtract')">
              -
            </button>

            <span class="cart_quantity">{{ initialAmount }}</span>

            <button class="cart_button" @click="updateCart('add')">+</button>
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
      urlProduct: "http://localhost:3000/product",
      sendToDelete: false,
      sendId: 0,
      urlImage: "http://localhost:3000/image",
      image: { url: "" },
      initialAmount: 0,
      colorArray: [],
      cart: [],
      cartId: {
        item: [],
      },
      account: [],
      products: {
        item: [],
      },

      //totalCart:0,
      // proColor: []
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    updateCart(updateType) {
      if (updateType === "subtract") {
        if (this.initialAmount !== 0) {
          //ก็แค่เพื่อไม่ให้จำนวนสินค้าติดลบ
          this.initialAmount--;
        }
      } else {
        this.initialAmount++;
      }
    },
    selectColor(color) {
      this.products.item = color
      console.log(this.products.item);
      console.log(this.cart.cartDetails.product)
    },
    addToCart() {
      console.log(this.cart.cartDetails.map((c) => c.product.idPro));
      if(this.initialAmount <= this.cartD.product.proAmount){
      if (
        this.cart.cartDetails
          .map((c) => c.product.idPro)
          .includes(this.product.idPro)
      ) {
        console.log("edit karbbbbbbbb");
      } else {
        console.log("Add cart karbbbbbbbb");
        console.log(typeof this.products.item);
        const proForCart = {
          idProduct: this.product.idPro,
          amount: this.initialAmount,
          idCart: this.account.idAccount,
          sendIdColor: this.products.item.color.idColor,
        };
        this.addToCartDetail(proForCart);
        localStorage.amount =
          parseInt(localStorage.amount) + this.initialAmount;
        // window.location.reload();
        this.initialAmount = 0;
      }
      }else{
        alert("Sorry, Product is not enough.")
      }
    },
    async addToCartDetail(proInCart) {
      console.log(proInCart);

      try {
        await fetch(
          `http://localhost:3000/additemtocart?idpro=${proInCart.idProduct}&amount=${proInCart.amount}&idcart=${proInCart.idCart}&idcolor=${proInCart.sendIdColor}`,
          {
            method: "POST",
          }
        );
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },

    //     async editProduct(editPro) {
    //     this.checkForm()
    //     editPro.proCol = editPro.proCol.map(e => e = {idPro: editPro.idProduct, color: e.color});
    //     const jsonPro = await JSON.stringify({
    //         idPro: editPro.idProduct,
    //         brand: editPro.brandName,
    //         proName: editPro.proName,
    //         proDescript: editPro.proDescription,
    //         proPrice: editPro.proPrice,
    //         proMfd: editPro.proMFDDATE,
    //         proPathImg: editPro.proPathImg,
    //         item: editPro.proCol,});
    //     console.log(jsonPro);
    //     const blob = await new Blob([jsonPro], {
    //       type: "application/json",
    //     });
    //     let formData = new FormData();
    //     await formData.append("editProduct", blob);
    //     if(this.imgFile == null){
    //     const res = await fetch("http://localhost:3000/edit",{
    //       method: "PUT",
    //       body: formData
    //     });
    //     const data = await res.json()
    //     console.log(data);
    //   } else{
    //     formData.append("image", editPro.imgFile, editPro.proPathImg);
    //     await fetch("http://localhost:3000/edit/image",{
    //       method: "PUT",
    //       body: formData
    //     });
    //   }

    // },

    //   amountProduct(id){
    // 	return this.totalCart;
    // }
  },
  computed: {},
  async created() {
    // if (localStorage.amount) {
    //   this.initialAmount = localStorage.amount;
    // }
    this.colorArray = await this.fetch("http://localhost:3000/color");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    this.product = await this.fetch(this.urlProduct + `/${id}`);
    this.image = await fetch(this.urlImage + "/" + this.product.proPathImg);
    this.cart = await this.fetch("http://localhost:3000/cart/1");
    this.cartD = await this.fetch("http://localhost:3000/cartdetails");
    this.account = await this.fetch("http://localhost:3000/account/1");
  },
};
</script>
