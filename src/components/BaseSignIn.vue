<template>
  <div class="SignIn">
    <!-- component -->
    <div class="bg-white h-screen w-screen">
      <div
        class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
      >
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full lg:h-full bg-white sm:mx-0"
        >
          <div
            class="hidden md:block md:w-1/2 rounded-r-lg"
            style="background: url('https://images.squarespace-cdn.com/content/v1/582abbefb3db2b4f0a63192f/1488239517608-0J3PK4TMBEN2TSGBBCB3/image-asset.jpeg'); background-size: cover; background-position: center center;"
          ></div>
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-thin">Sign In</h1>
              <div class="w-full mt-4">
                <form class="form-horizontal w-3/4 mx-auto">
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1"
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
                          type="email"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1"
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
                          type="email"
                          class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="cursor-pointer text-right text-red-light hover:text-red-dark underline"
                  >
                    Forgot Your Password?
                  </div>
                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="bg-red-light hover:bg-red-dark text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                  <a
                    class="no-underline hover:underline text-blue-dark text-xs"
                    href="{{ route('password.request') }}"
                  >
                    Don't have an account? Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col">
      <h1 class="">Sign In</h1>

      <div class="flex flex-col">
        <label class="font-serif lg:text-lg text-base">Username </label>
        <input
          class="
                  input
                  font-serif
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
                  focus:border-indigo-500
                  focus:outline-none
                "
          :class="{ 'bg-red-50': UserInput }"
          id="userName"
          type="text"
          size="32"
          placeholder="Your username"
          v-model.trim="enterUser"
        />
      </div>
      <p v-if="UserInput" class="font-serif text-red-600">
        Please enter your Username !
      </p>
    </div> -->
  </div>
</template>
