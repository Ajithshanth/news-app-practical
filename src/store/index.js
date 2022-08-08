import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: "c924afc561b84f1f80707784e0d1473c",
    browserHistory: JSON.parse(localStorage.getItem("browserHistory")) || [],
    author: sessionStorage.getItem("author"),
    title: sessionStorage.getItem("title"),
    description: sessionStorage.getItem("description"),
    url: sessionStorage.getItem("url"),
    urlToImage: sessionStorage.getItem("urlToImage"),
    publishedAt: sessionStorage.getItem("publishedAt"),
    content: sessionStorage.getItem("content"),
  },
  mutations: {
    ADD_API_KEY: (state, data) => {
      state.apiKey = data;
      console.log(state.apiKey)
      localStorage.setItem("apiKey", state.apiKey);
    },
    ADD_HISTORY: (state, data) => {
      state.browserHistory.push(data);
      localStorage.setItem(
        "browserHistory",
        JSON.stringify(state.browserHistory)
      );
    },

    ADD_NEWS: (state, data) => {
      state.author = data.author;
      state.title = data.title;
      state.description = data.description;
      state.url = data.url;
      state.urlToImage = data.urlToImage;
      state.publishedAt = data.publishedAt;
      state.content = data.content;

      sessionStorage.setItem("author", data.author);
      sessionStorage.setItem("title", state.title);
      sessionStorage.setItem("description", state.description);
      sessionStorage.setItem("url", state.url);
      sessionStorage.setItem("urlToImage", state.urlToImage);
      sessionStorage.setItem("publishedAt", state.publishedAt);
      sessionStorage.setItem("content", state.content);
    },
  },

  actions: {
    addHistory({ commit }, data) {
      commit("ADD_HISTORY", data.history);
    },

    addNews({ commit }, data) {
      commit("ADD_NEWS", data);
    },
    addApiKey({ commit }, data) {
      commit("ADD_API_KEY", data);
    },
  },
});

export default store;

// export const ROOT_DISPATCH = Object.freeze({ root: true });
