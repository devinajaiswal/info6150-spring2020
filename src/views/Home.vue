<template>
  <div class="home">
    <Alerts />
    <Header />
    <Containers />
  </div>
</template>

<script>
// @ is an alias to /src
import Alerts from "../components/home/Alerts.vue";
import Containers from "../components/home/Containers.vue";
import Header from "../components/home/Header.vue";

export default {
  name: "Home",
  components: {
    Alerts,
    Containers,
    Header
  }
};
</script>
