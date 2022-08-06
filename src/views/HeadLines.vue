<template>
  <div class="p-8">
    <div class="flex justify-between items-center">
      <div class="text-2xl text-indigo-600">Headlines</div>
      <div>
        <button
          @click="viewFilter()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Filter
        </button>
      </div>
    </div>

    <div v-if="filtered" class="flex justify-between items-center mt-2">
      <div class="text-lg text-indigo-600">
        Headlines Filtered : {{ searchText }}
      </div>
      <div>
        <button
          @click="clearFilter()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Filter
        </button>
      </div>
    </div>

    <div
      class="pt-6 grid lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4"
    >
      <div v-for="item in articles" :key="item.id">
        <HeadLineCard :article="item" />
      </div>
    </div>

    <v-dialog
      max-width="500px"
      transition="slide-x-reverse-transition"
      v-model="viewFilterModal"
    >
      <v-card style="background-color: #f9f9f9">
        <div class="p-8">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Filter Topic
          </label>
          <div class="flex">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              v-model="searchText"
              type="text"
              placeholder="Type here.."
              autocomplete="off"
              @keyup.enter="filterSearch()"
            />

            <button
              @click="filterSearch()"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import store from "@/store";
import HeadLineCard from "@/components/HeadLineCard.vue";
export default {
  name: "HeadLines",
  data: () => ({
    sources: [],
    articles: [],
    viewFilterModal: false,
    filtered: false,
    searchText: "",
  }),
  mounted() {
    this.getDatafromApi();
  },

  created() {},
  components: { HeadLineCard },
  methods: {
    async getDatafromApi() {
      await this.$http
        .get(`/top-headlines?country=us&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.sources = response.data;
            this.articles = response.data.articles;
            if (this.articles.length > 0) {
              for (let i = 0; i < this.articles.length; i++) {
                this.articles.id = i;
              }
            }
          }
        });
    },

    viewFilter() {
      this.searchText = "";
      this.filtered = false;
      this.viewFilterModal = true;
    },
    closeFilter() {
      this.viewFilterModal = false;
    },
    filterSearch() {
      this.$http
        .get(`/top-headlines?q=${this.searchText}&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.sources = response.data;
            this.articles = response.data.articles;
            if (this.articles.length > 0) {
              for (let i = 0; i < this.articles.length; i++) {
                this.articles.id = i;
              }
            }
            this.filtered = true;
            this.closeFilter();
          }
        });
    },
    clearFilter() {
      this.filtered = false;
      this.getDatafromApi();
    },
  },
};
</script>
