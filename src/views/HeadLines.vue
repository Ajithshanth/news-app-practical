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
      <div class="text-lg text-indigo-600">
        Topic Filtered : {{ selectedSource }}
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
      v-if="!noArticles"
      class="pt-6 grid lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4"
    >
      <div v-for="item in articles" :key="item.id">
        <HeadLineCard :article="item" @changeTitle="ChangeT($event)" />
      </div>
    </div>
    <div v-if="noArticles" class="p-2 font-semibold text-center">
      There is no news in selected filters...
    </div>
    <v-dialog
      max-width="500px"
      transition="slide-x-reverse-transition"
      v-model="viewFilterModal"
    >
      <v-card style="background-color: #f9f9f9">
        <div class="p-8">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Filter Topic
          </label>
          <v-select
            v-model="selectedSource"
            label="Select a source"
            :items="sources"
            item-text="name"
            item-value="name"
            outlined
          />

          <div class="flex">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
              v-model="searchText"
              type="text"
              placeholder="Type here.."
              autocomplete="off"
              @keyup.enter="activateFilter()"
            />

            <button
              @click="activateFilter()"
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
  components: { HeadLineCard },
  data: () => ({
    sources: [],
    articles: [],
    viewFilterModal: false,
    filtered: false,
    searchText: "",
    selectedSource: "",
    noArticles: false,
    title: "",
    newTitle: "",
  }),
  mounted() {
    this.getHeadlinedFromApi();
  },

  created() {},
  watch: {},
  methods: {
    async getHeadlinedFromApi() {
      await this.$http
        .get(`/top-headlines?country=us&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.sources = response.data;
            this.articles = response.data.articles;
            // if (this.articles.length > 0) {
            //   for (let i = 0; i < this.articles.length; i++) {
            //     this.articles.id = i;
            //   }
            // }
          }
        });
    },

    async getSourcesFromApi() {
      await this.$http
        .get(`/sources?apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.sources = response.data.sources;
          }
        });
    },

    viewFilter() {
      this.getSourcesFromApi();
      this.viewFilterModal = true;
    },
    closeFilter() {
      this.viewFilterModal = false;
    },

    activateFilter() {
      console.log("searchText", this.searchText);
      console.log("selectedSource", this.selectedSource);
      const hasMoreThan255 = !/^[\u0000-\u007f]*$/.test(this.searchText);
      if (!hasMoreThan255) {
        if (this.searchText != "") {
          this.getFilteredHeadlinedFromApi();
        }
        if (this.selectedSource != "" && this.searchText == "") {
          this.filterBySource();
        }
      } else {
        alert("Invalid Charactor");
        this.searchText = "";
      }
    },
    clearFilter() {
      this.filtered = false;
      this.noArticles = false;
      if (this.selectedSource != "") {
        this.selectedSource = "";
        this.getSourcesFromApi();
      }
      this.getHeadlinedFromApi();
    },

    getFilteredHeadlinedFromApi() {
      this.$http
        .get(`/top-headlines?q=${this.searchText}&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.articles = response.data.articles;

            // if (this.articles.length > 0) {
            //   for (let i = 0; i < this.articles.length; i++) {
            //     this.articles.id = i;
            //   }
            // }

            if (this.selectedSource != "") {
              this.filterBySource();
            } else {
              console.log("Filter by Headline:", this.searchText);

              var sources = [];
              this.articles.forEach((element) => {
                sources.push(element.source.name);
              });
              console.log("Sources:", sources);

              this.filtered = true;
              this.closeFilter();
            }
          }
        });
    },

    filterBySource() {
      console.log("Filter by Headline:", this.searchText);
      console.log("Filter by Source :", this.selectedSource);
      var sources = [];
      this.articles.forEach((element) => {
        sources.push(element.source.name);
      });
      console.log("Sources:", sources);

      var filteredArticles = this.articles.filter((obj) => {
        return obj.source.name === this.selectedSource;
      });

      if (filteredArticles.length > 0) {
        this.articles = filteredArticles;
        console.log("Articles", filteredArticles);
      } else {
        console.log("No Articles");
        this.noArticles = true;
      }
      this.filtered = true;
      this.closeFilter();
    },
    ChangeT(titles) {
      console.log(titles);

      for (const obj of this.articles) {
        if (obj.title === titles.title) {
          obj.title = titles.newTitle;

          break;
        }
      }

      // this.title = title;
      // this.newTitle = newTitle;
      // console.log(this.title);
      // console.log(this.newTitle);
    },
  },
};
</script>
