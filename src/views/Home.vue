<template>
  <div class="home">
    <Alert />
    <Carousel />

    <!-- <Header /> -->
    <!-- <Containers /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from "../components/home/Alert.vue";
import Carousel from "../components/home/Carousel.vue";
// import Containers from "../components/home/Containers.vue";
// import Header from "../components/home/Header.vue";

export default {
  components: {
    Alert,
    Carousel
    // Containers,
    // Header
  }
};
</script>
