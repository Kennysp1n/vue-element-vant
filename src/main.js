import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vant)

Vue.prototype.$screenWidth = screen.availWidth

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
