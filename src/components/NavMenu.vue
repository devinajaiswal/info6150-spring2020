<template>
  <div id="navbar">
    <el-menu
      mode="horizontal"
      default-active="/"
      router
      background-color="#00a896"
      text-color="#fff"
      active-text-color="#f0f3bd"
    >
      <el-menu-item index="/" style="display:inline">
        <el-image
          style="width: 100%; height: 100%"
          :src="require('.././assets/logo@0,2x.png')"
          fit="contain"
        ></el-image
      ></el-menu-item>
      <el-menu-item index="/flights">
        <font-awesome-icon icon="plane-departure" />
        <span slot="title">&emsp;Flights</span></el-menu-item
      >
      <el-menu-item index="/hotels"
        ><font-awesome-icon icon="hotel" />
        <span slot="title">&emsp;Hotels</span></el-menu-item
      >
      <el-menu-item index="/cruises"
        ><font-awesome-icon icon="ship" />
        <span slot="title">&emsp;Cruises</span>&emsp;</el-menu-item
      >
      <el-menu-item index="/vacation-rentals"
        ><font-awesome-icon icon="map-marked-alt" />
        <span slot="title">&emsp;Vacation Rentals</span></el-menu-item
      >
      <el-submenu index="/more">
        <template slot="title">
          <font-awesome-icon icon="list-alt" />
          &emsp;More
        </template>
        <el-menu-item index="/cars"
          ><font-awesome-icon icon="car" />&emsp;Cars</el-menu-item
        >
        <el-menu-item index="/deals"
          ><font-awesome-icon icon="percentage" />&emsp;Deals</el-menu-item
        >
        <el-menu-item index="/rewards"
          ><font-awesome-icon icon="gift" />&emsp;Rewards</el-menu-item
        >
        <el-menu-item index="/mobile"
          ><font-awesome-icon icon="mobile" />&emsp;Mobile</el-menu-item
        >
      </el-submenu>
      <el-submenu index="user" class="navUser">
        <template slot="title"
          ><font-awesome-icon icon="user-alt" />&emsp;User</template
        >
        <el-menu-item index="/profile">Profile</el-menu-item>
        <el-menu-item index="/sign-in">Sign In</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navUser {
  padding-right: 0px;
  float: right;
}
</style>
