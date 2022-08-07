import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: "c924afc561b84f1f80707784e0d1473c",
    slectedNews: [],
    browserHistory: [],
  },
  mutations: {
    ADD_API_KEY: (state, data) => {
      state.apiKey = data;
      localStorage.setItem("apiKey", state.apiKey);
    },
    ADD_HISTORY: (state, data) => {
     console.log("path",data.path)
     console.log("date",data.date)

      state.browserHistory.push(data);
      // console.log("history",state.browserHistory)
    },

    ADD_NEWS: (state, data) => {
      state.author = data.author;
      //console.log(state.author)
      sessionStorage.setItem("author", state.author);
      state.title = data.title;
      // console.log(state.title)
      sessionStorage.setItem("title", state.title);
      state.description = data.description;
      //  console.log(state.description)
      sessionStorage.setItem("description", state.description);
      state.url = data.url;
      //  console.log(state.url)
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
  },
});

export default store;

export const ROOT_DISPATCH = Object.freeze({ root: true });
