<template>
  <div class="p-8">
    <BackComponent />
    <!-- <div class="">
        <div class="text-2xl text-black">Headlines : {{ title }}</div>
      <div class="text-lg text-black">Description : {{ description }}</div>
      <div class="text-lg text-black">PublishedAt : {{ publishedAt }}</div>
      <div class="text-lg text-black">Author :{{ author }}</div>
      <div class="text-lg text-black">Content : {{ content }}</div>
      <div class="text-lg text-black">Real News Url : {{url }}</div>
      <div class="text-lg text-black">Image :{{ urlToImage }}</div>
    </div> -->
    <div class="flex flex-col space-y-4 pt-2">
      <div class="lg:text-4xl md:text-3xl text-xl text-black font-black">
        Headlines : {{ title }}
      </div>
      <div class="lg:text-xl md:text-lg text-base text-black italic">
        {{ description }}
      </div>
      <div
        class="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:space-x-10 md:space-y-4 space-y-4"
      >
        <div class="text-md text-black mt-4">
          By <span class="text-blue-400">{{ author }}</span> on
          {{ dateFormat(publishedAt) }}
        </div>

        <div class="flex justify-start items-center space-x-8">
          <v-icon large color="black darken-4" class="ml-2"> mdi-share </v-icon>
          <v-icon large color="black darken-4" class="ml-2">
            mdi-whatsapp
          </v-icon>
          <v-icon large color="black darken-4" class="ml-2">
            mdi-facebook
          </v-icon>
          <v-icon large color="black darken-4" class="ml-2">
            mdi-facebook-messenger
          </v-icon>
          <v-icon large color="black darken-4" class="ml-2">
            mdi-linkedin
          </v-icon>
          <v-icon large color="black darken-4" class="ml-2">
            mdi-link-box-variant
          </v-icon>
          <v-icon large color="black darken-4" class="ml-2"> mdi-email </v-icon>
        </div>
      </div>
      <a class="text-md text-black" :href="url"
        >Click here to visit Real News Website</a
      >
      <div
        class="flex lg:flex-row md:flex-col flex-col justify-center items-start lg:space-x-2 md:space-y-2 space-y-2"
      >
        <div class="w-full">
          <img :src="urlToImage" />
        </div>
        <div
          class="lg:text-lg md:text-base text-sm text-black antialiased tracking-wide"
        >
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackComponent from "@/components/BackComponent.vue";
import moment from "moment";

export default {
  components: { BackComponent },
  data() {
    return {
      author: "",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    };
  },
  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.author = window.sessionStorage.getItem("author");
      this.title = window.sessionStorage.getItem("title");
      this.description = window.sessionStorage.getItem("description");
      this.url = window.sessionStorage.getItem("url");
      this.urlToImage = window.sessionStorage.getItem("urlToImage");
      this.publishedAt = window.sessionStorage.getItem("publishedAt");
      this.content = window.sessionStorage.getItem("content");
    },
    dateFormat(date) {
      return moment.utc(date).local().format("DD MMMM, YYYY");
    },
  },
};
</script>
