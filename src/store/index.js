import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: "c924afc561b84f1f80707784e0d1473c", 
    browserHistory: JSON.parse(localStorage.getItem("browserHistory")) || [],
  },
  mutations: {
    ADD_API_KEY: (state, data) => {
      state.apiKey = data;
    },
    ADD_HISTORY: (state, data) => {
     
      state.browserHistory.push(data);
      localStorage.setItem(
        "browserHistory",
        JSON.stringify(state.browserHistory)
      ); 
    },

    ADD_NEWS: (state, data) => {
      // state.article = data;
      //sessionStorage.setItem("article", state.article);
      state.author = data.author;
      sessionStorage.setItem("author", state.author);
      state.title = data.title;
      sessionStorage.setItem("title", state.title);
      state.description = data.description;
      sessionStorage.setItem("description", state.description);
      state.url = data.url;
      sessionStorage.setItem("url", state.url);
      state.urlToImage = data.urlToImage;
      sessionStorage.setItem("urlToImage", state.urlToImage);
      state.publishedAt = data.publishedAt;
      sessionStorage.setItem("publishedAt", state.publishedAt);
      state.content = data.content;
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

export const ROOT_DISPATCH = Object.freeze({ root: true });
