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
            :description1="item.dcrp1"
            :description2="item.dcrp2"
            :description3="item.dcrp3"
            :description4="item.dcrp4"
            :description5="item.dcrp5"
            :buttonText="item.buttonText"
          />
          <!-- <Cards v-for="card in cards" :key="card.id" :card="card" /> -->
        </b-col>
      </b-row>

      <b-row>
        <b-col v-for="i in items2" :key="i.id">
          <Cards
            :title="i.title"
            :url="i.url"
            :description1="i.dcrp1"
            :description2="i.dcrp2"
            :description3="i.dcrp3"
            :description4="i.dcrp4"
            :description5="i.dcrp5"
            :buttonText="i.buttonText"
          />
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>
<script>
import Cards from "./Cards.vue";
import Carousal from "./home/Carousal.vue";

export default {
  name: "Containers",
  data() {
    return {
      items: [
        {
          id: "1",
          title: "Europe",
          url:
            "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          dcrp1: "London",
          dcrp2: "Amsterdam",
          dcrp3: "Rome",
          dcrp4: "Paris",
          dcrp5: "Barcelona",
          buttonText: "View all destinations in Europe"
        },
        {
          id: "2",
          title: "Asia",
          url:
            "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          // dcrp: "Fly with best price",
          dcrp1: "Bangkok",
          dcrp2: "Bali",
          dcrp3: "Beijing",
          dcrp4: "Tokyo",
          dcrp5: "Mumbai",
          buttonText: "View all destinations in Asia"
        },
        {
          id: "3",
          title: "North America",
          url:
            "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          dcrp1: "Las Vegas",
          dcrp2: "San Francisco",
          dcrp3: "Miami",
          dcrp4: "Toronto",
          dcrp5: "New York",
          buttonText: "View all destinations in America"
        }
      ],

      items2: [
        {
          id: "1",
          title: "Middle East",
          url:
            "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          dcrp1: "Dubai",
          dcrp2: "Abu Dhabi",
          dcrp3: "Doha",
          dcrp4: "Muscat",
          dcrp5: "Jerusalem",
          buttonText: "View all destinations in Middle East"
        },
        {
          id: "2",
          title: "Australia & South Pacific",
          url:
            "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          dcrp1: "Bora Bora",
          dcrp2: "Sydney",
          dcrp3: "Melbourne",
          dcrp4: "Perth",
          dcrp5: "Auckland",
          buttonText: "View all destinations in Australia"
        },
         {
          id: "3",
          title: "Africa",
          url:
            "https://images.pexels.com/photos/625414/pexels-photo-625414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          dcrp1: "Cape Town",
          dcrp2: "Johannesburg",
          dcrp3: "Nairobi",
          dcrp4: "Mombasa",
          dcrp5: "Cairo",
          buttonText: "View all destinations in Africa"
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
