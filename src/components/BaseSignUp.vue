<template>
  <div class="SignUp">
    <div class="bg-gray-extra-light h-screen w-screen">
      <div
        class="
          2xl:pt-0
          lg:pt-4
          md:pt-0
          pt-36
          flex flex-col
          items-center
          flex-1
          h-full
          justify-center
          mt-10
          px-4
          sm:px-0
        "
      >
        <div
          class="
            flex
            rounded-lg
            shadow-lg
            w-full
            sm:w-3/4
            lg:w-full lg:h-full
            bg-white
            sm:mx-0
          "
        >
          <div
            class="hidden lg:block lg:w-1/2"
            style="
              background: url('https://blog.bonfire.com/wp-content/uploads/2018/05/make-custom-merch-with-bonfire.jpg');
              background-size: cover;
              background-position: center center;
            "
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1
                class="font-prompt-regular-400 font-bold text-4xl text-center"
              >
                Sign Up
              </h1>
              <div class="w-full mt-10">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >First name</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          ></div>
                          <input
                            type="text"
                            v-model.trim="person.accFname"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': firstnameInput }"
                            placeholder="First name"
                          />
                        </div>
                        <p
                          v-if="firstnameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your firstname
                        </p>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Last name</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="text"
                            v-model.trim="person.accLname"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': lastnameInput }"
                            placeholder="Last name"
                          />
                        </div>
                        <p
                          v-if="lastnameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your lastname
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Username</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="text"
                            v-model.trim="person.accUsername"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="[
                              { 'bg-red-50': usernameInput },
                              { 'bg-red-50': showError },
                            ]"
                            placeholder="Username"
                          />
                        </div>
                        <p
                          v-if="usernameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your username and username can not less
                          than 5 letters!
                        </p>
                        <p
                          v-if="showError"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          {{ errorMessage }}
                        </p>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Password</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            :type="type"
                            v-model.trim="person.accPass"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': passwordInput }"
                            placeholder="Password"
                          />
                          <div class="relative">
                            <button
                              class="
                                absolute
                                inset-y-0
                                right-0
                                w-8
                                border-2 border-gray-200
                                rounded-r-lg
                              "
                              @click.prevent="showPassword"
                            >
                              <img class="" :src="eye" />
                            </button>
                          </div>
                        </div>
                        <p
                          v-if="passwordInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your password
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Phone</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <i
                              class="
                                mdi mdi-account-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <input
                            type="tel"
                            maxlength="10"
                            v-model.trim="person.accPhone"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': phoneInput }"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            placeholder="0123456789"
                          />
                        </div>
                        <p
                          v-if="phoneInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your phone number
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for=""
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Address</label
                        >
                        <div class="flex">
                          <div
                            class="
                              w-10
                              z-10
                              pl-1
                              text-center
                              pointer-events-none
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <i
                              class="
                                mdi mdi-email-outline
                                text-gray-400 text-lg
                              "
                            ></i>
                          </div>
                          <textarea
                            type="email"
                            class="
                              font-prompt-regular-400
                              w-full
                              -ml-10
                              pl-10
                              pr-3
                              py-2
                              rounded-lg
                              border-2 border-gray-200
                              outline-none
                              focus:border-indigo-500
                            "
                            :class="{ 'bg-red-50': addressInput }"
                            placeholder="Address"
                            v-model.trim="person.accAddress"
                          />
                        </div>
                        <p
                          v-if="addressInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your address
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
                    <button
                      @click.prevent="signUp()"
                      type="submit"
                      class="
                        font-prompt-regular-400
                        bg-red-light
                        hover:bg-red-dark
                        text-white text-base
                        font-medium
                        py-2
                        px-4
                        rounded
                      "
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <div
                    @click="this.$router.push('/signin')"
                    class="
                      cursor-pointer
                      no-underline
                      hover:underline
                      font-prompt-regular-400
                      text-sm
                    "
                  >
                    Already have an account? Sign In
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
export default {
  data() {
    return {
      type: "password",
      eye: require("../assets/icon/hide.png"),
      person: {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: { idRole: 3, role: "ROLE_MEMBER" },
      },
      usernameInput: false,
      passwordInput: false,
      firstnameInput: false,
      lastnameInput: false,
      phoneInput: false,
      addressInput: false,
      error: "",
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    check() {
      this.usernameInput =
        this.person.accUsername === "" || this.person.accUsername.length < 5;
      this.passwordInput = this.person.accPass === "" ? true : false;
      this.firstnameInput = this.person.accFname === "" ? true : false;
      this.lastnameInput = this.person.accLname === "" ? true : false;
      this.phoneInput =
        (this.person.accPhone === "" || this.person.accPhone !== "") &&
        this.person.accPhone.length !== 10
          ? true
          : false;
      this.addressInput = this.person.accAddress === "" ? true : false;
    },
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye = require("../assets/icon/show.png");
      } else {
        this.type = "password";
        this.eye = require("../assets/icon/hide.png");
      }
    },
    async signUp() {
      this.showError = false;
      this.check();
      if (
        !this.usernameInput &&
        !this.passwordInput &&
        !this.firstnameInput &&
        !this.lastnameInput &&
        !this.phoneInput &&
        !this.addressInput
      ) {
        try {
          const jsonPro = await JSON.stringify(this.person);
          const response = await fetch("http://localhost:3000/main/registaccount", {
          // const response = await fetch(`${process.env.VUE_APP_ROOT_API}main/registaccount`, {
              method: "POST",
              body: jsonPro,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          this.error = await response.json();
          if (this.error.errorCode == "USERNAME_HAVE_ALREADY") {
            this.showError = true;
            this.errorMessage = "this username is already taken.";
          } else {
            alert("Finish Sign up");
            this.clear();
            this.$router.push("/signin");
          }
        } catch (error) {
          console.log(`Could not save! ${error}`);
        }
      }
    },
    clear() {
      this.person = {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: { idRole: 3, role: "ROLE_MEMBER" },
      };
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
