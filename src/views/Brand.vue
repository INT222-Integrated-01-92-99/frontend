<template>
  <div class="brand">
    <div
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
        @click="this.$router.push('/account')"
        txtcolor="text-black"
        txtbutt="Manage Account"
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
        @click="this.$router.push('/addbrand')"
        txtcolor="text-black"
        txtbutt="Manage Brand"
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
    <div class="2xl:pt-36 2xl:pb-8 lg:pt-36 lg:pb-8 md:pt-32 md:pb-8 pt-32 pb-8 space-y-4">
      <h1
        class="
          font-prompt-regular-400
          text-center text-cream-dark
          2xl:text-5xl
          text-4xl
          font-bold
        "
      >
        Manage Brand
      </h1>
    </div>
    <!-- component -->
    <div class="w-11/12 mx-auto">
      <div class="mt-10 overflow-x-auto">
        <div class="flex items-center justify-center font-sans overflow-hidden">
          <div class="w-full lg:w-5/6">
            <base-button
              @click="isOpen = !isOpen"
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
              txtbutt="Add Brand"
            ></base-button>
            <div
              v-if="isOpen"
              class="
                overflow-scroll overflow-x-auto overflow-y-auto
                bg-white
                rounded
                my-6
              "
            >
              <table class="min-w-max w-full table-auto font-prompt-regular-400">
                <thead>
                  <tr
                    class="
                      bg-gray-200
                      text-gray-600
                      uppercase
                      text-sm
                      leading-normal
                    "
                  >
                    <th class="py-3 px-6 text-left">BRAND ID</th>
                    <th class="py-3 px-6 text-left">BRAND NAME</th>
                    <th class="py-3 px-6 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-normal">
                      <div class="flex items-center">
                        Auto generate after adding
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': brandInput }"
                          id="brandName"
                          type="text"
                          placeholder="Brand Name"
                          v-model.trim="enterBrandName"
                        />
                      </div>
                      <p
                        v-if="brandInput"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Brand Name!
                      </p>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div class="w-4 mr-2">
                          <button @click="addBrand(this.enterBrandName)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-6 mx-auto w-5/6" />

      <!-- component -->
      <div class="overflow-x-auto">
        <div class="flex items-center justify-center font-sans overflow-hidden">
          <div
            class="
              overflow-scroll overflow-x-auto overflow-y-auto
              w-full
              h-96
              lg:w-5/6
            "
          >
            <div class="bg-white rounded my-6">
              <table class="min-w-max w-full table-auto font-prompt-regular-400">
                <thead>
                  <tr
                    class="
                      bg-gray-200
                      text-gray-600
                      uppercase
                      text-sm
                      leading-normal
                    "
                  >
                    <th class="py-3 px-6 text-left">BRAND ID</th>
                    <th class="py-3 px-6 text-left">BRAND NAME</th>
                    <th class="py-3 px-6 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr
                    v-for="b in brandCreated"
                    :key="b.idBrand"
                    class="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">{{ b.idBrand }}</span>
                      </div>
                    </td>
                    <td
                      v-if="b.idBrand == this.brandIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': b.brandName === '' }"
                          id="brandName"
                          type="text"
                          placeholder="Brand Name"
                          v-model.trim="b.brandName"
                        />
                      </div>
                      <p
                        v-if="b.brandName === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Brand Name!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ b.brandName }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          v-if="b.idBrand == this.brandIdForCheck"
                          v-show="showSave"
                        >
                          <div class="w-4 mr-2">
                            <button @click="saveEdit(b)">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                              >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                  d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div
                          v-if="
                            showEdit && !(b.idBrand == this.brandIdForCheck)
                          "
                          class="w-4 mr-2"
                        >
                          <button @click="showSaveEdit(b)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div class="w-4 mr-2">
                          <button @click="delBrand(b)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      enterBrandName: "",
      brandInput: false,
      brandCreated: [],
      showSave: false,
      showEdit: true,
      brandIdForCheck: "",
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
    clearForm() {
      this.enterBrandName = "";
    },
    check() {
      console.log(this.enterBrandName);
      this.brandInput = this.enterBrandName === "";
    },
    async addBrand(brandName) {
      this.check();
      try {
        await fetch(
          // `http://localhost:3000/admin/addbrand?BrandName=${brandName}`,
          `${process.env.VUE_APP_ROOT_API}admin/addbrand?BrandName=${brandName}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        // this.brandCreated = await this.fetch("http://localhost:3000/main/brand");
        this.brandCreated = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/brand`);
        this.clearForm();
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async delBrand(brandId) {
      this.check();
      try {
        await fetch(
          // `http://localhost:3000/admin/deletebrand?IdBrand=${brandId.idBrand}`,
          `${process.env.VUE_APP_ROOT_API}admin/deletebrand?IdBrand=${brandId.idBrand}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        // this.brandCreated = await this.fetch("http://localhost:3000/main/brand");
        this.brandCreated = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/brand`);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    showSaveEdit(idBrand) {
      this.check();
      (this.showEdit = true), (this.showSave = true);
      this.brandIdForCheck = idBrand.idBrand;
    },
    async saveEdit(brand) {
      this.check();
      (this.showEdit = true), (this.showSave = false);
      this.brandIdForCheck = "";
       if (this.brandInput){
      try {
        await fetch(
          // `http://localhost:3000/admin/editbrand?IdBrand=${brand.idBrand}&BrandName=${encodeURIComponent(brand.brandName)}`,
          `${process.env.VUE_APP_ROOT_API}admin/editbrand?IdBrand=${brand.idBrand}&BrandName=${encodeURIComponent(brand.brandName)}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        // this.brandCreated = await this.fetch(`${process.env.VUE_APP_ROOT_API}brand`);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
        }
        // this.brandCreated = await this.fetch("http://localhost:3000/main/brand");
        this.brandCreated = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/brand`);
    },
  },
  async created() {
    if(this.$store.state.auth.user){
      if(this.$store.state.auth.user.idRole.idRole == 1){
        //  this.brandCreated = await this.fetch("http://localhost:3000/main/brand");
        this.brandCreated = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/brand`);
      }else{
          this.$router.push('/product/views')
        }
    }else{
      this.$router.push('/product/views')
    }
  },
};
</script>
