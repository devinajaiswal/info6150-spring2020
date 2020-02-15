<template>
  <div>
    <b-jumbotron >
       <h3>Join us for exclusive deals & rates — it’s free.</h3>
      <h4><small>Be the first to know about breaking news and exclusive deals from JUST-GO.</small></h4>
     <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Insert Your Email And Join Us">
    <div class="input-group-append">
      <button class="btn btn-success" type="submit">Join</button>  
     </div>
  </div>
    <hr class="my-4">
      <Modal />
     
      <b-button
        variant="dark"
        href="https://github.com/SylvanWang/info6150-spring2020"
      >
  
        <font-awesome-icon :icon="['fab', 'github']" size="5x" />
      </b-button>
      <p>Check out our website on github</p>
      <hr style="filter: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color="#E5E5E5" size="3" />
       <!-- <hr class="my-4"> -->
      <nav class="navbar navbar-expand-sm bg-gray justify-content-center"> 
  <ul class="navbar-nav">
    <li1 class="nav-item"><small>
      <a class="nav-link" href="#">ABOUT US</a></small>
    </li1>
    <li1 class="nav-item"><small>
      <a class="nav-link" href="#">WORK WITH US</a></small>
    </li1>
    <li1 class="nav-item"><small>
      <a class="nav-link" href="#">INVESTOR RELATIONS</a></small>
    </li1>
     <li1 class="nav-item"><small>
      <a class="nav-link" href="#">HELP</a></small>
    </li1>
     <li1 class="nav-item"><small>
      <a class="nav-link" href="#">PRIVACY</a></small>
    </li1>
     <li1 class="nav-item"><small>
      <a class="nav-link" href="#">TERMS&CONDITIONS</a></small>
    </li1>
     <li1 class="nav-item"><small>
      <a class="nav-link" href="#">STORIES</a></small>
    </li1>
     <li1 class="nav-item"><small>
      <a class="nav-link" href="#">NEWS FEED</a></small>
    </li1>
  </ul>
</nav>
    </b-jumbotron>
  </div>
</template>
<script>
import Modal from "../Modal.vue";
export default {
  name: "Jumbotron",
  components: {
    Modal
  }
};
</script>

