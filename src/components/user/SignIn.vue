<template>
  <div class="signIn">
    <b-jumbotron>
      <b-tabs :active-nav-item-class="['bg-primary', 'text-light']">
        <b-tab title="Sign in" active :title-item-class="'bg-success'"
          ><p>I'm the first tab</p></b-tab
        >
        <b-tab title="Log in" :title-item-class="'bg-primary'"
          ><p>I'm the second tab</p></b-tab
        >
      </b-tabs>
    </b-jumbotron>
  </div>
</template>
<style scoped>
.signIn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 66.6vw;
  background-image: url("../.././assets/login_bg_blur.png");
  background-size: cover;
}
.active a {
  background-color: green !important;
}
</style>
