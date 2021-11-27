<template>
  <div class="SignIn">
    <div class="">
      <base-sign-in></base-sign-in>
    </div>
  </div>
</template>

<script>
import BaseSignIn from "../components/BaseSignIn.vue";
export default {
  components: {
    "base-sign-in": BaseSignIn,
  },
};
</script>
