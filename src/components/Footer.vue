<template>
  <el-container>
    <el-main bg-primary>
      <el-row type="flex" justify="center">
        <el-col
          v-for="item in outLinks"
          :key="item.id"
          :span="2"
          style="display:flex;align-items:center;justify-content:center"
        >
          <el-link type="primary" :underline="false" v-bind:href="item.src">
            <font-awesome-icon v-bind:icon="['fab', item.name]" size="2x" />
          </el-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row type="flex" justify="center">
        <el-col
          v-for="item in inLinks"
          :key="item.id"
          :span="2"
          style="display:flex;align-items:center;justify-content:center"
        >
          <el-link type="info" :underline="false" v-bind:href="item.src">
            {{ item.name }}
          </el-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      outLinks: [],
      inLinks: []
    };
  },
  mounted() {
    this.loadJson();
  },
  methods: {
    loadJson() {
      this.outLinks = require("../static/footer-out-links");
      this.inLinks = require("../static/footer-in-links");
    }
  }
};
</script>
