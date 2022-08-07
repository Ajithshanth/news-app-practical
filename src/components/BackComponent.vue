<template>
  <div class="cursor-pointer mb-2" @click="backToPrevious()">
    <v-icon large color="black darken-4" class="-ml-2">
      mdi-arrow-left-circle
    </v-icon>
    <span> Back </span>
  </div>
</template>
<script>
export default {
  name: "BackComponent",
  methods: {
    backToPrevious() {
      this.$router.go(-1);
    },
  },
};
</script>
