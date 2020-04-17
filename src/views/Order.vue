<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <Title />
        </el-row>
        <el-row>
          <Detail />
          <Info />
        </el-row>
        <el-row>
          <p></p>
        </el-row>
        <el-row>
          <el-col :offset="1">
            <el-button type="primary" icon="el-icon-check" @click="confirm"
              >Confirm</el-button
            >
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Title from "@/components/order/Title.vue";
import Detail from "@/components/order/Detail.vue";
import Info from "@/components/order/Info.vue";
import { v1 as uuidv1 } from "uuid";

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
  components: {
    Title,
    Detail,
    Info
  },
  methods: {
    confirm() {
      if (!this.$store.getters.isLoggedIn) {
        this.$message({
          message: "Sign in First!",
          type: "warning"
        });
        this.$router.push("/sign-in");
      } else {
        var no = this.generateOrderNo();
        console.log(this.$store.getters.getId);
        this.$axiosUtil
          .post("back/order", {
            no: no,
            userId: this.$store.getters.getId,
            data: this.orderData
          })
          .then(
            () => {
              this.$message({
                message: "Order " + no + " confirmed!",
                type: "success"
              });
            },
            rej => {
              if (rej.response.status == 400) {
                this.$message.error("ERROR!");
              }
            }
          );
      }
    },
    generateOrderNo() {
      return uuidv1();
    }
  }
};
</script>
