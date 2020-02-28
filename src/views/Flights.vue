<template>
  <div class="flights">
    <h1>This is an flights page</h1>
    <b-button @click="getJson">button</b-button>
    <div>{{ json }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      json: {}
    };
  },
  methods: {
    getJson() {
      this.$axiosUtil
        .get("api/v1/prices/cheap", {
          origin: "MOW",
          destination: "HKT",
          token: "ee5e3a59b78d121e99fd83e4420d6ccd"
        })
        .then(response => {
          this.json = response.data;
        });
    }
  }
};
</script>
