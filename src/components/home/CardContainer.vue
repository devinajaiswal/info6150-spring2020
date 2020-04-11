<template>
  <el-container>
    <el-main>
      <el-row type="flex" style="margin-top: 0.5%">
        <el-col :span="6" :offset="1">
          <h2>Explore the Big World!</h2>
          <p></p>
        </el-col>
      </el-row>

      <el-row
        type="flex"
        justify="space-around"
        v-for="(item, index) in items"
        :key="index"
        style="margin-bottom: 5%"
      >
        <el-col :span="6" v-for="(item, index) in item.items" :key="index">
          <Card :imgSrc="item.imgSrc" :title="item.title" :text="item.text" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    Card
  },
  mounted() {
    this.loadJson();
  },
  methods: {
    loadJson() {
      this.items = require("@/static/home/card-items");
    }
  }
};
</script>
