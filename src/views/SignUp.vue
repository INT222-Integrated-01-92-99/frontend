<template>
  <div class="SignUp">
    <div class="">
      <base-sign-up></base-sign-up>
    </div>
  </div>
</template>

<script>
import BaseSignUp from "../components/BaseSignUp.vue";
export default {
  components: {
    "base-sign-up": BaseSignUp,
  },
};
</script>
