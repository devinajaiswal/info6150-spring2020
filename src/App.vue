<template>
  <!-- <div id="app">
    <NavMenu />
    <router-view />
    <Footer />
  </div> -->
  <div>
    <NavMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    NavMenu
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
}
</style>
