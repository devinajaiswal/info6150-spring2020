<template>
  <div>
    <b-jumbotron header="🐂🍺">
      <Modal />
      <b-button
        variant="dark"
        href="https://github.com/SylvanWang/info6150-spring2020"
      >
        <font-awesome-icon :icon="['fab', 'github']" size="5x" />
      </b-button>
      <p>Check out our website on github</p>
    </b-jumbotron>
  </div>
</template>
<script>
import Modal from "../Modal.vue";
export default {
  name: "Jumbotron",
  components: {
    Modal
  }
};
</script>
