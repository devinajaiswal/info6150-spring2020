<template>
  <div
    class="container"
    :style="{
      backgroundImage: 'url(' + this.bgImg + ')',
      height: containerHeight + 'px'
    }"
  >
    <el-form class="login-container" :model="userdata">
      <el-tabs value="first" stretch>
        <!-- Sign up -->
        <el-tab-pane label="Sign up" name="first">
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="userdata.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item
            style="display:flex;justify-content:center;align-items:center;height:'10vw'"
          >
            <el-button type="primary">Create Account</el-button>
          </el-form-item>
        </el-tab-pane>
        <!-- Sign in -->
        <el-tab-pane
          label="Sign in"
          name="second"
          :style="{ height: containerHeight }"
        >
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item style="display:flex;justify-content:center">
            <el-button type="primary">Sign in</el-button>
          </el-form-item></el-tab-pane
        >
      </el-tabs>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgImg: require("@/assets/login_bg_blur.png"),
      containerHeight: "",
      userdata: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    setSize: function() {
      // calculate height
      this.screenWidth = window.innerWidth;
      this.containerHeight = (1 / 2) * this.screenWidth;
    }
  },
  mounted() {
    // first time load
    this.setSize();
    // window size change
    window.onresize = () => {
      this.setSize();
    };
  }
};
</script>
<style scoped>
.container {
  background-position: center;
  background-size: cover;
  display: flex;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 9% auto;
  width: 50%;
  padding: 5%;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #f0f3bd;
}
</style>
