<template>
  <div class="flights">
    <b-row>
      <b-col>
        Airline
      </b-col>
      <b-col>
        Flight Number
      </b-col>
      <b-col>
        Price
      </b-col>
    </b-row>
    <b-container v-for="(items, index) in json" :key="index">
      {{ index }}
      <b-row v-for="(item, index) in items" :key="index">
        <b-col>
          {{ item.airline }}
        </b-col>
        <b-col>
          {{ item.flight_number }}
        </b-col>
        <b-col>
          {{ item.price }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      json: {}
    };
  },
  mounted() {
    this.getJson();
  },
  methods: {
    getJson() {
      this.$axiosUtil
        .get("api/v1/prices/cheap", {
          origin: "BOS",
          token: "ee5e3a59b78d121e99fd83e4420d6ccd",
          page: "1",
          currency: "USD"
        })
        .then(response => {
          console.log(response.data.data);
          this.json = response.data.data;
        });
    }
  }
};
</script>


