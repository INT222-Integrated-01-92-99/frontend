<template>
  <div class="detail h-screen">
    <base-back></base-back>
    <div
      class="
        2xl:pt-36 2xl:pb-8
        lg:pt-36 lg:pb-8
        md:pt-32 md:pb-8
        pt-32
        pb-8
        space-y-4
      "
    >
      <h1
        class="
          font-prompt-regular-400
          text-center text-cream-dark
          2xl:text-5xl
          text-4xl
          font-bold
        "
      >
        Purchase History
      </h1>
    </div>
    <p
      v-if="noHistory"
      class="font-prompt-regular-400 text-lg text-center text-gray-dark"
    >
      No history
    </p>
    <div class="justify-center pb-4">
      <div
        class="flex-row justify-center my-6"
        v-for="r in receipt"
        :key="r.idReceipt"
      >
        <div class="mx-auto w-4/5 font-prompt-regular-400">
          #{{ r.idReceipt }}<br />
          Purchase Date: {{ r.datePurchase }}
        </div>
        <div
          class="
            mx-auto
            flex flex-col
            w-4/5
            p-8
            text-gray-800
            border-2 border-gray-500
            pin-r pin-y
            font-prompt-regular-400
          "
        >
          <div class="flex-1">
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead class="border-b-2">
                <tr class="h-12 uppercase">
                  <th class="text-left">Product</th>
                  <th class="lg:text-center">
                    <span class="lg:hidden" title="Quantity">Qtd</span>
                    <span class="hidden lg:inline">Quantity</span>
                  </th>
                  <th class="hidden text-center md:table-cell">Unit price</th>
                  <th class="text-center">Total price</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="rd in r.receiptDetailsList"
                  :key="rd.idReceiptDetails"
                >
                  <td class="w-1/4">
                    <p class="mt-5 mb-2 md:ml-4">{{ rd.proName }}</p>
                    <p class="mb-2 md:ml-4">{{ rd.brandName }}</p>
                    <p class="mb-2 md:ml-4">Color: {{ rd.color.colorName }}</p>
                  </td>
                  <td class="text-center md:table-cell">
                    <p class="text-sm lg:text-base font-medium">
                      {{ rd.proPerPiece }}
                    </p>
                  </td>
                  <td class="hidden text-center md:table-cell">
                    <span class="text-sm lg:text-base font-medium">
                      {{
                        rd.proPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      THB
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="text-sm lg:text-base font-medium">
                      {{
                        (rd.proPerPiece * rd.proPrice)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      THB
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="w-full my-4 mt-6 -mx-2 lg:flex">
              <div class="lg:px-2 lg:w-full">
                <div class="p-4 bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div class="p-4">
                  <div class="flex justify-between pt-4 border-b">
                    <div
                      class="
                        lg:px-4 lg:py-2
                        m-2
                        text-lg
                        lg:text-xl
                        font-bold
                        text-center text-gray-800
                      "
                    >
                      Total
                    </div>
                    <div
                      class="
                        lg:px-4 lg:py-2
                        m-2
                        lg:text-lg
                        font-bold
                        text-center text-gray-900
                      "
                    >
                      {{
                        r.totalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      THB
                    </div>
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
<script>
import BaseBack from "../components/BaseBack.vue";
export default {
  components: { BaseBack },
  data() {
    return {
      receipt: [],
      noHistory: false,
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${this.$store.state.auth.token}` },
      });
      const data = await res.json(url);
      return data;
    },
  },
  async created() {
    if (this.$store.state.auth.user.idRole.idRole == 3) {
      this.receipt = await this.fetch(
        // "http://localhost:3000/member/receipt/" + this.$store.state.auth.user.idAccount
        `${process.env.VUE_APP_ROOT_API}member/receipt/` + this.$store.state.auth.user.idAccount
      );
      // console.log(this.receipt);
      if (this.receipt.length == 0) {
        this.noHistory = true;
      }
    } else {
      this.$router.push("/");
    }
  },
};
</script>
