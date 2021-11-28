<template>
  <div class="Profile">
    <div class="bg-gray-extra-light h-screen w-screen">
      <div
        class="
          flex flex-col
          items-center
          flex-1
          h-full
          justify-center
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
              background: url('https://static.wixstatic.com/media/049ef0_d62fb4eb2c284ffa9e89e07d7c296eef~mv2_d_1964_1964_s_2.jpg/v1/fill/w_2500,h_2500,al_c/049ef0_d62fb4eb2c284ffa9e89e07d7c296eef~mv2_d_1964_1964_s_2.jpg');
              background-size: cover;
              background-position: center center;
            "
          ></div>
          <div class="flex flex-col w-full lg:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1
                class="font-prompt-regular-400 font-bold text-4xl text-center"
              >
                Profile
              </h1>
              <div class="w-full mt-10">
                <div class="form-horizontal w-3/4 mx-auto">
                  <div v-if="!isEdit">
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <div
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                        >
                          Firstname
                        </div>
                        <div
                          class="
                            text-gray-dark
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                            pt-4
                          "
                        >
                          {{ this.$store.state.auth.user.accFname }}
                        </div>
                      </div>
                      <div class="w-1/2 px-3 mb-5">
                        <div
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                        >
                          Lastname
                        </div>
                        <div
                          class="
                            text-gray-dark
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                            pt-4
                          "
                        >
                          {{ this.$store.state.auth.user.accLname }}
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <div
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                        >
                          Username
                        </div>
                        <div
                          class="
                            text-gray-dark
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                            pt-4
                          "
                        >
                          {{ this.$store.state.auth.user.accUsername }}
                        </div>
                      </div>

                      <div class="w-1/2 px-3 mb-5">
                        <div
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                        >
                          Phone
                        </div>
                        <div
                          class="
                            text-gray-dark
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                            pt-4
                          "
                        >
                          {{ this.$store.state.auth.user.accPhone }}
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <div
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                        >
                          Address
                        </div>
                        <div
                          class="
                            text-gray-dark
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                            pt-4
                          "
                        >
                          {{ this.$store.state.auth.user.accAddress }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Firstname</label
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
                            :class="{ 'bg-red-50': person.accFname == '' }"
                            placeholder="First name"
                          />
                        </div>
                        <p
                          v-if="person.accFname == ''"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your Firstname
                        </p>
                      </div>
                      <div class="w-1/2 px-3 mb-5">
                        <label
                          class="
                            font-prompt-regular-400
                            text-base
                            font-medium
                            px-1
                          "
                          >Lastname</label
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
                            :class="{ 'bg-red-50': person.accLname == '' }"
                            placeholder="Last name"
                          />
                        </div>
                        <p
                          v-if="person.accLname == ''"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your lastname
                        </p>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-1/2 px-3 mb-5">
                        <label
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
                          ></div>
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
                            :class="{ 'bg-red-50': usernameInput }"
                            placeholder="Username"
                          />
                        </div>
                        <p
                          v-if="usernameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your username
                        </p>
                      </div>
                      <div class="w-1/2 px-3 mb-5">
                        <label
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
                          ></div>
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
                          ></div>
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
                  <div v-if="!showEditButton" class="flex flex-col mt-8">
                    <button
                      @click="editProfile()"
                      type="submit"
                      class="
                        font-prompt-regular-400
                        border border-red-light
                        text-red-light
                        hover:bg-red-light hover:text-white
                        text-sm
                        font-medium
                        py-2
                        px-4
                        rounded
                      "
                    >
                      Edit Profile
                    </button>
                  </div>
                  <div
                    v-else
                    class="flex flex-row justify-between space-x-5 mt-8"
                  >
                    <button
                      @click="save()"
                      type="submit"
                      class="
                        w-full
                        font-prompt-regular-400
                        border border-red-light
                        bg-red-light
                        text-white
                        hover:bg-red-dark
                        text-sm
                        font-medium
                        py-2
                        px-4
                        rounded
                      "
                    >
                      Save
                    </button>
                    <button
                      @click="cancel()"
                      type="submit"
                      class="
                        w-full
                        font-prompt-regular-400
                        border border-gray-light
                        bg-gray-light
                        text-white
                        hover:bg-gray-dark
                        text-sm
                        font-medium
                        py-2
                        px-4
                        rounded
                      "
                    >
                      Cancel
                    </button>
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
      isOpen: false,
      showEditButton: false,
      isEdit: false,
      person: {
        idAccount: this.$store.state.auth.user.idAccount,
        accUsername: this.$store.state.auth.user.accUsername,
        accPass: this.$store.state.auth.user.accPass,
        accFname: this.$store.state.auth.user.accFname,
        accLname: this.$store.state.auth.user.accLname,
        accPhone: this.$store.state.auth.user.accPhone,
        accAddress: this.$store.state.auth.user.accAddress,
        cart: this.$store.state.auth.user.cart,
        receiptList: this.$store.state.auth.user.receiptList,
        idRole: this.$store.state.auth.user.idRole,
      },
      usernameInput: false,
      passwordInput: false,
      firstnameInput: false,
      lastnameInput: false,
      phoneInput: false,
      addressInput: false,
      username: "",
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${this.$store.state.auth.token}` },
      });
      const data = await res.json(url);
      return data;
    },
    editProfile() {
      this.showEditButton = true;
      this.isEdit = true;
      this.person = {
        idAccount: this.$store.state.auth.user.idAccount,
        accUsername: this.$store.state.auth.user.accUsername,
        accPass: this.$store.state.auth.user.accPass,
        accFname: this.$store.state.auth.user.accFname,
        accLname: this.$store.state.auth.user.accLname,
        accPhone: this.$store.state.auth.user.accPhone,
        accAddress: this.$store.state.auth.user.accAddress,
        cart: this.$store.state.auth.user.cart,
        receiptList: this.$store.state.auth.user.receiptList,
        idRole: this.$store.state.auth.user.idRole,
      };
    },
    cancel() {
      this.showEditButton = false;
      this.isEdit = false;
    },
    async save() {
      console.log("save");
      // console.log(this.person)
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
          const jsonPro = JSON.stringify(this.person);
          console.log(this.person);
          // await fetch("http://localhost:3000/allroles/editaccount", {
            await fetch(`${process.env.VUE_APP_ROOT_API}allroles/editaccount`, {
            method: "PUT",
            body: jsonPro,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          });
          this.user();
          this.isEdit = false;
          this.showEditButton = false;
          if (
            this.person.accUsername != this.$store.state.auth.user.accUsername
          ) {
            alert("Your username is edited, please sign in again");
            this.$router.push("/signin");
          }
        } catch (error) {
          console.log(`Could not save! ${error}`);
        }
      }
    },
    check() {
      this.usernameInput = this.person.accUsername === "" ? true : false;
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
    ...mapActions({
      user: "auth/user",
    }),
  },
  async created() {},
};
</script>
