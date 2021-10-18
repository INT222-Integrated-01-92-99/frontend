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
    <div class="w-11/12 mx-auto">
      <div class="mt-10 overflow-x-auto">
        <div class="flex items-center justify-center font-sans overflow-hidden">
          <div class="w-full lg:w-5/6">
            <base-button
              @click="isOpen = !isOpen"
              class="font-prompt-regular-400 focus:outline-none py-1 px-7 rounded-sm hover:bg-red-dark"
              bgcolor="bg-red-light"
              txtcolor="text-white"
              txtbutt="Add Brand"
            ></base-button>
            <div
              v-if="isOpen"
              class="overflow-scroll overflow-x-auto overflow-y-auto bg-white rounded my-6"
            >
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
                      <div class="flex item-center justify-center">
                        <div class="w-4 mr-2">
                          <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
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
            class="overflow-scroll overflow-x-auto overflow-y-auto w-full h-96 lg:w-5/6"
          >
            <div class="bg-white rounded my-6">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr
                    class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                  >
                    <th class="border-r p-2 w-4">
                      <input type="checkbox" />
                    </th>
                    <th class="py-3 px-6 text-left">BRAND ID</th>
                    <th class="py-3 px-6 text-left">BRAND NAME</th>
                    <th class="py-3 px-6 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <input type="checkbox" />
                      </div>
                    </td>
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
                        <div class="w-4 mr-2">
                          <button>
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
                        <div class="w-4 mr-2">
                          <button>
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
                          <button>
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
    };
  },
};
</script>
