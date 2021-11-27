<template>
  <div class="detail bg-cream-light h-screen">
    <base-back></base-back>
    <base-detail-product></base-detail-product>
  </div>
</template>

<script>
import BaseBack from "../components/BaseBack.vue";
import BaseDetailProduct from "../components/BaseDetailProduct.vue";
export default {
  components: { BaseDetailProduct, BaseBack },
  data() {
    return {
      routes: "/product/views",
    };
  },
  methods: {},
  async created() {
    if (this.$store.state.auth.user) {
      if (
        this.$store.state.auth.user.idRole.idRole == 1 &&
        this.$route.path === "/detail"
      ) {
        this.$router.push("/");
      }
    }
    if (!this.$route.query.id) {
      this.$router.push("/product/views");
    }
  },
};
</script>
