<template>
  <v-app>
    <v-app-bar app dark style="background-color: #303e9f">
      <span class="text-3xl">News</span>
      <v-spacer></v-spacer>
      <v-icon @click="viewHistory()" large color="white darken-4">
        mdi-clipboard-text-clock
      </v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
export default {
  name: "App",

  components: {},
  methods: {
    viewHistory() {
      router.push("/history");
    },
  },
  data: () => ({
    //
  }),
};
</script>
