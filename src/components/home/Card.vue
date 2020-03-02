<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div
      style="padding-top: 56.25%; width: 100%; height: 0; position: relative;"
    >
      <el-image
        style="position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;"
        :src="imgSrc"
        fit="fill"
      />
    </div>
    <div style="padding: 14px;">
      <span>{{ title }}</span>
      <div>
        <el-button type="text" class="button">Explore More</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  props: ["imgSrc", "title", "text"],
  data() {
    return {};
  }
};
</script>
