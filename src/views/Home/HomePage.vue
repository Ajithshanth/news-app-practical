<template>
  <v-container>
    <HomeCarousel />
    <v-row no-gutters class="grey lighten-3">
      <v-col cols="3" sm="3">
        <v-card class="pa-2 text-center grey lighten-2 ma-2" outlined tile>
          <v-icon large color="black"> mdi-key-variant </v-icon>
          <br />
          <span class="" id="buttonText"> To Rent </span>
        </v-card>
      </v-col>

      <v-col cols="3" sm="3">
        <v-card class="pa-2 text-center grey lighten-2 ma-2" outlined tile>
          <v-icon large color="black"> mdi-home </v-icon><br />
          <span class="" id="buttonText"> Buy </span>
        </v-card>
      </v-col>
      <v-col cols="3" sm="3">
        <v-card class="pa-2 text-center grey lighten-2 ma-2" outlined tile>
          <v-icon large color="black"> mdi-currency-usd </v-icon><br />
          <span class="" id="buttonText"> Sell </span>
        </v-card>
      </v-col>
      <v-col cols="3" sm="3">
        <v-card class="pa-2 text-center grey lighten-2 ma-2" outlined tile>
          <v-icon large color="black"> mdi-magnify </v-icon><br />
          <span class="" id="buttonText"> Want</span>
        </v-card>
      </v-col>
    </v-row>

    <div class="">
      <v-card v-for="(item, i) in items" :key="i" class="mt-4 rounded-0">
        <v-row no-gutters class="grey lighten-4 pa-2">
          <v-col cols="4" sm="4">
            <v-img
              class="rounded-sm"
              height="100"
              width="100"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
          <v-col cols="8" sm="8">
            <v-chip
              v-if="item.status"
              color="orange"
              style="float: right; "
            >
              <v-icon medium color="black"> mdi-arrow-up-bold </v-icon>
            </v-chip>
            <div class="text-h6">{{ item.name }}</div>

            <v-chip color="blue" text-color="white" >
              <v-icon medium class="mr-2"> mdi-account-supervisor </v-icon>

              {{ item.user }}
            </v-chip>

            <v-row class="mt-2">
              <v-col
                class="pa-0"
                cols="6"
                sm="4"
                v-for="(info, j) in item.details"
                :key="j"
              >
                <ul>
                  <li class="" style="font-size: 13px">{{ info }}</li>
                </ul>
              </v-col>
            </v-row>

            <v-chip color="blue" style="float: right;  "
              >See More..</v-chip
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>

  <!-- <v-container class="p-8">
 
    <v-row>
      <v-col cols="12" sm="4">
        <div @click="toRent()" class="">
          <v-icon large color="black"> mdi-key-variant </v-icon>
          To Rent
        </div>

        <div @click="toSell()">
          <v-icon large color="black"> mdi-home </v-icon>
          Buy
        </div>
        <div @click="toBuy()">
          <v-icon large color="black"> mdi-currency-usd </v-icon>
          Sell
        </div>
        <div @click="toWant()">
          <v-icon large color="black"> mdi-magnify </v-icon>
          Want
        </div>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
//import store from "@/store";

import HomeCarousel from "./HomeCarousel.vue";
export default {
  name: "HomePage",
  components: { HomeCarousel },
  data: () => ({
    items: [
      {
        name: "House in Nugegoda For Sell",
        user: "member",
        details: [
          "02 Bedrooms",
          "02 Bathrooms",
          "Varendah",
          "02 Kitchens",
          "Garage Area",
        ],
        status: true,
      },

      {
        name: "House in Nugegoda For Sell",
        user: "member",
        details: [
          "02 Bedrooms",
          "02 Bathrooms",
          "Varendah",
          "02 Kitchens",
          "Garage Area",
        ],
        status: false,
      },
    ],
  }),
  mounted() {},
};
</script>

<style scoped>
#buttonText {
  font-weight: bold;
  font-size: 14px;
}
</style>
