<template>
  <div class="signIn">
    <el-form class="login-container" :model="userdata">
      <el-tabs value="first" stretch>
        <!-- Sign up -->
        <el-tab-pane label="Sign up" name="first" class="tab-p">
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Emain">
            <el-input v-model="userdata.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit"
              >Create Account</el-button
            >
          </el-form-item>
        </el-tab-pane>
        <!-- Sign in -->
        <el-tab-pane label="Sign in" name="second" class="tab-p">
          <el-form-item label="Username">
            <el-input v-model="userdata.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="userdata.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Sign in</el-button>
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
      userdata: {
        username: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>
<style scoped>
.signIn {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  background-image: url("../.././assets/login_bg_blur.png");
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 40%;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #f0f3bd;
}
</style>
