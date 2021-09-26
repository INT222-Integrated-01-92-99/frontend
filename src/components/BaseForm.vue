<template>
  <div class="form">
    <form class="w-5/6 2xl:w-3/5 mx-auto">
      <base-card class="w-full mx-auto">
        <p
          class="
            font-prompt-regular-400
            text-center
            2xl:text-5xl
            text-4xl
            font-bold
            lg:pt-10
            pt-6
            lg:pb-10
            pb-5
          "
        >
          {{ proId == "add" ? "Add Product" : "Edit Product" }}
        </p>
        <div class="flex flex-col 2xl:space-x-14 lg:space-x-16">
          <div class="space-y-5 flex flex-col">
            <img :src="image" class="w-80 mx-auto" />
            <input
              type="file"
              class="font-prompt-regular-400 focus:outline-none w-1/4 mx-auto"
              @change="uploadImg"
            />
            <div
              v-if="UpPic"
              class="font-prompt-regular-400 text-center text-red-600"
            >
              Please upload your Product Images!
            </div>
            <div class="flex flex-row justify-center flex-wrap w-1/2 mx-auto">
              <div
                @click="selectColor(color)"
                v-for="color in colorArray"
                :key="color.idColor"
                class="
                  items-center
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
                v-bind:style="{ backgroundColor: color.colorCode }"
                :class="{
                  'border-2 border-red-600': product.item
                    .map((c) => c.color.idColor)
                    .includes(color.idColor),
                }"
              ></div>

              <div
                class="font-prompt-regular-400 text-center text-red-600 mt-2"
                v-if="ChooseColor"
              >
                Please select color!
              </div>
            </div>
          </div>
          <!--          <div class="flex flex-row justify-center flex-wrap w-1/2 mx-auto">
              <div
                @click="ifSelectCol=true, sendColor=color"
                v-for="color in colorArray"
                :key="color.idColor"
                class="
                  items-center
                  w-6
                  h-6
                  rounded-sm
                  border
                  hover:border-black
                  m-2
                  cursor-pointer
                "
                v-bind:style="{ backgroundColor: color.colorCode }"
                :class="{
                  'border-8 border-red-500': product.item
                    .map((c) => c.color.idColor)
                    .includes(color.idColor),
                }"
              ><base-select-color :if-select-col="ifSelectCol" :send-color="sendColor"></base-select-color></div>

              <div
                class="font-prompt-regular-400 text-center text-red-600 mt-2"
                v-if="ChooseColor"
              >
                Please select color!
              </div>
            </div>
          </div> -->
          <div
            class="
              lg:space-y-3
              space-y-4
              flex flex-col
              2xl:pr-16
              lg:pr-24
              md:px-10
            "
          >
            <div class="flex flex-col">
              <label
                class="label font-prompt-regular-400 lg:text-lg text-base"
                for="brands"
                >Brand:</label
              >
              <select
                id="brands"
                name="brandlist"
                form="brandform"
                v-model="enterBrand"
                :class="{ 'bg-red-50': BrandInput }"
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
              >
                <option
                  v-for="brand in brandArray"
                  :key="brand.idBrand"
                  :value="brand"
                >
                  {{ brand.brandName }}
                </option>
              </select>
            </div>
            <p v-if="BrandInput" class="font-prompt-regular-400 text-red-600">
              Please select the Brand!
            </p>
            <div class="flex flex-col">
              <label class="font-prompt-regular-400 lg:text-lg text-base"
                >Product Name:
              </label>
              <input
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
                :class="{ 'bg-red-50': ProInput }"
                id="proName"
                type="text"
                size="32"
                placeholder="Product Name"
                v-model.trim="enterProName"
              />
            </div>
            <p v-if="ProInput" class="font-prompt-regular-400 text-red-600">
              Please enter your Product Name!
            </p>
            <div class="flex flex-col">
              <label class="font-prompt-regular-400 lg:text-lg text-base"
                >In stocks:
              </label>
              <input
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
                :class="{ 'bg-red-50': InStocksInput }"
                id="proAmount"
                type="number"
                placeholder="InStocks"
                v-model.number="enterInStocks"
              />
            </div>
            <p
              v-if="InStocksInput"
              class="font-prompt-regular-400 text-red-600"
            >
              Please enter in stocks! (Do not use decimal number, negative
              integer and comma.)
            </p>
            <div class="flex flex-col">
              <label class="font-prompt-regular-400 lg:text-lg text-base"
                >Price:
              </label>
              <input
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
                :class="{ 'bg-red-50': PriceInput }"
                id="price"
                type="number"
                placeholder="Price"
                v-model.trim="enterPrice"
              />
            </div>
            <p v-if="PriceInput" class="font-prompt-regular-400 text-red-600">
              Please enter your Price! (Do not use decimal number, negative
              integer and comma.)
            </p>
            <div class="flex flex-col">
              <label class="font-prompt-regular-400 lg:text-lg text-base"
                >Manufactured Date:
              </label>
              <input
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
                :class="{ 'bg-red-50': MFDInput }"
                id="date"
                type="date"
                v-model.trim="enterDate"
              />
            </div>
            <p v-if="MFDInput" class="font-prompt-regular-400 text-red-600">
              Please select the Manufactured Date!
            </p>
            <div class="flex flex-col">
              <label class="font-prompt-regular-400 lg:text-lg text-base"
                >Description:
              </label>
              <textarea
                class="
                  input
                  font-prompt-regular-400
                  w-full
                  h-20
                  mt-1
                  py-1
                  px-4
                  rounded-sm
                  bg-white
                  dark:bg-gray-800
                  border border-gray-400
                  dark:border-gray-700
                  text-gray-800
                  focus:border-indigo-500
                  focus:outline-none
                "
                :class="{ 'bg-red-50': DescriptInput }"
                id="descript"
                placeholder="Desciption"
                v-model.trim="enterDescript"
              />
            </div>
            <p
              v-if="DescriptInput"
              class="font-prompt-regular-400 text-red-600"
            >
              Please enter the Description!
            </p>
          </div>
        </div>
        <div class="flex justify-center lg:pb-11 pb-7 lg:pt-10 pt-7">
          <div class="space-x-5">
            <base-button
              @click.prevent="submitForm"
              class="
                font-prompt-regular-400
                lg:text-base
                text-sm
                py-1
                px-11
                rounded-sm
                hover:bg-red-dark
                hover:text-white
              "
              bgcolor="bg-red-light"
              txtcolor="text-white"
              :txtbutt="proId == 'add' ? 'Add' : 'Save'"
            ></base-button>
            <base-button
              @click.prevent="clearForm, this.$router.push('/product/views')"
              class="
                font-prompt-regular-400
                lg:text-base
                text-sm
                py-1
                px-9
                rounded-sm
                hover:bg-gray-dark
                hover:text-white
              "
              bgcolor="bg-gray-light"
              txtcolor="text-white"
              txtbutt="Cancel"
            ></base-button>
          </div>
        </div>
      </base-card>
    </form>
  </div>
</template>

<script>
export default {
  emits: [],
  props: ["pro-id"],
  data() {
    return {
      idProduct: "",
      imgFile: null,
      image: require("../assets/icon/clothes-hanger.svg"),
      brandArray: [],
      enterBrand: "",
      enterProName: "",
      enterDate: "",
      enterInStocks: "",
      enterPrice: "",
      enterDescript: "",
      UpPic: false,
      BrandInput: false,
      ProInput: false,
      MFDInput: false,
      InStocksInput: false,
      PriceInput: false,
      DescriptInput: false,
      ChooseColor: false,
      colorArray: [],
      product: {
        item: [],
      },
      productArray: [],
      // urlImage: "http://localhost:3000/image",
      urlImage: `${process.env.VUE_APP_ROOT_API}image`,
      ifSelectCol: false,
      sendColor: null,
    };
  },
  methods: {
    checkForm() {
      this.UpPic =
        this.image == require("../assets/icon/clothes-hanger.svg")
          ? true
          : false;
      this.BrandInput = this.enterBrand === "" ? true : false;
      this.ProInput = this.enterProName === "" ? true : false;
      this.MFDInput = this.enterDate === "" ? true : false;
      this.InStocksInput =
        this.enterInStocks === "" ||
        this.enterInStocks % 1 != 0 ||
        this.enterInStocks < 0;
      this.PriceInput =
        this.enterPrice === "" ||
        this.enterPrice % 1 != 0 ||
        this.enterPrice < 0;
      this.DescriptInput = this.enterDescript === "" ? true : false;
      this.ChooseColor = this.product.item.length === 0 ? true : false;
    },
    clearForm() {
      (this.image = require("../assets/icon/clothes-hanger.svg")),
        (this.enterBrand = "");
      this.enterProName = "";
      this.enterDate = "";
      this.enterInStocks = "";
      this.enterPrice = "";
      this.enterDescript = "";
      this.product = {
        item: [],
      };
    },
    async submitForm() {
      this.checkForm();
      if (this.proId == "add"){
        if(!this.UpPic &&
        !this.BrandInput &&
        !this.ProInput &&
        !this.MFDInput &&
        !this.InStocksInput &&
        !this.PriceInput &&
        !this.DescriptInput &&
        !this.ChooseColor) {
        this.idProduct =
          // (await this.fetch("http://localhost:3000/getmaxidPro")) + 1;
          (await this.fetch(`${process.env.VUE_APP_ROOT_API}getmaxidPro`)) + 1;
        const addPro = {
          idProduct: this.idProduct,
          imgFile: this.imgFile,
          proPathImg: this.img,
          brandName: this.enterBrand,
          proName: this.enterProName,
          proDescription: this.enterDescript,
          proAmount: this.enterInStocks,
          proPrice: this.enterPrice,
          proMFDDATE: this.enterDate,
          proCol: this.product.item,
        };

        this.$parent.regist(addPro);
        alert("Your product is add already.");
        this.clearForm();
      }
      } else {
        this.checkForm();
        if(!this.UpPic &&
        !this.BrandInput &&
        !this.ProInput &&
        !this.MFDInput &&
        !this.InStocksInput &&
        !this.PriceInput &&
        !this.DescriptInput &&
        !this.ChooseColor){
        const sendEdit = {
          idProduct: this.idProduct,
          imgFile: this.imgFile,
          proPathImg: this.img,
          brandName: this.enterBrand,
          proName: this.enterProName,
          proDescription: this.enterDescript,
          proAmount: this.enterInStocks,
          proPrice: this.enterPrice,
          proMFDDATE: this.enterDate,
          proCol: this.product.item,
        };
        this.editProduct(sendEdit);
      }
      }
    },
    async editProduct(editPro) {
      console.log(editPro);
      this.checkForm();
      editPro.proCol = editPro.proCol.map(
        (e) => (e = { idPro: editPro.idProduct, color: e.color })
      );
      const jsonPro = await JSON.stringify({
        idPro: editPro.idProduct,
        brand: editPro.brandName,
        proName: editPro.proName,
        proDescript: editPro.proDescription,
        proAmount: editPro.proAmount,
        proPrice: editPro.proPrice,
        proMfd: editPro.proMFDDATE,
        proPathImg: editPro.proPathImg,
        prowithcolor: editPro.proCol,
      });
      console.log(jsonPro);
      const blob = await new Blob([jsonPro], {
        type: "application/json",
      });
      let formData = new FormData();
      await formData.append("editProduct", blob);
      if (this.imgFile == null) {
        // const res = await fetch("http://localhost:3000/edit", {
        const res = await fetch(`${process.env.VUE_APP_ROOT_API}edit`, {
          method: "PUT",
          body: formData,
        });
        const data = await res.json();
        console.log(data)
        alert("Edited");
      } else {
        formData.append("image", editPro.imgFile, editPro.proPathImg);
        // await fetch("http://localhost:3000/edit/image", {
          await fetch(`${process.env.VUE_APP_ROOT_API}/edit/image`, {
          method: "PUT",
          body: formData,
        });
        alert("Edited");
      }
    },
    uploadImg(event) {
      const file = event.target.files[0];
      if (this.isImage(file.name)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.image = event.target.result;
          this.UpPic =
            this.image == require("../assets/icon/clothes-hanger.svg")
              ? true
              : false;
        };
        reader.readAsDataURL(file);
        this.imgFile = file;
        this.img = file.name;
      } else {
        return "Please upload only picture.";
      }
    },
    checkName(picFile) {
      var checkWords = picFile.split(".");
      return checkWords[checkWords.length - 1];
    },
    isImage(picFile) {
      var realCheckName = this.checkName(picFile);
      switch (realCheckName.toLowerCase()) {
        case "jpg":
        case "gif":
        case "bmp":
        case "png":
          return true;
      }
      return false;
    },
    selectColor(color) {
      if (
        this.product.item.map((c) => c.color.idColor).includes(color.idColor)
      ) {
        this.product.item = this.product.item.filter(
          (c) => c.color.idColor != color.idColor
        );
      } else {
        this.product.item.push({ color: color });
      }
      console.log(this.product.item);
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    console.log(this.proId);
    // this.brandArray = await this.fetch("http://localhost:3000/brand");
    this.brandArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}brand`);
    // this.colorArray = await this.fetch("http://localhost:3000/color");
    this.colorArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}color`);
    // this.productArray = await this.fetch("http://localhost:3000/product/");
    this.productArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}product/`);
    if (!isNaN(this.proId)) {
      const product = await this.fetch(
        // "http://localhost:3000/product/" + this.proId
        `${process.env.VUE_APP_ROOT_API}product/` + this.proId
      );
      this.idProduct = product.idPro;
      this.image = this.urlImage + "/" + product.proPathImg;
      this.img = product.proPathImg;
      this.enterBrand = product.brand;
      this.enterProName = product.proName;
      this.enterDescript = product.proDescript;
      this.enterInStocks = product.proAmount;
      this.enterPrice = product.proPrice;
      this.enterDate = product.proMfd;
      this.product.item = product.prowithcolor;
      this.checkForm();    
    }
  },
  watch: {
    proId: function clearEditToAdd() {
      this.clearForm();
    },
  },
};
</script>
