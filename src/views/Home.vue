<template>
  <div class="home">
    <Alert />
    <Carousel />
    <CardContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from "@/components/home/Alert.vue";
import Carousel from "@/components/home/Carousel.vue";
import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    Alert,
    Carousel,
    CardContainer
  }
};
</script>
