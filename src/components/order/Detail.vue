<template>
  <el-col :span="15" :offset="1">
    <el-card shadow="hover">
      <div slot="header">
        <span>{{ orderData.airline + orderData.flight_number }}</span>
        <el-divider></el-divider>
        <el-row class="wow">
          <el-col :span="8">
            <span>{{ orderData.origin }}</span>
          </el-col>
          <el-col :span="8">
            <i class="el-icon-right" />
          </el-col>
          <el-col :span="8">
            <span>{{ orderData.destination }}</span>
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-col :span="12">
          Departure time:
        </el-col>
        <el-col :span="12">
          Return time:
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-date-picker
            v-model="orderData.departure_at"
            type="datetime"
            :readonly="true"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="orderData.return_at"
            type="datetime"
            :readonly="true"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      ${{ orderData.price }}
    </el-card>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      orderData: {
        price: 275,
        airline: "AA",
        flight_number: 1259,
        departure_at: "2020-04-17T07:28:00Z",
        return_at: "2020-04-22T08:30:00Z",
        origin: "BOS",
        destination: "AAQ"
      }
    };
  },
  components: {}
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
  text-align: center;
}
.wow {
  margin-bottom: 0px;
}
.el-card >>> .el-card__header {
  background-color: #00a896 !important;
  color: white;
  text-align: center;
}
</style>
