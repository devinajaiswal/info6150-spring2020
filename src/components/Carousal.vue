<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1920"
      img-height="1080"
      fade="true"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Argentina"
        text="Welcome to Argentina!"
        img-src="https://36aizl3w7551i7pmd42qlm93-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/Argentina-Iguazu-Falls-Walking-Tour1.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Peru"
        img-src="https://media.architecturaldigest.com/photos/5d1b7bbc0a923f000805a428/16:9/w_2560%2Cc_limit/GettyImages-981368050.jpg"
      >
        <h1>Hello Machu Picchu!</h1>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Brazil"
        img-src="https://www.ciee.org/sites/default/files/content/program/main-image/hero-rio-534214670.jpg"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="Costa Rica">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://www.wendywutours.co.uk/resource/upload/1143/banner-colours-of-costa-rica.jpg.webp"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Chile"
        img-src="https://www.andbeyond.com/wp-content/uploads/sites/5/Torres-Del-Paine-Lake-and-the-Horns-in-Patagonia.jpg"
      ></b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Carousal",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
