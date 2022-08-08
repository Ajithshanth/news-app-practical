<template>
  <v-app-bar app dark style="background-color: #303e9f">
    <a href="/" class="link">
      <span class="text-3xl">10QBIT News Portal</span>
    </a>

    <v-spacer></v-spacer>
    <v-icon @click="viewHistory()" large color="white darken-4">
      mdi-clipboard-text-clock
    </v-icon>
  </v-app-bar>
</template>
<script>
import router from "@/router";
export default {
  name: "AppBar",
  methods: {
    viewHistory() {
      router.push("/history");
    },
  },
};
</script>
