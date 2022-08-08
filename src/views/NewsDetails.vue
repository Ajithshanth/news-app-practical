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
          <v-icon
            @click="whatsappShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-whatsapp
          </v-icon>
          <v-icon
            @click="facebookShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-facebook
          </v-icon>
          <v-icon
            @click="messengerShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-facebook-messenger
          </v-icon>
          <v-icon
            @click="linkedinShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-linkedin
          </v-icon>
          <v-icon
            @click="twitterShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-twitter
          </v-icon>
          <v-icon
            @click="mailShare()"
            large
            color="black darken-4"
            class="ml-2"
          >
            mdi-email
          </v-icon>
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
import store from "@/store";
import moment from "moment";

export default {
  components: { BackComponent },
  data() {
    return {
      author: store.state.author,
      title: store.state.title,
      description: store.state.description,
      url: store.state.url,
      urlToImage: store.state.urlToImage,
      publishedAt: store.state.publishedAt,
      content: store.state.content,
    };
  },

  methods: {
    dateFormat(date) {
      return moment.utc(date).local().format("DD MMMM, YYYY");
    },
    facebookShare() {
      const navUrl = "https://www.facebook.com/sharer/sharer.php?u=" + this.url;
      window.open(navUrl, "_blank");
    },
    whatsappShare() {
      const navUrl = "whatsapp://send?text=" + this.url;
      window.open(navUrl, "_blank");
    },
    messengerShare() {
      const navUrl = "fb-messenger://share/?link=" + this.url;
      window.open(navUrl, "_blank");
    },
    linkedinShare() {
      const navUrl =
        " https://www.linkedin.com/sharing/share-offsite/?url=" + this.url;
      window.open(navUrl, "_blank");
    },
    twitterShare() {
      const navUrl = "https://twitter.com/intent/tweet?text=" + this.url;
      window.open(navUrl, "_blank");
    },
    mailShare() {
      const navUrl = " mailto:?" + this.url;
      window.open(navUrl, "_blank");
    },
  },
};
</script>
