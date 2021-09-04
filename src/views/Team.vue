<template>
  <div class="team">
    <div class="bg-cream-light h-screen">
      <div class="pb-8 pt-28 flex justify-center space-y-4 ">
        <h1 class="font-serif text-cream-dark 2xl:text-5xl text-4xl font-bold">
          Our Team
        </h1>
      </div>

      <div class="flex justify-center 2xl:space-x-24 lg:space-x-14 space-x-10">
        <base-card
          class="2xl:w-1/5 w-1/4"
        >
          <div class="justify-col">
            <div class="h-full w-full mx-auto">
              <img class="rounded-t-sm" src="../assets/teamPic/fluke.png" />
              <div class="mt-3 ml-4">
                <p class="font-bold lg:text-lg text-sm">62130500001</p>
                <p class="font-bold lg:text-lg text-sm">Kanawat Mamut</p>
                <p
                  class="font-serif font-medium text-red-light lg:text-base text-sm pt-2"
                >
                  Backend<br />Database<br />Network
                </p>
              </div>
            </div>
          </div>
        </base-card>

        <base-card
          class="2xl:w-1/5 w-1/4"
        >
          <div class="justify-col">
            <div class="h-full w-full mx-auto">
              <img class="rounded-t-sm" src="../assets/teamPic/friend.png" />
              <div class="mt-3 ml-4 mb-3">
                <p class="font-bold lg:text-lg text-sm">62130500092</p>
                <p class="font-bold lg:text-lg text-sm">Samita Pinijsupol</p>
                <p
                  class="font-serif font-medium text-red-light lg:text-base text-sm pt-2"
                >
                  Front-end Developer<br />Database<br />Devops<br />Network
                </p>
              </div>
            </div>
          </div>
        </base-card>

        <base-card
          class="2xl:w-1/5 w-1/4"
        >
          <div class="justify-col">
            <div class="h-full w-full mx-auto">
              <img class="rounded-t-sm" src="../assets/teamPic/best.png" />
              <div class="mt-3 ml-4">
                <p class="font-bold lg:text-lg text-sm">62130500099</p>
                <p class="font-bold lg:text-lg text-sm">
                  Supichaya Kanaraksanti
                </p>
                <p
                  class="font-serif font-medium text-red-light lg:text-base text-sm pt-2"
                >
                  Front-end Developer<br />Database<br />Devops<br />Network
                </p>
              </div>
            </div>
          </div>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "blue-theme",
    };
  },
};
</script>

<style>
.blue-theme {
  color: navy;
  background: white;
}
</style>
