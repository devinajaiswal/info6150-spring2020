<template>
  <div class="flights">
    <h1>This is an flights page</h1>
    <b-button @click="getJson">button</b-button>
    <div>{{ json }}</div>
  </div>
</template>
<script>
import { store } from "../store/vuex.js";
export default {
  computed: {
    json() {
      return store.state.json;
    }
  },
  methods: {
    getJson() {
      store.dispatch("getJson");
    }
  }
};
</script>
