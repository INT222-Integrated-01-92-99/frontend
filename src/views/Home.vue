<template>
  <div
    class="mx-auto w-full h-screen bg-cover"
    style="background-image: url('https://theklosetedit.com/wp-content/uploads/2019/09/flaunter-com-LI_8-X9cei0-unsplash-4000x2000.jpg');"
  >
    <div v-if="$store.state.auth.user ? $store.state.auth.user.idRole.idRole == 2 || $store.state.auth.user.idRole.idRole == 3 : false">
      <div class="2xl:pt-80 lg:pt-96 md:pt-44 pt-96 text-center">
        <div class="justify-center">
          <router-link
            to="/product"
            ><base-button
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="SHOP NOW!"
              class="font-rozha focus:outline-none hover:bg-red-dark hover:text-white tracking-widest font-semibold transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 p-2 rounded-sm 2xl:text-4xl lg:text-3xl md:text-3xl text-2xl 2xl:w-1/5 lg:1/5 md:w-1/3 "
            >
            </base-button
          ></router-link>
        </div>
      </div>
    </div>
    <div v-if="!$store.state.auth.user">
      <div class="2xl:pt-80 lg:pt-96 md:pt-44 pt-96 text-center">
        <div class="justify-center">
          <router-link
            to="/product"
            ><base-button
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="SHOP NOW!"
              class="font-rozha focus:outline-none hover:bg-red-dark hover:text-white tracking-widest font-semibold transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 p-2 rounded-sm 2xl:text-4xl lg:text-3xl md:text-3xl text-2xl 2xl:w-1/5 lg:1/5 md:w-1/3 "
            >
            </base-button
          ></router-link>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
