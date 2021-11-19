import './assets/resetVant.css'
import './assets/reset.css'
import './assets/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Col, Row,Icon,Field,
  Cell, CellGroup,Tab, Tabs,Swipe, 
  SwipeItem,Grid, GridItem,CountDown,
  Tabbar, TabbarItem,Sidebar, SidebarItem  } from 'vant'

Vue.use(Button).use(Col).use(Row).use(Icon)
.use(Field).use(Cell).use(CellGroup).use(Tab)
.use(Tabs).use(Swipe).use(SwipeItem).use(Grid)
.use(GridItem).use(CountDown).use(Tabbar)
.use(TabbarItem).use(Sidebar).use(SidebarItem);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
