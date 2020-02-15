<template>
  <div class="home">
    <Alerts />
    <Containers />
    <Modal />
    <Badges />
  </div>
</template>

<script>
// @ is an alias to /src
import Alerts from "../components/Alerts.vue";
import Containers from "../components/Containers.vue";

export default {
  name: "Home",
  components: {
    Alerts,
    Containers
  }
};
</script>
