<template>
  <el-container>
    <el-main>
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
      outLinks: [
        {
          id: "1",
          name: "github",
          src: "https://github.com/SylvanWang/info6150-spring2020"
        },
        {
          id: "2",
          name: "facebook"
        },
        {
          id: "3",
          name: "twitter"
        },
        {
          id: "4",
          name: "linkedin"
        },
        {
          id: "5",
          name: "vimeo"
        },
        {
          id: "6",
          name: "youtube"
        },
        {
          id: "7",
          name: "instagram"
        }
      ],
      inLinks: [
        {
          id: "1",
          name: "About us"
        },
        {
          id: "2",
          name: "Career"
        },
        {
          id: "3",
          name: "Blog"
        },
        {
          id: "4",
          name: "Terms"
        },
        {
          id: "5",
          name: "Support"
        },
        {
          id: "6",
          name: "Sitemap"
        }
      ]
    };
  }
};
</script>
