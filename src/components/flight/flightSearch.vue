<template>
    <div class="mainContainer">
    <div class="mainHeader "><span>Traveling the globe making dreams come true!</span></div>
    <div class="contentContainer"> 
   <el-card>
       
   <el-form >
       <div>
        <el-radio-group v-model="radio">
  <el-radio :label="1">One Way</el-radio>
  <el-radio :label="2">Round trip</el-radio>
  
</el-radio-group>
       </div>
       <div>
<el-input
  placeholder="From City"
  v-model="fromCity"
  clearable>
</el-input>
       </div>
       <div>
<el-input
  placeholder="To City"
  v-model="toCity"
  clearable>
</el-input>
       </div>
       <div>
      <el-date-picker
      v-model="departureDate"
      type="date"
      placeholder="Departure"
      format="MM/dd/yyyy"
      value-format="MM-dd-yyyy">
    </el-date-picker>
       </div>

          <div>
      <el-date-picker
      v-model="returnDate"
      type="date"
      placeholder="Return"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
       </div>
    </el-form>
    


  </el-card>
    </div>
    </div>
</template>

<script>
  export default {
    
    data() {
      return {
         radio: 1,
         fromCity: '',
         toCity: '',
        departureDate: '',
        returnDate: '',
        }
      
    
  }
  }
</script>

<style scoped>
.mainHeader{
   color: darkcyan;
   font-size: 30px;
   text-align: center;
   font-weight: bold;
   font-family: Arial, Helvetica, sans-serif;
   
}





</style>