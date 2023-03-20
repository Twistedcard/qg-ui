import Vue from 'vue'
import App from './App.vue'

import  '../components/css/common.css'
import card from '../components/lib/index'

Vue.use(card)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
