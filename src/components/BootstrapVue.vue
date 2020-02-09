<template>
  <div>
    <Navbar />
    <GlyphiconsAndFontawesome />
    <Cards />
    <Containers />
    <Carousal />
    <Jumbotron />
    <Images />
    <Modal />
    <Badges />
    <Alerts />
  </div>
</template>
<script>
import Alerts from "./Alerts.vue";
import Badges from "./Badges.vue";
import Cards from "./Cards.vue";
import Carousal from "./Carousal.vue";
import Containers from "./Containers.vue";
import GlyphiconsAndFontawesome from "./GlyphiconsAndFontawesome.vue";
import Images from "./Images.vue";
import Jumbotron from "./Jumbotron.vue";
import Modal from "./Modal.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "BootstrapVue",
  components: {
    Alerts,
    Badges,
    Cards,
    Carousal,
    Containers,
    GlyphiconsAndFontawesome,
    Images,
    Jumbotron,
    Modal,
    Navbar
  }
};
</script>
