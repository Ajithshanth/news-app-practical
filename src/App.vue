<template>
  <v-app>
    <v-app-bar app dark style="background-color: #303e9f">
      <div class="d-flex align-center">
        <span class="text-3xl">News</span>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
