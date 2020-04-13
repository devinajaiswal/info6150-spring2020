<template>
  <div>
    Profile
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$store.getters.isLoggedIn);
    console.log(this.$store.getters.getUsername);
  }
};
</script>
