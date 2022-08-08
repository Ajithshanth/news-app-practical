<template>
  <v-icon
    @click="ScrollUp()"
    x-large
    color="blue darken-2"
    class="float-right"
  >
    mdi-chevron-up-box
  </v-icon>
</template>
<script>
export default {
  name: "ScrollUp",
  methods: {
    ScrollUp() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
