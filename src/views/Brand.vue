<template>
  <div class="brand">
    <div
      class="bg-gray-extra-light pt-20 lg:pr-20 pr-16 flex justify-end space-x-2"
    >
      <base-button
        @click="this.$router.push('/role')"
        txtcolor="text-black"
        txtbutt="Manage Role"
        class="font-prompt-regular-400 focus:outline-none py-2 px-2 pt-4 text-base text-black hover:text-red-light transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-red-light"
      >
      </base-button>
      <p class="text-center text-black text-lg pt-3">
        |
      </p>
      <base-button
        @click="this.$router.push('/addbrand')"
        txtcolor="text-black"
        txtbutt="Manage Brand"
        class="font-prompt-regular-400 focus:outline-none py-2 px-2 pt-4 text-base text-black hover:text-red-light transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:text-red-light"
      >
      </base-button>
    </div>
    <div class="2xl:pt-6 2xl:pb-8 lg:pt-6 lg:pb-8 pt-6 pb-8 space-y-4">
      <h1
        class="font-prompt-regular-400 text-center text-cream-dark 2xl:text-5xl text-4xl font-bold"
      >
        Manage Brand
      </h1>
    </div>
    <!-- component -->
    <div class="flex justify-center 2xl:w-1/3 lg:w-1/3 w-1/2 relative mx-auto">
      <input
        class="font-prompt-regular-400 border-b-2 border-gray-400 bg-white h-10 w-full px-1 pr-16 text-sm focus:border-gray-dark focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background:new 0 0 56.966 56.966;"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </div>

    <button
      @click="isOpen = !isOpen"
      class="text-4xl ml-32 bg-red-light hover:bg-red-dark text-white rounded-full px-2"
    >
      +
    </button>

    <div v-if="isOpen" class="overflow-x-auto">
      <div class="flex items-center justify-center font-sans overflow-hidden">
        <div
          class="overflow-scroll overflow-x-auto overflow-y-auto w-full lg:w-5/6"
        >
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">BRAND ID</th>
                  <th class="py-3 px-6 text-left">BRAND NAME</th>
                  <th class="py-3 px-6 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-normal">
                    <div class="flex items-center">
                      <input
                        class="bg-white border p-2 rounded-sm"
                        type="text"
                        placeholder="Brand ID"
                      />
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <input
                        class="bg-white border p-2 rounded-sm"
                        type="text"
                        placeholder="Brand Name"
                      />
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-start">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
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
    <hr class="mt-3 mx-auto w-5/6" />

    <!-- component -->
    <div class="overflow-x-auto">
      <div class="flex items-center justify-center font-sans overflow-hidden">
        <div
          class="overflow-scroll overflow-x-auto overflow-y-auto w-full h-96 lg:w-5/6"
        >
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">BRAND ID</th>
                  <th class="py-3 px-6 text-left">BRAND NAME</th>
                  <th class="py-3 px-6 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <span class="font-medium">1</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>BRAND NAME</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
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
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
