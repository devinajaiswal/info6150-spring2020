<template>
  <div>
    <b-jumbotron id = "headjumbotron" text-variant="white">
      <h2>Show Me:</h2>
       <nav class="navbar navbar-expand-sm bg-gray justify-content-center" >
       <div class="input-group mb-3 " style="width:60%">
      <div class="input-group-prepend">
        <span class="input-group-text">Deals</span>
      </div>
      <input type="text" class="form-control" placeholder="All Deals">
		<div class="input-group-prepend">
        <span class="input-group-text">Places</span>
			 </div>  
      <input type="text" class="form-control" placeholder="Anywhere">
      <div class="input-group-append">
      <button class="btn btn-success" type="submit">Search</button>  
     </div>
    </div>  
    </nav>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "Jumbotron",
  components: {}
};
</script>
<style>
#headjumbotron{background-color: #028090;}
</style>
