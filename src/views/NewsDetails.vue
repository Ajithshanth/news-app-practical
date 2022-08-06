<template>
  <div class="p-8">
    <div class="">
      Back Button

      <div class="text-2xl text-black">Headlines : {{ title }}</div>
      <div class="text-lg text-black">Description : {{ description }}</div>
      <div class="text-lg text-black">PublishedAt : {{ publishedAt }}</div>
      <div class="text-lg text-black">Author :{{ author }}</div>
      <div class="text-lg text-black">Content : {{ content }}</div>
      <div class="text-lg text-black">Real News Url : {{ url }}</div>
      <div class="text-lg text-black">Image :{{ urlToImage }}</div>
    </div>
  </div>
</template>

<script>
export default {
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

  computed: {},
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
  },
};
</script>
