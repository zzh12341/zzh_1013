import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from './lib/i18n'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// Echarts
import Echarts from 'echarts'
Vue.use(Echarts)
Vue.prototype.echarts = Echarts

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
