<template>
  <div class="detail h-screen">
    <div class="">
      <base-profile></base-profile>
    </div>
  </div>
</template>

<script>
import BaseProfile from "../components/BaseProfile.vue";
export default {
  components: {
    "base-profile": BaseProfile,
  },
};
</script>
