<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Carousal /></b-col>
      </b-row>

      <b-row>
        <b-col v-for="item in items" :key="item.id">
          <Cards
            :title="item.title"
            :url="item.url"
            :description="item.dcrp"
            :buttonText="item.buttonText"
          />
          <!-- <Cards v-for="card in cards" :key="card.id" :card="card" /> -->
        </b-col>
      </b-row>

      <b-row>
        <b-col><Jumbotron /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Cards from "../components/Cards.vue";
import Carousal from "../components/Carousal.vue";

export default {
  name: "Containers",
  data() {
    return {
      items: [
        {
          id: "1",
          title: "Hotels",
          url:
            "https://cdn-image.travelandleisure.com/sites/default/files/1558446831/bristol-hotel-virginia-53BESTHOTELSWB19.jpg",
          dcrp: "Rest like home",
          buttonText: "Book hotels"
        },
        {
          id: "2",
          title: "Flights",
          url:
            "https://travelvisiontours.com/wp-content/uploads/2013/05/flight.jpg",
          dcrp: "Fly with best price",
          buttonText: "Check flights"
        },
        {
          id: "3",
          title: "Cuisine",
          url:
            "https://images.wallpaperscraft.com/image/seafood_food_bowls_bread_grass_crabs_71468_1680x1050.jpg",
          dcrp: "Discover unforgettable food",
          buttonText: "Reserve restaurants"
        }
      ]
    };
  },
  components: {
    Cards,
    Carousal
  }
};
</script>
