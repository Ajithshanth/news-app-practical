<template>
  <div class="p-8">
    <BackComponent />
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
        <ShareNews :url="url" />
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
import ShareNews from "@/components/ShareNews.vue";

export default {
  components: { BackComponent, ShareNews },
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
  },
};
</script>
