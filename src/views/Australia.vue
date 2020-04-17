<template>
  <div class="Australia">
 <AustraliaImage />    
<AustraliaCollapse />
<AustraliaDetail />  
  </div>
</template>
<script>
// @ is an alias to /src
import AustraliaCollapse from "@/components/city/AustraliaCollapse.vue";
import AustraliaImage from "@/components/city/AustraliaImage.vue";
import AustraliaDetail from "@/components/city/AustraliaDetail.vue";
// import Carousel from "@/components/home/Carousel.vue";
// import CardContainer from "@/components/home/CardContainer.vue";

export default {
  components: {
    AustraliaImage,
    AustraliaCollapse,
    AustraliaDetail
  }
};
</script>