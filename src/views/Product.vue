<template>
  <div class="product mb-5">
    <div
      class="z-10 bg-gray-extra-light w-full fixed pt-20 shadow-md lg:pr-20 pr-16 flex justify-end space-x-2"
    >
      <base-button
        @click="(viewAddChange = true), this.$router.push('/product/views')"
        txtcolor="text-black"
        txtbutt="View Products"
        class="font-prompt-regular-400 focus:outline-none py-2 px-2 text-base text-black hover:text-red-light transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-red-light"
      >
      </base-button>
      <p class="text-center text-black text-lg">
        |
      </p>
      <base-button
        @click="(viewAddChange = false), this.$router.push('/product/add')"
        txtcolor="text-black"
        txtbutt="Add Product"
        class="font-prompt-regular-400 focus:outline-none py-2 px-2 text-base text-black hover:text-red-light transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-red-light"
      >
      </base-button>
    </div>
    <div v-if="!viewAddChange">
      <base-form :pro-id="proId"></base-form>
    </div>
    <div v-else>
      <component
        class="lg:flex-col"
        v-bind:is="currentTabComponent"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["proId"],
  components: {},
  data() {
    return {
      currentTabComponent: "base-product-view",
      viewAddChange: true,
    };
  },

  methods: {
    async regist(addNewPro) {
      console.log(addNewPro);
      console.log(addNewPro.idProduct);
      try {
        const jsonPro = await JSON.stringify({
          idPro: addNewPro.idProduct,
          brand: addNewPro.brandName,
          proName: addNewPro.proName,
          proDescript: addNewPro.proDescription,
          proAmount: addNewPro.proAmount,
          proPrice: addNewPro.proPrice,
          proMfd: addNewPro.proMFDDATE,
          proPathImg: addNewPro.proPathImg,
          prowithcolor: addNewPro.proCol,
        });
        const blob = await new Blob([jsonPro], {
          type: "application/json",
        });
        let formData = new FormData();
        formData.append("image", addNewPro.imgFile, addNewPro.proPathImg);
        await formData.append("newproduct", blob);
        await fetch("http://localhost:3000/staff/add/image", {
        // await fetch(`${process.env.VUE_APP_ROOT_API}add/image`, {
          method: "POST",
          body: formData,
        });
        alert("Added.");
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },
  created() {
    this.viewAddChange = false;
    if (this.proId == "views" || this.proId == undefined) {
      this.viewAddChange = true;
    }
  },
  watch: {
    proId: function changeValue() {
      this.viewAddChange = false;
      if (this.proId == "views") {
        this.viewAddChange = true;
      }
    },
  },
};
</script>
