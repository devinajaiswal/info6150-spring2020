<template>
  <div>
    <el-row
      type="flex"
      justify="space-around"
      v-for="(item, index) in items"
      :key="index"
    >
      <el-col :span="6" v-for="(item, index) in item.items" :key="index">
        <Card :imgSrc="item.imgSrc" :title="item.title" :text="item.text" />
      </el-col>
    </el-row>
  </div>
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
