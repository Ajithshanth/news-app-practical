import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import moment from 'moment';
import "./index.css";
import axios from './services/http-common';
import store from './store/index'
import router from "./router/index"

Vue.prototype.$http = axios; 
Vue.config.productionTip = false

new Vue({
  vuetify, 
  store,
  moment,
  router,
  render: h => h(App)
}).$mount('#app')
