import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import store from "./store/store";

import App from './App.vue'
new Vue({
  render: (h) => h(App),
  store
}).$mount('#app')
