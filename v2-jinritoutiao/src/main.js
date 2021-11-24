import './assets/reset.css'
import './assets/rem.js'
import './assets/resetVant.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {Button,Search,Icon,Tab, Tabs,Tabbar, TabbarItem,Sticky  } from 'vant'

axios.defaults.baseURL = '/api';

Vue.use(Button).use(Search).use(Icon)
.use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Sticky);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
