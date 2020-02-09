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
import Badges from "../components/Badges.vue";
import Containers from "../components/Containers.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Alerts,
    Badges,
    Containers,
    Modal
  }
};
</script>
