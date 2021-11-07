<template>
  <div class="detail bg-cream-light h-screen">
    <base-back></base-back>
    <base-detail-product></base-detail-product>
  </div>
</template>

<script>
import BaseBack from '../components/BaseBack.vue';
import BaseDetailProduct from "../components/BaseDetailProduct.vue";
export default {
  components: { BaseDetailProduct, BaseBack },
  data() {
    return {
      routes: "/product/views",
      amount: 0,
    };
  },
  methods:{
    // showNumToParent(num){
    //   console.log("showNumToParent() work!")
    //   this.amount = num
    //   // this.$parent.showNumCart(this.amount);
    // }
  }
};
</script>
