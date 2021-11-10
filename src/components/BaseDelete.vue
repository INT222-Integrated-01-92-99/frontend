<script>
export default {
  props: ["send-to-delete", "send-id"],
  data() {
    return {
      urlProduct: "http://localhost:3000/delete",
      // urlProduct: `${process.env.VUE_APP_ROOT_API}delete`
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
    async deletePro(deleteProduct) {
      if (
        confirm("Are you sure you want to DELETE this product on your page?")
      ) {
        try {
          await fetch(`${this.urlProduct}/${deleteProduct}`, {
            method: "DELETE",
          });
        } catch (error) {
          console.log(`This product could not delete because ${error}`);
        }
        this.$emit("will-set-false", this.sendId);
        alert("Your product is now delete");
        this.$router.push("/product/views");
      } else {
        alert("Your delete was cancel.");
      }
    },
  },
  watch: {
    sendId: function check() {
      if (this.sendToDelete == true) {
        this.deletePro(this.sendId);
      }
    },
  },
};
</script>
