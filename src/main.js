import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require("./assets/main.scss")
require("@fortawesome/fontawesome-free")

new Vue({
  render: h => h(App),
}).$mount('#app')
