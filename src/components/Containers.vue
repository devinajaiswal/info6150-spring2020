<template>
  <div>
    <b-container>
      <b-row>
        <b-col><Carousel /></b-col>
      </b-row>

      <b-row v-for="(items, index) in itemList" :key="index">
        <b-col v-for="(item, index) in items.items" :key="index">
          <Cards
            :title="item.title"
            :url="item.url"
            :description="item.dcrp"
            :buttonText="item.buttonText"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Cards from "./Cards.vue";
import Carousel from "./home/Carousel.vue";

export default {
  name: "Containers",
  data() {
    return {
      itemList: [
        {
          items: [
            {
              title: "Europe",
              url:
                "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "London",
                  src:
                    "https://lh3.googleusercontent.com/proxy/s9wmyTwH6zHnd4BOe1AtqG_YkKWXE2186NkWQQ1KCB8ckNP3rJjNQnDzgtbH2HshIgRNk-_TGEr_EVPA7U3fOASACP5-D-srk2ZS7WygT65VUrraBjvd2wa0Hg"
                },
                {
                  text: "Amsterdam",
                  src:
                    "https://lh3.googleusercontent.com/proxy/LLtdjIMMcYsYRniIltaoenH4CC6nmwb3X8OjqGAAIK5hZ3vejh_sGxq4NLUf-fj4DYFKiMz9EpsNWXYVelI0nRtyQ5BvlcdJ_k1I_kfS7QNk43GQLNrKqSz_K50DIHno94OH8kt7St8Id9PmKi-gzeAx"
                },
                {
                  text: "Rome",
                  src:
                    "https://lh3.googleusercontent.com/proxy/B4BTL-S2o2m-3ri9mg4mvpvq9QciRc0fYoT1POzdumrPa17ub2aX17buaR6y96Agg4qZCWlq_ownJa10XvqzHIRxgGP_XjHAKHlX3FADYG0yrNcjviHtwRzJ9k3vvSaFS_rvARqpHWBb"
                },
                {
                  text: "Paris",
                  src:
                    "https://lh3.googleusercontent.com/proxy/cFaUonJJTqFf8AE6Igd1eaAqBjQcVbhrJOzr2kgo7l_GU5GTkPVe_p1e6yJWvsxfHIbNR0bKCwfC9FGHpNOsx6kVMPyWv2lYG9HOvXJBSKqiLuRrr1hsMA1TZPQ"
                },
                {
                  text: "Barcelona",
                  src:
                    "https://pldi17.sigplan.org/getImage/carousel/tour_img-323023-90.jpg?1474577784000"
                }
              ],
              buttonText: "View all destinations in Europe"
            },
            {
              title: "Asia",
              url:
                "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Bangkok"
                },
                {
                  text: "Bali"
                },
                {
                  text: "Beijing"
                },
                {
                  text: "Tokyo"
                },
                {
                  text: "Mumbai"
                }
              ],
              buttonText: "View all destinations in Asia"
            },
            {
              title: "North America",
              url:
                "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Las Vegas"
                },
                {
                  text: "San Francisco"
                },
                {
                  text: "Miami"
                },
                {
                  text: "Toronto"
                },
                {
                  text: "New York"
                }
              ],
              buttonText: "View all destinations in America"
            }
          ]
        },
        {
          items: [
            {
              title: "Middle East",
              url:
                "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Dubai"
                },
                {
                  text: "Abu Dhabi"
                },
                {
                  text: "Doha"
                },
                {
                  text: "Muscat"
                },
                {
                  text: "Jerusalem"
                }
              ],
              buttonText: "View all destinations in Middle East"
            },
            {
              title: "Australia & South Pacific",
              url:
                "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Bora Bora"
                },
                {
                  text: "Sydney"
                },
                {
                  text: "Melbourne"
                },
                {
                  text: "Perth"
                },
                {
                  text: "Auckland"
                }
              ],
              buttonText: "View all destinations in Australia"
            },
            {
              title: "Africa",
              url:
                "https://images.pexels.com/photos/625414/pexels-photo-625414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              dcrp: [
                {
                  text: "Cape Town"
                },
                {
                  text: "Johannesburg"
                },
                {
                  text: "Nairobi"
                },
                {
                  text: "Mombasa"
                },
                {
                  text: "Cairo"
                }
              ],
              buttonText: "View all destinations in Africa"
            }
          ]
        }
      ]
    };
  },
  components: {
    Cards,
    Carousel
  }
};
</script>
