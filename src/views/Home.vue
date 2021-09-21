<template>
  <div
    class="mx-auto w-full h-screen bg-cover"
    style="background-image: url('https://theklosetedit.com/wp-content/uploads/2019/09/flaunter-com-LI_8-X9cei0-unsplash-4000x2000.jpg');"
  >
    <div>
      <div class="2xl:pt-80 lg:pt-56 pt-40 text-center">
        <!-- <img src="../assets/home-bg.png"> -->
        <div class="justify-center">
          <router-link
            to="/product"
            ><base-button
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="SHOP NOW!"
              class="font-rozha focus:outline-none hover:bg-red-dark hover:text-white tracking-widest font-semibold transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 p-2 rounded-sm 2xl:text-4xl lg:text-sm text-xs 2xl:w-1/5 2xl:h-16 lg:w-28 lg:h-10 w-24 h-9"
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
