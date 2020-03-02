<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <img :src="imgSrc" fit="contain" style="width: 100%;" />
    <div style="padding: 14px;">
      <span>{{ title }}</span>
      <span>{{ text }}</span>
      <div class="bottom clearfix">
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: "",
      title: "",
      text: ""
    };
  }
};
</script>
