import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: "f9c303ef82ef4dca87dd80fb5037106d",
    slectedNews: [],
  },
  mutations: {
    ADD_API_KEY: (state, data) => {
      state.apiKey = data;
      localStorage.setItem("apiKey", state.apiKey);
    },
    ADD_NEWS: (state, data) => {
      state.author = data.author;
      console.log(state.author)
      sessionStorage.setItem("author", state.author);
      state.title = data.title;
      console.log(state.title)
      sessionStorage.setItem("title", state.title);
      state.description = data.description;
      console.log(state.description)
      sessionStorage.setItem("description", state.description);
      state.url = data.url;
      console.log(state.url)
      sessionStorage.setItem("url", state.url);
      state.urlToImage = data.urlToImage;
      sessionStorage.setItem("urlToImage", state.urlToImage);
      state.publishedAt = data.publishedAt;
      sessionStorage.setItem("publishedAt", state.publishedAt);
      state.content = data.content;
      sessionStorage.setItem("content", state.content);
     var car = window.sessionStorage.getItem("author");

       console.log("car",car);
    },
  },

  actions: {
    addNews({ commit }, data) {
      commit("ADD_NEWS", data);
    },
  },
});

export default store;

export const ROOT_DISPATCH = Object.freeze({ root: true });
