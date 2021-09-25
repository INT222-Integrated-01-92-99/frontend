<template>
  <div class="SignUp">
    <div class="bg-white h-screen w-screen">
      <div
        class="flex flex-col items-center flex-1 h-full justify-center mt-10 px-4 sm:px-0"
      >
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full lg:h-full bg-white sm:mx-0"
        >
          <div
            class="hidden lg:block lg:w-1/2"
            style="background: url('https://blog.bonfire.com/wp-content/uploads/2018/05/make-custom-merch-with-bonfire.jpg'); background-size: cover; background-position: center center;"
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="font-prompt-regular-400 font-bold text-4xl text-center">Sign Up</h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >First name</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <!-- <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i> -->
                          </div>
                          <input
                            type="text"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="First name"
                          />
                        </div>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Last name</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Username</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Username"
                          />
                        </div>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Password</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <input
                            :type="type"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Password"
                          />
                          <div class="relative">
                          <button
                            class="absolute inset-y-0 right-0 w-8 border-2 border-gray-200 rounded-r-lg"
                            @click.prevent="showPassword"
                          >
                            <img class="" :src="eye" />
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Email</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Phone</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-account-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="font-prompt-regular-400 text-base font-medium px-1"
                          >Address</label
                        >
                        <div class="flex">
                          <div
                            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                          >
                            <i
                              class="mdi mdi-email-outline text-gray-400 text-lg"
                            ></i>
                          </div>
                          <textarea
                            type="email"
                            class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="font-prompt-regular-400 bg-red-light hover:bg-red-dark text-white text-base font-medium py-2 px-4 rounded"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <a
                    class="no-underline hover:underline font-prompt-regular-400 text-sm"
                    href="{{ route('password.request') }}"
                  >
                    Already have an account? Sign In
                  </a>
                </div>
              </div>
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
      type: "password",
      btnText: "Show Password",
      eye: require("../assets/icon/show.png"),
      // showPassword: false,
      // password: "",
      // passwordFieldType: "password",
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/icon/hide.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/icon/show.png");
      }
    },
    // switchVisibility() {
    //   this.passwordFieldType =
    //     this.passwordFieldType === "password" ? "text" : "password";
    // },
  },
};
</script>