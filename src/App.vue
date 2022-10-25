<template>
  <v-app>
    <!-- <AppBar /> -->
    <v-main>
      <!-- <router-view /> -->

      <ScrollDown />
      <router-view />
      <ScrollUp />
    </v-main>
  </v-app>
</template>

<script>
  import ScrollDown from "./components/ScrollDown.vue";
  import ScrollUp from "./components/ScrollUp.vue";
//import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: { ScrollDown, ScrollUp},
};
</script>
