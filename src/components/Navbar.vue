<template>
  <div id="navbar">
    <b-navbar toggleable="lg">
      <b-navbar-brand>
        <font-awesome-icon icon="globe-europe"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Flights</b-nav-item>
          <!-- <b-nav-item href="/about">About</b-nav-item> -->
          <b-nav-item href="/hotels">Hotels</b-nav-item>
          <b-nav-item href="/Cars">Cars</b-nav-item>
          <b-nav-item-dropdown text="More" right>
             <b-dropdown-item href="#">Vacation Rentals </b-dropdown-item>
             <b-dropdown-item href="#">Deals </b-dropdown-item>
             <b-dropdown-item href="#">Rewards</b-dropdown-item>
             <b-dropdown-item href="#">Mobile</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-navbar-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Account </em>
              <font-awesome-icon icon="user-alt" />
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style>
#navbar{
background-color: #028090;
color:  #f0f3bd;
}

</style>