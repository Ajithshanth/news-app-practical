<template>
  <v-icon
    @click="scrollDown()"
    x-large
    color="blue darken-2"
    class="float-right"
  >
    mdi-chevron-down-box
  </v-icon>
</template>
<script>
export default {
  name: "ScrollDown",
  methods: {
    scrollDown() {
      document.documentElement.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>
