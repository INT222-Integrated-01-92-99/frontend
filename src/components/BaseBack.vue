<template>
  <div
    class="
      bg-gray-extra-light
      w-full
      fixed
      2xl:pt-20
      lg:pt-20
      pt-14
      shadow-md
      z-10
    "
  >
    <button
      @click="this.$router.push('/product/views')"
      :class="{ 'text-red-light underline': routes == '/product/views' }"
      class="
        2xl:w-20 2xl:h-9
        w-10
        h-7
        mt-1
        2xl:ml-24
        ml-11
        flex
        transition
        ease-in
        duration-300
        transform
        hover:-translate-x-6
        active:translate-y-0
      "
    >
      <img class="h-2/3" src="../assets/icon/arrow-back.svg" />
      <span class="font-prompt-regular-400">Back</span>
    </button>
  </div>
</template>
