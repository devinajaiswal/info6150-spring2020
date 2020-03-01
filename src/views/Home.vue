<template>
  <div class="home">
    <Alert />
    <!-- <Header /> -->
    <!-- <Containers /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from "../components/home/Alert.vue";
// import Containers from "../components/home/Containers.vue";
// import Header from "../components/home/Header.vue";

export default {
  name: "Home",
  components: {
    Alert
    // Containers,
    // Header
  }
};
</script>
