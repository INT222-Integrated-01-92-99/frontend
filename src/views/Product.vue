<template>
  <div
    v-if="
      $store.state.auth.user
        ? $store.state.auth.user.idRole.idRole == 2 ||
          $store.state.auth.user.idRole.idRole == 3
        : false
    "
    class="product mb-5"
  >
    <div
      v-if="
        $store.state.auth.user
          ? $store.state.auth.user.idRole.idRole == 2
          : false
      "
      class="
        z-10
        bg-gray-extra-light
        w-full
        fixed
        2xl:pt-20
        lg:pt-20
        pt-14
        shadow-md
        lg:pr-20
        md:pr-16
        2xl:flex 2xl:justify-end
        lg:flex lg:justify-end
        md:flex md:justify-end
        flex
        justify-center
        space-x-2
      "
    >
      <base-button
        @click="(viewAddChange = true), this.$router.push('/product/views')"
        txtcolor="text-black"
        txtbutt="View Products"
        class="
          font-prompt-regular-400
          focus:outline-none
          py-2
          px-2
          text-base text-black
          hover:text-red-light
          transition
          ease-in
          duration-200
          transform
          hover:-translate-y-1
          active:translate-y-0
          focus:text-red-light
        "
      >
      </base-button>
      <p class="text-center text-black text-lg">|</p>
      <base-button
        @click="(viewAddChange = false), this.$router.push('/product/add')"
        txtcolor="text-black"
        txtbutt="Add Product"
        class="
          font-prompt-regular-400
          focus:outline-none
          py-2
          px-2
          text-base text-black
          hover:text-red-light
          transition
          ease-in
          duration-200
          transform
          hover:-translate-y-1
          active:translate-y-0
          focus:text-red-light
        "
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
  <div v-else>
    <base-product-view></base-product-view>
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
      error: "",
      showError: false,
    };
  },

  methods: {
    async regist(addNewPro) {
      // console.log(addNewPro);
      // console.log(addNewPro.idProduct);
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
        const response = await fetch("http://localhost:3000/staff/add/image", {
          // const response = await fetch(`${process.env.VUE_APP_ROOT_API}staff/add/image`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.token}`,
          },
          body: formData,
        });
        this.error = await response.json();
        if (this.error.errorCode == "PRODUCT_NAME_ALREADY_EXIST") {
          alert("Already has this name.");
        } else {
          alert("Added.");
        }
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },
  created() {
    if (this.$store.state.auth.user) {
      if (
        this.$store.state.auth.user.idRole.idRole == 2 ||
        this.$store.state.auth.user.idRole.idRole == 3
      ) {
        this.viewAddChange = false;
        if (this.proId == "views" || this.proId == undefined) {
          this.viewAddChange = true;
        }
      } else {
        if (this.$route.path === "/product/add") {
          this.$router.push("/");
        } else {
          this.$router.push("/");
        }
      }
    } else {
      this.$router.push("/product/views");
    }

    if (
      this.$store.state.auth.user &&
      this.$store.state.auth.user.idRole.idRole == 3
    ) {
      if (this.$route.path === "/product/add") {
        this.$router.push("/product/views");
      } else {
        this.$router.push("/product/views");
      }
    }
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
