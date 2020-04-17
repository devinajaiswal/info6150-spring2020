<template>
  <div>
    <NavMenu />
    <div class="router-view">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
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
.router-view {
  background-color: #eeeeee;
}
</style>
