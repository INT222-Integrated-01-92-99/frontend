<template>
  <div class="role">
    <div
      class="
        z-10
        bg-gray-extra-light
        w-full
        fixed
        pt-20
        shadow-md
        lg:pr-20
        pr-16
        flex
        justify-end
        space-x-2
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
    <div class="w-11/12 mx-auto">
      <div class="mt-10 overflow-x-auto">
        <div class="flex items-center justify-center font-sans overflow-hidden">
          <div class="w-full lg:w-5/6">
            <base-button
              @click="openAddUser()"
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
                            :class="{ 'bg-red-50': validate.usernameInput ,'bg-red-50': wrongUsername }"
                            class="bg-white border p-2 rounded-sm"
                            type="text"
                            placeholder="Username"
                            @keyup="checkUsername()"
                            @keydown="setFalse()"
                            v-model.trim="person.accUsername"
                          />
                        </div>
                        <p
                          v-if="validate.usernameInput"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          Please enter your username!
                        </p>
                        <p
                          v-if="wrongUsername"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          {{message}}
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
                            v-model.trim="person.accPass"
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
                            v-model.trim="person.accFname"
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
                            v-model.trim="person.accLname"
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
                            v-model="person.accPhone"
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
                            v-model.trim="person.accAddress"
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
                            v-model="person.idRole"
                            :class="{ 'bg-red-50': validate.selectRole }"
                          >
                            <option
                              v-for="r in roles.filter((i) => i.idRole !== 1)"
                              :key="r.idRole"
                              :value="r"
                            >
                              {{ Role[r.role] }}
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
                          :class="{ 'bg-red-50': r.accUsername === '','bg-red-50': wrongUsername }"
                          id="userName"
                          type="text"
                          placeholder="Username"
                          
                          
                          v-model.trim="person.accUsername"
                          @keyup="checkUsername()"
                        />
                      </div>
                      <p
                        v-if="r.accUsername === ''"
                        class="font-prompt-regular-400 text-red-600"
                      >
                        Enter Username!
                      </p>
                      <p
                          v-if="wrongUsername"
                          class="font-prompt-regular-400 text-red-600"
                        >
                          {{message}}
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
                          v-model.trim="person.accPass"
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
                          v-model.trim="person.accFname"
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
                          v-model.trim="person.accLname"
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
                          v-model.trim="person.accPhone"
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
                          v-model.trim="person.accAddress"
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
                          v-model="person.idRole"
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
                            :disabled="
                              role.idRole == 1 || person.idRole.idRole == 1
                            "
                          >
                            {{ Role[role.role] }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td v-else class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span class="">{{ Role[r.idRole.role] }} </span>
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
const Role = Object.freeze({
  ROLE_ADMIN: "Admin",
  ROLE_STAFF: "Staff",
  ROLE_MEMBER: "Member",
});
export default {
  data() {
    return {
      Role,
      isOpen: false,
      showSave: false,
      showEdit: true,
      people: [],
      roles: [],
      roleIdForCheck: "",
      person: {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: {},
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
      wrongUsername: false,
      message:''
    };
  },
  methods: {
    setFalse(){
      this.wrongUsername = false
    },
    checkUsername() {
      console.log('ตัวที่พิมพ์เข้ามา ' + this.person.accUsername)
      for (let i = 0; i < this.people.length; i++){
        console.log('ตัวที่อยู่ในลูปอยู่นอกเงื่อนไข if ' + this.people[i].accUsername)
        if(this.person.accUsername === this.people[i].accUsername){
        this.message ='This username is already taken.'
        this.wrongUsername = true
        console.log('ตัวที่อยู่ในลูปละเข้าเงื่อนไข if ' + this.people[i].accUsername)
        }
      }
    },
    check() {
      this.validate.usernameInput = this.person.accUsername === "" || this.person.accUsername.length>5;
      this.validate.passwordInput = this.person.accPass === "";
      this.validate.firstnameInput = this.person.accFname === "";
      this.validate.lastnameInput = this.person.accLname === "";
      this.validate.phoneInput = (this.person.accPhone === "" || this.person.accPhone !== "") &&
        this.person.accPhone.length !== 10
      this.validate.addressInput = this.person.accAddress === "";
      this.validate.selectRole = !this.person.idRole.idRole;
    },
    clear(){
        this.person = {
        accUsername: "",
        accPass: "",
        accFname: "",
        accLname: "",
        accPhone: "",
        accAddress: "",
        idRole: {},
      }
    },
    openAddUser(){
      this.wrongUsername = false;
      this.roleIdForCheck = ''
      this.showEdit = true
      this.isOpen = !this.isOpen
      this.clear()
    },
    async addAccount() {
      this.check();
      // if(this.validate.usernameInput ==true && this.person.accUsername === this.people.accUsername){
      //   this.wrongUsername = true;
      // }
      console.log(this.person);
      console.log(this.person.idRole);
       if (
        !this.validate.usernameInput &&
        !this.validate.passwordInput &&
        !this.validate.firstnameInput &&
        !this.validate.lastnameInput &&
        !this.validate.phoneInput &&
        !this.validate.addressInput &&
        !this.validate.selectRole &&
        !this.wrongUsername
      ){
      try {
        const jsonPro = await JSON.stringify(this.person);
        await fetch("http://localhost:3000/main/registaccount", {
          // await fetch(`${process.env.VUE_APP_ROOT_API}registaccount`, {
          method: "POST",
          body: jsonPro,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.auth.token}`
          },

        });
        this.people = await this.fetch("http://localhost:3000/admin/account");
        // this.people = await this.fetch(`${process.env.VUE_APP_ROOT_API}account`);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    }
    },
    async editAccount() {
      this.showEdit = true;
      this.showSave = false;
      this.roleIdForCheck = "";
      this.check();
       if (
        !this.validate.usernameInput &&
        !this.validate.passwordInput &&
        !this.validate.firstnameInput &&
        !this.validate.lastnameInput &&
        !this.validate.phoneInput &&
        !this.validate.addressInput &&
        !this.validate.selectRole &&
        !this.wrongUsername
      ){
      try {
        const jsonPro = JSON.stringify(this.person);

        await fetch("http://localhost:3000/allroles/editaccount", {
          // await fetch(`${process.env.VUE_APP_ROOT_API}editaccount`, {
          method: "PUT",
          body: jsonPro,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.auth.token}`
          },
        });
        // this.people = await this.fetch(`${process.env.VUE_APP_ROOT_API}account`);
        this.clear()
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
      }
      this.people = await this.fetch("http://localhost:3000/admin/account");
    },
    async delRole(roleId) {
      this.check();
      try {
        await fetch(
          `http://localhost:3000/admin/deleteaccount?idAccount=${roleId.idAccount}`,
          // `${process.env.VUE_APP_ROOT_API}deleteaccount?idAccount=${roleId.idAccount}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          }
        );
        this.people = await this.fetch("http://localhost:3000/admin/account");
        // this.people = await this.fetch(`${process.env.VUE_APP_ROOT_API}account`);
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
    showSaveEdit(roleId) {
      this.wrongUsername = false;
      this.check();
      (this.showEdit = true), (this.showSave = true);
      this.roleIdForCheck = roleId.idAccount;
      this.person = roleId;
      this.isOpen = false;
    },
    async fetch(url) {
      let res;
      if (this.$store.state.auth.user) {
        res = await fetch(url, {
          headers: { Authorization: `Bearer ${this.$store.state.auth.token}` },
        });
      } else {
        res = await fetch(url);
      }
      const data = await res.json(url);
      return data;
    },
  },
  async created() {
    this.people = await this.fetch("http://localhost:3000/admin/account");
    // this.people = await this.fetch(`${process.env.VUE_APP_ROOT_API}account`);
    this.roles = await this.fetch("http://localhost:3000/admin/role");
    // this.roles = await this.fetch(`${process.env.VUE_APP_ROOT_API}role`);
  },
};
</script>
