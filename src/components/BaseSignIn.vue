<template>
  <div class="SignIn">
    <!-- component -->
    <div class="bg-gray-extra-light h-screen w-screen">
      <div
        class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
      >
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full lg:h-full bg-white sm:mx-0"
        >
          <div
            class="hidden lg:block lg:w-1/2"
            style="background: url('https://images.squarespace-cdn.com/content/v1/582abbefb3db2b4f0a63192f/1488239517608-0J3PK4TMBEN2TSGBBCB3/image-asset.jpeg'); background-size: cover; background-position: center center;"
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1
                class="font-prompt-regular-400 font-bold text-4xl text-center"
              >
                Sign In
              </h1>
              <div class="w-full mt-4">
                <form
                  @submit.prevent="submit"
                  class="form-horizontal w-3/4 mx-auto"
                >
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for="email"
                        class="font-prompt-regular-400 text-base font-medium px-1"
                        >Username</label
                      >
                      <div class="flex">
                        <div
                          class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                        >
                          <i
                            class="mdi mdi-email-outline text-gray-400 text-lg"
                          ></i>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          v-model="form.username"
                          class="font-prompt-regular-400 w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label
                        for="password"
                        class="font-prompt-regular-400 text-base font-medium px-1"
                        >Password</label
                      >

                      <div class="flex">
                        <div
                          class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                        >
                          <i
                            class="mdi mdi-email-outline text-gray-400 text-lg"
                          ></i>
                        </div>
                        <input
                          :type="type"
                          name="password"
                          id="password"
                          v-model="form.password"
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
                       <p v-if="showError" class="font-prompt-regular-400 text-red-600">
                          Username or Password not correct!
                        </p>
                    </div>
                  </div>
                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="font-prompt-regular-400 bg-red-light hover:bg-red-dark text-white text-base font-medium py-2 px-4 rounded"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <div
                    @click="this.$router.push('/signup')"
                    class="cursor-pointer no-underline hover:underline font-prompt-regular-400 text-sm"
                  > 
                      Don't have an account? Sign Up
                  </div>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      type: "password",
      eye: require("../assets/icon/hide.png"),
      showError: false
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/icon/show.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/icon/hide.png");
      }
    },
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit() {
      this.signIn(this.form).then(() => {
        this.$router
          .replace(
            this.$store.state.auth.user && (this.$store.state.auth.user.idRole.idRole == 2 || this.$store.state.auth.user.idRole.idRole ==3) ? '/product/views' : '/account'
          )
      }).catch((error)=>{
        console.log(error);
        this.showError = true;
      });
    },
  },
};
</script>
