<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div class="container">
      <div style="padding: 14px;">
        <span style="color:white">好吃的汉堡</span>
        <div>
          <el-button round type="primary" size="mini" class="button"
            >操作按钮</el-button
          >
        </div>
        <div>
          <el-button round type="info" size="mini" class="button"
            >操作按钮</el-button
          >
        </div>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  background-image: url("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png");
  background-position: center;
  background-size: cover;
  display: flex;
  height: 300px;
  align-items: flex-end;
}
</style>
