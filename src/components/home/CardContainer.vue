<template>
  <div>
    <el-row type="flex" justify="space-around" v-for="(item, index) in items" :key="index">
      <el-col :span="6">
        <Card />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Card from "./Card.vue";
import Card2 from "./Card2.vue";
export default {
  data() {
    return {
      items: [
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          imgSrc:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        }
      ]
    };
  },
  components: {
    Card,
    Card2
  }
};
</script>
