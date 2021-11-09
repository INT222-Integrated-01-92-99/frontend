<template>
  <div class="role">
    <div
      class="
        z-10 bg-gray-extra-light w-full fixed pt-20 shadow-md lg:pr-20 pr-16 flex justify-end space-x-2
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
    <div class="2xl:pt-36 2xl:pb-8 lg:pt-6 lg:pb-8 pt-6 pb-8 space-y-4">
      <h1
        class="
          font-prompt-regular-400
          text-center text-cream-dark
          2xl:text-5xl
          text-4xl
          font-bold
        "
      >
        Manage Account
      </h1>
    </div>
    <!-- component -->
    <div class="flex justify-center 2xl:w-1/3 lg:w-1/3 w-1/2 relative mx-auto">
      <input
        class="
          font-prompt-regular-400
          border-b-2 border-gray-400
          bg-white
          h-10
          w-full
          px-1
          pr-16
          text-sm
          focus:border-gray-dark focus:outline-none
        "
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
          style="enable-background: new 0 0 56.966 56.966"
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
              txtbutt="Add User"
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
              <form>
                <table class="min-w-max w-full table-auto">
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
                      <th class="py-3 px-6 text-left">USER ID</th>
                      <th class="py-3 px-6 text-left">USERNAME</th>
                      <th class="py-3 px-6 text-left">PASSWORD</th>
                      <th class="py-3 px-6 text-left">FIRSTNAME</th>
                      <th class="py-3 px-6 text-left">LASTNAME</th>
                      <th class="py-3 px-6 text-left">PHONE</th>
                      <th class="py-3 px-6 text-left">ADDRESS</th>
                      <th class="py-3 px-6 text-left">ROLE</th>
                      <th class="py-3 px-6 text-left">ACTION</th>
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
                            id="username"
                            :class="{ 'bg-red-50': validate.usernameInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Username"
                            v-model.trim="person.username"
                          />
                        </div>
                        <p
                          v-if="validate.usernameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your username!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <input
                            id="password"
                            :class="{ 'bg-red-50': validate.passwordInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Password"
                            v-model.trim="person.password"
                          />
                        </div>
                        <p
                          v-if="validate.passwordInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your password!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <input
                            id="firstname"
                            :class="{ 'bg-red-50': validate.firstnameInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Firstname"
                            v-model.trim="person.firstname"
                          />
                        </div>
                        <p
                          v-if="validate.firstnameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your firstname!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <input
                            id="lastname"
                            :class="{ 'bg-red-50': validate.lastnameInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Lastname"
                            v-model.trim="person.lastname"
                          />
                        </div>
                        <p
                          v-if="validate.lastnameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your lastname!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <input
                            id="phone"
                            :class="{ 'bg-red-50': validate.phoneInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Phone"
                            v-model="person.phone"
                          />
                        </div>
                        <p
                          v-if="validate.phoneInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your phone number (10 digits)!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <textarea
                            id="address"
                            :class="{ 'bg-red-50': validate.addressInput }"
                            class="bg-white border p-2 rounded-sm"
                            type="textarea"
                            placeholder="Address"
                            v-model.trim="person.address"
                          />
                        </div>
                        <p
                          v-if="validate.addressInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your address!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <select
                            class="bg-white border p-2 rounded-sm"
                            id="roles"
                            name="roleslist"
                            v-model="person.role"
                            :class="{ 'bg-red-50': validate.selectRole }"
                          >
                            <option
                              v-for="r in roles"
                              :key="r.idRole"
                              :value="role"
                            >
                              {{ r.role }}
                            </option>
                          </select>
                        </div>
                        <p
                          v-if="validate.selectRole"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please select user role!
                        </p>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                          <div class="w-4 mr-2">
                            <button @click.prevent="addAccount()">
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
              </form>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-6 mx-auto w-5/6" />
      <!-- component -->
      <div class="overflow-x-auto mb-10">
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
              <table class="min-w-max w-full table-auto">
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
                    <th class="border-r p-2">
                      <input type="checkbox" />
                    </th>
                    <th class="py-3 px-6 text-left">USER ID</th>
                    <th class="py-3 px-6 text-left">USERNAME</th>
                    <th class="py-3 px-6 text-left">PASSWORD</th>
                    <th class="py-3 px-6 text-left">FIRSTNAME</th>
                    <th class="py-3 px-6 text-left">LASTNAME</th>
                    <th class="py-3 px-6 text-left">PHONE</th>
                    <th class="py-3 px-6 text-left">ADDRESS</th>
                    <th class="py-3 px-6 text-left">ROLE</th>
                    <th class="py-3 px-6 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr
                    v-for="r in this.people"
                    :key="r.idAccount"
                    class="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td class="py-3 px-6 text-left whitespace-normal">
                      <div class="flex items-center">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-normal">
                      <div class="flex items-center">
                        <span class="font-medium">{{ r.idAccount }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accUsername === '' }"
                          id="userName"
                          type="text"
                          placeholder="Username"
                          v-model.trim="r.accUsername"
                        />
                      </div>
                      <p
                        v-if="r.accUsername === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Username!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ r.accUsername }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accPass === '' }"
                          id="passWord"
                          type="text"
                          placeholder="Password"
                          v-model.trim="r.accPass"
                        />
                      </div>
                      <p
                        v-if="r.accPass === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Password!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ r.accPass }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accFname === '' }"
                          id="firstName"
                          type="text"
                          placeholder="Firstname"
                          v-model.trim="r.accFname"
                        />
                      </div>
                      <p
                        v-if="r.accFname === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Firstname!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ r.accFname }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accLname === '' }"
                          id="lastName"
                          type="text"
                          placeholder="Lastname"
                          v-model.trim="r.accLname"
                        />
                      </div>
                      <p
                        v-if="r.accLname === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Lastname!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ r.accLname }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accPhone === '' }"
                          id="phoneNum"
                          type="text"
                          placeholder="Phone"
                          v-model.trim="r.accPhone"
                        />
                      </div>
                      <p
                        v-if="r.accPhone === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Phone number!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{{ r.accPhone }}</span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <input
                          class="bg-white border p-2 rounded-sm"
                          :class="{ 'bg-red-50': r.accAddress === '' }"
                          id="address"
                          type="text"
                          placeholder="Address"
                          v-model.trim="r.accAddress"
                        />
                      </div>
                      <p
                        v-if="r.accAddress === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Address!
                      </p>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span class="">{{ r.accAddress }} </span>
                      </div>
                    </td>
                    <td
                      v-if="r.idAccount == this.roleIdForCheck"
                      class="py-3 px-6 text-left"
                    >
                      <div class="flex items-center">
                        <select
                          id="roles"
                          name="rolelist"
                          form="roleform"
                          v-model="person.role"
                          :class="{ 'bg-red-50': validate.selectRole }"
                          class="
                            input
                            font-prompt-regular-400
                            w-full
                            mt-1
                            py-1
                            px-4
                            rounded-sm
                            bg-white
                            dark:bg-gray-800
                            border border-gray-400
                            dark:border-gray-700
                            text-gray-800
                            focus:border-indigo-500 focus:outline-none
                          "
                        >
                          <option
                            v-for="role in roles"
                            :key="role.idRole"
                            :value="role"
                          >
                            {{ role.role }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span class="">{{ r.idRole.role }} </span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          v-if="r.idAccount == this.roleIdForCheck"
                          v-show="showSave"
                        >
                          <div class="w-4 mr-2">
                            <button @click="editAccount()">
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
                            showEdit && !(r.idAccount == this.roleIdForCheck)
                          "
                          class="w-4 mr-2"
                        >
                          <button @click="showSaveEdit(r)">
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
                          <button @click="delRole(r)">
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
      showSave: false,
      showEdit: true,
      people: [],
      roles: [],
      roleIdForCheck: "",
      person: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
        role: "",
      },
      validate: {
        usernameInput: false,
        passwordInput: false,
        firstnameInput: false,
        lastnameInput: false,
        phoneInput: false,
        addressInput: false,
        selectRole: false,
      },
    };
  },
  methods: {
    check() {
      this.validate.usernameInput = this.person.username != "";
      this.validate.passwordInput = this.person.password != "";
      this.validate.firstnameInput = this.person.firstname != "";
      this.validate.lastnameInput = this.person.lastname != "";
      this.validate.phoneInput =
        this.person.phone != "" && this.person.phone.length == 10;
      this.validate.addressInput = this.person.address != "";
      this.validate.selectRole = this.person.role != "";
    },
    async addAccount() {
      this.check();
      console.log(this.person);
      try {
        const jsonPro = await JSON.stringify(this.person);
        const blob = await new Blob([jsonPro], {
          type: "application/json",
        });
        let formData = new FormData();
        await formData.append("newAccount", blob);
        await fetch("http://localhost:3000/registaccount", {
          // await fetch(`${process.env.VUE_APP_ROOT_API}registaccount`, {
          method: "POST",
          body: formData,
        });
        // this.people = await this.fetch("http://localhost:3000/account");
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async editAccount() {
      this.check();
      this.showEdit = true;
      this.showSave = false;
      this.roleIdForCheck = "";
      try {
        const jsonPro = await JSON.stringify(this.person);
        const blob = await new Blob([jsonPro], {
          type: "application/json",
        });
        console.log(this.person)
        let formData = new FormData();
        await formData.append("editAccount", blob);
        await fetch("http://localhost:3000/editaccount", {
          // await fetch(`${process.env.VUE_APP_ROOT_API}editaccount`, {
          method: "PUT",
          body: formData,
        });
        this.people = await this.fetch("http://localhost:3000/account");
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    async delRole(roleId) {
      this.check();
      try {
        await fetch(
          `http://localhost:3000/deleteaccount?idAccount=${roleId.idAccount}`,
          // `${process.env.VUE_APP_ROOT_API}addbrand?BrandName=${brandName}`,
          {
            method: "DELETE",
          }
        );
        this.people = await this.fetch("http://localhost:3000/account");
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    showSaveEdit(roleId) {
      this.check();
      (this.showEdit = true), (this.showSave = true);
      this.roleIdForCheck = roleId.idAccount;
      this.person.role = roleId.idRole.role;
      console.log(this.person.role)
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
  async created() {
    this.people = await this.fetch("http://localhost:3000/account");
    this.roles = await this.fetch("http://localhost:3000/role");
  },
};
</script>
