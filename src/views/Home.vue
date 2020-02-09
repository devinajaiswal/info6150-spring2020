<template>
  <div class="home">
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
// @ is an alias to /src
import Alerts from "../components/Alerts.vue";
import Badges from "../components/Badges.vue";
import Cards from "../components/Cards.vue";
import Carousal from "../components/Carousal.vue";
import Containers from "../components/Containers.vue";
import GlyphiconsAndFontawesome from "../components/GlyphiconsAndFontawesome.vue";
import Images from "../components/Images.vue";
import Jumbotron from "../components/Jumbotron.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Alerts,
    Badges,
    Cards,
    Carousal,
    Containers,
    GlyphiconsAndFontawesome,
    Images,
    Jumbotron,
    Modal
  }
};
</script>
