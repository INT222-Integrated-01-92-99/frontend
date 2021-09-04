<template>
  <div class="SignUp">
    <div class="bg-white h-screen w-screen">
      <div
        class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
      >
        <div
          class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-full lg:h-full bg-white sm:mx-0"
        >
          <div
            class="hidden md:block md:w-1/2 rounded-r-lg"
            style="background: url('https://static.wixstatic.com/media/049ef0_d62fb4eb2c284ffa9e89e07d7c296eef~mv2_d_1964_1964_s_2.jpg/v1/fill/w_2500,h_2500,al_c/049ef0_d62fb4eb2c284ffa9e89e07d7c296eef~mv2_d_1964_1964_s_2.jpg'); background-size: cover; background-position: center center;"
          ></div>
          <div class="flex flex-col w-full md:w-1/2 p-4">
            <div class="flex flex-col flex-1 justify-center mb-8">
              <h1 class="text-4xl text-center font-thin">Profile</h1>
              <div class="w-full mt-4">
                <div class="form-horizontal w-3/4 mx-auto">
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Firstname</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Firstname
                      </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Lastname</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Lastname
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Username</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Username
                      </div>
                    </div>

                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Password</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Password
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Email</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Email
                      </div>
                    </div>

                    <div class="w-1/2 px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Phone</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Phone
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <div class="text-xs font-semibold px-1">Address</div>
                      <div class="text-xs font-semibold px-1 pt-4">
                        Address
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="border border-red-light text-red-light hover:bg-red-light hover:text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Edit Profile
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
