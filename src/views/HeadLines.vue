<template>
  <div class="p-8">
    <loading
      :opacity="1"
      background-color="white"
      :active.sync="isLoading"
      color="blue"
      loader="spinner"
      :width="50"
      :height="50"
      :is-full-page="true"
    />
    <div class="flex justify-between items-center">
      <div class="text-2xl text-indigo-600">Headlines</div>
      <div>
        <ButtonComponent v-on:click.native="viewFilter()" text=" Filter" />
      </div>
    </div>
    <!-- Begin: Filter Info -->
    <FilterInfo
      v-if="filtered"
      :searchText="searchText"
      :selectedSource="selectedSource"
      @clearFilter="clearFilter($event)"
    />
    <!-- End: Filter Info -->
    <div
      v-if="!noArticles"
      class="pt-6 grid lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4"
    >
      <div v-for="(item, i) in articles" :key="i">
        <HeadLineCard :article="item" @changeTitle="changeTitle($event)" />
      </div>
    </div>

    <div v-if="noArticles" class="p-2 font-semibold text-center">
      There is no news in selected filters...
    </div>

    <!-- Begin: API Error -->

    <ApiErrorHandling />

    <!-- Begin: API Error -->

    <!-- Begin : Filter Input Modal -->
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
              v-on:change="activateFilter()"
            />
            <ButtonComponent
              v-on:click.native="activateFilter()"
              text="Search"
            />
          </div>
        </div>
      </v-card>
    </v-dialog>
    <!-- End : Filter Input Modal -->
  </div>
</template>

<script>
import store from "@/store";
import HeadLineCard from "@/components/HeadLineCard.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import ApiErrorHandling from "@/components/ApiErrorHandling.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FilterInfo from "@/components/FilterInfo.vue";

export default {
  name: "HeadLines",
  components: {
    HeadLineCard,
    Loading,
    ApiErrorHandling,
    ButtonComponent,
    FilterInfo,
  },
  data: () => ({
    isLoading: false,
    viewFilterModal: false,
    filtered: false,
    noArticles: false,
    sources: [],
    articles: [],
    searchText: "",
    selectedSource: "",
    title: "",
    newTitle: "",
  }),
  mounted() {
    this.getHeadlinesFromApi();
  },

  created() {},
  watch: {},
  methods: {
    async getHeadlinesFromApi() {
      this.isLoading = true;
      await this.$http
        .get(`/top-headlines?country=us&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.articles = response.data.articles;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error.message);
        });
    },

    async getSourcesFromApi() {
      this.isLoading = true;
      await this.$http
        .get(`/sources?apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.sources = response.data.sources;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error.message);
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
      this.getHeadlinesFromApi();
    },

    getFilteredHeadlinedFromApi() {
      this.isLoading = true;
      this.$http
        .get(`/top-headlines?q=${this.searchText}&apiKey=${store.state.apiKey}`)
        .then((response) => {
          if (response.status == "200") {
            this.articles = response.data.articles;

            if (this.selectedSource != "") {
              this.filterBySource();
            } else {
              //Print Sources to Search
              this.printSources();

              this.filtered = true;
              this.closeFilter();
            }
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error.message);
        });
    },

    filterBySource() {
      //Print Sources to Search
      this.printSources();

      var filteredArticles = this.articles.filter((obj) => {
        return obj.source.name === this.selectedSource;
      });

      if (filteredArticles.length > 0) {
        this.articles = filteredArticles;
      } else {
        this.noArticles = true;
      }
      this.filtered = true;
      this.closeFilter();
    },

    printSources() {
      console.log("Filter by Headline:", this.searchText);
      console.log("Filter by Source :", this.selectedSource);

      var sources = [];
      this.articles.forEach((element) => {
        sources.push(element.source.name);
      });
      console.log("Sources:", sources);
    },
    changeTitle(titles) {
      for (const obj of this.articles) {
        if (obj.title === titles.title) {
          obj.title = titles.newTitle;

          break;
        }
      }
    },
  },
};
</script>
