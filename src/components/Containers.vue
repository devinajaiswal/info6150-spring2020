<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Carousal /></b-col>
      </b-row>

      <b-row>
        <b-col><Cards /></b-col>
        <b-col><Jumbotron /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Cards from "../components/Cards.vue";
import Carousal from "../components/Carousal.vue";
import Jumbotron from "../components/Jumbotron.vue";

export default {
  name: "Containers",
  components: {
    Cards,
    Carousal,
    Jumbotron
  }
};
</script>
