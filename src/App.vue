<template>
  <v-app>
    <v-app-bar app dark style="background-color: #303e9f">
      <a href="/" class="link">
        <span class="text-3xl">10QBIT News Portal</span>
      </a>

      <v-spacer></v-spacer>
      <v-icon @click="viewHistory()" large color="white darken-4">
        mdi-clipboard-text-clock
      </v-icon>
    </v-app-bar>

    <v-main>
      <v-icon
        @click="scrollDown()"
        x-large
        color="blue darken-2"
        class="float-right"
      >
        mdi-chevron-down-box
      </v-icon>
      <router-view />
      <v-icon
        @click="scrollUp()"
        x-large
        color="blue darken-2"
        class="float-right"
      >
        mdi-chevron-up-box
      </v-icon>
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
    scrollUp() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollDown() {
      // scrollTo(0, document.body.scrollHeight)

      document.documentElement.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>
