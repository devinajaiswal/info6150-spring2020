<template>
<div>
    <el-container>
    <el-main>
    NAME: <el-input :disabled="flag" v-model="json.username"></el-input>
    USERNAME<el-input :disabled="flag" v-model="json.username"></el-input>
    EMAIL: <el-input :disabled="flag" v-model="json.email"></el-input>
    CURRENT CITY: <el-input :disabled="flag" v-model="json.city"></el-input>
    ABOUT YOU: <el-input :disabled="flag" v-model="json.about"></el-input>

    <el-row class="wow">  
        <el-button type="primary" v-show= "flag" @click="editProfile">Edit Profile</el-button> 
        <el-button type="success" v-show= "!flag" @click="profile" >Update</el-button> 
        <el-button type="warning" v-show= "!flag" @click="getJson">Cancel</el-button>       
    </el-row>
  </el-main>
    </el-container>
  </div>
</template>


<script>
//import Editprofile from "@/components/profile/Editprofile.vue";
//import Viewprofile from "@/components/profile/Viewprofile.vue";

export default {
  data() {
    return {
      // bgImg: require("@/assets/login_bg_blur.png"), 
      json: {},
      flag: true    
    };
  },
  mounted() {
    this.getJson();
    //this.profile();
  },
  
  methods: {
    editProfile(){
      this.flag = !this.flag
    },
    profile() {
      this.flag = !this.flag
      this.$axiosUtil
        .post("back/profile/", {

          username: this.json.username,
          email: this.json.email,
          userid: this.json.userid,
          name: this.json.username,
	        city:this.json.city,
          about:this.json.about
                  
          // username:"zoe",
          // userid: 5,
          // email: "email",
	        // city:"city",
          // about:"about"    
        })
        .then(response => {
          console.log(response.data);
          this.json = response.data;
        });
        this.getJson();
    },
    getJson() {
      this.flag = true
      this.$axiosUtil
        .get("back/profile/", {
          userid: "5"
        })
        .then(response => {
          console.log(response.data);
          this.json = response.data;
        });
    }
  },
  // components: {
  //   Editprofile,
  //   Viewprofile
  // }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 10px;
  text-align: center;
}
h1 {
  color: #00a896;
}

.wow {
  padding: 25px
}
.el-card  {
  background-color: white !important;
  color:  #00a896;
  text-align: center;
}
</style>
