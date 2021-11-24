import './assets/reset.css'
import './assets/rem.js'
import './assets/resetVant.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Search,Icon,Tab, Tabs,Tabbar, TabbarItem  } from 'vant'

Vue.use(Button).use(Search).use(Icon)
.use(Tab).use(Tabs).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
