<script>
export default {
  emits: [],
  props: ["if-select-col", "send-color"],
  data() {
    return {
      colorArray: [],
      product: {
        item: [],
      },
    };
  },
  methods: {
    selectColor(color) {
      if (
        this.product.item.map((c) => c.color.idColor).includes(color.idColor)
      ) {
        this.product.item = this.product.item.filter(
          (c) => c.color.idColor != color.idColor
        );
      } else {
        this.product.item.push({ color: color });
      }
      // console.log(this.product.item);
    },
    async fetch(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    sendColor: function check() {
      if (this.ifSelectCol == true) {
        this.selectColor(this.sendColor);
      }
    },
  },

  async created() {
    // this.colorArray = await this.fetch("http://localhost:3000/main/color");
    this.colorArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/color`);
    // this.productArray = await this.fetch("http://localhost:3000/main/product/");
    this.productArray = await this.fetch(`${process.env.VUE_APP_ROOT_API}main/product/`);
  },
};
</script>
