<template>
  <button @click="buttonClick" class="btn focus:outline-none" :class="[bgcolor, txtcolor]">
    {{ txtbutt }}
  </button>
</template>
<script>
export default {
  props: ["bgcolor", "txtcolor", "txtbutt"],
};
</script>
