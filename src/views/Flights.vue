<template>
  <div class="Flights">
   <flightSearch></flightSearch> 
   </div>
</template>

<script>
// @ is an alias to /src

import flightSearch from "@/components/flight/flightSearch.vue";
export default {
  components: {
  flightSearch
  }
};
</script>