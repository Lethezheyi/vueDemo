import './assets/rem.js'
import './assets/reset.css'
import './assets/reset_vant.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Swipe, SwipeItem,NavBar,Icon,Sticky,Tabbar,TabbarItem,Notify,PullRefresh,Toast,Loading,Area,Grid,GridItem,ActionSheet,Divider} from 'vant'; //按需引入vant组件

Vue.config.productionTip = false
Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar)
.use(Icon).use(Sticky).use(Tabbar).use(TabbarItem).use(Notify)
.use(PullRefresh).use(Toast).use(Loading).use(Area).use(Grid).use(GridItem).use(ActionSheet).use(Divider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
