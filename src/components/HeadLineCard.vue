<template>
  <div>
    <div
      v-if="imagUrl == ''"
      class="box-content p-4 h-80 min-h-full shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <div class="flex flex-col space-y-4">
        <div class="self-end">
          <v-icon @click="viewNewsDetails()" large color="blue darken-4">
            mdi-arrow-right-circle
          </v-icon>
        </div>
        <span class="text-gray-400 text-sm"
          >{{ getDate(article.publishedAt) }}
        </span>
        <span class="text-indigo-600 text-lg capitalize font-semibold"
          >{{ article.title }}
          <v-icon @click="editHeadline(article)" medium color="black darken-4">
            mdi-pencil-box
          </v-icon></span
        >
        <p class="text-gray-400 text-sm">
          {{ article.description }}
          <a @click="redirectToReal()" href="" class="text-indigo-600"
            >Read More</a
          >
        </p>
      </div>
    </div>

    <div>
      <v-img
        v-if="imagUrl"
        :src="imagUrl"
        style="height: 350px"
        class="box-content min-h-full shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        <div class="float-right p-4">
          <v-icon @click="viewNewsDetails()" large color="blue darken-4">
            mdi-arrow-right-circle
          </v-icon>
        </div>

        <div class="">
          <p class="mt-48 bg-black/50 p-4 h-80">
            <span class="text-white text-sm"
              >{{ getDate(article.publishedAt) }}
            </span>
            <br />
            <span class="text-white text-lg capitalize font-semibold"
              >{{ article.title }}
              <v-icon
                @click="editHeadline(article)"
                medium
                color="white darken-4"
              >
                mdi-pencil-box
              </v-icon></span
            >
            <br />
            <a @click="redirectToReal()" href="" class="text-indigo-600"
              >Read More</a
            >
          </p>
        </div>
      </v-img>

      
    </div>

    <v-dialog
      max-width="500px"
      transition="slide-x-reverse-transition"
      v-model="editHeadlineModal"
    >
      <v-card style="background-color: #f9f9f9">
        <div class="p-8">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Change Headline
          </label>

          <div class="flex">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              v-model="newTitle"
              type="text"
              placeholder="Type here.."
              autocomplete="off"
              @keyup.enter="changeHeadline()"
            />

            <button
              @click="changeHeadline"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Change
            </button>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import router from "@/router";
import store from "@/store";
//import { mapMutations } from "vuex";
export default {
  name: "HeadLineCard",
  props: {
    article: {},
  },
  data() {
    return {
      imagUrl: "",
      editHeadlineModal: false,
      title: "",
      newTitle: "",
    };
  },
  computed: {},
  created() {
    this.getImageUrl();
  },
  methods: {
    getDate(date) {
      return moment.utc(date).local().format("DD MMMM, YYYY");
    },
    getImageUrl() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.article.urlToImage, true);
      xhr.onload = () => {
        this.imagUrl = xhr.responseURL;
        //   console.log(xhr.responseURL); // http://example.com/test
      };
      xhr.send(null);
    },
    redirectToReal() {
      window.open(this.article.url);
    },
    viewNewsDetails() {
      var author = this.article.author;
      var title = this.article.title;
      var description = this.article.description;
      var url = this.article.url;
      var urlToImage = this.article.urlToImage;
      var publishedAt = this.article.publishedAt;
      var content = this.article.content;

      store.dispatch("addNews", {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
      });

      router.push("/" + title);
    },
    editHeadline(article) {
       this.title = article.title;
      this.editHeadlineModal = true;
 
    },
    changeHeadline() {
      var titles = { title: this.title, newTitle: this.newTitle };
      this.$emit("changeTitle", titles);
      this.editHeadlineModal = false;
    },
  },
};
</script>
